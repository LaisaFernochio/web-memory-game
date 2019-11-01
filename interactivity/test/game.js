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

    test_helpers.check(g.board.pairs.length == 3, "Board should have a card set with 3 pairs!");
  }
}

game_test = new GameTest();
