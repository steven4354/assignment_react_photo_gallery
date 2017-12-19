import React, {Component} from "react";

//custom components

class Search extends Component {
  render(){
    let filteredUsernames=this.props.results;
    let regex=this.props.regex
    let sortedUsernames=filteredUsernames.sort((a,b)=>{
        if (a.search(regex) > b.search(regex)){
          return 1;
        }
        if (a.search(regex) < b.search(regex)){
          return -1;
        }
        return 0;
      });

    return(
      <div>
        <label htmlFor="Search">Search Usernames:</label>
        <input type="text" list="smartSearch" onChange={this.props.setSearch} name="Search"/>
        <dataList id="smartSearch" >
          {sortedUsernames.slice(0,5).map(username=><option>{username}</option>)}
        </dataList>
      </div>
    )
  }
}

/*

let filteredPhotos =photos.data.filter(photo => {
          return regex.test(photo.user.username);
      });
      let sortedPhotos=filteredPhotos.sort((a,b)=>{
        if (a.user.username.search(regex) > b.user.username.search(regex)){
          return 1;
        }
        if (a.user.username.search(regex) < b.user.username.search(regex)){
          return -1;
        }
        return 0;
      })

*/

export default Search