let car = {
    model: 'W213',
    weight: '1700kg',
    color: 'green',
    go: function () {
        console.log('go ' + this.model);
        return true;
    }
}

let ford = {
    year: 2008,
    go: function () {
        console.log(this.year + ' ' + this.color);
        return true;
    }
}

let chevrolet = {
    body_style: 'hidden',
    drive_type: 'fast',
    go: function () {
        console.log('this is chevrolet method go');
        return true;
    }
}

console.log(ford);
Object.setPrototypeOf(ford, car);
console.log(ford);
console.log(ford.model);
console.log(ford.weight);
console.log(ford.color);
console.log(ford.go());
car.mileage = '15000km';
console.log(ford.mileage);
console.log(ford.__proto__.go());
Object.setPrototypeOf(chevrolet, ford);
console.log(chevrolet.model);
console.log(chevrolet.color);
console.log(chevrolet.mileage);
console.log(chevrolet.go());

for (key in chevrolet) {
    if (typeof chevrolet[key] !== 'function') console.log(key + ': ' + chevrolet[key]);

}