import { Handle, Position } from "reactflow";

export const BaseNode = ({
  style,
  id,
  inputs = [],
  outputs = [],
  children,
}) => {
  return (
    <div className="transform -translate-y-1/2 flex flex-col justify-center gap-2 bg-white rounded-lg w-60 p-3 border border-solid border-violet-500 shadow-[0_0_0_2px] shadow-violet-200">
      {children}
      {inputs.map((input, index) => {
        return (
          <Handle
            key={`${input.id}-${index}`}
            type={"target"}
            position={Position.Left}
            id={input.id || `${id}-${index}`}
            className="!bg-violet-700 !h-2 !w-2 !shadow-[0_0_0_1px] !shadow-violet-200"
            style={
              input.style || {
                top: `${((index + 1) * 100) / (inputs.length + 1)}%`,
              }
            }
          />
        );
      })}
      {outputs.map((output, index) => {
        return (
          <Handle
            key={`${output.id}-${index}`}
            type={"source"}
            position={Position.Right}
            id={output.id || `${id}-${index}`}
            className="!bg-violet-700 !h-2 !w-2 !shadow-[0_0_0_1px] !shadow-violet-200"
            style={
              output.style || {
                top: `${((index + 1) * 100) / (outputs.length + 1)}%`,
              }
            }
          />
        );
      })}
    </div>
  );
};
