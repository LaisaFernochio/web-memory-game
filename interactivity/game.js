function Game() {
  this.cards = [
    new Card('1.svg'),
    new Card('2.svg'),
    new Card('3.svg')
  ];

  this.board = new Board(this.cards);
}
