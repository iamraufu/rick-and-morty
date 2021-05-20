import './Footer.css';
import React from 'react';

const Footer = () => {
      return (
            <div style={{ height: '60px', fontFamily: 'Titillium Web' }}>
                  <a style={{textDecoration:'none'}} href="https://github.com/iamraufu">
                        <p style={{ backgroundColor: 'rgb(31,38,51)', height: '40px', lineHeight: '40px',textAlign:'center',color:'white' }}>Raufu Prezens &copy; {(new Date()).getFullYear()}</p>
                  </a>
            </div>
      );
};

export default Footer;