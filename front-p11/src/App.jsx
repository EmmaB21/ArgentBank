import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home'
import User from './pages/User'
import Signin from './pages/Signin'
import Error from './pages/Error'

const App = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/user" element={token ? <User /> : <Navigate to="/sign-in" />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
