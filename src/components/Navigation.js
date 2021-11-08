import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
//import 'bootstrap/dist/css/bootstrap.min.css';
const Navigation = () => {
    return (
        <div className="navigation">
            
           <NavLink exact to="/" activeClassName="nav-active">
                Acceuil
           </NavLink>
           <NavLink exact to="/a-propos" activeClassName="nav-active">
               A-propros
           </NavLink>
        </div>
    );
};

export default Navigation;