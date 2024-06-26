esercizio di oggi: calcolo del prezzo del biglietto del treno
cartella/repo js-biglietto-treno
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

Dichiaro una variabile per il numero di chilometri che vuole percorrere il passeggero
Assegno alla variabile il numero di chilometri che vuole percorrere il passeggero recuperato tramite la prompt
Dichiaro una variabile per l'età del passeggero
Assegno alla variabile l'età del passeggero recuperato tramite la prompt
Confronto tramite if e else if l'età del passeggero per capire se e quale sconto applicargli
Assegno la variabile prezzo
Dichiaro la variabile prezzo tramite il calcolo dei kilometri moltiplicato per 0,21 centesimi a km e applico lo sconto se è rientra in una delle due casistiche 
Scrivo all'interno del template literal il contenuto della variabile prezzo
Assegno questa variabile al docoment.getelementarybyid.innerhtml

