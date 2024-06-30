function solution(number) {
    let contextNumber = number;
    return function (num) {
        return num + contextNumber;
    }
}