export const Input = ({ id, label, type, value, onChange }) => {
  return (
    <label htmlFor={id}>
      {label}:
      <input id={id} type={type || "text"} value={value} onChange={onChange} />
    </label>
  );
};
