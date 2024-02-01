//Crea una funzione che controlla due numeri interi. Ritorna "true" se uno dei due è 50 o se la somma dei due è 50.

/*
function numChecker(num1, num2) {
    // Controlla se uno dei due è 50 o se la somma è 50
    if (num1 === 50 || num2 === 50 || (num1 + num2) === 50) {
        return true;
    } else {
        return false;
    }
}

console.log(numChecker(17, 50));
console.log(numChecker(26, 87));
console.log(numChecker(50, 0));
*/

//Crea una funzione che rimuova il carattere a una specifica posizione da una stringa. Passa la stringa e la posizione come parametri e ritorna la stringa modificata.

/*
function removeCar(string, position) {
    // Verifica che la posizione sia valida
    if (position < 0 || position >= string.length) {
        console.log("I can't do this!");
    }

    // Converte la stringa in un array di caratteri
    let array = string.split('');

    // Rimuove il carattere alla posizione specificata
    array.splice(position, 1);

    // Converte l'array di caratteri di nuovo in una stringa
    let newArray = array.join('');

    return newArray;
}

// Esempio di utilizzo della funzione
let toRemove = "HelloMyNameIsFIlippo";
let removePos = 2;

let final = removeCar(toRemove, removePos);
console.log(final); // Restituirà "Hello World!"
*/

//Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. Ritorna "true" se rispecchiano queste condizioni, altrimenti ritorna "false"

/*
function checkNum(num1, num2) {
    // Controlla se i numeri sono compresi tra 40 e 60 o tra 70 e 100
    if ((num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) ||
        (num1 >= 70 && num1 <= 100 && num2 >= 70 && num2 <= 100)) {
        return true;
    } else {
        return false;
    }
}

console.log(checkNum(40, 59)); 
console.log(checkNum(71, 100));  
console.log(checkNum(1, 987));   
console.log(checkNum(40, 70));   
*/


//Crea una funzione che accetti una città come parametro e ritorni il nome stesso se inizia con "Los" o "New" altrimenti ritorna "false"

/*
function cityChecker(city) {
    // Confronta se la città inizia con "Los" o "New" (ignorando maiuscole/minuscole)
    if (city.toLowerCase().startsWith("los") || city.toLowerCase().startsWith("new")) {
        return city;
    } else {
        return false;
    }
}

console.log(cityChecker("Los Angeles"));
console.log(cityChecker("New York"));
console.log(cityChecker("Parma"));  
console.log(cityChecker("Londra"));
*/

//Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array. L'array deve essere passato come parametro.

/*
function arraySum(array) {
    let sum = 0;

    // Itera attraverso gli elementi dell'array e li somma
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}

// Esempi di utilizzo della funzione
let array1 = [1, 56, 3, 554, 5];

console.log(arraySum(array1));
*/

//Crea una funzione che controlli che un array non contenga i numeri 1 o 3. Se non li contiene ritorna "true", altrimenti ritorna "false".

/*
function arrayChecker(array) {
    // Utilizza il metodo includes e il punto esclamativo per negare la loro presenza
    if (!array.includes(1) && !array.includes(3)) {
        return true;
    } else {
        return false;
    }
}

let array1 = [2, 4, 5, 6];

console.log(arrayChecker(array1)); // Restituirà true perché non contiene 1 o 3
*/

//Crea una funzione per trovare il tipo di angolo i cui gradi sono passati come paramentro. Angolo  meno di 90 gradi, ritorna "acuto"; angolo tra 90 e 180 gradi ritorna "ottuso"; angolo di 90 gradi precisi ritorna "retto"; angolo di 180 gradi precisi ritorna "piatto".

/*
function angleChecker(gradi) {
    if (gradi < 90) {
        return "acuto";
    } else if (gradi === 90) {
        return "retto";
    } else if (gradi > 90 && gradi < 180) {
        return "ottuso";
    } else if (gradi === 180) {
        return "piatto";
    } else {
        return "No one more";
    }
}

console.log(angleChecker(45));
console.log(angleChecker(90));
console.log(angleChecker(120));
console.log(angleChecker(180));
console.log(angleChecker(200)); 
*/

//Crea una funzione che crei un acronimo a partire da una frase. Es: "Fabbrica Italiana Automobili Torino" deve ritornare "FIAT"

/*
function createAcronim(sentence) {
    let words = sentence.split(' ');
    let acronim = '';

    for (let i = 0; i < words.length; i++) {
        let iniziale = words[i].charAt(0).toUpperCase();
        acronim += iniziale;
    }

    return acronim;
}


let frase = "Fabbrica Italiana Automobili Torino";
let result = createAcronim(frase);

console.log(result);
*/







