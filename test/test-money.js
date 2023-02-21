const chai = require("chai");
const expect = chai.expect;
const Money = require("../src/money.js");

describe("Money", function () {
     this.beforeEach(function () {
          m1 = new Money(10.0, "EUR");
     });

     describe("#add()", function () {
          it("should correctly add two moneys with the same currency", function () {
               m2 = new Money(20.0, "EUR");
               m1.add(m2);
               expect(m1.amount).to.equal(30.0);
          });

          it("should correctly add two moneys with different currencies", function () {
               m2 = new Money(20.0, "USD");
               m1.add(m2);
               expect(m1.amount).to.equal(20.0);
          });

          it("should throw an exception when the currency is neither EUR nor USD", function () {
               m2 = new Money(20.0, "BZR");
               // Use expect or should
               expect(m1.add.bind(m1, m2)).to.throw("Unknown currency");
          });
     });
});
