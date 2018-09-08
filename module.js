const myModule = (function () {
  // Emulating private property
  let counter = 0;

  return {
    increment: function () {
      return counter += 1
    },
    reset: function () {
      counter = 0
      return counter
    }
  }
})() // (jQuery, _) import mixins

console.log(myModule.increment()) // 1
console.log(myModule.increment()) // 2
console.log(myModule.increment()) // 3
console.log(myModule.reset()) // 0
console.log(myModule.counter === undefined) // true