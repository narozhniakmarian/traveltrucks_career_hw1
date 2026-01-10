'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { status?: number };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    const getStatus = () => {
        if ((error as any).status) return (error as any).status;
        if (error.message?.includes('status: ')) {
            const match = error.message.match(/status: (\d+)/);
            return match ? parseInt(match[1]) : null;
        }
        return null;
    };

    const status = getStatus();

    return (
        <div style={{
            padding: '100px 20px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px'
        }}>
            <h1 style={{ fontSize: '3rem', color: '#E44848' }}>
                Error {status || ''}
            </h1>

            <div style={{ fontSize: '1.2rem', color: '#475467' }}>
                {status === 429 && <p>Too many requests. The server is currently busy. Please try again in a few minutes.</p>}
                {status === 500 && <p>Internal server error. We're working on fixing it.</p>}
                {status === 404 && <p>The camper you are looking for does not exist.</p>}
                {!status && <p>Something went wrong while loading the camper data.</p>}
            </div>

            <button
                onClick={() => reset()}
                style={{
                    backgroundColor: '#E44848',
                    color: 'white',
                    padding: '12px 28px',
                    borderRadius: '200px',
                    border: 'none',
                    fontWeight: 500,
                    cursor: 'pointer',
                    fontSize: '1rem',
                    transition: 'background-color 0.2s'
                }}
            >
                Try again
            </button>
        </div>
    );
}
