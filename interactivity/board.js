function Board(pairs, row_count = 2, col_count = 3) {
  this.pairs     = pairs;
  this.row_count = row_count;
  this.col_count = col_count;
  this.places    = [];

  this.distribute_cards = function() {
    var cards_usage = new CardsUsage(this.pairs);

    for(row = 0; row < row_count; row++){ 
      var row_places = [];

      for(col = 0; col < col_count; col++)
        row_places[col] = cards_usage.next_available_card();

      this.places[row] = row_places;
    }
  }

  function CardsUsage(pairs_of_cards) {
    this.cards_use = [];

    this.init = function(pairs_of_cards) {
      pairs_of_cards.forEach(pair => {
        this.cards_use = this.cards_use.concat(pair.cards);
      });
    }

    this.next_available_card = function() {
      return this.cards_use.splice(
        Math.random() * this.cards_use.length,
        1
      )[0];
    }

    this.init(pairs_of_cards);
  }

  this.distribute_cards();
}
