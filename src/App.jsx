import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import { store } from './app/store';
import { Provider } from 'react-redux';
import "./App.css"
import LoginPage from './components/LoginPage';
import Information from './components/Information';

const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/information" element={<Information />} />
      </Routes>
    </Router>
    </Provider>
  );
};

export default App;
