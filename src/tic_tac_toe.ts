import * as R from "ramda";
import { Line } from "./line";
import { Coordinate } from "./Coordinate";

// const mapIndexed = R.addIndex(R.map);

export class TicTacToe {
  private fields: string[];
  private width: number;
  private _currentPlayer: string;

  constructor(fields: string[], width: number, currentPlayer = "X") {
    this.fields = fields;
    this.width = width;
    this._currentPlayer = currentPlayer;
  }

  get currentPlayer() {
    return this._currentPlayer;
  }

  get numberOfFields() {
    return this.fields.length;
  }

  static newEmpty(width: number) {
    return new TicTacToe(Array(width ** 2).fill(" "), width);
  }

  toString() {
    return this.fields.join("");
  }

  winner() {
    console.log(this.rows().map((r) => new Line(r).winner()));
    return (
      R.union(
        this.rows().map((r) => new Line(r).winner()),
        this.cols().map((c) => new Line(c).winner())
      ).filter((symbol) => symbol != " ")[0] || false
    );
  }

  oppositePlayer() {
    return this._currentPlayer === "X" ? "O" : "X";
  }

  mark(x: number, y: number) {
    const cellNr = Coordinate.toSequential(new Coordinate(x, y), this.width);

    if (cellNr >= this.numberOfFields) throw new Error("Field out of bounds");

    if (R.nth(cellNr, this.fields) !== " ")
      throw new Error("Field already marked");

    let ttt = new TicTacToe(
      R.update(cellNr, this.currentPlayer, this.fields),
      this.width,
      this.oppositePlayer()
    );
    return ttt;
  }

  rows() {
    return R.splitEvery(this.width, this.fields);
  }

  cols() {
    return R.transpose(this.rows());
  }
}
