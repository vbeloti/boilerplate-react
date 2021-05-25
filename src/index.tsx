import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

import App from './App';
import AppProvider from './contexts';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!', process.env.NODE_ENV);
}

ReactDOM.render(
  <AppProvider>
    <Router>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </Router>
  </AppProvider>,
  document.getElementById('root')
);
