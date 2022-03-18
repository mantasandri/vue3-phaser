<template>
  <ion-phaser v-bind:game.prop="game" />
</template>

<script setup lang="ts">
import Phaser from 'phaser'

const game = {
  type: Phaser.AUTO,
  width: '100%',
  height: 500,
  physics: {
    default: 'arcade',
  },
  scene: {
    init() {
      // this.cameras.main.setBackgroundColor('#24252A')
    },
    create() {
      // this.helloWorld = this.add.text(
      //   this.cameras.main.centerX,
      //   this.cameras.main.centerY,
      //   'Hello World',
      //   { font: '40px Arial', fill: '#ffffff' }
      // )
      // this.helloWorld.setOrigin(0.5)
    },
    update() {
      // this.helloWorld.angle += 1
    },
  },
}
</script>
