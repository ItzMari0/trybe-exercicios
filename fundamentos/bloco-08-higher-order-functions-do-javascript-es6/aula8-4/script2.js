const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

function containsA() {
  return names.reduce((acc, name) => acc + name.split('').reduce((callback, cur) => {
    if (cur === 'a' || cur === 'A') {
      return callback + 1;
    }
    return callback;
  }, 0), 0);
};

console.log(containsA(names));
