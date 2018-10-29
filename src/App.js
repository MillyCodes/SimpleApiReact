import React, { Component } from "react";
import List from "./List";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            people: [],
            isLoaded: false
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    people: json
                });
            });
    }

    render() {
        const { people } = this.state;
        return (
            <div className="App">
                <List people={people} />
            </div>
        );
    }
}

export default App;
