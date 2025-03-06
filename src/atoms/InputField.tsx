import { Icon } from "./Icon";

type InputFieldProps = {
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputField: React.FC<InputFieldProps> = ({
  className = "",
  type = "text",
  ...props
}) => {
  return (
    <form className="relative">
      <input
        {...props}
        type={type}
        className={`w-72 px-4 py-2 pl-10 text-sm rounded-md border border-border-light dark:border-border-dark bg-transparent dark:bg-[#121212] text-main-text-light dark:text-main-text-dark focus:ring-1 focus:ring-primary focus:outline-none ${className}`}
      />
      <Icon
        className="absolute top-0 bottom-0 m-auto left-3 text-main-text-light dark:text-main-text-dark"
        icon="material-symbols:search"
      />
    </form>
  );
};

export default InputField;
