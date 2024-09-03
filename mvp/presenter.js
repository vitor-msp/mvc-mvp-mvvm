import { Model } from "./model.js";

export class Presenter {
  constructor(view) {
    this.view = view;
  }

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
    this.view.success(id, name, age);
  }

  showErrorView(name, age) {
    this.view.error(name, age);
  }
}
