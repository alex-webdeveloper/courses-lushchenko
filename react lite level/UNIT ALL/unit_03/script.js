const man = new Man('175 cm', '89 kg', 28, 'man', 'Oleg', '4409 000 889', 'blue');
console.log(man);

let imgCar = 'https://avatars.mds.yandex.net/get-zen_doc/198938/pub_5d8afb46d7859b00b0b0ed65_5d8b026d5eb26800ac4a37d4/scale_1200';
const car = new Car('Toyota', 'Camry', '1800 kg', 'petrol', 'darkgreen', imgCar);
console.log(car);
car.render('main');

let ImgCar2 = 'http://piterakpp.com/images/bmw-m2-f87.jpg';
const car2 = new Car('BMV', 'M2', '1700 kg', 'petrol', 'blue', ImgCar2);
car2.render('main');

let ImgCar3 = 'https://img.youscreen.ru/wall/14977149934160/14977149934160_1920x1200.jpg';
const car3 = new Car('Mercedes', 's500 Coupe AMG', '2200 kg', 'petrol', 'black', ImgCar3);
car3.render('main');

let imgHeader = 'https://tvoe-avto.com/wp-content/uploads/600917.jpg';
let arrHeader = {
    name: 'Ivan',
    surname: 'Ivanov',
    phone: '8 - 800 - 001 - 33 - 57',
}
const header = new Header('Sale', 'Cars', 'credit', imgHeader, arrHeader);
header.render('header');