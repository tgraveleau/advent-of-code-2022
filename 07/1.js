import { fileToArray } from '../utils/file.js'
import { display, getSize } from './helper.js'
const data = fileToArray('data.txt')

// Get filesystem
var filesystem = { name: '/', parent: null, children: [], size: null }, currentDir
data.forEach(command => {
    const com = command.split(' ')
    if (com[0] == '$') {
        if (com[1] == 'cd') {
            currentDir = (!currentDir) ? filesystem : (com[2] == '..') ? currentDir.parent : currentDir.children.find(child => child.name == com[2])
        }
    } else {
        if (!currentDir.children.find(child => child.name == com[1])) {
            currentDir.children.push({ name: com[1], parent: currentDir, children: [], size: (com[0] !== 'dir' ? parseInt(com[0]) : null) })
        }
    }
})

function sumDirectorySize(filesystem) {
    if (filesystem.children.length === 0) {
        return 0
    }
    const size = getSize(filesystem)
    return filesystem.children.reduce((sum, child) => sum + sumDirectorySize(child), 0) + ((size <= 100000) ? size : 0)
}

// display(filesystem)
console.log(sumDirectorySize(filesystem))