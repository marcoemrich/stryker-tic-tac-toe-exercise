import { describe, it, expect } from "vitest";
import { TicTacToe } from "./tic_tac_toe";

describe("TicTacToe", () => {
  it("should determine the winner", () => {
    const winner = TicTacToe.newEmpty(3)
      .mark(0, 0)
      .mark(1, 1)
      .mark(0, 1)
      .mark(1, 2)
      .mark(0, 2)
      .winner();
    expect(winner).toEqual("X");
  });
});
