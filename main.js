const prenom = "Sofiane";
console.log(typeof (prenom));
const nom = "Marley";
const age = 36;
const phrase = " Bonjour , je m'appelle";
window.alert (phrase + " " + prenom+  " "  +  " "  + nom +  " " + " et  j'ai " + age + " ans " );
var monTableau = [];
monTableau["enfant"]= "toto";
monTableau["maman"]= "tata";
monTableau["papa"]= "titi";
console.table (monTableau);
var maChaine = new String("exemple");
var a = 42;
var b = 4.2;
var c = -42;
var d = "42";

alert ("ma variable a est de type :" + typeof (a) +
 "\nma variable b est de type :" + typeof (b) +
  "\nma variable c est de type :" + typeof (c) +
   "\nma variable d est de type :" + typeof (d)); 

   var machaine = "exemple";
   var maChaine = new String("exemple");

   alert ("ma variable maChaine est de type :" + typeof (maChaine) +
   "\nma variable machaine est de type : " + typeof (machaine));

   var n = null;
   var u = undefined;
   var nn = NaN;

   alert ("ma variable n est de type :" + typeof (n) +
   "\nma variable u est de type :" + typeof (u) +
   "\nma variable nn est de type : " + typeof (nn));

const heureOuverture = 9;
const heureFermeture = 17;
var heureActuelle = 9.3;

if (heureActuelle < heureOuverture) {
    alert("revenez plus tard")
}else if (heureActuelle >= heureOuverture && heureActuelle <= heureFermeture){
    alert("bienvenue")
    if (heureActuelle < 12 ){
        alert ("bienvenue nous sommes le matin")
    }else{
        alert("bienvenue nous sommes l'apres midi")
    };
}else {
    alert("revenez demain")
};

ou en ternaire

//      (heure < 12) ?
//   alert('bienvenu nous sommes le matin')
//   :
//  alert("bienvenu nous sommes l'apres-midi")
// } else {
//  alert('revenez demain')
// }
















