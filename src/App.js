import NumberBaseballController from './controller/NumberBaseballController.js';

class App {
  async play() {
    const controller = new NumberBaseballController();
    await controller.run();
  }
}

const app = new App();
app.play();

export default App;