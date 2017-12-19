//takes the filter and photogallery and
//transfer data between them

import React, {Component} from "react";

//custom components
import Filter from "./Filter";
import PhotoCollection from "./PhotoCollection";
import Sort from "./Sort";
import Search from "./Search";
import Pagination from "./Pagination";

//requiring the photos for the galleery
const photos = require("./photos.js");

class Gallery extends Component {
  constructor() {
    super();

    this.state = {
      photos: photos.data
    };
    this.state.displayPhotos = this.state.photos.slice(0, 12);
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
    } else if (e.target.value === "time2") {
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
      let regex = new RegExp(e.target.value, "i");
      let filteredPhotos = photos.data.filter(photo => {
        return regex.test(photo.user.username);
      });
      this.setState({
        photos: filteredPhotos,
        regex: regex
      });
    } else {
      this.setState({
        photos: photos.data
      });
    }
  };

  setPagination = e => {
    // let prevPhotos = this.state.photos
    // this.setState({
    //   prevPhotos: prevPhotos
    // })

    let value = e.target.innerHTML - 1;
    value = value * 12;
    this.setState({displayPhotos: this.state.photos.slice(value, value + 12)});
  };

  setColumnSort = e => {
    let arr = [];
    let arrIdx = [];
    let start = e.target.value;
    arr = this.state.displayPhotos.filter((photo, index) => {
      if ((index - start) % 4 == 0) {
        arrIdx.push(index);
        return true;
      }
    });

    arr = arr.sort((a, b) => {
      if (b.user.username > a.user.username) {
        return -1;
      }
      if (a.user.username > b.user.username) {
        return 1;
      }
      // a must be equal to b
      return 0;
    });

    let dummyPhotos = this.state.displayPhotos.map(photo => {
      return photo;
    });

    while (true) {
      if (arrIdx.length == 0) {
        break;
      }
      let idx = arrIdx.splice(0, 1);
      dummyPhotos[idx] = arr.splice(0, 1);
    }

    this.setState({
      displayPhotos: dummyPhotos
    });
  };

  componentWillUpdate(nextProps, nextState) {
    if (this.state.photos != nextState.photos) {
      nextState.displayPhotos = nextState.photos.slice(0, 12);
    }
  }

  render() {
    return (
      <div>
        <Pagination
          photos={this.state.photos}
          setPagination={this.setPagination}
        />
        <Search
          setSearch={this.setSearch}
          results={this.state.photos.map(photo => photo.user.username)}
          regex={this.state.regex}
        />
        <Filter setFilter={this.setFilter} count={this.state.photos.length} />
        <Sort setSort={this.setSort} />
        <PhotoCollection
          sortCol={this.setColumnSort}
          photos={this.state.displayPhotos}
        />
      </div>
    );
  }
}

export default Gallery;
