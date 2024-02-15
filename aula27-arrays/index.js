
// ... rest, ...spread
const numeros = [1000, 2000 , 3000, 4000, 5000]

primeiroNumer = numeros[0]

console.log(primeiroNumer)

const [primeiro, segundo] = numeros

console.log(primeiro, segundo)

const [one, two, ...resto] = numeros

console.log(one, resto)

const num_list = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
console.log(num_list[2])
console.log(num_list[0][2])