class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hello, I am ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    // call it the parent class and passed down the default variable 
    // from parent
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    // this will get the result from parent's getDescription(), you can access it using super
    let description = super.getDescription();

    if (this.hasMajor()) {
      description +=  ` Their major is ${this.major}.`;
    }

    return description;
  }
}

class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  hasLocation() {
    return !!this.homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();

    if(this.hasLocation()) {
      greeting += ` I'm visiting from ${this.homeLocation}.`;
    }

    return greeting;
  }
}

const me = new Person('Mikael Airlangga', 28);
console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Person();
console.log(other);
console.log(other.getGreeting());
console.log(other.getDescription());

const student = new Student('Airlangga Trianggoro', 19, 'Computer Science');
console.log(student);
console.log(student.hasMajor());
console.log(student.getDescription());

const traveller = new Traveller('Zelda Link', 20, 'Jakarta');
console.log(traveller);
console.log(traveller.hasLocation());
console.log(traveller.getGreeting());