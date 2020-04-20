
// boolean
let muted: boolean = true;
muted = false;

// numeros
let age = 6
let numerador: number = 42;
let denominador: number = age;
let resultado = numerador / denominador;

// Strings
let nombre: string = 'John';
let saludo = `Me llamo ${nombre}`;

// Arreglos
let people: string[] = [];
people = ['john', 'nicole'];

let peopleAndNumber: Array<string | number>
peopleAndNumber = ['1', 1, 2];

// Enum
enum Color {
  Rojo = "Rojo", Verde = "Verde", Azul = "Azul"
}

let colorFavorito: Color = Color.Azul;
console.log(`Mi color favorito es ${colorFavorito}`)

// Any
let comodin: any = "Joker";
comodin = { type: 'Wildcard' };

// Object
let someObject: object = { type: 'john' }

// function
function add(a: number, b: number): number {
  return a + b
}

const sum = add(4, 6)

// interfaces
interface Reactangulo {
  ancho: number
  alto: number
}

let react: Reactangulo = {
  ancho: 4,
  alto: 2
}