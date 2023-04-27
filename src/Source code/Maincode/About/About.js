import React from 'react';
import "./About.scss";
import aboutImage from "../../image/AboutImage1.jpg"

export default function About() {
    return (
        <div className="About" id='About'>
            <div className="container d-flex justify-content-between">
                <div className="row p-1">
                    <div className=" col-lg-6  AboutImage mt-5" >
                        <img src={aboutImage} alt="" />
                    </div>
                    <div className=" col-lg-6 AboutRightSide mt-5">
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing</h2>
                        <div className="display-5 Excepteur mt-4">
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                            <ul className='list-unstyled '>
                                <li className='d-flex'><i class="far fa-check-circle aboutIcons"></i><p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></li>
                                <li className='d-flex'><i class="far fa-check-circle aboutIcons"></i><p>Duis aute irure dolor in reprehenderit in voluptate velit.</p></li>
                                <li className='d-flex'><i class="far fa-check-circle aboutIcons"></i><p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</p></li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}