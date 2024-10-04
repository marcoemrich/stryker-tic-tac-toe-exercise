import * as R from "ramda";
import { Line } from "./line";

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
    this.fields; //?
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

  mark(cellNr: number) {
    if (R.nth(cellNr, this.fields) !== " ") return this;

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
