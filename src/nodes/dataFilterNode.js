import { useState } from "react";
import { BaseNode, Input, Label } from "../components";

export const DataFilterNode = ({ id, data }) => {
  const [condition, setCondition] = useState(
    data?.condition || "filter_condition"
  );

  const handleConditionChange = (e) => {
    setCondition(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      inputs={[{ id: `${id}-data` }]}
      outputs={[{ id: `${id}-data-filtered` }]}
      style={{ width: 200, height: 80, border: "1px solid black" }}
    >
      <Label label={"Data Filter"} />
      <Input
        id={"filter-node-condition"}
        type={"text"}
        value={condition}
        onChange={handleConditionChange}
        label="Filter Condition"
      />
    </BaseNode>
  );
};
