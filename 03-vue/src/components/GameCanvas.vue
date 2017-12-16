<template>
  <div>
    <button class="clearButton" @click="handleRestart">Clear</button>

    <div class="fieldContainer">
      <template v-for="(field, index) in fields">
        <template v-if="field === false">
          <div @click="handlePlay(index)" class="field empty">&nbsp;</div>
        </template>
        <template v-else>
          <div class="field">{{field | uppercase}}</div>
        </template>
      </template>
    </div>

  </div>
</template>

<script>
export default {
  name: 'GameCanvas',
  data () {
    return {
      msg: 'Tic Tac Toe',
      fields: Array(9).fill(false),
      player1: "x",
      player2: "o",
      currentPlayer: 1
    }
  },
  methods: {
    handlePlay: function(index) {

      // clone fields so vue knows when update occurs
      var fields = this.fields.slice();
      var piece = this['player' + this.currentPlayer]; //x or o

      fields[index] = piece;

      // fill in the current piece, and switch player
      this.fields = fields;
      this.currentPlayer = this.currentPlayer === 1 ? 2 : 1; // toggle between player  1 and 2
    },
    handleRestart: function(event) {
      this.fields = Array(9).fill(false); // start with array of 9 with false filled in
    }
  },
  filters: {
    uppercase: function(value) {
      if (!value) return '';
      return value.toUpperCase();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* Tic Tac Toe board */
.fieldContainer {
  width: 312px;
}

.field {
  /* background-color: red; */
  border: 1px #eee solid;
  display: inline-block;
  font-size: 72px;
  line-height: 98px;
  text-align: center;
  height: 100px;
  width: 100px;
}

.empty:hover {
  background-color: #fbfbfb;
}

.clearButton{
  margin-bottom: 15px;
}
</style>
