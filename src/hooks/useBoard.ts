import {useContext, useEffect, useState} from "react";
import isRowFull from "@/utils/isRowFull.ts";
import createBoard from "@/utils/createBoard.ts";
import {CellOptions, GameBoard, NumberCell, Shape} from "@/types";
import GameStateContext from "@/context/GameStateContext.ts";
import {BOARD_HEIGHT, BOARD_WIDTH} from "@/constants.ts";


function addShape(board: GameBoard, {matrix, x, y}: Shape, value: CellOptions) {
  matrix.forEach((row, rowIndex)=> {
    row.forEach((cell, colIndex) => {
      if (cell && board[y + rowIndex][x + colIndex] !== NumberCell.Dynamic) {
        board[y + rowIndex][x + colIndex] = value;
      }
    });
  });
  return board;
}

function removeShape(board: GameBoard, target: CellOptions): GameBoard {
  return board.map((row) => {
    return row.map((item) => {
      if (item === target) {
        return 0
      }
      return item;
    })
  });
}


function useBoard(shape: Shape) {
  const {gameState, updateGameCounters} = useContext(GameStateContext);
  const [board, setBoard] = useState<GameBoard>(createBoard(BOARD_WIDTH, BOARD_HEIGHT));


  useEffect(() => {
    if (gameState.game && !gameState.gameOver) {
      setBoard(createBoard(BOARD_WIDTH, BOARD_HEIGHT));
    }
  }, [gameState.game, gameState.gameOver]);


  useEffect(() => {
    if (gameState.game) {
      setBoard(prev => {
        prev = removeShape(prev, NumberCell.Dynamic)
        return addShape(prev, shape, NumberCell.Dynamic)
      });
    }
  }, [shape, gameState.game]);


  function addShadow(shapeShadow: Shape) {
    if (gameState.game) {
      setBoard(prev => {
        prev = removeShape(prev, NumberCell.Shadow)
        return addShape(prev, shapeShadow, NumberCell.Shadow)
      });
    }
  }


  function isValidMove(board: GameBoard ,{matrix, x, y}: Shape): boolean {
    return matrix.every((row, rowIndex) => {
      return row.every((cell, colIndex) => {
        return !(
          cell &&
          (x + colIndex < 0 || x + colIndex >= board[0].length ||
          y + rowIndex >= board.length ||
          typeof board[y + rowIndex][x + colIndex] === "string")
        )
      })
    })
  }


  function saveShape(board: GameBoard, shape: Shape): GameBoard {
    board = removeShape(board, NumberCell.Dynamic);
    board = addShape(board, shape, shape.name);

    let filledRows = 0;
    board.forEach((row, rowIndex) => {
      if (isRowFull(row)) {
        board.splice(rowIndex, 1);
        board.unshift(Array(BOARD_WIDTH).fill(NumberCell.Empty));
        filledRows += 1;
      }
    })

    updateGameCounters(filledRows)
    return board
  }

  return { board, setBoard, isValidMove, saveShape, addShadow };
}


export default useBoard;