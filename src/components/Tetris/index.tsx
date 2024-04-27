import {useContext, useEffect, useState} from "react";
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
  const {gameState, gameOver} = useContext(GameStateContext);
  const {shape, setShape, nextShape, switchShapes, moveShape} = useShapes();
  const [shapeShadow, setShapeShadow] = useState<Shape>();
  const {board, setBoard, isValidMove, saveShape, addShadow} = useBoard(shape);
  useKeyboardControls(getKeyboardControlsConfig());
  useInterval(gameTick, 1000);


  useEffect(() => {
    let newShapeShadow = shape;

    board.forEach(() => {
      const result = moveShape.drop(newShapeShadow)
      if (isValidMove(board, result)) {
        newShapeShadow = result;
      }
    })

    if (gameState.game) {
      setShapeShadow(newShapeShadow);
      addShadow(newShapeShadow);
    }
  }, [shape, gameState.game]);


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
    return [
      {
        codes: ["KeyA", "ArrowLeft"],
        callback: () => { checkMoveShape(moveShape.left(shape)) },
      },
      {
        codes: ["KeyD", "ArrowRight"],
        callback: () => { checkMoveShape(moveShape.right(shape)) },
      },
      {
        codes: ["KeyW", "ArrowUp"],
        callback: () => { checkMoveShape(moveShape.rotate(shape)) },
      },
      {
        codes: ["KeyS", "ArrowDown"],
        repeat: true,
        callback: () => { checkMoveShape(moveShape.drop(shape)) },
      },
      {
        codes: ["Space"],
        callback: () => {
          setBoard(prev => {
            const newShape = shapeShadow;
            if (newShape && isValidMove(prev, newShape)) {
              prev = saveShape(prev, newShape);
            }
            checkNextShape(prev, nextShape);
            return prev;
          })
        },
      },
    ]
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