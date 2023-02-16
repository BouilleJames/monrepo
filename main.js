// const prenom = "Sofiane";
// console.log(typeof (prenom));
// const nom = "Marley";
// const age = 36;
// const phrase = " Bonjour , je m'appelle";
// window.alert (phrase + " " + prenom+  " "  +  " "  + nom +  " " + " et  j'ai " + age + " ans " );
// var monTableau = [];
// monTableau["enfant"]= "toto";
// monTableau["maman"]= "tata";
// monTableau["papa"]= "titi";
// console.table (monTableau);
// var maChaine = new String("exemple");
// var a = 42;
// var b = 4.2;
// var c = -42;
// var d = "42";

// alert ("ma variable a est de type :" + typeof (a) +
//  "\nma variable b est de type :" + typeof (b) +
//   "\nma variable c est de type :" + typeof (c) +
//    "\nma variable d est de type :" + typeof (d)); 

//    var machaine = "exemple";
//    var maChaine = new String("exemple");

//    alert ("ma variable maChaine est de type :" + typeof (maChaine) +
//    "\nma variable machaine est de type : " + typeof (machaine));

//    var n = null;
//    var u = undefined;
//    var nn = NaN;

//    alert ("ma variable n est de type :" + typeof (n) +
//    "\nma variable u est de type :" + typeof (u) +
//    "\nma variable nn est de type : " + typeof (nn));

// const heureOuverture = 9;
// const heureFermeture = 17;
// var heureActuelle = 9.3;

// if (heureActuelle < heureOuverture) {
//     alert("revenez plus tard")
// }else if (heureActuelle >= heureOuverture && heureActuelle <= heureFermeture){
//     alert("bienvenue")
//     if (heureActuelle < 12 ){
//         alert ("bienvenue nous sommes le matin")
//     }else{
//         alert("bienvenue nous sommes l'apres midi")
//     };
// }else {
//     alert("revenez demain")
// };

// ou en ternaire

//      (heure < 12) ?
//   alert('bienvenu nous sommes le matin')
//   :
//  alert("bienvenu nous sommes l'apres-midi")
// } else {
//  alert('revenez demain')
// }
//
// var note = 5;
// var noteAmericaine = "";
 
// if (note >= 19) {
//     noteAmericaine = "A+"
//     }else if (note >= 18 && note < 19) {
//     noteAmericaine = "A"
//     }else if (note >= 15 && note < 18){
//     noteAmericaine = "B"
//     }else if (note >= 12 && note < 15){
//     noteAmericaine = "C"
//     }else if (note >= 9 && note < 12){
//     noteAmericaine = "D"
//     }else if (note >= 6 && note < 9){
//     noteAmericaine = "E"
//     }else if (note < 6){
//     noteAmericaine = "F"
//     }else {
//         noteAmericaine = "ABS"
// };



// switch (noteAmericaine) {
//     case "A+":
//         alert("excellent")
//         break;
//     case "A":
//         alert("TB")
//         break;
//     case "B":
//         alert("Bien")
//         break;
//     case "C":
//         alert("Assez-bien")
//         break;
//     case "D":
//         alert("Moyen")
//         break;
//     case "E":
//         alert("Pas le niveau")
//         break;
//     case "F":
//         alert("Nul")
//         break;

//         default:
//             alert("nous ne connaissons pas votre note")
//             break;
// };

// var prix = 1000;
// var reduction = 0;


// if (prix < 1000){
//     reduction = 0;
// }else if (prix <= 2500 && prix >= 1000){
//     reduction = 5;
// }else {
//     reduction = 10;
// }

// var total = prix-((reduction/100)*prix);

// switch (reduction) {
//     case 0:
//         console.log("pas de reduction", prix);
//         break;

//     default:
//         console.log("total : ", total);
//         break;
// }

// var arrayNbr = [1, 2, 3];
// var arrayStr = ["a", "b", "c"];
//  arrayNbr.push(4); //[1, 2, 3, 4] ajoute la valeur indiqué à la fin du tableau
//  arrayNbr.pop(); //[1, 2] retire la dernière valeur
//  arrayNbr.shift(); //[2, 3] retire la première valeur
//  arrayNbr.unshift(0); //[0, 1, 2, 3] ajoute la valeur indiqué au début du tableau
//  arrayStr.concat("d"); //fusionne des tableaux sans changer les valeurs du tableau initial
//  arrayStr.join('-'); // a-b-c joindre les valeurs du tableau sans changer les valeurs du tableau initial
//  arrayStr.slice(1); // ["b", "c"] retire le nombre d'éléments indiqué du tableau en partant du début sans changer les valeurs du tableau initial
//  arrayStr.slice(-1); // ["b", "c"] retire le nombre d'éléments indiqué du tableau en partant du début et en comptant depuis la fin sans changer les valeurs du tableau initial
//  arrayStr.includes("c"); //true vérifie si la valeur existe
//  arrayStr.indexOf("c"); //2 renvoi le position (index) de la valeur dans le tableau
//  arrayNbr.reduce((acc, cou)=> acc + cou ) //6 additionne tous les éléments du tableau
//  arrayNbr.find(el => el > 2) //3 renvoie la valeur du premier élément trouvé dans le tableau qui respecte la condition
//  arrayNbr.findIndex(el => el > 2) //2 renvoie l'index du premier élément trouvé dans le tableau qui respecte la condition
// arrayNbr.map(el => el * 2); //[2, 4, 6] crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.
//  arrayNbr.some(el => el > 2); //true passe le test implémenté par la fonction fournie. Elle renvoie un booléen indiquant le résultat du test.
//  arrayNbr.filter(el => el > 1) // [2,3] renvoi tous les éléments qui respectent la condition
//  arrayNbr.every(el => el > 1);
//  arrayNbr.reverse();

// const div = document.getElementsByClassName('carre')

// console.log(div)

// div[0, 2].style.backgroundColor = 'rgb(255, 0, 0)';
// div[1, 3].style.backgroundColor = 'rgb(0, 128, 0)';

// div[0, 2].style.rotate = 'right';

// console.log(div);

// const div = document.getElementsByClassName('carre');
// const arrDiv = Array.from(div);


// mauvaise pratique
// div[0].style.backgroundColor = 'rgb(255, 0, 0)';
// div[1].style.backgroundColor = 'rgb(0, 255, 0)';
// div[2].style.backgroundColor = 'rgb(255, 0, 0)';
// div[3].style.backgroundColor = 'rgb(0, 255, 0)';
// div[4].style.backgroundColor = 'rgb(255, 0, 0)';


//Boucle for:

// for (let index = 0; index < div.length; index++) {
//   if (index % 2 != 0) {
//     div[index].style.backgroundColor = 'rgb(255, 0, 0)'
//   } else {
//     div[index].style.backgroundColor = 'rgb(0, 255, 0)'
//   }
// }

//methode map:

// div.map((element, index) => {
//   if(index % 2 != 0){
//     element.style.backgroundColor = 'rgb(255, 0, 0)'
//   } else {
//     element.style.backgroundColor = 'rgb(0, 255, 0)'
//   }
// })

// div.map((element, index) => index % 2 != 0
//    ?
//   element.style.backgroundColor = 'rgb(255, 0, 0)'
//    :
//   element.style.backgroundColor = 'rgb(0, 255, 0)'
// )
// div.map((element, index) => {
//   if(index % 2 != 0){
//     return element.style.backgroundColor = 'rgb(255, 0, 0)'
//   }
//   return element.style.backgroundColor = 'rgb(0, 255, 0)'
// })