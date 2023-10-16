import React from 'react';

const Footer = () => {

  return (
    <footer style={footerStyle}>
      <p>&copy; 2023 Our Project. All rights reserved.</p>
      <p>GitHub Repo: <a href="https://github.com/your-username/your-repo" target="_blank" rel="noopener noreferrer">Your GitHub Repo</a></p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#787a75',
  color: '#fff',
  textAlign: 'center',
  padding: '1rem',
  bottom: 0,
  flex:1,
  width: '100%',
};

export default Footer;
