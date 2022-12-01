import { fileToArray } from '../utils/file.js'

const data = fileToArray('data.txt')

let max = 0, current = 0

data.forEach(calories => {
    if (calories === '') {
        if (max < current) {
            max = current
        }
        current = 0
    } else {
        current += parseInt(calories)
    }
})

console.log(max)
