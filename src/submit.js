// submit.js

import { shallow } from "zustand/shallow";
import { useStore } from "./store";
import { axiosInstance } from "./api/axios";

export const SubmitButton = () => {
  const { nodes, edges } = useStore(
    (state) => ({ nodes: state.nodes, edges: state.edges }),
    shallow
  );

  const handleSubmit = async () => {
    try {
      const postData = {
        nodes,
        edges,
      };
      const endpoint = "/pipelines/parse";

      const response = await axiosInstance.post(endpoint, postData);

      const { num_nodes, num_edges, is_dag } = response.data;

      window.alert(`Pipeline Analysis:
          Number of nodes: ${num_nodes}
          Number of edges: ${num_edges}
          Is DAG: ${is_dag ? "Yes" : "No"}`);
    } catch (error) {
      window.alert(
        `Error: ${error.response?.data?.error || "Failed to analyze pipeline"}`
      );
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div
        className="w-max px-3 h-10 bg-white hover:bg-violet-100 hover:border-violet-500 border border-solid border-gray-400
      shadow-md shadow-gray-300 hover:shadow-violet-300
      flex items-center rounded-lg justify-center flex-col"
      >
        <button
          type="submit"
          className="text-black text-lg font-nunito font-medium hover:text-violet-700"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
