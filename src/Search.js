import React, {Component} from "react";

//custom components

class Search extends Component {
  render(){
    return(
      <div>
        <label htmlFor="Search">Search Usernames:</label>
        <input type="text" onChange={this.props.setSearch} name="Search"></input>
      </div>
    )
  }
}

export default Search