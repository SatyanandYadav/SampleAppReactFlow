// outputNode.js

import { useState } from "react";
import { BaseNode, Label, Input, Select } from "../components";
import { outputNodeSelectOptions } from "../config/outputNode";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <BaseNode
      inputs={[{ id: `${id}-value` }]}
      id={id}
    >
      <Label label={"Output"} />
        <Input
          id="output-node-name"
          label="Name"
          type="text"
          value={currName}
          onChange={handleNameChange}
        />
        <Select
          label={"Type"}
          value={outputType}
          onChange={handleTypeChange}
          options={outputNodeSelectOptions}
        />
    </BaseNode>
  );
};
