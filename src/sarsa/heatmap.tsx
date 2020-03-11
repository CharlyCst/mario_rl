import { h } from "preact";
import { useRef, useEffect } from "preact/hooks";
import { blockSize, UP, BOTTOM, RIGHT, LEFT } from "./core/const";
import { sleep } from "./core/utils";
import { Map } from "./core/sarsa";
import Agent from "./core/agent";

const color1 = [255, 0, 255];
const color2 = [0, 255, 255];

const getColor = (q: number) => {
    const percent = Math.min(1, Math.max(0, 1 / (1 + Math.exp(-3 * q))));
    return `rgb(
        ${Math.floor(color2[0] + (color1[0] - color2[0]) * percent)},
        ${Math.floor(color2[1] + (color1[1] - color2[1]) * percent)},
        ${Math.floor(color2[2] + (color1[2] - color2[2]) * percent)})`;
};

const drawScale = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
    ctx.strokeStyle = "#000000";
    const gradient = ctx.createLinearGradient(
        0,
        (0.5 + h) * blockSize,
        w * blockSize,
        (0.9 + h) * blockSize
    );
    gradient.addColorStop(1, `rgb(${color1[0]},${color1[1]},${color1[2]})`);
    gradient.addColorStop(0, `rgb(${color2[0]},${color2[1]},${color2[2]})`);
    ctx.fillStyle = gradient;
    ctx.strokeRect(0, (0.5 + h) * blockSize, w * blockSize, 0.4 * blockSize);
    ctx.fillRect(0, (0.5 + h) * blockSize, w * blockSize, 0.4 * blockSize);

    ctx.font = "14px sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = "#000000";
    ctx.fillText("0", (w * blockSize) / 2, (1.5 + h) * blockSize);
    ctx.fillText("+∞", w * blockSize, (1.5 + h) * blockSize);
    ctx.fillText("-∞", 0, (1.5 + h) * blockSize);
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
            ctx.fillStyle = getColor(0);
            ctx.fillRect(i * blockSize, j * blockSize, blockSize, blockSize);
            ctx.strokeRect(i * blockSize, j * blockSize, blockSize, blockSize);

            ctx.fillStyle = getColor(Q[i][j][UP]);
            ctx.beginPath();
            ctx.moveTo((i + 0.5) * blockSize, (j + 0.5) * blockSize);
            ctx.lineTo((i + 1) * blockSize, j * blockSize);
            ctx.lineTo(i * blockSize, j * blockSize);
            ctx.fill();

            ctx.fillStyle = getColor(Q[i][j][RIGHT]);
            ctx.beginPath();
            ctx.moveTo((i + 0.5) * blockSize, (j + 0.5) * blockSize);
            ctx.lineTo((i + 1) * blockSize, j * blockSize);
            ctx.lineTo((i + 1) * blockSize, (j + 1) * blockSize);
            ctx.fill();

            ctx.fillStyle = getColor(Q[i][j][BOTTOM]);
            ctx.beginPath();
            ctx.moveTo((i + 0.5) * blockSize, (j + 0.5) * blockSize);
            ctx.lineTo((i + 1) * blockSize, (j + 1) * blockSize);
            ctx.lineTo(i * blockSize, (j + 1) * blockSize);
            ctx.fill();

            ctx.fillStyle = getColor(Q[i][j][LEFT]);
            ctx.beginPath();
            ctx.moveTo((i + 0.5) * blockSize, (j + 0.5) * blockSize);
            ctx.lineTo(i * blockSize, (j + 1) * blockSize);
            ctx.lineTo(i * blockSize, j * blockSize);
            ctx.fill();
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

        drawScale(ctx, props.map.w, props.map.h);
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
