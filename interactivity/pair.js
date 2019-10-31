function Pair(img) {
  this.cards = [];

  this.init = function(img) {
    this.cards[0] = new Card(img);
    this.cards[1] = new Card(img);
  }

  this.init(img);
}
