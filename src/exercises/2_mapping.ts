import { expect } from "chai";

// refactor me to be more functional
function mapToNumbers(things: string[]): number[] {
  const result: number[] = [];
  for (const thing of things) {
    result.push(Number(thing));
  }
  return result;
}

describe("Exercise 2 - Mapping", () => {
  it("turns each input into a number", () => {
    expect(mapToNumbers(["2", "3", "5", "7"])).to.eql([2, 3, 5, 7]);
  });
});
