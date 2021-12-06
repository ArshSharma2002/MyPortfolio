import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <ul>
                <li> <Link to="/"><i class="fas fa-home"></i> Home</Link></li>
                <li> <Link to="/about"><i class="fas fa-address-card"></i> About</Link></li>
                <li> <Link to="/perks"><i class="fas fa-award"></i> Perks</Link></li>
                <li> <a href="./images/My Resume.pdf" download="Arsh's Resume"><i class="fas fa-file-pdf"></i> My Resume</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
