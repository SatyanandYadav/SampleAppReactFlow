export const Input = ({
  id,
  label,
  type,
  value,
  onChange,
  placeholder = "",
}) => {
  return (
    <label htmlFor={id} className="block text-base font-medium text-black font-nunito">
      {label}:
      <input
        id={id}
        type={type || "text"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full mt-2 px-3 py-1.5 font-nunito text-sm text-gray-600 border border-violet-300 rounded-md shadow-[0_0_0_2px] shadow-violet-100 focus:outline-none focus:shadow-violet-200 focus:border-violet-500"
      />
    </label>
  );
};
