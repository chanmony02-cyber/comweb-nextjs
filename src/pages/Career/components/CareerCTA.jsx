// src/pages/Career/components/CareerCTA.jsx

import { Link } from "react-router-dom";

function HandshakeIcon() {
  return (
    <svg
      className="w-16 h-16 text-primary-blue"
      fill="none"
      viewBox="0 0 64 64"
      strokeWidth={1.5}
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Simple handshake SVG representation */}
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 28l-6 6 12 12 4-4M42 28l6 6-12 12-4-4M26 24l-4-4-8 8 4 4M38 24l4-4 8 8-4 4M26 24l6 4 6-4"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 20l6 4h16l6-4M16 22l-4 4 16 16 4-4M48 22l4 4-16 16-4-4"
      />
    </svg>
  );
}

export function CareerCTA({ text, buttonLabel, buttonHref }) {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Handshake icon */}
          <div className="text-primary-blue">
            <svg
              viewBox="0 0 24 24"
              className="w-20 h-16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Heroicons: Hand Thumb Up (Tailwind CSS icon set) */}
              <path d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
            </svg>
          </div>

          {/* Text */}
          <p className="text-md md:text-lg text-foreground leading-relaxed font-sans whitespace-pre-line max-w-2xl">
            {text}
          </p>

          {/* Button */}
          <Link
            to={buttonHref}
            className="inline-flex items-center justify-center px-8 py-2.5 border border-navy rounded-md text-md md:text-lg font-semibold text-navy hover:bg-primary-blue hover:border-primary-blue hover:text-white transition-colors font-display"
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
