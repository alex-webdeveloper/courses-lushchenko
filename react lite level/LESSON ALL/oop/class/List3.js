class List3 extends List {
  constructor(item, cssClass) {
    super(item);
    this.cssClass = cssClass;
  }
  render() {
    let ul = super.render();
    for (let elem of this.cssClass) {
      ul.classList.add(elem);
    }
    return ul;
  }
}
