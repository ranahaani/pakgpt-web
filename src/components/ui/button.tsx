import * as React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

// Note: Ensure you have class-variance-authority and @radix-ui/react-slot installed or remove Slot/cva if not using them.
// For simplicity in this landing page, I will use a direct implementation or I should install cva. 
// I'll install cva and radix-slot quickly or just write a simpler button for now to avoid overhead.
// Let's write a flexible button without extra deps for now to speed up, or just add them.
// Actually, "S-Grade" implies quality. I should use cva.

// Wait, I didn't install cva or radix slot. I'll stick to simple props for now to avoid more installs blocks.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "ghost" | "link" | "glow";
    size?: "default" | "sm" | "lg" | "icon";
    isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", isLoading, children, ...props }, ref) => {

        const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-95 transition-all duration-200";

        const variants = {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90 hover:shadow-emerald-500/25 hover:shadow-lg",
            outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
            ghost: "hover:bg-accent/10 hover:text-accent",
            link: "text-primary underline-offset-4 hover:underline",
            glow: "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] border border-emerald-400/20",
        };

        const sizes = {
            default: "h-10 px-6 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-12 rounded-lg px-8 text-lg font-semibold",
            icon: "h-9 w-9",
        };

        return (
            <button
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                ref={ref}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </button>
        );
    }
);
Button.displayName = "Button";

export { Button };
