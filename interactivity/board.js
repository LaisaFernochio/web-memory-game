function Board(cards, row_count = 2, col_count = 3) {
  this.cards     = cards;
  this.row_count = row_count;
  this.col_count = col_count;
  this.places    = [];

  this.distribute_cards = function() {
    var cards_usage = new CardsUsage(this.cards);

    for(row = 0; row < row_count; row++){ 
      var row_places = [];

      for(col = 0; col < col_count; col++)
        row_places[col] = cards_usage.next_available_card();

      this.places[row] = row_places;
    }
  }

  function CardsUsage(cards_for_use) {
    this.cards_use = [];

    this.init = function(cards_for_use) {
      for(card_use = 0; card_use < cards_for_use.length; card_use++)
        this.cards_use[card_use] = {
          'card': cards_for_use[card_use],
          'uses': 0
        }
    }

    this.next_available_card = function() {
      var card_position;

      do
        card_position = Math.floor(Math.random() * cards_for_use.length);
      while(this.cards_use[card_position]['uses'] == 2);

      ++this.cards_use[card_position]['uses'];

      return this.cards_use[card_position]['card'];
    }

    this.init(cards_for_use);
  }

  this.distribute_cards();
}
