/**
 * This function takes a string and turns it into 0s and 1s
 * @param {string} s 
 * @returns s with vowels turned into 1s and non-vowels turned into 0s
 */
function vowelOne(s){
    let vowels = ['a','e','i','o','u']
    return s.toLowerCase().split('').map(n => vowels.includes(n) ? 1 : 0).join('')
  }