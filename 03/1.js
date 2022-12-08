import { getPriority } from './helper.js'
import { fileToArray } from '../utils/file.js'
const data = fileToArray('data.txt')

console.log(data.reduce((priorities, items) => {
    const half = items.length / 2,
        first = items.slice(0, half),
        second = items.slice(half)
    return priorities + getPriority(first.split('').find(item => second.includes(item)))
}, 0))
