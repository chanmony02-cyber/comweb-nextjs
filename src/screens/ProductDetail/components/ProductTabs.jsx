"use client";

import { useState } from "react";

const TABS = [
  { key: "description", label: "Description" },
  { key: "specification", label: "Specification" },
];

const formatSpecLabel = (label) =>
  label
    .replace(/([A-Z])/g, " $1")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .trim();

export function ProductTabs({
  description = "",
  features = [],
  scopeOfApplication = [],
  specs = {},
}) {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <section className="container py-10">
      <div className="rounded-xl border border-border bg-white overflow-hidden">
        {/* Tab buttons */}
        <div className="flex border-b border-border">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-3 text-lg font-semibold font-display transition-colors ${
                activeTab === tab.key
                  ? "border-b-2 border-navy text-navy"
                  : "text-muted-foreground hover:text-navy"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="p-6">
          {activeTab === "description" && (
            <div className="flex flex-col gap-5 text-md font-sans">
              {/* Product Overview */}
              <div>
                <h4 className="font-bold text-navy mb-1">Product Overview:</h4>
                <p className="text-primary-blue leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Product Features */}
              {features.length > 0 && (
                <div>
                  <h4 className="font-bold text-navy mb-1">
                    Product Features:
                  </h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Scope of Application */}
              {scopeOfApplication.length > 0 && (
                <div>
                  <h4 className="font-bold text-navy mb-1">
                    Scope of Application:
                  </h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {scopeOfApplication.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {activeTab === "specification" && (
            <div className="text-md font-sans">
              {Object.keys(specs).length > 0 ? (
                <table className="w-full border-collapse">
                  <tbody>
                    {Object.entries(specs).map(([key, value]) => (
                      <tr
                        key={key}
                        className="border-b border-border last:border-0"
                      >
                        <td className="py-3 pr-6 font-semibold text-navy w-40">
                          {formatSpecLabel(key)}
                        </td>
                        <td className="py-3 text-muted-foreground">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-muted-foreground">
                  No specifications available.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
