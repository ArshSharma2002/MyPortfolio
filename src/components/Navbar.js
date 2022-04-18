import React from 'react'
// import {Link,useLocation } from "react-router-dom";

function Navbar(props) {
    const {setProgress,modeLabel,toggleMode} = props;

    // let location = useLocation();

    // useEffect(() => {
    //     if(location.pathname === '/'){

    //         document.title = `Arsh's | Home`
    //     } 
    //     else if (location.pathname === '/about'){
    //         document.title = `Arsh's | About`
    //     }
    //     else if (location.pathname === '/perks'){
    //         document.title = `Arsh's | Perks`
    //     }
    //     else{
    //         document.title = `Arsh's Portfolio`
    //     }
        
    // }, [location.pathname]);
    

    return (
        
        <nav id='nav'>
            <ul>
                <li> <a href="/MyPortfolio" onClick={() => setProgress(100)} ><i className="navIcons fas fa-home"></i> Home</a></li>
                <li> <a href="#aboutComp" onClick={() => setProgress(100)} ><i className="navIcons fas fa-address-card"></i> About</a></li>
                {/* <li> <a href="#perksComp" onClick={() => setProgress(100)} ><i className="fas fa-award"></i> Perks</a></li> */}
                <li><a href="#resumeComp" onClick={() => setProgress(100)} ><i className="navIcons fas fa-file"></i> Resume</a></li>
                <div className="form-check form-switch">
                <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                {/* <i className="fas fa-moon"></i>
                <i className="fas fa-sun"></i> */}
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{modeLabel}</label>
                </div>

            </ul>
        </nav>
    )
}

export default Navbar
