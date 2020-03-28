import * as preact from "preact";
import { Route, Router, RouterOnChangeArgs } from "preact-router";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Home from "../routes/home";
import Cliff from "../routes/cliff";
import Multi from "../routes/multi";
import Parameters from "../routes/parameters";
import Policies from "../routes/policies";
import Small from "../routes/small";
Policies;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
if ((module as any).hot) {
    // tslint:disable-next-line:no-var-requires
    require("preact/debug");
}

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#7f7fff"
        },
        secondary: {
            main: "#ad52ff"
        }
    }
});

const App: preact.FunctionalComponent = () => {
    let currentUrl: string;
    const handleRoute = (e: RouterOnChangeArgs) => {
        currentUrl = e.url;
    };

    return (
        <div
            id="app"
            style="display: flex; justify-content: center; align-items: center;"
        >
            <ThemeProvider theme={theme}>
                <Router onChange={handleRoute}>
                    <Route path="/mario_rl" component={Home} />
                    <Route path="/mario_rl/cliff" component={Cliff} />
                    <Route path="cliff" component={Cliff} />
                    <Route path="/mario_rl/multi" component={Multi} />
                    <Route path="multi" component={Multi} />
                    <Route path="/mario_rl/parameters" component={Parameters} />
                    <Route path="parameters" component={Parameters} />
                    <Route path="/mario_rl/policies" component={Policies} />
                    <Route path="policies" component={Policies} />
                    <Route path="/mario_rl/small" component={Small} />
                    <Route path="small" component={Small} />
                    <Route default component={Home} />
                </Router>
            </ThemeProvider>
        </div>
    );
};

export default App;
