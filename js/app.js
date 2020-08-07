const mess = "Hello from app.js";
console.log(mess);

// let totalCredit = document.querySelector("#totalCredit").innerText.split(" ");
// console.log(Number(totalCredit[0]));
//....

let solde


// Premier achat

let firstLabel = 'Achat PS4';
let firstCost = 499.99;
let firstPercent = 32.89;

let firstOperation = [
  firstLabel, //index 0
  firstCost, //index 1
  firstPercent //index 2
];

// Deuxième achat

let secondLabel = 'Achat TV';
let secondCost = 599;
let secondPercent = 39.40;

let secondOperation = [
  secondLabel,
  secondCost,
  secondPercent
];

let debitArray = [firstOperation, secondOperation];

let firstLabelCredit = 'Salaire';
let firstCostCredit = 1520;
let firstCreditArray=[firstLabelCredit , firstCostCredit ]

let creditArray = [firstCreditArray];

//On instancie la variable totalDebit pour pouvoir l'utiliser dans la boucle forEach
let totalDebit = 0;

//  Sommes des index 1 de tous les tableaux de debitArray (sommes des coûts)
debitArray.forEach(function(price){
 totalDebit += (price[1]);
});
console.log(totalDebit);

let totalCredit=0;

creditArray.forEach(function(price){
  totalCredit += (price[1]);
 });
 console.log(totalCredit);


let btn=document.getElementById("click");// cibler un element
btn.addEventListener('click',(event)=>{
  event.preventDefault();
  let incrementation = [
  
    intitule.value,
    Number(montant.value)
  ];
  console.log(incrementation);
  let newElement=document.createElement('li');
  let elementUlDebit=document.getElementById("listeDebit");
  let elementUlCredit=document.getElementById("listeCredit");
  let select=document.getElementById('operation');
  let soldefinal=document.getElementById("total");
  let percentTotalDebit=document.getElementById("totalDebitPercent");
  if(select.value=='+'){

    elementUlCredit.appendChild(newElement);
    newElement.innerHTML=`<span class="intitule">${incrementation[0]}</span><span class="montant txt-color-gazoil">${incrementation[1]} €</span>`;
    totalCredit=totalCredit+ incrementation[1];
    let sommeCredit=document.getElementById("totalCredit");
    sommeCredit.innerHTML=`${totalCredit} €` ;
    solde=totalCredit-totalDebit;
  }else{
    elementUlDebit.appendChild(newElement);
    newElement.innerHTML=`<span class="intitule">${incrementation[0]}</span><span class="montant txt-color-red">${incrementation[1]} €</span>
    <span class="percent txt-color-red">${((incrementation[1] * 100) / totalCredit).toFixed(2)} % </span>`;
    totalDebit=totalDebit+ incrementation[1];
    let sommeDebit=document.getElementById("totalDebit");
    sommeDebit.innerHTML=`${totalDebit}`;
    solde=totalCredit-totalDebit;
    if (solde >= 0) {
      operator = "+";
    } else {
      document.getElementById("total").style.color = "red"; // on affiche le solde en couleur rouge
    }
  
   
  }
  let percentFinal= ((totalDebit * 100) / totalCredit).toFixed(2)  ;
 percentTotalDebit.innerHTML=`${percentFinal} %`;
  soldefinal.innerHTML=solde;
console.log(select.value);
});// ecouter un evenement




 