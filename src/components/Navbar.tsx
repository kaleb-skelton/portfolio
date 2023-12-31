import {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import { motion } from 'framer-motion';

function Navbar() {
    const [click, setClick] = useState(false);
    const [] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);



    return (
        <nav className="navbar">
            <div className="navbar-container">
            <motion.div whileHover={{ scale: 1.05 }}>
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                Skelton Portfolio <i className="fas fa-code"></i>
                </Link>
            </motion.div>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                        Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/aboutMe" className="nav-links" onClick={closeMobileMenu}>
                        About Me
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/project-new" className="nav-links" onClick={closeMobileMenu}>
                        My Projects
                        </Link>
                    </li>
                  

                </ul>

            </div>
        </nav>
    )
}

export default Navbar