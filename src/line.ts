import R from "ramda";

export class Line {
  constructor(private fields: string[]) {}

  winner() {
    return this.fields.every((f) => f === this.fields[0])
      ? this.fields[0]
      : " ";
  }
}
