import React, {Component} from 'react';
import Header from "./Header";
import News from "./News";

class App extends Component {

    state = {
        news: []
    }

    componentDidMount() {
        this.getTopHeadlines();
    }

    /*
        componentDidUpdate(prevProps, prevState, snapshot) {
            if (prevState.news === this.state.news){
            }else {
                this.getTopHeadlines();
            }
        }
    */

    getTopHeadlines = () => {
        const category = 'general';
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
                    <News
                        news={this.state.news}
                    />
                </div>
            </div>
        );
    }
}

export default App;
