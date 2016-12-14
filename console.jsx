import React from 'react';
import ReactDOM from 'react-dom';
import IOPair from './input_output';
import Input from './input';
import PastInput from './past_input';


class ReactConsole extends React.Component {

  constructor(props) {
    super(props);

    this.state = {prompt: '', output: '', history: this.props.history};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ prompt: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    let that = this;
    // let evaluate = new Promise(
    //   function(resolve, reject) {
     that.setState({ output: that.props.callback(that.state.prompt) },
      () => {
        that.appendHistory(that.state.prompt, that.state.output);
        that.setState({prompt: '', output: ''});

      });
    //   }
    // );

    // evaluate.then(that.appendHistory(that.state.prompt, that.state.output));
    // evaluate.then(
    //   this.setState({prompt: '', output: ''})
    // );
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
    this.state.history.map(function (arr) {
              Object.keys(arr).map(input => {
                past.push(
                  <PastInput prompt={input} output={arr[input]} key={input} />
                );
              });
          }
      );
      // <Input callback={ (x) => x } />
      // <p>{this.state.output}</p>
    return (
      <section id="console">
        <div>
        {past}
        </div>

        <form onSubmit={this.handleSubmit}>
          > <input type="text" onChange={this.handleChange}></input>
        </form>
      </section>
    );
  }


}

const element = <h1>Hello, world</h1>;
document.addEventListener("DOMContentLoaded", () =>
  ReactDOM.render(
    <ReactConsole history={[ {"asdf": "dsf"}, {"asf": "asd"} ]}
      callback={ (x) => x } />,
    document.getElementById('root')
  )
);
