/*
함수 호출에 따라서 다른 값을 줘야함 

1. X볼 X스트라이크 (2가지 숫자 입력 받아 보여주기)
2. X볼 (1가지 숫자 입력 받아서 보여주기)
3. X 스트라이크 (1가지 숫자 입력 받아서 보여주기)

4. 3스트라이크 하고 -> 3개의 숫자를 모두 맞히셨습니다! 게임 종료

ex)
1볼 1스트라이크
1볼
2볼
1스트라이크
3스트라이크
3개의 숫자를 모두 맞히셨습니다! 게임 종료
...
*/ 
import { Console } from '@woowacourse/mission-utils';

class OutputView {
  static printBall(ball) {
      Console.print(`${ball}볼`);
  }
  static printBallStrike(ball,strike) {
      Console.print(`${ball}볼 ${strike}스트라이크`);
  }
  static printStrike(strike) {
      Console.print(`${strike}스트라이크`);
  }
  static  printZero() {
      Console.print(`낫싱`);
  }

  static printStrikeFinish(strike) {
      Console.print(`${strike}스트라이크`);
      Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
  }

  static printReplayGuide() {
  Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
}


  static printError(message) {
    Console.print(`${message}`);
  }

}
export default OutputView;