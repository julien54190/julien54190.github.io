/* let et var permet de dire que je crée une variable d'un nom souhaité */

let Autruche = "Animal"
var Perche = "poisson"
// j'ai défini des variable de type "string" (chaine de caractère)

let NombreStagiaire = 10
/* j'ai défini une varible avec le nom NombreStagiare
et je lui est donner comme donné le nombre 10 
j'ai défini une variable de type INT ( nombre entier) */

var heure = 14.31
/* j'ai crée une varaible avec le nom heure 
je lui ai donné la donné 14.31
j'ai défini une variable de type float/double ( nombre a virgule) */

let Allumer = true
/* j'ai crée une variable avec le nom Allumer 
et comme valeur je lui ai donné la valeur true (vrai)
le type de cette variable est boolean (true/ false)*/

var Ventilo = null
/* j'ai crée une variable avec le nom Ventilo
avec la valeur null qui est est rien du tout 
le type est nul */

let Phrase = "j'aime l'" + Autruche + " mais pas les " + Perche
/*  j'aime l'animal mais pas les poisson
j'ai concaténer ls chaine de caractères et les variabes*/

var calcul = heure + NombreStagiaire
/*  14.31 + 10 */

console.log(Phrase)
console.log(calcul)
// permet d'afficher dans la console du navigateur

/* je creée une fonction qui se nomme horloge avec comme paramètre temps */ 
var temps = 1
function Horloge() {
    // Si temps est plus petit ou églae à 10 on éxécute l'addition et le console log sinon rien 
    if (temps <= 10){
        temps = temps + 1
        // temps++
        // temps += 1
        console.log(temps)
    }

}

//setInterval(Horloge, 1000)

// je voudrai un compte a rebours qui commance a 50 et qui fini a 0 et qui descent toute les 2 sec

var decre = 50
function decrementation(){
    if ( decre >= 0){
        console.log(decre)
        decre--
    }

}

setInterval(decrementation, 2000)