function binaryAgent(str) {
    let strArray = str.split(" ");
    let unicodeText;
    let finalSentence;
    let decodedBinarySentenceArray = []
    for(let i=0; i<strArray.length; i++){
      unicodeText = parseInt(strArray[i],2).toString(10);
        decodedBinarySentenceArray.push(String.fromCharCode(unicodeText));


    }
    finalSentence = decodedBinarySentenceArray.join("");
    return  finalSentence;
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
