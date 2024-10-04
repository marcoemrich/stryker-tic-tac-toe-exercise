export class Coordinate {
  constructor(public x: number, public y: number) {}

  static fromSequential(index: number, width: number): Coordinate {
    const x = index % width;
    const y = Math.floor(index / width);
    return new Coordinate(x, y);
  }

  static toSequential(coord: Coordinate, width: number): number {
    return coord.y * width + coord.x;
  }
}
