function CardTest() {
  this.run = function() {
    console.info("Card Testing:");

    try {
      test_helpers.call_test_case('default properties',  this.default_properties);
      test_helpers.call_test_case('specific properties', this.specific_properties);
      test_helpers.call_test_case('turn',                this.turn);

      console.info('Everything Ok!');
    }
    catch(e) {
      console.error(e);
    }
  }

  this.default_properties = function() {
    var c = new Card('img.ext');

    test_helpers.check(c.img === 'img.ext', "Image not initialized correctly!");
    test_helpers.check(!c.turned,           "Card should not be turned!");
  }

  this.specific_properties = function() {
    var c = new Card('img.ext', true);

    test_helpers.check(c.img === 'img.ext', "Image not initialized correctly!");
    test_helpers.check(c.turned,            "Card should be turned!");
  }

  this.turn = function() {
    var c = new Card('img.ext', false);
    c.turn();

    test_helpers.check(c.turned, "Card should be turned!");
  }
}

card_test = new CardTest();
