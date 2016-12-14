import ReactConsole from './lib/console';
import ReactDOM from 'react-dom';
import React from 'react';

document.addEventListener("DOMContentLoaded", () =>
  ReactDOM.render(

    <ReactConsole history={[ {"input": "input"}, {"output": "output"} ]}
      callback={ (x) => x } />,

    document.getElementById('root')
  )
);
