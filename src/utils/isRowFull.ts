import {CellOptions} from "@/types.ts";

function isRowFull(row: CellOptions[]): boolean {
  for (let key of row) {
    if (typeof key !== "string") {
      return false;
    }
  }
  return true;
}

export default isRowFull;