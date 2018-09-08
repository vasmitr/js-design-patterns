const mySingleton = (function () {
  let instanse

  function init () {
    // Get unique value
    const privateVar = Math.random();

    return {
      getRandomNumber: () => privateVar
    }
  }

  return {
    getInstance: () => {
      // Create instance if it doesn't exist
      if (!instanse) {
        instanse = init()
      }
      return instanse
    }
  }
})()

const singleton = mySingleton.getInstance();
const singleton2 = mySingleton.getInstance();
console.log(singleton.getRandomNumber() === singleton2.getRandomNumber()) // true