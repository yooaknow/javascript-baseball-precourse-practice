import NumberBaseballController from './controller/NumberBaseballController.js';

class App {
  async play() {
    const controller = new NumberBaseballController();
    await controller.run();
  }
}

export default App;
