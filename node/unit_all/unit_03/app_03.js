//Установите Node.js с сайта программы. Повторите действия урока.

console.log('Если вы это видите - то сделали!!!');

// Task 2. Напишите функцию f2, которая принимает 2 числа и выводит и возвращает максимальное из них. Для этого используйте Math.

const f2 = (a, b) => {
    console.log(Math.max(a, b));
    return Math.max(a, b);
}
f2(10, 30);

// Task 3. Напишите функцию f3, которая выводит и возвращает случайное число от 0 до 10.

const f3 = () => {
    let random = Math.floor(0 + Math.random() * (10 + 1 - 0));
    console.log(random);
    return random;
}
f3();

// Task 4. Напишите функцию f4, которая выводит и возвращает случайное число от a до b.

const f4 = (a, b) => {
    let random = Math.floor(a + Math.random() * (b + 1 - a));
    console.log(random);
    return random;

}
f4(2, 55);

// Тask 5. Напишите фукнцию f5, которая выводит и возвращает текущую дату в формате год-месяц-день. Причем делает это с ведущим нулем.
// Пример 2020-03-22

const f5 = () => {
    function addZero(num) {
        if (num <= 9) return '0' + num;
        else return num;
    }
    let date = new Date();
    let out = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;
    console.log(out);
    return out;

}
f5();

//Task 6. Напишите функцию f6, которая проверяет является ли введенный год високосным. Возвращает true если да, и false если нет. 

const f6 = (year) => {
    if (year % 4 === 0) return true;
    else return false;
}
console.log(f6(2020));