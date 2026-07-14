import './App.css';
import Post from './post.js';
import React from 'react';
import blog_photo from './blog_photo.png';
import Header from './Header.js';
import Register from './register.js';
import LoginPage from './pages/LoginPage.js';
import Layout from './Layout.js';
import { Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage.js';
import RegisterPage from './pages/RegisterPage.js';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;