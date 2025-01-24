import ReactDOM from 'react-dom/client';
import App from 'App';
import { Provider } from 'react-redux';
import store from 'store';
import 'assets/css/base.scss';
import 'assets/css/style.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

