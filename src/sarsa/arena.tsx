import * as preact from "preact";
import { useRef, useEffect } from "preact/hooks";
import { Map } from "./core/map";
import { blockSize } from "./core/const";
import { sleep } from "./core/utils";

export const Arena = (props: { map: Map }) => {
    const canvas = useRef<null | HTMLCanvasElement>(null);

    const draw = async () => {
        if (canvas.current == null) return;

        const ctx = canvas.current.getContext("2d");
        if (ctx == null) return;

        ctx.translate(blockSize, blockSize);
        while (true) {
            props.map.draw(ctx);
            await sleep(props.map.refreshRate);
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
            // style="margin:2rem"
        />
    );
};
