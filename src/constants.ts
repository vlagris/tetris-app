import {ShapesMatrices} from "./types";

export const BOARD_HEIGHT = 20;
export const BOARD_WIDTH = 10;

export const SHAPES_MATRICES: ShapesMatrices = {
  "O":  [
    [true, true],
    [true, true],
  ],
  "I": [
    [false, false, false, false],
    [true, true, true, true],
    [false, false, false, false],
  ],
  "S": [
    [false, true, true],
    [true, true, false],
  ],
  "Z": [
    [true, true, false],
    [false, true, true],
  ],
  "J": [
    [true, false, false],
    [true, true, true],
    [false, false, false],
  ],
  "L": [
    [false, false, true],
    [true, true, true],
    [false, false, false],
  ],
  "T": [
    [false, true, false],
    [true, true, true],
    [false, false, false],
  ],
};