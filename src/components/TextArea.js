import React from "react";

export const TextArea = ({
  id,
  label,
  value,
  onChange,
  placeholder = "",
  style,
}) => {
  return (
    <label
      htmlFor={id}
      className="block text-base font-medium text-black font-nunito"
    >
      {label}:
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={style}
        className="w-full mt-2 px-3 py-1.5 font-nunito text-sm text-gray-600 border border-violet-300 rounded-md shadow-[0_0_0_2px] shadow-violet-100 focus:outline-none focus:shadow-violet-200 focus:border-violet-500 resize-y"
      />
    </label>
  );
};
