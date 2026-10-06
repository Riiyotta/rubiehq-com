import A from "../lib/A.jsx";
import usePageChrome from "../lib/usePageChrome.js";
import Z1020 from "../sections/Z1020.jsx";
import C15tUiRootHE9Kz from "../sections/C15tUiRootHE9Kz.jsx";


// Route /customers/bound — 2 section(s), in page order.
export default function CustomersBound() {
  usePageChrome({ title: "Bound Customer Story | Rubie", html: { "lang": "en" }, body: { "class": "geist_9e050971-module__05dp7a__className antialiased" } });
  return (
    <>
    <div hidden></div>
    <div className="relative isolate min-h-screen overflow-hidden bg-[rgb(var(--site-bg-rgb))] text-slate-950">
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-1/2 z-0 hidden w-full max-w-300 -translate-x-1/2 border-x border-[#E7EAEE] lg:block"></div>
      <Z1020 />
    </div>
    <next-route-announcer style={{ "position": "absolute" }}></next-route-announcer>
    <C15tUiRootHE9Kz />
    </>
  );
}
