const urlEncode = function(text) {
  newText = '';

  for(i = 0; i < text.length; i++) {
  if(text[i] === ' ') {
  if(!(i == 0 || i == text.length - 1)) {
  newText += '%20';
  }
  } 
  else {
  newText += text[i];
  }
  }
  
  return newText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));