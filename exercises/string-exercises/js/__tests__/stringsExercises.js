const rewire = require(`rewire`);
const StringFunctions = rewire(`../strings`).__get__(`StringFunctions`);
const instance = new StringFunctions();

describe(`2.strings`, () => {
  describe(`.reverseString()`, () => {
    it(`reverses 'abc' to 'cba'`, () => expect(instance.reverse(`abc`)).toEqual(`cba`));
    it(`reverses 'sretcarahc fo gnirts a ma i' to 'i am a string of characters'`, () =>
      expect(instance.reverse(`sretcarahc fo gnirts a ma i`)).toEqual(`i am a string of characters`));
    it(`reverses 'amanaP :lanac a ,nalp a ,nam A' to 'A man, a plan, a canal: Panama'`, () =>
      expect(instance.reverse(`amanaP :lanac a ,nalp a ,nam A`)).toEqual(`A man, a plan, a canal: Panama`));
  });

  describe(`.capitalize()`, () => {
    it(`capitalize: should return the input in all-caps`, () =>
      expect(instance.capitalize(`this is web game development`)).toEqual(`THIS IS WEB GAME DEVELOPMENT`));
  });

  describe(`.splitString()`, () => {
    it(`splitString: should divide a string into substrings and return an array`, () =>
      expect(instance.split(`Hello World`)).toEqual([ `Hello`, `World` ]));
    it(`split: should divide a string into substrings and return an array`, () =>
      expect(instance.split(`This is just a test`)).toEqual([ `This`, `is`, `just`, `a`, `test` ]));
  });
});
