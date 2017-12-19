import React, {Component} from "react";
// import PhotoGrid from "react-photo-feed";

// const photoMan = photos.data.map((photo) => {
//
// })

// https://github.com/lkazberova/react-photo-feed

class PhotoCollection extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-3">
            <button
              onClick={this.props.sortCol}
              value="0"
              className="btn btn-default"
            >
              sort
            </button>
          </div>
          <div className="col-md-3">
            <button
              onClick={this.props.sortCol}
              value="1"
              className="btn btn-default"
            >
              sort
            </button>
          </div>
          <div className="col-md-3">
            <button
              onClick={this.props.sortCol}
              value="2"
              className="btn btn-default"
            >
              sort
            </button>
          </div>
          <div className="col-md-3">
            <button
              onClick={this.props.sortCol}
              value="3"
              className="btn btn-default"
            >
              sort
            </button>
          </div>
        </div>
        <div className="row">
          {this.props.photos.map((photo, index) => {
            const time = new Date(photo.created_time * 1000);
            return (
              <div className="col-md-3 photo-box" key={`photo${index}`}>
                <a href={photo.images.standard_resolution.url} target="_blank">
                  <img alt="" src={photo.images.low_resolution.url} />
                </a>
                <a
                  href={`https://www.instagram.com/${photo.user.username}/`}
                  target="_blank"
                >
                  <p>user: {photo.user.username}</p>
                </a>
                <p>time: {time.toString()}</p>
                <p>likes: {photo.likes.count}</p>
                <p>comments: {photo.comments.count}</p>
                <p>
                  tags:{" "}
                  {photo.tags.map(tag => (
                    <a
                      href={`https://www.instagram.com/explore/tags/${tag}/`}
                      key={tag}
                    >
                      {tag}{" "}
                    </a>
                  ))}
                </p>
                <p>filter: {photo.filter}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PhotoCollection;
