import { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';

const initialState = {
  darkMode: false,
};

const appCtx = createContext(initialState);
const { Provider } = appCtx;

const AppCtxProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export const useAppContext = () => {
  const context = useContext(appCtx);
  if (context === undefined) {
    throw new Error('useAppContext must be used within the AppCtxProvider');
  }
  return context;
};

export const withAppContext = Component => props =>
  (
    <AppCtxProvider>
      <Component {...props} />
    </AppCtxProvider>
  );
