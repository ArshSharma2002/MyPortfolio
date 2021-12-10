import React from 'react'

function Resume() {
    return (
        <div id="resumeComp" className=" resumePlacement resumeDiv container d-flex justify-content-center align-items-center" >
            <button className="resumeBtn">
                <a href="./images/My Resume.pdf" download="Arsh's Resume"><i className="fa fa-arrow-circle-down"></i> &nbsp; Download Resume</a>
            </button>
        </div>
    )
}

export default Resume
