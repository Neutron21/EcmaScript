// Pârametros
// Antes
function newFunction (name, age, country) {
    var name = name || 'Ivan';
    var age = age || 33;
    var country = country || 'MX';

    console.log(name, age, country);
}
// ES6
function newFunction2 (name = 'Ivan', age = '33', country = 'MX') {
    console.log(name, age, country);
}
newFunction2();
newFunction2('Ricardo', '23', 'CO');

// Templete Literals
// Antes
let hello = 'Hello';
let world = 'World';
let epic =  hello + ' ' + world;
console.log(epic);
// ES6
let epic2 = `${hello} ${world}`;
console.log(epic);

// Epic frase
// Antes
let lorem = "Esta es una frase epica \nesta es la continuacion de la frase epica";
// ES6
let lorem2 = `Segunda frase epica
Continacuion de segunda frase`;
console.log(lorem);
console.log(lorem2);

// Destructuracion de elementos
let person = {
    'name': 'Oscar',
    'age': 32,
    'country': 'CDMX'
};
// Antes
console.log(person.name, person.age);
// ES6
let {name, age, country } = person;
console.log(name, age, country);