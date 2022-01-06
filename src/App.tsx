import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from './store';
// import  { NewContextProvider } from './providers/NewContextProvider';
import Router from './routes';
import Theme from './styles/theme'


function App() {
  return (
      <ThemeProvider theme={Theme}>
        {/* <NewContextProvider> */}
        <Provider store={store}>

          <Router />
        </Provider>
        {/* </NewContextProvider> */}
      </ThemeProvider>
  );
}

export default App;
