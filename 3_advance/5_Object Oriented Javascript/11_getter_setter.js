class User {
  constructor(email, password){
      this.email = email;
      this.password = password
  }

  get email(){                //getter (name same as the property itself - rule) (once defined you must use a setter as well)
      return this._email.toUpperCase()
  }
  set email(value){           //setter  (name same as the property itself - rule) (once defined you must use a getter as well)
      this._email = value
  }

  get password(){             //getter
      return `${this._password}hitesh`   // using _ or it will give error: max call stack size exceeded
  }

  set password(value){        //setter
      this._password = value
  }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);

//email is not any normal method or else we should have called it like hitesh.email() but we just did hitesh.email

//underscore( _ ) basically mean that the property is kind of a private property which can't be accessed by users directly. Yes they have to use getter and setters for the same