import React from "react";
import "./ContactUs.scss"

export default function ContactUs() {
    return (
        <div className="ContactUs container">
            <h2 className="text-capitalize text-start ">contact us</h2>
            <div className="para mt-3">
                Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse
                amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse
                aute nulla ipsum velit export irure minim illum fore
            </div>
            <div className="row mt-5 ContactDetails">
                <div className="col-md-4 borderds">
                    <div className="icons">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="NameOfIcons text-uppercase">
                        address
                    </div>
                    <div className="address">
                        A108 Adam Street, NY 535022, USA
                    </div>
                </div>
                <div className="col-md-4 borderds">
                    <div className="icons">
                    <i class="fas fa-mobile"></i>
                    </div>
                    <div className="NameOfIcons text-uppercase">
                            phone number
                    </div>
                    <div className="phoneNo">
                        +1 5589 55488 55
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="icons">
                    <i class="fas fa-envelope-square"></i>
                    </div>
                    <div className="NameOfIcons text-uppercase">
                        email
                    </div>
                    <div className="mail">
                        info@example.com
                    </div>
                </div>
            </div>
            <div className="maps mt-5">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17517.90142446757!2d77.64313717581709!3d12.912023900981241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae152e6c80dc9f%3A0x6fe845f5ff371622!2sAgara%20Bus%20stop!5e0!3m2!1sen!2sin!4v1682588857819!5m2!1sen!2sin" width={"100%"} height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="form mt-5 mb-5">
                <form action="#">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <input type="text"  placeholder="Your Name"/>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <input type="email" placeholder="Your Email" />
                        </div>
                    </div>
                    <input type="text" placeholder="subject" />
                    <textarea name="" id="" cols="30" rows="5" placeholder="Message"></textarea>
                    <button type="button" className="btn "> send message</button>
                </form>
            </div>
        </div>
    )
}