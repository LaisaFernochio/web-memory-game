function Game() {
  this.last_turned_card = null;
  this.in_analysis      = false;
  this.seconds_counter  = 0;
  this.board = new Board(
    [
      new Pair('images/card-front/1.svg'),
      new Pair('images/card-front/2.svg'),
      new Pair('images/card-front/3.svg')
    ]
  );

  this.pair_match = function(card) {
    return card.img === this.last_turned_card.img
  }

  this.start_stopwatch = function() {
    var that = this;

    setInterval(function() { ++that.seconds_counter }, 1000 );
  }

  this.setup_card_click = function() {
    var cards = document.getElementsByClassName("card");
    var that = this;

    for(let card = 0; card < cards.length; card++) {
      cards[card].addEventListener('click', function() {
        if(!that.in_analysis) {
          var chosen_card = that.board.places[Math.floor(card / 3)][card % 3];

          if(!chosen_card.turned) {
            chosen_card.turn();

            if(that.last_turned_card === null) {
              that.last_turned_card = chosen_card;
            } else if(that.pair_match(chosen_card)) {
              console.info('Match!');
              that.last_turned_card = null;
            } else {
              that.in_analysis = true;

              setTimeout(function() {
                  chosen_card.turn();
                  that.last_turned_card.turn();
                  that.last_turned_card = null;

                  that.update_screen();

                  that.in_analysis = false;
                },
                1000
              );
            }

            that.update_screen();
          }
        }
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
  this.start_stopwatch();
}
