import { Points, WinMapper, DrawMapper } from './helper.js'
import { fileToArray } from '../utils/file.js'
const data = fileToArray('data.txt')

console.log(data.reduce((score, round) => {
    const r = round.split(' '), enemySign = r[0], mySign = r[1]

    switch (true) {
        case DrawMapper[enemySign] == mySign:
            score += Points.DRAW 
            break
        case WinMapper[enemySign] == mySign:
            score += Points.WIN
            break
        case WinMapper[enemySign] != mySign:
            score += Points.LOSS
            break
        default:
            throw 'ERROR'
    }

    return score + Points[mySign]
}, 0))
