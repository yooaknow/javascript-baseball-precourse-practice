/* 
숫자 야구 게임을 시작합니다.
숫자를 입력해주세요 : 123

게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.

게임의 도입부의 Input을 문자열로 받아야함. 

*/

import { Console } from "@woowacourse/mission-utils";

class InputView {
  async readCount() {
    Console.print("숫자 야구 게임을 시작합니다.");
    const inputCount = await Console.readLineAsync("숫자를 입력해주세요 :");
    return inputCount;
  }
}

export default InputView;