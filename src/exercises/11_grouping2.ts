import { expect } from "chai";

type MultipleMap = { [n: number]: number[] };

// refactor me to be more functional
function multiples(max: number): MultipleMap {
  const multiples: MultipleMap = {};
  for (let i = 2; i < max; i++) {
    const divisor: number = smallestDivisor(i);

    const group = multiples[divisor];
    if (group) {
      group.push(i);
    } else {
      multiples[divisor] = [i];
    }
  }
  return multiples;
}

describe("Exercise 11 - Grouping 2", () => {
  it("returns primes and their multiples up to 10", () => {
    expect(multiples(10)).to.eql({
      [2]: [2, 4, 6, 8],
      [3]: [3, 9],
      [5]: [5],
      [7]: [7],
    });
  });
  it("returns primes and their multiples up to 30", () => {
    expect(multiples(30)).to.eql({
      [2]: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
      [3]: [3, 9, 15, 21, 27],
      [5]: [5, 25],
      [7]: [7],
      [11]: [11],
      [13]: [13],
      [17]: [17],
      [19]: [19],
      [23]: [23],
      [29]: [29],
    });
  });
});

// utility function - no need to refactor this
function smallestDivisor(n: number): number {
  if (n < 2) {
    throw new RangeError();
  }

  for (let k = 2; k <= Math.floor(Math.sqrt(n)); k++) {
    if (n % k == 0) {
      return k;
    }
  }
  return n;
}
