import "./Campo.css";

const Campo = ({
  label,
  value,
  required,
  placeholder,
  setValue,
  type = "text",
}) => {
  return (
    <div className={`campo`}>
      <label>{label}</label>
      <input
        className={`campo-${type} `}
        type={type}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Campo;
