import { Square } from "./square"

export function Board ({ board, updateBoard }) {
  return (
    board.map((_, index) => {
        return (
          <Square 
            key={index} 
            index={index}
            updateBoard={updateBoard}
          >
            {board[index]}
          </Square>
        )
      })
  )
}