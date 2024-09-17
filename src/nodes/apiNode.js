import { useState } from "react";
import { BaseNode, Input, Label, Select } from "../components";
import { apiNodeSelectOptions } from "../config/apiNode";

export const APINode = ({ id, data }) => {
  const [url, setUrl] = useState(data?.url || "");
  const [method, setMethod] = useState(data?.method || "GET");

  const handleEndpointUrlChange = (e) => {
    setUrl(e.target.value);
  };
  const handleEndpointMethodChange = (e) => {
    setMethod(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      inputs={[{ id: `${id}-params` }]}
      outputs={[{ id: `${id}-response` }]}
    >
      <Label label="API Request" />
      <Input
        id="api-endoint-url"
        type="text"
        value={url}
        onChange={handleEndpointUrlChange}
        label={"Endpoint Url"}
        placeholder="API URL"
      />
      <Select
        value={method}
        onChange={handleEndpointMethodChange}
        label={"Endpoint Method"}
        options={apiNodeSelectOptions}
      />
    </BaseNode>
  );
};
