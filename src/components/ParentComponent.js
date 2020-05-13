import React from "react";
import Form from "./Form";
import DisplayingData from "./DisplayData";

class ParentComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  };

  // handleFirstNameChange = (event) => {
  //   this.setState({
  //     firstName: event.target.value,
  //   });
  // };

  // handleLastNameChange = (event) => {
  //   this.setState({
  //     lastName: event.target.value,
  //   });
  // };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <Form
          formData={this.state}
          handleChange={this.handleChange}
          handleChange={this.handleChange}
        />
        <DisplayingData formData={this.state} />
      </div>
    );
  }
}

export default ParentComponent;
