const publicIp = require("public-ip");

(async () => {
    console.log(await publicIp.v4());
})()