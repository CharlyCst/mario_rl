import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";

import { initSarsa } from "../../sarsa/core/sarsa";
import { Arena } from "../../sarsa/arena";
import { HeatMap } from "../../sarsa/heatmap";
import {
    Activate,
    LearningRatePicker,
    DiscountFactorPicker,
    StepsPicker
} from "../../sarsa/control";

const Home: FunctionalComponent = () => {
    const map = initSarsa();
    const agent = map.agents[0];
    return (
        <div class={style.home}>
            <Activate map={map} />
            <LearningRatePicker agent={agent} />
            <DiscountFactorPicker agent={agent} />
            <StepsPicker agent={agent} />
            <Arena map={map} />
            <HeatMap map={map} agent={agent} />
        </div>
    );
};

export default Home;
