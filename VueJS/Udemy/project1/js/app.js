(function() {

  'use strict';

  new Vue({
    el: '#app',
    data: {
      playerHealth: 100,
      monsterHealth: 100,
      started: false,
      log: []
    },
    methods: {
      startGame() {
        this.started = true;
        this.playerHealth = 100;
        this.monsterHealth = 100;
      },
      normalAttack() {
        const damage = this.calculateDamage(5, 10);
        this.monsterHealth -= damage;
        this.log.unshift({
          class: 'player-turn',
          text: `Player attack damages monster for ${damage}`
        });
        if (!this.checkGameEnd()) {
          this.monsterAttack();
        }
      },
      specialAttack() {
        const damage = this.calculateDamage(0, 15);
        this.monsterHealth -= damage;
        this.log.unshift({
          class: 'player-turn',
          text: `Player special attack damages monster for ${damage}!`
        });
        if (!this.checkGameEnd()) {
          this.monsterAttack();
        }
      },
      heal() {
        const heal = this.calculateDamage(0, 15);
        this.playerHealth += heal;
        if (this.playerHealth > 100) {
          this.playerHealth = 100;
        }
        this.log.unshift({
          class: 'player-turn',
          text: `Player heals himself for ${heal}`
        });
        this.monsterAttack();
      },
      monsterAttack() {
        const damage = this.calculateDamage(1, 12);
        this.playerHealth -= damage;
        this.log.unshift({
          class: 'monster-turn',
          text: `Monster attack damages player for ${damage}`
        });
        this.checkGameEnd();
      },
      checkGameEnd() {
        if (this.playerHealth <= 0) {
          if (confirm('You lost the game. New Game?')) {
            this.startGame();
          } else {
            this.started = false;
          }
          return true;
        } else if (this.monsterHealth <= 0) {
          if (confirm('You won the game! New Game?')) {
            this.startGame();
          } else {
            this.started = false;
          }
          return true;
        }
        return false;
      },
      calculateDamage(min, max) {
        return Math.max(min, Math.round(Math.random() * max));
      },
      giveUp() {
        this.started = false;
      }
    }
  });

})();
