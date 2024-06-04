function solve(input) {
    let resultObj = {};

    for (let i = 0; i < input.length; i += 2) {
        let townKey = input[i];
        let currentValue = Number(input[i + 1]);

        if (resultObj[townKey]) {
            resultObj[townKey] += currentValue;
        } else {
            resultObj[townKey] = currentValue;
        }
    }

    console.log(JSON.stringify(resultObj));
}

solve(['Sofia','20','Varna','3','sofia','5','varna','4']);