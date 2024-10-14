const fiboSeq = (entry) => {
    let fibo = 0
    let sum = 1
    let isInSeq= false

    for (let i = 0; i <= entry; i++) {
        let newSum = fibo + sum
        sum = fibo
        fibo = newSum
        
        if (entry === fibo || entry === 0) {
            isInSeq = true
        }
    }

    const message = `O número informado ${isInSeq ? '': 'não'} pertence a sequência fibonacci`
    return message
}
const entry = 21
const test = fiboSeq(entry)

console.log(test)
