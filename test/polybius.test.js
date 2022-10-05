const expect = require("chai").expect;
const polybius = require("../src/polybius").polybius;

describe("polybius",()=>{
    it("return false when decoding odd amount of numbers",()=>{
        const expected =false;
        const actual = polybius("12343",false);
        expect(actual).to.equal(expected);
    })
    it("should return correct string when decyphering",()=>{
        const expected = "hello there";
        const actual = polybius("3251131343 4432512451",false);
        expect(actual).to.equal(expected);
    })
    it("should return correct string when cyphering",()=>{
        const expected = "3251131343 4432512451";
        const actual = polybius("hello there");
        expect(actual).to.equal(expected);
    })
})