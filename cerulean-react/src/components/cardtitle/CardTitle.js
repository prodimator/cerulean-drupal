import React, { Component } from 'react';

class CardTitle extends Component {
 render() {
  return (
   <div className="title">
    {this.props.title}
   </div>
  )
 }
}

export default CardTitle;