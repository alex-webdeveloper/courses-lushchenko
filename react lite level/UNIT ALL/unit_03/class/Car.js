class Car {
    constructor(brand, name, weight, fuel_type, color, img) {
        this.brand = brand;
        this.name = name;
        this.weight = weight;
        this.fuel_type = fuel_type;
        this.color = color;
        this.src = img;
    }

    render(item) {
        let out = '';
        out += `<div class="col col-md-6 col-lg-4">`;
        out += `<h2>${this.brand}</h2>`;
        out += `<h3>${this.name}</h3>`;
        out += `<p>${this.weight}, ${this.fuel_type}, ${this.color}</p>`;
        out += `<img src='${this.src}' alt='car' width='100%'> `;
        out += ` </div>`;
        document.getElementById(item).innerHTML += out;
    }
}