"use client";
import Challenge from "@/components/about/Challenge.mdx";
import Inspiration from "@/components/about/Inspiration.mdx";
import Idea from "@/components/about/Idea.mdx";
import Execution from "@/components/about/Execution.mdx";
export default function AboutAccordion() {
  return (
    <>
      <details name="case-study" className="mt-16 cursor-default">
        <summary>Challenge</summary>
        <div className="details-content">
          <Challenge />
        </div>
      </details>
      <details name="case-study" className="mt-8">
        <summary>Inspiration</summary>
        <div className="details-content">
          <Inspiration />
        </div>
      </details>
      <details name="case-study" className="mt-8">
        <summary>Idea</summary>

        <div className="details-content">
          <Idea />
        </div>
      </details>
      <details name="case-study" className="mt-8">
        <summary>Execution</summary>

        <div className="details-content">
          <Execution />
        </div>
      </details>
    </>
  );
}
