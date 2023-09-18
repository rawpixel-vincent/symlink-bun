const crossFetch = require('cross-fetch')


module.exports.fetcher = (...args) => crossFetch(...args)