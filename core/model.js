export class Model {
  MIN_AGE = 18;

  constructor(name, birthDate) {
    const age = this.calculateAge(birthDate);

    if (this.isEmpty(name) || !this.ageIsValid(age)) {
      const error = new Error("invalid input");
      error.age = age;
      throw error;
    }

    this.id = this.generateId();
    this.name = name;
    this.age = age;
  }

  generateId() {
    return (
      new Date().getTime().toString() +
      Math.floor(Math.random() * 10).toString()
    );
  }

  isEmpty(value) {
    return !value;
  }

  calculateAge(birthDate) {
    const today = new Date().getTime();
    birthDate = new Date(birthDate).getTime();
    const age = (today - birthDate) / (1000 * 60 * 60 * 24 * 365);
    return Math.floor(age);
  }

  ageIsValid(age) {
    return age >= this.MIN_AGE;
  }
}
