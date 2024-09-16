import { Handle, Position } from "reactflow";

export const BaseNode = ({
  style,
  id,
  inputs = [],
  outputs = [],
  children,
}) => {
  return (
    <div style={style}>
      {children}
      {inputs.map((input, index) => {
        return (
          <Handle
            key={`${input.id}-${index}`}
            type={"target"}
            position={Position.Left}
            id={input.id || `${id}-${index}`}
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
