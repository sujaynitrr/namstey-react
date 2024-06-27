import React from "react";
import UserClassComponent from "./UserClassComponent";

class AboutClassComponent extends React.Component {
  constructor() {
    super();
    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("Parent component did mount call");
  }
  render() {
    console.log("parent render method");
    return (
      <div>
        <p> About class component</p>
        <UserClassComponent name="first" />
        <UserClassComponent name="second" />
      </div>
    );
  }
}

export default AboutClassComponent;
