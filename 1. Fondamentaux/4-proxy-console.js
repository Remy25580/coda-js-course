// CONTEXTE :
// Vous devez créer un système de logging personnalisé qui encapsule
// les méthodes de console (log, warn, error) pour ajouter des fonctionnalités
// supplémentaires comme l'horodatage et le formatage des messages.

// ===================================
// PARTIE 1 : FONCTION D'HORODATAGE
// ===================================

// TODO : Créer une fonction qui retourne l'heure actuelle au format HH:MM:SS
// Exemple de retour : "[14:35:22]"

function obtenirHorodatage() {
  const date = new Date();
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();

  return `[${h.toString()}:${m.toString()}:${s.toString()}]`;
}

// ===================================
// PARTIE 2 : CRÉATION DU PROXY CONSOLE
// PARTIE 3 : MISE EN PLACE DU PROXY
// ===================================
const oldLog = console.log;
console.log = (msg) =>{
  oldLog(`${obtenirHorodatage()} => ${msg}`);
};

const oldWarn = console.warn;
console.warn = (msg) =>{
  oldWarn(`${obtenirHorodatage()} => ${msg}`);
};

const oldError = console.error;
console.error = (msg) =>{
  oldError(`${obtenirHorodatage()} => ${msg}`);
};

// ===================================
// TESTS
// ===================================

// Test de la méthode log
console.log("Ceci est un message d'information");

// Test de la méthode warn
console.warn("Attention, ceci est un avertissement");

// Test de la méthode error
console.error("Une erreur s'est produite");
