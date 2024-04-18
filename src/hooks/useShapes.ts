import {useContext, useEffect, useState} from "react";
import GameStateContext from "@/context/GameStateContext.ts";
import {Shape} from "@/types.ts";
import randomShape from "@/utils/randomShape.ts";
import {BOARD_WIDTH} from "@/constants.ts";



function useShapes() {
  const {gameState} = useContext(GameStateContext);
  const [shape, setShape] = useState<Shape>(randomShape());
  const [shapeShadow, setShapeShadow] = useState<Shape>(shape);
  const [nextShape, setNextShape] = useState<Shape>(randomShape());

  useEffect(() => {
    if (gameState.game && !gameState.gameOver) {
      setShape(randomShape());
      setNextShape(randomShape());
    }
  }, [gameState.game, gameState.gameOver]);


  useEffect(() => {
    if (shape.name === nextShape.name) {
      setNextShape(randomShape());
    }
  }, [nextShape]);

  function switchShapes() {
    setShape(nextShape);
    setNextShape(randomShape());
  }

  const moveShape = {
    left: (shape: Shape): Shape => ({...shape, x: shape.x - 1}),
    right: (shape: Shape): Shape => ({...shape, x: shape.x + 1}),
    drop: (shape: Shape): Shape => ({...shape, y: shape.y + 1}),
    rotate: (shape: Shape): Shape => {
      const matrix = shape.matrix[0].map((_, index) => shape.matrix.map(row => row[index]).reverse());
      let x = shape.x;

      if(x < 0) {
        x = 0
      } else if ((shape.x + matrix[0].length) >= BOARD_WIDTH) {
        x = (BOARD_WIDTH - matrix[0].length)
      }

      return { ...shape, matrix, x }
    },
    fullDrop: () => shapeShadow
  }


  return { shape, setShape, setShapeShadow, nextShape, switchShapes, moveShape };
}


export default useShapes;