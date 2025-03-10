import React from 'react';

interface ButtonProps {
    className?: string;
    children: React.ReactNode;
}

const ButtonStyle: React.FC<ButtonProps> = ({
    className = "",
    children
}) => (
    <div 
        className={`
            inline-flex 
            items-center 
            justify-center 
            whitespace-nowrap 
            rounded-3xl 
            text-sm 
            font-medium 
            ring-offset-background 
            transition-colors 
            focus-visible:outline-none 
            focus-visible:ring-2 
            focus-visible:ring-ring 
            focus-visible:ring-offset-2 
            disabled:pointer-events-none 
            disabled:opacity-50 
            bg-gradient-to-br 
            from-zinc-700 
            to-zinc-900 
            text-zinc-100 
            hover:from-zinc-600 
            hover:to-zinc-800 
            border 
            border-zinc-800 
            glow-sm 
            px-4 
            py-2
            ${className}
        `}
    >
        {children}
    </div>
);

export default ButtonStyle;