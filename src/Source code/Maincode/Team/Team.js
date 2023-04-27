import React from "react";
import "./Team.scss"
// import team1 from "../../image/team-1.jpg"

export default function Team() {
    var TeamMembers = [
        {
            Images: "../../image/team-1.jpg",
            Name: "walter white",
            Position: "Chief Executive Officer",
        },
        {
            Images: "../../image/team-2.jpg",
            Name: "Sarah Jhinson",
            Position: "Product Manager",
        },
        {
            Images: "../../image/team-3.jpg",
            Name: "William Anderson",
            Position: "CTO",
        },
        {
            Images: "../../image/team-4.jpg",
            Name: "Amanda Jepson",
            Position: "Accountant",
        }
    ]
    return (
        <div className="team container mb-5">
            <h2 className="text-uppercase text-start mb-3">our team</h2>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <img src={TeamMembers[0].Images} alt="" />
                    <div className="details">
                        <div className="Name">
                            {TeamMembers[0].Name}
                        </div>
                        <div className="Positions">
                            {TeamMembers[0].Position}
                        </div>
                        <div className="logos">
                            <a href="https://www.twitter.com/"><i class="fa-brands fa-twitter"></i></a>
                            <a href="https://www.facebook.com/"><i class="fa-brands fa-square-facebook "></i></a>
                            <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
                            <a href="https://in.linkedin.com/"><i class="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <img src={TeamMembers[1].Images} alt="" />
                    <div className="details">
                        <div className="Name">
                            {TeamMembers[1].Name}
                        </div>
                        <div className="Positions">
                            {TeamMembers[1].Position}
                        </div>
                        <div className="logos">
                            <a href="https://www.twitter.com/"><i class="fa-brands fa-twitter"></i></a>
                            <a href="https://www.facebook.com/"><i class="fa-brands fa-square-facebook "></i></a>
                            <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
                            <a href="https://in.linkedin.com/"><i class="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <img src={TeamMembers[2].Images} alt="" />
                    <div className="details">
                        <div className="Name">
                            {TeamMembers[2].Name}
                        </div>
                        <div className="Positions">
                            {TeamMembers[2].Position}
                        </div>
                        <div className="logos">
                            <a href="https://www.twitter.com/"><i class="fa-brands fa-twitter"></i></a>
                            <a href="https://www.facebook.com/"><i class="fa-brands fa-square-facebook "></i></a>
                            <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
                            <a href="https://in.linkedin.com/"><i class="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <img src={TeamMembers[3].Images} alt="" />
                    <div className="details">
                        <div className="Name">
                            {TeamMembers[3].Name}
                        </div>
                        <div className="Positions">
                            {TeamMembers[3].Position}
                        </div>
                        <div className="logos">
                            <a href="https://www.twitter.com/"><i class="fa-brands fa-twitter"></i></a>
                            <a href="https://www.facebook.com/"><i class="fa-brands fa-square-facebook "></i></a>
                            <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
                            <a href="https://in.linkedin.com/"><i class="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}