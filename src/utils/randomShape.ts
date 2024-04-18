import {Shape, ShapeNames} from "@/types.ts";
import {BOARD_WIDTH, SHAPES_MATRICES} from "@/constants.ts";

function randomShape(): Shape {
  const names = Object.values(ShapeNames);
  const name = names[Math.floor(Math.random() * names.length)];
  const matrix = SHAPES_MATRICES[name];
  return {
    name: name,
    matrix: matrix,
    x: BOARD_WIDTH / 2 - Math.ceil(matrix.length / 2),
    y: 0
  }
}

export default randomShape;