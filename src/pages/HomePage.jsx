import A from "../lib/A.jsx";
import usePageChrome from "../lib/usePageChrome.js";
import Z10 from "../sections/Z10.jsx";
import C15tUiRootHE9Kz from "../sections/C15tUiRootHE9Kz.jsx";
import css0 from "../styles/03-26q47yst6un5i.css?inline"; // only this page loads it

// Route / — 2 section(s), in page order.
export default function HomePage() {
  usePageChrome({ title: "Rubie | Rip and Replace Your Competition", html: { "lang": "en" }, body: { "class": "geist_9e050971-module__05dp7a__className antialiased" } });
  return (
    <>
      <style>{css0}</style>
    <div hidden></div>
    <div className="relative isolate min-h-screen overflow-hidden bg-[rgb(var(--site-bg-rgb))] text-slate-950">
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-1/2 z-0 hidden w-full max-w-300 -translate-x-1/2 border-x border-[#E7EAEE] lg:block"></div>
      <Z10 />
    </div>
    <next-route-announcer style={{ "position": "absolute" }}></next-route-announcer>
    <C15tUiRootHE9Kz />
    </>
  );
}
