import {useEffect, useRef} from "react";


type KeyboardControlsConfigItem = {
  codes: string[],
  repeat?: boolean,
  callback: () => void
}
type KeyboardControlsConfig = KeyboardControlsConfigItem[];


function useKeyboardControls(keyDownConfig: KeyboardControlsConfig): void {
  const keyDownConfigRef = useRef<KeyboardControlsConfig>([]);


  useEffect(() => {
    keyDownConfigRef.current = keyDownConfig;
  }, [keyDownConfig]);


  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      keyDownConfigRef.current.forEach(item => {
        if (event.repeat && !item.repeat) {
          return;
        }
        if (item.codes.includes(event.code)) {
          item.callback()
        }
      })
    }


    document.addEventListener("keydown", handleKeyDown, true);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [])
}

export default useKeyboardControls;