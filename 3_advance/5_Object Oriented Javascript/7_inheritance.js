class User {
  constructor(username){
      this.username = username
  }

  logMe(){
      console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User{         //inheritance
  constructor(username, email, password){
      super(username)   //calls the constructor of parent class
      this.email = email
      this.password = password
  }

  addCourse(){
      console.log(`A new course was added by ${this.username}`);
  }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.addCourse()     // A new course was added by chai
chai.logMe()         // USERNAME is chai 

const masalaChai = new User("masalaChai")

masalaChai.logMe()  // USERNAME is masalaChai
//masalaChai.addCourse() // Error: masalaChai.addCourse is not a function (hence doesn't have the access)

console.log(chai === Teacher);          // false
console.log(chai instanceof Teacher);   // true
console.log(chai instanceof User);      // true (instance ka instance)