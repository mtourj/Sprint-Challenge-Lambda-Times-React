import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0,
      images: carouselData
    }
  }
  componentDidMount(){

  }

  leftClick = async () => {
    if(this.state.index === 0) {
      await this.setState({ index: this.state.images.length - 1 });
    } else {
      await this.setState({ index: this.state.index - 1 });
    }

    console.log(this.state.index);
  }

  rightClick = async () => {
    if(this.state.index >= this.state.images.length - 1 ) {
      await this.setState({ index: 0 });
    } else {
      await this.setState({ index: this.state.index + 1 });
    }

    console.log(this.state.index);
  }

  selectedImage = () => {
    const src = this.state.images[this.state.index];
    return <img alt='' src={src} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}