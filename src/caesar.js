// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  /* function takes 3 peramiters:
1: word to be cypherd / decyphered
2. shift value
3. encode / decode boolen

if shift value is not indicaed, 0, less than -25, or more than 25 function should return false
spaces and other non alphobetical symbols should remain the same
capital letters can be ignored
*/

  function caesar(input, shift, encode = true) {
      let newMessage="";
      if(shift==undefined||shift<-25||shift>25||shift ==0){return false};
      for(let charictor in input){
          // makes shift by using char codes a being 97 and z being 122
          let charictorCharCode = input[charictor].toLowerCase().charCodeAt(0);
          let shiftedCharCode = charictorCharCode+shift;
          if(encode==false){shiftedCharCode = charictorCharCode-shift};
          if(shiftedCharCode>=97&&shiftedCharCode<=122)
          {
              newMessage+=String.fromCharCode(shiftedCharCode);
          }else if(charictorCharCode<97||charictorCharCode>122){
              newMessage+=input[charictor];
          }else if(shiftedCharCode>122){
              newMessage+=String.fromCharCode(shiftedCharCode-26);
          }else if(shiftedCharCode< 97){
              newMessage+=String.fromCharCode(shiftedCharCode+26);
      }
    }
    return newMessage;
  }
  module.exports = caesar;
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
