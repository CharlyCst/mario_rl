import sprites from "./sprites";
import Agent from "./agent";
import { epsilonGreedy } from "./policies";
import { RIGHT, LEFT, UP, BOTTOM, blockSize } from "./const";

// const height = 6;
// const width = 4;

export class Map {
    map: (Element | undefined)[][];
    agents: Agent[];
    w: number;
    h: number;
    t: number;
    turn: number;

    run = false;
    initialRendering = true;
    refreshRate = 200; // in ms

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

    restart() {
        this.t = 0;
        this.turn = 0;
        for (const agent of this.agents) {
            agent.initQ(this.h, this.w);
            agent.newRun();
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        if (!this.run && !this.initialRendering) return;
        this.initialRendering = false;

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

        this.t++;
        if (this.t % 4 != 0) return;

        // If a new turn begin
        this.turn++;

        for (const agent of this.agents) {
            const action = agent.chooseAction();
            if (this.map[agent.x][agent.y] != undefined) {
                agent.newRun();
                continue;
            }

            let newX = agent.x;
            let newY = agent.y;
            switch (action) {
                case UP:
                    if (agent.y > 0) newY--;
                    break;
                case RIGHT:
                    if (agent.x < this.w - 1) newX++;
                    break;
                case BOTTOM:
                    if (agent.y < this.h - 1) newY++;
                    break;
                case LEFT:
                    if (agent.x > 0) newX--;
                    break;
            }
            const elt = this.map[newX][newY];
            if (elt != undefined) {
                agent.getReward(elt.reward);
            } else agent.getReward(0);
            agent.newPosition(newX, newY);
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

export class Reward extends Element {
    collision = false;
    reward = 1;
    reset = true;

    draw(ctx: CanvasRenderingContext2D, x: number, y: number, t: number) {
        ctx.drawImage(sprites.block, blockSize * x, blockSize * (y - 1.6));
        ctx.drawImage(sprites.blockShadow, blockSize * x, blockSize * y);
    }
}

export class SmallReward extends Element {
    collision = false;
    reward = 0.5;
    reset = true;

    draw(ctx: CanvasRenderingContext2D, x: number, y: number, t: number) {
        ctx.drawImage(sprites.redBlock, blockSize * x, blockSize * (y - 1.6));
        ctx.drawImage(sprites.blockShadow, blockSize * x, blockSize * y);
    }
}

export class Monster extends Element {
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
export function initSarsa(h: number, w: number) {
    const map = new Map(h, w);
    return map;
}
