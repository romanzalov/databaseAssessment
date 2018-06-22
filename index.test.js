const assert = require('chai').assert
import Project from "./index";

describe("Tests", function () {

    //clear the database before all tests
    before(function () {
        return Project.sync({ force: true });
    });

    // erase all tasks after each spec
    afterEach(function () {
        return Project.sync({ force: true });
    });

    describe('Instances', function () {

        describe('calculates the day of the week', function () {
            it('returns a string', function () {
                let dummy = Project.build();
                expect(typeof dummy.day).to.equal('string');
            });
        })

        describe('calculates the week of the year', function () {
            it('returns a string', function () {
                let dummy = Project.build();
                expect(typeof dummy.week).to.equal('string');
            });

            it('rounds down', function () {
                let dummy = Project.build();
                expect(dummy.down(5500)).to.equal(5000);
            });

        })

        describe('rounds down', function () {
            it('rounds down', function () {
                let dummy = Project.build();
                expect(dummy.down(5900)).to.equal(5000);
            });

            it('rounds down', function () {
                let dummy = Project.build();
                expect(dummy.down(5500)).to.equal(5000);
            });

        })

        describe('rounds up', function () {

            it('rounds up', function () {
                let dummy = Project.build();
                expect(dummy.up(5700)).to.equal(6000);
            });

            it('rounds up', function () {
                let dummy = Project.build();
                expect(dummy.up(5100)).to.equal(6000);
            });
        })
    })
})