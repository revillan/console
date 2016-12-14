import React from 'react';

class Input extends React.Component {

  constructor(props) {
      super(props);
      this.state = {prompt: '', output: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ prompt: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({ output: this.props.callback(this.state.prompt) });
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        > <input type="text" onChange={this.handleChange}></input>
      <p>{this.state.output}</p>
      </form>
    );
  }


}

export default Input;
