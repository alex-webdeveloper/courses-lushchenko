class Header {
    constructor(h1, h2, slogan, img, contacts) {
        this.h1 = h1;
        this.h2 = h2;
        this.slogan = slogan;
        this.src = img;
        this.contacts = contacts;
    }
    render(elem) {
        let h1 = document.createElement("h1");
        h1.innerHTML = this.h1;
        let h2 = document.createElement("h2");
        h2.innerHTML = this.h2;
        let p = document.createElement('p');
        let strong = document.createElement('strong');
        strong.innerHTML = this.slogan;
        p.append(strong);
        let img = document.createElement("img");
        img.src = this.src;
        img.style.width = '700px';
        let ul = document.createElement("ul");

        for (let key in this.contacts) {
            let li = document.createElement('li');
            li.innerHTML = this.contacts[key];
            ul.append(li);
        }

        document.getElementById(elem).append(h1, h2, img, p, ul);
    }
}


