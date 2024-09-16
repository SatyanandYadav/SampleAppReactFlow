import { useState } from "react";
import { BaseNode, Label, Select } from "../components";
import { tokenizerModelNodeSelectOptions } from "../config/tokenizerNode";

export const TokenizerNode = ({ id, data }) => {
  const [model, setModel] = useState(data?.model || "gpt-3.5-turbo");

  const handleModelChange = (e) => {
    setModel(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      data={{ label: "Tokenizer" }}
      inputs={[{ id: `${id}-text` }]}
      outputs={[{ id: `${id}-tokens` }, { id: `${id}-token-count` }]}
      style={{ width: 200, height: 80, border: "1px solid black" }}
    >
      <Label label="Tokenizer" />
      <Select
        value={model}
        onChange={handleModelChange}
        label={"Models"}
        options={tokenizerModelNodeSelectOptions}
      />
    </BaseNode>
  );
};
