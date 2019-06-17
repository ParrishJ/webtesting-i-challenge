const { repair, succeed, fail } = require('./enhancer.js');
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
            expect(succeed({ enhancement: 5, durability: 25 })).toEqual({ enhancement: 6, durability: 25 })
            expect(succeed({ enhancement: 10, durability: 100 })).toEqual({ enhancement: 11, durability: 100 })
            expect(succeed({ enhancement: 0, durability: 50 })).toEqual({ enhancement: 1, durability: 50 })
            expect(succeed({ enhancement: 20, durability: 90 })).toEqual({ enhancement: 20, durability: 90 })
        })
    })
    describe('fail()', () => {
        it('Decreases durability, Also decreases enhancement under some conditions: If enhancement < 15, durability == (durability - 5); If enhancement >= 15, durability == (durabilty - 10); If enhancement > 16, durability == (durability - 10) && enhancement == (enhancement - 1) ', () => {
            expect(fail({ enhancement: 5, durability: 50 })).toEqual({ enhancement: 5, durability: 45 }) // use .toEqual when more than one parameter is incresed
            expect(fail({ enhancement: 15, durability: 70 })).toEqual({ enhancement: 15, durability: 60 })
            expect(fail({ enhancement: 17, durability: 80 })).toEqual({ enhancement: 16, durability: 70 })
        })
    })
    it.todo('should have 100 as a value for maximum durability')
})
