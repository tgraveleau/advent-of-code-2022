import { Points, WinMapper, DrawMapper, LossMapper, OutcomeMapper } from './helper.js'
import { fileToArray } from '../utils/file.js'
const data = fileToArray('data.txt')

console.log(data.reduce((score, round) => {
    const r = round.split(' '), enemySign = r[0], outcome = r[1]

    switch(outcome) {
        case 'X':
            score += Points[LossMapper[enemySign]]
            break
        case 'Y':
            score += Points[DrawMapper[enemySign]]
            break
        case 'Z':
            score += Points[WinMapper[enemySign]]
            break
        default:
            throw 'ERROR'
    }

    return score + Points[OutcomeMapper[outcome]]
}, 0))
