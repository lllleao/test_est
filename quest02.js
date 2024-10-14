const aQuant = (word) => {
    const wordLower = word.toLowerCase()
    const isAinIt = wordLower.includes('a')
    const aQuant = wordLower.match(/a/g).length
    
    if (isAinIt) {
        return `A letra a aparece ${aQuant} vezes`
    }

    return "A letra a não está nessa palavra"
}

const test = aQuant('Canetinha')
console.log(test)