import { fileToArray } from '../utils/file.js'
import { scenicScore } from './helper.js'
const data = fileToArray('data.txt').map(row => row.split('').map(tree => parseInt(tree)))

const X_LENGTH = data.length, Y_LENGTH = data[0].length

let i, j, max = 0
for (i = 1; i < X_LENGTH; i++) {
    for (j = 1; j < Y_LENGTH; j++) {
        const sc = scenicScore(data, i, j, X_LENGTH, Y_LENGTH)
        if (sc > max) {
            max = sc
        }
    }
}

console.log(max)
