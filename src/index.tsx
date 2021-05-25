import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!', process.env.NODE_ENV);
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
