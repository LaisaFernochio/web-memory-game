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
    var that = this;

    for(let card = 0; card < cards.length; card++) {
      cards[card].addEventListener('click', function() {
        that.board.places[Math.floor(card / 3)][card % 3].turn();
        that.update_screen();
      });
    }
  }

  this.update_screen = function() {
    this.update_board();
  }

  this.update_board = function() {
    var cards = document.getElementsByClassName("card");

    for(var card = 0; card < cards.length; card++) {
      var on_board_card = this.board.places[Math.floor(card / 3)][card % 3];
      var card_img      = cards[card].getElementsByTagName('img')[0];

      if(on_board_card.turned)
        card_img.src = on_board_card.img;
      else
        card_img.src = 'images/card-back.svg';
    }
  }

  this.setup_card_click();
}
