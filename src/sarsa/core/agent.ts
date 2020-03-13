import sprites from "./sprites";
import { RIGHT, LEFT, UP, BOTTOM, blockSize } from "./const";
import { epsilonGreedy, greedy, softmax } from "./policies";

const nbActions = 4;

export default class Agent {
    Q: number[][][];
    learningRate = 0.3;
    gamma = 0.8;
    epsilon = 0.2;
    softmax = false;
    QLearning = false;
    nSteps = 1;
    x: number;
    y: number;
    lastX: number[];
    lastY: number[];
    lastRewards: number[] = [];
    lastActions: number[];
    lastGreedyAction: number;

    constructor(height: number, width: number) {
        this.lastActions = [BOTTOM];
        this.x = this.y = 0;
        this.lastX = [0];
        this.lastY = [0];

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
        const a = this.lastActions.shift();
        for (let n = this.nSteps; n > 0; n--) {
            this.reinforce(n, a);
        }

        this.x = 0;
        this.y = 0;
        this.lastX = [0];
        this.lastY = [0];
        this.lastRewards = [];
        this.lastActions = [BOTTOM];
    }

    chooseAction() {
        const Q = this.Q[this.x][this.y];
        let a: number;
        if (this.softmax) {
            a = softmax(Q);
        } else a = epsilonGreedy(this.epsilon, Q);
        this.lastGreedyAction = greedy(Q);

        this.reinforce(this.nSteps, a);
        this.lastActions.unshift(a);
        return a;
    }

    reinforce(n: number, a: number) {
        if (this.lastRewards.length < n) {
            return;
        }
        let deltaQ = -this.Q[this.lastX[n - 1]][this.lastY[n - 1]][
            this.lastActions[n - 1]
        ];
        let discount = 1;
        for (let i = n - 1; i >= 0; i--) {
            deltaQ += this.lastRewards[i] * discount;
            discount *= this.gamma;
        }

        if (this.QLearning) {
            deltaQ += discount * this.Q[this.x][this.y][this.lastGreedyAction];
        } else {
            deltaQ += discount * this.Q[this.x][this.y][a];
        }

        this.Q[this.lastX[n - 1]][this.lastY[n - 1]][this.lastActions[n - 1]] +=
            this.learningRate * deltaQ;

        // Free memory
        this.lastActions.pop();
        this.lastRewards.pop();
        this.lastX.pop();
        this.lastY.pop();
    }

    getReward(r: number) {
        this.lastRewards.unshift(r);
    }

    newPosition(x: number, y: number) {
        this.lastX.unshift(this.x);
        this.lastY.unshift(this.y);
        this.x = x;
        this.y = y;
    }

    getSprite(t: number) {
        switch (this.lastActions[0]) {
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
        const dx = ((this.x - this.lastX[0]) * ((t % 4) + 1)) / 4;
        const dy = ((this.y - this.lastY[0]) * ((t % 4) + 1)) / 4;

        ctx.drawImage(
            this.getSprite(t),
            blockSize * (this.lastX[0] + dx),
            blockSize * (this.lastY[0] + dy) - blockSize / 2
        );
    }
}
