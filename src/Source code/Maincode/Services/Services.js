import React from "react";
import "./Services.scss"
import ImageLogo from "../../image/pngwing.com (3).png"
import ImageLogo1 from "../../image/pngwing.com (4).png"
import ImageLogo2 from "../../image/pngwing.com.png"
import ImageLogo3 from "../../image/pngwing.com (1).png"
import ImageLogo4 from "../../image/5ede49dbb760540004f2c5e6.png"
import ImageLogo6 from "../../image/Anya_Forger_Anime_png.png"
import ImageLogo5 from "../../image/pngwing.com (2).png"
import ImageLogo7 from "../../image/imaglaskndlka.png"

export default function Services(props) {
    var services1 = [
        {
            logo: <i class="fa-solid fa-suitcase-rolling"></i>,
            title: "Lorem Ipsum",
            content: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident etiro rabeta lingo."
        },
        {
            logo: <i class="far fa-list-alt"></i>,
            title: "Dolor Sitema",
            content: "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata nodera clas."
        },
        {
            logo: <i class="fas fa-signal"></i>,
            title: "Sed ut perspiciatis",
            content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur trinige zareta lobur trade."
        },
        {
            logo: <i class="fas fa-binoculars"></i>,
            title: "Magni Dolores",
            content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum rideta zanox satirente madera"
        }
    ]
    return (
        <div className="service container">
            <h2 className="text-uppercase text-start">Services</h2>
            <div className="para mt-4 text-start">
                Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore
            </div>
            <div className="cards cardsHere container align-items-center mt-5">
                <div className="container-fluid p-0 m-0">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6">
                            <div className="card cardHere">
                                <div className="row p-0 align-item-center ">
                                    <div className="col-xs-12 col-sm-12 col-md-3 logo p-0">
                                        <div className="MainLogo">
                                            {services1[0].logo}
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-9 text-md-start">
                                        <h3>
                                            {services1[0].title}
                                        </h3>
                                        <span>
                                            {services1[0].content}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6">
                            <div className="card ">
                                <div className="row ">
                                    <div className="col-xs-12 col-sm-12 col-md-3 logo">
                                        <div className="MainLogo">
                                            {services1[1].logo}
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-9 text-md-start">
                                        <h3>
                                            {services1[1].title}
                                        </h3>
                                        <span>
                                            {services1[1].content}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 ">
                            <div className="card ">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-3 logo">
                                        <div className="MainLogo">
                                            {services1[2].logo}
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-9 text-md-start">
                                        <h3>
                                            {services1[2].title}
                                        </h3>
                                        <span>
                                            {services1[2].content}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 ">
                            <div className="card ">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-3 logo">
                                        <div className="MainLogo">
                                            {services1[3].logo}
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-9 text-md-start">
                                        <h3>
                                            {services1[3].title}
                                        </h3>
                                        <span>
                                            {services1[3].content}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Clients">
                <h2 className="text-uppercase text-start">Client</h2>
                <div className="para text-start mt-4">
                    Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore
                </div>
                <div class="swiper-wrapper align-items-center mt-4 d-flex">
                    <div class="swiper-slide"><img src={ImageLogo} class="img-fluid m-0" alt=""/></div>
                    <div class="swiper-slide"><img src={ImageLogo1} class="img-fluid m-0" alt=""/></div>
                    <div class="swiper-slide"><img src={ImageLogo2} class="img-fluid m-0" alt=""/></div>
                    <div class="swiper-slide "><img src={ImageLogo3} class="img-fluid imageHidden m-0" alt=""/></div>
                    <div class="swiper-slide "><img src={ImageLogo4} class="img-fluid imageHidden m-0" alt=""/></div>
                    <div class="swiper-slide "><img src={ImageLogo5} class="img-fluid imageHidden m-0" alt=""/></div>
                    <div class="swiper-slide "><img src={ImageLogo6} class="img-fluid imageHidden m-0" alt=""/></div>
                    <div class="swiper-slide "><img src={ImageLogo7} class="img-fluid imageHidden m-0" alt=""/></div>
                </div>
                <div className="swiper-pagination SPhere">
                </div>
            </div>
        </div>
    );
}