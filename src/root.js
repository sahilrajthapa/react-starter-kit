import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '@src/components/common/PrivateRoute';
import indexRoutes from './routes';

function App() {
  return (
    <Switch>
      {indexRoutes.map((route, key) => {
        if (route.authenticated) {
          return (
            <PrivateRoute
              path={route.path}
              component={route.component}
              key={key}
            />
          );
        }

        return (
          <Route
            exact
            path={route.path}
            render={(props) => <route.component {...props} />}
            key={key}
          />
        );
      })}
    </Switch>
  );
}

export default App;
