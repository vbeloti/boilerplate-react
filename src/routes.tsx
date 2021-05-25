import { Redirect } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import { NotFound } from './pages';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={() => <h1>Inicial Page</h1>} />
    <Route path="/healthcheck" component={() => <h1>ok</h1>} />
    <Route path="/ops" component={NotFound} />
    <Route path="*">
      <Redirect to="/ops" />
    </Route>
  </Switch>
);

export default Routes;
