# Cours de Javascript
##<center>Introduction au JavaScript</center>
![js](https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/131px-Unofficial_JavaScript_logo_2.svg.png)
<p>JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives et à ce titre est une partie essentielle des applications web. Avec les langages HTML et CSS, JavaScript est au cœur des langages utilisés par les développeurs web3. Une grande majorité des sites web l'utilisent4, et la majorité des navigateurs web disposent d'un moteur JavaScript5 pour l'interpréter.</p>
##<center>Qu'est-ce qu'une variable</center>
<p>Une variable est un conteneur servant à stocker des informations de manière temporaire, comme une chaine de caractères (un texte) ou un nombre par exemple.

Le propre d’une variable est de pouvoir varier, c’est-à-dire de pouvoir stocker différentes valeurs au fil du temps et c’est cette particularité qui les rend si utiles.

Notez bien déjà qu’une variable en soi et la valeur qu’elle va stocker sont deux éléments différents et qui ne sont pas égaux. Encore une fois, une variable n’est qu’un conteneur. Vous pouvez imaginer une variable comme une boite dans laquelle on va pouvoir placer différentes choses au cours du temps.

Les variables sont l’une des constructions de base du JavaScript et vont être des éléments qu’on va énormément utiliser. Nous allons illustrer leur utilité par la suite.</p>

##Les types de variables

```var maChaine = new String("exemple");```
```var a = 42;```
```var b = 4.2;```
```var c = -42;```
```var d = "42";```

```alert ("ma variable a est de type :" + typeof (a) +
 "\nma variable b est de type :" + typeof (b) +
  "\nma variable c est de type :" + typeof (c) +
   "\nma variable d est de type :" + typeof (d)); ``` 

   ```var machaine = "exemple";
   var machaine = new String("exemple");

   alert ("ma variable machaine est de type :" + typeof (maChaine) +
   "\nma variable machaine est de type : " + typeof (machaine));

   var n = null;
   var u = undefined;
   var nn = NaN;

   alert ("ma variable n est de type :" + typeof (n) +
   "\nma variable n est de type :" + typeof (u) +
   "\nma variable nn est de type : " + typeof (nn));
   ```