//1. function
//function name(param1, param2) {body... return;}
//함수는 한번에 하나만
"use strict";
function printHello() {
    console.log('hello');
}
printHello();

function log(message)   {
    console.log(message);
}
log('hell')

//2. parameters
// premitive 값 그대로 전달
// object는 메모리에 레퍼런스가 저장. 그 레퍼런스가 전달.

function changeName(obj) {
    obj.name = 'coder';
}
const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie);

//3. default parameters
function showMessage(message, from){
    if (from === undefined) {
        console.log(`${message} by ${from}`);
    }
}
showMessage('hi');

// local scope 괄호 안에있는애는 밖에있는거 인식가능 but 밖에있는애는 안에꺼 인식 못함
let globalmessage = 'global';
function printmessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalmessage);
}
printmessage();

//return 함수는 기본빵으로 return undifined; 설정돼있는것임.
//early return, early exit 빨리 값이 뜨게 하는게 좋음.

function randomQuiz(answer, printYes, printNo) {
    if (answer==='i love you') {
        printYes();
    } else {
        printNo();
    }
}
const printYes = function () {
    console.log('yes!');
};

const printNo = function print() {
    console.log('no!');
    };
randomQuiz('wrong', printYes, printNo);
randomQuiz('i love you', printYes, printNo);

//arrow function 항상 이름이 없는 함수
const simplePrint = function () {
    console.log('gkgkgkgk');
}
simplePrint();

const simpleP2 = () => console.log('glglglekekek');
simpleP2();
const add = (a, b) => a + b;
add(`a:1, b:2`);

// IIFE 선언과 동시에 호출할라면 ()로 묶기
(function hello() {
    console.log('IIFE');
})();

// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
    switch (command) {
        case 'add' :
            return(a+b);
            break;
        case 'substract' : 
            return(a-b);
            break;
        case 'divide' : 
            return(a/b);
            break;
        case 'multiply' : 
            return(a*b);
            break;
        case 'remainder' : 
            return(a%b);
            break;
    }
}
console.log(calculate('divide',10,2));