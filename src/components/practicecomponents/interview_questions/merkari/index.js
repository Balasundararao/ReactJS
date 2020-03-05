import React, { Component, Fragment } from 'react';

import previousIcon from '../../../../../src/assets/icons/left-icon.png'; 
import nextIcon from '../../../../../src/assets/icons/right_icon.png'; 
import thumb1 from '../../../../../src/assets/images/thumb/tea-light-thumb.jpeg';
import thumb2 from '../../../../../src/assets/images/thumb/white-light-thumb.jpeg';
import thumb3 from '../../../../../src/assets/images/thumb/pink-light-thumb.jpeg';
import thumb4 from '../../../../../src/assets/images/thumb/tea-light-thumb.jpeg';
import image1 from '../../../../../src/assets/images/tea-light.jpeg';
import image2 from '../../../../../src/assets/images/white-light.jpeg';
import image3 from '../../../../../src/assets/images/pink-light.jpeg';
import image4 from '../../../../../src/assets/images/tea-light.jpeg';

import './index.css';
import Viewer from "./Viewer";
import Thumbs from "./Thumbs";


const catalogs = [
  {
    thumb: thumb1,
    image: image1
  },
  {
    thumb: thumb2,
    image: image2
  },
  {
    thumb: thumb3,
    image: image3
  },
  {
    thumb: thumb4,
    image: image4
  }
];

class MercariComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Catalog Viewer',
      catalogs: [...catalogs],
      currentIndex: -1,
      catalogSelected: catalogs[3],
      slideActive: false,
      slideTimer: null,
      slideDuration: 3000,
    };
    this.selectedCatalog = this.selectedCatalog.bind(this);
    this.previousClick = this.previousClick.bind(this);
    this.nextClick = this.nextClick.bind(this);
    this.slideChange = this.slideChange.bind(this);
    this.resetSlideTimer = this.resetSlideTimer.bind(this);
    this.onSlideChange = this.onSlideChange.bind(this);
  }

  selectedCatalog(index) {
    this.setState( (prevState) =>  ({
      ... prevState,
      currentIndex:  index,
      catalogSelected: prevState.catalogs[index]
    }))
  }

  previousClick() {
    this.setState( (prevState) =>  ({
      ... prevState,
      currentIndex:  ( prevState.currentIndex == 0) ? prevState.catalogs.length - 1  : prevState.currentIndex - 1,
      catalogSelected: prevState.catalogs[( prevState.currentIndex == 0) ? prevState.catalogs.length - 1  : prevState.currentIndex - 1]
    }))
  }

  nextClick() {
    this.setState( (prevState) =>  ({
      ... prevState,
      currentIndex:  ( prevState.currentIndex < prevState.catalogs.length - 1) ? prevState.currentIndex + 1 : 0,
      catalogSelected: prevState.catalogs[( prevState.currentIndex < prevState.catalogs.length - 1) ? prevState.currentIndex + 1 : 0]
    }))
  }

  slideChange(event) {
    if( event.target.checked) {
      // this.onSlideChange()
      this.slider = setInterval(  console.log("Hello")  , 1000)  
    } else {
      this.resetSlideTimer()
    }
  }

  resetSlideTimer(isActive = false) {
    this.setState( (prevState) => ({
      ...prevState, 
      slideActive: isActive
    }))
    clearInterval( this.slider)
  }

  onSlideChange() {
    this.slider = setInterval(  console.log("Hello")  , 1000)  }

  componentDidMount() {
    this.setState( (prevState) =>  ({
      ... prevState,
      currentIndex:  0,
      catalogSelected: prevState.catalogs[0]
    }))
  }

  render() {
    return (
        <Fragment>
          <div className="title" data-testid="app-title"> {this.state.title} </div>
          <div className="catalog-outer">
            <div className="catalog-view">
              <div className="text-center">
                <div className="view-outter text-center">
                  <Viewer catalog={this.state.catalogSelected.image}/>
                </div>
              </div>
            </div>
            <div className="catalog-items">
              <div className="previous" onClick={this.previousClick} data-testid="prev-icon">
                <img src={previousIcon}/>
              </div>
              <div className="next" onClick={this.nextClick} data-testid="next-icon">
                <img src={nextIcon}/>
              </div>
              <Thumbs items={this.state.catalogs} currentIndex={this.state.currentIndex} selectedCatalog={this.selectedCatalog}/>
            </div>

            <div className="slide-input">
              <input type="checkbox" onChange={this.slideChange} className="test" data-testid="slide"/> Slide
            </div>
          </div>
        </Fragment>
    );
  }
}

export default MercariComponent;
