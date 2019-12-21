import React, {Component} from 'react';
import "../css/Gallery.css"
import Item from "./Item";


class Gallery extends Component {
    state = {
        imageSrc: ['../images/gallery/gallery1.png']
    };
    render() {
        return (
            <div className="img-container">
                {/*{*/}
                {/*    this.state.imageSrc.map((src) => {*/}
                {/*        return <Item src={src} />*/}
                {/*    })*/}
                {/*}*/}
                <img className="image"  src={require('../images/gallery/gallery1.png')} alt="" />
            </div>
        );
    }
}

export default Gallery;