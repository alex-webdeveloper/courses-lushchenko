
let url = 'http://getpost.itgid.info/index2.php';
let auth = '7859d9d42a8834141d529577207c9596';

function string(arr) {
    let out = '';
    for (let key in arr) {
        out += `&${key}=${arr[key]}`;
    }
    return out;
}

function fetchGet(div, arr1, arr2) {
    let prom1 = new Promise((resolve, reject) => {
        fetch(`${url}?auth=${auth}${string(arr1)}`)
            .then((response) => {
                console.log(response);
                resolve(response.text());
            })
    });

    let prom2 = new Promise((resolve, reject) => {
        fetch(`${url}?auth=${auth}${string(arr2)}`)
            .then((response) => {
                console.log(response);
                resolve(response.text());
            })
    });

    Promise.all([prom1, prom2]).then(value => {
        console.log(value);
        console.log(value[0]);
        console.log(value[1]);
        document.querySelector(div).innerHTML = `${value[0]}<br>${value[1]}`;
        if (div == '.out-4') document.querySelector(div).innerHTML = `<img src="${value[0]}" alt="foto"><br>${value[1]}`;

    })
};

function fetchPost(div, arr1, arr2) {
    let prom1 = new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `auth=${auth}${string(arr1)}`,
        })
            .then((response) => {
                resolve(response.text());
            })
    });

    let prom2 = new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `auth=${auth}${string(arr2)}`,
        })
            .then((response) => {
                resolve(response.text());
            })
    });

    Promise.all([prom1, prom2]).then(value => {
        console.log(value);
        console.log(value[0]);
        console.log(value[1]);
        document.querySelector(div).innerHTML = `${value[0]}<br>${value[1]}`;
        if (div == '.out-8') document.querySelector(div).innerHTML = `<img src="${value[0]}" alt=""><br>${value[1]}`;

    })
};

// Task 1 ============================================
/* 
 <p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два запроса объедините с помощью promiseAll. Результат выведите в out-1 результат. Запускаться функция
    должна по нажатию b-1.</p>
*/

function t1() {
    let arr1 = {
        action: 1,
    };

    let arr2 = {
        action: 2,
        name: 'Aleksey',
    };

    fetchGet('.out-1', arr1, arr2);
}

document.querySelector('.b-1').onclick = t1;

// Task 2 ============================================
/* 
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.</p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
заданном
диапазоне.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. </p>

*/

function t2() {
    let arr1 = {
        action: 3,
        num1: 5,
        num2: 15,
    };

    let arr2 = {
        action: 4,
        num1: 7,
        num2: 25,
    };

    fetchGet('.out-2', arr1, arr2);
}

document.querySelector('.b-2').onclick = t2;


// Task 3 ============================================
/*  
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два
запроса объедините с помощью promiseAll.
Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. </p>
                 */

function t3() {
    let arr1 = {
        action: 5,
    };

    let arr2 = {
        action: 6,
        num1: 2,
        num2: 35,
    };

    fetchGet('.out-3', arr1, arr2);

}

document.querySelector('.b-3').onclick = t3;


// Task 4 ============================================
/*  
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все
сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Выведите в out-4 результат. Запускаться функция должна по нажатию b-4.</p>

*/

function t4() {
    let arr1 = {
        action: 7,
    };

    let arr2 = {
        action: 8,
        year: 1980,
    };

    fetchGet('.out-4', arr1, arr2);
}

document.querySelector('.b-4').onclick = t4;

// Task 5 ============================================
/*  
 <p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1.</p>
<p>Отправьте
POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два
запроса объедините с помощью promiseAll. Результат выведите в out-5 результат. Запускаться функция
должна по нажатию b-5.</p>
*/

function t5() {
    let arr1 = {
        action: 1,
    };

    let arr2 = {
        action: 2,
        name: 'Aleksey',
    };

    fetchPost('.out-5', arr1, arr2);
}

document.querySelector('.b-5').onclick = t5;

// Task 6 ============================================
/* 
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3.
    Добавьте
    параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. </p>
<p>Отправьте POST
    запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
    Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
    заданном
    диапазоне.</p>
<p> Два запроса объедините с помощью promiseAll.
    Выведите в
    out-6 результат. Запускаться функция должна по нажатию b-6. </p>
*/

function t6() {
    let arr1 = {
        action: 3,
        num1: 5,
        num2: 15,
    };

    let arr2 = {
        action: 4,
        num1: 7,
        num2: 25,
    };

    fetchPost('.out-6', arr1, arr2);
}

document.querySelector('.b-6').onclick = t6;


// Task 7 ============================================
/*  
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. </p>

*/

function t7() {
    let arr1 = {
        action: 5,
    };

    let arr2 = {
        action: 6,
        num1: 2,
        num2: 35,
    };

    fetchPost('.out-7', arr1, arr2);
}

document.querySelector('.b-7').onclick = t7;

// Task 8 ============================================
/* 
<p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth
(ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Два запроса объедините с помощью promiseAll. Выведите в out-8 результат. Запускаться функция должна по
нажатию b-8.</p>
*/

function t8() {
    let arr1 = {
        action: 7,
    };

    let arr2 = {
        action: 8,
        year: 1980,
    };

    fetchPost('.out-8', arr1, arr2);
}

document.querySelector('.b-8').onclick = t8;

