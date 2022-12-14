import { fileToArray } from '../utils/file.js'
import { isVisible } from './helper.js'
const data = fileToArray('data.txt').map(row => row.split('').map(tree => parseInt(tree)))

const X_LENGTH = data.length, Y_LENGTH = data[0].length

let i, j, nbVisibleTrees = X_LENGTH*2 + Y_LENGTH*2 -4 // -4 because we count corners 2 times
for (i = 1; i < (X_LENGTH-1); i++) {
    for (j = 1; j < (Y_LENGTH-1); j++) {
        if (isVisible(data, i, j, X_LENGTH, Y_LENGTH)) {
            nbVisibleTrees++
        }
    }
}

console.log(nbVisibleTrees)
