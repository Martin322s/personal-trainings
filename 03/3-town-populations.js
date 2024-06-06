function solve(input) {
    let resultObj = {};

    for (const town of input) {
        let [townName, populationString] = town.split(' <-> ');
        let population = Number(populationString);

        if (resultObj[townName]) {
            resultObj[townName] += population;
        } else {
            resultObj[townName] = population;
        }
    }

    for (const key in resultObj) {
        console.log(`${key} : ${resultObj[key]}`);
    }
}