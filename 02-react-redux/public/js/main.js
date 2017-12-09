import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import GameCanvas from './game.js';
import store from './reduxState.js'

class MainComponent extends React.Component {
  render() {
    return (
      <div>
        <GameCanvas />
      </div>
    )
  }
}

ReactDOM.render(<Provider store={store}><MainComponent /></Provider>, document.getElementById('container'));
