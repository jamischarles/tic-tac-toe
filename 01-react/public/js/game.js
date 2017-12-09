import React from 'react';

class GameCanvas extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: Array(9).fill(false),
            player1: "x",
            player2: "o",
            currentPlayer: 1
        };

        this.handleRestart = this.handleRestart.bind(this);
    }

    componentDidMount() {
        // this.originAmountInput.focus();
    }

    handleRestart() {
        this.setState({
            fields: Array(9).fill(false), // start with array of 9 with false filled in
        })
    }

    handlePlay(index, e) {

        var fields = this.state.fields;
        var piece = this.state['player' + this.state.currentPlayer]; //x or o

        // you never change this.state directly
        // FIXME: Do we need to clone this?
        this.state.fields[index] = piece;

        // fill in the current piece, and switch player
        this.setState({
            fields: this.state.fields,
            currentPlayer: this.state.currentPlayer === 1 ? 2 : 1 // toggle between player  1 and 2
        })
    }

    // render the board based on the state...
    render() {

        var fields = this.state.fields.map((item, i) => {
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

export default GameCanvas;
