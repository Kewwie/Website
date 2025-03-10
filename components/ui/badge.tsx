import React from 'react';

interface BadgeProps {
    badgeKey?: string | null;
    className?: string;
    children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({
    badgeKey = null,
    className = "",
    children
}) => (
    <div 
        key={badgeKey || "badge"}
        className={`
            inline-flex 
            items-center 
            rounded-full 
            border 
            px-2.5 
            py-0.5 
            text-xs 
            font-semibold 
            transition-colors 
            focus:outline-none 
            focus:ring-2 
            focus:ring-ring 
            focus:ring-offset-2 
            border-transparent 
            bg-primary 
            text-primary-foreground 
            hover:bg-primary/80 
            ${className}
        `}
    >
        {children}
    </div>
);

export default Badge;
