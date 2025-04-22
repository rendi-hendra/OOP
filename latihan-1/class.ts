enum Gender {
  Male = "Male",
  Female = "Female",
}

class Person {
  private _name: string;
  private _age: number;
  private _gender: Gender;
  private _address: string;

  constructor(name: string, age: number, gender: Gender, address: string) {
    this._name = name;
    this._age = age;
    this._gender = gender;
    this._address = address;
  }

  getName(): string {
    return this._name;
  }

  setName(name: string): void {
    this._name = name;
  }

  displayInfo(): void {
    console.log(`Name: ${this._name}`);
    console.log(`Age: ${this._age}`);
    console.log(`Gender: ${this._gender}`);
    console.log(`Address: ${this._address}`);
  }
}

// class Employee extends Person {
//   private _position: string;

//   constructor(
//     name: string,
//     age: number,
//     gender: Gender,
//     address: string,
//     position: string,
//   ) {
//     super(name, age, gender, address);
//     this._position = position;
//   }

//   getPosition(): string {
//     return this._position;
//   }

//   setPosition(position: string): void {
//     this._position = position;
//   }

//   displayInfo(): void {
//     super.displayInfo();
//     console.log(`Position: ${this._position}`);
//   }
// }

class Employee {
  private _position: string;
  private _person: Person;

  constructor(
    person: Person,
    position: string,
  ) {
    this._person = person
    this._position = position;
  }

  getPosition(): string {
    return this._position;
  }

  setPosition(position: string): void {
    this._position = position;
  }

  displayInfo(): void {
    // super.displayInfo();
    this._person.displayInfo()
    console.log(`Position: ${this._position}`);
  }
}

const person1 = new Person("Rendi", 21, Gender.Male, "Surabaya");
person1.displayInfo();

const employee1 = new Employee(person1, "CEO");
employee1.displayInfo();
