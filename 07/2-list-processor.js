function solve(input) {
    let result = [];

    function inner() {
        for (let command of input) {
            let [type, string] = command.split(' ');

            switch(type) {
                case 'add': result.push(string);
                    break;
                case 'remove': {
                    while(result.includes(string)) {
                        let index = result.indexOf(string);
                        result.splice(index, 1);
                    }
                }
                    break;
                case 'print': console.log(result.join(','));
                    break;
            }
        }
    }

    inner();
}