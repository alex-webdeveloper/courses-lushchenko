// task 1 --------------------
document.querySelector('button').onclick = () => {
    let a = 4;
    if (a == 4) console.log(a == 4);

}

// key DdC33D7d2C2a7

//  POST отличается от GET тем что он не дублирует информацию в адресной строке, в браузере не получится этого сделать
// метод GET не подходит для отправки паролей и когда много информации

// postman.com http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=1  это GET запрос
//  (POST)  http://getpost.itgid.info/ndex2.php; body; form-data; key auth; value DdC33D7d2C2a7;; key action; value 1
// 