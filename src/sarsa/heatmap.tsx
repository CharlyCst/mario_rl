import { h } from "preact";
import { useRef, useEffect } from "preact/hooks";
import { blockSize, UP, BOTTOM, RIGHT, LEFT } from "./const";
import { sleep } from "./utils";
import { Map } from "./sarsa";
import Agent from "./agent";

const color1 = [255, 0, 255];
const color2 = [0, 255, 255];

const scale = 0.8;

const getColor = (q: number) => {
    const percent = Math.min(1, Math.max(0, 0.5 + scale * q));
    return `rgb(
        ${Math.floor(color2[0] + (color1[0] - color2[0]) * percent)},
        ${Math.floor(color2[1] + (color1[1] - color2[1]) * percent)},
        ${Math.floor(color2[2] + (color1[2] - color2[2]) * percent)})`;
};

const drawQValues = (
    ctx: CanvasRenderingContext2D,
    Q: number[][][],
    w: number,
    h: number
) => {
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 1;
    for (let i = 0; i < w; i++) {
        for (let j = 0; j < h; j++) {
            let q = 0;
            for (const val of Q[i][j]) {
                q += val;
            }
            q = q / 4;

            ctx.fillStyle = getColor(q);
            ctx.fillRect(i * blockSize, j * blockSize, blockSize, blockSize);

            const x =
                (Q[i][j][RIGHT] - Q[i][j][LEFT]) * scale * blockSize * 0.5;
            const y = (Q[i][j][BOTTOM] - Q[i][j][UP]) * scale * blockSize * 0.5;

            ctx.beginPath();
            ctx.moveTo((i + 0.5) * blockSize, (j + 0.5) * blockSize);
            ctx.lineTo((i + 0.5) * blockSize + x, (j + 0.5) * blockSize + y);
            ctx.stroke();
        }
    }
};

export const HeatMap = (props: { map: Map; agent: Agent }) => {
    const canvas = useRef<null | HTMLCanvasElement>(null);

    const draw = async () => {
        if (canvas.current == null) return;

        const ctx = canvas.current.getContext("2d");
        if (ctx == null) return;

        ctx.translate(blockSize, blockSize);
        while (true) {
            drawQValues(ctx, props.agent.Q, props.map.w, props.map.h);
            await sleep(200);
        }
    };

    useEffect(() => {
        draw();
    });

    return (
        <canvas
            width={(2 + props.map.w) * blockSize}
            height={(3 + props.map.h) * blockSize}
            ref={canvas}
            style="margin:2rem"
        />
    );
};
