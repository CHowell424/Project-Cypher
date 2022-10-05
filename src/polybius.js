// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  // encodes the input
  function encod(input, polybiusArray){
    let newMessage ="";
    for(let char in input){
      let charactor = input[char].toLowerCase();
      let x=0;
      let y=0;
      if(charactor.charCodeAt(0)<97||charactor.charCodeAt(0)>122){
        console.log(input[char]);
        newMessage+=input[char];
      }else{
        if(charactor=="j"||charactor=="i"){x=2;y=4
        }else{
          for(let ls in polybiusArray)
          {
            let letterSet = polybiusArray[ls];
            for(let letter in letterSet){
              if(letterSet[letter]==charactor){x = Number(ls)+1, y=Number(letter)+1};
            }
          }
    }newMessage+=String(y)+String(x);}
    
  }
  return newMessage;
  }

  //decodes the input
  function decode(input,polybiusArray){
    let newMessage="";
    let y=0;
    let x=0;
    let xOry = 0;
    for(let i=0; i<input.length; i++){
      if(input[i].charCodeAt(0)>=49&&input[i].charCodeAt(0)<=57){
        if(xOry==0){
          x = input[i];
          xOry=1;
        }else{y=input[i];
          xOry=0;
          newMessage+=polybiusArray[y-1][x-1];
        }
      }else{newMessage+=input[i]};
    }
    return newMessage;
  }

  function polybius(input, encode = true) {
    // code uses an array with arrays inside as a gride using x and y cordinates
    const polybiusArray =[['a','b','c','d','e'],['f','g','h','(i/j)','k'],['l','m','n','o','p'],['q','r','s','t','u'],['v','w','x','y','z']];
    let testInput =input.split(" ").join("");
    if(!encode){if((testInput.length)%2==1){return false}}
    let newMessage="";
    if(encode){newMessage=encod(input,polybiusArray)
    }else{
      newMessage=decode(input,polybiusArray)};
    return newMessage;
  }
  console.log(polybius("3251131343 443251245",false));
  return {
    polybius,
  };
})();
module.exports = { polybius: polybiusModule.polybius };
