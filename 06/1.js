import { fileToArray } from '../utils/file.js'
const line = fileToArray('data.txt')[0].split('')

const marker = []
var found = false, position = 0

while(!found) {
    if (marker.length === 4) {
        marker.shift(line[position])
    }
    marker.push(line[position])
    position++
    if (marker.length === 4 && !marker.find((m1, i1) => marker.find((m2, i2) => (i1 !== i2 && m1 === m2)))) {
        found = true
    }
}

console.log(position)
