//takes the filter and photogallery and
//transfer data between them

import React, {Component} from "react";

//custom components
//import Filter from "./Filter";
import PhotoCollection from "./PhotoCollection";

//creating the filter
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

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
  render() {
    return (
      <div>
        <SelectField floatingLabelText="Frequency">
          {uniqueFilters.map(filter => {
            return <MenuItem value={filter} primaryText={filter} />;
          })}
        </SelectField>
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
  }

  render() {
    return (
      <div>
        <Filter />
        <PhotoCollection photos={this.state.photos} />
      </div>
    );
  }
}

export default Gallery;
