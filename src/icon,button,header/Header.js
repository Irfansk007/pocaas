import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = (props) => {
   
  return (
    <div className="container-fluid1 d-flex pt-2 mr-0 ">
      
      <Link to={`${props.url}`} className="link d-flex pt-1">
        <i className="fas fa-angle-left fs-2 fw-semibold"></i>
        <span className="fw-semibold fs-4 mt-0 text">{props.text}</span>
      </Link>
    </div>
  );
};

export default Header;


// eslint-disable-next-line no-lone-blocks
{/* <Link to={`/getItemsFromCart/${variable}`} >
   Cart
</Link> */}