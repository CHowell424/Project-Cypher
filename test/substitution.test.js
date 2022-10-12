const expect = require("chai").expect;
const substitution = require("../src/substitution").substitution;

describe("substitution",()=>{
    it("should return false if no alphabet is given",()=>{
        let actual = substitution("hello there");
        expect(actual).to.be.false;
    })
    it("should return false if alphabet is not 26 charictors",()=>{
        let actual =substitution("hello there", "abc");
        expect(actual).to.be.false;
    })
    it("should cypher correctly",()=>{
        let actual = substitution("This is a secret meesage", "/.,?><';!@#$%^&*()_+-=~`CS");
        let expected = "+;!_ !_ / _>,)>+ %>>_/'>";
        expect(actual).to.equal(expected);
    })
    it("should decypher correctly",()=>{
        let actual=substitution("+;!_ !_ / _>,)>+ %>>_/'>","/.,?><';!@#$%^&*()_+-=~`CS",false);
        let expected = "this is a secret meesage";
        expect(actual).to.equal(expected);
    })
})