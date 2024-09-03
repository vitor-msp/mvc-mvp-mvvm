import { assertEqual, assertTrue, assertFalse } from "../../test.lib.js";
import { ViewModel } from "../view-model.js";

const testSuccessCase = (sut) => {
  const result = sut.createModel("old fulano", "1980-01-01");

  assertTrue(result.success);
  assertEqual("string", typeof result.id);
  assertEqual("old fulano", result.name);
  assertTrue(result.age > 18);
};

const testErrorCase = (sut) => {
  const baby = new Date().toISOString().split("T")[0];
  const result = sut.createModel("new ciclano", baby);

  assertFalse(result.success);
  assertEqual("undefined", typeof result.id);
  assertEqual("new ciclano", result.name);
  assertTrue(result.age < 18);
};

testSuccessCase(new ViewModel());
testErrorCase(new ViewModel());
