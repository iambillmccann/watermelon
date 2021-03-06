// React imports
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Material UI imports
import { MuiThemeProvider, useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

// My imports
import Dashboard from "./components/dashboard/Dashboard";
import AppHeader from "./components/layout/AppHeader";
import HomeDetail from "./components/houses/HomeDetail";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import HouseContextProvider from "./contexts/HouseContext";
import SessionContextProvider from "./contexts/SessionContext";
import LaunchPage from "./components/dashboard/LaunchPage";

const App = () => {
  const theme = useTheme();

  return (
    <BrowserRouter>
      <SessionContextProvider>
        <MuiThemeProvider theme={theme}>
          <HouseContextProvider>
            <CssBaseline />
            <AppHeader />
            <Container maxWidth="xl">
              <Box m={3}>
                <Switch>
                  <Route path="/" exact component={LaunchPage} />
                  <Route path="/dashboard" component={Dashboard} />
                  <Route path="/homes/:id" component={HomeDetail} />
                  <Route path="/signin" component={SignIn} />
                  <Route path="/signup" component={SignUp} />
                </Switch>
              </Box>
            </Container>
          </HouseContextProvider>
        </MuiThemeProvider>
      </SessionContextProvider>
    </BrowserRouter>
  );
};

export default App;
