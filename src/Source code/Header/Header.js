import React,{useState} from "react";
import "./Header.scss";

export default function Header() {
    
    var [menuIcons, setMenuIcons] = useState(false);

    var Icons=(props)=>{ 
       return (setMenuIcons = (Icons===false) ? "navbar-toggler-icon":"far fa-times");
    }




    return (
        <div className="MainHeader">
           
            <div className=" navbarHere sticky-top p-0 m-0">
                <nav className="navbar navbar-expand-md navbar-light bg-light p-0 ">
                    <div className="container navbarMain d-flex align-item-center justify-content-around justify-content-between">
                        <div className="navbar-brand ps-3">
                            <a className="navbar-brand1 Reveal m-0 text-decoration-none" href="ww">Suresh &#x2661; <span>SK</span></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navId" onClick={Icons}> 
                                <i className={menuIcons}></i>
                                <i className="navbar-toggler-icon"></i>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse d-md-flex justify-content-end" id="navId">
                            <ul className="navbar-nav ml-auto navbarContent">
                                <li className="nav-item active">
                                    <a href="#Home1" className="nav-link scrollTo active" id="nav-link">Home</a>
                                    {/* <Link></Link> */}
                                </li>
                                <li className="nav-item">
                                    <a href="#About" className="nav-link scroll" id="nav-link" >About</a>
                                    {/* <Link></Link> */}
                                </li>
                                <li className="nav-item">
                                    <a href="#service" className="nav-link" id="nav-link">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#Portfolio" className="nav-link" id="nav-link">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#Team" className="nav-link" id="nav-link">Team</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#DropDown" className="nav-link " id="nav-link">Drop Down
                                        <ul className="list-unstyled d-none">
                                            <li>Drop Down 1</li>
                                            <li>Drop Down 2</li>
                                            <li>Drop Down 3</li>
                                            <li>Drop Down 4</li>
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