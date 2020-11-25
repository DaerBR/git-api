import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import { App } from './components/App/App';
import reducers from './store/reducers';
import { ThemeProvider } from "@material-ui/styles";
import themeSettings from './styles/theme';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={themeSettings}>
            <App />
        </ThemeProvider>
    </Provider>,
    document.querySelector('#app')
);