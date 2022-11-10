class Employer extends Man {
    constructor(name, age, passport, sex, create, salary) {
        super(name, age, passport, sex);
        this.create = create;
        this.salary = salary;
    }

    set name(name) {
        if (typeof name === 'string') {
            this._name = name.trim();
        }
    }

    get name() {
        return this._name;
    }

    render(item) {
        // let p = document.createElement('p');
        // p.innerHTML = this._name;
        // document.querySelector(item).append(p);
        // p = document.createElement('p');
        // p.innerHTML = this.age;
        // document.querySelector(item).append(p);
        // p = document.createElement('p');
        // p.innerHTML = this.passport;
        // document.querySelector(item).append(p);
        // p = document.createElement('p');
        // p.innerHTML = this.sex;
        // document.querySelector(item).append(p);
        // p = document.createElement('p');
        // p.innerHTML = this.create;
        // document.querySelector(item).append(p);
        // p = document.createElement('p');
        // p.innerHTML = this.salary;
        // document.querySelector(item).append(p);

        super.render(item);
        let p = document.createElement('p');
        p.innerHTML = this.create;
        document.querySelector(item).append(p);

        p = document.createElement('p');
        p.innerHTML = this.salary;
        document.querySelector(item).append(p);
    }
}