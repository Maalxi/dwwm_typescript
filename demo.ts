// Première partie

// Système de constante et variable
// Différent types

// const firstName: string = 'Kévin';
// const lastName: string = 'Wolff'; 

const age: number = 30

const isHeWakeUp: boolean = false;

// Tableau
const learners: any[] = ['Kevin', 30, true]

// Objet
const learner: any = {
    name: 'Kevin',
    age: 30,
    wakeUp: false
}


// Exercice # 4

const country: string = "France";

function logCountryName(countryName: string) {
  console.log(`Le pays est ${countryName}`);
}

logCountryName(country);


// Exercice # 5

const firstName: string = "Samuel";
const lastName: string = "DA CONCEICAO";

function nomcomplet () {
  console.log(firstName + " " + lastName);
  console.log(`${firstName} ${lastName}`);
}

nomcomplet ();




// Deuxième partie

// Exercice # 1

function printAddress(address: string, zipCode: number): void {
  console.log(`Address: ${address}`);
  console.log(`Zip Code: ${zipCode}`);
}

const address: string = "235 route de myans";
const zipCode: number = 12345;
const addressFull: string = `${address}, ${zipCode}`;

console.log(address, zipCode);
console.log(addressFull);


// Exercice # 2

function displayFavoriteCountries() {
  const favoriteCountries: string[] = ["France", "Japan", "Italy", "Australia", "Canada"];
  
  for (const country of favoriteCountries) {
    console.log(country);
  }
}

displayFavoriteCountries();


// Exercice # 3

function splitString(str: string): string[] {
  const result: string[] = [];

  for (let i = 0; i < str.length; i++) {
    result.push(str[i]);
  }

  return result;
}

// const myString = "developpement";
// const myStringArray = splitString(myString);
// console.log(myStringArray);


// Exercice # 4

function joinString(arr: string[]): string {
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return result;
}

const myStringArray: string[] = ["d", "e", "v", "e", "l", "o", "p", "p", "e", "m", "e", "n", "t"];
const myString = joinString(myStringArray);
console.log(myString);




// Troisième partie

// Exercice # 1

const data: string[] = ['Théo', 'Martin', 'Lucas', 'Antoine', 'Etienne'];

for (let i = 0; i < data.length; i++) {
  if (data[i].length <= 5) {
    console.log(data[i]);
  }
}


// Exercice # 2

const countries: string[] = ['France', 'Allemagne', 'Italie', 'Suisse', 'Belgique'];
let sentence: string = '';

for (let i = 0; i < countries.length; i++) {
  sentence += countries[i];
  if (i !== countries.length - 1) {
    sentence += ', ';
  }
}

console.log(sentence);


// Exercice # 3

const numbers: number[] = [123, 999, 340, 12390];
let results: number[] = [];

for (let i = 0; i < numbers.length; i++) {
  results.push(numbers[i] * 180);
}

console.log(results);


// Exercice # 4

interface personne {
  name: string,
  surname: string,
  age: number
}

const person: personne = {
  name: 'Marchal',
  surname: 'Mickeal',
  age: 19
};

if (person.age >= 18) {
  console.log(`${person.surname} est majeur`);
}


// Exercice # 5

const person : personne = {
  name: 'Dupont',
  surname: 'Jean',
  age: 42
};

console.log(`Bonjour, mon nom est ${person.name} ${person.surname}, j'ai ${person.age} ans.`);


// Exercice # 6

const persons: personne[] = [
  { name: 'Dupont', surname: 'Jean', age: 42 },
  { name: 'Martin', surname: 'Lucie', age: 28 },
  { name: 'Girard', surname: 'Pierre', age: 35 },
  { name: 'Lefevre', surname: 'Sophie', age: 20 },
  { name: 'Robert', surname: 'Julien', age: 50 }
];

for (let i = 0; i < persons.length; i++) {
  console.log(`Bonjour, mon nom est ${persons[i].name} ${persons[i].surname}, j'ai ${persons[i].age} ans.`);
}




// Quatrième partie

// Exercice # 1

// Interface pour définir le type des objets du tableau students
interface Etudiant {
  nom: string;
  age: number;
  majeur: boolean;
}

// Tableau contenant les objets étudiants
const etudiants: Etudiant[] = [
{
    nom: 'Paul',
    age: 19,
    majeur: true
},
{
    nom: 'Julie',
    age: 16,
    majeur: false
},
{
    nom: 'Jacques',
    age: 49,
    majeur: true
},
{
    nom: 'Marie',
    age: 12,
    majeur: false
}
];

// Filtrer les étudiants majeurs dans un nouveau tableau
const etudiantsMajeurs: Etudiant[] = etudiants.filter((etudiant: Etudiant) => etudiant.majeur);

// Filtrer les étudiants non-majeurs dans un nouveau tableau
const etudiantsMineurs: Etudiant[] = etudiants.filter((etudiant: Etudiant) => !etudiant.majeur);

// Calculer la moyenne d'âge de tous les étudiants
const ageMoyen: number = etudiants.reduce((sommeAge: number, etudiant: Etudiant) => sommeAge + etudiant.age, 0) / etudiants.length;

// Afficher les tableaux d'étudiants et l'âge moyen
console.log("Liste de tous les étudiants : ", etudiants);
console.log("Liste des étudiants majeurs : ", etudiantsMajeurs);
console.log("Liste des étudiants mineurs : ", etudiantsMineurs);
console.log("Âge moyen de tous les étudiants : ", ageMoyen);


// Exercice # 2

interface Fruit {
  name: string;
  expirationInDays: number;
}

const fruits: Fruit[] = [
  {
    name: 'Pomme',
    expirationInDays: 1
  },
  {
    name: 'Poire',
    expirationInDays: 16
  },
  {
    name: 'Citron',
    expirationInDays: 5
  },
  {
    name: 'Tomate',
    expirationInDays: 4
  }
];

const expiringSoonFruits: Fruit[] = fruits.filter(fruit => fruit.expirationInDays < 2);
const expiringWithinAWeekFruits: Fruit[] = fruits.filter(fruit => fruit.expirationInDays >= 2 && fruit.expirationInDays <= 7);
const expiringInMoreThanAWeekFruits: Fruit[] = fruits.filter(fruit => fruit.expirationInDays > 7);

console.log("Fruits avec une date de péremption de moins de deux jours :", expiringSoonFruits);
console.log("Fruits avec une date de péremption entre trois jours et une semaine :", expiringWithinAWeekFruits);
console.log("Fruits avec une date de péremption de plus d'une semaine :", expiringInMoreThanAWeekFruits);


