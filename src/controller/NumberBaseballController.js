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

import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import Validator from "../utils/Validator.js";
import { RandomLottoNumber } from "../domain/RandomNumderGenerator.js";
import { findStrike, findCommonExcludingSameIndex } from "../domain/Judgment.js";

class NumberBaseballController {
  constructor() {
    this.inputView = new InputView();
  }

  async run() {
    try {
      await this.inputView.Start();

      let restart = true;

      while (restart) {
        // 컴퓨터 숫자 (숫자 배열로 통일)
        const ComputerInput = RandomLottoNumber().map(Number);

        let strikeCount = 0;

        while (strikeCount !== 3) {
          const userInput = await this.inputView.readCount();
          Validator.validateMaxLength(userInput, 3);

          const userArray = userInput.split("").map(Number);

          const strike = findStrike(userArray, ComputerInput);
          const ball = findCommonExcludingSameIndex(userArray, ComputerInput);

          const ballCount = ball.length;
          strikeCount = strike.length;

          if (strikeCount === 3) {
            // 정답!
            OutputView.printStrikeFinish(strikeCount);
            OutputView.printReplayGuide();

            const replay = await this.inputView.readReplay();

            if (replay === "1") {
              // 새 게임
              break;
            }

            if (replay === "2") {
              restart = false;
              break;
            }
          }

          if (strikeCount > 0 && ballCount > 0) {
            OutputView.printBallStrike(ballCount, strikeCount);
          } else if (strikeCount > 0) {
            OutputView.printStrike(strikeCount);
          } else if (ballCount > 0) {
            OutputView.printBall(ballCount);
          } else {
            OutputView.printZero();
          }
        }
      }
    } catch (error) {
      OutputView.printError(error.message);
      throw error;
    }
  }
}

export default NumberBaseballController;
