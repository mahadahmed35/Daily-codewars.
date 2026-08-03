// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice as strong as love :-)

// Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

// The input will always be made of only lowercase letters and will never be empty.
// function wordsToMarks(string){
//   //your code here
//   string = string.toLowerCase();
//   let total = 0;
//   for(let  letter of string){
//     total += letter.charCodeAt(0)-96;
//     letter.charCodeAt(0) -96;
//   }
//   return total;
// }


// console.log(wordsToMarks('Iloveyou'));

// function characterCode(string){
//     let total = 0;
//     for(let letter of string){
//         total += letter.charCodeAt(0);
//         letter.charCodeAt(0)
//     }
//     return total;
// };



// console.log(characterCode('ABC'))

// function countVowels(word){
//     let total = '';
//     for(let letter of word){
//     const matches = word.match(/[aeiou]/gi);
//     return matches? matches.length:0;
    
//             total += matches.length;

//     }
//     return total;
// };

// console.log(countVowels('hello my name is mahad'));
// function alphabetPosition(string){
//     return string.charCodeAt(0)-96;
// };

// console.log(alphabetPosition('thesunsetsets'))
// function jadenCasing(string){
//     return string.split(" ").map(string => string.charAt(0).toUpperCase() + string.slice(1)).join(" ");
// }


// console.log(jadenCasing('how are you'));


// function stringSpacing(string){
//     return string.replaceAll(' ', '');
// }

// console.log(stringSpacing('Hello World'))

// function vowelCount(string){
// let total = 0;
// for(let letter of string){
//     const matches = string.match(/[aeiou]/gi);
//     return matches? matches.length:0;
// }
// return total
// };

// console.log(vowelCount('hello world'))
// function mumblingString(string){
//     return string.split('').map((char, index)=> char.toUpperCase() + char.toLowerCase().repeat(index)).join('-');
// }
// console.log(mumblingString('abcd'))
function shortestWord(string){
    string.trim().split(/\s+/).reduce((shortest, current)=> current.length < shortest.length? current: shortest);

}

console.log(shortestWord('The quick brown fox jumps over a lazy dog'))