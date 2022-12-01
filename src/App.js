import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters:[],
      searchResult:[],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({
        monsters: users
      }))
  }

  render() {
    return (
      <div className="App">
      <input
        type='text'
        placeholder='search monster'
        onChange={(e) => {
          const searchInput = e.target.value.toLowerCase();
          const filteredMonsters = this.state.monsters.filter((monster) => {
            return(monster.name.toLowerCase().includes(searchInput))
          });
          this.setState(
            () =>  ({searchResult: filteredMonsters})
          )
        }}
      />
      {
        this.state.searchResult.length > 0 ? this.state.searchResult.map((monster) => {
          return (
            <h1 key={monster.id}>{monster.name}</h1>
          )
        }):
        this.state.monsters.map((monster) => {
          return (
            <h1 key={monster.id}>{monster.name}</h1>
          )
        })
      }
      </div>
    );

  }



}

export default App;
