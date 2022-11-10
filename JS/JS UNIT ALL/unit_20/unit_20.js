// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1(event) {
  document.querySelector(".out-1").textContent = event.key;
  return event.key;
}

document.querySelector(".i-1").onkeydown = t1;

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2(event) {
  document.querySelector(".out-2").textContent = event.keyCode;
  return event.keyCode;
}

document.querySelector(".i-2").onkeypress = t2;

// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

let w3 = 75;
function t3(event) {
  document.querySelector(".out-3").textContent = isNaN(event.key);
}

document.querySelector(".i-3").onkeypress = t3;

// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

function t4(event) {
  let key = event.key;
  if (key !== key.toLowerCase()) {
    key = key.toLowerCase();
    document.querySelector(".out-4").textContent += key;
  }
  document.querySelector(".out-4").textContent += key;
}

document.querySelector(".i-4").onkeypress = t4;

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5(event) {
  if (event.keyCode > 96) {
    document.querySelector(".out-5").textContent += String.fromCharCode(
      event.keyCode - 32
    );
  } else {
    document.querySelector(".out-5").textContent += event.key;
  }
}

document.querySelector(".i-5").onkeypress = t5;

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */

function t6(event) {
  if (event.keyCode > 96) {
    this.value += event.key;
  }
  return false;
}

document.querySelector(".i-6").onkeypress = t6;

// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

function t7() {
  const a7 = ["a", "c", "R", "s", "W", "p", "g"];
  let rand = Math.floor(Math.random() * a7.length);
  document.querySelector(".out-7").textContent += a7[rand];
}

document.querySelector(".i-7").onkeypress = t7;

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

let out8 = "";
const a8 = {
  i: 1,
  o: 0,
  l: 7,
};

function t8(event) {
  if (event.key in a8) out8 += a8[event.key];
  else out8 += event.key;

  console.log("накопление: " + out8);
  document.querySelector(".out-8").textContent = out8;

  if (a8[event.key] !== undefined) this.value += a8[event.key];
  else this.value += event.key;

  let summ = [];
  summ.push(this.value);
  console.log(summ);

  return false;
}

document.querySelector(".i-8").onkeypress = t8;

// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */

let count = 0;
function t9(event) {
  if (event.keyCode === 40) count++;

  document.querySelector(".out-9").textContent = count;
}

document.querySelector(".i-9").onkeyup = t9;

// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */

let i = document.querySelector("img").offsetWidth; // ширина и высота img == 64 поэтому переменную оставляю одну i
function t10(event) {
  i++;
  if (event.keyCode === 37 || event.keyCode === 39) {
    document.querySelector("img").style.width = i + "px";
  } else if (event.keyCode === 40 || event.keyCode === 38) {
    document.querySelector("img").style.height = i + "px";
  }
}

document.querySelector(".i-10").onkeyup = t10;

// Task 11 ============================================
/*  Проект.
1. Выполните в html верстку клавиш клавиатуры. Сверстайте – блок цифровых клавиш от 1 до 0. И ряд клавиш q – p. Добавьте клавишу левый shift, левый  alt, левый ctrl,  пробел, enter.
2. Добавьте на input .i-11 событие onkeypress или onkeyup или onkeydown ( по вашему выбору). Когда событие происходит ( ввод символа в input) необходимо подсветить ( добавить класс active) клавише с таким символом. Со всех остальных клавиш – удалить класс active.
3. Если вводится следующий символ – повторить удаление active и подсветить клавишу с введенным символом.
4. Ограничения проекта – тестируются только указанные клавиши в латинской раскладке. Комбинации клавиш не тестируются. Т.е. нажиматься shift+A, ctrl+shift – не будут. Все символы вводятся в нижнем регистре.
*/

let divK = document.querySelectorAll(".key");
function t11(event) {
  for (elem of divK) {
    if (elem.getAttribute("data-key") === event.code)
      elem.classList.add("active");
    else elem.classList.remove("active");
  }
}

document.onkeydown = t11;
