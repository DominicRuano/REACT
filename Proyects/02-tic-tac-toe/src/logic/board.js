import { WINNING_COMBINATIONS } from '../constants'

export const checkWinner = (boardToCheck) => {
    for (const combination of WINNING_COMBINATIONS) {
      const [a, b, c] = combination
      if (
        boardToCheck[a] && 
        boardToCheck[a] === boardToCheck[b] && 
        boardToCheck[a] === boardToCheck[c]) 
      {
        return boardToCheck[a]
      }
    }
    return null
}

export const checkEndGame = (boardToCheck) => {
  return boardToCheck.every((square) => square)
}