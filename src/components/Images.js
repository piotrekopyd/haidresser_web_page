import React, {Component} from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Image from "./Image";

class Images extends Component {
    state = {
        images: [],
        count: 20,
        start: 1,
        query: 'hairstyle'
    };

    componentDidMount() {
        const { count,start, query } = this.state;
        axios
            .get(`/api/photos?count=${count}&start=${start}&query=${query}`)
            .then(res => this.setState({images: res.data.results}));

        this.setState({start: this.state.start + 1})
    }

    fetchImages = () => {
        const { count,start, query } = this.state;
        axios
            .get(`/api/photos?count=${count}&start=${start}&query=${query}`)
            .then(res => this.setState({images:  this.state.images.concat(res.data.results) }));

        this.setState({start: this.state.start + 1});
    };

    render() {
        return (
            <div className="Images">
                <InfiniteScroll next={this.fetchImages}
                                hasMore={true}
                                loader={<h4>Loading...</h4>}
                                dataLength={this.state.images.length}
                >
                    {
                        this.state.images.map(image => (
                            <Image key={image.id} image={image} />
                        ))
                    }
                </InfiniteScroll>
            </div>
        );
    }
}

export default Images;