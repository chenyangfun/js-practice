const interfaces = require('os').networkInterfaces();
let macs = [];
let mac;
Object.keys(interfaces).map(function(key){
    macs.push(interfaces[key][0].mac)
})
                
macs.some(function (ele) {
    if (ele !== '00:00:00:00:00:00') {
        mac = ele;
        return true;
    }
    return false;
})
// console.log(mac);
                