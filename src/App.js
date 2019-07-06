import React, {Component} from 'react';  //need Component to use class
import {CardList} from './components/card-list/card-list-component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';


class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')   //request 3rd party data by using fetch()
     .then(response => response.json())   //Transfer receiving Data to JSON format
     .then(user => this.setState({monsters: user}))   //Update State by setState
  }

  handleChange = event => {
    this.setState({searchField: event.target.value});
  }

  render() {

    const { monsters, searchField } = this.state; //Destructuring
    const filterMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    
    return (
      <div className='App'>
        <h1>Monsters Galaxy</h1>
        <SearchBox 
          placeholder = 'search monster'
          handleChange ={this.handleChange}
        />
        <CardList monsters={filterMonsters}/>
      </div>
      );
  }
}

export default App;
