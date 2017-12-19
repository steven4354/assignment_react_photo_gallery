import React, { Component } from 'react';
const photos = require('./photos.js');

class PhotoCollection extends Component {

  constructor(){
    super();
    this.state={
      photos: photos.data
    }
  }
  render() {

    return (
      <div>
        {this.state.photos.map(photo=>{
          return (<div class="col-md-3"><img alt="" src={photo.images.low_resolution.url} /></div>)
        })}
      </div>
    );
  }
}

export default PhotoCollection;
