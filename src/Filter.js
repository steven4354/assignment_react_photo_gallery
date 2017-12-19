//creating the filter
//import SelectField from "material-ui/SelectField";
//import MenuItem from "material-ui/MenuItem";

import React, {Component} from "react";

const photos = require("./photos.js");

//getting the unique filters for the filtering dropdown
const filters = photos.data.map(photo => {
  return photo.filter;
});
const uniqueFilters = filters.filter((filter, index) => {
  return filters.indexOf(filter) === index;
});

class Filter extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <label htmlFort="Filter">Filter by Filter:</label>
        <select onChange={this.props.setFilter} name="Filter">
          <option />
          {uniqueFilters.map(filter => {
            return <option key={filter}>{filter}</option>;
          })}
        </select>
        <h4>{this.props.count} Results</h4>
      </div>
    );
  }
}

export default Filter;
