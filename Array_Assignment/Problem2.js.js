// Given a character in lower case print the upper case character

let lower = "qwertyuiopasdfghjklzxcvbnm";
let upper = "QWERTYUIOPASDFGHJKLZXCVBNM";

let char = "n"

for (let i = 0; i < lower.length; i++) {
  if (char == lower[i]) {
    char = upper[i];
    break;

  }
}
console.log(char);