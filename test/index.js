var mod = require("../index.js");
var expect = require('chai').expect
var chai = require('chai')

chai.should()

describe('Account Manager', function() {
    
});

describe ("Special Chars" , function () {
    describe ("#Escape", function () {
        it( 'Should escape one level of html', function () {
            mod.SpecialChars.escape("<html>test</html>").should.equal("&lt;html&gt;test&lt;/html&gt;")
        })
        it( 'Should escape nested html', function () {
            mod.SpecialChars.escape("<html><part1>test</part1><part2>test2</part2></html>").should.equal("&lt;html&gt;&lt;part1&gt;test&lt;/part1&gt;&lt;part2&gt;test2&lt;/part2&gt;&lt;/html&gt;")
        })
    })
    describe ("#Unescape", function () {
        it( 'Should unescape one level of html', function () {
            mod.SpecialChars.unescape("&lt;html&gt;test&lt;/html&gt;").should.equal("<html>test</html>")
        })
        it( 'Should unescape nested html', function () {
            mod.SpecialChars.unescape("&lt;html&gt;&lt;part1&gt;test&lt;/part1&gt;&lt;part2&gt;test2&lt;/part2&gt;&lt;/html&gt;").should.equal("<html><part1>test</part1><part2>test2</part2></html>")
        })
    })
})