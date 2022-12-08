import { sectionInAnotherOne } from './helper.js'
import { fileToArray } from '../utils/file.js'
const data = fileToArray('data.txt')

console.log(data.reduce((sum, line) => {
    const sections = line.split(','),
        section1 = sections[0].split('-').map(v => parseInt(v)),
        section2 = sections[1].split('-').map(v => parseInt(v))
    return sum + (sectionInAnotherOne(section1, section2) || sectionInAnotherOne(section2, section1) ? 1 : 0)
}, 0))
