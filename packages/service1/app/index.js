const { fetchGoogle } = require("./helpers/fetchGoogle");




fetchGoogle().then((res) =>console.log(res.statusText)).catch(console.error)