import { assertEqual, assertTrue } from "../../test.lib.js";
import { ViewMock } from "./view.mock.js";
import { Presenter } from "../presenter.js";

const makeSut = () => {
  const viewMock = new ViewMock();
  const presenter = new Presenter(viewMock);
  return [presenter, viewMock];
};

const testSuccessCase = (sut, mock) => {
  sut.createModel("old fulano", "1980-01-01");

  assertTrue(mock.successCalls.length === 1);
  assertTrue(mock.errorCalls.length === 0);
  assertEqual("string", typeof mock.successCalls[0].id);
  assertEqual("old fulano", mock.successCalls[0].name);
  assertTrue(mock.successCalls[0].age > 18);
};

const testErrorCase = (sut, mock) => {
  const baby = new Date().toISOString().split("T")[0];
  sut.createModel("new ciclano", baby);

  assertTrue(mock.successCalls.length === 0);
  assertTrue(mock.errorCalls.length === 1);
  assertEqual("undefined", typeof mock.errorCalls[0].id);
  assertEqual("new ciclano", mock.errorCalls[0].name);
  assertTrue(mock.errorCalls[0].age < 18);
};

testSuccessCase(...makeSut());
testErrorCase(...makeSut());
