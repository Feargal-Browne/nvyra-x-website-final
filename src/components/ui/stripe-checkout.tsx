'use client';

import { useState } from 'react';
import { redirectToCheckout } from '@/lib/api';

interface StripeCheckoutButtonProps {
    className?: string;
    children: React.ReactNode;
    disabled?: boolean;
}

export function StripeCheckoutButton({
    className,
    children,
    disabled = false
}: StripeCheckoutButtonProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleClick = async () => {
        try {
            setIsLoading(true);
            setError(null);
            await redirectToCheckout();
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to start checkout');
            setIsLoading(false);
        }
    };

    return (
        <div className="relative">
            <button
                onClick={handleClick}
                disabled={disabled || isLoading}
                className={className}
            >
                {isLoading ? (
                    <span className="flex items-center gap-2">
                        <svg
                            className="animate-spin h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>
                        Processing...
                    </span>
                ) : (
                    children
                )}
            </button>
            {error && (
                <p className="absolute top-full left-0 mt-1 text-xs text-red-400">
                    {error}
                </p>
            )}
        </div>
    );
}
