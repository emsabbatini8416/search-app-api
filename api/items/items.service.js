const rp = require('request-promise-native');

exports.getItems = (query) => {
    return rp.get({
        url: `https://dummyjson.com/products${query}`,
        json: true
    })
};