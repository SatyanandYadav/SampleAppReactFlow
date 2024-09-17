import React, { useState, useEffect, useCallback } from "react";
import { BaseNode, Label } from "../components";
import { TextArea } from "../components/TextArea";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [variables, setVariables] = useState([]);
  const [nodeSize, setNodeSize] = useState({ width: 200, height: 80 });

  const extractVariables = useCallback((text) => {
    const regex = /\{\{(\w+)\}\}/g;
    return [...new Set(text.match(regex) || [])].map((v) => v.slice(2, -2));
  }, []);

  useEffect(() => {
    const newVariables = extractVariables(currText);
    setVariables(newVariables);

    // Calculate new size based on text length
    const lines = currText.split("\n");
    const maxLineLength = Math.max(...lines.map((line) => line.length));
    const newWidth = Math.max(200, maxLineLength * 8); // Assuming 8px per character
    const newHeight = Math.max(80, lines.length * 25 + 40); // Assuming 20px line height + padding

    setNodeSize({ width: newWidth, height: newHeight });
  }, [currText, extractVariables]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode
      style={{ width: nodeSize.width }}
      outputs={[{ id: `${id}-output` }]}
      inputs={variables.map((variable) => ({
        id: `${id}-${variable}-input`,
      }))}
      id={id}
    >
      <Label label="Text" />
      <TextArea
        id="textarea-node"
        label="TextArea"
        value={currText}
        type="textarea"
        onChange={handleTextChange}
        style={{ width: "100%", height: `${nodeSize.height - 40}px` }}
      />
    </BaseNode>
  );
};
