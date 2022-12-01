import { fileToArray } from '../utils/file.js'

const data = fileToArray('data.txt')

let max = [0,0,0], current = 0, min = 0

data.forEach(calories => {
    if (calories === '') {
        if (min < current) {
            max[max.indexOf(min)] = current
            min = Math.min.apply(Math, max)
        }
        current = 0
    } else {
        current += parseInt(calories)
    }
})

console.log(max.reduce((p,v) => p+v, 0))
