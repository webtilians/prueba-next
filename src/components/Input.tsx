interface InputProps {
    label: string;
    type?: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  const Input: React.FC<InputProps> = ({
    label,
    type = "text",
    placeholder,
    value,
    onChange,
  }) => {
    return (
      <div>
        <label className="block text-sm font-medium text-black-700 mb-1">
          {label}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black-700"
        />
      </div>
    );
  };
  
  export default Input;
  