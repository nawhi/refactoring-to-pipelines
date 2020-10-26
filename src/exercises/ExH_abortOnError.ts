import { expect } from "chai";

// refactor me to be more functional
function mapToUrl(strings: string[]): URL[] {
  const uris: URL[] = [];
  for (const string of strings) {
    try {
      uris.push(new URL(string));
    } catch (e) {
      throw new CustomError(`Failed to map "${string}" to URL`);
    }
  }
  return uris;
}

class CustomError extends Error {}

describe("Abort on Error", () => {
  it("good urls pass", () => {
    const goodUris = [
      "http://example.com/example_a",
      "http://example.com/example_b",
      "http://example.com/example_c",
    ];

    expect(mapToUrl(goodUris)).to.eql([
      new URL("http://example.com/example_a"),
      new URL("http://example.com/example_b"),
      new URL("http://example.com/example_c"),
    ]);
  });

  it("errors are caught and rethrown", () => {
    const badUris = [
      "http://example.com/good",
      "example.com/bad",
      "http://example.com/good2",
    ];

    expect(() => mapToUrl(badUris)).to.throw(CustomError);
  });
});
