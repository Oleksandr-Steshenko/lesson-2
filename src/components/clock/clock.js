import React, { Component } from "react";
import "./clock.scss";

import moment from "moment";

export default class AwesomeClock extends Component {
  constructor() {
    super();
    this.state = {
      time: moment().format("LT"),
      class: "",
      simpleWatch: true,
      fullWatch: false,
      monthDate: false,
      fullDate: false,
      background: {
        backgroundColor: "#000000".replace(/0/g, function() {
          return (~~(Math.random() * 16)).toString(16);
        })
      }
    };
    this.clicker = this.clicker.bind(this);
  }

  //Your time is ticking now //
  componentDidMount() {
    setInterval(() => {
      if (this.state.simpleWatch === true) {
        this.setState({
          time: moment().format("LT")
        });
      } else if (this.state.fullWatch === true) {
        this.setState({
          time: moment().format("LTS")
        });
      }
    }, 1000);
  }

  clicker() {
    this.setState({
      background: {
        backgroundColor: "#000000".replace(/0/g, function() {
          return (~~(Math.random() * 16)).toString(16);
        })
      }
    });
    if (this.state.simpleWatch === true) {
      this.setState({ class: "faded" });
      setTimeout(() => {
        this.setState({
          time: moment().format("LTS"),
          simpleWatch: false,
          fullWatch: true,
          class: ""
        });
      }, 200);
    } else if (this.state.fullWatch === true) {
      this.setState({ class: "faded" });
      setTimeout(() => {
        this.setState({
          time: moment().format("L"),
          fullWatch: false,
          fullDate: true,
          class: ""
        });
      }, 200);
    } else if (this.state.fullDate === true) {
      this.setState({ class: "faded" });
      setTimeout(() => {
        this.setState({
          time: moment().format("LL"),
          fullDate: false,
          monthDate: true,
          class: ""
        });
      }, 200);
    } else if (this.state.monthDate === true) {
      this.setState({ class: "faded" });
      setTimeout(() => {
        this.setState({
          time: moment().format("LT"),
          monthDate: false,
          simpleWatch: true,
          class: ""
        });
      }, 200);
    }
  }
  render() {
    return (
      <div
        className="awesome_clock"
        style={this.state.background}
        onClick={this.clicker}
      >
        <h1 className={this.state.class}>{this.state.time}</h1>
      </div>
    );
  }
}
