class Button {
  constructor(width, height, background, value) {
    this.width = width;
    this.height = height;
    this.background = background;
    this.value = value;
  }

  render() {
    let button = document.createElement("button");
    button.style.width = this.width;
    button.style.height = this.height;
    button.style.background = this.background;
    button.innerHTML = this.value;
    return button;
  }
}
