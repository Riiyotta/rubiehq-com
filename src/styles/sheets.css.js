// The original page loads five Next.js CSS chunks, in this order, on every route:
//   2r5ddwv2tfda4, 02a8m4f7uta4g, 26q47yst6un5i, 070qw7tj6fqrv, 0t_3oprhl6_y8
// (verified against recon/mirror/src/*/index.html — all 21 routes link all five).
// The clone previously imported only the first two, so 18KB of real rules never
// loaded and most of the page rendered unstyled.
import "./01-2r5ddwv2tfda4.css";
import "./02-02a8m4f7uta4g.css";
import "./03-26q47yst6un5i.css";
import "./04-070qw7tj6fqrv.css";
import "./05-0t_3oprhl6_y8.css";
// Inline <style> blocks the original emits in <head>, after the chunks.
import "./inline-01.css";
import "./inline-02.css";
// Clone-local overrides last, so they win.
import "./clone.css";
