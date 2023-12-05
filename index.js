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
function play() {
    let get = document.querySelector(".get");
    let link = document.querySelectorAll('.link');
    if (get instanceof HTMLImageElement) {
        get.src = "/cute.jpg";
    }
    link.forEach((a) => {
        if (a instanceof HTMLAnchorElement) {
            a.href = 'http://www.kakao.com';
        }
    });
}
class Car {
    constructor(type, money) {
        this.model = type;
        this.money = money;
    }
    tax() {
        return this.money * 0.1;
    }
}
let car1 = new Car('소나타', 3000);
console.log(car1); //콘솔창 출력결과는 { model : '소나타', price : 3000 }
console.log(car1.tax()); //콘솔창 출력결과는 300
class Word {
    constructor(...param) {
        let num = [];
        let str = [];
        param.forEach((i) => {
            if (typeof i === 'string') {
                str.push(i);
            }
            else {
                num.push(i);
            }
        });
        this.num = num;
        this.str = str;
    }
}
let obj = new Word('kim', 3, 5, 'park');
console.log(obj.num); //[3,5]
console.log(obj.str); //['kim', 'park']
