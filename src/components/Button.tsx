import { IconType } from "react-icons";

interface BrimaryButtonProps {
    text: string;
    Icon: IconType;
    type?: "button" | "submit" | "reset" | undefined;
    disabled? : boolean;
    reverse?: boolean;
    color?: boolean;
    classes?: string;
}
const Button = ({ text, Icon, type, reverse, color, classes, disabled }:BrimaryButtonProps) => {
  return (
    <button 
      disabled={disabled}
      type={type || 'button'}
      className={`${classes} flex ${reverse && 'flex-row-reverse'} items-center justify-center gap-3 px-4 py-2 rounded-full  text-medium1 ${color ? 'bg-cc-white hover:bg-cc-red text-cc-dark hover:text-cc-white' : 'text-cc-white bg-cc-red hover:bg-cc-dark'} shadow-type2 transition-colors duration-150`}>
        <Icon />
        <span>{text}</span>
    </button>
  );
}

export default Button;