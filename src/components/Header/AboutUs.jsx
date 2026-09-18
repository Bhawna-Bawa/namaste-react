import React from "react";
import UserClass from "../UserClass";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent componentDidMount");
  }
  render() {
    console.log('Parent Render');
    return (
      <div>
        <h1>About Us</h1>
        <UserClass name={"Bhawna"} />
        <UserClass name={"Parteek"} />
      </div>
    );
  }
}

export default AboutUs;

/* Order of execution of Lifecycle 

Parent Constructor
Parent Render
Bhawna Constructor
Bhawna Render
Parteek Constructor
Parteek Render
Bhawna componentDidMount
Parteek componentDidMount
Parent componentDidMount

*/
