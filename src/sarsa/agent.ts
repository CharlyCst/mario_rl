import sprites from "./sprites";
import { RIGHT, LEFT, UP, BOTTOM, blockSize } from "./const";

const nbActions = 4;

export default class Agent {
    x: number;
    y: number;
    Q: number[][][];
    gamma: number;
    lastReward?: number;
    lastAction: number;
    lastX: number;
    lastY: number;
    policy: (Q: number[]) => number;

    constructor(
        height: number,
        width: number,
        policy: (Q: number[]) => number
    ) {
        this.gamma = 0.8;
        this.policy = policy;
        this.lastAction = BOTTOM;
        this.x = this.y = this.lastX = this.lastY = 0;

        this.Q = [];
        for (let i = 0; i < width; i++) {
            const Qrow: number[][] = [];
            for (let j = 0; j < height; j++) {
                Qrow.push(new Array(nbActions).fill(0));
            }
            this.Q.push(Qrow);
        }
    }

    newRun() {
        this.lastX = this.x = 0;
        this.lastY = this.y = 0;
        this.lastReward = undefined;
        this.lastAction = BOTTOM;
    }

    chooseAction() {
        const a = this.policy(this.Q[this.x][this.y]);
        if (this.lastReward != undefined) {
            const deltaQ =
                this.lastReward +
                this.gamma * this.Q[this.x][this.y][a] -
                this.Q[this.lastX][this.lastY][this.lastAction];
            this.Q[this.lastX][this.lastY][this.lastAction] += deltaQ;
        }
        this.lastAction = a;
        return a;
    }

    getReward(r: number) {
        this.lastReward = r;
    }

    newPosition(x: number, y: number) {
        this.lastX = this.x;
        this.lastY = this.y;
        this.x = x;
        this.y = y;
    }

    getSprite(t: number) {
        switch (this.lastAction) {
            case UP:
                switch (t % 4) {
                    case 0:
                        return sprites.marioBack;
                    case 1:
                        return sprites.marioBack1;
                    case 2:
                        return sprites.marioBack;
                    case 3:
                        return sprites.marioBack2;
                }
            case RIGHT:
                switch (t % 4) {
                    case 0:
                        return sprites.marioRight;
                    case 1:
                        return sprites.marioRight1;
                    case 2:
                        return sprites.marioRight;
                    case 3:
                        return sprites.marioRight2;
                }
            case BOTTOM:
                switch (t % 4) {
                    case 0:
                        return sprites.marioFace;
                    case 1:
                        return sprites.marioFace1;
                    case 2:
                        return sprites.marioFace;
                    case 3:
                        return sprites.marioFace2;
                }
            case LEFT:
                switch (t % 4) {
                    case 0:
                        return sprites.marioLeft;
                    case 1:
                        return sprites.marioLeft1;
                    case 2:
                        return sprites.marioLeft;
                    case 3:
                        return sprites.marioLeft2;
                }
            default:
                console.log(
                    "Failed to get sprite for agent: " + this.lastAction
                );
                return sprites.marioFace;
        }
    }

    draw(ctx: CanvasRenderingContext2D, t: number) {
        const dx = ((this.x - this.lastX) * ((t % 4) + 1)) / 4;
        const dy = ((this.y - this.lastY) * ((t % 4) + 1)) / 4;

        ctx.drawImage(
            this.getSprite(t),
            blockSize * (this.lastX + dx),
            blockSize * (this.lastY + dy) - blockSize / 2
        );
    }
}
