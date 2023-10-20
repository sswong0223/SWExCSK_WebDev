import React from 'react'

import './../App.css';
import pic from './../Avatar.jpg'

const AboutMe = () => {

  return (
    <div className="aboutMe">
        <h1>About Me</h1>
        <div className="details">
            <p>Name: Sabrina Wong</p>
            <p>Major: Computer Engineering</p>
            <p>Favorite Show: Avatar the Last Airbender</p>
            <img src={pic}></img>
        </div>
    </div>
  )
}

export default AboutMe