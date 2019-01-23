const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
it('Should add 2 numbers', () => {
    var res = utils.add(12, 13);
    expect(res).toBe(25).toBeA('number');
})

it("should asyncadd 2 numbers", (done) => {
    var res = utils.asyncAdd(12, 13, (sum) => {
        expect(sum).toBe(25).toBeA('number');
        done();
    });

})
})