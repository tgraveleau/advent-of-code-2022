import fs from 'fs'

export const fileToArray = (pathname) => {
    return fs.readFileSync(pathname).toString().split("\r\n")
}
