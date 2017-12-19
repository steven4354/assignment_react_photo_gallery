//takes the filter and photogallery and
//transfer data between them

import React, {Component} from "react";

//custom components
import Filter from "./Filter";
import PhotoCollection from "./PhotoCollection";
import Sort from "./Sort";

//requiring the photos for the galleery
const photos = require("./photos.js");

class Search extends Component {
  render(){
    return(
      <input type="text" onChange=></input>
    )
  }
}
class Gallery extends Component {
  constructor() {
    super();

    this.state = {
      photos: photos.data
    };
  }

  setFilter = e => {
    //this.setState({"filter": e.target.value});

    if (e.target.value) {
      this.setState({
        photos: photos.data.filter(photo => {
          return photo.filter === e.target.value;
        })
      });
    } else {
      this.setState({photos: photos.data});
    }
  };

  setSort = e => {
    if (e.target.value === "time1") {
      this.setState({
        photos: photos.data.sort((a, b) => {
          if (b.created_time > a.created_time) {
            return -1;
          }
          if (a.created_time > b.created_time) {
            return 1;
          }
          // a must be equal to b
          return 0;
        })
      });
    } else if (e.target.value == "time2") {
      this.setState({
        photos: photos.data.sort((a, b) => {
          if (a.created_time > b.created_time) {
            return -1;
          }
          if (b.created_time > a.created_time) {
            return 1;
          }
          // a must be equal to b
          return 0;
        })
      });
    }
  };

  setSearch = e => {

    if (e.target.value) {
      let regex = new RegExp(e.target.value, 'i')
      photos.filter((photo) => {
        return photo.caption
      })
    } else {
      this.setState({
        photos: photos.data
      });
    }
  }

  render() {
    return (
      <div>
        <Search setSearch={this.setSearch}/>
        <Filter setFilter={this.setFilter} count={this.state.photos.length} />
        <Sort setSort={this.setSort} />
        <PhotoCollection photos={this.state.photos} />
      </div>
    );
  }
}

export default Gallery;
