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
    var pairs = [
      new Pair("1.img"),
      new Pair("2.img"),
      new Pair("3.img")
    ];
    var b = new Board(pairs);

    test_helpers.check(b.row_count == 2, "Should have 2 rows!");
    test_helpers.check(b.col_count == 3, "Should have 3 cols!");

    for(row = 0; row < 2; row++)
      for(col = 0; col < 3; col++)
        test_helpers.check(b.places[row][col] instanceof Card, "Should had put a card into this place!");
  }

  this.cards_pairs = function() {
    var pairs = [
      new Pair("1.img"),
      new Pair("2.img"),
      new Pair("3.img")
    ];
    var b = new Board(pairs);

    pairs.forEach(pair =>{
      pair.cards.forEach(card => {
        var found = false;
  
        for(row = 0; row < 2; row++)
          for(col = 0; col < 3; col++)
            found |= b.places[row][col] == card;

        test_helpers.check(found, "Should have one card of each pair!");
      });
    });
  }
}

board_test = new BoardTest();
