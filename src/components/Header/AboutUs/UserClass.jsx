import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.fetchUserDetails = this.fetchUserDetails.bind(this);
  }

  async fetchUserDetails ()  {
    try {
      const response = await fetch("https://api.github.com/users/bhawna-bawa");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchUserDetails();
  }

  render() {
    return <div></div>;
  }
}

export default UserClass;
