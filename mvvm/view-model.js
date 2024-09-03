import { Model } from "./model.js";

export class ViewModel {
  createModel(name, birthDate) {
    try {
      const model = new Model(name, birthDate);
      return {
        success: true,
        id: model.id,
        name: model.name,
        age: model.age,
      };
    } catch (error) {
      return {
        success: false,
        id: undefined,
        name: name,
        age: error.age,
      };
    }
  }
}
