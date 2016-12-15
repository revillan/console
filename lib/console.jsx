import React from 'react';
import PastInput from './past_input';

class ReactConsole extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      prompt: '',
      output: '',
      history: this.props.history,
      place: this.props.history.length
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goThroughHistory = this.goThroughHistory.bind(this);
  }

  handleChange(e) {
    this.setState({ prompt: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.state.place === this.state.history.length) {
      this.setState({ output: this.props.callback(this.state.prompt) },
        () => {
          this.appendHistory(this.state.prompt, this.state.output);
          let length = this.state.history.length;
          this.setState({prompt: '', output: '', place: length});
        });
    } else {
      this.setState(
        { output: this.state.history[this.state.place][this.state.prompt] },
        () =>  this.resetInput()
      );
    }
  }

  goThroughHistory(e) {
    let newPlace;
    if (e.keyCode === 40 && this.state.place < this.state.history.length) { // Down key
      newPlace = this.state.place + 1;
      if (newPlace === this.state.history.length) {
        this.setState({place: newPlace, prompt: ''});
      } else {
        this.setState({place: newPlace,
          prompt: Object.keys(this.state.history[newPlace])});
        }
    } else if (e.keyCode === 38 && this.state.place > 0){ // up key
      newPlace = this.state.place - 1;
      this.setState({place: newPlace,
        prompt: Object.keys(this.state.history[newPlace]) });
      }
    }

  resetInput() {
    this.appendHistory(this.state.prompt, this.state.output);
    let length = this.state.history.length;
    this.setState({prompt: '', output: '', place: length});
  }

  appendHistory(prompt, output) {
    let oldHistory = this.state.history;
    let obj = {};
    obj[prompt] = output;
    oldHistory.push(obj);
    this.setState({history: oldHistory});
  }

  render() {
    let past = [];
    this.state.history.map(function (arr, idx) {
          Object.keys(arr).map(input => {
            past.push(
              <PastInput prompt={input} output={arr[input]} key={idx} />
            );
          });
        }
      );
      
    return (
      <section id="console">
        <div>
        {past}
        </div>

        <form onSubmit={this.handleSubmit} onKeyDown={this.goThroughHistory} >
          >
          <input type="text" value={this.state.prompt}
             onChange={this.handleChange}  >
          </input>
        </form>
      </section>
    );
  }


}

export default ReactConsole;
