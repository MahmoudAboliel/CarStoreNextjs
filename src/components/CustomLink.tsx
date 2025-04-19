import Link from "next/link";
import { IconType } from "react-icons";

interface LinkProps {
    label: string;
    href: string;
    Icon?: IconType;
    classes?: string;
}
const CustomLink = ({ label, href, Icon, classes }:LinkProps) => {
  return (
    <Link 
        className={`${classes} bg-cc-red text-cc-white py-2 px-4 flex gap-2 items-center text-small capitalize font-semibold rounded-full hover:bg-cc-dark transition-colors duration-150`}
        href={href}>
        <span>{label}</span>
        {Icon && <Icon />}
    </Link>
  );
}

export default CustomLink;