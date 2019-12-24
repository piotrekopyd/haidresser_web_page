import React, {Component} from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import Home from "./Home";
import Gallery from "./Gallery";
import Header from "./Header";
import Contact from "./Contact";
import About from "./About";

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                </div>
                <div>
                    {/*<Contact/>*/}
                    <Route exact path="/" component={Home}/>
                    <Route path="/gallery" component={Gallery}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/about" component={About}/>
                    {/*<About/>*/}
                </div>
            </BrowserRouter>
        );
    }
}

export default Router;