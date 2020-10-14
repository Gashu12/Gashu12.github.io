"use strict";

class ExtendedClock extends Clock {
    constructor(options) {
      super(options);
      let { precision = 1000 } = options;
      this.precision = precision;
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), this.precision);
    }
  };
/*
let time = new Clock({template: 'h:m:s'});
  time.start();
  time.stop();
  */
