import * as preact from "preact";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { initSarsa } from "../../sarsa/core/map";
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

    const map = initSarsa();
    const agent = map.agents[0];

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
