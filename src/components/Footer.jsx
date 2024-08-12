import React from "react";
import { CiSearch } from "react-icons/ci";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="w-100 bg-black text-white fst-italic">
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <div className="fs-1 "> Electro-mart</div>
          <div className="border mx-4 rounded-pill d-none d-md-flex w-25 justify-content-between align-items-center">
            <div className="px-3">Search...</div>
            <div className="px-3 bg-warning border rounded-pill">
              <CiSearch />
            </div>
          </div>
        </div>

        <div className="d-md-flex justify-content-around ">
          <div>
            <p className="fs-4">Shop</p>
            <ul className="list-unstyled d-flex flex-wrap d-md-block">
              <li className="px-2">Games</li>
              <li className="px-2">Laptops & Computer</li>
              <li className="px-2"> Mac Computers</li>
              <li className="px-2">PC Computers</li>
            </ul>
          </div>
          <div>
            <p className="fs-4">Pages</p>
            <ul className="list-unstyled d-flex d-md-block">
              <li className="px-2">About Us</li>
              <li className="px-2">Contact Us</li>
            </ul>
          </div>
          <div>
            <p className="fs-4">About Us</p>
            <ul className="list-unstyled d-flex d-md-block">
              <li className="px-2">Contact Us</li>
              <li className="px-2">Shopping Cart</li>
              <li className="px-2">FAQ</li>
            </ul>
          </div>
          <div>
            <p className="fs-4">Regulation</p>
            <ul className="list-unstyled d-flex d-md-block">
              <li className="px-2">Cart</li>
              <li className="px-2">FAQs</li>
            </ul>
          </div>
          <div>
            <p className="fs-4">Service</p>
            <ul className="list-unstyled d-flex d-md-block">
              <li className="px-2">Sport & Outdoors</li>
            </ul>
          </div>
        </div>

        <div></div>
      </Container>
    </div>
  );
};

export default Footer;
