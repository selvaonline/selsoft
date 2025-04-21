"use client";

import React from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          textAlign: 'center',
          padding: '20px',
          fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'
        }}>
          <div style={{ maxWidth: '600px' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#333' }}>Something went wrong!</h1>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#666' }}>
              We apologize for the inconvenience. An unexpected error has occurred at the application level.
            </p>
            <div>
              <button
                onClick={() => reset()}
                style={{
                  backgroundColor: '#0d6efd',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  marginRight: '10px'
                }}
              >
                Try again
              </button>
              <a
                href="/"
                style={{
                  backgroundColor: '#6c757d',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  fontSize: '1rem',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
              >
                Go to Homepage
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
