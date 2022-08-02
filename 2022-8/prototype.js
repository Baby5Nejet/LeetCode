function Person(nick, age) {
  this.nick = nick;
  this.age = age;
}
Person.prototype.sayName = function () {
  console.log(this.nick);
}

var p1 = new Person('Byron', 20);

var p2 = new Person('Casper', 25);

p1.sayName()  // Byron

p2.sayName()  // Casper

console.log(p1.__proto__ === Person.prototype)      //true

console.log(p2.__proto__ === Person.prototype)  //true

console.log(p1.__proto__ === p2.__proto__)         //true

console.log(Person.prototype.constructor === Person)  //true