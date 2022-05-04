// Create package.json file
// npm init -y

// Install TypeScript
// npm install typescript

// Compile a TypeScript file
// npx tsc filename

// Create a TypeScript config file
// npx tsc --init

// Primitives

let age: number = 33;
let userName: string = 'Allan';
let isInstructor: boolean = false;

// More complex types

let hobbies: string[] = ['Sim racing', 'Programming', 'Swimming'];

// Type aliases

type Person = {
  name: string;
  age: number;
};

let person: Person = {
  name: 'Allan',
  age: 34
};

let people: Person[];

// Type inference

let course = 'Angular - The Complete Guide';

// Union types

let x: string | number = 'test';
x = 1;

// Functions and types

function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

// Classes

class Student {
  firstName: string;
  lastName: string;
  age: number;
  private courses: string[];

  constructor(firstName: string, lastName: string, age: number, courses: string[]) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.courses = courses;
  }

  enrol(courseName: string) {
    this.courses.push(courseName);
  }

  listCourses() {
    return this.courses.slice();
  }
}

const student = new Student('Allan', 'Fantoni', 34, ['Angular']);
student.enrol('React');

// courses as a public property
// student.courses; => Angular, React

// courses as a private property
// student.listCourses(); => Angular, React

// Shorthand notation

class StudentV2 {
  constructor(
    public firstName: string, 
    public lastName: string, 
    public age: number, 
    public courses: string[]) {
  }

  enrol(courseName: string) {
    this.courses.push(courseName);
  }

  listCourses() {
    return this.courses.slice();
  }
}

// Interfaces

interface Human {
  firstName: string;
  age: number;

  greet: () => void;
}

class Instructor implements Human {
  firstName: string;
  age: number;
  
  greet() {
    console.log('Hello!');
  };
}

let max: Instructor;

max = {
  firstName: 'Max',
  age: 32,
  greet() {

  }
};