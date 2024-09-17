// draggableNode.js

import { cn } from "./utils/cn";

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={cn(
        type,
        `cursor-grab min-w-20 px-3 h-14 bg-gradient-to-r from-[#f1eef4] to-[#e9eef6] border border-solid border-gray-400
        shadow-md shadow-gray-300
        flex items-center rounded-lg justify-center flex-col`
      )}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      draggable
    >
      <span className="text-black text-lg font-nunito">{label}</span>
    </div>
  );
};
