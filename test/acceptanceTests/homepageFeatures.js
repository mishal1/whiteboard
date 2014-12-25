describe('homepage', function(){

  before(function(){
    casper.start('http:localhost:3000/');
  });

  it('Hello worlds', function(){
    casper.then(function(){
      expect("body").to.contain.text("Hello World")
    });
  });

});