import sprites, { blockSize } from "./sprites";
import Agent from "./agent";
import { epsilonGreedy } from "./policies";
import { RIGHT, LEFT, UP, BOTTOM } from "./const";

const height = 6;
const width = 4;

export class Map {
    map: (Element | undefined)[][];
    agents: Agent[];
    w: number;
    h: number;
    t: number;
    turn: number;

    constructor(height: number, width: number) {
        this.turn = 0;
        this.t = 0;
        this.w = width;
        this.h = height;
        this.agents = [];
        this.map = [];
        for (let i = 0; i < width; i++) {
            const MapRow = new Array(height);
            this.map.push(MapRow);
        }
    }

    addAgent(a: Agent) {
        this.agents.push(a);
    }

    addElement(e: Element, x: number, y: number) {
        this.map[x][y] = e;
    }

    addReward(value: number, x: number, y: number) {}

    draw(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(sprites.borderLeftUp, -blockSize, -blockSize);
        ctx.drawImage(sprites.borderRightUp, blockSize * this.w, -blockSize);
        for (let i = 0; i < this.w; i++) {
            ctx.drawImage(sprites.borderTop, blockSize * i, -blockSize);
        }
        for (let j = 0; j < this.h; j++) {
            for (let i = 0; i < this.w; i++) {
                ctx.drawImage(sprites.ground, blockSize * i, blockSize * j);
            }
        }
        for (let j = 0; j < this.h; j++) {
            ctx.drawImage(sprites.borderLeft, -blockSize, blockSize * j);
            ctx.drawImage(
                sprites.borderRight,
                blockSize * this.w,
                blockSize * j
            );
        }
        for (let j = 0; j < this.h; j++) {
            // Draw ground, elts and agents
            for (let i = 0; i < this.w; i++) {
                const elt = this.map[i][j];
                if (elt != undefined) elt.draw(ctx, i, j, this.t);
                this.drawAgent(ctx, i, j);
            }
        }
        for (let i = 0; i < this.w; i++) {
            ctx.drawImage(
                sprites.borderBottom,
                blockSize * i,
                blockSize * this.h
            );
            ctx.drawImage(
                sprites.borderBottom2,
                blockSize * i,
                blockSize * (this.h + 1)
            );
        }
        ctx.drawImage(sprites.borderBottomLeft, -blockSize, blockSize * this.h);
        ctx.drawImage(
            sprites.borderBottomLeft2,
            -blockSize,
            blockSize * (this.h + 1)
        );
        ctx.drawImage(
            sprites.borderBottomRight,
            blockSize * this.w,
            blockSize * this.h
        );
        ctx.drawImage(
            sprites.borderBottomRight2,
            blockSize * this.w,
            blockSize * (this.h + 1)
        );

        // for (const agent of this.agents) {
        //     agent.draw(ctx);
        // }

        this.t++;
        if (this.t % 4 != 0) return;

        // If a new turn begin
        this.turn++;

        for (const agent of this.agents) {
            const action = agent.chooseAction();
            switch (action) {
                case UP:
                    if (agent.y > 0) agent.newPosition(agent.x, agent.y - 1);
                    else agent.newPosition(agent.x, agent.y);
                    break;
                case RIGHT:
                    if (agent.x < this.w - 1)
                        agent.newPosition(agent.x + 1, agent.y);
                    else agent.newPosition(agent.x, agent.y);
                    break;
                case BOTTOM:
                    if (agent.y < this.h - 1)
                        agent.newPosition(agent.x, agent.y + 1);
                    else agent.newPosition(agent.x, agent.y);
                    break;
                case LEFT:
                    if (agent.x > 0) agent.newPosition(agent.x - 1, agent.y);
                    else agent.newPosition(agent.x, agent.y);
                    break;
            }
        }
    }

    drawAgent(ctx: CanvasRenderingContext2D, x: number, y: number) {
        for (const agent of this.agents) {
            if (agent.x == x && agent.y == y) {
                agent.draw(ctx, this.t);
            }
        }
    }
}

abstract class Element {
    abstract collision: boolean;
    abstract reward: number;
    abstract reset: boolean;

    draw(ctx: CanvasRenderingContext2D, x: number, y: number, t: number) {}
}

class Reward extends Element {
    collision = false;
    reward = 1;
    reset = true;

    draw(ctx: CanvasRenderingContext2D, x: number, y: number, t: number) {
        ctx.drawImage(sprites.block, blockSize * x, blockSize * (y - 1.6));
        ctx.drawImage(sprites.blockShadow, blockSize * x, blockSize * y);
    }
}

class Monster extends Element {
    collision = false;
    reward = -1;
    reset = true;

    draw(ctx: CanvasRenderingContext2D, x: number, y: number, t: number) {
        switch (t % 4) {
            case 0:
                ctx.drawImage(sprites.goomba, blockSize * x, blockSize * y);
                break;
            case 1:
                ctx.drawImage(sprites.goomba2, blockSize * x, blockSize * y);
                break;
            case 2:
                ctx.drawImage(sprites.goomba, blockSize * x, blockSize * y);
                break;
            case 3:
                ctx.drawImage(sprites.goomba3, blockSize * x, blockSize * y);
                break;
        }
    }
}

// Initialize the map and Q values
export function initSarsa() {
    const map = new Map(height, width);

    map.addAgent(new Agent(height, width, epsilonGreedy(0.2)));
    map.addElement(new Reward(), 2, 2);
    map.addElement(new Monster(), 3, 3);

    return map;
}
