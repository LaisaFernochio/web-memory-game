function Card(img, turned = false) {
  this.turned = turned;
  this.img    = img;

  this.turn = function() {
    this.turned = !this.turned;
  }
}
