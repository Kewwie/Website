import React from 'react';

interface BadgeProps {
    className?: string;
    children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({
    className = "",
    children
}) => (
    <div
        className={`
            inline-flex 
            items-center 
            justify-center 
            whitespace-nowrap 
            rounded-full 
            text-xs 
            font-semibold 
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
            text-zinc-300
            border-zinc-700 
            border 
            px-2.5 
            py-0.5
            ${className}
        `}
    >
        {children}
    </div>
);

export default Badge;
