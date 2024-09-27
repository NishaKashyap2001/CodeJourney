import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2>Contact Me</h2>
      <p>
        Feel free to reach out to me at the following:
      </p>
      <ul className="list-group">
        <li className="list-group-item">
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li className="list-group-item">
          <a href="mailto:youremail@example.com">
            Email: nishakashyap962@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
