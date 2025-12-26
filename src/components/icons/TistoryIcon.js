import React from 'react';

const TistoryIcon = ({ className }) => {
    return (
        <svg 
            className={className}
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect 
                x="3" 
                y="3" 
                width="6" 
                height="6" 
                rx="1" 
                stroke="currentColor" 
                strokeWidth="1.5"
                fill="none"
            />
            <rect 
                x="15" 
                y="3" 
                width="6" 
                height="6" 
                rx="1" 
                stroke="currentColor" 
                strokeWidth="1.5"
                fill="none"
            />
            <rect 
                x="3" 
                y="15" 
                width="6" 
                height="6" 
                rx="1" 
                stroke="currentColor" 
                strokeWidth="1.5"
                fill="none"
            />
            <rect 
                x="15" 
                y="15" 
                width="6" 
                height="6" 
                rx="1" 
                stroke="currentColor" 
                strokeWidth="1.5"
                fill="none"
            />
        </svg>
    );
};

export default TistoryIcon;

