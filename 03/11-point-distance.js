class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(p1, p2) {
        let a = Math.abs(p2.x - p1.x);
        let b = Math.abs(p2.y - p1.y);
        let result = Math.sqrt(a ** 2 + b ** 2);
        return result;
    }
}