import React from "react";

class UserClassComponent extends React.Component {
  constructor(props) {
    super(props);
    //state is big object in class component it contains lot of things
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    console.log(this.props.name + "child constructor ");
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/sujaynitrr");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json, "json");

    console.log(this.props.name + "child did mount method call");
  }

  render() {
    console.log(this.props.name + "child render method");
    //const { name, location, contact } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div>
        <p>Count</p>
        <p>{this.state.count}</p>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count
        </button>
        <p>Name:{name}</p>
        <p>Location:{location}</p>
      </div>
    );
  }
}

export default UserClassComponent;

/*

Initially class instance will create

            MOUNTING PHASE
    first constructor will call 
    then render will call and html load with dummy data
    after that api will call in side the componentDidMount method
    then again update the state and also update html
    
    Constructor(dummy)
    Render(dummy)
    ComponentDidMount
        <API Call>
        <this.setState> -> state variable is updated
       
       
        UPDATE PHASE
        
        Render (Api data)
        <HTML {new Api data}>
        componentDid update



*/
