function solve(input) {
    input = input
        .map(x => (
            {
                width: x[0],
                height: x[1],
                area: function () {
                    return this.width * this.height;
                },
                compareTo: function (other) {
                    if (this.area() < other.area()) {
                        return -1;
                    } else if (this.area() > other.area()) {
                        return 1;
                    } else {
                        return 0;
                    }
                }
            }
        ))
        .sort((a, b) => a.area() != b.area() ? b.area() - a.area() : b.width - a.width);

        console.log(input);
    return input;
}

solve([[1,20],[20,1],[5,3],[5,3]]);