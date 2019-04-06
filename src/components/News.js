import React, {Component} from 'react'
import PropTypes from "prop-types";
import New from "./New";
import {TransitionGroup, CSSTransition} from 'react-transition-group';

class News extends Component {
    render() {
        const news = this.props.news;
        return (
            <div className="row">
                <TransitionGroup>
                {Object.keys(news).map(newToSend => (
                    <CSSTransition
                        key={news[newToSend].url}
                        classNames="fade"
                        timeout={500}
                    >
                    <New
                        newSend={news[newToSend]}
                    />
                    </CSSTransition>
                ))}
                </TransitionGroup>
            </div>
        );
    }
}

News.propTypes = {
    news: PropTypes.array.isRequired
};
export default News;
