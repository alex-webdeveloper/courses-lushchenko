module.exports = {
    f: function (a, b) {
        let random = Math.floor(a + Math.random() * (b + 1 - a));
        return random;
    }
};