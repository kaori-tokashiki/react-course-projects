



class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreetting(){
        return `Hi. I am  ${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old`;
    }
}

class Student extends Person {
    constructor(name, age, major)  {
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()) {
            description += `There major is ${this.major}.`; 
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homelocation) {
        super(name, age);
        this.homelocation = homelocation;
    }

    hasMajor() {
        return !!this.homelocation;
    }
    getGreetting() {
        let greeting = super.getGreetting();

        if(this.hasMajor()){
            return greeting += `I'm visiting from ${this.homelocation}`;
        }

        return greeting;
    }

}

// const me = new Student('Andrew Mead', 26, 'Computer Science');
// console.log(me.getDescription());

// const other = new Student();
// console.log(other.getDescription());

const me = new Traveler('Andrew Mead', 26, 'Philadelphia');
console.log(me.getGreetting());

const other = new Traveler(undefined, undefined, 'Okinawa');
console.log(other.getGreetting());

// const other = new Traveler();
// console.log(other.getGreetting());