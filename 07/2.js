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

const filesystemSize = getSize(filesystem), SIZE_NEEDED = 30000000 - (70000000 - filesystemSize)

var sizeOfDirectoriyToDelete = filesystemSize
function recursive(filesystem) {
    if (filesystem.children.length === 0) {
        return
    }
    const size = getSize(filesystem)
    if (size >= SIZE_NEEDED && size < sizeOfDirectoriyToDelete) {
        sizeOfDirectoriyToDelete = size
    }
    filesystem.children.forEach(child => recursive(child))
}
recursive(filesystem)

console.log(sizeOfDirectoriyToDelete)