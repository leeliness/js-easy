// Задача: Написати функцію, яка приймає рядок і замінює всі голосні (a, e, i, o, u) 
// на певний символ, наприклад *.

function replaceVowels(str) {
  // Ваш код тут
  let result = ''
  const charCodes = ['a'.charCodeAt(), 'e'.charCodeAt(), 'i'.charCodeAt(), 'o'.charCodeAt(), 'u'.charCodeAt(), 'A'.charCodeAt(), 'E'.charCodeAt(), 'I'.charCodeAt(), 'O'.charCodeAt(), 'U'.charCodeAt()];
  let match = false

  for(let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i)
      for(let j = 0; j < charCodes.length; j++) {
          if(charCode === charCodes[j]) {
              result += '*'
              match = true
              break;
          }
      }

      if(match) {
          match = false
          continue
      } else {
          result += str[i]
      }
  }
  return result
}

console.log(replaceVowels("hello world")); // Виведе: "h*ll* w*rld"
console.log(replaceVowels("Javascript"));  // Виведе: "J*v*scr*pt"

module.exports = replaceVowels;