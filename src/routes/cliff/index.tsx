import * as preact from "preact";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { initSarsa, Monster, Reward } from "../../sarsa/core/map";
import Agent from "../../sarsa/core/agent";
import { Arena } from "../../sarsa/arena";
import { HeatMap } from "../../sarsa/heatmap";
import {
    Activate,
    LearningRatePicker,
    DiscountFactorPicker,
    StepsPicker,
    Policy,
    LearningStrategy
} from "../../sarsa/control";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: "1px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center"
        },
        box: {
            margin: theme.spacing(1),
            marginTop: 0
        },
        arena: {
            margin: "auto",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center"
        }
    })
);

const Home: preact.FunctionalComponent = () => {
    const classes = useStyles();

    const height = 6;
    const width = 4;
    const agent = new Agent(height, width, 1, 0);
    const map = initSarsa(height, width);
    const monster = new Monster();
    map.addAgent(agent);
    map.addElement(monster, 0, 0);
    map.addElement(monster, 0, 1);
    map.addElement(monster, 0, 2);
    map.addElement(monster, 0, 3);
    map.addElement(monster, 0, 4);
    map.addElement(monster, 0, 5);
    map.addElement(new Reward(), 1, 3);

    monster.reward = -1;
    agent.gamma = 0.7;
    agent.epsilon = 0.4;

    return (
        <div className={classes.root}>
            <div className={classes.box}>
                {/* <LearningRatePicker agent={agent} />
                <DiscountFactorPicker agent={agent} />
                <StepsPicker agent={agent} /> */}
            </div>
            <div className={classes.box}>
                <Activate map={map} />
                <Policy agent={agent} />
                <LearningStrategy agent={agent} />
            </div>
            <div className={classes.arena}>
                <Arena map={map} />
                <HeatMap map={map} agent={agent} />
            </div>
        </div>
    );
};

export default Home;
