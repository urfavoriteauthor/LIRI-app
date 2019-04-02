var input = [];
var output = [];
var number= process.argv[2];

input = function () {
    for (i = 0; i< input.length; i++) {
        output.push(input[i]*2)

    }
    return output;
}

var test= [1,2,3]
console.log(output(test));