/*function addition(){
  
       do{
         var nombreUn = Number(prompt("saisisez le premier nombre : "));
       } while((isNaN(nombreUn)));
         
      do{
         var nombreDeux = Number(prompt("saisisez le deuxieme nombre : ")) 
      } while((isNaN(nombreDeux)))
   
      return nombreUn + nombreDeux
    
}

function multiplication(){

   do{
      var nombreUn = Number(prompt("saisisez le premier nombre : "));
    } while(isNaN(nombreUn));
    do{
        var nombreDeux = Number(prompt("saisisez le deuxieme nombre : "));
    } while((isNaN(nombreDeux)));
    var resultat =(nombreUn * nombreDeux)
             return resultat;
}

function soustraction(){

   do{
      var nombreUn = Number(prompt("saisisez le premier nombre : "));
    } while(isNaN(nombreUn));
    do{
        var nombreDeux = Number(prompt("saisisez le deuxieme nombre : "));
    } while((isNaN(nombreDeux)));
    
           return (nombreUn - nombreDeux)
}
function division(){
   do{
      var nombreUn = Number(prompt("saisisez le premier nombre : "));

    } while(isNaN(nombreUn));
    do{
      var nombreDeux = Number(prompt("saisisez le deuxieme nombre : "));
  } while((isNaN( nombreDeux )));
   try{
     
       if (nombreDeux === 0){
          throw new Error("impossible de diviser par zero");
       } else{
         let resultat = (nombreUn/nombreDeux);

         return resultat;
       }
   } catch(error){
      alert(error);
   } 
}

function pricipal(souhait){
  switch(souhait){
     case '1':
      var resultat = addition();
      break;
   case '2':
      var resultat = multiplication();
      break;
   case '3':
      var resultat = soustraction();
      break;
   case '4':
      var resultat = division();
      break;
   default:
      alert("le nombre saisit n est pas defini parmi les choix...");
      pricipal(prompt("que souhaitez vous faire :\n\n 1 -Addition,\n 2-multiplication,\n 3 -soustraction,\n 4 -diffision"));

  
  }

  alert("le resultat est : "+ resultat);
  if(confirm("souhaitez-vous refaire un autre calcule ? ")){
   pricipal(prompt("que souhaitez vous faire :"
   +"\n\n 1 -Addition,\n 2-multiplication,\n 3 -soustraction,\n 4 -diffision"));

  }
}

do{

  var souhait = prompt("que souhaitez vous faire :\n\n 1 -Addition,\n 2-multiplication,\n 3 -soustraction,\n 4 -diffision")

} while(pricipal(souhait));*/


let monTableauAssociatif = {
                              "prenom" :"Mark",
                              "non"    : "zuckerberg",
                              "post"   : "PDG Facebook"
}

function concatenationAuto(objetLireraire){

      if(objetLireraire.constructor == Object){
     var prenomConcatene = "";
     for (const Prenon in monTableauAssociatif){
 
   prenomConcatene +=  " "+monTableauAssociatif[Prenon];
   
}
} else{
       return " object is not literal"
}
return prenomConcatene;
}
//console.log(monTableauAssociatif.constructor == Object );

//let maFonction =() => console.log("test");
//maFonction();








/*
function Addition(x,y) {

    return x + y;
}
function soustraction(x,y) {

   return x - y;
}
function Multiplication(x,y) {
   return x*y;
}
function Division(x,y) {

   
      if(y === 0) {
      throw new Error ("imposible la division par zero");
      } else{
            return x/y
      }
   
}
function principal (){

do{
   var souhait = prompt("que souhaitez vous faire ?:\n\n 1-Addition \n 2-soustraction\n 3-multipliation \n 4-division\n");

}while(souhait != 1 && souhait != 2 && souhait !=3 && souhait != 4);

do{
   var nombreUn = Number(prompt("saisisez le premier nombre: "));
var nombreDeux = Number(prompt("saissez le deuxiome nombre "));
} while(isNaN(nombreUn) || isNaN(nombreDeux));
try{
switch(souhait){
   
   case "1":
   var  result =Addition(nombreUn,nombreDeux);
   break;
   case "2" :
   var   result = soustraction(nombreUn,nombreDeux);
   break;
   case "3":
   var   result = Multiplication(nombreUn,nombreDeux);
   break;
   case "4" :
   var   result = Division(nombreUn,nombreDeux);
       break;
   default:
     throw new Error ("une erreur inattendu c est produit  ");
}
alert ("voici le resultat "+ result);
}
catch(erreur){
     alert(erreur);
}
if (confirm("souhaitez vous refaire un autre calcule ? ")){
   principal();
}
}*/

/*let maFunction = function (){
       
       console.log("test");
}
maFunction();

maFunction2 = () =>console.log("test2");
maFunction();*/

/*function bonjour(prenom){

   let resultat = "bonjour " + prenom;
   let maClosure = () => console.log(resultat);
   return maClosure; 
}
let maFonction = bonjour("Amel");
maFonction();


function bonjour_bis(prenom){

   let resultat = "bonjour " + prenom;
   console.log(resultat);
   
}
bonjour_bis("amelbis");

function timer(){
   let secondes = 0

   let closur = () => {++secondes
              return secondes ;    
              }
              return closur;
}

let chien = {
        race :"Shiba",
        poil :"Court",
     // aboyer : function(){console.log("wof wof");}
     aboyer : () => console.log("ouaf ouaf")
}


let magicien = {

    attaque : function(){console.log("le magicien lance un sort ");}
}

let  guerrier = {

   attaque : function(){console.log("le guerrier prend son epe");}

}*/

/*let information = ["SuperSayen","25 ", "Homme"];
let spseudo = information[0];

let age     = information[1];

let sexe    = information[2];*/
/*let [pseudo, age, sexe ] = information;
console.log(pseudo);
console.log(age);
console.log(sexe);

let nombre = [10,34,56,3,56,78,78,56];
let monSet = new Set();
monSet.add(23);
monSet.add("23");
monSet.add(45);
monSet.add(25);
monSet.add(33);
monSet.add(["mon","tableau","dans","mon","set"]);
console.log(monSet);
monSet.delete(23);
console.log(monSet);
console.log(monSet.size);*/

function addition (...nombres){
    let resultat = 0;
   nombres.forEach(nombre =>{
        resultat += nombre;

   });
   return resultat;

}

let header = document.querySelector('header');

/*let logo = document.getElementById("logo");
let classe = document.getElementsByClassName("container");
let h1     = document.querySelector("h1")
let h     = document.querySelectorAll("h1")
h1.textContent = "HELLO WORLD."
h1.innerHTML = "<div style='font.weight:normal'>HELLO World!</div>"
let div = document.createElement('div');
div.textContent = "hello world"
document.querySelector(".container").prepend(div)

console.log(logo);
console.log(classe);*/
header.style.backgroundColor = "#ffbb69";

let h1 = document.querySelector('h1').style.color = "#111d5e";
         document.querySelector('h1').style.textAlign = "center";
let myp = document.getElementById("myP");



alert(myp.nodeType + "\n\n"+ myp.nodeName.toLowerCase());

   





