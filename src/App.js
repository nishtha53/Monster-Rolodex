import  { Component } from "react";
import './App.css';


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
    () =>{
      console.log(this.state);
    }
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
        <input type="search" className="search-box" placeholder="Search Monster" onChange={this.onSearchChange}  />
         {
          filterMosters.map((mons) =>{
              return <h1>{mons.name}</h1>
          })
         }

      </div>
    )
  }
}


export default App; 

