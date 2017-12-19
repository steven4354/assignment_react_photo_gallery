import React, {Component} from "react";


class Pagination extends Component {
  render(){
    let numButtons = Math.ceil(this.props.photos.length / 12.0)
    let buttons =[];
    for (let i=0;i<numButtons;i++){
        buttons.push(<button onClick={this.props.setPagination}>{i+1}</button>);
    }
    return(<div><label>Page</label>{buttons}</div>)
  }
}

export default Pagination