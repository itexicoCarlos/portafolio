import React from "react";
import { Route, Switch } from "react-router-dom";
// ? components
import App from "../../components/App";
import Header from "../components/Header";
import Home from '../../components/Home';
import Error404 from "../components/Error404";
import Login from '../../components/Login/'
// ? styles
import injectSheet from "react-jss";

const styles = theme => ({
  container: {
    height: "100%",
    width: '100%',
  }
});

const AppRouter = ({ classes }) => {
  return (
    <div className={classes.container}>
      <App>
        <Header />
        <Switch>
          <Route path='/' component={Home} exact ></Route>
          <Route path='/login' component={Login} exact></Route>
          <Route component={Error404} />
        </Switch>
      </App>
    </div>
  );
};

const AppStyles = injectSheet(styles)(AppRouter);
export default AppStyles;
