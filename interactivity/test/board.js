function BoardTest() {
  this.run = function() {
    console.info("Board Testing:");

    try {
      test_helpers.call_test_case("default size", this.default_size);

      console.info("Everything Ok!");
    } catch(e) {
      console.error(e);
    }
  }

  this.default_size = function() {
    var cartas = [
      new Card("1.img"),
      new Card("2.img"),
      new Card("3.img")
    ];
    var b = new Board(cartas);

    test_helpers.check(b.row_count == 2, "Should have 2 rows!");
    test_helpers.check(b.col_count == 3, "Should have 3 cols!");

    for(row = 0; row < 2; row++)
      for(col = 0; col < 3; col++)
        test_helpers.check(b.places[row][col] instanceof Card, "Should had put a card into this place!");
  }
}

board_test = new BoardTest();