import React, {Component} from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import About from "./About";
import Gallery from "./Gallery";
import Header from "./Header";

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                </div>
                <div>
                    <Route exact path="/" component={About}/>
                    <Route path="/gallery" component={Gallery}/>
                    {/*<About/>*/}
                </div>
            </BrowserRouter>
        );
    }
}

export default Router;