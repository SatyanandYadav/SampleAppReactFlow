// textNode.js

import { useState } from "react";
import { BaseNode, Input, Label } from "../components";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode
      style={{ width: 200, height: 80, border: "1px solid black" }}
      outputs={[{ id: `${id}-output` }]}
      id={id}
    >
      <Label label="Text" />
      <div>
        <Input
          id="text-node"
          label="Text"
          value={currText}
          type="text"
          onChange={handleTextChange}
        />
      </div>
    </BaseNode>
  );
};
