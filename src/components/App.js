import React, {Component} from 'react';
import Header from "./Header";
import News from "./News";
import Form from "./Form";

class App extends Component {

    state = {
        news: []
    }

    componentDidMount() {
        this.getTopHeadlines();
    }

    getTopHeadlines = (category = 'general') => {

        const apiKey = 'YOUR_API_KEY';
        const country = 'co';
        const urlNews = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;
        fetch(urlNews)
            .then(response => {
                return response.json()
            })
            .then(allNewsFromApi => {
                this.setState({
                    news: allNewsFromApi.articles
                })
            })
            .catch(error => {

            })

    };

    render() {
        return (
            <div className="contenedor-app">
                <Header
                    title="Noticias"
                />
                <div className="container white contenedor-noticias ">
                    <Form
                        getTopHeadlines={this.getTopHeadlines}
                    />
                    <News
                        news={this.state.news}
                    />
                </div>
            </div>
        );
    }
}

export default App;
