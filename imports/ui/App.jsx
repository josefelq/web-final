import React, {Component} from "react";
import {PropTypes} from "prop-types";
import { Meteor } from "meteor/meteor";
import { createContainer} from "meteor/react-meteor-data"

import TweetsResults from "./TweetsResults.jsx";
import {Tweets} from "../api/Tweets.js";
import ColombiaMap from "./ColombiaMap.jsx";
import Overlay from "./Overlay.jsx";


export class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      projection: null
    }
  }

  changeQuery(evt) {
    if (evt.key !== "Enter") {
      return;
    }
    // "this" will change in the method call, so I need to save it
    let component = this;

    console.log(evt.target.value);
    Meteor.call("twitter.stream", evt.target.value);

  }

  getProjection() {
      return this.state.projection;
  }

  setProjection(projection) {
      this.setState({'projection': projection});
 }

  render() {
    console.log("render!");
    return (
      <div>



        <ColombiaMap
          width="600"
          height="600"
          data={{RISARALDA:10, CALDAS:12}}
          setProjection={this.setProjection.bind(this)}
        ></ColombiaMap>
        <Overlay tweets={this.props.tweets} getProjection={this.getProjection.bind(this)}/>
        <input type="text" className="typehere" onKeyPress={this.changeQuery.bind(this)} placeholder="Query"/>
        { this.props && this.props.err ?
          <div>Error: {this.props.err}</div> :
          <span></span>
        }
      </div>
    );
  }
}

App.propTypes = {
  tweets : PropTypes.array.isRequired
};

export default AppContainer = createContainer(() => {
  Meteor.subscribe("tweets");


  return {
    tweets: Tweets.find({}).fetch()
  };
}, App);
