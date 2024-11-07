import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Sumit",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    // API call
    const data = await fetch('https://api.github.com/users/svsumit98');
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  render() {
    const {name, location, avatar_url, html_url} = this.state.userInfo;
    return (
      <div className="user-card">
        <h2 className="font-bold">Created By: {name}</h2>
      </div>
    );
  }
}

export default UserClass;