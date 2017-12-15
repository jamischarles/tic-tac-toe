import { Component } from '@angular/core';
import store from './reduxState.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tic Tac Toe';
  unsubRedux; // declare so we can save the unsubscribe for later

  ngOnInit() {
    this.unsubRedux = store.subscribe(() => {
      var reduxState = store.getState();

      // connect these fields to redux
      this.fields = reduxState.fields
    })

  }

  ngOnDestroy() {
    // remove the redux subscription
    this.unsubRedux();
  }

  // default state
  fields = store.getState().fields;

  // event handlers
  handlePlay(index) {
    store.dispatch({type: 'MARK_FIELD', data: {fieldIndex: index}});
  }

  handleRestart() {
    store.dispatch({type: 'RESET_FIELDS'});
  }
}
