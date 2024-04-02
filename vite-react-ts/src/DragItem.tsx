import { useDrag } from "react-dnd";
import "./DragItem.css";

interface DragItemProps {
  label: string;
}

const DragItem = ({ label }: DragItemProps) => {
  const [collected, drag, dragPreview] = useDrag(() => ({
    type: "foo",
    item: {},
  }));
  return (
    <div className="DragItem" ref={drag}>
      {label}
    </div>
  );
};

export default DragItem;
