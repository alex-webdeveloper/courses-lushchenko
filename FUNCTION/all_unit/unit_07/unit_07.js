const sliderFunc = () => {
    const data = [
        "Начальник не всегда прав, но он всегда начальник.",
        "Время, затраченное на обсуждение проблемы обратно пропорционально значимости проблемы.",
        "Если нужно срочно сделать какое - либо дело, обратись к тому, кто занят больше всех.",
        "Не спеши выполнять приказ — его могут отменить.",
        "Тому, кто сам ничего не делает, все кажется по плечу.",
        "Начальник — это человек, который приходит на службу поздно, когда ты приходишь рано, и появляется чуть свет, когда ты опаздываешь.",
        "Только когда читаешь разъяснение ранее полученной инструкции, догадываешься, что не понял не самой инструкции, ни разъяснений к ней.",
        "Если отложить дело надолго, то его либо выполнит кто - нибудь другой, либо оно вообще перестанет быть нужным.",
        "Не будь незаменимым — тебя никогда не повысят.",
        "Позади всякого, кто сделал успешную карьеру, стоит озадаченная женщина.",
    ];

    const color = ['#CC0000', '#FF6600', '#FF3366', '#9933CC', '#003333', '#708090'];

    let count = 0;
    let slideArr;

    const start = function (event) {
        event.stopPropagation();
        this.classList.add('hide');
        render();
    }

    const render = () => {
        const body = document.querySelector('body');
        for (let i = 0; i < data.length; i++) {
            let div = document.createElement('div');
            div.classList.add('slide');
            if (i !== 0) div.classList.add('hide');
            if (i === 0) div.style.background = color[randomInt(0, color.length - 1)];
            let text = document.createElement('p');
            text.textContent = data[i];
            div.append(text);
            body.append(div);
        }
        body.addEventListener('click', showSlide);
        slideArr = document.querySelectorAll('.slide');
    }

    const showSlide = () => {
        hideSlide(count);
        if (count + 1 < data.length) {
            count++;
        }
        else {
            count = 0;
        }
        nextSlide(count);
    }

    const hideSlide = n => {
        slideArr[n].classList.add('hide');

    }

    const nextSlide = n => {
        slideArr[n].classList.remove('hide');
        slideArr[n].style.background = color[randomInt(0, color.length - 1)];
    }

    const randomInt = (min, max) => {
        // случайное число от min до (max+1)
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    document.querySelector('.btn-start').addEventListener('click', start);
}

document.addEventListener("DOMContentLoaded", sliderFunc);
