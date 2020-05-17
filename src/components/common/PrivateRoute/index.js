import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ path, component: Component }) {
  const token = localStorage.getItem('token');
  return (
    <Route
      path={path}
      render={(props) => {
        return token ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
}
