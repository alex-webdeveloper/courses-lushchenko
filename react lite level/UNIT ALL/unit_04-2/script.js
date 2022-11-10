const man = new Man('Aleksey', 30, '4400 332789', 'man');
console.log(man);
man.render('.out-1');

const employer = new Employer('Oleg', 44, '3400 399211', 'man', '27.03.2021', '1000$');
console.log(employer);
employer.render('.out-2');
console.log(employer.name);
employer.name = 'Vasya  ';
console.log(employer);
console.log(employer.name);
employer.name = 55;
console.log(employer.name);