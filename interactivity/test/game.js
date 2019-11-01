function GameTest() {
  this.run = function() {
    console.info("Game Testing:");

    try {
      test_helpers.call_test_case("default properties", this.default_properties);
      test_helpers.call_test_case("turned cards",       this.default_turned_cards);
      test_helpers.call_test_case("pair_match",         this.pair_match);

      console.info("Everything Ok!");
    } catch(e) {
      console.error(e);
    }
  }

  this.default_properties = function() {
    var g = new Game();

    test_helpers.check(g.board.pairs.length == 3, "Board should have a card set with 3 pairs!");
  }

  this.default_turned_cards = function() {
    var g = new Game();

    test_helpers.check(g.last_turned_card === null, "Cards should not start turned!");
  }

  this.pair_match = function() {
    var g = new Game();
    g.last_turned_card = new Card('1.svg');

    test_helpers.check(g.pair_match(new Card('1.svg')),  "Should be a pair!");
    test_helpers.check(!g.pair_match(new Card('2.svg')), "Should not be a pair!");
  }
}

game_test = new GameTest();
