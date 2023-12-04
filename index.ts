const NamePush = (name?: string) => {
  if (name) {
    console.log("안녕하세요" + name);
  } else {
    console.log("??");
  }
};

const Length = (x?: number | string) => {
  if (x) {
    console.log(x.toString().length);
  } else {
    console.log("자료");
  }
};

const Married = (
  money: number,
  house: boolean,
  charm: string
): string | void => {
  let score: number = 0;
  score += money;
  if (house === true) {
    score += 500;
  }
  if (charm === "상") {
    score += 100;
  }
  if (score >= 600) {
    return console.log("결혼가능");
  }
};

const Cleaning = (a: (number | string)[]) => {
  let SuccessCleaning: number[] = [];

  a.forEach((b) => {
    if (typeof b === "string") {
      SuccessCleaning.push(parseFloat(b));
    } else {
      SuccessCleaning.push(b);
    }
  });

  return SuccessCleaning;
};

const School = (x: { subject: string | string[] }) => {
  if (typeof x.subject === "string") {
    return x.subject;
  } else if (Array.isArray(x.subject)) {
    return x.subject[x.subject.length - 1];
  } else {
    return "몰루";
  }
};

type Human = { human: string };
type Age = { age: number };
type Member = Human & Age;

let user: Member = { human: "준석", age: 28 };

console.log("멤버정보: ", user);

type Square = {
  color?: string;
  size: number;
  readonly position: number[];
};

let test: Square = {
  size: 125,
  color: "red",
  position: [2, 4, 5],
};

console.log("테스트 : ", test);

type Friend = {
  name: string;
  phone: string;
  email: string;
};
type Adult = {
    adult : boolean;
}
type NewUser = Friend & Adult;

let friend : NewUser = {
    name : '준석',
    phone : '01023322313',
    email : 'ooo22@naver.com',
    adult : false,
}

console.log("친구 :", friend);

NamePush();
Length("12356");
Married(50, true, "중");
console.log(Cleaning([123, "10"]));
console.log(School({ subject: ["english", "art", "korean"] }));
