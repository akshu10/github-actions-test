class Square {
  _side: number;

  constructor(side?: number) {
    this._side = side ?? 0;
  }

  get area() {
    return this._side * this._side;
  }

  get length() {
    return (this._side + this._side) * 2;
  }
}

export default new Square();
