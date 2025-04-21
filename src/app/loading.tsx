'use client';

import React from 'react';

export default function Loading() {
  return (
    <div className="global-loader">
      <div className="loader-container">
        <div className="loader-spinner">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        <p className="loader-text mt-3">Loading...</p>
      </div>
    </div>
  );
}
