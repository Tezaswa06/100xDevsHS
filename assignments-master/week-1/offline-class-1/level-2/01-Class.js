
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}


class Animal{
  constructor(name,legs,speaks){
    this.name = name;
    this.legs = legs;
    this.speaks = speaks;
  }
  speak(){
    console.log("myself" + this.name + "and i can" + this.speaks);
  }
}

let dog = new Animal("doggy" ,4, "bark");
let cat = new Animal("pussy",4,"meow");
dog.speak();