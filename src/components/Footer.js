import React from "react";

function Footer(props) {

  
  const {setProgress} = props;

  return (
    <>
      <div className="container socialSection">
        <a
          target="__blank"
          className="socialLinks"
          href="https://www.google.com"
          onClick={() => setProgress(100)}
        >
          <div className="social" id="fb"></div>
        </a>
        <a
          target="__blank"
          className="socialLinks"
          href="https://www.instagram.com/its_arsh_sharma/"
          onClick={() => setProgress(100)}
        >
          <div className="social" id="insta"></div>
        </a>
        <a
          target="__blank"
          className="socialLinks"
          href="https://www.linkedin.com/in/arsh-sharma-6747a6211/"
          onClick={() => setProgress(100)}
        >
          <div className="social" id="linkedIn"></div>
        </a>
        <a
          target="__blank"
          className="socialLinks"
          href="https://github.com/ArshSharma2002"
          onClick={() => setProgress(100)}
        >
          <div className="social" id="Github"></div>
        </a>
      </div>
    </>
  );
}

export default Footer;
