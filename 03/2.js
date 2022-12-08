import { getPriority } from './helper.js'
import { fileToArray } from '../utils/file.js'
const data = fileToArray('data.txt')

const nbRucksacks = data.length
var i, priorities = 0
for (i = 0; i < (nbRucksacks-2); i += 3) {
    priorities += getPriority(data[i].split('').filter(item => data[i+1].split('').includes(item)).find(item => data[i+2].split('').includes(item)))
}
console.log(priorities)
