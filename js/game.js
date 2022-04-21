/* global Phaser */

// Copyright (c) 2020 Emmanuel Fofeyin All rights reserved
//
// Created by: Emmanuel Fofeyin
// Created on: April 20 2022
// This is a Phaser3 configuration file

//*Game scene */
const config = { 
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    defult: 'arcade',
    arcade: {
      debug: true
    }
  },
  // set background color
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in the middle of the page.
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

const game = new Phaser.Game(config)
console.log(game)
