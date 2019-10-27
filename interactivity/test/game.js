function GameTest() {
  this.run = function() {
    console.info("Game Testing:");

    try {
      test_helpers.call_test_case("default properties", this.default_properties);

      console.info("Everything Ok!");
    } catch(e) {
      console.error(e);
    }
  }

  this.default_properties = function() {
    var g = new Game();

    test_helpers.check(g.cards.length == 3,       "Should have a card set with 3 cards!");
    test_helpers.check(g.board.cards  == g.cards, "Should have a board!");
  }
}

game_test = new GameTest();
