class List {
  constructor(item) {
    this.item = item;
  }

  render() {
    let ul = document.createElement("ul");
    for (let i = 0; i < this.item.length; i++) {
      let li = document.createElement("li");
      li.innerHTML = this.item[i];
      ul.appendChild(li);
    }
    console.log(ul);
    return ul;
  }
}
