import React from "react"
import blog_photo from './blog_photo.png';

export default function Post() {
    return (
     <div className='post'>
        <img className='blog_photo' src={blog_photo}></img>
        <div className='texts'>
              <h2>Create easy diy survivor logos</h2>
              <p className='info'>
                <a className='author'>Dawid Paziko </a>
                <time>12/06/2025</time>
              </p>
              <p className='post-body'>In the code above, we import an image file named “myImage” from a specified path. Our component’s render method uses the image within the img tag. The img tag’s src attribute is set to the imported image, and the alt attribute is used to provide a text alternative for the image.</p>
        </div>
     </div>
    )
}