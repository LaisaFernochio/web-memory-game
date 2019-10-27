function Board(cards, row_count = 2, col_count = 3) {
  this.cards     = cards;
  this.row_count = row_count;
  this.col_count = col_count;
  this.places    = [];

  this.init = function() {
    for(row = 0; row < row_count; row++){ 
      var row_places = [];

      for(col = 0; col < col_count; col++)
        row_places[col] = new Card("x.img");

      this.places[row] = row_places;
    }
  }
  
  this.init();
}
