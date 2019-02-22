import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
// ! Routes
import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from './shared/routes/AppRouter'
// ! Styless
import './base.css'
import { ThemeProvider } from 'react-jss'
import theme from './shared/themes/v1'

render(
  <ThemeProvider theme={theme}>
    <Router>
      <AppRouter/>
    </Router>
  </ThemeProvider>
, document.getElementById('root'));

serviceWorker.unregister();
