//---[1]------[1]------[1]------[1]------[1]------[1]------[1]------[1]------[1]---//
const testo = `Sto imparando JavaScript`; //stringa

document.getElementById('maiuscola').innerHTML = testo.toUpperCase(); // uppercase
document.getElementById('minuscola').innerHTML = testo.toLowerCase(); // lowercase
document.getElementById('strArray').innerHTML = testo.split(""); // Split
document.getElementById('estraiCaratteri').innerHTML = `${testo[2]}${testo[1]}${testo[14].toUpperCase()}${testo[0].toUpperCase()}`;// array[n]
document.getElementById('concatena').innerHTML = testo.concat(" JS"); // Concat
document.getElementById('estraiStringa').innerHTML = testo.slice(5, 9); // Slice

//---[2]------[2]------[2]------[2]------[2]------[2]------[2]------[2]------[2]---//
const umani = ['Giovanni','Carla','Piero','Mirtilla'] //arrayList

document.getElementById('array').innerHTML = umani.toString(); //toString
document.getElementById('lunghezza').innerHTML = umani.length; //length
document.getElementById('elemento').innerHTML = umani[2]; //array[n]
document.getElementById('ultimo').innerHTML = umani[3]; //array[n]

umani.splice(2, 1, 'Massimo'); 
document.getElementById('modificato').innerHTML = umani; //splice

//---[3]------[3]------[3]------[3]------[3]------[3]------[3]------[3]------[3]---//
const anno = 2022;

calcoloEta = (annoNascita) => {
    let miaEta = anno - annoNascita;
    return miaEta;
}
document.getElementById('eta1').innerHTML += `${calcoloEta(2001)} anni`;
document.getElementById('eta2').innerHTML += `${calcoloEta(1990)} anni`;
document.getElementById('eta3').innerHTML += `${calcoloEta(1987)} anni`;
document.getElementById('eta4').innerHTML += `${calcoloEta(2018)} anni`;
document.getElementById('eta5').innerHTML += `${calcoloEta(2010)} anni`;
//Creato un array con l'eta calcolata e convertita in stringa
const etaTot = [calcoloEta(2001), calcoloEta(1990), calcoloEta(1987), calcoloEta(2018), calcoloEta(2010)];
document.getElementById('arrayEta').innerHTML += etaTot.toString();

//---[4]------[4]------[4]------[4]------[4]------[4]------[4]------[4]------[4]---//
const animali = ['coniglio','cane','gatto','criceto'];

document.getElementById('intero').innerHTML = animali; //arrayList

var sonoInutile = animali.push('leone');
document.getElementById('aggiunto').innerHTML = animali; // push

var sonoInutile = animali.pop('leone')
document.getElementById('estratto').innerHTML = animali; // pop

document.getElementById('verifica1').innerHTML = animali.includes('criceto'); //true
document.getElementById('verifica2').innerHTML = animali.includes('Qualora ti sentissi inutile e depresso, ricordati che un giorno sei stato lo spermatozoo più veloce di tutti.');
//false