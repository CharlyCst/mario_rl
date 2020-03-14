import * as preact from "preact";
import { useState } from "preact/hooks";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import SliderTMP from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
import RadioTMP from "@material-ui/core/Radio";
import RadioGroupTMP from "@material-ui/core/RadioGroup";
import FormControlLabelTMP from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CachedIcon from "@material-ui/icons/Cached";
import { Map } from "./core/map";
import Agent from "./core/agent";

// Todo: remove this, it is a Workaround for https://github.com/preactjs/preact-cli/issues/1030
const Radio: any = RadioTMP as any;
const RadioGroup: any = RadioGroupTMP as any;
const FormControlLabel: any = FormControlLabelTMP as any;
const Slider: any = SliderTMP as any;

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

// Todo: remove any, it is a Workaround for https://github.com/preactjs/preact-cli/issues/1030
const ValueLabelComponent: any = (props: IToolTipProps) => {
    const { children, open, value } = props;

    return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
};

export const DiscountFactorPicker = (props: { agent: Agent }) => {
    const [discountFactor, setdiscountFactor] = useState(props.agent.gamma);
    const classes = useStyles();

    const handleChange = (event: any, newValue: number | number[]) => {
        if (typeof newValue !== "number") {
            newValue = newValue[0];
        }
        props.agent.gamma = newValue;
        setdiscountFactor(newValue);
    };

    return (
        <div>
            <Typography gutterBottom>Discount Factor</Typography>
            <Slider
                min={0}
                max={1}
                step={0.02}
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

    const handleChange = (event: any, newValue: number | number[]) => {
        if (typeof newValue !== "number") {
            newValue = newValue[0];
        }
        props.agent.learningRate = newValue;
        setLearningRate(newValue);
    };

    return (
        <div>
            <Typography gutterBottom>Learning rate</Typography>
            <Slider
                min={0}
                max={1}
                step={0.02}
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

    const handleChange = (event: any, newValue: number | number[]) => {
        if (typeof newValue !== "number") {
            newValue = newValue[0];
        }
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

export const LearningStrategy = (props: { agent: Agent }) => {
    const [QLearning, setQLearning] = useState(props.agent.QLearning);

    const handleChange = () => {
        props.agent.QLearning = !QLearning;
        setQLearning(!QLearning);
    };

    return (
        <div>
            <RadioGroup
                aria-label="Policy"
                name="Policy"
                value={QLearning}
                onChange={handleChange}
            >
                <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label="Sarsa"
                />
                <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="Q-learning"
                />
            </RadioGroup>
        </div>
    );
};

export const Policy = (props: { agent: Agent }) => {
    const [softmax, setSoftmax] = useState(props.agent.softmax);
    const [epsilon, setEpsilon] = useState(props.agent.epsilon);
    const classes = useStyles();

    const handleChange = () => {
        props.agent.softmax = !softmax;
        setSoftmax(!softmax);
    };

    const handleEpsilonChange = (event: any, newValue: number) => {
        props.agent.epsilon = newValue;
        setEpsilon(newValue);
    };

    return (
        <div>
            <RadioGroup
                aria-label="Policy"
                name="Policy"
                value={softmax}
                onChange={handleChange}
            >
                <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label="ε-greedy"
                />
                <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="Softmax"
                />
            </RadioGroup>
            <Typography gutterBottom>Epsilon</Typography>
            <Slider
                min={0}
                max={1}
                step={0.02}
                ValueLabelComponent={ValueLabelComponent}
                value={epsilon}
                onChange={handleEpsilonChange}
                className={classes.slider}
                disabled={softmax}
            />
        </div>
    );
};

export const Activate = (props: { map: Map }) => {
    const [run, setRun] = useState(props.map.run);

    return (
        <div>
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
            <IconButton
                aria-label="restart"
                onClick={() => props.map.restart()}
            >
                <CachedIcon fontSize="small" />
            </IconButton>
        </div>
    );
};
