import {GameBoard, NumberCell} from "@/types.ts";

function createBoard(width: number, height: number): GameBoard {
  return Array(height).fill(NumberCell.Empty).map(() =>
         Array(width).fill(NumberCell.Empty));
}

export default createBoard;