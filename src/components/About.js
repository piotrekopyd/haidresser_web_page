import React, {Component} from 'react';
import '../css/AboutStyle.css'

class About extends Component {
    render() {
        return (
            <div className="about-section">
                    <h1>Out team</h1>
                    <span className="border"> </span>

                    <div className="ps">
                        <a href="#p1"><img src={require("../images/profile/profile1.jpg")} alt="" /></a>
                        <a href="#p2"><img src={require("../images/profile/profile2.jpg")} alt="" /></a>
                        <a href="#p3"><img src={require("../images/profile/profile3.jpg")} alt="" /></a>
                    </div>

                    <div className="about-person-section" id="p1">
                        <span className="name"> Janie Harrison </span>
                        <span className="border"> </span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Consectetur culpa cumque ea fugit incidunt ipsa laudantium nesciunt odio quisquam similique.
                        </p>
                    </div>
                    <div className="about-person-section" id="p2">
                        <span className="name"> Maria Hamilton </span>
                        <span className="border"> </span>
                        <p>
                            Neymar se queda porfavore medicore manifique spique brabue alamua as saer sadcxzcr csaww cawanasowa bigos pizdos
                        </p>
                    </div>
                    <div className="about-person-section" id="p3">
                        <span className="name"> Lorica Marina </span>
                        <span className="border"> </span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Conssesfq  fdsgre d sf t g fd saf sd fasfdsfdsfasd fdasftegf vfg sdfdantium nesciunt odio quisquam similique.
                        </p>
                    </div>
            </div>
        );
    }
}

export default About;