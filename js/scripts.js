var sentence = prompt("please enter a sentence to be encrypted.");


function firstLastCap(sentence) {
   return sentence.slice(0,1).toUpperCase() + sentence.slice(-1,).toUpperCase();
}
alert(firstLastCap(sentence));
var result = firstLastCap(sentence);

function reverseOrder(result) {
  return result.split("").reverse().join("");
}

alert(reverseOrder(result));

function mashUp() {
    firstLastCap(sentence);
    reverseOrder(result);
    return sentence + reverseOrder(result);
}
alert(mashUp());

function countByTwo() {
    var newSentence = sentence.length / 2;
    newSentence = Math.floor(newSentence); 
    
}
alert(countByTwo());