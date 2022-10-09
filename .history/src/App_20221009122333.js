import { BrowserRouter, Route, Switch } from "react-router-dom";
import ErrorBoundary from '../src/components/ErrorBoundary'
import LoginPa from "./components/pages/LoginPa";
import WelcomePa from "./components/pages/WelcomePa";
import DashboardPa from "./components/pages/DashboardPa";
// import Moment from 'react-moment';
import 'moment-timezone';

const App = () => {
  return (
    <>
    <ErrorBoundary>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={WelcomePa} />
          <Route exact path="/login" component={LoginPa} />
          <Route exact path="/dashboard" component={DashboardPa} />
        </Switch>
      </BrowserRouter>
      </ErrorBoundary>
    </>
  );
};

export default App; 
  