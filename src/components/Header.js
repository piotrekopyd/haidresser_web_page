import React, {Component} from 'react';
import '../css/HeaderStyle.css'

class Header extends Component {
    state = {
        height: 80
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        let scrollTop = window.scrollY,
            minHeight = 40,
            headerHeight = Math.max(minHeight, 80 - scrollTop);
       this.setState({
            height: headerHeight
        })
    };

    render() {
        return (
            <div className="header" style={{height: this.state.height}}>
                <div className="inner_header">
                    <div className="logo_container">
                        <h1>MY<span>SITE</span></h1>
                    </div>

                    <div className="navigation">
                        <a><li>About</li></a>
                        <a><li>Gallery</li></a>
                        <a><li>Make an appointment</li></a>
                        <a><li>Contact</li></a>

                    </div>
                </div>
            </div>
        );
    }
}

export default Header;