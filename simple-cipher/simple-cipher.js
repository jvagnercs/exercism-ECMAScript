class Cipher {
  constructor(key) {
    this.key = key
  }

  LOWAY = "a"
  LOWZED = "z"
  HIGHAY = "A"
  HIGHZED = "Z"

  checkLower = c => c >= LOWAY && c <= LOWZED
  checkUpper = c => c >= HIGHAY && c <= HIGHZED
    
  encode = unCiphered => {
    // proceeds only if input is not null
    if (unCiphered === null || unCiphered === undefined) return "\nProper usage:\n\tencode('string')\n"
  
    let ciphered = []
  
    // loops through the string
    for (let key in unCiphered) {
      const individualChar = unCiphered[key]
      // check if the char is either lower or upper case
      if(checkLower(individualChar) || checkUpper(individualChar)) {
        // cipherChar is called to encrypt this single char
        const cipheredChar = cipherChar(individualChar)
        // push it into array
        ciphered.push(String.fromCharCode(cipheredChar))
      } else {
        // if it is a number, or symbol, it is put into the array outright
        ciphered.push(individualChar)
      }
    }
    // prints the now encrypted string
    return ciphered.join('')
  }
       
  decode = ciphered => {
    if (ciphered === null || ciphered === undefined) return "\nProper usage:\n\tdecode('string')\n"
  
    let deciphered = []
    for (let key in ciphered) {
      if(checkLower(ciphered[key]) || checkUpper(ciphered[key])) {
        deciphered.push(String.fromCharCode(deCipherChar(ciphered[key])))
      } else {
        deciphered.push(ciphered[key])
      }
    }
    return deciphered.join('')
  }

  getBoundaries = c => {
    let charBoundaries = []
    if (checkLower(c)) {
      charBoundaries.push(LOWAY.charCodeAt(0))
      charBoundaries.push(LOWZED.charCodeAt(0))
    } else {
      charBoundaries.push(HIGHAY.charCodeAt(0))
      charBoundaries.push(HIGHZED.charCodeAt(0))
    }
    return charBoundaries
  }
  
  cipherChar = c => {
    const [lower_bound, upper_bound] = getBoundaries(c)
    const offset = 3
    const char_offset = offset + c.charCodeAt(0)
    if (char_offset > upper_bound) {
      return lower_bound + char_offset - (upper_bound + 1)
    } else {
      return char_offset
    }
  }
  
  deCipherChar = c => {
    const [lower_bound, upper_bound] = getBoundaries(c)
    const offset = -3
    const char_offset = offset + c.charCodeAt(0)
    if (char_offset < lower_bound) {
      return upper_bound - (lower_bound - 1 - char_offset)
    } else {
      return char_offset
    }
  }
}

