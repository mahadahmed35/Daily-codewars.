function toAcronym(inp){
  // ...
  return inp.split(' ').map(inp=> inp[0].toUpperCase() && inp[0].toUpperCase()).join('');
}

console.log(toAcronym('New York Police Department'))