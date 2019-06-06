import React, { Component } from "react";

export default class Test extends Component {
  state = {
    title: ""
  };

  // segundo na ordem automatica
  componentDidMount() {
    console.log("componentDidMout...");
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(json =>
        this.setState({
          title: json.title
        })
      );
  }
  // primeiro na ordem automatica
  componentWillMount() {
    console.log("componentWillMount...");
  }
  // Ao atualizar state
  componentWillUpdate() {
    console.log("componentWillUpdate...");
  }
  componentWillReceiveProps(nextProps, nextState) {
    console.log("componentWillReceiveProps");
  }
  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>Test Component</h1>
        <p>{title}</p>
      </div>
    );
  }
}
