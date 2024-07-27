import { solve } from '../exercises/7-sorting-numbers.js';
import { expect } from 'chai';

describe('6 - List of Names', () => {
    it('Unit test on function with correct input', () => {
        let array = [1, 2, 5, 0, 10, 17, 12];
        let result = solve(array);
        expect(result).to.deep.equal([0, 17, 1, 12, 2, 10, 5, undefined]);
    });

    it('Unit test on function with one correct argument', () => {
        let array = [1, 2, 3, 4];
        let result = solve(array);
        expect(result).to.deep.equal([1, 4, 2, 3]);
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

    it('Unit test on function with boolean instead of array', () => {
        let result = () => solve(true);
        expect(result).to.throw();
    });
});