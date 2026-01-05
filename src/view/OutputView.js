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

class OutputView {
  static Ball(ball) {
      Console.print(`${ball}볼`);
  }
  static BallStrike(ball,strike) {
      Console.print(`${ball}볼 ${strike}스트라이크`);
  }
  static Strike(strike) {
      Console.print(`${strike}스트라이크`);
  }

  static StrikeFinish(strike) {
      Console.print(`${strike}스트라이크`);
      Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
  }

}
export default OutputView;

