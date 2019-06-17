const { repair, succeed } = require('./enhancer.js');
// test away!

describe('enhancer.js', () => {
    describe('repair()', () => {
        it('resets durability to 100', () => {
            expect(repair({ durability: 89 }).durability).toBe(100);
            expect(repair({ durability: -89 }).durability).toBe(100);
            expect(repair({ durability: 100 }).durability).toBe(100);
            expect(repair({ durability: 0 })).toEqual({ durability: 100 });
        });
    });
    describe('succeed()', () => {
        it('Increases enhancement by 1 level unless the enhancement is at level 20 ', () => {
            expect(succeed({ enhancement: 5 }).enhancement).toBe(6)
            expect(succeed({ enhancement: 10 }).enhancement).toBe(11)
            expect(succeed({ enhancement: 0 }).enhancement).toBe(1)
            expect(succeed({ enhancement: 20 }).enhancement).toBe(20)
        })
    })
    it.todo('should have 100 as a value for maximum durability')
})
