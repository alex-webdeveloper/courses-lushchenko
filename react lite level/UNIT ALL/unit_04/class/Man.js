class Man {
    constructor(name, age, passport, sex) {
        this._name = name;
        this.age = age;
        this.passport = passport;
        this.sex = sex;
    }

    render(item) {
        let p = document.createElement('p');
        p.innerHTML = this._name;
        document.querySelector(item).append(p);

        p = document.createElement('p');
        p.innerHTML = this.age;
        document.querySelector(item).append(p);

        p = document.createElement('p');
        p.innerHTML = this.passport;
        document.querySelector(item).append(p);

        p = document.createElement('p');
        p.innerHTML = this.sex;
        document.querySelector(item).append(p);

    }
}