import React, {Component} from "react";

class Sort extends Component {
  render() {
    return (
      <div>
        <p>Sort By: </p>
        <select onChange={this.props.setSort}>
          <option value="time1">Time: Oldest to Newest</option>
          <option value="time2">Time: Newest to Oldest</option>
        </select>
      </div>
    );
  }
}

export default Sort;
