
// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

function t1() {
    document.querySelector('.out-1').textContent += 'touch ';
}

document.querySelector('.div-1').addEventListener('touchstart', t1);

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */

let count = 0;

function t2() {
    // count++;
    document.querySelector('.out-2').textContent = count++;
}

document.querySelector('.div-2').addEventListener('touchstart', t2);


// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

function t3() {
    document.querySelector('.out-3').textContent = this.textContent;
}

document.querySelector('.div-3_1').addEventListener('touchstart', t3);
document.querySelector('.div-3_2').addEventListener('touchstart', t3);


// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

function t4() {
    document.querySelector('.div-4').ontouchstart = t4_1;
}

function t4_1() {
    document.querySelector('.out-4').textContent += 'touch ';
}

document.querySelector('.b-4').onclick = t4;

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

function t5() {
    document.querySelector('.div-4').ontouchstart = null;
}

document.querySelector('.b-5').onclick = t5;

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

function t6() {
    document.querySelector('.out-6').textContent += 'touchend ';
}

document.querySelector('.div-4').ontouchend = t6;


// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

function t7() {
    this.style.background = 'red';
}

document.querySelector('.div-7').addEventListener('touchstart', t7);

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */

let a8 = ['red', 'green', 'blue', 'orange', 'pink', 'yellow'];
function t8() {
    let rand = Math.floor(Math.random() * a8.length);
    this.style.background = a8[rand];
}

document.querySelector('.div-8').addEventListener('touchstart', t8);


// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */

function t9(event) {
    document.querySelector('.out-9').textContent = event.touches.length;
    console.log(event);
}

document.querySelector('.div-9').ontouchstart = t9;


// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */

let w = document.querySelector('.div-10').offsetWidth;
function t10() {
    // w++;
    this.style.width = w++ + 'px';
}

document.querySelector('.div-10').addEventListener('touchmove', t10);

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */


function t11(event) {
    // let out = '';
    let out = `radiusX: ${event.targetTouches[0]['screenX']}, radiusY: ${event.targetTouches[0]['screenY']}`;
    document.querySelector('.out-11').textContent = out;

}

document.querySelector('.div-11').addEventListener('touchstart', t11);

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/

const images = document.querySelectorAll('.img-12-min');
const max = document.querySelector('.img-12-max');
const text = document.querySelector('.img-12-text');


const next = document.querySelectorAll('.next');
next[0].onclick = nextFunction;
next[0].ontouchstart = nextFunction;

const prev = document.querySelectorAll('.prev');
prev[0].onclick = prevFunction;
prev[0].ontouchstart = prevFunction;

const reset = document.querySelector('.reset');
reset.onclick = resetFunction;
reset.ontouchstart = resetFunction;

function nextFunction() {
    images[count].classList.remove('active-img');
    count++;
    if (count == images.length) count = 0;
    images[count].classList.add('active-img');
    max.src = images[count].src;
    text.textContent = images[count].alt;
}


function prevFunction() {
    images[count].classList.remove('active-img');
    if (count - 1 < 0) count = images.length - 1;
    else count--;
    images[count].classList.add('active-img');
    max.src = images[count].src;
    text.textContent = images[count].alt;

}

function resetFunction() {
    images[count].classList.remove('active-img');
    count = 0;
    images[count].classList.add('active-img');
    max.src = images[0].src;
    text.textContent = images[count].alt;
}


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    next[0].onclick = null;
    prev[0].onclick = null;
    reset.onclick = null;

}

