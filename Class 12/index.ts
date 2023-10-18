var num: number = 10;
var userName: string = "Naveed Sarwar";
var isCompleted: boolean = true;
let isNull: null = null;
let isUndefined: undefined | string | number = undefined;
let isVoid: void = undefined;

let newArr: [number, string, boolean] = [13, "Hello", true];

type ContactForm1 = {
  name: string;
  email: any;
  //   contact: number;
  //   message: string | null;
};

type ContactForm2 = {
  contact: number;
  message: string | null;
};

let newContact: ContactForm1 & ContactForm2 = {
  name: "Saeed",
  email: "saeedrehman@gmail.com",
  contact: 32145,
  message: "abcd",
};

console.log(newContact);

// Enum

enum COLORS {
  RED,
  GREEN,
  BLUE,
}

const whatColor: number = COLORS.BLUE;
console.log(whatColor);

enum USERROLE {
  ADMIN,
  USER,
}

let newAdmin = {
  role: USERROLE.ADMIN,
  name: "Saeed",
};

let newUser = {
  role: USERROLE.USER,
  name: "Ali",
};

function swap<T>(arr: T[]): T[] {
  return [arr[1], arr[0]];
}

// let input: boolean[] = [true, false];
const result1: boolean[] = swap<boolean>([true, false]);
const result2: number[] = swap<number>([0, 1]);
const result3: string[] = swap<string>(["Saeed", "Ur Rehman"]);

console.log(result1);
console.log(result2);
console.log(result3);

interface TeacherA {
    class: string
}

let newObj: TeacherA = {
    class: "CS"
}

