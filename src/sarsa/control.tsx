import { h } from "preact";
import { useState } from "preact/hooks";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import { Map } from "./core/sarsa";
import Agent from "./core/agent";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        slider: {
            width: 100 + theme.spacing(3) * 2
        },
        margin: {
            height: theme.spacing(3)
        }
    })
);

interface IToolTipProps {
    children: React.ReactElement;
    open: boolean;
    value: number;
}

function ValueLabelComponent(props: IToolTipProps) {
    const { children, open, value } = props;

    return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

export const DiscountFactorPicker = (props: { agent: Agent }) => {
    const [discountFactor, setdiscountFactor] = useState(props.agent.gamma);
    const classes = useStyles();

    const handleChange = (event: any, newValue: number) => {
        props.agent.gamma = newValue;
        setdiscountFactor(newValue);
    };

    return (
        <div>
            <Typography gutterBottom>Discount Factor</Typography>
            <Slider
                min={0}
                max={1}
                step={0.01}
                ValueLabelComponent={ValueLabelComponent}
                value={discountFactor}
                onChange={handleChange}
                className={classes.slider}
            />
        </div>
    );
};

export const LearningRatePicker = (props: { agent: Agent }) => {
    const [learningRate, setLearningRate] = useState(props.agent.learningRate);
    const classes = useStyles();

    const handleChange = (event: any, newValue: number) => {
        props.agent.learningRate = newValue;
        setLearningRate(newValue);
    };

    return (
        <div>
            <Typography gutterBottom>Learning rate</Typography>
            <Slider
                min={0}
                max={1}
                step={0.01}
                ValueLabelComponent={ValueLabelComponent}
                value={learningRate}
                onChange={handleChange}
                className={classes.slider}
            />
        </div>
    );
};

export const StepsPicker = (props: { agent: Agent }) => {
    const [steps, setSteps] = useState(props.agent.nSteps);
    const classes = useStyles();

    const handleChange = (event: any, newValue: number) => {
        props.agent.nSteps = newValue;
        setSteps(newValue);
    };

    return (
        <div>
            <Typography gutterBottom>Number of steps</Typography>
            <Slider
                min={1}
                max={4}
                step={1}
                marks
                ValueLabelComponent={ValueLabelComponent}
                value={steps}
                onChange={handleChange}
                className={classes.slider}
            />
        </div>
    );
};

export const Activate = (props: { map: Map }) => {
    const [run, setRun] = useState(false);

    return (
        <FormControlLabel
            label={run ? "On" : "Off"}
            control={
                <Switch
                    checked={run}
                    onChange={() => {
                        props.map.run = !run;
                        setRun(!run);
                    }}
                />
            }
        />
    );
};
