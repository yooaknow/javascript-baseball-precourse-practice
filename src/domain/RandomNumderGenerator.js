/*
컴퓨터에서 임의의 숫자 3가지 만들기. 
=> 3가지 숫자를 문자열 배열로 만들면 어떨지 

호출하면 랜덤 배열이 다시 return 되어야 함. 
함수로 만들어도 될듯
*/

import { Random } from "@woowacourse/mission-utils";

export function RandomLottoNumber() {
  const numbers = [];

  while (numbers.length < 3) {
    const num = Random.pickNumberInRange(1, 9);

    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }

  return numbers;
}

// const result = RandomLottoNumber();
// Console.print(result);

// 숫자 배열 생성

/*
여기서 오류가 남.
테스트 코드를 살펴본 결과 
컴퓨터 숫자 3개가 필요함
숫자를 1개씩 뽑는 함수 pickNumberInRange 를
3번 호출해야 함.
*/