// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function testForUneque(subAlpha){
    for(let letter in subAlpha){
      let char = subAlpha[letter];
      let count =0;
      for(let c in subAlpha){
        if(subAlpha[c]==char){count++};
      }
      if(count>1){return false};
    }
    return true;
  }

  function cypher(input, alpha, subAlpha){
    let newMessage="";
    for(let char in input){
      let charictor = input[char];
      if(input[char]===" "){newMessage+=" "
      }else{
        let ind = alpha.indexOf(charictor);
        newMessage+=subAlpha[ind];
      }
    }
    return newMessage;
  }
  
  function deCypher(input,alpha,subAlpha){
    let newMessage="";
    for(let char in input){
      let charictor = input[char];
      if(input[char]===" "){newMessage+=" "
      }else{
        let ind = subAlpha.indexOf(charictor);
        newMessage+=alpha[ind];
      }
    }
    return newMessage;
  }
  function substitution(input, alphabet, encode = true) {
    if(alphabet==undefined){return false};
    const subAlpha = alphabet.split("");
    let isUneque = testForUneque(subAlpha);
    if(!isUneque){return false};
    const alpha =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let newMessage ="";
    if(subAlpha.length!=26){return false;};
    if(encode){newMessage = cypher(input.toLowerCase(),alpha,subAlpha)
    }else{newMessage =deCypher(input.toLowerCase(),alpha,subAlpha)}
    return newMessage;
  }
  let actual = substitution("This is a secret meesage", "/.,?><';!@#$%^&*()_+-=~`CS");
        console.log(actual);
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
