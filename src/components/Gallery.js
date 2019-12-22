import React, {Component} from 'react';
import "../css/Gallery.css"
import Images from "./Images";


class Gallery extends Component {
    state = {
        imageSrc: ['../images/gallery/gallery1.png']
    };
    render() {
        return (
            <div id="gallery">
                <div className="hero is-fullheight is-bold is-black">
                    <div className="hero-body">
                        <div className="container">
                            {/*<div className="header content">*/}
                            {/*    <h2 className="subtitle is-6">Code Challenge #16</h2>*/}
                            {/*    <h1 className="title is-1">*/}
                            {/*        Infinite Scroll Unsplash Code Challenge*/}
                            {/*    </h1>*/}
                            {/*</div>*/}

                            {/**  Images stuff  */}
                            <Images/>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gallery;