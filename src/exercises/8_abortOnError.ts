import { expect } from "chai";

function softMapToURL(strings: string[]): URL[] {
  const uris: URL[] = [];
  for (const string of strings) {
    try {
      uris.push(new URL(string));
    } catch (e) {}
  }
  return uris;
}

describe("Exercise 8 - Abort on Exception", () => {
  it("good urls pass", () => {
    const goodUris = [
      "http://example.com/example_a",
      "http://example.com/example_b",
      "http://example.com/example_c",
    ];

    expect(softMapToURL(goodUris)).to.eql([
      new URL("http://example.com/example_a"),
      new URL("http://example.com/example_b"),
      new URL("http://example.com/example_c"),
    ]);
  });

  it("bad urls are ignored", () => {
    const badUris = [
      "http://example.com/good",
      "example.com/bad",
      "http://example.com/good2",
    ];

    expect(softMapToURL(badUris)).to.eql([
      new URL("http://example.com/good"),
      new URL("http://example.com/good2"),
    ]);
  });
});
