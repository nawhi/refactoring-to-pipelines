import { expect } from "chai";

interface Stream {
  write(s: string): void;
}

// refactor me to be more functional!
function writeToStream(things: string[], stream: Stream) {
  for (const thing of things) {
    stream.write(thing);
  }
}


describe(' - Iterating', () => {
  it('writes all items in list to the stream', () => {
    const stream = new ConcatStream();
    writeToStream(["one", "two", "three"], stream);
    expect(stream.asString()).to.eql("onetwothree");
  });
});

class ConcatStream implements Stream {
  private buffer: string = ""

  write(s: string): void {
    this.buffer = this.buffer.concat(s);
  }

  public asString(): string { return this.buffer; }
}

