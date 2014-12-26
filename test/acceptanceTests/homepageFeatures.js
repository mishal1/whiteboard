describe('homepage', function(){

  before(function(){
    casper.start('http:localhost:3000/');
  });

  it('says "Whiteboard" on homepage', function(){
    casper.then(function(){
      expect("body").to.contain.text("Whiteboard")
    });
  });

  

});