import { solve } from '../exercises/1-print-array-delimiter.js';
import { assert, expect } from 'chai';

describe('Print array with delimiter', () => {
    it('Unit test on function with correct input', () => {
        let array = [1, 2, 3, 4];
        let delimiter = '-';
        let result = solve(array, delimiter);
        expect(result).to.equal('1-2-3-4');
    });

    it('Unit test on function with one correct argument', () => {
        let array = [1, 2, 3, 4];
        let result = solve(array);
        expect(result).to.equal('1,2,3,4');
    });

    it('Unit test on function without arguments', () => {
        let result = () => solve();
        expect(result).to.throw();
    });

    it('Unit test on function with object instead of array', () => {
        let result = () => solve({}, '_');
        expect(result).to.throw();
    });

    it('Unit test on function with null instead of array', () => {
        let result = () => solve(null, '_');
        expect(result).to.throw();
    });

    it('Unit test on function with undefined instead of array', () => {
        let result = () => solve(undefined, '_');
        expect(result).to.throw();
    });

    it('Unit test on function with undefined instead of delimiter', () => {
        let result = solve([1, 2, 3], undefined);
        expect(result).to.equal('1,2,3')
    });

    it('Unit test on function with object instead of delimiter', () => {
        let result = solve([1, 2, 3], {});
        expect(result).to.equal('1[object Object]2[object Object]3');
    });
});