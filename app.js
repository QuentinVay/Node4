require('dotenv').config()
const name = process.env.NAME || 'Nom par défaut';
const city = process.env.CITY || 'Ville par défaut';
const language = process.env.LANGUAGE || 'Langage par défaut';

console.log(`I am ${name}, wilder in ${city}, and I love ${language}`);