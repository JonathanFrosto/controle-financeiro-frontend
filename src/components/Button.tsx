import type { ReactNode } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
};

export default function Button({ children, ...props }: ButtonProps) {
    return (
        <button
            className="bg-white hover:bg-gray-200 transition-colors text-black py-1 cursor-pointer"
            {...props}
        >{children}
        </button>
    );
}