/*
컴퓨터에서 임의의 숫자 3가지 만들기. 
=> 3가지 숫자를 문자열 배열로 만들면 어떨지 

호출하면 랜덤 배열이 다시 return 되어야 함. 
함수로 만들어도 될듯
*/

import { Random, Console }from "@woowacourse/mission-utils";

export function RandomLottoNumber() {

let NumberArray =Random.pickUniqueNumbersInRange(1,9,3)
  .sort((a, b) => a - b);
  
  return NumberArray;
} 

// const result = RandomLottoNumber();
// Console.print(result);

// 숫자 배열 생성

