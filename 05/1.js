import { fileToArray } from '../utils/file.js'
const data = fileToArray('data.txt')

// Get stacks
var i = 0, line = data[i], stacks = []
while (isNaN(line.split(' ')[0])) {
    line.match(/.{1,4}/g).forEach((c, index) => {
        const crate = c.trim().substring(1,2)
        if (crate != '') {
            if (stacks[index] === undefined) {
                stacks[index]  = []
            }
            stacks[index].unshift(crate)
        }
    })
    line = data[++i]
}

i += 2
// Process orders
var order = data[i]
while (order) {
    const o = order.split(' '),
        columnSource = o[3]-1,
        columnDest = o[5]-1
    var nbCratesToMove = o[1]

    while(nbCratesToMove > 0) {
        stacks[columnDest].push(stacks[columnSource].pop())
        nbCratesToMove--
    }

    order = data[++i]
}

console.log(stacks.reduce((res, stack) =>  res + stack.pop(), ''))