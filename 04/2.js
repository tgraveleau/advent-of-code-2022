import { sectionOverlapAnotherOne } from './helper.js'
import { fileToArray } from '../utils/file.js'
const data = fileToArray('data.txt')

console.log(data.reduce((sum, line) => {
    const sections = line.split(','),
        section1 = sections[0].split('-').map(v => parseInt(v)),
        section2 = sections[1].split('-').map(v => parseInt(v))
    return sum + (sectionOverlapAnotherOne(section1, section2) || sectionOverlapAnotherOne(section2, section1) ? 1 : 0)
}, 0))
