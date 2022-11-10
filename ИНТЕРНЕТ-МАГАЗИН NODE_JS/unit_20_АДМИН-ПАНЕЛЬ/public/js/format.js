function formatDate() {
    let elem = document.querySelectorAll('.fo');
    // function addZero(num) {
    //     if (num <= 9) return '0' + num;
    //     else return num;
    // }

    for (let i = 0; i < elem.length; i++) {
        // let d = new Date(elem[i].innerHTML * 1000);
        // console.log(d);
        // let out = `${d.getFullYear()}-${addZero(d.getMonth() + 1)}-${addZero(d.getDate())} ${addZero(d.getHours())}:${addZero(d.getMinutes())}`;
        let data = new Date(elem[i].innerHTML * 1000);
        elem[i].innerHTML = data;
    }

}
formatDate();