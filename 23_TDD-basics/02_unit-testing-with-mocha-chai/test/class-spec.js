const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    let word;

    beforeEach(() => word = new Word("hello"));

    it('should have a "word" property', function () {
      expect(word.word).to.exist;
    });

    it('should set the "word" property when a new word is created', function () {
      expect(word.word).to.equal("hello");
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      let word = new Word("banana");
      expect(word.removeVowels()).to.equal("bnn");
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      let word = new Word("Apple");
      expect(word.removeConsonants()).to.equal("Ae");
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      let word = new Word("Zyraphyl");
      expect(word.pigLatin()).to.equal("aphylZyray");
    });
  });
});