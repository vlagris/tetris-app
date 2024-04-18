import Panel from "@components/RightSidebar/Panel.tsx";
import {Shape} from "@/types.ts";
import Cell from "@components/Cell";

function NextShape({shape}: {shape: Shape | null}) {

  return (
    <Panel>
      <div className="next-shape">

        {shape?.matrix.map((row: boolean[], rowIndex: number) => (
          <div className="row" key={rowIndex}>
            {row.map((cell: boolean, colIndex: number) => (
              <Cell key={`${rowIndex}${colIndex}`} className={cell? `cell-type-${shape?.name}` : "cell-empty"}/>
            ))}
          </div>
        ))}

      </div>
    </Panel>
  );
}


export default NextShape;