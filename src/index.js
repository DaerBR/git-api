import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App } from './components/App/App';
import store from "./store";
import { ThemeProvider } from "@material-ui/styles";
import themeSettings from './styles/theme';

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={themeSettings}>
            <App />
        </ThemeProvider>
    </Provider>,
    document.querySelector('#app')
);