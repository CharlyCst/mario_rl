import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";

import { initSarsa } from "../../sarsa/sarsa";
import { Canvas } from "../../sarsa/canvas";

const Home: FunctionalComponent = () => {
    const map = initSarsa();
    return (
        <div class={style.home}>
            <Canvas map={map} />
        </div>
    );
};

export default Home;
