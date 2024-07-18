import { solve } from '../exercises/4-rotate-array.js';
import { expect } from 'chai';

describe('4-Rotate array', () => {
    it('Unit test on function with correct input', () => {
        let array = [1, 2, 3, 4, 5, 6];
        let rotations = 5;
        let result = solve(array, rotations);
        expect(result).to.equal('2 3 4 5 6 1');
    });

    it('Unit test on function with one correct argument', () => {
        let array = [1, 2, 3, 4];
        let result = solve(array);
        expect(result).to.equal('1 2 3 4');
    });

    it('Unit test on function without arguments', () => {
        let result = () => solve();
        expect(result).to.throw();
    });

    it('Unit test on function with object instead of array', () => {
        let result = () => solve({}, 6);
        expect(result).to.throw();
    });

    it('Unit test on function with null instead of array', () => {
        let result = () => solve(null, 6);
        expect(result).to.throw();
    });

    it('Unit test on function with undefined instead of array', () => {
        let result = () => solve(undefined, 6);
        expect(result).to.throw();
    });

    it('Unit test on function with undefined instead of rotations', () => {
        let result = solve([1, 2, 3], undefined);
        expect(result).to.equal('1 2 3')
    });

    it('Unit test on function with object instead of delimiter', () => {
        let result = solve([1, 2, 3], {});
        expect(result).to.equal('1 2 3');
    });

    it('Unit test on function with number instead of delimiter', () => {
        let result = solve([1, 2, 3], 1);
        expect(result).to.equal('3 1 2');
    });

    // it('Unit test on function with boolean instead of delimiter', () => {
    //     let result = solve([1, 2, 3], true);
    //     expect(result).to.equal('1true2true3');
    // });
});