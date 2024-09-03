export class ViewMock {
  successCalls = [];
  errorCalls = [];

  success(id, name, age) {
    this.successCalls.push({ id, name, age });
  }

  error(name, age) {
    this.errorCalls.push({ name, age });
  }
}
