import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import { store } from './app/store';
import { Provider } from 'react-redux';
import "./App.css"
import LoginPage from './components/LoginPage';
import Information from './components/Information';
import Weather from './components/SideComponents/Weather';
import Global from './components/SideComponents/Global';
import Activities from './components/SideComponents/Activities';
import Design from './components/SideComponents/Design';
import Social from './components/SideComponents/Social';
import Users from './components/SideComponents/Users';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <Provider store={store}>
    <Router>
    <Sidebar/>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/information" element={<Information />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/design" element={<Design />} />
        <Route path="/global" element={<Global />} />
        <Route path="/social" element={<Social />} />
        <Route path="/users" element={<Users />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </Router>
    </Provider>
  );
};

export default App;
