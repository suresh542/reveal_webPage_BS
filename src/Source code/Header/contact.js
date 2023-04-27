import React from "react";
import "./Header.scss";
// import fontawesomeicon from '@fortawesome/react-fontawesome'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Contact() {
    return (
        <div className="socialContact">
            {/* <section className="   d-flex align-items-center ">
                <div className="topBar container d-flex justify-content-center justify-content-md-between ">
                    <div className="emailContact d-flex align-item-center ">                     
                            <a href="skcreate@gmail.com" className="text-decoration-none">skcreate@gmail.com</a>
    
                        <div className="number">
                            +1 5589 55488 55
                        </div>
                    </div>
                    <div className="socialMediaIcons d-none d-md-flex align-item-center">
                        <i class="fab fa-facebook-square"></i>
                    </div>
                </div>
            </section> */}
            <section className="d-flex align-center ">
                <div className="topBar container d-flex justify-content-center justify-content-md-between  ps-5 pe-5">
                    <div className="content-info d-flex align-item-center">
                        <i class="fa-regular fa-envelope d-flex align-item-center mt-1 icons"></i><a href="mailto:skcreate@example.com" className="ms-1 text-decoration-none">skcreate@example.com</a>
                        <i class="fa-solid fa-mobile d-flex align-items-center mt-1 ms-4 icons"></i><span className="ms-1">+1 5589 55488 55</span>
                    </div>
                    <div className="socialMediaIcons d-none d-md-flex">
                        <a href="https://www.twitter.com/"><i class="fa-brands fa-twitter"></i></a>
                        <a href="https://www.facebook.com/"><i class="fa-brands fa-square-facebook "></i></a>
                        <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://in.linkedin.com/"><i class="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
            </section>
        </div>
    );
}