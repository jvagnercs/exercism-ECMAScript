class Cipher {
  constructor(key) {
    this.key = key
  }
    
  decode() {
    // console.log()
  }
       
  encode() {
    const LOWAY = "a"
    const LOWZED = "z"
    const HIGHAY = "A"
    const HIGHZED = "Z"

    // proceeds only if input is not null
    if (unCiphered === null || unCiphered === undefined) return "\nProper usage:\n\tcaesar('string')\n"

    let ciphered = []

    // loops through the string
    for (let key in unCiphered) {
      // check if the char is either lower or upper case
      if(checkLower(unCiphered[key]) || checkUpper(unCiphered[key])) {
        // should that be the case, toCaesar is called to encrypt this single char
        ciphered.push(String.fromCharCode(toCaesar(unCiphered[key])))
      } else {
        // if it is a number, or symbol, it is put into the array outright
        ciphered.push(unCiphered[key])
      }
    }
    // prints the now encrypted string
    console.log('ciphered',ciphered.join(''))
  }

  const checkLower = c => c >= LOWAY && c <= LOWZED
  const checkUpper = c => c >= HIGHAY && c <= HIGHZED

  const toCaesar = c => {
    let upper_bound, lower_bound
      
    // sets values for variables, according to the char case
    if (checkLower(c)) {
      lower_bound = LOWAY
      upper_bound = LOWZED
    }
    else {
      lower_bound = HIGHAY
      upper_bound = HIGHZED
    }
    
    let offset = 3

    // gets the sum of char plus the offset
    let char_offset = offset + c.charCodeAt(0)

    // discards the part above upper_limit and gets the modulo into cut_off
    let cut_off = char_offset % (upper_bound.charCodeAt(0) + 1)

    // if cut_off is less than lower_bound
    if (cut_off < lower_bound.charCodeAt(0)) {
      // sum both to avoid a number less than lower_bound
      return cut_off + lower_bound.charCodeAt(0)
    } else {
      // returns cut_off
      return cut_off
    }
  }

}

