/*
Esercizio 1: Letterali oggetti
Scrivi una funzione che prenda in input un array di 6 oggetti rappresentanti persone (nome, cognome, età) e
restituisca un nuovo array contenente solo le persone con un'età superiore a 30 anni. Stampare le informazioni
di tutte le persone del nuovo array.
*/
{
    let persone = [
        { nome: "Mario", cognome: "Rossi", età: 28 },
        { nome: "Laura", cognome: "Bianchi", età: 35 },
        { nome: "Luca", cognome: "Verdi", età: 42 },
        { nome: "Giulia", cognome: "Neri", età: 19 },
        { nome: "Marco", cognome: "Gialli", età: 31 },
        { nome: "Sara", cognome: "Marroni", età: 45 }
    ];

    for (let i = 0; i < persone.length; i++) {
        let persona = persone[i];

        if (persona.età > 30) {
            console.log("Nome:", persona.nome);
            console.log("Cognome:", persona.cognome);
            console.log("Età:", persona.età);
            console.log('  ');
        }
    }


}
/*
Esercizio 2: Map
Scrivi una funzione chiamata moltiplicaArray che prenda in input un array di numeri e un numero intero, che
funge da "fattore di moltiplicazione". La funzione deve restituire un nuovo array in cui ogni numero dell'array
originale è moltiplicato per il fattore di moltiplicazione dato.
Chiamare la funzione 3 volte, con 3 array e 3 fattori di moltiplicazione differenti per stampare in output i 3
array prodotti.

*/

{
    function moltiplicaArray(array, num) {
        return array.map(numeri => numeri * num);
    }

    // Esempio di utilizzo
    let array1 = [1, 2, 3, 4, 5];
    let fattore1 = 2;
    let risultato1 = moltiplicaArray(array1, fattore1);
    console.log("Array 1 moltiplicato:", risultato1);

    let array2 = [10, 20, 30, 40, 50];
    let fattore2 = 3;
    let risultato2 = moltiplicaArray(array2, fattore2);
    console.log("Array 2 moltiplicato:", risultato2);

    let array3 = [42, 34, 89, 29];
    let fattore3 = 4;
    let risultato3 = moltiplicaArray(array3, fattore3);
    console.log("Array 3 moltiplicato:", risultato3);

}
console.log('    ')
/*
Esercizio 3: Set
Scrivi una funzione chiamata unisciSet che prenda in input due set composti da 5 numeri ciascuno, e restituisca
un nuovo set contenente tutti gli elementi del primo che NON sono presenti nel secondo.
Stampare in output il set risultante.

*/
{
    function unisciSet(set1, set2) {
        let unione = new Set();

        for (let numero of set1) {
            if (set2.has(numero) == false) {
                unione.add(numero);
            }
        }

        return unione;
    }

    let set1 = new Set([1, 2, 3, 4, 5]);
    let set2 = new Set([4, 5, 6, 7, 8]);
    let risultato = unisciSet(set1, set2);
    console.log("Nuovo set:", risultato)
}
console.log('     ')
/*

Esercizio 4: Funzioni
Crea una funzione chiamata salutaPersona che prende in ingresso un oggetto.
Se l'oggetto passato come parametro NON ha una proprietà chiamata "rate", la funzione stampa il messaggio
"nessun rate". In caso contrario, se il valore della proprietà rate è compreso tra 0 e 10, stampa "rate basso", se
è compreso tra 11 e 50 stampa "rate medio", se è compreso tra 51 e 100 stampa "rate alto".
es
salutaPersona({nome: mario rossi}) -> nessun rate
salutaPersona(rate: 95) -> rate alto
*/
{
    function salutaPersona(persona) {
        if (persona.rate == undefined) {
            console.log("nessun rate");
        } else if (persona.rate <= 10) {
            console.log("rate basso");
        } else if (persona.rate <= 50) {
            console.log("rate medio");
        } else if (persona.rate <= 100) {
            console.log("rate alto");
        }
    }


    salutaPersona({ nome: "mario rossi" });
    salutaPersona({ rate: 95 });


}
console.log('    ')
/*
Esercizio 1: Date
Scrivi una funzione chiamata calcolaGiorni che prenda in input due oggetti Date rappresentanti due date
diverse e restituisca il numero di giorni trascorsi tra le due date.
Chiamare la funzione per stampare in output il risultato.
La funzione deve prendere in considerazione questa caratteristica: se la seconda data è un giorno
cronologicamente pari o successivo alla prima data, si procede con la normale esecuzione sopra elencata.
Se la seconda data è un giorno cronologicamente precedente alla prima data, viene prodotto manualmente un
errore che blocca l'applicazione.
*/
{
    function calcolaGiorni(data1, data2) {
        if (data2 < data1) {
            throw new Error("La seconda data è precedente alla prima data.");
        }

        const giornoInMillisecondi = 24 * 60 * 60 * 1000
        const diffTime = data2.getTime() - data1.getTime();
        const diffGiorni = (diffTime / giornoInMillisecondi);

        return diffGiorni;
    }


    const data1 = new Date("2023-06-09");
    const data2 = new Date("2023-06-12");

    try {
        const giorniTrascorsi = calcolaGiorni(data1, data2);
        console.log("Giorni trascorsi:", giorniTrascorsi);
    } catch (error) {
        console.log("Errore:", error.message);
    }


}
console.log('   ')
/*
Esercizio 2: Letterali oggetti
Scrivi una funzione confrontaOggetti che prenda in input due oggetti con caratteristiche (proprietà e valori)
scelti a piacere e restituisca true se hanno le stesse proprietà e se tutti i valori delle loro proprietà
corrispondenti sono uguali, altrimenti false.
es
o1 = {nome: mario, cognome = rossi}
o2 = {nome: mario, cognome = rossi}
confrontaOggetti(o1, o2) da true
o1 = {nome: mario, cognome = rossi}
o2 = {x: 10, y = 20}
confrontaOggetti(o1, o2) da false

*/
{
    function confrontaOggetti(o1, o2) {
        const oggetto1 = Object.keys(o1);
        const oggetto2 = Object.keys(o2);

        if (oggetto1.length !== oggetto2.length) {
            return false;
        }

        for (let i = 0; i < oggetto1.length; i++) {
            const oggetto = oggetto1[i];
            if (o1[oggetto] !== o2[oggetto]) {
                return false;
            }
        }

        return true;
    }


    const o1 = { nome: "mario", cognome: "rossi" };
    const o2 = { nome: "mario", cognome: "rossi" };
    console.log(confrontaOggetti(o1, o2));

    const o3 = { nome: "mario", cognome: "rossi" };
    const o4 = { x: 10, y: 20 };
    console.log(confrontaOggetti(o3, o4));
}
console.log('    ')
/*

Esercizio 3: Funzioni come parametri e metodo map
Scrivi una funzione chiamata mappaNumeri, che prende come primo parametro un array di numeri, e come
secondo parametro una funzione che internamente a mappaNumeri sarà utilizzata come parametro per il
metodo map, chiamato per creare un nuovo array con il criterio utilizzato dalla funzione passata. Questo array
verrà stampato internamente a mappaNumeri.
Chiamare la funzione mappaNumeri 2 volte, sia per stampare il doppio dei numeri dell'array passato come
primo parametro, sia per stampare i suoi numeri aumentati di 10.
es
mappaNumeri( [10, 20, 30], ?fn? ) stampa 20 40 60
mappaNumeri( [10, 20, 30], ?fn? ) stampa 20 30 40
dove ?fn? saranno le apposite funzioni passate come parametro create da voi
*/
{
    function mappaNumeri(array, fn) {
        const nuovoArray = array.map(fn);
        console.log(nuovoArray);
    }


    function raddoppia(numero) {
        return numero * 2;
    }


    function aumentaDi10(numero) {
        return numero + 10;
    }


    mappaNumeri([10, 20, 30], raddoppia);
    mappaNumeri([10, 20, 30], aumentaDi10);

}

console.log('    ')
/*
Esercizio 1
Dato il seguente JSON:
[
{"name": "aladddin", "rate": [5,6,7], "birthdate": "1990-10-10"},
{"name": "jasmine", "rate": [8,9,9], "birthdate": "1994-09-09"},
{"name": "abu", "rate": [2,2,3], "birthdate": "1993-10-20"}
]
convertirlo in una controparte Javascript da utilizzare nel programma.
Creare una funzione chiamata dammiPersonaggio, che prende in ingresso come primo parametro un array di
personaggi come quello prodotto dal JSON.
Come secondo parametro, prende una stringa.
Se la stringa è "cicla", la funzione stampa le informazioni di tutti i personaggi.
Se la stringa è "giovane", la funzione stampa le informazioni del personaggio più giovane.
Se la stringa è "migliore", la funzione stampa le informazioni del personaggio con la media rate più alta.
Se la stringa è "peggiore", la funzione stampa le informazioni del personaggio con la media rate più bassa.
Se il secondo parametro non è una stringa, generare un errore manualmente.
Chiamare la funzione dammiPersonaggio con tutti i test case, impedendo che l'applicazione si blocchi se non
viene passata una stringa (hint: usare un try/catch).
Quando si stampano le informazioni di un personaggio, non bisogna stampare la sua data di nascita, ma la sua
età (es 30 anni).
Solo per i rate tenere in considerazione eventuali "parità" e stampare tutti i personaggi con il rate migliore o
peggiore in caso di concomitanze
*/

const personaggi = [
    { "name": "aladddin", "rate": [5, 6, 7], "birthdate": "1990-10-10" },
    { "name": "jasmine", "rate": [8, 9, 9], "birthdate": "1994-09-09" },
    { "name": "abu", "rate": [2, 2, 3], "birthdate": "1993-10-20" }
];


function calcolaEta(annoNascita) {
    const annoCorrente = new Date().getFullYear();
    return annoCorrente - annoNascita;
}


function dammiPersonaggio(personaggi, stringa) {
    if (typeof stringa !== 'string') {
        throw new Error('Il secondo parametro deve essere una stringa');
    }

    if (stringa === 'cicla') {
        personaggi.forEach(personaggio => {
            const eta = calcolaEta(new Date(personaggio.birthdate).getFullYear());
            console.log(`Nome: ${personaggio.name}, Età: ${eta} anni`);
        });
        return;
    }

    if (stringa === 'giovane') {
        let personaggioGiovane = personaggi[0];
        personaggi.forEach(personaggio => {
            if (new Date(personaggio.birthdate) > new Date(personaggioGiovane.birthdate)) {
                personaggioGiovane = personaggio;
            }
        });
        const etàGiovane = calcolaEta(new Date(personaggioGiovane.birthdate).getFullYear());
        console.log(`Personaggio più giovane: ${personaggioGiovane.name}, Età: ${etàGiovane} anni`);
        return;
    }

   //mancano migliore e peggiore
    

}

    try {
        dammiPersonaggio(personaggi, 'cicla');
        dammiPersonaggio(personaggi, 'giovane');
       ;

    } catch (error) {
        console.log(error);
    }

