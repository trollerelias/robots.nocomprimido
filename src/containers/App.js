import React from "react";
import { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox"
import Scroll from "../components/Scroll";

import "./App.css";

class App extends Component {
    constructor () {
        super()
        this.state = {
            
            robots: [],
            seachfield: ""
            
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response=> {
                return response.json();
        })
        .then(users => {
            this.setState({ robots: users })
        })

        
    }

    onSearchChange = (event) => {
        this.setState({ seachfield: event.target.value })
        
        
        
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.seachfield.toLowerCase())
        })

        return(
            <div className="tc">
                <h1 className="f1">Robot Friends</h1>
                
                <SearchBox searchChange={this.onSearchChange} />

                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        )
    }
        
            
}

export default App;