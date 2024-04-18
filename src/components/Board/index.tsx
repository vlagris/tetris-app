import Cell from "@components/Cell";
import {CellOptions, GameBoard, NumberCell, Shape, ShapeNames} from "@/types.ts";
import Panel from "@components/RightSidebar/Panel.tsx";

interface BoardProps {
  board: GameBoard,
  shape: Shape,
}

function Board({board, shape}: BoardProps) {

  const cellClass =  {
    [ShapeNames.O]: "cell-type-O",
    [ShapeNames.I]: "cell-type-I",
    [ShapeNames.S]: "cell-type-S",
    [ShapeNames.Z]: "cell-type-Z",
    [ShapeNames.J]: "cell-type-J",
    [ShapeNames.L]: "cell-type-L",
    [ShapeNames.T]: "cell-type-T",
    [NumberCell.Empty]: "cell-empty",
    [NumberCell.Shadow]: "cell-shadow",
    [NumberCell.Dynamic]: `cell-type-${shape.name}`,
  }

  return (
    <div className="board">
      <Panel>
        {board.map((row: CellOptions[], rowIndex: number) => (
          <div className="row" key={rowIndex}>

            {row.map((cell: CellOptions, colIndex: number) => (
              <Cell key={`${rowIndex}${colIndex}`} className={cellClass[cell]}/>
            ))}

          </div>
        ))}
      </Panel>
    </div>
  );
}

export default Board;