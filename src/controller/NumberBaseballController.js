/*
 1. 게임의 시작 안내 및 숫자 입력 받기 -> InputView -> 받은 문자열을 그대로 배열로 만들기 
 2. 컴퓨터에서 임의의 숫자 3가지 만들기. => 3가지 숫자를 문자열 배열로 만들면 어떨지 -> domain
 3. 숫자 판단 로직 -> 볼과 스트라이크를 판단하는 로직 -> domain
 4. 예상 값에 대한 결과를 출력해주기 -> OutPutView
 5. 모두 맞히면 게임 종료 / 다시 하려면 다시 시작 -> domain
*/ 
/*
  1. 입력
  2. 결과 출력
*/

import { Console } from "@woowacourse/mission-utils";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import { RandomLottoNumber } from "../domain/RandomNumderGenerator.js";
import { findStrike, findCommonExcludingSameIndex }  from "../domain/Judgment.js";

class Controller {
  constructor() {
    this.inputView = new InputView();
  }

  async run() {
    try {
      const Start = await this.inputView.Start();
      const UserNumber = await this.inputView.readCount();
      let UserInputArray = UserNumber.split('').map(Number);
      const ComputerInput = RandomLottoNumber();

      const strike = findStrike(UserInputArray, ComputerInput);
      const ball = findCommonExcludingSameIndex(UserInputArray, ComputerInput);

    } catch (error) {
      OutputView.printError(error.message);
      // throw error; // 테스트에서 에러 확인할 때 필요
    }
  }
}

export default Controller;
