function toAcronym(inp){
  // ...
  return inp.split(' ').map(inp=>inp[0].toUpperCase()).join('');
}

console.log(toAcronym('Umaze Neza'))

// Do you speak "English"?
function spEng(sentence){
//write your code here
 return sentence.toUpperCase().includes('ENGLISH');
}

console.log(spEng('I Love ENGLISh'));
