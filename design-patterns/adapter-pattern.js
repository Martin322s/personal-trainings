class NewCalculator {
    constructor() {
        this.add = function (term1, term2) {
            return term1 + term2;
        };
        this.sub = function (term1, term2) {
            return term1 - term2;
        };
    }
}
class CalculatorAdapter {
    constructor() {
        const newCalculator = new NewCalculator();
        this.operations = function (term1, term2, operation) {
            switch (operation) {
                case 'add':
                    return newCalculator.add(term1, term2);
                case 'sub':
                    return newCalculator.sub(term1, term2);
                default:
                    return NaN;
            }
        };
    }
}
const oldCalc = new OldCalculator();
const adaptedCalc = new CalculatorAdapter();
console.log(oldCalc.operations(3, 2, 'add'));
console.log(adaptedCalc.operations(3, 2, 'add'));