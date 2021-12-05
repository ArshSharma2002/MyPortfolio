import React from "react";

function Footer() {
  return (
    <>
      <div className="container socialSection">
        <a
          target="__blank"
          className="socialLinks"
          href="https://www.google.com"
        >
          <div className="social" id="fb"></div>
        </a>
        <a
          target="__blank"
          className="socialLinks"
          href="https://www.instagram.com/its_arsh_sharma/"
        >
          <div className="social" id="insta"></div>
        </a>
        <a
          target="__blank"
          className="socialLinks"
          href="https://www.google.com"
        >
          <div className="social" id="linkedIn"></div>
        </a>
        <a
          target="__blank"
          className="socialLinks"
          href="https://github.com/ArshSharma2002/ArshSharma2002"
        >
          <div className="social" id="Github"></div>
        </a>
      </div>
    </>
  );
}

export default Footer;
