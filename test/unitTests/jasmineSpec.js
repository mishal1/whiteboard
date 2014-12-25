var Jasmine = require('../../src/jasmine.js');

describe('Jasmine', function(){

  it("checking if jasmine is working", function(){
    var jasmine = new Jasmine
    expect(jasmine.working()).toEqual(true);
  });

});