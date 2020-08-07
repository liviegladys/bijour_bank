
let totalCredit=1520;
let debit1=499.99;
let debit2=599;
let totalDebit=0;
let totalBalance=totalCredit-totalDebit;

let libelDebit1="achat PS4";
let libelDebit2="achat TV";
let percentDebit1=(100*debit1)/totalCredit;
percentDebit1=percentDebit1.toFixed(2);
let percentDebit2=(100*debit2)/totalCredit;
percentDebit2=percentDebit2.toFixed(2);
let pourcentageDebit=(100*totalDebit)/totalCredit;
pourcentageDebit = pourcentageDebit.toFixed(2);

let libelCredit1="salaire";
let credit1=1520;

let opDebit1 = [
    libelDebit1,
    debit1,
    percentDebit1
];

let opDebit2 = [
    libelDebit2,
    debit2,
    percentDebit2
];
// let opTest= ["Jésus",666,"Jennifer"];

let arrayDebit = [
    opDebit1,
    opDebit2,
    // opTest
];

let opCredit = [
    libelCredit1,
    credit1,
];


console.log(opCredit[0]);

arrayDebit.forEach(function(bisous){
    totalDebit+=(bisous[1]);
    

});

console.log(totalDebit);


// console.table(opCredit1);
console.table(arrayDebit);
// arrayDebit[0][0];

let entree

