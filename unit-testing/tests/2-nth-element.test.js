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
});