import React from 'react';
import readMeImg from '../../assets/readmegenerator.png';
import regexImage from '../../assets/regextutorial.png';
import stadiumImage from '../../assets/legacystadiums.png';

export default function Blog() {
  return (
    <div>
      <h1>Portfolio</h1>
      <p>
        Check out my portfolio and leave a comment! 
      </p>
      <img src="https://raw.githubusercontent.com/saramangelo/kindly/main/assets/images/gif-kindly.gif"></img><br></br>
      <a href="https://github.com/saramangelo/kindly" target="_blank">Kindly</a><br></br>
      <img src="https://raw.githubusercontent.com/wvoigt722/uclaTeamProject/main/images/screenShotOfProject.png"></img><br></br>
      <a href="https://github.com/wvoigt722/uclaTeamProject" target="_blank">Weather and Location Information</a><br></br>
      <img src={readMeImg}></img><br></br>
      <a href="https://github.com/Sheogorath9/Professional-README-Generator" target="_blank">README Generator</a><br></br>
      <img src={regexImage}></img><br></br>
      <a href="https://gist.github.com/Sheogorath9" target="_blank">REGEX Tutorial</a><br></br>
      <img src="https://raw.githubusercontent.com/Sheogorath9/Social-Network-API/main/assets/screenshot.png"></img><br></br>
      <a href="https://github.com/Sheogorath9/Social-Network-API" target="_blank">Social Network Backend API</a><br></br>
      <img src={stadiumImage}></img><br></br>
      <a href="https://github.com/Eddiebuck88/Legacy-Stadiums" target="_blank">Legacy Stadiums</a><br></br>
    </div>
    
  );
}
