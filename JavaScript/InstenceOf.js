function Car(company, model, year) {
  this.company = company;
  this.model = model;
  this.year = year;
}

let thar = new Car("MAHINDRA", "PETROL", 2022);

console.log(thar instanceof Car);
console.log(thar instanceof Object);
