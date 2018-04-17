class Cipher {
  constructor(key) {
    this.key = key
  }

  LOWAY() { return 'a' }
  LOWZED() { return 'z' }
  HIGHAY() { return 'A' }
  HIGHZED() { return 'Z' }

  checkLower(c) { return c >= this.LOWAY() && c <= this.LOWZED()}
  checkUpper(c) { return c >= this.HIGHAY() && c <= this.HIGHZED()}

  encode(unCiphered) {
    // proceeds only if input is not null
    if (unCiphered === null || unCiphered === undefined) return "\nProper usage:\n\tencode('string')\n"
  
    let ciphered = []
  
    // loops through the string
    for (let key in unCiphered) {
      const individualChar = unCiphered[key]
      // check if the char is either lower or upper case
      if(this.checkLower(individualChar) || this.checkUpper(individualChar)) {
        // cipherChar is called to encrypt this single char
        const cipheredChar = this.cipherChar(individualChar)
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

  decode(ciphered) {
    if (ciphered === null || ciphered === undefined) return "\nProper usage:\n\tdecode('string')\n"
  
    const deciphered = []
    for (let key in ciphered) {
      if (this.checkLower(ciphered[key]) || this.checkUpper(ciphered[key])) {
        deciphered.push(String.fromCharCode(this.deCipherChar(ciphered[key])))
      } else {
        deciphered.push(ciphered[key])
      }
    }
    return deciphered.join('')
  }

  getBoundaries(c) {
    const charBoundaries = []
    if (this.checkLower(c)) {
      charBoundaries.push(this.LOWAY().charCodeAt(0))
      charBoundaries.push(this.LOWZED().charCodeAt(0))
    } else {
      charBoundaries.push(this.HIGHAY().charCodeAt(0))
      charBoundaries.push(this.HIGHZED().charCodeAt(0))
    }
    return charBoundaries
  }

  cipherChar(c) {
    const [lowerBound, upperBound] = this.getBoundaries(c)
    const offset = 3
    const charOffset = offset + c.charCodeAt(0)
    if (charOffset > upperBound) {
      return lowerBound + (charOffset - (upperBound + 1))
    }
    return charOffset
  }
  
  deCipherChar(c) {
    const [lowerBound, upperBound] = this.getBoundaries(c)
    const offset = -3
    const charOffset = offset + c.charCodeAt(0)
    if (charOffset < lowerBound) {
      return upperBound - (lowerBound - 1 - charOffset)
    }
    return charOffset
  }
}
