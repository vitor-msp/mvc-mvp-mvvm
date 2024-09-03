export class View {
  processResult(result) {
    if (result.success) return this.success(result.id, result.name, result.age);
    return this.error(result.name, result.age);
  }

  success(id, name, age) {
    window.location.href = `/mvvm/view/success.html?id=${id}&name=${name}&age=${age}`;
  }

  error(name, age) {
    window.location.href = `/mvvm/view/error.html?name=${name}&age=${age}`;
  }
}
