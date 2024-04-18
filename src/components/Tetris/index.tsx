import {useContext, useEffect} from "react";
import {GameBoard, Shape} from "@/types.ts";
import GameStateContext from "@/context/GameStateContext.ts";
import useShapes from "@/hooks/useShapes.ts";
import useBoard from "@/hooks/useBoard.ts";
import useInterval from "@/hooks/useInterval";
import useKeyboardControls from "@/hooks/useKeyboardControls.ts";
import LeftSidebar from "@components/LeftSidebar";
import Board from "@components/Board";
import RightSidebar from "@components/RightSidebar";



function Tetris() {
  const {gameOver} = useContext(GameStateContext);
  const {
    shape,
    setShape,
    setShapeShadow,
    nextShape,
    switchShapes,
    moveShape
  } = useShapes();
  const {board, setBoard, isValidMove, saveShape, addShadow} = useBoard(shape);
  useKeyboardControls(getKeyboardControlsConfig());
  useInterval(gameTick, 1000);


  useEffect(() => {
    let newShapeShadow = shape;

    board.forEach(() => {
      const intermediateResult = moveShape.drop(newShapeShadow)
      if (isValidMove(board, intermediateResult)) {
        newShapeShadow = intermediateResult;
      }
    })
    setShapeShadow(newShapeShadow);
    addShadow(newShapeShadow);
  }, [shape]);


  function checkNextShape(board: GameBoard, nextShape: Shape) {
    if (isValidMove(board, nextShape)) {
      switchShapes();
    }
    else {
      gameOver()
    }
  }


  function gameTick(): void {
    setBoard(prev => {
      const newShape = moveShape.drop(shape);

      if (isValidMove(prev, newShape)) {
        setShape(newShape);
        return prev;
      } else {
        prev = saveShape(prev, shape);
      }

      checkNextShape(prev, nextShape);
      return prev;
    })
  }


  function checkMoveShape(newShape: Shape) {
    setBoard(prev => {
      if (isValidMove(prev, newShape)) {
        setShape(newShape)
      }
      return prev;
    })
  }


  function getKeyboardControlsConfig() {
    return {
      left: () => { checkMoveShape(moveShape.left(shape)) },
      right: () => { checkMoveShape(moveShape.right(shape)) },
      rotate: () => { checkMoveShape(moveShape.rotate(shape)) },
      drop: () => { checkMoveShape(moveShape.drop(shape)) },
      fullDrop: () => {
        setBoard(prev => {
          const newShape = moveShape.fullDrop();
          if (isValidMove(prev, newShape)) {
            prev = saveShape(prev, newShape);
          }

          checkNextShape(prev, nextShape);
          return prev;
        })
      }
    }
  }


  return (
    <div className="tetris">
      <div className="tetris-wrap">
        <LeftSidebar/>
        <Board board={board} shape={shape}/>
        <RightSidebar nextShape={nextShape}/>
      </div>
    </div>
  );
}

export default Tetris;