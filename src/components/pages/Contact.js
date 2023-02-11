import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        Contact info: <a href="https://github.com/Sheogorath9" target="_blank">GitHub Repository</a><br></br>
      </p>
      </div>
      <div class="container">
      <form action="action_page.php">
    
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name..">
    
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name..">
    
       <label for="subject"></label>
        <textarea id="subject" name="subject" placeholder="Enter Text Here" style="height:200px"></textarea>
    
        <input type="submit" value="Submit">
    
      </form>
    </div>
  );
}
