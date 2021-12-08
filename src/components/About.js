import React from 'react'
import profilePic from './images/profile-pic(2).png'

function About() {
    return (
        <div className="container my-5 py-4" >
      <div className="d-flex">
      <div
        className="
          col-md-3
          my-2
          d-flex
          align-items-center
          justify-content-center
        "
      >
        <img id="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="col-md-9 px-3 py-3 my-2 mx-5 d-flex justify-content-center align-items-center flex-column">
        <h2>
          I'm
          <b className="boldFont"> Arsh Shrama </b>
          , a <strong className="boldFont" > full stack web developer </strong>.
        </h2>
        <p className="fontStyle" >
          currently pursuing
          my bachelor's in Computer Science & Engineering.
          Also works as a freelancer and always try to learn something new.
          You can also check me out on Fiverr and Freelancer.com .
        </p>
      </div>
    </div>
    </div>
    )
}

export default About
