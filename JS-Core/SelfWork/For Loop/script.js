const inputs = [1, 'hi', false, 8, undefined, '', NaN];


var input = ['1', '6', '2', '8']
var res = inputs.map(function (input) {
    return input.joins();
})
console.log(res);
