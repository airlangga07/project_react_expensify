// exploring the new experimental stage-2 babel plugins: transform class properties
// this is the old syntax
class OldSyntax {
  constructor() {
    this.name = "Mike";
    this.getGreeting = this.getGreeting.bind(this);
  }

  getGreeting() {
    return `Hi! My name is ${this.name}!`;
  }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax);
const getGreeting = oldSyntax.getGreeting;
console.log(oldSyntax.getGreeting());


// this is the new syntax
class NewSyntax {
  name = "Jen";
  getGreeting = () => {
    return `Hi! My name is ${this.name}`;
  }
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newSyntax);
console.log(newSyntax.getGreeting());