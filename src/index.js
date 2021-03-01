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

// Spread Operator (Operador de propagacion)
// ES&
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Jessica', 'Camila'];
let education = ['David', ...team1, ...team2];
console.log(education);

// Const, Let y Var
// ES6
{
    var globalVar = 'Global Var';
}
{
    let globalLet = 'Global Let';
    console.log(globalLet);
}
console.log(globalVar);
console.log(globalLet); // Undefined

const a = 'A';
console.log(a);
a = 'B'; // Inmutable
console.log(a); 

// Parametros en Objetos
// Antes
let nombre = 'Ivan';
let edad = 33;

let obj = {nombre: nombre, edad: edad};
// ES6
let obj2 = {nombre, edad}
console.log(obj);
console.log(obj2);

// Arrow Functions
const names = [
    {nombre: 'Juan', edad: 23},
    {nombre: 'Pedro', edad: 25},
];
// Antes
let listNames = names.map(function (item) {
    console.log(item.nombre);
});
// ES6
let listNames2 = names.map(item => console.log(item.edad)); 
let listNames3 = (name, age, country) => {
    // ... Bloque de codigo
};
let listNames4 = country => {
    // ... Bloque de codigo
};

const square =  num => num * num;
console.log(square(6));

// Promesas y asincronismo
// ES6
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(!true){
            resolve("That's OK")
        } else {
            reject('Error!')
        }
    });
}
helloPromise()
    .then(res => console.log(res))
    .then(() => console.log('Hola'))
    .catch(err => console.log(err));