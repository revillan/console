# React console

The console relies on two React components, the Console component and the
PastInput component which takes care of rendering inputs and outputs that have
already been evaluated. The Console component both keeps the history of inputs &
outputs in its internal state, and handles new inputs as they come in.

The ReactConsole component takes two props, a callback prop which it evaluates on
inputs entered into the console, as well as a history prop which takes an array
of objects organized as below:

[ {input1: output1}, {input2: output2}, ... ]

with oldest inputs at lower indices.


## Running Console

The `index.html` file is set up to render the Console component. You can try the
Console with your own props by changing the `index.js` file.

## Issues

One problem with the console as it stands is that it evaluates the blank prompt
anytime a user presses enter and the input line is empty. Ideally, the Console
would know that no input was entered and would not evaluate the blank input with
the callback.
