// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/************************
 * REDUX STATE SETUP
 ************************/
import store from './reduxState';

// get the default state
var reduxState = store.getState();

// can't replace the top level with vue...
// since redux replaces the whole state, we have to nest it one level...
// TODO: Q: How would we do private state as well? (bonus? Time allowing...)
var state = {
  fields: reduxState.fields
}
// subscribe to updates
var unsubscribe = store.subscribe(function() {
  reduxState = store.getState();

  // Subscribe vue to these field updates...
  state.fields = reduxState.fields;
})

/************************
 * VUE APP SETUP
 ************************/
new Vue({
  destroyed: function() {
    unsubscribe();
  },
  el: '#app',
  template: '<App/>',
  components: { App },
  data: state
})
