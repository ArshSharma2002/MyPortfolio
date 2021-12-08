import React , {useEffect} from 'react'
import { Link , useLocation } from "react-router-dom";

function Navbar(props) {
    const {setProgress} = props;

    let location = useLocation();

    useEffect(() => {
        if(location.pathname === '/'){

            document.title = `Arsh's | Home`
        } 
        else if (location.pathname === '/about'){
            document.title = `Arsh's | About`
        }
        else if (location.pathname === '/perks'){
            document.title = `Arsh's | Perks`
        }
        else{
            document.title = `Arsh's Portfolio`
        }
        
    }, [location.pathname]);
    



    return (
        
        <nav>
            <ul>
                <li> <Link to="/" onClick={() => setProgress(100)} ><i className="fas fa-home"></i> Home</Link></li>
                <li> <Link to="/about" onClick={() => setProgress(100)} ><i className="fas fa-address-card"></i> About</Link></li>
                <li> <Link to="/perks" onClick={() => setProgress(100)} ><i className="fas fa-award"></i> Perks</Link></li>
                <li> <a href="./images/My Resume.pdf" download="Arsh's Resume"><i className="fas fa-file-pdf"></i> My Resume</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
