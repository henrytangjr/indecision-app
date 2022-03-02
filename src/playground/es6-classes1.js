class Person {
  constructor(name = "Anon", age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi I am ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();

    return description + " from sub-class";
  }
}

const me = new Person("Henry Tang", 15);
console.log(me.getGreeting());
console.log(me.getDescription());

const anon = new Person();
console.log(anon.getGreeting());
console.log(anon.getDescription());

const s = new Student("Marion", 12, "Political Science");
console.log(s.hasMajor());
console.log(s.getDescription());

const s2 = new Student("Maurice", 15);
console.log(s2.hasMajor());
console.log(s2.getDescription());
