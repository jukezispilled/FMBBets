import React from 'react';

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-950">
      <div className="max-w-screen-xl mx-auto px-9">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-5xl mt-5 tracking-tight text-slate-200">
            FAQs
          </h2>
          <p className="text-slate-300 text-xl mt-5">
            Frequently asked questions
          </p>
        </div>
        <div className="grid divide-y divide-neutral-200 max-w-xl mt-3">
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-slate-300">Are there any type of refunds?</span>
                <span className="text-slate-300 transition group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-slate-400 mt-3 group-open:animate-fadeIn">
                There are no refunds. Some plays may have refund backing but that will be explicitly stated and is always at the discretion of FMB.
              </p>
            </details>
          </div>
          {/* ... Repeat for other FAQs ... */}
        </div>
      </div>
    </div>
  );
};

export default FAQ;