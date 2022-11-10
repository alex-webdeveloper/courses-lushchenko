
let inp = document.querySelector('input');
document.querySelector('button').onclick = () => {
    getWeather(inp.value);
    inp.value = '';
}

getWeather('Париж');


function getWeather(cityName) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=7ae5811a9e1ea2fe062930875fbddad3&lang=ru`)
        .then(resp => {
            console.log(resp);
            return resp.json();
        })
        .then(function (data) {
            console.log(data);
            if (data.message == 'city not found') {
                document.querySelector('.name').textContent = data.message;
                document.querySelector('.temp').textContent = '';
                document.querySelector('.wind').textContent = '';
                document.querySelector('.descript').textContent = '';
                document.querySelector('.im').innerHTML = `<img src="images/sun.png" alt="sun" width='150'>`;

            }
            else {
                document.querySelector('.name').textContent = `${data.name} ${data.sys.country}`;
                document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)}&deg;`;
                document.querySelector('.wind').textContent = `Скорость ветра: ${data.wind.speed} м/с`;
                document.querySelector('.descript').textContent = data.weather[0].description;
                document.querySelector('.im').innerHTML = `<img src = "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;

            }
        })
}


(function s() {
    setTimeout(alert('hello'), 5000);
}())
