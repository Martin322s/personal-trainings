function filterEmployees(data, criteria) {
    let inputData = JSON.parse(data);
    let criteriaData = criteria.split('-');

    if (criteriaData[0] !== 'all') {
        inputData = inputData.filter(x => x[criteriaData[0]] == criteriaData[1]);
    }

    inputData.forEach((x, i) => {
        console.log(`${i}. ${x['first_name']} ${x['last_name']} - ${x.email}`);
    })
}