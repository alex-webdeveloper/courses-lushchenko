class Goods2 extends Goods {
    constructor(name, amount, image, count, sale) {
        super(name, amount, image, count);
        this.sale = sale;
    }

    draw() {
        let elem = super.draw();
        if (this.sale == false) elem.innerHTML += `<li>No Sale</li>`;
        if (this.sale == true) elem.innerHTML += `<li>Sale</li>`;
        return elem;

    }
}
