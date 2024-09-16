export const Select = ({ label, value, onChange, options = [] }) => {
  return (
    <label>
      {label}:
      <select value={value} onChange={onChange}>
        {options.map((option, index) => {
          return (
            <option key={index + option.id} value={option.value}>
              {option.value}
            </option>
          );
        })}
      </select>
    </label>
  );
};
