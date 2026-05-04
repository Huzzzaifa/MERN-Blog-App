import './App.css';
import Post from './post.js';
import React from 'react';
import blog_photo from './blog_photo.png';

function App() {
  return (
    <main>
      <header>
        <a href='' className='logo'>MyBlog</a>
        <nav>
          <a href=''>Login</a>
          <a href=''>Register</a>
        </nav>
      </header>
      <Post />
      <Post />
      <Post />
    </main>
  );
}

export default App;
