const reverseVowels =(str) =>{
    let theVowels = str.match(/[aiuoe]/ig);
    return str.replace( /[aiuoe]/ig , () => theVowels.pop());
  }
  