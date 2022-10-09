const expect = require("chai").expect;
const substitution = require("../src/substitution").substitution;

describe("substitution",()=>{
    it("should return false if no alphabet give",()=>{
        let actual = substitution("hello there");
        expect(actual).to.be.false;
    })
    it("should return false if alphabet is not 26 charictors",()=>{
        let actual =substitution("hello ther", "abc");
        expect(actual).to.be.false;
    })
})