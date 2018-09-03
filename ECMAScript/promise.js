let a = [1,2,3,4,5,6,7,8]
// new Promise (function (resolve, reject) {
//     resolve(a.forEach(element => {
//         setTimeout(() => {
//             console.log(element);
//         }, 1000);    
//     }))

// }).then((a) => {
//     console.log(a);
//     console.log('done');
// }).catch((err) => {
//     console.err;
// });

new Promise (function (resolve, reject) {
    return Promise.all(
        a.map(element => {
            setTimeout(() => {
                console.log(element);
                resolve('123'+element)
            }, 1000);    
        })
    )

}).then((a) => {
    console.log(a);
    console.log('done');
}).catch((err) => {
    console.err;
});