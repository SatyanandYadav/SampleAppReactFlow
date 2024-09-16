// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='dataFilter' label='Filter' />
                <DraggableNode type='api' label='API' />
                <DraggableNode type='tokenizer' label='Tokenizer' />
                <DraggableNode type='vectorStore' label='Vector Store' />
                <DraggableNode type='textEmbedding' label='Text Embedding' />
            </div>
        </div>
    );
};
