import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Reset.css';
import { Provider } from 'react-redux';
import Home from './components/Home';
import store from './Redux/Store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
