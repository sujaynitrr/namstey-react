import React from "react";
import userContext from "../utils/userContext";
class ContactClassComponent extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <userContext.Consumer>
          {({ user }) => {
            return <h1>{user}</h1>;
          }}
        </userContext.Consumer>
      </div>
    );
  }
}
export default ContactClassComponent;
