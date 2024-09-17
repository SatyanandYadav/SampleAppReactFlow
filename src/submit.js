// submit.js

export const SubmitButton = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div
        className="w-max px-3 h-10 bg-white hover:bg-violet-100 hover:border-violet-500 border border-solid border-gray-400
      shadow-md shadow-gray-300 hover:shadow-violet-300
      flex items-center rounded-lg justify-center flex-col"
      >
        <button type="submit" className="text-black text-lg font-nunito font-medium hover:text-violet-700">
          Submit
        </button>
      </div>
    </div>
  );
};
