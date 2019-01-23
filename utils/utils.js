module.exports.add = (a, b) => a + b;

module.exports.square = (a) => a * a;

module.exports.asyncAdd = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 1000)
}
