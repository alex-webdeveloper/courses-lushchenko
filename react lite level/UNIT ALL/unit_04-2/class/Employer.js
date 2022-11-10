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
        // let out = '';

        // out += `<p>${this._name}</p>`;
        // out += `<p>${this.age}</p>`;
        // out += `<p>${this.passport}</p>`;
        // out += `<p>${this.sex}</p>`;

        // document.querySelector(item).innerHTML = out;

        super.render(item);

        let out = '';

        out += `<p>${this.create}</p>`;
        out += `<p>${this.salary}</p>`;

        document.querySelector(item).innerHTML += out;
    }
}