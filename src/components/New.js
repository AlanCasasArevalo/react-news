import React, {Component} from 'react'
import PropTypes from "prop-types";

class New extends Component {

    showResults = () => {
        const newReceived = this.props.newSend;
        const author = newReceived.author;
        const content = newReceived.content;
        const description = newReceived.description;
        const title = newReceived.title;
        const url = newReceived.url;
        const source = newReceived.source.name;
        let imageUrl = newReceived.urlToImage;
        const alt = `imagen de la noticia ${newReceived.title}`;

        const imageToShow = (imageUrl && typeof imageUrl !== 'undefined')
            ?
            <div className="card-image">
                <img src={imageUrl} alt={alt}/>
                <span className="card-title">
                                {source}
                        </span>
            </div>
            : '';

        if (author && typeof author !== 'undefined' && content && typeof content !== 'undefined') {
            return (
                <div className="card">
                    {imageToShow}
                    <div className="card-content">
                        <h3>{title}</h3>
                        <p> {description} </p>
                    </div>
                    <div className="card-action">
                        <a href={url} target="_blank" className="waves-effects waves-light btn"> Leer Mas </a>
                    </div>
                </div>
            )
        } else {
            return null
        }
    };

    render() {
        return (
            <div className="col s12 m6 l4">
                {this.showResults()}
            </div>
        );
    }
}

New.propTypes = {
    newSend: PropTypes.object.isRequired
};

export default New;
