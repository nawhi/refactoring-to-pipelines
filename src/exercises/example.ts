import { expect } from "chai";

type Author = {
  name: string;
  handle?: string;
  company: string;
}

function twitterHandles(authors: Author[], company: string) {
  const result: string[] = [];
  for (const a of authors) {
    if (a.company === company) {
      const handle = a.handle;
      if (handle != null)
        result.push(handle);
    }
  }
  return result;
}


describe("Example", () => {
  it("gets the twitter handles of all authors at the given company", () => {
    const martinFowler = { name: "Martin Fowler", company: "ThoughtWorks", handle: "martinfowler", };
    const sandroMancuso = { name: "Sandro Mancuso", company: "Codurance", handle: "sandromancuso", };
    const robertMartin = { name: "Robert C. Martin", company: "cleancoder.com", handle: "unclebobmartin", };
    const mashooqBadar = { name: "Mashooq Badar", company: "Codurance" };

    const authors = [
      martinFowler,
      sandroMancuso,
      robertMartin,
      mashooqBadar
    ];

    expect(twitterHandles(authors, "Codurance")).to.eql(['sandromancuso']);
  });

  it("returns empty array if passed one", () => {
    expect(twitterHandles([], "company")).to.be.empty;
  });
});
