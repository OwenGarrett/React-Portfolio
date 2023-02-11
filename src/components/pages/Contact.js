import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        Contact info: <a href="https://github.com/Sheogorath9" target="_blank">GitHub Repository</a><br></br>
      </p>
    
      <div class="container">
      <form>
    
        <label htmlFor="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
    
        <label  htmlFor="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
    
       <label  htmlFor="subject"></label>
        <textarea id="subject" name="subject" placeholder="Enter Text Here"></textarea>
    
        <button type='submit'>Submit</button>
    
      </form>
      </div>
    </div>
  );
}
