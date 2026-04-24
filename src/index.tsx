import ReactDOM from 'react-dom/client';
import App from 'App';
import { Provider } from 'react-redux';
import store from 'store';
import 'assets/css/base.scss';
import 'assets/css/style.scss';

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('root element를 찾을 수 없습니다.');
const root = ReactDOM.createRoot(rootEl);root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

