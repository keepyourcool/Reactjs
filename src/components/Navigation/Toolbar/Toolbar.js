import React from 'react'
import { NavLink } from 'react-router-dom';
import './Toolbar.css'
const toolbar = () => {
    return (
        <header >
            <nav >
                <ul className="nav-links">
                    <li>
                        <NavLink to="/" exact>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={{
                            pathname: "/about-us"
                        }}>About us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/policy" exact>Policy</NavLink>
                    </li>
                    <li>
                        <NavLink to={{
                            pathname: "/services"
                        }}>Services</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default toolbar;