// TODO:
// 1) Currently registerEvent is getting called on each render and incrementing the counter. It'd be nice to not grow this infinitly (mem leak).

class GameCanvas {
    constructor(props) {
        this.state = {
            fields: Array(9).fill(false),
            player1: "x",
            player2: "o",
            currentPlayer: 1
        };

        this.events = {
            counter: 0,
            handlers: {}
        }

        this.handleRestart = this.handleRestart.bind(this);
        this.handlePlay = this.handlePlay.bind(this);
        this.registerEvent = this.registerEvent.bind(this);
        this.fireSynthEvent = this.fireSynthEvent.bind(this);
    }

    // 1st react API polyfill
    setState(newState) {
        this.state = Object.assign(this.state, newState);

        // FIXME: Can this be bound?
        this.render('#container');

        // console.log('this.state', this.state);
    }

    // 2nd react API polyfill
    // TODO: Make this a singleton. Only do it on first render
    // TODO: Simplify?
    registerEvent(type, cb) {
        // FIXME bind in constructor?

        // do this for each type (like a click)?
        // only add delegate click the first time...
        if (this.events.counter === 0) {
            var el = document.querySelector('#container');
            el.addEventListener(type, this.fireSynthEvent);
        }


        this.events.counter++;

        this.events.handlers[this.events.counter] = {
            type: type,
            cb: cb
        }
        // console.log('this.events', this.events)
        return `evt-counter=${this.events.counter}`;

    }

    // fake event system...
    fireSynthEvent(e) {
        var evtID = e.target.getAttribute('evt-counter')
        // console.log('evtID', evtID)

        var evt = this.events.handlers[evtID];

        if (evt && evt.cb) {
            evt.cb();
        }
    }

    handleRestart() {
        // reset events to default state
        this.events = {
            counter: 0,
            handlers: {}
        }

        this.setState({
            fields: Array(9).fill(false), // start with array of 9 with false filled in
        })
    }

    handlePlay(index, e) {

        var fields = this.state.fields;
        var piece = this.state['player' + this.state.currentPlayer]; //x or o

        // you never change this.state directly
        // FIXME: Do we need to clone this?
        fields[index] = piece;

        // fill in the current piece, and switch player
        this.setState({
            fields: this.state.fields,
            currentPlayer: this.state.currentPlayer === 1 ? 2 : 1 // toggle between player  1 and 2
        })
    }

    // things we now need to do manually that react normally does:
    // 1) event binding & handling
    // TODO: search through  the code and automagically add an event
    // 2) template interpolation... - Easy with es6 template literals

    // render the board based on the state...
    render(elSelector) {

        // figure out the output

        var fields = this.state.fields.map((item, i) => {
            if (!item) {
                // return `<div onclick=${this.handlePlay.bind(this, i)} class="field empty">&nbsp;</div>`
                return `<div ${this.registerEvent('click', this.handlePlay.bind(null, i))} class="field empty">&nbsp;</div>`
            }

            return `<div key={i} class="field">${item.toUpperCase()}</div>`
        });

        // render it into the page

        var output = `
            <div>
                <button class="clearButton" ${this.registerEvent('click', this.handleRestart)}>Clear</button>
                <div class="fieldContainer">
                    ${fields.join("")}
                </div>
            </div>
            `

        // FIXME: Does this clobber events?
        document.querySelector(elSelector).innerHTML = output;
    }
}

export default GameCanvas;
