const strategiesAire = {
  rectangle: (largeur, hauteur) => {
    return largeur*hauteur;
  },

  carre: (cote) => {
    return cote*cote;
  },

  triangle: (base, hauteur) => {
    return (base*hauteur)/2;
  },

  cercle: (rayon) => {
    return rayon*rayon*Math.PI;
  },

  trapeze: (petiteBase, grandeBase, hauteur) => {
    return ((petiteBase + grandeBase)*hauteur)/2;
  },
};


function calculerAire(forme, ...dimensions) {

  if (forme in strategiesAire){
    return strategiesAire[forme](...dimensions);
  }else{
    return "ERREUR - Cette forme n'est pas disponible";
  }
}


function afficherResultat(forme, ...dimensions) {
  const resultat = calculerAire(forme, ...dimensions);
  console.log(`L'aire du ${forme} est de ${resultat} unités²`);
}


function listerFormesDisponibles() {
  console.log("Voici les formes disponibles:");
  for (const forme of Object.keys(strategiesAire)){
    console.log(forme);
  }

  return " ";
}


console.log("=== TESTS DU CALCULATEUR D'AIRES ===\n");

// Test 1 : Rectangle
console.log("Test 1 - Rectangle (5 × 3) :");
afficherResultat("rectangle", 5, 3);
console.log();

// Test 2 : Carré
console.log("Test 2 - Carré (côté = 4) :");
afficherResultat("carre", 4);
console.log();

// Test 3 : Triangle
console.log("Test 3 - Triangle (base = 6, hauteur = 4) :");
afficherResultat("triangle", 6, 4);
console.log();

// Test 4 : Cercle
console.log("Test 4 - Cercle (rayon = 5) :");
afficherResultat("cercle", 5);
console.log();

// Test 5 : Trapèze
console.log("Test 5 - Trapèze (petiteBase = 3, grandeBase = 7, hauteur = 4) :");
afficherResultat("trapeze", 3, 7, 4);
console.log();

// Test 6 : Forme inexistante
console.log("Test 6 - Forme inexistante :");
console.log(calculerAire("pentagone", 5));
console.log();

// ===================================
// TESTS BONUS
// ===================================

console.log("=== TESTS BONUS ===\n");

// Test 7 : Lister les formes disponibles
console.log("Formes disponibles :");
console.log(listerFormesDisponibles());
console.log();
