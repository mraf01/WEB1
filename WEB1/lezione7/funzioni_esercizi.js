/*
Esercizio 1 

Scrivere un programma che dichiari due variabili A e B e le inizializzi con valori di tipo diverso (ad esempio, un numero e una stringa). 
Utilizzare l'operatore typeof per visualizzare il tipo di dato di ciascuna variabile.
*/

console.log("Esercizio 1:");
var A;
var B;
A = 3;
B = "Buongiorno a tutti";
console.log("Il tipo della var A e' " + typeof(A) + "\n");
console.log("Il tipo della var B e' " + typeof(B) + "\n");


/*
Esercizio 2

Scrivere un programma che dichiari una variabile A e la inizializzi con un valore di tipo numero. 
Utilizzare l'operatore typeof per visualizzare il tipo di dato della variabile. 
Quindi, riassegnare un valore di tipo stringa alla variabile A e visualizzare nuovamente il tipo di dato.
*/

console.log("\nEsercizio 2:");
var A = 3;
console.log("Il tipo della variabile è " + typeof(A) + "\n");
A = "ciao";
console.log("Il tipo della variabile è " + typeof(A) + "\n");


/*
Esercizio 3

Scrivere un programma che dichiari due variabili iPosizione e sMiaStringa. 
Inizializzare sMiaStringa con una stringa e utilizzare il metodo indexOf per cercare la posizione della lettera "f" all'interno della stringa. 
Se la lettera "f" non è presente nei primi 4 caratteri della stringa, visualizzare un messaggio appropriato.
*/

console.log("\nEsercizio 3:");
var iPosizione;
var sMiaStringa;
sMiaStringa = "buonasera"
iPosizione = sMiaStringa.indexOf("f");
if((iPosizione == -1) || (iPosizione > 3))
    console.log("La f non c'e' nei primi 4 caratteri")
else
    console.log("La f c'e' nei primi 4 caratteri");


/*
Esercizio 4

Scrivere una funzione terminaConLettera che accetti due parametri: una stringa sStringa e una stringa sTermine. 
La funzione deve restituire 1 se la stringa sStringa termina con la stringa sTermine, altrimenti deve restituire 0.

Esempio: 
Utilizzare la funzione per verificare se la stringa "paperino" termina con la stringa "ino".
*/

console.log("\nEsercizio 4:");
function terminaConLettera(sStringa, sTermine) {
    len = sStringa.length;
    len_termine = sTermine.length;

    if (len_termine > len) {
        return 0;
    }

    iPosizione = sStringa.indexOf(sTermine, len - len_termine);

    if (iPosizione >= 0) {
        return 1;
    } else {
        return 0;
    }
}

bRet = terminaConLettera("paperino", "ino");
if (bRet === 1) {
    console.log("paperino termina con 'ino'");
} else {
    console.log("paperino NON termina con 'ino'");
}


/*Esercizio 5

Scrivere una funzione Macchinetta che accetti due parametri: un numero iSoldi e una stringa sCodiceProdotto. 
La funzione deve restituire un oggetto con due proprietà: prodotto e resto. 
Se il codice prodotto è un numero e i soldi sono sufficienti (almeno 1), 
la funzione deve restituire un oggetto con prodotto e resto pari ai soldi rimanenti. 
Altrimenti, la funzione deve restituire un oggetto con prodotto pari a nulla e resto pari ai soldi originali.
*/

console.log("\nEsercizio 5:");
function Macchinetta(iSoldi, sCodiceProdotto) {
    if (sCodiceProdotto === "31") {
        if (iSoldi < 1) {
            return { prodotto: null, resto: iSoldi };
        }

        if (iSoldi === 1) {
            return { prodotto: "CocaCola", resto: 0 };
        }

        else {
            return { prodotto: "CocaCola", resto: iSoldi - 1 };
        }
    }
}

risultato = Macchinetta(2, "31");
console.log("Prodotto:", risultato.prodotto);
console.log("Resto:", risultato.resto);