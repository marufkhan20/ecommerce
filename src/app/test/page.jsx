"use client";
import Draggable from "react-draggable"; // The default

const Page = () => {
  const eventLogger = (e, data) => {
    console.log("Event: ", e);
    console.log("Data: ", data);
  };
  return (
    <div>
      <Draggable
        axis="x"
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[25, 25]}
        scale={1}
      >
        <div className="handle">
          <div>Drag from here</div>
          <div>This readme is really dragging on...</div>
        </div>
      </Draggable>
    </div>
  );
};

export default Page;
