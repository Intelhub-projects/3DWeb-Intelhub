import React from "react";
import {
  CiSearch,
  CiHeart,
  CiShoppingCart,
  CiUser,
  CiMail,
  CiLocationOn,
} from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { Container } from "react-bootstrap";
import { RiMenu2Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-100  align-items-center">
      <Container>
        <div className="d-flex  justify-content-between align-items-center border-bottom">
          <div className="d-flex  ">
            <p className="mx-1">
              {" "}
              <FaPhoneAlt /> (+800) 123 456 7890
            </p>{" "}
            <p className="mx-1 border-start px-1">
              {" "}
              <CiMail />
              sample@gmail.com
            </p>
          </div>{" "}
          <div className="d-none d-md-flex">
            {" "}
            <p className="mx-1">
              <CiLocationOn /> storeLocation
            </p>{" "}
            <div className="mx-1 border-start px-1">
              {" "}
              <LiaFlagUsaSolid />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center ">
          <div className="fs-1">
            {" "}
            <RiMenu2Fill className="d-md-none" /> Electro-mart
          </div>
          <div className="border rounded-pill d-none d-md-flex w-25 justify-content-between align-items-center">
            <div className="px-3">Search...</div>
            <div className="px-3 bg-warning border rounded-pill">
              <CiSearch />
            </div>
          </div>
          <div className="d-flex">
            <div className="border rounded-circle p-1 mx-1">
              <CiHeart />
            </div>
            <div className="border rounded-circle p-1 mx-1">
              <CiShoppingCart />
            </div>
            <div className="border rounded-circle p-1 mx-1">
              <CiUser />
            </div>
          </div>
        </div>
      </Container>

      <div className="bg-black text-white ">
        <Container className="d-flex justify-content-between align-items-center">
          <div className="bg-warning py-2 px-2 text-black ">
            <RiMenu2Fill />
            <span className="cag">All Catigories</span>
          </div>
          <div className="d-flex justify-content-between d-none d-md-flex text-white">
            <NavLink to="/" activeClassName="active" className="nav-link mx-3">
              Home
            </NavLink>
            <NavLink
              to="/shop"
              activeClassName="active" className="nav-link mx-3"
            >
              Shop
            </NavLink>
            <NavLink
              to="/collection"
              activeClassName="active" className="nav-link mx-3"
            >
              Collection
            </NavLink>
            <NavLink
              to="/blog"
              activeClassName="active" className="nav-link mx-3"
            >
              Blog
            </NavLink>
          </div>
          <div>
            *Free Shipping On Orders <span className="text-danger">$500+</span>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Header;
