import React from "react";
import './styles/Header.css';

const Header = () => 
    
    <header data-testid = "header-test-id" className="d-flex flex-wrap justify-content-md-between py-3 mb-4 header-border">
       <label><h5 className="header-title">Header Component</h5></label>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 main-menu">
            <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
            <li><a href="#" className="nav-link px-2 link-dark">About</a></li>
            <li><a href="#" className="nav-link px-2 link-dark">Gallary</a></li>
            <li><a href="#" className="nav-link px-2 link-dark">FAQs</a></li>
            <li><a href="#" className="nav-link px-2 link-dark">Contact Us</a></li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        </form>
    </header>

export default Header;