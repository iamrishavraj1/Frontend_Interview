/* 
Object - The Object is instance of the class, which contains the 
instance of the members and behaviors defined in the class template.
In JavaScript Object is the collection of key-value pairs. 
*/
// let obj = {
//   name: "Rishav Raj",
//   mobile: 9608341528,
//   occupation: "Student",
// };

/*
Class - The class is a blueprint for creating object. 
it defines the properties and methods that an object should have.
*/

class Person {
  constructor(name, mobile, occupation) {
    this.fullName = name;
    this.contactNumber = mobile;
    this.role = occupation;
  }
  /* 
Methods - The Method is just a function which declare in 
the class which perform multiple tasks.
*/
  intro() {
    console.log(
      `Hey my name is ${this.fullName} , my contactDetails is ${this.contactNumber} and my role is ${this.role} `
    );
  }
}
/* 
Object - The Object is instance of the class, which contains the 
instance of the members and behaviors defined in the class template.
In JavaScript Object is the collection of key-value pairs. 
*/
let emply1 = new Person("Rishav Raj", 9608341528, "Front-end Developer");
console.log(emply1);
emply1.intro();

/* 
Inheritance - The Inheritance is implenmented using class. 
A class can extend another class which means that it inherits all the 
properties and methods of the base class. The subclass can also 
override or extend the inheritance methods to customize their behavior
*/
class Teacher extends Person {
  constructor(name, mobile, occupation, subject) {
    super(name, mobile, occupation);
    this.subject = subject;
  }

  greet() {
    console.log(
      `Hey Good Morning, ${this.fullName} professor of ${this.subject},`
    );
  }
}

let teacher1 = new Teacher("Ritesh Singh", 123456789, "Professor", "RAC");
console.log(teacher1);
teacher1.intro();
teacher1.greet();

/* 
Polymorphism - The Polymorphism is the ability to different objects to 
respond differently to the same method or property.
*/

class Shape {
  getArea() {
    throw new Error("This is method should be implemented by the subclass");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  getArea() {
    return Math.pow(this.side, 2);
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

let shapes = [new Circle(2), new Square(2), new Rectangle(2, 3)];
for (let i = 0; i < shapes.length; i++) {
  console.log(shapes[i].getArea());
}

/* 
Compile Time Polymorphism - The Compile Time Polymorphism is the 
ability to different objects to respond differently to the same 
method or property in compile time.
*/
class Calculator {
  add(a, b) {
    return a + b;
  }
  add(a, b, c) {
    return a + b + c;
  }
}

let calculate = new Calculator();
console.log(calculate.add(2, 2));
console.log(calculate.add(2, 2, 3));

/* 
Run Time Polymorphism - The Run Time Polymorphism is the 
ability to different objects to respond differently to the same 
method or property in run time.
*/

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} make sound`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  speak() {
    console.log(`${this.name} barks sound`);
  }
}
class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  speak() {
    console.log(`${this.name} meow sound`);
  }
}

let dog = new Dog("DOG");
dog.speak();
let cat = new Cat("CAT");
cat.speak();

/* 
Encapsulation - Encapsulation is the process of binding data memebers and methods 
of program together to do a specific job without revealing unnecessary details.
*/
/* 
Abstraction - Abstarction is the process of hiding data memebers and methods 
to do a specific job without revealing unnecessary details.
*/
class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }
  get balance() {
    return this._balance;
  }

  set balance(value) {
    this._balance = value;
  }

  deposite(amount) {
    this._balance += amount;
  }

  withdraw(amount) {
    if (amount > this._balance) {
      console.log("Insufficient Balance");
    } else {
      this._balance -= amount;
    }
  }
}

let account = new BankAccount(100);

console.log(account.balance);
account.balance = 1000;
console.log(account.balance);
account.deposite(200);
console.log(account.balance);
account.withdraw(1000);
console.log(account.balance);
