import React from 'react';
import { connect } from 'react-redux';

class GameCanvas extends React.Component {
    constructor(props) {
        super(props);

        this.handleRestart = this.handleRestart.bind(this);
    }

    handleRestart() {
        this.props.dispatch({type: "RESET_FIELDS"});
    }

    handlePlay(index, e) {
        this.props.dispatch({type: 'MARK_FIELD', data: {fieldIndex: index}});
    }

    // render the board based on the state...
    render() {

        var fields = this.props.fields.map((item, i) => {
            if (!item) {
                return <div key={i} onClick={this.handlePlay.bind(this, i)} className="field empty">&nbsp;</div>
            }

            return <div key={i} className="field">{item.toUpperCase()}</div>
        });

        return (
            <div>
                <button className="clearButton" onClick={this.handleRestart}>Clear</button>
                <div className="fieldContainer">
                    {fields}
                </div>
            </div>
        )
    }
}

export default connect((state, props) => {
    return {
        fields: state.fields,
        player1: state.player1,
        player2: state.player2,
        currentPlayer: state.currentPlayer
    }

})(GameCanvas);
