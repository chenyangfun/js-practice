//1
// async function a() {
//     await b().catch(e => {
//         console.log('11111', e)
//     });
// }
// async function b() {
//     await c();
// }
// async function c() {
//     throw new Error('sss')
// }
// a()
//2
// function f(condition, x) {
//     //不能重复声明
//     let x = 1
//     if (condition) {
//         let x = 100;
//         return x;
//     }

//     return x;
// }
// console.log(f(false, 0)); // returns 0
// console.log(f(true, 0)); // returns 100

//3
a = function f() {

}
if (function f() {}) {
    // console.log(f);
    console.log(typeof f)
}