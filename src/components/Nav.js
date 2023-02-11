import React from "react";

export default function Nav(props) {
   console.log(props);
    const { changePage } = props

    return (
        <nav>
      <a href="#about" target="_self" onClick={() => changePage('about')}>About Me</a><br></br>
      <a href="#portfolio" target="_self" onClick={() => changePage('portfolio')}>Portfolio</a><br></br>
      <a href="#contact" target="_self" onClick={() => changePage('contact')}>Contact Me</a><br></br>
    </nav>
    )
}