import React, {Component} from 'react';
import Header from "./Header";

class App extends Component {
    componentDidMount() {
        this.getTopHeadlines();
    }

    getTopHeadlines = () => {
        const apiKey = 'YOUR_API_KEY';
        const category = 'general';
        const country = 'co';
        const urlNews = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`

        console.log("URL A ATACAR", urlNews);
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
