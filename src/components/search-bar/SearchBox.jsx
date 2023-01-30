import { Component } from "react";
import '../search-bar/searchbox.css';

class SearchBox extends Component {

    render() {

        return (
            <div className="App">
                <input type="search" className="search-box" placeholder="Search Monster" onChange={this.props.onChangeHandler} />
            </div>
        )
    }
}


export default SearchBox;