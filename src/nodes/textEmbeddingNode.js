import { useState } from "react";
import { BaseNode, Label, Select } from "../components";
import { textEmbbeddingModelNodeSelectOptions } from "../config/textEmbeddingNode";

export const TextEmbeddingNode = ({ id, data }) => {
  const [model, setModel] = useState(data?.model || "text-embedding-ada-002");

  const handleModelChange = (e) => {
    setModel(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      inputs={[{ id: `${id}-text` }]}
      outputs={[{ id: `${id}-embedding` }]}
      style={{ width: 200, height: 80, border: "1px solid black" }}
    >
      <Label label="Text Embedding" />
      <Select
        value={model}
        onChange={handleModelChange}
        label={"Text Embedding Model"}
        options={textEmbbeddingModelNodeSelectOptions}
      />
    </BaseNode>
  );
};
