/*
PREREQUISITI: INSTALLARE NODE.JS
*/

/*
Per usare il prompt:
npm install prompt-sync
*/


/*
function capitalizeFirstLetter(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const prompt = require('prompt-sync')();
var str = prompt('Enter a string: ');
console.log('Hai inserito prima' + str);
str = capitalizeFirstLetter(str);
console.log('Hai inserito dopo ' + str);
*/


/*
const prompt = require('prompt-sync')();

//Inserisci primo numero e salva in sPrimoNum
var sPrimoNum = prompt("Inserisci primo numero: ");
var iPrimoNum = parseInt(sPrimoNum);

//Inserisci secondo numero
var sSecondoNum = prompt("Inserisci secondo numero: ");
var iSecondoNum = parseInt(sSecondoNum);

//Fai la somma
var iSomma = iPrimoNum + iSecondoNum;

//Stampa a schermo la somma
console.log("La somma vale " + iSomma);
*/

function VerificaNumero(sNum)
{
    for( i=0;i<sNum.length;i++) 
    {
        if((sNum.charAt(i) < '0') || (sNum.charAt(i)>'9'))
            return false;
    } 
    return true; 
}
function parseIntMy(sNum)
{
    bEsito = VerificaNumero(sNum);
    if(bEsito==true)
        return parseInt(sNum);
    var sNum1 = "0";
    for(a=0;a<3;a++)
    {
        sNum1 = prompt("Attenzione, numero errato, riprova ");
        bEsito = VerificaNumero(sNum1);
        if(bEsito==true)
            return parseInt(sNum1); 
    }

    return null;
}

const prompt = require('prompt-sync')();
var sPrimoNum = prompt("Inserisci primo numero: ");
var iNum = parseIntMy(sPrimoNum);
if(iNum != null)
    console.log("Hai inserito " + iNum);
else
    console.log("Non sei riuscito ad inserire un numero");

/*
var sPrimoNum = prompt("Inserisci primo numero: ");
var bEsito = VerificaNumero(sPrimoNum);
if(bEsito==true)
    console.log("Mi ha passato un numero")
else
    console.log("Non mi hai passato un numero");

process.exit(0);
*/
