import Routes from './routes';
import AppProvider from './contexts';

import './styles/global.css';

function App() {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}

export default App;
