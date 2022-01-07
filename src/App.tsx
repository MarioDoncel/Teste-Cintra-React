import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from './store';
import  { CategoriesProvider } from './contextProviders/CategoriesProvider';
import Router from './routes';
import Theme from './styles/theme'


function App() {
  return (
      <ThemeProvider theme={Theme}>
        <Provider store={store}>
        <CategoriesProvider>

          <Router />
        </CategoriesProvider>
        </Provider>
      </ThemeProvider>
  );
}

export default App;
