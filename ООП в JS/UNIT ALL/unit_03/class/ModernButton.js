class ModernButton extends Button {
  constructor(width, height, background, value, borderRadius = 0) {
    super(width, height, background, value);
    this.borderRadius = borderRadius;
  }
  render() {
    const elem = super.render();
    elem.style.borderRadius = this.borderRadius;
    return elem;
  }
}
