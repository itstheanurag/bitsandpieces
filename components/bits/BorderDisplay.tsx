"use client";

import React, { useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { borderStyles } from "./borders";

const BorderDisplay: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (style: any, index: number) => {
    const content = (
      <div className={style.innerClass}>
        <p className="text-white font-semibold">Your Content Here</p>
      </div>
    );

    const codeSnippet = renderToStaticMarkup(
      <div className={style.outerClass}>
        {style.contentWrapper ? style.contentWrapper(content) : content}
      </div>
    );

    navigator.clipboard.writeText(codeSnippet).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">
          Modern Border Styles Library
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {borderStyles.map((style, index) => (
            <div key={index} className="relative group">
              <div className={style.outerClass}>
                {style.contentWrapper ? (
                  style.contentWrapper(
                    <div className={style.innerClass}>
                      <p className="text-white font-semibold">{style.name}</p>
                      <p className="text-gray-400 text-sm">
                        Border style #{index}
                      </p>
                    </div>
                  )
                ) : (
                  <div className={style.innerClass}>
                    <p className="text-white font-semibold">{style.name}</p>
                    <p className="text-gray-400 text-sm">
                      Border style #{index}
                    </p>
                  </div>
                )}
              </div>
              <div className="absolute top-2 right-2">
                <button
                  onClick={() => handleCopy(style, index)}
                  className="bg-slate-700 text-white px-2 py-1 rounded-md text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BorderDisplay;
