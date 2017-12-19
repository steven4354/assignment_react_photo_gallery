//takes the filter and photogallery and
//transfer data between them

import React, {Component} from "react";

//custom components
//import Filter from "./Filter";
import PhotoCollection from "./PhotoCollection";

//creating the filter
//import SelectField from "material-ui/SelectField";
//import MenuItem from "material-ui/MenuItem";

//requiring the photos for the galleery
const photos = require("./photos.js");

//getting the unique filters for the filtering dropdown
const filters = photos.data.map(photo => {
  return photo.filter;
});
const uniqueFilters = filters.filter((filter, index) => {
  return filters.indexOf(filter) === index;
});


class Filter extends Component {

  constructor(props){
    super();
  }
  render() {
    return (
      <div>
        <select onChange={this.props.setFilter}>
          <option></option>
          {uniqueFilters.map(filter => {
            return <option key={filter}>{filter}</option>;
          })}
        </select>
        <h4>Count: {this.props.count}</h4>
      </div>
    );
  }
}

class Gallery extends Component {
  constructor() {
    super();

    this.state = {
      photos: photos.data
    };

    
  };

  setFilter = e=>{
    //this.setState({"filter": e.target.value});

    if (e.target.value){
      this.setState({photos:photos.data.filter(photo=>{
        return photo.filter===e.target.value;
      })})
    }else{
      this.setState({photos:photos.data});
    }
  }

  render() {
    return (
      <div>
        <Filter setFilter={this.setFilter} count={this.state.photos.length}/>
        <PhotoCollection photos={this.state.photos}/>
      </div>
    );
  }
}

export default Gallery;
