
class User {
  constructor(username){
      this.username = username
  }

  logMe(){
      console.log(`Username: ${this.username}`);
  }

  static createId(){
      return `123`
  }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())    // Error: hitesh.createId is not a function     (static keyword avoids access)

class Teacher extends User {       //inheritance
  constructor(username, email){
      super(username)
      this.email = email
  }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe();                   // Username: iphone
// console.log(iphone.createId()); // Error: iphone.createId is not a function     (static keyword avoids access even in child instance) 