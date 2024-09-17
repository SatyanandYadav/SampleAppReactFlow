export const Select = ({ label, value, onChange, options = [] }) => {
  return (
    <label>
      {label}:
      <select
        value={value}
        onChange={onChange}
        className=" font-nunito mt-2 block w-full py-1.5 px-3 text-base text-gray-700 border border-violet-300 shadow-[0_0_0_2px] shadow-violet-200 bg-white rounded-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:shadow-violet-200 sm:text-sm "
      >
        {options.map((option, index) => {
          return (
            <option
              key={index + option.id}
              value={option.value}
              className="text-base text-gray-700 bg-white font-nunito"
            >
              {option.value}
            </option>
          );
        })}
      </select>
    </label>
  );
};
