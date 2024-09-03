export class View {
  success(id, name, age) {
    window.location.href = `/mvc/view/success.html?id=${id}&name=${name}&age=${age}`;
  }

  error(name, age) {
    window.location.href = `/mvc/view/error.html?name=${name}&age=${age}`;
  }
}
