// inputNode.js

import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode, Select, Input, Label } from "../components";
import { inputNodeSelectOptions } from "../config/inputNode";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <BaseNode
      style={{ width: 200, height: 80, border: "1px solid black" }}
      outputs={[{ id: `${id}-value` }]}
      id={id}
    >
      <Label label="Input" />
      <div>
        <Input
          id="input-node-name"
          label="Name"
          type="text"
          value={currName}
          onChange={handleNameChange}
        />
        <Select
          label={"Type"}
          value={inputType}
          onChange={handleTypeChange}
          options={inputNodeSelectOptions}
        />
      </div>
    </BaseNode>
  );
};
