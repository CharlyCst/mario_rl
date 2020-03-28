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
            margin: theme.spacing(3),
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
    const agent = new Agent(height, width);
    const map = initSarsa(height, width);
    map.addAgent(agent);
    map.addElement(new Reward(), 3, 2);
    map.addElement(new Reward(), 1, 4);
    map.addElement(new Monster(), 3, 4);
    map.addElement(new Monster(), 2, 0);

    agent.nSteps = 3;

    return (
        <div className={classes.root}>
            <div className={classes.box}>
                <Activate map={map} />
                <LearningRatePicker agent={agent} />
                <DiscountFactorPicker agent={agent} />
                <StepsPicker agent={agent} />
            </div>
            <div className={classes.box}>
                <Policy agent={agent} />
            </div>
            <div className={classes.arena}>
                <Arena map={map} />
                <HeatMap map={map} agent={agent} />
            </div>
        </div>
    );
};

export default Home;
