import React, {Component} from "react";

class PhotoCollection extends Component {
  constructor() {
    super();
    this.state = {
      photos: photos.data
    };
  }
  render() {
    return (
      <div class="row">
        {this.state.photos.map(photo => {
          const time = new Date(photo.created_time);

          return (
            <div class="col-md-3">
              <img alt="" src={photo.images.low_resolution.url} />
              <p>user: {photo.user.username}</p>
              <p>time: {time.toString()}</p>
              <p>likes: {photo.likes.count}</p>
              <p>comments: {photo.comments.count}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default PhotoCollection;
