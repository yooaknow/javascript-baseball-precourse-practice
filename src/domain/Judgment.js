/*
숫자 배열 값 받아서, RandomNumber랑 같이 배열로 받은 다음에 비교해서 
넘겨주기 

- 입력한 수에 대한 결과를 볼, 스트라이크 개수로 표시
-> 1볼 1스트라이크
- 하나도 없는 경우
-> 낫싱
- 3개의 숫자를 모두 맞힐 경우
-> 3스트라이크
3개의 숫자를 모두 맞히셨습니다! 게임 종료

볼, 스트라이크, 낫싱 변수 따로 만들기 
*/


import { Console }from "@woowacourse/mission-utils";

let UserInput = "153";
let UserInputArray = [...UserInput];

let ComputerInput1 = [1,5,3]; //3스트라이크
// let ComputerInput2 = [1,3,6]; //1볼 1스트라이크
// let ComputerInput3 = [2,5,6]; //1스트라이크
// let ConstComputerInput4 = [2,6,4]; //낫싱

const array1 = [1, 2, 3, 4, 5, 6];
const array2 = [2, 3, 4, 1, 5, 5];


function findStrike(arr1, arr2){
  const strike = []; 

  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) { 
        strike.push(arr1[i]);
      }
    }
  } return strike.length;
}


function findCommonExcludingSameIndex(arr1, arr2) {
    const ball = [];
    const arr1Set = new Set(arr1); 

    for (let i = 0; i < arr2.length; i++) {
        const value = arr2[i];
        if (arr1Set.has(value) && arr1[i] !== value) {
            ball.push(value);
        }
    }
    return ball.lenght ;
}


const result1 =  findStrike (array1, array2);
const result2 = findCommonExcludingSameIndex(array1, array2);

Console.print(result1); // strike의 갯수
Console.print(result2); // ball의 갯수
