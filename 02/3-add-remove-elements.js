function solve(input) {
    let finalResult = [];
    let number = 1;

    for (let command of input) {
        if (command === 'add') {
            finalResult.push(number);
        } else {
            if (finalResult.length > 0) {
                finalResult.pop();
            }
        }

        number++;
    }

    if (finalResult.length === 0) {
        console.log('Empty');
    } else {
        console.log(finalResult.join('\n'));
    }
}