'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import InnerLayout from "@/components/layout/InnerLayout";
import BreadcrumbSection from "@/components/breadcrumb/BreadcrumbSection";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <main className="rv-14-body">
      <InnerLayout>
        <BreadcrumbSection title="Error Occurred" />
        <div className="rv-404 rv-section-spacing text-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8 col-md-10">
                <img src="/assets/img/error.png" alt="Error image" onError={(e) => {
                  e.currentTarget.src = "/assets/img/404.png";
                }} />
                <h3 className="rv-404__title">Something went wrong!</h3>
                <p className="rv-404__sub-title">
                  We apologize for the inconvenience. An unexpected error has occurred.
                </p>
                <div className="d-flex justify-content-center gap-3 mt-4">
                  <button
                    onClick={() => reset()}
                    className="rv-3-def-btn"
                  >
                    Try again <i className="fa-regular fa-rotate-right"></i>
                  </button>
                  <Link href="/" className="rv-3-def-btn rv-404__btn">
                    Go Back to Homepage <i className="fa-regular fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </InnerLayout>
    </main>
  );
}
