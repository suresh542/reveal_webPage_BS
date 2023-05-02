import React from "react";
import "./Home.scss"
// import "./ImportPart"
import Contact from "../Header/contact";
import Header from "../Header/Header";
import About from "./About/About";
import Services from "./Services/Services";
import Portfolio from "./PORTFOLIO/Portfolio";
import Team from "./Team/Team";
import ContactUs from "./Contect Us/ContactUs";
import Footer from "../Footer/Footer";



export default function Home() {
    // var bgImage = document.getElementById("Home1")
    // bgImage.setAttribute("style", "background:url(../image/imageSlide1.jpg)")
    return (
        <div className="MainHomePage">
            <div className="contains">
                <div className="contactHeader">
                    <Contact />
                </div>
            </div>
            <div className="Header sticky-top m-0 p-0">
                <Header />
            </div>
            <section className="Home1" id="Home1" data-aos="fade-up">
                {/* <img src="../image/imageslider2.jpg" alt="" /> */}
                <div className="Home" id="Home" data-aos="fade-up">
                    <h2>
                        Making <span>your ideas</span> <br /> happen!
                    </h2>
                    <div className="buttons mt-5">
                        <a href="#About" className="btn-getStarted scrollto">Get Started</a>
                        <a href="#service" className="btn-OurProject scrollto">Our Project</a>
                    </div>
                </div>
            </section>
            <div className="mainCode" id="About" data-aria-owns="fade-up">
                <section className="mt-5" data-aos="fade-up">
                    <About />
                </section>
            </div>
            <div className="service" id="service" data-aos="fade-up">
                <section>
                    <Services
                    />
                </section>
            </div>
            <div className="portfolio mt-2" id="Portfolio" data-aos="fade-up">
                <Portfolio />
            </div>
            <div className="callOfAction mb-3">
                <div className="container">
                    <h2 className="text-capitalize text-start mb-3">call to action</h2>
                    <div className="row">
                        <div className="col-lg-9 col-md-12 text-start" >
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                        <div className="col-lg-3 col-md-12 text-end">
                            <button className="btn text-capitalize text-center">
                                call to action
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="team mt-5" id="Team" data-aos="fade-up">
                <Team />
            </div>
            <div className="contact_us" id="Contact" data-aos="fade-up">
                <ContactUs/>
            </div>
            <div className="footer">
            <Footer/>
            </div>
        </div>
    );
}