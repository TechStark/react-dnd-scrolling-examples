import React from "react";
import { useDrag } from "react-dnd";
import "./DragItem.css";

const DragItem = ({ label }) => {
  const [collected, drag, dragPreview] = useDrag(() => ({
    type: "foo",
    item: { label },
  }));
  return (
    <div className="DragItem" ref={drag}>
      {label}
    </div>
  );
};

export default DragItem;
