const target = document.getElementById("target");

let array = ["développeur", "carrossier", "boucher"];
let wordIndex = 0;
let letterIndex = 0;

// Création d'une lettre
function createLetters() {
  // Créer un element span
  const letter = document.createElement("span");
  // Rendre ce span enfant de target
  target.appendChild(letter);
  // Injecter la lettre dans letter
  letter.textContent = array[wordIndex][letterIndex];
  // Supprimer les lettres au bout de 2.8s
  setTimeout(() => {
    letter.remove();
  }, 2800);
}

// fonction recursive
const loop = () => {
  setTimeout(() => {
    // Si il reste encore des mots
    if (wordIndex < array.length) {
      // Si il reste encore des lettres dans le mot
      if (letterIndex < array[wordIndex].length) {
        createLetters();
        letterIndex++;
        loop();
        // Sinon il n'y a plus de lettres dans le mot
      } else {
        // Attendre que les lettres se soit supprimées pour passer au mot suivant
        setTimeout(() => {
          wordIndex++;
          letterIndex = 0;
          loop();
        }, 2800);
      }
      // sinon plus de mots dans le tableau
    } else {
      // repartir du debut du tableau
      wordIndex = 0;
      loop();
    }
  }, 60);
};
loop();
