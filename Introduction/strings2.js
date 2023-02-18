function wordBlanks(myNoun, myAdjecive, myVerb, myAdverb){
    var result = "";
    result = "The "+myAdjecive+" "+ myNoun+" "+myVerb+" "+myAdverb;
    return result;
}

// printing the results for function wordBlanks
console.log(wordBlanks("dog","big","ran","quickly"));
console.log(wordBlanks("bike","slow","flew","slowly"));