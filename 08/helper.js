export const isVisible = (forest, x, y, xLength, yLength) => {
    let i, isVisible = true

    // 1
    for (i = 0; i < x; i++) {
        if (forest[i][y] >= forest[x][y]) {
            isVisible = false
            break
        }
    }
    if (isVisible) {
        return true
    } else {
        isVisible = true
    }

    // 2
    for (i = (xLength-1); i > x; i--) {
        if (forest[i][y] >= forest[x][y]) {
            isVisible = false
            break
        }
    }
    if (isVisible) {
        return true
    } else {
        isVisible = true
    }

    // 3
    for (i = 0; i < y; i++) {
        if (forest[x][i] >= forest[x][y]) {
            isVisible = false
            break
        }
    }
    if (isVisible) {
        return true
    } else {
        isVisible = true
    }

    // 4
    for (i = (yLength-1); i > y; i--) {
        if (forest[x][i] >= forest[x][y]) {
            isVisible = false
            break
        }
    }

    return isVisible
}

export const scenicScore = (forest, x, y, xLength, yLength) => {
    let i, score1 = 0, score2 = 0, score3 = 0, score4 = 0

    // 1
    for (i = (x+1); i < xLength; i++) {
        score1++
        if (forest[i][y] >= forest[x][y]) {
            break
        }
    }

    // 2
    for (i = (x-1); i >= 0; i--) {
        score2++
        if (forest[i][y] >= forest[x][y]) {
            break
        }
    }

    // 3
    for (i = (y+1); i < yLength; i++) {
        score3++
        if (forest[x][i] >= forest[x][y]) {
            break
        }
    }

    // 4
    for (i = (y-1); i >= 0; i--) {
        score4++
        if (forest[x][i] >= forest[x][y]) {
            break
        }
    }

    return score1 * score2 * score3 * score4
}
