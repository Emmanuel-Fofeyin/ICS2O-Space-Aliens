/* global Phaser */

// Copyright (c) 2020 Emmanuel Fofeyin All rights reserved
//
// Created by: Emmanue Fofeyin
// Created on: April 25 2022
// This is the Title Scene

class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: 'titleScene'})
  }

  int (data) {
    this.cameras.main.setBackgroundColor ('#ffffff')
  }

  preload () {
    console.log('Title Scene')
  }

  create (data) {
  }

  update (time, delta){
  }
}

export defult SplashScene {
}
  