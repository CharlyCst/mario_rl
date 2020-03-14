import * as preact from "preact";
import { Route, Router, RouterOnChangeArgs } from "preact-router";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Home from "../routes/home";
import Profile from "../routes/profile";
import Header from "./header";

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
                    <Route path="/" component={Home} />
                    <Route path="/profile/" component={Profile} user="me" />
                    <Route path="/profile/:user" component={Profile} />
                </Router>
            </ThemeProvider>
        </div>
    );
};

export default App;
