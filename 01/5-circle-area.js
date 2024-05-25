function solve(radius) {
    if (typeof radius !== 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${typeof radius}.`);
    } else {
        let circleArea = Math.PI * radius ** 2;
        console.log(circleArea.toFixed(2));
    }
}