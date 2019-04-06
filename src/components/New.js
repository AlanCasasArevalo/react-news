import React, {Component} from 'react'
import PropTypes from "prop-types";

class New extends Component {

    showResults = () => {
        const newReceived = this.props.newSend;
        const author = newReceived.author;
        const content = newReceived.content;
        const description = newReceived.description;
        const title = newReceived.title;
        const source = newReceived.source.name;
        let imageUrl = newReceived.urlToImage;
        const alt = `imagen de la noticia ${newReceived.title}`

        if (author && typeof author !== 'undefined' && content && typeof content !== 'undefined') {
            return (
                <div className="row">
                    <div className="card-panel light-blue align-center">
                        <span className="white-text">
                            <h2>{title}</h2>
                            <img src={imageUrl} alt={alt}/>
                            <p> {description} </p>
                            <p>{source}</p>
                        </span>
                    </div>
                </div>
            )
        } else {
            return null
        }
    };

    render() {
        return (
            <div className="container">
                {this.showResults()}
            </div>
        );
    }
}

New.propTypes = {
    newSend: PropTypes.object.isRequired
};

export default New;
