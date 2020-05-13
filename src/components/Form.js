import React from "react";

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
  };

  handleFirstNameChange = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleLastNameChange = (event) => {
    console.log(this.state);
    this.setState({
      lastName: event.target.value,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          name="firstName"
          onChange={this.handleChange}
          value={this.state.firstName}
        />
        <input
          type="text"
          name="lastName"
          onChange={(event) => this.handleLastNameChange(event)}
          value={this.state.lastName}
        />
      </form>
    );
  }
}

export default Form;
