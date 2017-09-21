import { expect } from 'chai';
import { jsdom } from 'jsdom';
import fs from 'fs'; // a node stdlib allowing us to interact with file system

describe("our first test", () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe("index.html", function () {
  it("should say Start JS", function (done) {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, function (err, window) {
      // cache the element in a const.
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Start JS");
      // JSDom is async so we must call done() for the test to check status
      done();
      window.close();
    })
  });
});

// _dw TODO - write these tests using Cheerio syntax

describe("index.html", function () {
  it("should say Trials and Trails", function (done) {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, function (err, window) {
      // cache the element in a const.
      const h2 = window.document.getElementsByTagName('h2')[0];
      expect(h2.innerHTML).to.equal("Trials and Trails");
      // JSDom is async so we must call done() for the test to check status
      done();
      window.close();
    })
  });
});
