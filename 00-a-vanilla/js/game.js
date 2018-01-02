
class GameCanvas {
    constructor(elQuery) {
        this.el = document.querySelector(elQuery);
    }

    resetStateAndDom() {
        // wipe the state
        this.state = {
            player1: "x",
            player2: "o",
            currentPlayer: 1
        };

        // wipe the dom
        // prep the dom (using the template)
        var fieldTemplate = document.querySelector('#fieldContainer-template');
        this.el.querySelector('.fieldContainer').innerHTML = fieldTemplate.innerHTML;
    }

    // fires everything up... TODO: Should this just be the constructor?
    init() {
        this.addEventListeners();

        this.resetStateAndDom();
    }


    handleRestart() {
        this.resetStateAndDom();
    }

    handlePlay(el) {
        var piece = this.state['player' + this.state.currentPlayer]; //x or o

        // fill in the current piece, and switch player
        this.state.currentPlayer = this.state.currentPlayer === 1 ? 2 : 1 // toggle between player  1 and 2

        // add the piece to the dom
        el.innerHTML = piece.toUpperCase();
        el.classList.remove('empty')

    }

    addEventListeners() {
        // debugger;
        // delegate the minor things in here...
        this.el.addEventListener('click', e => {
            // set up the various callbacks...
            var el = e.target;
            // console.log('e.target', e.target)
            // if it's an empty field...

            if (el.classList.contains('field') && el.classList.contains('empty')) {
                this.handlePlay(el);
            }

            if (el.classList.contains('clearButton')) {
                this.handleRestart();
            }

        })
    }
}
