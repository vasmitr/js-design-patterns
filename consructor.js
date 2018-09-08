const Car = function (model, year, miles) {
  this.model = model
  this.year = year
  this.miles = miles

  // Will be initialized on every Car!
  // this.toString = function () {...}
}

// Better way
Car.prototype.toString = function () {
  return this.model + " has done " + this.miles + " miles."
}

const civic = new Car( "Honda Civic", 2009, 20000 );
const mondeo = new Car( "Ford Mondeo", 2010, 5000 );
 
console.log(civic.toString());
console.log(mondeo.toString());