import React, {Component} from "react";
import {PropTypes} from "prop-types";
import { Meteor } from "meteor/meteor";
import { createContainer} from "meteor/react-meteor-data"


export default class Overlay extends Component {
  constructor(props) {
    super(props);
    this.canvas=null;
  }

  componentWillUpdate(){
    let ctx2 = this.canvas.getContext('2d');
       ctx2.clearRect(0,0,700,700);
       this.props.tweets.map(tweet => {
        let ctx = this.canvas.getContext('2d');
       let cord = tweet.coordinates.coordinates;
       let projection = this.props.getProjection();
       let x = projection(cord)[0];
       let y = projection(cord)[1];
       console.log(tweet.text);
       if(tweet.text.length >=0 && tweet.text.length <=40){
         ctx.beginPath();
         ctx.fillStyle = 'red';
         ctx.fillRect(x,y,3,3);

       }
       else if(tweet.text.length >=40 && tweet.text.length <=80){
         ctx.beginPath();
         ctx.fillStyle = 'blue';
         ctx.fillRect(x,y,3,3);

       }
       else{
         ctx.beginPath();
         ctx.fillStyle = 'orange';
         ctx.fillRect(x,y,3,3);
       }
    });
    //clear
  }

  render(){
    return (
           <canvas
           ref={(canvas) => {this.canvas = canvas}}
           width="600" height="600"></canvas>
       );
  }



}
