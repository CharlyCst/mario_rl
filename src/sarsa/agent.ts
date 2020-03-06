import sprites, { blockSize } from "./sprites";
import {} from "./sarsa";

const nbActions = 4;

export default class Agent {
    x: number;
    y: number;
    Q: number[][][];
    policy: (Q: number[]) => number;

    constructor(
        height: number,
        width: number,
        policy: (Q: number[]) => number
    ) {
        this.policy = policy;
        this.x = 0;
        this.y = 0;

        this.Q = [];
        for (let i = 0; i < width; i++) {
            const Qrow: number[][] = [];
            for (let j = 0; j < height; j++) {
                Qrow.push(new Array(nbActions).fill(0));
            }
            this.Q.push(Qrow);
        }
    }

    chooseAction() {
        return this.policy(this.Q[this.x][this.y]);
    }

    newPosition(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(
            sprites.marioFace,
            blockSize * this.x,
            blockSize * this.y - blockSize / 2
        );
    }
}
