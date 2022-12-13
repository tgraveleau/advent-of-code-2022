export const getSize = (filesystem) => {
    return (filesystem.children.length === 0) ? filesystem.size : filesystem.children.reduce((sum, child) => sum + getSize(child), 0)
}


export const display = (filesystem, offest = 0) => {
    filesystem.children.forEach(child => display(child, offest+1))
}
