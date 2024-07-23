import { solve } from '../exercises/5-array-subsequence.js';
import { expect } from 'chai';

describe('5-Array Subsequence', () => {
    it('Unit test on function with correct input', () => {
        let array = [1, 2, 3, 4];
        let result = solve(array);
        expect(result).to.deep.equal([1, 2, 3, 4]);
    });

    it('Unit test on function with one correct argument', () => {
        let array = [1, 2, 3, 4];
        let result = solve(array);
        expect(result).to.deep.equal([1, 2, 3, 4]);
    });

    it('Unit test on function without arguments', () => {
        let result = () => solve();
        expect(result).to.throw();
    });

    it('Unit test on function with object instead of array', () => {
        let result = () => solve({});
        expect(result).to.throw();
    });

    it('Unit test on function with null instead of array', () => {
        let result = () => solve(null);
        expect(result).to.throw();
    });

    it('Unit test on function with undefined instead of array', () => {
        let result = () => solve(undefined);
        expect(result).to.throw();
    });
});