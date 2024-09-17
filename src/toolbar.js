// toolbar.js

import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div className="p-3">
      <div className="mt-5 flex flex-wrap gap-3">
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="dataFilter" label="Filter" />
        <DraggableNode type="api" label="API" />
        <DraggableNode type="tokenizer" label="Tokenizer" />
        <DraggableNode type="vectorStore" label="Vector Store" />
        <DraggableNode type="textEmbedding" label="Text Embedding" />
      </div>
    </div>
  );
};
