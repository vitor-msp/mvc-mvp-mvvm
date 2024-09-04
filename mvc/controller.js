import { Model } from "../core/model.js";

export class Controller {
  createModel(name, birthDate) {
    try {
      const model = new Model(name, birthDate);
      this.showSuccessView(model);
    } catch (error) {
      this.showErrorView(name, error.age);
    }
  }

  showSuccessView(model) {
    const { id, name, age } = model;
    window.location.href = `/core/view/success.html?id=${id}&name=${name}&age=${age}`;
  }

  showErrorView(name, age) {
    window.location.href = `/core/view/error.html?name=${name}&age=${age}`;
  }
}
