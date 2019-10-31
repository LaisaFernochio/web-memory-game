function BoardTest() {
  this.run = function() {
    console.info("Board Testing:");

    try {
      test_helpers.call_test_case("default size", this.default_size);
      test_helpers.call_test_case("cards pairs",  this.cards_pairs);

      console.info("Everything Ok!");
    } catch(e) {
      console.error(e);
    }
  }

  this.default_size = function() {
    var cards = [
      new Card("1.img"),
      new Card("2.img"),
      new Card("3.img")
    ];
    var b = new Board(cards);

    test_helpers.check(b.row_count == 2, "Should have 2 rows!");
    test_helpers.check(b.col_count == 3, "Should have 3 cols!");

    for(row = 0; row < 2; row++)
      for(col = 0; col < 3; col++)
        test_helpers.check(b.places[row][col] instanceof Card, "Should had put a card into this place!");
  }

  this.cards_pairs = function() {
    var cards = [
      new Card("1.img"),
      new Card("2.img"),
      new Card("3.img")
    ];
    var b = new Board(cards);

    cards.forEach(card => {
      var founds = 0;

      for(row = 0; row < 2; row++)
        for(col = 0; col < 3; col++)
          if(b.places[row][col] == card)
            ++founds

      test_helpers.check(founds == 2, "Should have one pair of each card!");
    });
  }
}

board_test = new BoardTest();
