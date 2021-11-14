import React from "react";
import './styles/Footer.css';

const Footer = () => 
    // <footer className="footer-border">
    //     <h4 className="footer-title">Footer Component</h4>
    // </footer>
    // Footer -->
<footer data-testid ="footer-test-id" className="page-footer font-small blue pt-4">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-6 mt-md-0 mt-3">
        <h5 className="footer-title">Footer Component</h5>
        <p>Here you can use rows and columns to organize your footer content.</p>
      </div>
      <hr className="clearfix w-100 d-md-none pb-3"/>
      <div className="col-md-3 mb-md-0 mb-3">
        <ul className="list-unstyled footer-menu">
          <li>
            <a href="#!">Home</a>
          </li>
          <li>
            <a href="#!">About</a>
          </li>
          <li>
            <a href="#!">Gallary</a>
          </li>
          <li>
            <a href="#!">FAQ</a>
          </li>
          <li>
            <a href="#!">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </div> 
  <div className="footer-copyright text-center py-3">© 2021 Copyright:
    <a> my-app.com</a>
  </div>
</footer>

export default Footer;