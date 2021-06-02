import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { startChecking } from "../actions/auth";
import { LoginScreen } from "../components/auth/LoginScreen";
import { CalendarScreen } from "../components/calendar/CalendarScreen";

export const AppRouter = () => {


  const dispatch = useDispatch();
  const{checking} = useSelector(state => state.auth);

  useEffect(async () => {
    dispatch(startChecking());
  }, [dispatch ])

  if(checking){
    return(<h5>Espere...</h5>)
    }

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          {/* <Route exact path="/register" component={RegisterScreen} /> */}
          <Route exact path="/" component={CalendarScreen} />

          <Redirect to='/' />
        </Switch>
      </div>
    </Router>
  );
};
