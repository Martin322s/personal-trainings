function solve(input) {
    let result = [];
    let [town, latitude, longitude] = input.shift().split(' | ');
    
    for (let townString of input) {
        let objTown = {};
        let [townName, latitudeString, longitudeString] = townString.split(' | ');
        let latitudeValue = Number(Number(latitudeString).toFixed(2));
        let longitudeValue = Number(Number(longitudeString).toFixed(2));

        objTown[town] = townName;
        objTown[latitude] = latitudeValue;
        objTown[longitude] = longitudeValue;

        result.push(objTown);
    }

    console.log(JSON.stringify(result));
}