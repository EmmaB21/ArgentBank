import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Layout from './components/Layout';
import Home from './pages/Home'
import User from './pages/User'
import Signin from './pages/Signin'
import Error from './pages/Error'

//Le router englobe le layout comportant le header et le footer ainsi que les routes vers chaque page
const App = () => {
  const token = useSelector(state => state.signIn.token)
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
