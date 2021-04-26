// const arrayProto = Array.prototype;
// const newObj = Object.create(arrayProto);
// const methodsToPatch = ['push', 'unshift', 'pop', 'shift', 'splice', 'sort', 'reverse'];
// methodsToPatch.forEach((method) => {
//     const original = arrayProto[method]
//     def(newObj, method, function (...agrs) {
//         original.apply(this, agrs)
//         console.log('hahah---')
//     })
// })

// function def(obj, key, val, enumerable) {
//     Object.defineProperty(obj, key, {
//         value: val,
//         enumerable: !!enumerable,
//         writable: true,
//         configurable: true

