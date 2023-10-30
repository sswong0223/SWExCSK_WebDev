import React from 'react'

import './../App.css';
import pic from './../friends.jpg'

const AboutMe = () => {

  return (
    <div className="aboutMe">
        <h1>About Me</h1>
        <div className="details">
            <p>Name: *Your Name* </p>
            <p>Major: *Your Major*</p>
            <p>Favorite Show: *Fav Show*</p>
            <img src={pic}></img>
        </div>
    </div>
  )
}

export default AboutMe