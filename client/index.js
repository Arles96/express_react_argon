import React from 'react';
import { render } from 'react-dom';

import './index.scss'

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Hola React como estas</h1>
      </div>
    );
  }
};

render(<App />, document.getElementById('app'));