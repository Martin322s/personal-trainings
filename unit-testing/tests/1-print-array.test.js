import { solve } from '../exercises/1-print-array-delimiter.js';
import { assert, expect } from 'chai';

describe('Print array with delimiter', () => {
    it('Should print array with delimiter', () => {
        let array = [1, 2, 3, 4];
        let delimiter = '-';

        let result = solve(array, delimiter);
        assert.equal(result, '1-2-3-4');
    });
});