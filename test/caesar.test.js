const caesar = require("../src/caesar.js").caesar;
const expect = require("chai").expect;
 
describe("caesar",()=>{
    it("should return false if not given shift",()=>{
        const actual=  caesar("Hello there");
        expect(actual).to.be.false;
    });
    it("should return false if shift is zero",()=>{
        const actual=  caesar("Hello there");
        expect(actual).to.be.false;
    });
    it("should return false if shift>25",()=>{
        const actual=  caesar("Hello there");
        expect(actual).to.be.false;
    });
    it("should return false if shift<-25",()=>{
        const actual=  caesar("Hello there");
        expect(actual).to.be.false;
    });
    it("should keep spaces and non-alphabet charictors the same",()=>{
        const expected="a b c.";
        const actual = caesar("b c d.",-1);
        expect(actual).to.eql(expected);
    })
});
