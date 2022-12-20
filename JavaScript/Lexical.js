var firstName = "Rishav";
console.log("fullName" + " " + fullName);
console.log(typeof UserDetails);

function UserDetails() {
  var lastName = "Raj";
  function UserWorkDetails(company, role, exprience) {
    this.company = company;
    this.role = role;
    this.exprience = exprience;
  }
  UserWorkDetails.prototype.developer = function () {
    console.log("THIS IS DEVELOPER");
    console.log(lastName);
  };

  console.log(firstName);
  console.log(fullName);
  const emply = new UserWorkDetails("GOOGLE", "SDE", "1.5");
  emply.developer();
}
UserDetails();
var fullName = "Rishav Raj";
