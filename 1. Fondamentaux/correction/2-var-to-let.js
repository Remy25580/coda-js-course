// CONTEXTE :
// Les var sont source d'erreur et d'une mauvaise lisibilité la plus part du temps.
// Remplacez les var dans le code suivant par des let ou des const au besoin.

function add(a, b) {
  const result = a + b;
  return result;
}

function substract(a, b) {
<<<<<<< HEAD:1. Fondamentaux/2-var-to-let.js
  let result = 0;
=======
  let result;
>>>>>>> a86d70c0efc9f44eb408317850b0f2a5eecee25f:1. Fondamentaux/correction/2-var-to-let.js
  if (a < b) {
    result = 0;
  } else {
    result = a - b;
  }

  return result;
}

function main(number1, number2) {
  console.log("L'addition des deux nombres vaut: ", add(number1, number2));
  console.log(
    "La soustraction des deux numbres vaut: ",
    substract(number1, number2),
  );
}

main(parseInt(process.argv[2] || "0", 10), parseInt(process.argv[3] || "0"));
