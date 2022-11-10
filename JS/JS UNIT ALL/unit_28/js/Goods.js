class Goods {
    constructor(name, amount, image, count) {
        this.name = name;
        this.amount = amount;
        this.image = image;
        this.count = count;
    }
    draw() {
        let ul = document.createElement('ul');
        ul.innerHTML = `<li>${this.name}</li><li>${this.amount} USD</li><li><img src="${this.image}" width='200' alt="${this.name}"></li><li>Count in stock ${this.count}</li>`;
        return ul;
    }
}