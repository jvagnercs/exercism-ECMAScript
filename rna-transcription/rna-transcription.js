class Transcriptor {

    toRna(localString) {
        const conversion = {
            G : "C",
            C : "G",
            T : "A",
            A : "U"
        }
        let temp = []
        for (let key in localString) {
            temp.push(conversion[localString[key]])
        }
        const returnString = temp.join("")
        if(localString.length === returnString.length) {
          return returnString
        } else {
          throw new Error('Invalid input DNA.')
        }
    }
}

export default Transcriptor