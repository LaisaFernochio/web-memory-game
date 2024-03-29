function Game() {
  this.last_turned_card = null;
  this.state            = "running";
  this.seconds_counter  = 0;
  this.pairs_left       = 3;
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

    setInterval(function() {
        if(that.state !== "finished") {
          ++that.seconds_counter;
          that.update_stopwatch();
        }
      },
      1000
    );
  }

  this.setup_card_click = function() {
    var cards = document.getElementsByClassName("card");
    var that = this;

    for(let card = 0; card < cards.length; card++) {
      cards[card].addEventListener('click', function() {
        if(that.state === "running") {
          var chosen_card = that.board.places[Math.floor(card / 3)][card % 3];

          if(!chosen_card.turned) {
            chosen_card.turn();

            if(that.last_turned_card === null) {
              that.last_turned_card = chosen_card;
            } else if(that.pair_match(chosen_card)) {
              --that.pairs_left;
              that.last_turned_card = null;

              if(that.pairs_left === 0)
                that.state = "finished";
            } else {
              that.state = "in_analysis";

              setTimeout(function() {
                  chosen_card.turn();
                  that.last_turned_card.turn();

                  that.last_turned_card = null;
                  that.state            = "running";

                  that.update_board();
                  that.update_state();
                },
                1000
              );
            }

            that.update_board();
            that.update_state();
          }
        }
      });
    }
  }

  this.update_screen = function() {
    this.update_board();
    this.update_stopwatch();
    this.update_state();
  }

  this.update_state = function() {
    var state = document.getElementsByClassName("state")[0];

    switch(this.state) {
      case "running":     state.innerHTML = "Em Andamento"; break;
      case "in_analysis": state.innerHTML = "Analisando";   break;
      case "finished":    state.innerHTML = "Fim de Jogo";  break;
      default:            state.innerHTML = "Indefinido";
    }
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

  this.update_stopwatch = function() {
    var minutes   = parseInt(this.seconds_counter / 60);
    var seconds   = parseInt(this.seconds_counter % 60);
    var stopwatch = document.getElementsByClassName("stopwatch")[0];

    stopwatch.innerHTML = `${minutes} minutos e ${seconds} segundos`;
  }

  this.setup_card_click();
  this.start_stopwatch();
  this.update_screen();
}
