import {Matrix, NumberCell} from "@/types.ts";

function createBoard(width: number, height: number): Matrix {
  return Array(height).fill(NumberCell.Empty).map(() =>
         Array(width).fill(NumberCell.Empty));
}

export default createBoard;