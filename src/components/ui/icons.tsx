import React from "react";

export function PlayStoreIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M5,20.5V3.5C5,2.91 5.31,2.44 5.76,2.2L13.88,10.61C14.07,10.82 14.16,11.08 14.16,11.36L14.28,11.5L5.75,21.8C5.3,21.56 5,21.09 5,20.5M14.62,11.75L17.76,14.89L6.53,22.04C6.53,22.04 7.22,21.6 7.22,21.6L14.62,11.75M17.76,9.11L14.62,12.25L7.22,2.4L18.47,8.81C18.66,8.9 18.75,9.03 18.75,9.11C18.76,9.11 18.66,9.24 18.47,9.33L17.76,9.11Z" />
        </svg>
    );
}
