import Panel from "@components/RightSidebar/Panel.tsx";

function Counter({title, value}: {title: string, value: number}) {

  return (
    <div className="counter">
      <Panel>
        <h3 className="counter-title">
          {title}
        </h3>
        <p className="counter-value">
          {value}
        </p>
      </Panel>
    </div>
  );
}


export default Counter;