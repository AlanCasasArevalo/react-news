import React, {Component} from 'react'
import PropTypes from "prop-types";
import New from "./New";

class News extends Component {
    render() {
        const news = this.props.news;
        return (
            <div className="row">
                {Object.keys(news).map(newToSend => (
                    <New
                        key={newToSend}
                        newSend={news[newToSend]}
                    />
                ))}
            </div>
        );
    }
}

News.propTypes = {
    news: PropTypes.array.isRequired
};
export default News;
