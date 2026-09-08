import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import { StoreContext } from './contexts/StoreContext';
import { RootStore } from './stores/RootStore';

const rootStore = new RootStore();

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StoreContext.Provider value={rootStore}>
      <App />
    </StoreContext.Provider>
  </BrowserRouter>
);
