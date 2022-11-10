class Man {
    constructor(name, age, passport, sex) {
        this._name = name;
        this.age = age;
        this.passport = passport;
        this.sex = sex;
    }

    render(item) {
        let out = '';

        out += `<p>${this._name}</p>`;
        out += `<p>${this.age}</p>`;
        out += `<p>${this.passport}</p>`;
        out += `<p>${this.sex}</p>`;

        document.querySelector(item).innerHTML = out;

    }
}