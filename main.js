/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

// 1 - creare la funzione
// 2 - crearte un for in cui la parola letta al dritto sia UGUALE alla stessa letta al rovescio 
// creare una variabile da stampare nel caso sia corretta (?)


//SENZA FUNZIONE

const palindroma = 'ossesso'

if (palindroma === palindroma.split('').reverse().join('')) {
    console.log('it is pali');
 } else {
    console.log('it is not pali');
    
 }
    

 // CON FUNZIONE

 function isPali(word) {

        if (word === word.split('').reverse().join('')) {
        return 'it is pali';

    } else {

        return'it is not pali';
        
    }
 }

 console.log(isPali(palindroma));



 /* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/


const pari = 4;

function generaNum () {
    const random = Math.floor(Math.random() * 5 + 1);
    return random
}

const somma = (pari + generaNum)


function isItEven (somma) {
    if (somma % 2 === 0){
        return 'pari';
    } else {
        return 'dispari';
        
    }
}


console.log(isItEven(somma));




/*Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

Domande da  farsi quando si crea una funzione:
Come dovrebbe chiamarsi?
Ho bisogno di parametri?
Devo restituire un valore?
Se sì, di che tipo?*/ 