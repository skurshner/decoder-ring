const { substitution } = require("../src/substitution");
const expect = require("chai").expect; // Write your tests here!

describe("substitution", () => {
  describe("Function Validation", () => {
    it("should be a function", () => {
      const expected = "function";
      const actual = typeof substitution;
      expect(actual).to.equal(expected);
    });
  });
  describe("Error Handling", () => {
    it("should return false if alphabet isn't 26 characters", () => {
      const actual = substitution("thinkful", "short");
      expect(actual).to.be.false;
    });
    it("should return false if alphabet has duplicate characters", () => {
      const actual = substitution("thinkful", "abcdefghijklmnopqrstuvwxya");
      expect(actual).to.be.false;
    });
  });
  describe("Encoding", () => {
    it("should return a string with the correct encoding", () => {
      const expected = "jrufscpw";
      const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
      expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
      const expected = "elp xhm xf mbymwwmfj dne";
      const actual = substitution("YOU ARE AN EXCELLENT SPY", "xoyqmcgrukswaflnthdjpzibev");
      expect(actual).to.equal(expected);
    });
    it("should ignore spaces", () => {
      const expected = "elp xhm xf mbymwwmfj dne";
      const actual = substitution("you are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
      expect(actual).to.equal(expected);
    });
    it("should ignore special characters in input string", () => {
      const expected = "elp xhm xf mbymwwmfj dne!";
      const actual = substitution("you are an excellent spy!", "xoyqmcgrukswaflnthdjpzibev");
      expect(actual).to.equal(expected);
    });
    it("should encode correctly with special characters in alphabet", () => {
      const expected = "y&ii$r&";
      const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
      expect(actual).to.equal(expected);
    });
  });
});
