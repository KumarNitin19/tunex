import Button from "./Button";

type IconButtonProps = {
  className: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton: React.FC<IconButtonProps> = ({
  className = "",
  ...props
}) => {
  return (
    <Button
      variant="text"
      className={`px-0 py-0 h-10 w-10 hidden md:flex items-center justify-center !text-main-text-light dark:!text-main-text-dark hover:text-foreground shrink-0 rounded-full bg-transparent dark:bg-transparent hover:bg-[#00000017] dark:hover:!bg-[#ffffff17] ${className}`}
      {...props}
    />
  );
};

export default IconButton;
