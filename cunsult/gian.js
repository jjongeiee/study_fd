


var MemberName = document.getElementById('Member').value;
function printMember() {
    console.log(MemberName);
//     // document.getElementById('result').innerText = MemberName;
//     var Letter = 
// `안녕하세요.\n
// 선발평가팀 ${MemberName}입니다.`
// console.log(Letter);
// }


// var Member = MemberName; //받아온 입력값
// console.log(Member);
// let Company = '지방행정'; //받아온 회사값
// console.log(Company);
// let price = (1+1+1+2+2+2); //받아온 입력한 계산식
// console.log(price);
// // date(2022,02,02);
// // console.log(date)나중에

var Letter = 
`안녕하세요.\n
선발평가팀 ${MemberName}입니다.`
console.log(Letter);
// 아래와 같이 기안을 요청드립니다.\n
// 1. 프로젝트기업명 : ${Company}\n
// 4. 진행부서 : 선발평가팀\n
// 5. 총 원가액 : ${price}\n
// 6. 기타 특이사항 : \n
// \n
// \n
// 감사합니다.\n
// ${Member}드림.
// `;
// console.log(Letter);

// 2. 면접전형일자 : ${date}\n //선택날짜
// 3. 비용지급요청일자 : ${payday}\n //선택날짜