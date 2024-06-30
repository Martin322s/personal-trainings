function solution() {
    let string = '';

    return {
        append: function(stringInput) {
            string = string + stringInput;
        },
        removeStart: function(num) {
            string = string.substring(num);
        },
        removeEnd(num) {
            string = string.substring(0, string.length - num);
        },
        print: function() {
            console.log(string);
        }
    }
}