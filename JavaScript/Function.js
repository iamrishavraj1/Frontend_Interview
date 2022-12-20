const myFun = function ( name, rollnumber, batch )
{
    this.fullname = name;
    this.id = rollnumber;
    this.year = batch;
}

const student1 = new myFun( "Rishav", "BTECH/60012/19", 2019 );

console.log( student1 );
console.log( student1.fullname );

