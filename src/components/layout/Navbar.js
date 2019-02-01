import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
// import SignedOutLinks from './SignedOutLinks';

 
const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-2">
      <Link to='/' className="brand-logo left fixed">Retrospective Manager</Link>
      <div className="container">
        

        <SignedInLinks />
        {/* <SignedOutLinks /> */}
      </div>
    </nav>
  )
}

export default Navbar;