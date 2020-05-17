import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AppContainer } from 'react-hot-loader';
import { ConnectedRouter } from 'connected-react-router';
import App from './root';
import Loader from './components/common/Loader';
import configureStore from './store';
import { history } from './utils/history';
import './assets/css/index.css';

const { persistor, store } = configureStore();

function render(Component) {
  ReactDOM.render(
    <AppContainer warnings={false}>
      <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <ConnectedRouter history={history}>
            <Component />
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
}

render(App);

if (module.hot) {
  module.hot.accept('./root', () => {
    const NextApp = require('./root').default;
    render(NextApp);
  });
}
