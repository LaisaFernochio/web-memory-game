function PairTest() {
  this.run = function() {
    console.info("Pair Testing:");

    try {
      test_helpers.call_test_case("two cards", this.two_cards);

      console.info("Everything Ok!");
    } catch(e) {
      console.error(e);
    }
  }

  this.two_cards = function() {
    var pair = new Pair("1.svg");

    test_helpers.check(pair.cards.length === 2,       "One pair should have 2 cards!");
    test_helpers.check(pair.cards[0].img === "1.svg", "Both cards should have the same image!");
    test_helpers.check(pair.cards[1].img === "1.svg", "Both cards should have the same image!");
  }
}

pair_test = new PairTest();
