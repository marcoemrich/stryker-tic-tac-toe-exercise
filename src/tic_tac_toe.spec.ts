import { describe, it, expect } from "vitest";
import { TicTacToe } from "./tic_tac_toe";

describe("TicTacToe", () => {
  it("should determine the winner", () => {
    const winner = TicTacToe.newEmpty(3)
      .mark(0)
      .mark(4)
      .mark(1)
      .mark(5)
      .mark(2)
      .winner();
    expect(winner).toEqual("X");
  });
});
