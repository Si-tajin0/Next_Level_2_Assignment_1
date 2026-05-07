
// Problem 1
// ---------------------------------------------

// const filterEvenNumbers: number[] = [1,2,3,4,5,6,]
// const onlyEven = filterEvenNumbers.filter(num => num % 2 === 0);


const filterEvenNumbers = (nums: number[]):number[] => nums.filter(num => num % 2 === 0);


console.log(filterEvenNumbers([1,2,3,4,5,6]));

// =============================================

// Problem 2
// ---------------------------------------------

// const reverseStrings: string = ("typescript");

// const reverseTypescript: string = reverseStrings.split("").reverse().join("");

const reverseStrings =(reverseTypescript: string):string => reverseTypescript.split("").reverse().join("");


console.log(reverseStrings("typescript"));

// =============================================

// problem 3
// ---------------------------------------------

type StringOrNumber = string | number;

const checkType = (input:StringOrNumber): string =>{
  if (typeof input === "string") {
    return "String"
  } else {
    return "Number"
  }
}


// tennory
// ///////////

// const checkType = (input:StringOrNumber): string => typeof input === "string" ? "String" : "Number";

console.log(checkType("Hello"));
console.log(checkType(42));

// =============================================

// Problem 4
// ---------------------------------------------

const user = { id : 1, name: "John Doe", age: 21};

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => obj[key]


console.log(getProperty(user, "name"));

// =============================================

// Problem 5
// ---------------------------------------------

//Define the Book Interface
interface  Book {
  title : string;
  author : string;
  publishedYear : number;
}

interface BookWithStatus extends Book {
  isRead: boolean;
}

const toggleReadStatus = (book: Book): BookWithStatus => ({
    ...book,
    isRead: true
  });


// Define the input
const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
}

console.log(toggleReadStatus(myBook))


// =======================================================

// Problem 6
// -------------------------------------------------------
class Person  {
  name: string;
    age: number;

  constructor(name: string, age:number){
    this.name= name;
    this.age= age
  }

}

 class Student extends Person {
  grade: string;

  constructor(name: string, age:number,grade:string){
    super(name, age);
    this.grade=grade
  }
  getDetails():string {
  return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
 }

 const student = new Student("Alice", 20, "A");


console.log(student.getDetails());

// ====================================================================
// Problem 7
// --------------------------------------------------------------------


let arr1 = [1,2,3,4,5]
let arr2 = [3,4,5,6,7]

const getIntersection = (arr1: number[], arr2: number[]) : number[]=> {
     return  arr1.filter(num  => arr2.includes(num))
}


console.log(getIntersection([1,2,3,4,5], [3,4,5,6,7]));

