//4. Variabler, epostadresser
//Skriv et program som bruker variablene under (erstatt variabelnavnene med mer passende navn) til å skrive forslag til e-post adresser til konsoll. Be gjerne om input fra brukeren.

//let en = fornavn
//let to = etternavn
//let tre = domene

let Navn = prompt ("Skriv inn navnet ditt:")
let EtterNavn = prompt ("Skriv inn etternavnet ditt:")
let domene = prompt ("Skriv inn gmail:")

let epost = (Navn + "." + EtterNavn + "@" + domene);

console.log("Forslag til e-postadresse:");
console.log(epost);
