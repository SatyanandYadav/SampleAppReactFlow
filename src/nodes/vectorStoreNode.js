import { useState } from "react";
import { BaseNode, Input, Label, Select } from "../components";
import { vectorStoreTypeNodeSelectOptions } from "../config/vectorStoreNode";

export const VectorStoreNode = ({ id, data }) => {
  const [storeType, setStoreType] = useState(data?.storeType || "pinecone");

  const handleStoreModelChange = (e) => {
    setStoreType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      inputs={[{ id: `${id}-vector` }, { id: `${id}-metadata` }]}
      outputs={[{ id: `${id}-status` }]}
      style={{ width: 200, height: 80, border: "1px solid black" }}
    >
      <Label label="Vector Store" />
      <Select
        value={storeType}
        onChange={handleStoreModelChange}
        label={"Vector store Type"}
        options={vectorStoreTypeNodeSelectOptions}
      />
    </BaseNode>
  );
};
