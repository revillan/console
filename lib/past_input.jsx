import React from 'react';

class PastInput extends React.Component {
  render() {
    return (
      <span>
        <div className="input">
          > {this.props.prompt}
        </div>
        <div className="output">
          {this.props.output}
        </div>
      </span>
    );
  }
}

export default PastInput;
