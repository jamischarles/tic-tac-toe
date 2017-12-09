import React from 'react';
import ReactDOM from 'react-dom';

import GameCanvas from './containers/game.js';


class MainComponent extends React.Component {
  render() {
    return (
      <div>
        <GameCanvas />
      </div>
    )
  }
}

ReactDOM.render(<MainComponent />, document.getElementById('container'));
