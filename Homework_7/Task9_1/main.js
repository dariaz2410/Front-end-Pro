let ladder = {
  count: 0,
  up: function () { 
    this.count++
    return this
    },
  down: function () { 
    this.count--
    return this
  },
  showStep: function () { 
    console.log(this.count)
    return this
  }
};

ladder.up().up().down().showStep();