var chai = require("chai");
var _ = require("underscore");
_.mixin(require('../src/underscore.parse'));

describe("underscore.parse", function() {
  it("should parse boolean", function() {
    chai.expect(_.parse("true")).to.equal(true);
    chai.expect(_.parse("false")).to.equal(false);
  });

  it("should parse null", function() {
    chai.expect(_.parse("null")).to.equal(null);
  });

  it("should parse undefined", function() {
    chai.expect(_.parse("undefined")).to.equal(undefined);
  });

  it("should parse integer", function() {
    chai.expect(_.parse("10")).to.equal(10);
  });

  it("should parse float", function() {
    chai.expect(_.parse("10.5")).to.equal(10.5);
  });

  it("should parse array", function() {
    chai.expect(_.parse("[1, true, null]")).to.be.an("array");
  });

  it("should parse object", function() {
    chai.expect(_.parse('{"foo": {"bar": 123}}')).to.be.an("object");
  });

  it("should parse string", function() {
    chai.expect(_.parse("foo")).to.equal("foo");
  });
});