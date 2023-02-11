import React from 'react';
import profileImg from '../../assets/profile.jpg'
//import "./src/assets/style.css";

export default function About() {
  return (
    <div>
      <h1>About Me</h1><br></br>
      <img src={profileImg} alt="Profile Photograph"></img>
      <p>
        I am a full stack student at the UCLA Coding Bootcamp. 
      </p>
    </div>
  );
}
