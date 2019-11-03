function GameTest() {
  this.run = function() {
    console.info("Game Testing:");

    try {
      test_helpers.call_test_case("default properties", this.default_properties);
      test_helpers.call_test_case("pair_match",         this.pair_match);
      test_helpers.call_test_case("stopwatch",          this.stopwatch);

      console.info("So far, everything Ok (stopwatch being verified asynchronously)!");
    } catch(e) {
      console.error(e);
    }
  }

  this.default_properties = function() {
    var g = new Game();

    test_helpers.check(g.board.pairs.length === 3,         "Board should have a card set with three pairs!");
    test_helpers.check(g.last_turned_card   === null,      "Cards should not start turned!");
    test_helpers.check(g.seconds_counter    === 0,         "Seconds counter should not start different from zero!");
    test_helpers.check(g.pairs_left         === 3,         "Should not have found any pair yet!");
    test_helpers.check(g.state              === "running", "Should start running!");
  }

  this.pair_match = function() {
    var g = new Game();
    g.last_turned_card = new Card('1.svg');

    test_helpers.check(g.pair_match(new Card('1.svg')),  "Should be a pair!");
    test_helpers.check(!g.pair_match(new Card('2.svg')), "Should not be a pair!");
  }

  this.stopwatch = function() {
    var g = new Game();

    setTimeout(function() {
        try {
          test_helpers.check(g.seconds_counter == 3, "Stopwatch should had incremented the seconds counter by one!");

          console.info("stopwatch Ok!");
        } catch(e) {
          console.error(e);
        }
      },
      3000
    );
  }
}

game_test = new GameTest();
