// llmNode.js

import { Position } from "reactflow";
import { BaseNode, Label } from "../components";

export const LLMNode = ({ id, data }) => {
  const outputHandles = [
    {
      id: `${id}-response`,
    },
  ];

  const inputHandles = [
    {
      id: `${id}-system`,
    },
    {
      id: `${id}-prompt`,
    },
  ];

  return (
    <BaseNode
      inputs={inputHandles}
      outputs={outputHandles}
      id={id}
    >
      <Label label={"LLM"} />
      <Label label={"This is a LLM."} />
    </BaseNode>
  );
};
