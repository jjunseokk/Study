import { name } from "./a";
import { age } from "./a";
import { Name } from "./a";


let 변수: Name = 'park';

// const NamePush = (name?: string) => {
//   if (name) {
//     console.log("안녕하세요" + name);
//   } else {
//     console.log("??");
//   }
// };


// const Length = (x?: number | string) => {
//   if (x) {
//     console.log(x.toString().length);
//   } else {
//     console.log("자료");
//   }
// };

// const Married = (
//   money: number,
//   house: boolean,
//   charm: string
// ): string | void => {
//   let score: number = 0;
//   score += money;
//   if (house === true) {
//     score += 500;
//   }
//   if (charm === "상") {
//     score += 100;
//   }
//   if (score >= 600) {
//     return console.log("결혼가능");
//   }
// };

// const Cleaning = (a: (number | string)[]) => {
//   let SuccessCleaning: number[] = [];

//   a.forEach((b) => {
//     if (typeof b === "string") {
//       SuccessCleaning.push(parseFloat(b));
//     } else {
//       SuccessCleaning.push(b);
//     }
//   });

//   return SuccessCleaning;
// };

// const School = (x: { subject: string | string[] }) => {
//   if (typeof x.subject === "string") {
//     return x.subject;
//   } else if (Array.isArray(x.subject)) {
//     return x.subject[x.subject.length - 1];
//   } else {
//     return "몰루";
//   }
// };

// type Human = { human: string };
// type Age = { age: number };
// type Member = Human & Age;

// let user: Member = { human: "준석", age: 28 };

// // console.log("멤버정보: ", user);

// type Square = {
//   color?: string;
//   size: number;
//   readonly position: number[];
// };

// let test: Square = {
//   size: 125,
//   color: "red",
//   position: [2, 4, 5],
// };

// // console.log("테스트 : ", test);

// type Friend = {
//   name: string;
//   phone: string;
//   email: string;
// };
// type Adult = {
//   adult: boolean;
// }
// type NewUser = Friend & Adult;

// let friend: NewUser = {
//   name: '준석',
//   phone: '01023322313',
//   email: 'ooo22@naver.com',
//   adult: false,
// }

// const Game = (choice: '가위' | '바위' | '보'): ('가위' | '바위' | '보')[] => {
//   return ['가위'];
// }



// let Test = {
//   name: 'kim'
// } as const;

// function FF(a: 'kim') {

// }

// FF(Test.name);


// function 함수1(a) {
//   console.log('함수1');
//   a();
// }
// function 함수2() {
//   console.log('함수2')
// }

// 함수1(함수2);


// type Member2 = {
//   name : string,
//   age : number,
//   plusOne : ( x :number ) => number,
//   changeName : () => void
// }

// let 회원정보 : Member2 = {
//   name : 'kim',
//   age : 30,
//   plusOne (x){
//     return x + 1
//   },
//   changeName : () => {
//     console.log('안녕')
//   }
// }
// 회원정보.plusOne(1);
// 회원정보.changeName();


// console.log("친구 :", friend);

// NamePush();
// Length("12356");
// Married(50, true, "중");
// console.log(Cleaning([123, "10"]));
// console.log(School({ subject: ["english", "art", "korean"] }));



// let cutZero = function (x){
//   let result = x.replace(/^0+/, "");
//   return result;
// }

// function removeDash (x:string) : number{
//   let result = x.replace(/-/g, "");
//   return parseFloat(result);
// }
// type 함수타입1 = (a :string) => string;
// type 함수타입2 = (a :string) => number;

// function play (a:string, cutZero:함수타입1, removeDash:함수타입2) {
//   let result = cutZero(a);
//   let result2 = removeDash(result);
//   console.log(result2);
// }


// play('010-1111-2222', cutZero, removeDash)

// function play() {
//   let get = document.querySelector(".get");
//   let link = document.querySelectorAll('.link');
//   if (get instanceof HTMLImageElement) {
//     get.src = "/cute.jpg"
//   }
//   link.forEach((a) => {
//     if (a instanceof HTMLAnchorElement) {
//       a.href = 'http://www.kakao.com'
//     }
//   })
// }



// class Car {
//   model: string
//   money: number
//   constructor(type: string, money: number) {
//     this.model = type;
//     this.money = money;
//   }

//   tax(): number {
//     return this.money * 0.1
//   }
// }

// let car1 = new Car('소나타', 3000)
// console.log(car1) //콘솔창 출력결과는 { model : '소나타', price : 3000 }
// console.log(car1.tax()) //콘솔창 출력결과는 300


// class Word {
//   num;
//   str;
//   constructor(...param: (number | string)[]) {
//     let num: number[] = [];
//     let str: string[] = [];

//     param.forEach((i) => {
//       if (typeof i === 'string') {
//         str.push(i);
//       } else {
//         num.push(i);
//       }
//     })
//     this.num = num;
//     this.str = str;
//   }
// }


// let obj = new Word('kim', 3, 5, 'park');
// console.log(obj.num) //[3,5]
// console.log(obj.str) //['kim', 'park']



// interface Student {
//   name: string,
// }

// interface Teacher extends Student {
//   age: number
// }

// let student: Student = { name: 'kim' }
// let teacher: Teacher = { name: 'kim', age: 20 };


// interface Item {
//   brand: string,
//   serialNumber: number,
//   model: string[],
// }

// interface Shopping {
//   product: string,
//   price: number
// }
// interface Card extends Shopping {
//   card: boolean
// }

// interface Mathss {
//   plus: (a: number, b: number) => number,
//   minus: (a: number, b: number) => number
// }

// let item: Item = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'phone'] }
// let shopping: Shopping[] = [{ product: '청소기', price: 7000 }, { product: '삼다수', price: 800 }]

// let ss: Mathss = {
//   plus(a, b) {
//     return a + b
//   },
//   minus(a, b) {
//     return a - b
//   }
// } 


// let person = { student: true, age: 20 }

// function 함수({ student, age }: { student: boolean, age: number }) {
//   console.log(student, age)
// }

// 함수({ student: true, age: 20 })

// const NumberA = (...a) => {
//   let result = 0;
//   a.forEach((i) => {
//     if (result < i) {
//       result = i
//     }
//   })
//   return result;
// }

// type UserType = {
//   user: string,
//   comment: number[],
//   admin: boolean
// }

// console.log(NumberA(6, 3, 7, 2, 0, 1));


// const Member = ({ user, comment, admin }: UserType) => {
//   console.log(user, comment, admin)
// }

// type 어레이 = (number | string | boolean)[];

// const Wine = ([a, b, c]: 어레이) => {
//   console.log(a, b, c)
// }

// Wine([40, 'wine', false])



// type Fish = { swim: string };
// type Bird = { fly: string };


// function Animal(animal: Fish | Bird) {
//   if ("swim" in animal) {
//     return animal.swim
//   }
//   return animal.fly
// }


// type Car = {
//   wheel: '4개',
//   color: string
// }
// type Bike = {
//   wheel: '2개',
//   color: string
// }

// function CAR(x: Car | Bike) {
//   if (x.wheel === "4개") {
//     console.log('이 차는 ' + x.color)
//   } else {
//     console.log('이 바이크는 ' + x.color)
//   }
// }

// let Time = new Date();
// if (Time instanceof Date) {
//   console.log("참")
// }


// class User {
//   name: string;
//   private familyName: string = 'kim';

//   constructor(a) {
//     this.name = this.familyName + a
//   }

//   public ChangeName() {
//     this.familyName = 'park'
//   }
// }

// let 유저1 = new User('민수');
// 유저1.ChangeName();
// console.log(유저1);


// class Person {
//   constructor(public name : string,) {

//   }
// }

// let 자식 = new Person('kim');
// console.log(자식);

// class User {
//   protected x: number = 10;
// }

// class NewUser extends User {
//   doThis() {
//     this.x = 20;
//   }
// }

// console.log(new NewUser);

class User {
  // static x = 10;
  public static x = 10;
  y = User.x + 20;
}

console.log(new User());


class User2 {
  private static x = 10;
  public static y = 20;

  static addOne(a: number) {
    return User2.x += a;
  }

  static printX() {
    return console.log(User.x)
  }
}

console.log(User2.addOne(3));
console.log(User2.addOne(10));
console.log(User2.printX());

// class Square {
//   constructor(public width: number, public height: number, public color: string) {

//   }
//   draw() {
//     let a = Math.random();
//     let square = `<div style="position:relative;
//       top : ${a * 400}px;
//       left : ${a * 400}px;
//       width : ${this.width}px;
//       height : ${this.height}px;
//       background : ${this.color}"
//     >
//     </div>`;
//     document.body.insertAdjacentHTML('beforeend', square);
//   }
// }

// let 네모 = new Square(30, 30, 'red');
// 네모.draw()
// 네모.draw()
// 네모.draw()
// 네모.draw()


// function 함수<MyType>(x:MyType[]):MyType {
//   return x[0]
// }
// let a = 함수<number>([4, 2]);
// let b = 함수<string>(['4', '2']);
// console.log(a);


// function 함수<MyType extends number>(x:MyType) {
//   return x - 1;
// }
// let a = 함수<number>(100);
// console.log(a)


// function Length<LengthType extends string | string[]>(x: LengthType) {
//   return x.length;
// }

// let a = Length<string>('hello');
// let b = Length<string[]>(['kim', 'park']);

// console.log("::::", a, b);

// interface Animal {
//   name : string;
//   age : number 
// }

// let data = '{"name" : "dog", "age" : 1 }';

// function Animal<Animal> (x : string ) : Animal{
//   return JSON.parse(x);
// }
// let result = Animal<Animal>(data);

// console.log(result);


class Person<Type> {
  name;
  constructor(a : Type){
    this.name = a;
  }
}
let a = new Person<string>('어쩌구');
console.log(a.name)//any 타입이 되었넹 