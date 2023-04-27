import React from "react";
import "./Header.scss";
// import { Link } from "react-router-dom";
// import Home from "../Maincode/Home";
// import Contact from "./contact";

export default function Header() {
    return (
        <div className="MainHeader">
           
            <div className=" navbarHere sticky-top p-0 m-0">
                <nav className="navbar navbar-expand-md navbar-light bg-light p-0 ">
                    <div className="container navbarMain d-flex align-item-center justify-content-around justify-content-between">
                        <div className="navbar-brand ps-3">
                            <a className="navbar-brand1 Reveal m-0 text-decoration-none" href="ww">Reve<span>al</span></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navId">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse d-none d-md-flex justify-content-end" id="navId">
                            <ul className="navbar-nav ml-auto navbarContent" >
                                <li className="nav-item active">
                                    <a href="#Home1" className="nav-link scrollTo active">Home</a>
                                    {/* <Link></Link> */}
                                </li>
                                <li className="nav-item">
                                    <a href="#About" className="nav-link scroll">About</a>
                                    {/* <Link></Link> */}
                                </li>
                                <li className="nav-item">
                                    <a href="#service" className="nav-link">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#Portfolio" className="nav-link">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#Team" className="nav-link">Team</a>
                                </li>
                                <li className="nav-item">
                                    <a href="DropDown" className="nav-link">Drop Down
                                        <ul className="d-none">
                                            <li></li>
                                        </ul>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#Contact" className="nav-link">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}