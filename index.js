const NamePush = (name) => {
    if (name) {
        console.log("안녕하세요" + name);
    }
    else {
        console.log("??");
    }
};
const Length = (x) => {
    if (x) {
        console.log(x.toString().length);
    }
    else {
        console.log("자료");
    }
};
const Married = (money, house, charm) => {
    let score = 0;
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
const Cleaning = (a) => {
    let SuccessCleaning = [];
    a.forEach((b) => {
        if (typeof b === "string") {
            SuccessCleaning.push(parseFloat(b));
        }
        else {
            SuccessCleaning.push(b);
        }
    });
    return SuccessCleaning;
};
const School = (x) => {
    if (typeof x.subject === "string") {
        return x.subject;
    }
    else if (Array.isArray(x.subject)) {
        return x.subject[x.subject.length - 1];
    }
    else {
        return "몰루";
    }
};
let user = { human: "준석", age: 28 };
console.log("멤버정보: ", user);
let test = {
    size: 125,
    color: "red",
    position: [2, 4, 5],
};
console.log("테스트 : ", test);
let friend = {
    name: '준석',
    phone: '01023322313',
    email: 'ooo22@naver.com',
    adult: false,
};
console.log("친구 :", friend);
NamePush();
Length("12356");
Married(50, true, "중");
console.log(Cleaning([123, "10"]));
console.log(School({ subject: ["english", "art", "korean"] }));
