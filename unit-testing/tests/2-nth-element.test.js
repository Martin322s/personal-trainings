import { solve } from '../exercises/2-nth-element.js';
import { expect } from 'chai';

describe('2 - nth element in array', () => {
    it('Unit test on function with correct input', () => {
        let result = solve([1, 2, 3, 4, 5, 6], 2);
        expect(result).to.deep.equal([1, 3, 5])
    });

    it('Unit test on function with one correct argument', () => {
        let array = [1, 2, 3, 4];
        let result = solve(array);
        expect(result).to.deep.equal([1]);
    });

    it('Unit test on function without arguments', () => {
        let result = () => solve();
        expect(result).to.throw();
    });

    it('Unit test on function with object instead of array', () => {
        let result = solve({}, 2);
        expect(result).to.deep.equal([]);
    });

    it('Unit test on function with null instead of array', () => {
        let result = () => solve(null, 2);
        expect(result).to.throw();
    });

    it('Unit test on function with undefined instead of array', () => {
        let result = () => solve(undefined, 2);
        expect(result).to.throw();
    });

    it('Unit test on function with undefined instead of step', () => {
        let result = solve([1, 2, 3], undefined);
        expect(result).to.deep.equal([1])
    });
});