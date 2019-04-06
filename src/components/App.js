import React, {Component} from 'react';
import Header from "./Header";

class App extends Component {

    state = {
        news: []
    }

    componentDidMount() {
        this.getTopHeadlines();
    }

    getTopHeadlines = () => {
        const category = 'general';
        const country = 'co';
        const urlNews = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`

        console.log("URL A ATACAR", urlNews);
        fetch(urlNews)
            .then(response => {
                return response.json()
            })
            .then(allNewsFromApi => {
                console.log("all news", allNewsFromApi.articles);
                this.setState({
                    news: allNewsFromApi.articles 
                })
            })
            .catch(error => {

            })

    };

    render() {
        return (
            <div className="App">
                <Header
                    title="Noticias"
                />
            </div>
        );
    }
}

export default App;
