/* global Phaser */

// Copyright (c) 2022 Emmanuel.Fofeyin All rights reserved
//
// Created by: Emmanuel
// Created on: May 2022
// This is the Phaser3 game configuration file

// scene import statements
import splashScene from "./splashScene.js"
import titleScene from "./titleScene.js"
import menuScene from "./menuScene.js"
import gameScene from "./gameScene.js"

// create the new scenes
const splashScene = new splashScene()
const titleScene = new titleScene()
const menuScene = new menuScene()
const gameScene = new gameScene()

/**
 * Start Phaser Game.
 */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  // set background color
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in the middle of the page.
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
}

const game = new Phaser.Game(config)
// console.log(game)

// load scenes
// Note: remember any "key" is global and CAN NOT be reused!
game.scene.add("SplashScene", splashScene)
game.scene.add("TitleScene", titleScene)
game.scene.add("MenuScene", menuScene)
game.scene.add("GameScene", gameScene)


// the start scene
game.scene.start("splashScene")