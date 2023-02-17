import React from "react";
import { useDragLayer } from "react-dnd";
import "./DragPreview.css";

const DragPreview = () => {
  const { item, offset } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    offset: monitor.getClientOffset(),
  }));

  return (
    <div className="DragPreview">
      {item && (
        <div
          className="DragPreview__item"
          style={{
            position: "absolute",
            top: offset.y,
            left: offset.x,
          }}
        >
          {item.label}
        </div>
      )}
    </div>
  );
};

export default DragPreview;
