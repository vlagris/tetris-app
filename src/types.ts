export enum NumberCell {
  Empty = 0,
  Dynamic = 1,
  Shadow = 2,
}
export enum ShapeNames {
  O = "O",
  I = "I",
  S = "S",
  Z = "Z",
  J = "J",
  L = "L",
  T = "T",
}

export type CellOptions = (ShapeNames | NumberCell);
export type GameBoard = CellOptions[][];
export type ShapeMatrix = boolean[][];

export type Shape =  {
  name: ShapeNames
  matrix: ShapeMatrix,
  x: number,
  y: number
}

export type ShapesMatrices =  {
  [key in ShapeNames]: ShapeMatrix
}

export enum ModalState {
  none,
  startGame,
  gameOver,
  pause,
}

export type GameState = {
  game: boolean,
  modalState: ModalState,
  scope: number,
  level: number,
  lines: number,
}

