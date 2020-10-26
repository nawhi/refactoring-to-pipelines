import { expect } from "chai";
import _ = require("lodash");

type Person = {
  name: string;
  hobbies: string[];
  birthYear: number;
};

function separateMillenials(people: Person[]): [Person[], Person[]] {
  const millenials: Person[] = [],
    others: Person[] = [];
  for (const person of people) {
    if (person.birthYear >= 1981 && person.birthYear <= 1996) {
      millenials.push(person);
    } else {
      others.push(person);
    }
  }

  return [millenials, others];
}

describe("Partition", () => {
  it("separates millennials", () => {
    const channing = {
      name: "Channing",
      birthYear: 1980,
      hobbies: ["movies", "sculpture"],
    };
    const greta = {
      name: "Greta",
      birthYear: 2003,
      hobbies: ["dogs", "sailing"],
    };
    const martin = {
      name: "Martin",
      birthYear: 1996,
      hobbies: ["music", "rocks"],
    };
    const people: Person[] = [channing, greta, martin];

    expect(separateMillenials(people)).to.eql([[martin], [channing, greta]]);
  });
});
