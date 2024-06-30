import React from "react";
import UserClassComponent from "./UserClassComponent";
import userContext from "../utils/userContext";

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
        <userContext.Consumer>
          {({ user }) => {
            <h1>{user}</h1>;
          }}
        </userContext.Consumer>
        <UserClassComponent name="first" />
        <UserClassComponent name="second" />
      </div>
    );
  }
}

export default AboutClassComponent;
