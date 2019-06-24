import React, {Component} from 'react'; 
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        // console.log(filteredRobots);
        return (
            <div className='tc'>
                <h1>Brobots!</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        )
    }
}

export default App 

// Make sure you spell your identifiers exactly correctly. 
// They are case-sensitive (hint hint).

//TypeError: Cannot read property 'toLowerCase' of undefined

//I know it seems related to connecting the front end to the 
//back end, but that error message is saying that your form is 
//not connected to the html document. How are you defining the form?