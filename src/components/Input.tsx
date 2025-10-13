

export default function Input({className = "", ...props}: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            className={`border rounded py-1 px-2 ${className}`}
            {...props}
        />);
}