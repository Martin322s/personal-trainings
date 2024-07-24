import { solve } from '../exercises/6-list-of-names.js';
import { expect } from 'chai';

describe('6 - List of Names', () => {
    it('Unit test on function with correct input', () => {
        let array = ['Andrew', 'Christian', 'Bob'];
        let result = solve(array);
        expect(result).to.deep.equal(['1.Andrew', '2.Bob', '3.Christian']);
    });

    it('Unit test on function with one correct argument', () => {
        let array = [1, 2, 3, 4];
        let result = () => solve(array);
        expect(result).to.throw();
    });

    it('Unit test on function without arguments', () => {
        let result = () => solve();
        expect(result).to.throw();
    });

    // it('Unit test on function with object instead of array', () => {
    //     let result = () => solve({}, '_');
    //     expect(result).to.throw();
    // });

    // it('Unit test on function with null instead of array', () => {
    //     let result = () => solve(null, '_');
    //     expect(result).to.throw();
    // });

    // it('Unit test on function with undefined instead of array', () => {
    //     let result = () => solve(undefined, '_');
    //     expect(result).to.throw();
    // });

    // it('Unit test on function with undefined instead of delimiter', () => {
    //     let result = solve([1, 2, 3], undefined);
    //     expect(result).to.equal('1,2,3')
    // });

    // it('Unit test on function with object instead of delimiter', () => {
    //     let result = solve([1, 2, 3], {});
    //     expect(result).to.equal('1[object Object]2[object Object]3');
    // });

    // it('Unit test on function with number instead of delimiter', () => {
    //     let result = solve([1, 2, 3], 1);
    //     expect(result).to.equal('11213');
    // });

    // it('Unit test on function with boolean instead of delimiter', () => {
    //     let result = solve([1, 2, 3], true);
    //     expect(result).to.equal('1true2true3');
    // });
});