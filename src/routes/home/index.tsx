import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";

import { initSarsa } from "../../sarsa/sarsa";
import { Arena } from "../../sarsa/arena";
import { HeatMap } from "../../sarsa/heatmap";

const Home: FunctionalComponent = () => {
    const map = initSarsa();
    const agent = map.agents[0];
    return (
        <div class={style.home}>
            <Arena map={map} />
            <HeatMap map={map} agent={agent} />
        </div>
    );
};

export default Home;
