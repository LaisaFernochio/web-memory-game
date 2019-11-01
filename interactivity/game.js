function Game() {
  this.board = new Board(
    [
      new Pair('images/card-front/1.svg'),
      new Pair('images/card-front/2.svg'),
      new Pair('images/card-front/3.svg')
    ]
  );

  this.setup_card_click = function() {
    var cards = document.getElementsByClassName("card");
    var board = this.board;

    for(let card = 0; card < cards.length; card++) {
      cards[card].addEventListener('click', function() {
        board.places[Math.floor(card / 3)][card % 3].turn();
      });
    }
  }

  this.setup_card_click();
}
