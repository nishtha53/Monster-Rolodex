import  { Component } from "react";
import './App.css';
import "./components/card-list/CardList"
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-bar/SearchBox";

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters : [],
      searchField: '',
    }; 
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => this.setState(() =>{
      return {monsters: users}
    },
    ))
  }

  onSearchChange = (event) =>{console.log(event.target.value);
    const searchField = event.target.value.toLowerCase();
    this.setState(( )=>{
        return{searchField};
      });
    }

  render() {
    const filterMosters = this.state.monsters.filter((monster) =>{
      return monster.name.toLowerCase().includes(this.state.searchField);
  });

  

  return (
      <div className="App">
        <SearchBox onChangeHandler={this.onSearchChange} />
        <CardList monsters={filterMosters} /> 
      </div>
    )
  }
}


export default App; 

