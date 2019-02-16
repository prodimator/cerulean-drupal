import React, { Component } from 'react';

class CardDescription extends Component {
 render() {
  return (
   <div>
    {this.props.description}
   </div>
  )
 }
}

export default CardDescription;