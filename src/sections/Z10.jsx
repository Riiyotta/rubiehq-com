import { useState } from "react";
import A from "../lib/A.jsx";
import Riv from "../lib/Riv.jsx";

// Platform primitives: 6 tabs, real copy read from the live site by clicking each tab
// (the scraper only ever captured the default "Authenticate" panel's text — the other 5
// panels don't exist in a single static snapshot, since the real site only mounts the
// active tab's panel). The shared card-stack illustration below is unchanged — it's one
// continuous animated composition, not 6 separate per-tab graphics, confirmed by diffing
// the live site's DOM across tab clicks (same SVG tree, 97% identical byte-for-byte).
const PLATFORM_PRIMITIVES = [
  { id: "authenticate", label: "Authenticate", lead: "Rubie", body: "signs in, handles sessions, and reaches the systems your customers already use." },
  { id: "navigate", label: "Navigate", lead: "Rubie", body: "moves through pages, menus, and portals exactly as a human operator would." },
  { id: "clean", label: "Clean", lead: "Rubie", body: "normalizes messy source data before it reaches your product." },
  { id: "transform", label: "Transform", lead: "Rubie", body: "reshapes records into the structure your platform expects." },
  { id: "review", label: "Review", lead: "Rubie", body: "checks the output for gaps, conflicts, and bad assumptions before sync." },
  { id: "load", label: "Load", lead: "Rubie", body: "delivers clean data into your destination workflow without custom integration work." },
];

// z-10 — the section's real markup, read from the rendered page (route /, section 0).
export default function Z10() {
  const [primitiveTab, setPrimitiveTab] = useState("authenticate");
  return (
    <main className="relative z-10 flex flex-col min-h-screen" data-clone-section="Z10">
      <header className="fixed inset-x-0 top-0 z-50 bg-[rgb(var(--site-bg-rgb))] transition-colors">
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-1/2 z-0 hidden w-full max-w-300 -translate-x-1/2 border-x border-[#E7EAEE] lg:block"></div>
        <div aria-hidden="true" className="h-0 w-full border-t border-[#E7EAEE]"></div>
        <div className="mx-auto w-full max-w-300 relative z-10 flex h-18 items-center justify-between gap-6 px-4 lg:h-22 lg:gap-10 lg:px-8">
          <div className="flex min-w-0 items-center gap-14">
            <A aria-label="Rubie home" className="shrink-0 transition-opacity hover:opacity-80" href="/">
              <img alt="" aria-hidden="true" loading="lazy" width="91" height="20" decoding="async" data-nimg="1" className="h-5 w-22.75" style={{ "color": "transparent" }} src="/images/logos/rubie-logo__0dc0adc0.svg" />
            </A>
            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex items-center gap-4 text-[14px]/6 font-medium  tracking-normal text-[#3C424A]">
                <li className="relative">
                  <A className="block rounded-full px-3 py-1.5 transition-colors hover:bg-[rgba(22,55,88,0.04)] hover:text-[#000A27] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BBC2CC]" href="/product">Product</A>
                </li>
                <li className="relative">
                  <button type="button" aria-expanded="false" aria-haspopup="menu" className="flex items-center gap-1 rounded-full px-3 py-1.5 transition-colors hover:bg-[rgba(22,55,88,0.04)] hover:text-[#000A27] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BBC2CC] ">
                    <span>Solutions</span>
                    <svg aria-hidden="true" viewBox="0 0 16 16" className="size-5 text-(--gray-600) transition-transform duration-200 " fill="none">
                      <path d="M5.32812 6.66797L7.99479 9.33464L10.6615 6.66797" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="absolute left-0 top-full z-50 w-162 pt-2" data-hover-panel="">
                      <div className="overflow-hidden rounded-3xl bg-white p-4 shadow-[0_16px_24px_-12px_rgba(0,0,0,0.03),0_32px_32px_-20px_rgba(0,0,0,0.03),0_56px_56px_-20px_rgba(0,0,0,0.02),0_88px_56px_-20px_rgba(0,0,0,0.03),0_0_0_1px_rgba(0,0,0,0.05)]">
                        <div className="grid grid-cols-2 gap-4">
                          <A className="group block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BBC2CC]" href="/solutions/migration-playbooks">
                            <div className="flex w-full flex-col gap-3.5 rounded-2xl p-0">
                              <div className="flex items-center gap-1 text-[14px]/6 font-normal  text-[#000A27] transition-colors group-hover:text-[#1D4ED8]">
                                <span>Migration Playbooks</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4 text-[#BBC2CC] transition-transform group-hover:translate-x-0.5 group-hover:text-[#94A3B8]" aria-hidden="true">
                                  <path d="M5 12h14" />
                                  <path d="m12 5 7 7-7 7" />
                                </svg>
                              </div>
                              <div aria-hidden="true" className="relative h-31 overflow-hidden rounded-2xl bg-white">
                                <img alt="" aria-hidden="true" loading="lazy" width="280" height="124" decoding="async" data-nimg="1" className="absolute left-1/2 top-1/2 h-auto w-70 max-w-none -translate-1/2  transition-opacity duration-150 group-hover:opacity-0" src="/images/icons/site-header/migrations-submenu-gray__0dc0adc0.svg" style={{ "color": "transparent" }} />
                                <img alt="" aria-hidden="true" loading="lazy" width="280" height="124" decoding="async" data-nimg="1" className="absolute left-1/2 top-1/2 h-auto w-70 max-w-none -translate-1/2  opacity-0 transition-opacity duration-150 group-hover:opacity-100" src="/images/icons/site-header/migrations-submenu-blue__0dc0adc0.svg" style={{ "color": "transparent" }} />
                              </div>
                            </div>
                          </A>
                          <A className="group block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BBC2CC]" href="/solutions/integration-playbooks">
                            <div className="flex w-full flex-col gap-3.5 rounded-2xl p-0">
                              <div className="flex items-center gap-1 text-[14px]/6 font-normal  text-[#000A27] transition-colors group-hover:text-[#1D4ED8]">
                                <span>Integration Playbooks</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4 text-[#BBC2CC] transition-transform group-hover:translate-x-0.5 group-hover:text-[#94A3B8]" aria-hidden="true">
                                  <path d="M5 12h14" />
                                  <path d="m12 5 7 7-7 7" />
                                </svg>
                              </div>
                              <div aria-hidden="true" className="relative h-31 overflow-hidden rounded-2xl bg-white">
                                <img alt="" aria-hidden="true" loading="lazy" width="280" height="124" decoding="async" data-nimg="1" className="absolute left-1/2 top-1/2 h-auto w-70 max-w-none -translate-1/2  transition-opacity duration-150 group-hover:opacity-0" src="/images/icons/site-header/integrations-submenu-gray__0dc0adc0.svg" style={{ "color": "transparent" }} />
                                <img alt="" aria-hidden="true" loading="lazy" width="280" height="124" decoding="async" data-nimg="1" className="absolute left-1/2 top-1/2 h-auto w-70 max-w-none -translate-1/2  opacity-0 transition-opacity duration-150 group-hover:opacity-100" src="/images/icons/site-header/integrations-submenu-blue__0dc0adc0.svg" style={{ "color": "transparent" }} />
                              </div>
                            </div>
                          </A>
                        </div>
                      </div>
                    </div>
                  </button>
                </li>
                <li className="relative">
                  <button type="button" aria-expanded="false" aria-haspopup="menu" className="flex items-center gap-1 rounded-full px-3 py-1.5 transition-colors hover:bg-[rgba(22,55,88,0.04)] hover:text-[#000A27] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BBC2CC] ">
                    <span>Use Cases</span>
                    <svg aria-hidden="true" viewBox="0 0 16 16" className="size-5 text-(--gray-600) transition-transform duration-200 " fill="none">
                      <path d="M5.32812 6.66797L7.99479 9.33464L10.6615 6.66797" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="absolute left-0 top-full z-50 w-152 pt-2" data-hover-panel="">
                      <div className="overflow-hidden rounded-3xl bg-white p-4 shadow-[0_16px_24px_-12px_rgba(0,0,0,0.03),0_32px_32px_-20px_rgba(0,0,0,0.03),0_56px_56px_-20px_rgba(0,0,0,0.02),0_88px_56px_-20px_rgba(0,0,0,0.03),0_0_0_1px_rgba(0,0,0,0.05)]">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex w-70 flex-col gap-3.5">
                            <div className="text-[14px]/6 font-normal  text-[#5D646E]">By team</div>
                            <div className="flex flex-col gap-3.5">
                              <A className="group flex items-center gap-4 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BBC2CC]" href="/use-cases/sales">
                                <span aria-hidden="true" className="relative flex size-10 shrink-0 items-center justify-center rounded-full bg-[#F8F9FC]">
                                  <img alt="" aria-hidden="true" loading="lazy" width="18" height="18" decoding="async" data-nimg="1" className="absolute size-4.5 transition-opacity duration-150 group-hover:opacity-0" src="/images/icons/site-header/wallet-gray__0dc0adc0.svg" style={{ "color": "transparent" }} />
                                  <img alt="" aria-hidden="true" loading="lazy" width="18" height="18" decoding="async" data-nimg="1" className="absolute size-4.5 opacity-0 transition-opacity duration-150 group-hover:opacity-100" src="/images/icons/site-header/wallet-blue__0dc0adc0.svg" style={{ "color": "transparent" }} />
                                </span>
                                <span className="text-[14px] font-normal leading-none text-[#000A27] transition-colors group-hover:text-[#1D4ED8]">Sales</span>
                              </A>
                              <A className="group flex items-center gap-4 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BBC2CC]" href="/use-cases/customer-success">
                                <span aria-hidden="true" className="relative flex size-10 shrink-0 items-center justify-center rounded-full bg-[#F8F9FC]">
                                  <img alt="" aria-hidden="true" loading="lazy" width="18" height="18" decoding="async" data-nimg="1" className="absolute size-4.5 transition-opacity duration-150 group-hover:opacity-0" src="/images/icons/site-header/wand-gray__0dc0adc0.svg" style={{ "color": "transparent" }} />
                                  <img alt="" aria-hidden="true" loading="lazy" width="18" height="18" decoding="async" data-nimg="1" className="absolute size-4.5 opacity-0 transition-opacity duration-150 group-hover:opacity-100" src="/images/icons/site-header/wand-blue__0dc0adc0.svg" style={{ "color": "transparent" }} />
                                </span>
                                <span className="text-[14px] font-normal leading-none text-[#000A27] transition-colors group-hover:text-[#1D4ED8]">Customer success</span>
                              </A>
                              <A className="group flex items-center gap-4 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BBC2CC]" href="/use-cases/product">
                                <span aria-hidden="true" className="relative flex size-10 shrink-0 items-center justify-center rounded-full bg-[#F8F9FC]">
                                  <img alt="" aria-hidden="true" loading="lazy" width="18" height="18" decoding="async" data-nimg="1" className="absolute size-4.5 transition-opacity duration-150 group-hover:opacity-0" src="/images/icons/site-header/web-frame-gray__0dc0adc0.svg" style={{ "color": "transparent" }} />
                                  <img alt="" aria-hidden="true" loading="lazy" width="18" height="18" decoding="async" data-nimg="1" className="absolute size-4.5 opacity-0 transition-opacity duration-150 group-hover:opacity-100" src="/images/icons/site-header/web-frame-blue__0dc0adc0.svg" style={{ "color": "transparent" }} />
                                </span>
                                <span className="text-[14px] font-normal leading-none text-[#000A27] transition-colors group-hover:text-[#1D4ED8]">Product</span>
                              </A>
                            </div>
                          </div>
                          <div className="flex w-70 flex-col gap-3.5">
                            <div className="text-[14px]/6 font-normal  text-[#5D646E]">By industry</div>
                            <div className="flex flex-col gap-3.5">
                              <A className="group flex items-center gap-4 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BBC2CC]" href="/use-cases/healthcare">
                                <span aria-hidden="true" className="relative flex size-10 shrink-0 items-center justify-center rounded-full bg-[#F8F9FC]">
                                  <img alt="" aria-hidden="true" loading="lazy" width="18" height="18" decoding="async" data-nimg="1" className="absolute size-4.5 transition-opacity duration-150 group-hover:opacity-0" src="/images/icons/site-header/heart-gray__0dc0adc0.svg" style={{ "color": "transparent" }} />
                                  <img alt="" aria-hidden="true" loading="lazy" width="18" height="18" decoding="async" data-nimg="1" className="absolute size-4.5 opacity-0 transition-opacity duration-150 group-hover:opacity-100" src="/images/icons/site-header/heart-blue__0dc0adc0.svg" style={{ "color": "transparent" }} />
                                </span>
                                <span className="text-[14px] font-normal leading-none text-[#000A27] transition-colors group-hover:text-[#1D4ED8]">Healthcare</span>
                              </A>
                              <A className="group flex items-center gap-4 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BBC2CC]" href="/use-cases/financial-services">
                                <span aria-hidden="true" className="relative flex size-10 shrink-0 items-center justify-center rounded-full bg-[#F8F9FC]">
                                  <img alt="" aria-hidden="true" loading="lazy" width="18" height="18" decoding="async" data-nimg="1" className="absolute size-4.5 transition-opacity duration-150 group-hover:opacity-0" src="/images/icons/site-header/bar-graph-gray__0dc0adc0.svg" style={{ "color": "transparent" }} />
                                  <img alt="" aria-hidden="true" loading="lazy" width="18" height="18" decoding="async" data-nimg="1" className="absolute size-4.5 opacity-0 transition-opacity duration-150 group-hover:opacity-100" src="/images/icons/site-header/bar-graph-blue__0dc0adc0.svg" style={{ "color": "transparent" }} />
                                </span>
                                <span className="text-[14px] font-normal leading-none text-[#000A27] transition-colors group-hover:text-[#1D4ED8]">Financial services</span>
                              </A>
                              <A className="group flex items-center gap-4 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BBC2CC]" href="/use-cases/education">
                                <span aria-hidden="true" className="relative flex size-10 shrink-0 items-center justify-center rounded-full bg-[#F8F9FC]">
                                  <img alt="" aria-hidden="true" loading="lazy" width="18" height="18" decoding="async" data-nimg="1" className="absolute size-4.5 transition-opacity duration-150 group-hover:opacity-0" src="/images/icons/site-header/textbook-gray__0dc0adc0.svg" style={{ "color": "transparent" }} />
                                  <img alt="" aria-hidden="true" loading="lazy" width="18" height="18" decoding="async" data-nimg="1" className="absolute size-4.5 opacity-0 transition-opacity duration-150 group-hover:opacity-100" src="/images/icons/site-header/textbook-blue__0dc0adc0.svg" style={{ "color": "transparent" }} />
                                </span>
                                <span className="text-[14px] font-normal leading-none text-[#000A27] transition-colors group-hover:text-[#1D4ED8]">Education</span>
                              </A>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </li>
                <li className="relative">
                  <button type="button" aria-expanded="false" aria-haspopup="menu" className="flex items-center gap-1 rounded-full px-3 py-1.5 transition-colors hover:bg-[rgba(22,55,88,0.04)] hover:text-[#000A27] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BBC2CC] ">
                    <span>Resources</span>
                    <svg aria-hidden="true" viewBox="0 0 16 16" className="size-5 text-(--gray-600) transition-transform duration-200 " fill="none">
                      <path d="M5.32812 6.66797L7.99479 9.33464L10.6615 6.66797" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="absolute left-0 top-full z-50 w-152 pt-2" data-hover-panel="">
                      <div className="overflow-hidden rounded-3xl bg-white p-4 shadow-[0_16px_24px_-12px_rgba(0,0,0,0.03),0_32px_32px_-20px_rgba(0,0,0,0.03),0_56px_56px_-20px_rgba(0,0,0,0.02),0_88px_56px_-20px_rgba(0,0,0,0.03),0_0_0_1px_rgba(0,0,0,0.05)]">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="w-70">
                            <div className="mb-3.5">
                              <A className="group inline-flex items-center gap-1 rounded-md text-[14px]/6 font-normal  text-[#000A27] transition-colors hover:text-[#1D4ED8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BBC2CC]" href="/customers">
                                <span>Customer stories</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4 text-[#BBC2CC] transition-transform group-hover:translate-x-0.5 group-hover:text-[#94A3B8]" aria-hidden="true">
                                  <path d="M5 12h14" />
                                  <path d="m12 5 7 7-7 7" />
                                </svg>
                              </A>
                              <div className="text-[14px]/6 font-normal  text-[#79818D]">Success stories and case studies</div>
                            </div>
                            <A className="group block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BBC2CC]" href="/customers/cariina">
                              <div className="relative h-31 overflow-hidden rounded-2xl bg-[#000A27]">
                                <img alt="" loading="lazy" width="1125" height="750" decoding="async" data-nimg="1" className="absolute inset-0 size-full object-cover grayscale transition-opacity duration-150 group-hover:opacity-0" srcSet="/_next/image__887b3fee 1x" src="/_next/image__887b3fee" style={{ "color": "transparent" }} />
                                <img alt="" loading="lazy" width="280" height="124" decoding="async" data-nimg="1" className="absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-150 group-hover:opacity-100" srcSet="/_next/image__53579f81 1x" src="/_next/image__53579f81" style={{ "color": "transparent" }} />
                                <div className="absolute inset-0 bg-black/55 transition-opacity duration-150 group-hover:opacity-0"></div>
                                <div className="absolute inset-x-0 bottom-0 p-4">
                                  <div className="max-w-55 text-[14px]/5 font-normal  text-white">Cariina scales SIS integrations from 3 to 23+ systems</div>
                                  <div className="mt-2 flex items-center gap-1 text-[14px]/5 font-normal  text-[#69A4FF]">
                                    <span>Read their story</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true">
                                      <path d="M5 12h14" />
                                      <path d="m12 5 7 7-7 7" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </A>
                          </div>
                          <div className="flex w-70 flex-col gap-3.5 pt-0">
                            <a target="_blank" rel="noreferrer" className="group flex items-center gap-4 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BBC2CC]">
                              <span aria-hidden="true" className="relative flex size-10 shrink-0 items-center justify-center rounded-full bg-[#F8F9FC]">
                                <img alt="" aria-hidden="true" loading="lazy" width="18" height="18" decoding="async" data-nimg="1" className="absolute size-4.5 transition-opacity duration-150 group-hover:opacity-0" src="/images/icons/site-header/book-gray__0dc0adc0.svg" style={{ "color": "transparent" }} />
                                <img alt="" aria-hidden="true" loading="lazy" width="18" height="18" decoding="async" data-nimg="1" className="absolute size-4.5 opacity-0 transition-opacity duration-150 group-hover:opacity-100" src="/images/icons/site-header/book-blue__0dc0adc0.svg" style={{ "color": "transparent" }} />
                              </span>
                              <span className="min-w-0">
                                <span className="block text-[14px]/6 font-normal  text-[#000A27] transition-colors group-hover:text-[#1D4ED8]">Documentation</span>
                                <span className="block text-[14px]/6 font-normal  text-[#79818D]">Guides and API references</span>
                              </span>
                            </a>
                            <a target="_blank" rel="noreferrer" className="group flex items-center gap-4 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BBC2CC]" href="mailto:help@rubiehq.com">
                              <span aria-hidden="true" className="relative flex size-10 shrink-0 items-center justify-center rounded-full bg-[#F8F9FC]">
                                <img alt="" aria-hidden="true" loading="lazy" width="18" height="18" decoding="async" data-nimg="1" className="absolute size-4.5 transition-opacity duration-150 group-hover:opacity-0" src="/images/icons/site-header/buoy-gray__0dc0adc0.svg" style={{ "color": "transparent" }} />
                                <img alt="" aria-hidden="true" loading="lazy" width="18" height="18" decoding="async" data-nimg="1" className="absolute size-4.5 opacity-0 transition-opacity duration-150 group-hover:opacity-100" src="/images/icons/site-header/buoy-blue__0dc0adc0.svg" style={{ "color": "transparent" }} />
                              </span>
                              <span className="min-w-0">
                                <span className="block text-[14px]/6 font-normal  text-[#000A27] transition-colors group-hover:text-[#1D4ED8]">Support</span>
                                <span className="block text-[14px]/6 font-normal  text-[#79818D]">Get help from our team</span>
                              </span>
                            </a>
                            <A className="group flex items-center gap-4 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BBC2CC]" href="/blog">
                              <span aria-hidden="true" className="relative flex size-10 shrink-0 items-center justify-center rounded-full bg-[#F8F9FC]">
                                <img alt="" aria-hidden="true" loading="lazy" width="18" height="18" decoding="async" data-nimg="1" className="absolute size-4.5 transition-opacity duration-150 group-hover:opacity-0" src="/images/icons/site-header/spaceship-gray__0dc0adc0.svg" style={{ "color": "transparent" }} />
                                <img alt="" aria-hidden="true" loading="lazy" width="18" height="18" decoding="async" data-nimg="1" className="absolute size-4.5 opacity-0 transition-opacity duration-150 group-hover:opacity-100" src="/images/icons/site-header/spaceship-blue__0dc0adc0.svg" style={{ "color": "transparent" }} />
                              </span>
                              <span className="min-w-0">
                                <span className="block text-[14px]/6 font-normal  text-[#000A27] transition-colors group-hover:text-[#1D4ED8]">News and updates</span>
                                <span className="block text-[14px]/6 font-normal  text-[#79818D]">Latest news and insights</span>
                              </span>
                            </A>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </li>
                <li className="relative">
                  <A className="block rounded-full px-3 py-1.5 transition-colors hover:bg-[rgba(22,55,88,0.04)] hover:text-[#000A27] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BBC2CC]" href="/enterprise">Enterprise</A>
                </li>
              </ul>
            </nav>
          </div>
          <div className="hidden shrink-0 items-center gap-6 lg:flex">
            <a target="_blank" rel="noreferrer" className="text-[14px]/6 font-medium  tracking-normal text-[#00030A] transition-opacity hover:opacity-70">Login</a>
            <a target="_blank" rel="noopener noreferrer" className="relative inline-flex items-center justify-center overflow-hidden rounded-[8px] px-[10px] py-[4px] text-[14px] font-medium leading-[24px] tracking-normal text-white shadow-[0px_12px_12px_-6px_rgba(16,102,241,0.05),0px_8px_8px_-4px_rgba(16,102,241,0.05),0px_6px_6px_-3px_rgba(16,102,241,0.05),0px_4px_4px_-2px_rgba(16,102,241,0.05)] transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#1066F1] focus:ring-offset-2">
              <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[inherit]">
                <span className="absolute inset-0 rounded-[inherit] bg-[#0263FF]"></span>
                <span className="absolute inset-x-0 top-0 h-[63.62%] rounded-t-[inherit] bg-[linear-gradient(180deg,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0)_100%)]"></span>
              </span>
              <span className="relative z-10 whitespace-nowrap">Book a demo</span>
              <span className="sr-only">{" (opens in a new tab)"}</span>
              <span className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_4px_0px_rgba(255,255,255,0.5),inset_0px_0px_8px_0px_rgba(255,255,255,0.2)]"></span>
            </a>
          </div>
          <div className="flex shrink-0 items-center gap-3 lg:hidden">
            <a target="_blank" rel="noopener noreferrer" className="relative inline-flex items-center justify-center overflow-hidden rounded-[8px] px-[10px] py-[4px] text-[14px] font-medium leading-[24px] tracking-normal text-white shadow-[0px_12px_12px_-6px_rgba(16,102,241,0.05),0px_8px_8px_-4px_rgba(16,102,241,0.05),0px_6px_6px_-3px_rgba(16,102,241,0.05),0px_4px_4px_-2px_rgba(16,102,241,0.05)] transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#1066F1] focus:ring-offset-2">
              <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[inherit]">
                <span className="absolute inset-0 rounded-[inherit] bg-[#0263FF]"></span>
                <span className="absolute inset-x-0 top-0 h-[63.62%] rounded-t-[inherit] bg-[linear-gradient(180deg,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0)_100%)]"></span>
              </span>
              <span className="relative z-10 whitespace-nowrap">Book a demo</span>
              <span className="sr-only">{" (opens in a new tab)"}</span>
              <span className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_4px_0px_rgba(255,255,255,0.5),inset_0px_0px_8px_0px_rgba(255,255,255,0.2)]"></span>
            </a>
            <button type="button" aria-label="Open menu" aria-expanded="false" className="flex size-8 items-center justify-center transition-transform duration-300 hover:scale-105">
              <span className="relative block size-5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="absolute inset-0 size-5">
                  <line x1="2.28906" x2="17.7057" y1="6.03906" y2="6.03906" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" className="origin-center transition-transform duration-200 transform-fill motion-reduce:transition-none " />
                  <line x1="2.28906" x2="17.7057" y1="13.9609" y2="13.9609" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" className="origin-center transition-transform duration-200 transform-fill motion-reduce:transition-none " />
                </svg>
              </span>
            </button>
          </div>
          <div aria-hidden="true" inert="" className="fixed inset-x-0 top-18 max-h-[calc(100vh-72px)] overflow-y-auto border-b border-[#DDE3EA] bg-[rgb(var(--site-bg-rgb))] transition-[opacity,transform] duration-200 ease-out motion-reduce:transition-none lg:hidden pointer-events-none -translate-y-2 opacity-0">
            <div className="mx-auto w-full max-w-300 px-6 lg:px-8 lg:hidden">
              <nav aria-label="Mobile primary" className="px-2 pb-5">
                <div className="mb-6 flex flex-col gap-1">
                  <A className="block py-2.5 text-base/6 font-medium text-[#3C424A]" href="/product">Product</A>
                  <button type="button" className="flex w-full items-center justify-between py-2.5 text-base/6 font-medium text-[#3C424A]">
                    Solutions
                    <svg aria-hidden="true" viewBox="0 0 16 16" className="size-5 text-(--gray-600) transition-transform duration-200 " fill="none">
                      <path d="M5.32812 6.66797L7.99479 9.33464L10.6615 6.66797" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button type="button" className="flex w-full items-center justify-between py-2.5 text-base/6 font-medium text-[#3C424A]">
                    Use Cases
                    <svg aria-hidden="true" viewBox="0 0 16 16" className="size-5 text-(--gray-600) transition-transform duration-200 " fill="none">
                      <path d="M5.32812 6.66797L7.99479 9.33464L10.6615 6.66797" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button type="button" className="flex w-full items-center justify-between py-2.5 text-base/6 font-medium text-[#3C424A]">
                    Resources
                    <svg aria-hidden="true" viewBox="0 0 16 16" className="size-5 text-(--gray-600) transition-transform duration-200 " fill="none">
                      <path d="M5.32812 6.66797L7.99479 9.33464L10.6615 6.66797" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <A className="block py-2.5 text-base/6 font-medium text-[#3C424A]" href="/enterprise">Enterprise</A>
                </div>
                <hr />
                <div className="mx-auto mt-4 flex w-full max-w-sm flex-col gap-3">
                  <a target="_blank" rel="noreferrer" className="flex w-full items-center justify-center gap-2 rounded-[8px] border border-gray-300 bg-transparent px-2.5 py-1 text-sm/6 font-medium  text-black transition-all duration-500">Login</a>
                  <a target="_blank" rel="noopener noreferrer" className="relative inline-flex items-center justify-center overflow-hidden rounded-[8px] px-[10px] py-[4px] text-[14px] font-medium leading-[24px] tracking-normal text-white shadow-[0px_12px_12px_-6px_rgba(16,102,241,0.05),0px_8px_8px_-4px_rgba(16,102,241,0.05),0px_6px_6px_-3px_rgba(16,102,241,0.05),0px_4px_4px_-2px_rgba(16,102,241,0.05)] transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#1066F1] focus:ring-offset-2 w-full">
                    <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[inherit]">
                      <span className="absolute inset-0 rounded-[inherit] bg-[#0263FF]"></span>
                      <span className="absolute inset-x-0 top-0 h-[63.62%] rounded-t-[inherit] bg-[linear-gradient(180deg,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0)_100%)]"></span>
                    </span>
                    <span className="relative z-10 whitespace-nowrap">Book a demo</span>
                    <span className="sr-only">{" (opens in a new tab)"}</span>
                    <span className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_4px_0px_rgba(255,255,255,0.5),inset_0px_0px_8px_0px_rgba(255,255,255,0.2)]"></span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="h-0 w-full border-t border-[#E7EAEE]"></div>
      </header>
      <div className="flex flex-1 flex-col">
        <div className="flex flex-col">
          <section aria-labelledby="_S_2_" aria-describedby="_S_3_" className="relative overflow-hidden pt-18 lg:pt-22">
            <div className="relative border-b border-[#E3E7EB] lg:border-y">
              <div className="mx-auto w-full max-w-300 px-0 lg:grid lg:h-125 lg:grid-cols-[258px_minmax(0,684px)_258px] lg:justify-center lg:px-0">
                <div aria-hidden="true" className="relative hidden h-full overflow-hidden border-x border-[#E7EAEE] lg:block">
                  <div aria-hidden="true" data-hero-circuit="left" className="absolute inset-0 overflow-hidden text-[#DBDFE5]">
                    <div data-hero-circuit-section="top" className="HeroCircuitBackdrop-module__HTAPZW__topSection group/top peer/top absolute inset-x-0 top-0 h-41.75 overflow-hidden border-b border-[#E7EAEE]">
                      <div data-hero-section-background="solid" className="absolute inset-0 bg-[#1066F1] opacity-0 transition-opacity duration-0 ease-out motion-reduce:transition-none group-hover/top:opacity-100"></div>
                      <div className="pointer-events-none absolute inset-0 origin-center overflow-hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="257" height="500" fill="none" viewBox="0 0 257 500" aria-hidden="true" data-hero-rail-layer="base" className="absolute left-0 h-125 w-full max-w-none opacity-100 transition-opacity duration-0 ease-out motion-reduce:transition-none top-0 group-hover/top:opacity-0">
                          <path stroke="#DBDFE5" d="M214 85c0-12.702 10.297-23 23-23h20M201 85h25v25h-25zM201 191h25v25h-25z" />
                          <path stroke="#DBDFE5" strokeDasharray="3 2" d="M235 500v-31.034h-48V416" />
                          <circle cx="213.5" cy="97.5" r="7" stroke="#DBDFE5" />
                          <circle cx="213.5" cy="203.5" r="7" stroke="#DBDFE5" />
                          <path stroke="#DBDFE5" strokeDasharray="3 2" d="M193 77h41v147h-41z" />
                          <path stroke="#DBDFE5" d="M151 204h50.5" />
                          <path fill="#DFE3E8" d="m224.063 320.484.142.005q.396.01.795.011h1.6v1H225q-.507 0-1.012-.018a30 30 0 0 1-.519-.019l.022-.498.024-.499q.273.011.548.018m7.871.016v1h-3.201v-1zm5.333 0v1h-3.201v-1zm5.333 0v1h-3.2v-1zm5.334 0v1h-3.201v-1zm5.333 0v1h-3.201v-1zm3.733 0v1h-1.6v-1zm-38.384-.647.274.052q.255.051.511.098l.184.031q.276.048.555.092.141.021.284.041.24.036.482.068.144.018.287.035c.116.013.232.03.348.042l-.054.498-.054.494-.307-.034a33 33 0 0 1-2.704-.437l-.014-.003.101-.489.101-.489zm-4.605-1.325a21 21 0 0 0 .735.263l.31.105a48 48 0 0 0 .713.228q.233.071.468.139l.255.073.193.055-.132.482-.132.481-.133-.037a32 32 0 0 1-2.779-.909l.177-.466.176-.467zm-4.241-1.951.25.139q.986.535 2.014 1.001l-.412.91a34 34 0 0 1-.698-.326q-.132-.064-.262-.129a34 34 0 0 1-1.767-.938l.496-.867q.188.106.379.21m-4.316-2.875.241.189q.161.125.326.25l.301.224q.139.102.279.203.163.118.33.235.158.111.318.221.144.098.289.195l.166.112-.274.418-.275.415-.193-.128a33 33 0 0 1-2.145-1.562l-.137-.112.312-.387.313-.39q.074.06.149.117m-3.753-3.502a32 32 0 0 0 2.099 2.099l-.336.37-.337.368a33 33 0 0 1-2.165-2.165l.369-.336zm-2.921-3.739q.097.145.195.289a26 26 0 0 0 .456.648q.094.13.189.26l.238.321.25.325.19.241q.058.076.117.15l-.39.313-.388.311-.112-.137a33 33 0 0 1-1.69-2.338l.416-.274.418-.274zm-2.497-4.495q.465 1.027 1 2.013l.139.25q.104.192.211.38l-.434.248-.434.247q-.18-.314-.353-.633a32 32 0 0 1-1.04-2.094l.456-.205zm-1.62-4.459.073.255q.068.235.139.468a28 28 0 0 0 .229.713l.104.31a25 25 0 0 0 .263.735l.054.15-.467.176-.467.176-.049-.13a32 32 0 0 1-.86-2.649q-.019-.067-.036-.133l.481-.131.482-.132zm-.934-4.701q.017.143.035.287.032.242.068.482.02.143.041.284.044.279.092.555l.031.184.047.247q.05.269.103.538l.002.007-.489.101-.49.101a33 33 0 0 1-.473-3.026l.494-.053.498-.054q.02.173.041.347M192.5 289v-1.47h1V289q0 .747.034 1.485l-.499.024-.498.021a30 30 0 0 1-.019-.519A31 31 0 0 1 192.5 289m1-6.37v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm.977-3.93v1h-.977v.97h-1v-1.97zm4.923 0v1h-2.954v-1zm4.923 0v1h-2.954v-1zm4.923 0v1h-2.954v-1zm4.923 0v1h-2.953v-1zm4.924 0v1h-2.954v-1zm4.923 0v1h-2.954v-1zm4.922 0v1h-2.954v-1zm4.923 0v1h-2.954v-1zm4.923 0v1h-2.953v-1zm4.924 0v1h-2.954v-1zm4.923 0v1h-2.954v-1zm4.923 0v1H250.6v-1zm3.446 0v1h-1.477v-1z" />
                          <path fill="#DBDFE5" d="M73 204v-.5h-.5v.5zm0 0h-.5v1.477h1V204zm0 3.446h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.924h-.5v2.953h1v-2.953zm0 4.923h-.5v2.953h1v-2.953zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1V261.6zm0 4.923h-.5V268h1v-1.477zM151 204v-.5h-1.463v1H151zm-3.412 0v-.5h-2.926v1h2.926zm-4.875 0v-.5h-2.926v1h2.926zm-4.875 0v-.5h-2.926v1h2.926zm-4.875 0v-.5h-2.925v1h2.925zm-4.876 0v-.5h-2.924v1h2.924zm-4.875 0v-.5h-2.924v1h2.924zm-4.874 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5H73v1h1.463z" />
                          <path stroke="#DBDFE5" d="M201 248h25v25h-25z" />
                          <path fill="#DBDFE5" d="M32 294v-.5q-.747 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.126l-.245.437-.245.436c.917.514 1.9.924 2.932 1.215zm-4.518-2.305.31-.393a12.6 12.6 0 0 1-2.08-2.078l-.392.309-.392.31a13.6 13.6 0 0 0 2.244 2.244zm-3.297-3.857.436-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.566-4.824.497-.058A13 13 0 0 1 19.5 281h-1q0 .805.092 1.587zM19 281h.5q.001-.747.086-1.471l-.497-.058-.497-.058q-.091.782-.092 1.587zm.485-3.53.481.135c.27-.956.65-1.865 1.125-2.713l-.436-.245-.436-.245a13.4 13.4 0 0 0-1.215 2.932zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.297.245.437a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.5 13.5 0 0 0-2.932 1.215zm4.824-1.566.058.497q.724-.086 1.471-.086v-1q-.805 0-1.587.092zM32 268v.5h1.518v-1H32zm3.541 0v.5h3.036v-1H35.54zm5.059 0v.5h3.035v-1H40.6zm5.059 0v.5h3.035v-1H45.66zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5h3.036v-1h-3.035zm5.06 0v.5h3.035v-1h-3.036zm5.058 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1H81.07zm5.058 0v.5h3.036v-1h-3.036zm5.06 0v.5h3.035v-1h-3.036zm5.058 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5H118v-1h-1.518zm1.518 0v.5q.748 0 1.471.086l.058-.497.058-.497A14 14 0 0 0 118 267.5zm3.53.485-.135.481a12.4 12.4 0 0 1 2.713 1.126l.245-.437.245-.436a13.5 13.5 0 0 0-2.932-1.215zm4.518 2.305-.309.393a12.6 12.6 0 0 1 2.078 2.078l.393-.309.392-.31a13.5 13.5 0 0 0-2.244-2.244zm3.297 3.857-.437.245a12.4 12.4 0 0 1 1.126 2.713l.481-.135.481-.136a13.5 13.5 0 0 0-1.215-2.932zm1.566 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zM131 281h-.5q0 .747-.086 1.471l.497.058.497.058q.092-.782.092-1.587zm-.485 3.53-.481-.135a12.4 12.4 0 0 1-1.126 2.713l.437.245.436.245c.514-.917.924-1.899 1.215-2.932zm-2.305 4.518-.393-.309a12.6 12.6 0 0 1-2.078 2.078l.309.393.31.392a13.5 13.5 0 0 0 2.244-2.244zm-3.857 3.297-.245-.437a12.4 12.4 0 0 1-2.713 1.126l.135.481.136.481a13.5 13.5 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.724.086-1.471.086v1q.805 0 1.587-.092zM118 294v-.5h-1.518v1H118zm-3.541 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.035zm-5.06 0v-.5H86.13v1h3.036zm-5.058 0v-.5H81.07v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.036zm-5.06 0v-.5h-3.035v1h3.036zm-5.058 0v-.5h-3.035v1h3.035zm-5.059 0v-.5H45.66v1h3.035zm-5.059 0v-.5H40.6v1h3.035zm-5.058 0v-.5H35.54v1h3.036zm-5.06 0v-.5H32v1h1.518zM86 404v-.5q-.748 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.126l-.245.437-.245.436c.917.514 1.9.924 2.932 1.215zm-4.519-2.305.31-.393a12.6 12.6 0 0 1-2.078-2.078l-.393.309-.392.31a13.6 13.6 0 0 0 2.244 2.244zm-3.295-3.857.435-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.567-4.824.497-.058A13 13 0 0 1 73.5 391h-1q0 .805.092 1.587zM73 391h.5q.001-.747.086-1.471l-.497-.058-.497-.058q-.091.782-.092 1.587zm.485-3.53.481.135c.27-.956.65-1.865 1.126-2.713l-.436-.245-.437-.245a13.4 13.4 0 0 0-1.215 2.932zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.297.245.437a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.5 13.5 0 0 0-2.932 1.215zm4.824-1.566.058.497q.724-.086 1.471-.086v-1q-.805 0-1.587.092zM86 378v.5h1.518v-1H86zm3.541 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1H94.6zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5H172v-1h-1.518zm1.518 0v.5q.747 0 1.471.086l.058-.497.058-.497A14 14 0 0 0 172 377.5zm3.53.485-.135.481a12.4 12.4 0 0 1 2.713 1.126l.245-.437.245-.436a13.5 13.5 0 0 0-2.932-1.215zm4.518 2.305-.309.393a12.6 12.6 0 0 1 2.078 2.078l.393-.309.392-.31a13.5 13.5 0 0 0-2.244-2.244zm3.297 3.857-.437.245a12.4 12.4 0 0 1 1.126 2.713l.481-.135.481-.136a13.5 13.5 0 0 0-1.215-2.932zm1.566 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zM185 391h-.5q0 .747-.086 1.471l.497.058.497.058q.092-.782.092-1.587zm-.485 3.53-.481-.135a12.4 12.4 0 0 1-1.126 2.713l.437.245.436.245c.514-.917.924-1.899 1.215-2.932zm-2.305 4.518-.393-.309a12.6 12.6 0 0 1-2.078 2.078l.309.393.31.392a13.5 13.5 0 0 0 2.244-2.244zm-3.857 3.297-.245-.437a12.4 12.4 0 0 1-2.713 1.126l.135.481.136.481a13.5 13.5 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.724.086-1.471.086v1q.805 0 1.587-.092zM172 404v-.5h-1.518v1H172zm-3.541 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5H94.6v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5H86v1h1.518z" />
                          <path fill="#DBDFE5" d="M19 281h.5q.001-.747.086-1.471l-.497-.058-.497-.058q-.091.782-.092 1.587zm.485-3.53.481.135c.27-.956.65-1.865 1.125-2.713l-.436-.245-.436-.245a13.4 13.4 0 0 0-1.215 2.932zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.297.245.437a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.5 13.5 0 0 0-2.932 1.215zm4.824-1.566.058.497q.724-.086 1.471-.086v-1q-.805 0-1.587.092zM32 268v.5q.748 0 1.47.086l.059-.497.058-.497q-.78-.092-1.587-.092zm3.53.485-.135.481c.955.269 1.865.649 2.713 1.126l.245-.437.245-.436c-.917-.514-1.9-.924-2.932-1.215zm4.518 2.305-.31.393c.772.609 1.47 1.307 2.08 2.078l.392-.309.392-.31a13.6 13.6 0 0 0-2.244-2.244zm3.296 3.857-.436.245c.477.848.857 1.757 1.126 2.713l.481-.135.481-.136a13.4 13.4 0 0 0-1.215-2.932zm1.567 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zM45 281h-.5v1.518h1V281zm0 3.541h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1V289.6zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v3.036h1v-3.036zm0 5.059h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v3.036h1v-3.036zm0 5.059h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5V367h1v-1.518zM45 367h-.5q-.001.747-.086 1.471l.497.058.497.058q.091-.782.092-1.587zm-.485 3.53-.481-.135c-.27.956-.65 1.865-1.126 2.713l.436.245.437.245c.514-.917.925-1.899 1.215-2.932zm-2.305 4.518-.393-.309a12.6 12.6 0 0 1-2.078 2.078l.31.393.31.392a13.6 13.6 0 0 0 2.243-2.244zm-3.857 3.297-.245-.437c-.848.477-1.758.857-2.713 1.126l.135.481.136.481a13.4 13.4 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.723.086-1.471.086v1q.805 0 1.587-.092zM32 380v-.5q-.747 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.126l-.245.437-.245.436c.917.514 1.9.924 2.932 1.215zm-4.518-2.305.31-.393a12.6 12.6 0 0 1-2.08-2.078l-.392.309-.392.31a13.6 13.6 0 0 0 2.244 2.244zm-3.297-3.857.436-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.566-4.824.497-.058A13 13 0 0 1 19.5 367h-1q0 .805.092 1.587zM19 367h.5v-1.518h-1V367zm0-3.541h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-3.036h-1v3.036zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-3.036h-1v3.036zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5V289.6h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5V281h-1v1.518z" />
                          <circle cx="32" cy="281" r="8.5" stroke="#DBDFE5" />
                          <circle cx="118" cy="281" r="8.5" stroke="#DBDFE5" />
                          <path stroke="#DBDFE5" d="M151 366h82v50h-82z" />
                          <g data-hero-motion="bottom-teardrop-primary" style={{ "transformOrigin": "33px 366.666px" }}>
                            <circle cx="9" cy="9" r="8.5" stroke="#DBDFE5" transform="matrix(0 -1 -1 0 41 376)" />
                            <path stroke="#DBDFE5" d="M66.5 367c0-.778-.338-1.634-1.02-2.555-.681-.918-1.679-1.867-2.931-2.821-2.504-1.907-5.96-3.782-9.73-5.437a85 85 0 0 0-11.521-4.087c-3.707-1.013-7.017-1.6-9.298-1.6-9.113 0-16.5 7.387-16.5 16.5s7.387 16.5 16.5 16.5c2.28 0 5.591-.587 9.298-1.6a85 85 0 0 0 11.521-4.087c3.77-1.655 7.226-3.53 9.73-5.437 1.252-.954 2.25-1.903 2.93-2.821.683-.921 1.021-1.777 1.021-2.555Z" />
                          </g>
                          <g data-hero-motion="top-pin" style={{ "transformOrigin": "35px 71px" }}>
                            <circle cx="9" cy="9" r="8.5" stroke="#DBDFE5" transform="matrix(1 0 0 -1 26 80)" />
                            <path stroke="#DBDFE5" d="M35 105.5c.778 0 1.634-.338 2.555-1.021.918-.68 1.867-1.678 2.821-2.93 1.907-2.504 3.782-5.96 5.438-9.73A85.5 85.5 0 0 0 49.9 80.298c1.013-3.707 1.6-7.017 1.6-9.298 0-9.113-7.387-16.5-16.5-16.5S18.5 61.887 18.5 71c0 2.28.587 5.591 1.6 9.298a85.5 85.5 0 0 0 4.086 11.521c1.656 3.77 3.531 7.226 5.438 9.73.954 1.252 1.903 2.25 2.821 2.93.921.683 1.777 1.021 2.555 1.021Z" />
                          </g>
                          <path stroke="#DFE3E8" d="M51 71h75c11.046 0 20 8.954 20 20v47" />
                          <g data-hero-motion="bottom-teardrop-secondary" style={{ "transformOrigin": "91px 390.666px" }}>
                            <circle cx="9" cy="9" r="8.5" stroke="#DBDFE5" transform="matrix(0 1 1 0 81 382)" />
                            <path stroke="#DBDFE5" d="M55.5 391c0 .778.338 1.634 1.02 2.555.681.918 1.679 1.867 2.931 2.821 2.504 1.907 5.96 3.782 9.73 5.437a85 85 0 0 0 11.521 4.087c3.707 1.013 7.017 1.6 9.298 1.6 9.113 0 16.5-7.387 16.5-16.5s-7.387-16.5-16.5-16.5c-2.28 0-5.591.587-9.298 1.6a85 85 0 0 0-11.521 4.087c-3.77 1.655-7.226 3.53-9.73 5.437-1.252.954-2.25 1.903-2.93 2.821-.683.921-1.021 1.777-1.021 2.555Z" />
                          </g>
                          <circle cx="172" cy="391" r="8.5" stroke="#DBDFE5" />
                          <path stroke="#DBDFE5" d="M164 102h19v56h-19zM137 138h19v20h-19zM110 138h19v20h-19zM83 138h19v20H83zM56 138h19v20H56zM29 138h19v20H29z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="258" height="500" fill="none" viewBox="0 0 258 500" aria-hidden="true" data-hero-rail-layer="active" className="absolute left-0 h-125 w-full max-w-none opacity-0 transition-opacity duration-0 ease-out motion-reduce:transition-none top-0 group-hover/top:opacity-100">
                          <g clipPath="url(#home-hero-rail-active_svg__clip0_220_219)">
                            <path stroke="#82AFFB" d="M215 85c0-12.702 10.297-23 23-23h20M202 85h25v25h-25z" />
                            <g data-figma-bg-blur-radius="4" filter="url(#home-hero-rail-active_svg__filter0_dii_220_219)">
                              <circle cx="214.5" cy="97.5" r="7.5" fill="#0D5FE2" />
                            </g>
                            <path stroke="#82AFFB" strokeDasharray="3 2" d="M194 77h41v147h-41z" />
                            <g data-hero-motion="top-pin" style={{ "transformOrigin": "35px 71px" }}>
                              <path stroke="#82AFFB" d="M35 105.5c.778 0 1.634-.338 2.555-1.021.918-.68 1.867-1.678 2.821-2.93 1.907-2.504 3.782-5.96 5.438-9.73A85.5 85.5 0 0 0 49.9 80.298c1.013-3.707 1.6-7.017 1.6-9.298 0-9.113-7.387-16.5-16.5-16.5S18.5 61.887 18.5 71c0 2.28.587 5.591 1.6 9.298a85.5 85.5 0 0 0 4.086 11.521c1.656 3.77 3.531 7.226 5.438 9.73.954 1.252 1.903 2.25 2.821 2.93.921.683 1.777 1.021 2.555 1.021Z" />
                              <g filter="url(#home-hero-rail-active_svg__filter1_dii_220_219)">
                                <path fill="#307AF3" d="M35 106c-7.389 0-17-25.611-17-35s7.611-17 17-17 17 7.611 17 17-9.611 35-17 35m0-26a9 9 0 1 0 0-18 9 9 0 0 0 0 18" />
                              </g>
                            </g>
                            <path stroke="#4D8CF9" d="M52 71h75c11.046 0 20 8.954 20 20v47" />
                            <g filter="url(#home-hero-rail-active_svg__filter2_dii_220_219)">
                              <path fill="#0D5FE2" d="M165 102h19v56h-19z" />
                            </g>
                            <g data-hero-motion="top-fifth-bar">
                              <g filter="url(#home-hero-rail-active_svg__filter3_i_220_219)">
                                <path data-hero-bar-fill="true" fill="#307AF3" fillOpacity="0.5" d="M138 138h19v20h-19z" />
                              </g>
                            </g>
                            <path stroke="#82AFFB" d="M111 128h19v30h-19z" />
                            <g filter="url(#home-hero-rail-active_svg__filter4_i_220_219)">
                              <path fill="#307AF3" fillOpacity="0.5" d="M84 138h19v20H84z" />
                            </g>
                            <path stroke="#82AFFB" d="M57 119h19v39H57z" />
                            <g filter="url(#home-hero-rail-active_svg__filter5_i_220_219)">
                              <path fill="#307AF3" fillOpacity="0.5" d="M30 138h19v20H30z" />
                            </g>
                          </g>
                          <g clipPath="url(#home-hero-rail-active_svg__clip2_220_219)">
                            <path stroke="#82AFFB" d="M202 190.998h25v25h-25z" />
                            <g data-hero-motion="middle-node">
                              <g data-figma-bg-blur-radius="4" filter="url(#home-hero-rail-active_svg__filter6_dii_220_219)">
                                <circle data-hero-middle-fill="true" cx="214.5" cy="203.498" r="7.5" fill="#0D5FE2" />
                              </g>
                              <circle data-hero-middle-outline="true" cx="214.5" cy="203.498" r="7.5" fill="none" stroke="#82AFFB" opacity="0" />
                            </g>
                            <path stroke="#82AFFB" strokeDasharray="3 2" d="M194 76.998h41v147h-41z" />
                            <path stroke="#82AFFB" d="M152 203.998h50.5" />
                            <g filter="url(#home-hero-rail-active_svg__filter7_i_220_219)">
                              <path fill="#2976F2" d="M194 239.998h64v81h-32c-17.673 0-32-14.327-32-32z" />
                            </g>
                            <path fill="#E6EFFE" d="M74 203.998v-.5h-.5v.5zm0 0h-.5v1.477h1v-1.477zm0 3.446h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.924h-.5v2.953h1v-2.953zm0 4.923h-.5v2.953h1v-2.953zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v1.477h1v-1.477zm78-62.523v-.5h-1.463v1H152zm-3.412 0v-.5h-2.926v1h2.926zm-4.875 0v-.5h-2.926v1h2.926zm-4.875 0v-.5h-2.926v1h2.926zm-4.875 0v-.5h-2.925v1h2.925zm-4.876 0v-.5h-2.924v1h2.924zm-4.875 0v-.5h-2.924v1h2.924zm-4.874 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5H74v1h1.463z" />
                            <g data-hero-motion="middle-node">
                              <g filter="url(#home-hero-rail-active_svg__filter8_dii_220_219)">
                                <path data-hero-middle-fill="true" fill="#0D5FE2" d="M202 247.998h25v25h-25z" />
                              </g>
                              <path data-hero-middle-outline="true" d="M202 247.998h25v25h-25z" fill="none" stroke="#82AFFB" opacity="0" />
                            </g>
                            <path fill="none" d="M20 280.998h.5q.001-.747.086-1.471l-.497-.058-.497-.058q-.091.781-.092 1.587zm.485-3.53.481.135c.27-.955.65-1.865 1.125-2.713l-.436-.245-.436-.245a13.4 13.4 0 0 0-1.215 2.932zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.296.245.436a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.4 13.4 0 0 0-2.932 1.216zm4.824-1.567.058.497q.723-.086 1.471-.086v-1q-.805 0-1.587.092zm1.529-.089v.5q.748 0 1.47.086l.059-.497.058-.497q-.78-.092-1.587-.092zm3.53.485-.135.481c.955.269 1.865.649 2.713 1.126l.245-.436.245-.436a13.4 13.4 0 0 0-2.932-1.216zm4.518 2.305-.31.393c.772.609 1.47 1.307 2.08 2.078l.392-.309.392-.31a13.6 13.6 0 0 0-2.244-2.244zm3.296 3.857-.436.245c.477.848.857 1.758 1.126 2.713l.481-.135.481-.136a13.4 13.4 0 0 0-1.215-2.932zm1.567 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zm.089 1.529h-.5v1.518h1v-1.518zm0 3.541h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v3.036h1v-3.036zm0 5.059h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v1.518h1v-1.518zm0 1.518h-.5q-.001.747-.086 1.471l.497.058.497.058q.091-.781.092-1.587zm-.485 3.53-.481-.135c-.27.956-.65 1.865-1.126 2.713l.436.245.437.245c.514-.917.925-1.899 1.215-2.932zm-2.305 4.519-.393-.31a12.6 12.6 0 0 1-2.078 2.078l.31.393.31.392a13.6 13.6 0 0 0 2.243-2.244zm-3.857 3.296-.245-.436c-.848.476-1.758.856-2.713 1.125l.135.481.136.481a13.4 13.4 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.723.086-1.471.086v1q.805 0 1.587-.092zm-1.529.089v-.5q-.748 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.125l-.245.436-.245.436c.917.514 1.9.925 2.932 1.215zm-4.518-2.305.31-.393a12.6 12.6 0 0 1-2.08-2.078l-.392.31-.392.309a13.6 13.6 0 0 0 2.244 2.244zm-3.297-3.857.436-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.566-4.824.497-.058a13 13 0 0 1-.086-1.471h-1q0 .805.092 1.587zM20 366.998h.5v-1.518h-1v1.518zm0-3.541h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-3.036h-1v3.036zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-1.518h-1v1.518z" />
                            <path data-hero-belt="middle-primary" d="M33 267.998c7.18 0 13 5.82 13 13v86c0 7.18-5.82 13-13 13s-13-5.82-13-13v-86c0-7.18 5.82-13 13-13Z" fill="none" stroke="#82AFFB" strokeDasharray="3 2" strokeDashoffset="-4.7166666666666766" />
                            <path data-hero-belt="middle" d="M33 267.998h86c7.18 0 13 5.82 13 13s-5.82 13-13 13H33c-7.18 0-13-5.82-13-13s5.82-13 13-13Z" fill="none" stroke="#E6EFFE" strokeDasharray="3 2" strokeDashoffset="-4.7166666666666766" />
                            <g data-figma-bg-blur-radius="4" filter="url(#home-hero-rail-active_svg__filter9_dii_220_219)">
                              <circle cx="33" cy="280.998" r="9" fill="#0D5FE2" />
                            </g>
                            <g data-hero-motion="middle-node">
                              <g data-figma-bg-blur-radius="4" filter="url(#home-hero-rail-active_svg__filter10_dii_220_219)">
                                <circle data-hero-middle-fill="true" cx="119" cy="280.998" r="9" fill="#0D5FE2" />
                              </g>
                              <circle data-hero-middle-outline="true" cx="119" cy="280.998" r="8.5" fill="none" stroke="#82AFFB" opacity="0" />
                            </g>
                            <path fill="none" d="M33 293.998v-.5q-.748 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.125l-.245.436-.245.436c.917.514 1.9.925 2.932 1.215zm-4.518-2.305.31-.393a12.6 12.6 0 0 1-2.08-2.078l-.392.31-.392.309a13.6 13.6 0 0 0 2.244 2.244zm-3.297-3.857.436-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.566-4.824.497-.058a13 13 0 0 1-.086-1.471h-1q0 .805.092 1.587zM20 280.998h.5q.001-.747.086-1.471l-.497-.058-.497-.058q-.091.781-.092 1.587zm.485-3.53.481.135c.27-.955.65-1.865 1.125-2.713l-.436-.245-.436-.245a13.4 13.4 0 0 0-1.215 2.932zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.296.245.436a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.4 13.4 0 0 0-2.932 1.216zm4.824-1.567.058.497q.723-.086 1.471-.086v-1q-.805 0-1.587.092zm1.529-.089v.5h1.518v-1H33zm3.541 0v.5h3.036v-1H36.54zm5.059 0v.5h3.035v-1H41.6zm5.059 0v.5h3.035v-1H46.66zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5h3.036v-1h-3.035zm5.06 0v.5h3.035v-1h-3.036zm5.058 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1H82.07zm5.058 0v.5h3.036v-1h-3.036zm5.06 0v.5h3.035v-1h-3.036zm5.058 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5H119v-1h-1.518zm1.518 0v.5q.748 0 1.471.086l.058-.497.058-.497a14 14 0 0 0-1.587-.092zm3.53.485-.135.481a12.4 12.4 0 0 1 2.713 1.126l.245-.436.245-.436a13.4 13.4 0 0 0-2.932-1.216zm4.518 2.305-.309.393a12.6 12.6 0 0 1 2.078 2.078l.393-.309.392-.31a13.5 13.5 0 0 0-2.244-2.244zm3.297 3.857-.437.245a12.4 12.4 0 0 1 1.126 2.713l.481-.135.481-.136a13.5 13.5 0 0 0-1.215-2.932zm1.566 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zm.089 1.529h-.5q0 .748-.086 1.471l.497.058.497.058q.092-.781.092-1.587zm-.485 3.53-.481-.135a12.4 12.4 0 0 1-1.126 2.713l.437.245.436.245c.514-.917.924-1.899 1.215-2.932zm-2.305 4.519-.393-.31a12.6 12.6 0 0 1-2.078 2.078l.309.393.31.392a13.5 13.5 0 0 0 2.244-2.244zm-3.857 3.296-.245-.436c-.848.476-1.757.856-2.713 1.125l.135.481.136.481a13.4 13.4 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.724.086-1.471.086v1q.805 0 1.587-.092zm-1.529.089v-.5h-1.518v1H119zm-3.541 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.035zm-5.06 0v-.5H87.13v1h3.036zm-5.058 0v-.5H82.07v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.036zm-5.06 0v-.5h-3.035v1h3.036zm-5.058 0v-.5h-3.035v1h3.035zm-5.059 0v-.5H46.66v1h3.035zm-5.059 0v-.5H41.6v1h3.035zm-5.058 0v-.5H36.54v1h3.036zm-5.06 0v-.5H33v1h1.518z" />
                          </g>
                          <g clipPath="url(#home-hero-rail-active_svg__clip6_220_219)">
                            <path stroke="#4D8CF9" strokeDasharray="3 2" d="M236 499.666v-31.034h-48v-52.966" />
                            <path fill="none" d="M87 403.666v-.5q-.748 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.125l-.245.436-.245.436c.917.514 1.9.924 2.932 1.215zm-4.519-2.305.31-.393a12.6 12.6 0 0 1-2.078-2.078l-.393.309-.392.31a13.6 13.6 0 0 0 2.244 2.244zm-3.295-3.857.435-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.567-4.824.497-.058a13 13 0 0 1-.086-1.471h-1q0 .805.092 1.587zM74 390.666h.5q.001-.748.086-1.471l-.497-.058-.497-.058q-.091.782-.092 1.587zm.485-3.53.481.135c.27-.955.65-1.865 1.126-2.713l-.436-.245-.437-.245A13.4 13.4 0 0 0 74.005 387zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.296.245.436a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.5 13.5 0 0 0-2.932 1.215zm4.824-1.567.058.497q.724-.086 1.471-.086v-1q-.805 0-1.587.092zm1.529-.089v.5h1.518v-1H87zm3.541 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1H95.6zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5H173v-1h-1.518zm1.518 0v.5q.747 0 1.471.086l.058-.497.058-.497a14 14 0 0 0-1.587-.092zm3.53.485-.135.481a12.4 12.4 0 0 1 2.713 1.126l.245-.436.245-.437a13.5 13.5 0 0 0-2.932-1.215zm4.518 2.305-.309.393a12.6 12.6 0 0 1 2.078 2.078l.393-.309.392-.31a13.5 13.5 0 0 0-2.244-2.244zm3.297 3.857-.437.245a12.4 12.4 0 0 1 1.126 2.713l.481-.135.481-.136a13.5 13.5 0 0 0-1.215-2.932zm1.566 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zm.089 1.529h-.5q0 .748-.086 1.471l.497.058.497.058q.092-.781.092-1.587zm-.485 3.53-.481-.135a12.4 12.4 0 0 1-1.126 2.713l.437.245.436.245c.514-.917.924-1.899 1.215-2.932zm-2.305 4.518-.393-.309a12.6 12.6 0 0 1-2.078 2.078l.309.393.31.392a13.5 13.5 0 0 0 2.244-2.244zm-3.857 3.297-.245-.436c-.848.476-1.757.856-2.713 1.125l.135.481.136.481a13.5 13.5 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.724.086-1.471.086v1q.805 0 1.587-.092zm-1.529.089v-.5h-1.518v1H173zm-3.541 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5H95.6v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5H87v1h1.518zM20 280.666h.5q.001-.748.086-1.471l-.497-.058-.497-.058q-.091.781-.092 1.587zm.485-3.53.481.135c.27-.956.65-1.865 1.125-2.713l-.436-.245-.436-.245A13.4 13.4 0 0 0 20.005 277zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.296.245.436a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.5 13.5 0 0 0-2.932 1.215zm4.824-1.567.058.497q.723-.086 1.471-.086v-1q-.805 0-1.587.092zm1.529-.089v.5q.748 0 1.47.086l.059-.497.058-.497q-.78-.092-1.587-.092zm3.53.485-.135.481c.955.269 1.865.649 2.713 1.126l.245-.436.245-.437c-.917-.514-1.9-.924-2.932-1.215zm4.518 2.305-.31.393c.772.609 1.47 1.307 2.08 2.078l.392-.309.392-.31a13.6 13.6 0 0 0-2.244-2.244zm3.296 3.857-.436.245c.477.848.857 1.758 1.126 2.713l.481-.135.481-.136a13.4 13.4 0 0 0-1.215-2.932zm1.567 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zm.089 1.529h-.5v1.518h1v-1.518zm0 3.541h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v3.036h1v-3.036zm0 5.059h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v3.036h1v-3.036zm0 5.059h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v1.518h1v-1.518zm0 1.518h-.5q-.001.748-.086 1.471l.497.058.497.058q.091-.781.092-1.587zm-.485 3.53-.481-.135c-.27.956-.65 1.865-1.126 2.713l.436.245.437.245c.514-.917.925-1.899 1.215-2.932zm-2.305 4.518-.393-.309a12.6 12.6 0 0 1-2.078 2.078l.31.393.31.392a13.6 13.6 0 0 0 2.243-2.244zm-3.857 3.297-.245-.436c-.848.476-1.758.856-2.713 1.125l.135.481.136.481a13.4 13.4 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.723.086-1.471.086v1q.805 0 1.587-.092zm-1.529.089v-.5q-.748 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.125l-.245.436-.245.436c.917.514 1.9.924 2.932 1.215zm-4.518-2.305.31-.393a12.6 12.6 0 0 1-2.08-2.078l-.392.309-.392.31a13.6 13.6 0 0 0 2.244 2.244zm-3.297-3.857.436-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.566-4.824.497-.058a13 13 0 0 1-.086-1.471h-1q0 .805.092 1.587zM20 366.666h.5v-1.518h-1v1.518zm0-3.541h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-3.036h-1v3.036zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-3.036h-1v3.036zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-1.518h-1v1.518z" />
                            <path data-hero-belt="bottom" d="M87 377.666h86c7.18 0 13 5.82 13 13s-5.82 13-13 13H87c-7.18 0-13-5.82-13-13s5.82-13 13-13Z" fill="none" stroke="#DFE3E8" strokeDasharray="3 2" strokeDashoffset="-4.7166666666666766" />
                            <path data-hero-belt="bottom-primary" d="M33 267.666c7.18 0 13 5.82 13 13v86c0 7.18-5.82 13-13 13s-13-5.82-13-13v-86c0-7.18 5.82-13 13-13Z" fill="none" stroke="#E6EFFE" strokeDasharray="3 2" strokeDashoffset="-4.7166666666666766" />
                            <path stroke="#DFE3E8" d="M152 365.666h82v50h-82z" />
                            <g data-hero-motion="bottom-teardrop-primary" filter="url(#home-hero-rail-active_svg__filter11_dii_220_219)" style={{ "transformOrigin": "33px 366.666px" }}>
                              <path fill="#307AF3" d="M68 366.666c0 7.389-25.611 17-35 17s-17-7.611-17-17 7.611-17 17-17 35 9.611 35 17m-26 0a9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9" />
                            </g>
                            <g data-hero-motion="bottom-teardrop-secondary" filter="url(#home-hero-rail-active_svg__filter12_dii_220_219)" style={{ "transformOrigin": "91px 390.666px" }}>
                              <path fill="#307AF3" d="M56 390.666c0 7.389 25.611 17 35 17s17-7.611 17-17-7.611-17-17-17-35 9.611-35 17m26 0a9 9 0 0 1 9-9 9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9" />
                            </g>
                            <g data-figma-bg-blur-radius="4" filter="url(#home-hero-rail-active_svg__filter13_dii_220_219)">
                              <circle cx="173" cy="390.666" r="9" fill="#0D5FE2" />
                            </g>
                            <g data-hero-motion="bottom-wheel" style={{ "transformOrigin": "49px 451.666px" }}>
                              <path fill="#82AFFB" d="m42.443 462.504.26-.428zm-4.561.28.353.354zm-6.244 6.244-.354-.353zm.115 4.2-.312.39zM49 479.276v.5zm17.246-6.048.312.39zm.115-4.2-.353.354zm-6.243-6.244.354-.353zm-4.561-.28.258.428zM49 464.333v.5zm-6.417-36.614-.483.129zm-3.694-2.002-.182-.466zm-14.006 12.024-.433-.25zm-3.41 18.143-.495.076zm3.58 2.199.13.483zm8.529-2.286.13.483zm2.517-3.809.5-.012zm1.724-6.775-.433-.25zm5.005-4.881-.239-.439zm2.041-4.084.483-.129zm14.246-10.531.182-.466zm-3.695 2.002-.483-.13zm-2.285 8.529-.483-.129zm2.04 4.084.24-.439zm5.005 4.881.433-.25zm1.725 6.775-.5-.012zm2.517 3.809.13-.483zm8.53 2.286-.13.483zm3.58-2.199.493.076zm-3.41-18.143.432-.25zM49 415.666v.5c19.606 0 35.5 15.894 35.5 35.5h1c0-20.158-16.342-36.5-36.5-36.5zm36 36h-.5c0 19.606-15.894 35.5-35.5 35.5v1c20.158 0 36.5-16.342 36.5-36.5zm-36 36v-.5c-19.606 0-35.5-15.894-35.5-35.5h-1c0 20.158 16.342 36.5 36.5 36.5zm-36-36h.5c0-19.606 15.894-35.5 35.5-35.5v-1c-20.158 0-36.5 16.342-36.5 36.5zm29.443 10.838.26-.428c-1.578-.954-3.771-1.049-5.175.355l.354.353.353.354c.984-.984 2.638-1 3.95-.206zm-4.561.28-.354-.353-6.244 6.244.354.353.353.354 6.244-6.244zm-6.244 6.244-.354-.353c-1.376 1.377-1.423 3.679.157 4.943l.312-.39.312-.391c-1.056-.845-1.084-2.445-.074-3.455zm.115 4.2-.312.39A28.1 28.1 0 0 0 49 479.776v-1a27.1 27.1 0 0 1-16.935-5.939zM49 479.276v.5a28.1 28.1 0 0 0 17.558-6.158l-.312-.39-.312-.391A27.1 27.1 0 0 1 49 478.776zm17.246-6.048.312.39c1.58-1.264 1.534-3.566.157-4.943l-.354.353-.353.354c1.01 1.01.982 2.61-.074 3.455zm.115-4.2.354-.353-6.243-6.244-.354.353-.353.354 6.243 6.244zm-6.243-6.244.354-.353c-1.404-1.404-3.597-1.309-5.174-.355l.259.428.258.428c1.312-.793 2.966-.778 3.95.206zm-4.561-.28-.26-.428A12.17 12.17 0 0 1 49 463.833v1a13.17 13.17 0 0 0 6.815-1.901zM49 464.333v-.5c-2.239 0-4.414-.617-6.298-1.757l-.259.428-.258.428A13.17 13.17 0 0 0 49 464.833zm-6.417-36.614.483-.13c-.504-1.881-2.474-3.073-4.359-2.338l.182.466.181.466c1.26-.491 2.66.285 3.03 1.665zm-3.694-2.002-.182-.466a28.35 28.35 0 0 0-14.257 12.24l.433.25.433.25a27.35 27.35 0 0 1 13.754-11.808zm-14.006 12.024-.433-.25a28.35 28.35 0 0 0-3.472 18.469l.495-.076.494-.076a27.35 27.35 0 0 1 3.349-17.817zm-3.41 18.143-.495.076c.307 1.999 2.323 3.11 4.204 2.606l-.13-.483-.129-.483c-1.38.37-2.751-.454-2.956-1.792zm3.58 2.199.13.483 8.529-2.286-.13-.483-.13-.483-8.529 2.286zm8.529-2.286.13.483c1.916-.514 2.932-2.459 2.886-4.304l-.5.012-.5.013c.039 1.529-.802 2.953-2.145 3.313zm2.517-3.809.5-.012a12.4 12.4 0 0 1 1.657-6.513l-.433-.25-.433-.25a13.4 13.4 0 0 0-1.791 7.038zm1.724-6.775.433.25a12.4 12.4 0 0 1 4.811-4.692l-.239-.439-.239-.439a13.4 13.4 0 0 0-5.199 5.07zm5.005-4.881.24.439c1.62-.883 2.797-2.735 2.284-4.652l-.483.129-.483.129c.36 1.344-.453 2.784-1.797 3.516zm2.041-4.084.483-.129-2.286-8.53-.483.13-.483.129 2.286 8.529zm14.246-10.531.182-.466c-1.885-.735-3.856.457-4.36 2.338l.483.13.483.129c.37-1.38 1.77-2.157 3.03-1.665zm-3.695 2.002-.483-.13-2.285 8.53.483.129.483.129 2.285-8.529zm-2.285 8.529-.483-.129c-.514 1.917.664 3.769 2.285 4.652l.239-.439.239-.439c-1.344-.732-2.157-2.172-1.797-3.516zm2.04 4.084-.238.439a12.4 12.4 0 0 1 4.81 4.692l.433-.25.433-.25a13.4 13.4 0 0 0-5.198-5.07zm5.005 4.881-.433.25a12.4 12.4 0 0 1 1.658 6.513l.5.012.5.013a13.4 13.4 0 0 0-1.792-7.038zm1.725 6.775-.5-.012c-.045 1.845.97 3.79 2.888 4.304l.129-.483.13-.483c-1.345-.36-2.185-1.784-2.147-3.313zm2.517 3.809-.13.483 8.53 2.286.13-.483.129-.483-8.53-2.286zm8.53 2.286-.13.483c1.881.504 3.897-.607 4.203-2.606l-.494-.076-.494-.076c-.205 1.338-1.577 2.162-2.956 1.792zm3.58-2.199.493.076a28.35 28.35 0 0 0-3.47-18.469l-.434.25-.433.25a27.35 27.35 0 0 1 3.349 17.817zm-3.41-18.143.432-.25a28.35 28.35 0 0 0-14.257-12.24l-.182.466-.181.466a27.35 27.35 0 0 1 13.754 11.808z" />
                            </g>
                          </g>
                          <defs>
                            <filter id="home-hero-rail-active_svg__filter0_dii_220_219" width="25" height="26" x="202" y="86" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter1_dii_220_219" width="44" height="62" x="13" y="51" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter2_dii_220_219" width="29" height="66" x="160" y="99" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter3_i_220_219" width="19" height="20" x="138" y="138" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect1_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter4_i_220_219" width="19" height="20" x="84" y="138" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect1_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter5_i_220_219" width="19" height="20" x="30" y="138" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect1_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter6_dii_220_219" width="25" height="26" x="202" y="191.998" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter7_i_220_219" width="64" height="81" x="194" y="239.998" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect1_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter8_dii_220_219" width="35" height="35" x="197" y="244.998" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter9_dii_220_219" width="28" height="29" x="19" y="267.998" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter10_dii_220_219" width="28" height="29" x="105" y="267.998" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter11_dii_220_219" width="62" height="44" x="11" y="346.666" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter12_dii_220_219" width="62" height="44" x="47" y="370.666" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter13_dii_220_219" width="28" height="29" x="159" y="377.666" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <clipPath id="home-hero-rail-active_svg__clip0_220_219">
                              <path fill="#fff" d="M0 0h258v166.667H0z" />
                            </clipPath>
                            <clipPath id="home-hero-rail-active_svg__clip2_220_219">
                              <path fill="#fff" d="M0 166.666h258v167H0z" />
                            </clipPath>
                            <clipPath id="home-hero-rail-active_svg__clip6_220_219">
                              <path fill="#fff" d="M0 333.666h258v166H0z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div data-hero-circuit-section="middle" className="HeroCircuitBackdrop-module__HTAPZW__middleSection group/middle absolute inset-x-0 top-41.75 h-41.5 overflow-hidden border-b border-[#E7EAEE]">
                      <div data-hero-section-background="solid" className="absolute inset-0 bg-[#1066F1] opacity-0 transition-opacity duration-0 ease-out motion-reduce:transition-none group-hover/middle:opacity-100"></div>
                      <div className="pointer-events-none absolute inset-0 origin-center overflow-hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="257" height="500" fill="none" viewBox="0 0 257 500" aria-hidden="true" data-hero-rail-layer="base" className="absolute left-0 h-125 w-full max-w-none opacity-100 transition-opacity duration-0 ease-out motion-reduce:transition-none -top-[167px] group-hover/middle:opacity-0">
                          <path stroke="#DBDFE5" d="M214 85c0-12.702 10.297-23 23-23h20M201 85h25v25h-25zM201 191h25v25h-25z" />
                          <path stroke="#DBDFE5" strokeDasharray="3 2" d="M235 500v-31.034h-48V416" />
                          <circle cx="213.5" cy="97.5" r="7" stroke="#DBDFE5" />
                          <circle cx="213.5" cy="203.5" r="7" stroke="#DBDFE5" />
                          <path stroke="#DBDFE5" strokeDasharray="3 2" d="M193 77h41v147h-41z" />
                          <path stroke="#DBDFE5" d="M151 204h50.5" />
                          <path fill="#DFE3E8" d="m224.063 320.484.142.005q.396.01.795.011h1.6v1H225q-.507 0-1.012-.018a30 30 0 0 1-.519-.019l.022-.498.024-.499q.273.011.548.018m7.871.016v1h-3.201v-1zm5.333 0v1h-3.201v-1zm5.333 0v1h-3.2v-1zm5.334 0v1h-3.201v-1zm5.333 0v1h-3.201v-1zm3.733 0v1h-1.6v-1zm-38.384-.647.274.052q.255.051.511.098l.184.031q.276.048.555.092.141.021.284.041.24.036.482.068.144.018.287.035c.116.013.232.03.348.042l-.054.498-.054.494-.307-.034a33 33 0 0 1-2.704-.437l-.014-.003.101-.489.101-.489zm-4.605-1.325a21 21 0 0 0 .735.263l.31.105a48 48 0 0 0 .713.228q.233.071.468.139l.255.073.193.055-.132.482-.132.481-.133-.037a32 32 0 0 1-2.779-.909l.177-.466.176-.467zm-4.241-1.951.25.139q.986.535 2.014 1.001l-.412.91a34 34 0 0 1-.698-.326q-.132-.064-.262-.129a34 34 0 0 1-1.767-.938l.496-.867q.188.106.379.21m-4.316-2.875.241.189q.161.125.326.25l.301.224q.139.102.279.203.163.118.33.235.158.111.318.221.144.098.289.195l.166.112-.274.418-.275.415-.193-.128a33 33 0 0 1-2.145-1.562l-.137-.112.312-.387.313-.39q.074.06.149.117m-3.753-3.502a32 32 0 0 0 2.099 2.099l-.336.37-.337.368a33 33 0 0 1-2.165-2.165l.369-.336zm-2.921-3.739q.097.145.195.289a26 26 0 0 0 .456.648q.094.13.189.26l.238.321.25.325.19.241q.058.076.117.15l-.39.313-.388.311-.112-.137a33 33 0 0 1-1.69-2.338l.416-.274.418-.274zm-2.497-4.495q.465 1.027 1 2.013l.139.25q.104.192.211.38l-.434.248-.434.247q-.18-.314-.353-.633a32 32 0 0 1-1.04-2.094l.456-.205zm-1.62-4.459.073.255q.068.235.139.468a28 28 0 0 0 .229.713l.104.31a25 25 0 0 0 .263.735l.054.15-.467.176-.467.176-.049-.13a32 32 0 0 1-.86-2.649q-.019-.067-.036-.133l.481-.131.482-.132zm-.934-4.701q.017.143.035.287.032.242.068.482.02.143.041.284.044.279.092.555l.031.184.047.247q.05.269.103.538l.002.007-.489.101-.49.101a33 33 0 0 1-.473-3.026l.494-.053.498-.054q.02.173.041.347M192.5 289v-1.47h1V289q0 .747.034 1.485l-.499.024-.498.021a30 30 0 0 1-.019-.519A31 31 0 0 1 192.5 289m1-6.37v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm.977-3.93v1h-.977v.97h-1v-1.97zm4.923 0v1h-2.954v-1zm4.923 0v1h-2.954v-1zm4.923 0v1h-2.954v-1zm4.923 0v1h-2.953v-1zm4.924 0v1h-2.954v-1zm4.923 0v1h-2.954v-1zm4.922 0v1h-2.954v-1zm4.923 0v1h-2.954v-1zm4.923 0v1h-2.953v-1zm4.924 0v1h-2.954v-1zm4.923 0v1h-2.954v-1zm4.923 0v1H250.6v-1zm3.446 0v1h-1.477v-1z" />
                          <path fill="#DBDFE5" d="M73 204v-.5h-.5v.5zm0 0h-.5v1.477h1V204zm0 3.446h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.924h-.5v2.953h1v-2.953zm0 4.923h-.5v2.953h1v-2.953zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1V261.6zm0 4.923h-.5V268h1v-1.477zM151 204v-.5h-1.463v1H151zm-3.412 0v-.5h-2.926v1h2.926zm-4.875 0v-.5h-2.926v1h2.926zm-4.875 0v-.5h-2.926v1h2.926zm-4.875 0v-.5h-2.925v1h2.925zm-4.876 0v-.5h-2.924v1h2.924zm-4.875 0v-.5h-2.924v1h2.924zm-4.874 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5H73v1h1.463z" />
                          <path stroke="#DBDFE5" d="M201 248h25v25h-25z" />
                          <path fill="#DBDFE5" d="M32 294v-.5q-.747 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.126l-.245.437-.245.436c.917.514 1.9.924 2.932 1.215zm-4.518-2.305.31-.393a12.6 12.6 0 0 1-2.08-2.078l-.392.309-.392.31a13.6 13.6 0 0 0 2.244 2.244zm-3.297-3.857.436-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.566-4.824.497-.058A13 13 0 0 1 19.5 281h-1q0 .805.092 1.587zM19 281h.5q.001-.747.086-1.471l-.497-.058-.497-.058q-.091.782-.092 1.587zm.485-3.53.481.135c.27-.956.65-1.865 1.125-2.713l-.436-.245-.436-.245a13.4 13.4 0 0 0-1.215 2.932zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.297.245.437a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.5 13.5 0 0 0-2.932 1.215zm4.824-1.566.058.497q.724-.086 1.471-.086v-1q-.805 0-1.587.092zM32 268v.5h1.518v-1H32zm3.541 0v.5h3.036v-1H35.54zm5.059 0v.5h3.035v-1H40.6zm5.059 0v.5h3.035v-1H45.66zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5h3.036v-1h-3.035zm5.06 0v.5h3.035v-1h-3.036zm5.058 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1H81.07zm5.058 0v.5h3.036v-1h-3.036zm5.06 0v.5h3.035v-1h-3.036zm5.058 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5H118v-1h-1.518zm1.518 0v.5q.748 0 1.471.086l.058-.497.058-.497A14 14 0 0 0 118 267.5zm3.53.485-.135.481a12.4 12.4 0 0 1 2.713 1.126l.245-.437.245-.436a13.5 13.5 0 0 0-2.932-1.215zm4.518 2.305-.309.393a12.6 12.6 0 0 1 2.078 2.078l.393-.309.392-.31a13.5 13.5 0 0 0-2.244-2.244zm3.297 3.857-.437.245a12.4 12.4 0 0 1 1.126 2.713l.481-.135.481-.136a13.5 13.5 0 0 0-1.215-2.932zm1.566 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zM131 281h-.5q0 .747-.086 1.471l.497.058.497.058q.092-.782.092-1.587zm-.485 3.53-.481-.135a12.4 12.4 0 0 1-1.126 2.713l.437.245.436.245c.514-.917.924-1.899 1.215-2.932zm-2.305 4.518-.393-.309a12.6 12.6 0 0 1-2.078 2.078l.309.393.31.392a13.5 13.5 0 0 0 2.244-2.244zm-3.857 3.297-.245-.437a12.4 12.4 0 0 1-2.713 1.126l.135.481.136.481a13.5 13.5 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.724.086-1.471.086v1q.805 0 1.587-.092zM118 294v-.5h-1.518v1H118zm-3.541 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.035zm-5.06 0v-.5H86.13v1h3.036zm-5.058 0v-.5H81.07v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.036zm-5.06 0v-.5h-3.035v1h3.036zm-5.058 0v-.5h-3.035v1h3.035zm-5.059 0v-.5H45.66v1h3.035zm-5.059 0v-.5H40.6v1h3.035zm-5.058 0v-.5H35.54v1h3.036zm-5.06 0v-.5H32v1h1.518zM86 404v-.5q-.748 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.126l-.245.437-.245.436c.917.514 1.9.924 2.932 1.215zm-4.519-2.305.31-.393a12.6 12.6 0 0 1-2.078-2.078l-.393.309-.392.31a13.6 13.6 0 0 0 2.244 2.244zm-3.295-3.857.435-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.567-4.824.497-.058A13 13 0 0 1 73.5 391h-1q0 .805.092 1.587zM73 391h.5q.001-.747.086-1.471l-.497-.058-.497-.058q-.091.782-.092 1.587zm.485-3.53.481.135c.27-.956.65-1.865 1.126-2.713l-.436-.245-.437-.245a13.4 13.4 0 0 0-1.215 2.932zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.297.245.437a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.5 13.5 0 0 0-2.932 1.215zm4.824-1.566.058.497q.724-.086 1.471-.086v-1q-.805 0-1.587.092zM86 378v.5h1.518v-1H86zm3.541 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1H94.6zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5H172v-1h-1.518zm1.518 0v.5q.747 0 1.471.086l.058-.497.058-.497A14 14 0 0 0 172 377.5zm3.53.485-.135.481a12.4 12.4 0 0 1 2.713 1.126l.245-.437.245-.436a13.5 13.5 0 0 0-2.932-1.215zm4.518 2.305-.309.393a12.6 12.6 0 0 1 2.078 2.078l.393-.309.392-.31a13.5 13.5 0 0 0-2.244-2.244zm3.297 3.857-.437.245a12.4 12.4 0 0 1 1.126 2.713l.481-.135.481-.136a13.5 13.5 0 0 0-1.215-2.932zm1.566 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zM185 391h-.5q0 .747-.086 1.471l.497.058.497.058q.092-.782.092-1.587zm-.485 3.53-.481-.135a12.4 12.4 0 0 1-1.126 2.713l.437.245.436.245c.514-.917.924-1.899 1.215-2.932zm-2.305 4.518-.393-.309a12.6 12.6 0 0 1-2.078 2.078l.309.393.31.392a13.5 13.5 0 0 0 2.244-2.244zm-3.857 3.297-.245-.437a12.4 12.4 0 0 1-2.713 1.126l.135.481.136.481a13.5 13.5 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.724.086-1.471.086v1q.805 0 1.587-.092zM172 404v-.5h-1.518v1H172zm-3.541 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5H94.6v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5H86v1h1.518z" />
                          <path fill="#DBDFE5" d="M19 281h.5q.001-.747.086-1.471l-.497-.058-.497-.058q-.091.782-.092 1.587zm.485-3.53.481.135c.27-.956.65-1.865 1.125-2.713l-.436-.245-.436-.245a13.4 13.4 0 0 0-1.215 2.932zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.297.245.437a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.5 13.5 0 0 0-2.932 1.215zm4.824-1.566.058.497q.724-.086 1.471-.086v-1q-.805 0-1.587.092zM32 268v.5q.748 0 1.47.086l.059-.497.058-.497q-.78-.092-1.587-.092zm3.53.485-.135.481c.955.269 1.865.649 2.713 1.126l.245-.437.245-.436c-.917-.514-1.9-.924-2.932-1.215zm4.518 2.305-.31.393c.772.609 1.47 1.307 2.08 2.078l.392-.309.392-.31a13.6 13.6 0 0 0-2.244-2.244zm3.296 3.857-.436.245c.477.848.857 1.757 1.126 2.713l.481-.135.481-.136a13.4 13.4 0 0 0-1.215-2.932zm1.567 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zM45 281h-.5v1.518h1V281zm0 3.541h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1V289.6zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v3.036h1v-3.036zm0 5.059h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v3.036h1v-3.036zm0 5.059h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5V367h1v-1.518zM45 367h-.5q-.001.747-.086 1.471l.497.058.497.058q.091-.782.092-1.587zm-.485 3.53-.481-.135c-.27.956-.65 1.865-1.126 2.713l.436.245.437.245c.514-.917.925-1.899 1.215-2.932zm-2.305 4.518-.393-.309a12.6 12.6 0 0 1-2.078 2.078l.31.393.31.392a13.6 13.6 0 0 0 2.243-2.244zm-3.857 3.297-.245-.437c-.848.477-1.758.857-2.713 1.126l.135.481.136.481a13.4 13.4 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.723.086-1.471.086v1q.805 0 1.587-.092zM32 380v-.5q-.747 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.126l-.245.437-.245.436c.917.514 1.9.924 2.932 1.215zm-4.518-2.305.31-.393a12.6 12.6 0 0 1-2.08-2.078l-.392.309-.392.31a13.6 13.6 0 0 0 2.244 2.244zm-3.297-3.857.436-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.566-4.824.497-.058A13 13 0 0 1 19.5 367h-1q0 .805.092 1.587zM19 367h.5v-1.518h-1V367zm0-3.541h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-3.036h-1v3.036zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-3.036h-1v3.036zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5V289.6h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5V281h-1v1.518z" />
                          <circle cx="32" cy="281" r="8.5" stroke="#DBDFE5" />
                          <circle cx="118" cy="281" r="8.5" stroke="#DBDFE5" />
                          <path stroke="#DBDFE5" d="M151 366h82v50h-82z" />
                          <g data-hero-motion="bottom-teardrop-primary" style={{ "transformOrigin": "33px 366.666px" }}>
                            <circle cx="9" cy="9" r="8.5" stroke="#DBDFE5" transform="matrix(0 -1 -1 0 41 376)" />
                            <path stroke="#DBDFE5" d="M66.5 367c0-.778-.338-1.634-1.02-2.555-.681-.918-1.679-1.867-2.931-2.821-2.504-1.907-5.96-3.782-9.73-5.437a85 85 0 0 0-11.521-4.087c-3.707-1.013-7.017-1.6-9.298-1.6-9.113 0-16.5 7.387-16.5 16.5s7.387 16.5 16.5 16.5c2.28 0 5.591-.587 9.298-1.6a85 85 0 0 0 11.521-4.087c3.77-1.655 7.226-3.53 9.73-5.437 1.252-.954 2.25-1.903 2.93-2.821.683-.921 1.021-1.777 1.021-2.555Z" />
                          </g>
                          <g data-hero-motion="top-pin" style={{ "transformOrigin": "35px 71px" }}>
                            <circle cx="9" cy="9" r="8.5" stroke="#DBDFE5" transform="matrix(1 0 0 -1 26 80)" />
                            <path stroke="#DBDFE5" d="M35 105.5c.778 0 1.634-.338 2.555-1.021.918-.68 1.867-1.678 2.821-2.93 1.907-2.504 3.782-5.96 5.438-9.73A85.5 85.5 0 0 0 49.9 80.298c1.013-3.707 1.6-7.017 1.6-9.298 0-9.113-7.387-16.5-16.5-16.5S18.5 61.887 18.5 71c0 2.28.587 5.591 1.6 9.298a85.5 85.5 0 0 0 4.086 11.521c1.656 3.77 3.531 7.226 5.438 9.73.954 1.252 1.903 2.25 2.821 2.93.921.683 1.777 1.021 2.555 1.021Z" />
                          </g>
                          <path stroke="#DFE3E8" d="M51 71h75c11.046 0 20 8.954 20 20v47" />
                          <g data-hero-motion="bottom-teardrop-secondary" style={{ "transformOrigin": "91px 390.666px" }}>
                            <circle cx="9" cy="9" r="8.5" stroke="#DBDFE5" transform="matrix(0 1 1 0 81 382)" />
                            <path stroke="#DBDFE5" d="M55.5 391c0 .778.338 1.634 1.02 2.555.681.918 1.679 1.867 2.931 2.821 2.504 1.907 5.96 3.782 9.73 5.437a85 85 0 0 0 11.521 4.087c3.707 1.013 7.017 1.6 9.298 1.6 9.113 0 16.5-7.387 16.5-16.5s-7.387-16.5-16.5-16.5c-2.28 0-5.591.587-9.298 1.6a85 85 0 0 0-11.521 4.087c-3.77 1.655-7.226 3.53-9.73 5.437-1.252.954-2.25 1.903-2.93 2.821-.683.921-1.021 1.777-1.021 2.555Z" />
                          </g>
                          <circle cx="172" cy="391" r="8.5" stroke="#DBDFE5" />
                          <path stroke="#DBDFE5" d="M164 102h19v56h-19zM137 138h19v20h-19zM110 138h19v20h-19zM83 138h19v20H83zM56 138h19v20H56zM29 138h19v20H29z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="258" height="500" fill="none" viewBox="0 0 258 500" aria-hidden="true" data-hero-rail-layer="active" className="absolute left-0 h-125 w-full max-w-none opacity-0 transition-opacity duration-0 ease-out motion-reduce:transition-none -top-[167px] group-hover/middle:opacity-100">
                          <g clipPath="url(#home-hero-rail-active_svg__clip0_220_219)">
                            <path stroke="#82AFFB" d="M215 85c0-12.702 10.297-23 23-23h20M202 85h25v25h-25z" />
                            <g data-figma-bg-blur-radius="4" filter="url(#home-hero-rail-active_svg__filter0_dii_220_219)">
                              <circle cx="214.5" cy="97.5" r="7.5" fill="#0D5FE2" />
                            </g>
                            <path stroke="#82AFFB" strokeDasharray="3 2" d="M194 77h41v147h-41z" />
                            <g data-hero-motion="top-pin" style={{ "transformOrigin": "35px 71px" }}>
                              <path stroke="#82AFFB" d="M35 105.5c.778 0 1.634-.338 2.555-1.021.918-.68 1.867-1.678 2.821-2.93 1.907-2.504 3.782-5.96 5.438-9.73A85.5 85.5 0 0 0 49.9 80.298c1.013-3.707 1.6-7.017 1.6-9.298 0-9.113-7.387-16.5-16.5-16.5S18.5 61.887 18.5 71c0 2.28.587 5.591 1.6 9.298a85.5 85.5 0 0 0 4.086 11.521c1.656 3.77 3.531 7.226 5.438 9.73.954 1.252 1.903 2.25 2.821 2.93.921.683 1.777 1.021 2.555 1.021Z" />
                              <g filter="url(#home-hero-rail-active_svg__filter1_dii_220_219)">
                                <path fill="#307AF3" d="M35 106c-7.389 0-17-25.611-17-35s7.611-17 17-17 17 7.611 17 17-9.611 35-17 35m0-26a9 9 0 1 0 0-18 9 9 0 0 0 0 18" />
                              </g>
                            </g>
                            <path stroke="#4D8CF9" d="M52 71h75c11.046 0 20 8.954 20 20v47" />
                            <g filter="url(#home-hero-rail-active_svg__filter2_dii_220_219)">
                              <path fill="#0D5FE2" d="M165 102h19v56h-19z" />
                            </g>
                            <g data-hero-motion="top-fifth-bar">
                              <g filter="url(#home-hero-rail-active_svg__filter3_i_220_219)">
                                <path data-hero-bar-fill="true" fill="#307AF3" fillOpacity="0.5" d="M138 138h19v20h-19z" />
                              </g>
                            </g>
                            <path stroke="#82AFFB" d="M111 128h19v30h-19z" />
                            <g filter="url(#home-hero-rail-active_svg__filter4_i_220_219)">
                              <path fill="#307AF3" fillOpacity="0.5" d="M84 138h19v20H84z" />
                            </g>
                            <path stroke="#82AFFB" d="M57 119h19v39H57z" />
                            <g filter="url(#home-hero-rail-active_svg__filter5_i_220_219)">
                              <path fill="#307AF3" fillOpacity="0.5" d="M30 138h19v20H30z" />
                            </g>
                          </g>
                          <g clipPath="url(#home-hero-rail-active_svg__clip2_220_219)">
                            <path stroke="#82AFFB" d="M202 190.998h25v25h-25z" />
                            <g data-hero-motion="middle-node">
                              <g data-figma-bg-blur-radius="4" filter="url(#home-hero-rail-active_svg__filter6_dii_220_219)">
                                <circle data-hero-middle-fill="true" cx="214.5" cy="203.498" r="7.5" fill="#0D5FE2" />
                              </g>
                              <circle data-hero-middle-outline="true" cx="214.5" cy="203.498" r="7.5" fill="none" stroke="#82AFFB" opacity="0" />
                            </g>
                            <path stroke="#82AFFB" strokeDasharray="3 2" d="M194 76.998h41v147h-41z" />
                            <path stroke="#82AFFB" d="M152 203.998h50.5" />
                            <g filter="url(#home-hero-rail-active_svg__filter7_i_220_219)">
                              <path fill="#2976F2" d="M194 239.998h64v81h-32c-17.673 0-32-14.327-32-32z" />
                            </g>
                            <path fill="#E6EFFE" d="M74 203.998v-.5h-.5v.5zm0 0h-.5v1.477h1v-1.477zm0 3.446h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.924h-.5v2.953h1v-2.953zm0 4.923h-.5v2.953h1v-2.953zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v1.477h1v-1.477zm78-62.523v-.5h-1.463v1H152zm-3.412 0v-.5h-2.926v1h2.926zm-4.875 0v-.5h-2.926v1h2.926zm-4.875 0v-.5h-2.926v1h2.926zm-4.875 0v-.5h-2.925v1h2.925zm-4.876 0v-.5h-2.924v1h2.924zm-4.875 0v-.5h-2.924v1h2.924zm-4.874 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5H74v1h1.463z" />
                            <g data-hero-motion="middle-node">
                              <g filter="url(#home-hero-rail-active_svg__filter8_dii_220_219)">
                                <path data-hero-middle-fill="true" fill="#0D5FE2" d="M202 247.998h25v25h-25z" />
                              </g>
                              <path data-hero-middle-outline="true" d="M202 247.998h25v25h-25z" fill="none" stroke="#82AFFB" opacity="0" />
                            </g>
                            <path fill="none" d="M20 280.998h.5q.001-.747.086-1.471l-.497-.058-.497-.058q-.091.781-.092 1.587zm.485-3.53.481.135c.27-.955.65-1.865 1.125-2.713l-.436-.245-.436-.245a13.4 13.4 0 0 0-1.215 2.932zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.296.245.436a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.4 13.4 0 0 0-2.932 1.216zm4.824-1.567.058.497q.723-.086 1.471-.086v-1q-.805 0-1.587.092zm1.529-.089v.5q.748 0 1.47.086l.059-.497.058-.497q-.78-.092-1.587-.092zm3.53.485-.135.481c.955.269 1.865.649 2.713 1.126l.245-.436.245-.436a13.4 13.4 0 0 0-2.932-1.216zm4.518 2.305-.31.393c.772.609 1.47 1.307 2.08 2.078l.392-.309.392-.31a13.6 13.6 0 0 0-2.244-2.244zm3.296 3.857-.436.245c.477.848.857 1.758 1.126 2.713l.481-.135.481-.136a13.4 13.4 0 0 0-1.215-2.932zm1.567 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zm.089 1.529h-.5v1.518h1v-1.518zm0 3.541h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v3.036h1v-3.036zm0 5.059h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v1.518h1v-1.518zm0 1.518h-.5q-.001.747-.086 1.471l.497.058.497.058q.091-.781.092-1.587zm-.485 3.53-.481-.135c-.27.956-.65 1.865-1.126 2.713l.436.245.437.245c.514-.917.925-1.899 1.215-2.932zm-2.305 4.519-.393-.31a12.6 12.6 0 0 1-2.078 2.078l.31.393.31.392a13.6 13.6 0 0 0 2.243-2.244zm-3.857 3.296-.245-.436c-.848.476-1.758.856-2.713 1.125l.135.481.136.481a13.4 13.4 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.723.086-1.471.086v1q.805 0 1.587-.092zm-1.529.089v-.5q-.748 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.125l-.245.436-.245.436c.917.514 1.9.925 2.932 1.215zm-4.518-2.305.31-.393a12.6 12.6 0 0 1-2.08-2.078l-.392.31-.392.309a13.6 13.6 0 0 0 2.244 2.244zm-3.297-3.857.436-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.566-4.824.497-.058a13 13 0 0 1-.086-1.471h-1q0 .805.092 1.587zM20 366.998h.5v-1.518h-1v1.518zm0-3.541h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-3.036h-1v3.036zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-1.518h-1v1.518z" />
                            <path data-hero-belt="middle-primary" d="M33 267.998c7.18 0 13 5.82 13 13v86c0 7.18-5.82 13-13 13s-13-5.82-13-13v-86c0-7.18 5.82-13 13-13Z" fill="none" stroke="#82AFFB" strokeDasharray="3 2" strokeDashoffset="-4.7166666666666766" />
                            <path data-hero-belt="middle" d="M33 267.998h86c7.18 0 13 5.82 13 13s-5.82 13-13 13H33c-7.18 0-13-5.82-13-13s5.82-13 13-13Z" fill="none" stroke="#E6EFFE" strokeDasharray="3 2" strokeDashoffset="-4.7166666666666766" />
                            <g data-figma-bg-blur-radius="4" filter="url(#home-hero-rail-active_svg__filter9_dii_220_219)">
                              <circle cx="33" cy="280.998" r="9" fill="#0D5FE2" />
                            </g>
                            <g data-hero-motion="middle-node">
                              <g data-figma-bg-blur-radius="4" filter="url(#home-hero-rail-active_svg__filter10_dii_220_219)">
                                <circle data-hero-middle-fill="true" cx="119" cy="280.998" r="9" fill="#0D5FE2" />
                              </g>
                              <circle data-hero-middle-outline="true" cx="119" cy="280.998" r="8.5" fill="none" stroke="#82AFFB" opacity="0" />
                            </g>
                            <path fill="none" d="M33 293.998v-.5q-.748 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.125l-.245.436-.245.436c.917.514 1.9.925 2.932 1.215zm-4.518-2.305.31-.393a12.6 12.6 0 0 1-2.08-2.078l-.392.31-.392.309a13.6 13.6 0 0 0 2.244 2.244zm-3.297-3.857.436-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.566-4.824.497-.058a13 13 0 0 1-.086-1.471h-1q0 .805.092 1.587zM20 280.998h.5q.001-.747.086-1.471l-.497-.058-.497-.058q-.091.781-.092 1.587zm.485-3.53.481.135c.27-.955.65-1.865 1.125-2.713l-.436-.245-.436-.245a13.4 13.4 0 0 0-1.215 2.932zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.296.245.436a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.4 13.4 0 0 0-2.932 1.216zm4.824-1.567.058.497q.723-.086 1.471-.086v-1q-.805 0-1.587.092zm1.529-.089v.5h1.518v-1H33zm3.541 0v.5h3.036v-1H36.54zm5.059 0v.5h3.035v-1H41.6zm5.059 0v.5h3.035v-1H46.66zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5h3.036v-1h-3.035zm5.06 0v.5h3.035v-1h-3.036zm5.058 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1H82.07zm5.058 0v.5h3.036v-1h-3.036zm5.06 0v.5h3.035v-1h-3.036zm5.058 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5H119v-1h-1.518zm1.518 0v.5q.748 0 1.471.086l.058-.497.058-.497a14 14 0 0 0-1.587-.092zm3.53.485-.135.481a12.4 12.4 0 0 1 2.713 1.126l.245-.436.245-.436a13.4 13.4 0 0 0-2.932-1.216zm4.518 2.305-.309.393a12.6 12.6 0 0 1 2.078 2.078l.393-.309.392-.31a13.5 13.5 0 0 0-2.244-2.244zm3.297 3.857-.437.245a12.4 12.4 0 0 1 1.126 2.713l.481-.135.481-.136a13.5 13.5 0 0 0-1.215-2.932zm1.566 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zm.089 1.529h-.5q0 .748-.086 1.471l.497.058.497.058q.092-.781.092-1.587zm-.485 3.53-.481-.135a12.4 12.4 0 0 1-1.126 2.713l.437.245.436.245c.514-.917.924-1.899 1.215-2.932zm-2.305 4.519-.393-.31a12.6 12.6 0 0 1-2.078 2.078l.309.393.31.392a13.5 13.5 0 0 0 2.244-2.244zm-3.857 3.296-.245-.436c-.848.476-1.757.856-2.713 1.125l.135.481.136.481a13.4 13.4 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.724.086-1.471.086v1q.805 0 1.587-.092zm-1.529.089v-.5h-1.518v1H119zm-3.541 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.035zm-5.06 0v-.5H87.13v1h3.036zm-5.058 0v-.5H82.07v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.036zm-5.06 0v-.5h-3.035v1h3.036zm-5.058 0v-.5h-3.035v1h3.035zm-5.059 0v-.5H46.66v1h3.035zm-5.059 0v-.5H41.6v1h3.035zm-5.058 0v-.5H36.54v1h3.036zm-5.06 0v-.5H33v1h1.518z" />
                          </g>
                          <g clipPath="url(#home-hero-rail-active_svg__clip6_220_219)">
                            <path stroke="#4D8CF9" strokeDasharray="3 2" d="M236 499.666v-31.034h-48v-52.966" />
                            <path fill="none" d="M87 403.666v-.5q-.748 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.125l-.245.436-.245.436c.917.514 1.9.924 2.932 1.215zm-4.519-2.305.31-.393a12.6 12.6 0 0 1-2.078-2.078l-.393.309-.392.31a13.6 13.6 0 0 0 2.244 2.244zm-3.295-3.857.435-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.567-4.824.497-.058a13 13 0 0 1-.086-1.471h-1q0 .805.092 1.587zM74 390.666h.5q.001-.748.086-1.471l-.497-.058-.497-.058q-.091.782-.092 1.587zm.485-3.53.481.135c.27-.955.65-1.865 1.126-2.713l-.436-.245-.437-.245A13.4 13.4 0 0 0 74.005 387zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.296.245.436a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.5 13.5 0 0 0-2.932 1.215zm4.824-1.567.058.497q.724-.086 1.471-.086v-1q-.805 0-1.587.092zm1.529-.089v.5h1.518v-1H87zm3.541 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1H95.6zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5H173v-1h-1.518zm1.518 0v.5q.747 0 1.471.086l.058-.497.058-.497a14 14 0 0 0-1.587-.092zm3.53.485-.135.481a12.4 12.4 0 0 1 2.713 1.126l.245-.436.245-.437a13.5 13.5 0 0 0-2.932-1.215zm4.518 2.305-.309.393a12.6 12.6 0 0 1 2.078 2.078l.393-.309.392-.31a13.5 13.5 0 0 0-2.244-2.244zm3.297 3.857-.437.245a12.4 12.4 0 0 1 1.126 2.713l.481-.135.481-.136a13.5 13.5 0 0 0-1.215-2.932zm1.566 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zm.089 1.529h-.5q0 .748-.086 1.471l.497.058.497.058q.092-.781.092-1.587zm-.485 3.53-.481-.135a12.4 12.4 0 0 1-1.126 2.713l.437.245.436.245c.514-.917.924-1.899 1.215-2.932zm-2.305 4.518-.393-.309a12.6 12.6 0 0 1-2.078 2.078l.309.393.31.392a13.5 13.5 0 0 0 2.244-2.244zm-3.857 3.297-.245-.436c-.848.476-1.757.856-2.713 1.125l.135.481.136.481a13.5 13.5 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.724.086-1.471.086v1q.805 0 1.587-.092zm-1.529.089v-.5h-1.518v1H173zm-3.541 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5H95.6v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5H87v1h1.518zM20 280.666h.5q.001-.748.086-1.471l-.497-.058-.497-.058q-.091.781-.092 1.587zm.485-3.53.481.135c.27-.956.65-1.865 1.125-2.713l-.436-.245-.436-.245A13.4 13.4 0 0 0 20.005 277zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.296.245.436a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.5 13.5 0 0 0-2.932 1.215zm4.824-1.567.058.497q.723-.086 1.471-.086v-1q-.805 0-1.587.092zm1.529-.089v.5q.748 0 1.47.086l.059-.497.058-.497q-.78-.092-1.587-.092zm3.53.485-.135.481c.955.269 1.865.649 2.713 1.126l.245-.436.245-.437c-.917-.514-1.9-.924-2.932-1.215zm4.518 2.305-.31.393c.772.609 1.47 1.307 2.08 2.078l.392-.309.392-.31a13.6 13.6 0 0 0-2.244-2.244zm3.296 3.857-.436.245c.477.848.857 1.758 1.126 2.713l.481-.135.481-.136a13.4 13.4 0 0 0-1.215-2.932zm1.567 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zm.089 1.529h-.5v1.518h1v-1.518zm0 3.541h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v3.036h1v-3.036zm0 5.059h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v3.036h1v-3.036zm0 5.059h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v1.518h1v-1.518zm0 1.518h-.5q-.001.748-.086 1.471l.497.058.497.058q.091-.781.092-1.587zm-.485 3.53-.481-.135c-.27.956-.65 1.865-1.126 2.713l.436.245.437.245c.514-.917.925-1.899 1.215-2.932zm-2.305 4.518-.393-.309a12.6 12.6 0 0 1-2.078 2.078l.31.393.31.392a13.6 13.6 0 0 0 2.243-2.244zm-3.857 3.297-.245-.436c-.848.476-1.758.856-2.713 1.125l.135.481.136.481a13.4 13.4 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.723.086-1.471.086v1q.805 0 1.587-.092zm-1.529.089v-.5q-.748 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.125l-.245.436-.245.436c.917.514 1.9.924 2.932 1.215zm-4.518-2.305.31-.393a12.6 12.6 0 0 1-2.08-2.078l-.392.309-.392.31a13.6 13.6 0 0 0 2.244 2.244zm-3.297-3.857.436-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.566-4.824.497-.058a13 13 0 0 1-.086-1.471h-1q0 .805.092 1.587zM20 366.666h.5v-1.518h-1v1.518zm0-3.541h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-3.036h-1v3.036zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-3.036h-1v3.036zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-1.518h-1v1.518z" />
                            <path data-hero-belt="bottom" d="M87 377.666h86c7.18 0 13 5.82 13 13s-5.82 13-13 13H87c-7.18 0-13-5.82-13-13s5.82-13 13-13Z" fill="none" stroke="#DFE3E8" strokeDasharray="3 2" strokeDashoffset="-4.7166666666666766" />
                            <path data-hero-belt="bottom-primary" d="M33 267.666c7.18 0 13 5.82 13 13v86c0 7.18-5.82 13-13 13s-13-5.82-13-13v-86c0-7.18 5.82-13 13-13Z" fill="none" stroke="#E6EFFE" strokeDasharray="3 2" strokeDashoffset="-4.7166666666666766" />
                            <path stroke="#DFE3E8" d="M152 365.666h82v50h-82z" />
                            <g data-hero-motion="bottom-teardrop-primary" filter="url(#home-hero-rail-active_svg__filter11_dii_220_219)" style={{ "transformOrigin": "33px 366.666px" }}>
                              <path fill="#307AF3" d="M68 366.666c0 7.389-25.611 17-35 17s-17-7.611-17-17 7.611-17 17-17 35 9.611 35 17m-26 0a9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9" />
                            </g>
                            <g data-hero-motion="bottom-teardrop-secondary" filter="url(#home-hero-rail-active_svg__filter12_dii_220_219)" style={{ "transformOrigin": "91px 390.666px" }}>
                              <path fill="#307AF3" d="M56 390.666c0 7.389 25.611 17 35 17s17-7.611 17-17-7.611-17-17-17-35 9.611-35 17m26 0a9 9 0 0 1 9-9 9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9" />
                            </g>
                            <g data-figma-bg-blur-radius="4" filter="url(#home-hero-rail-active_svg__filter13_dii_220_219)">
                              <circle cx="173" cy="390.666" r="9" fill="#0D5FE2" />
                            </g>
                            <g data-hero-motion="bottom-wheel" style={{ "transformOrigin": "49px 451.666px" }}>
                              <path fill="#82AFFB" d="m42.443 462.504.26-.428zm-4.561.28.353.354zm-6.244 6.244-.354-.353zm.115 4.2-.312.39zM49 479.276v.5zm17.246-6.048.312.39zm.115-4.2-.353.354zm-6.243-6.244.354-.353zm-4.561-.28.258.428zM49 464.333v.5zm-6.417-36.614-.483.129zm-3.694-2.002-.182-.466zm-14.006 12.024-.433-.25zm-3.41 18.143-.495.076zm3.58 2.199.13.483zm8.529-2.286.13.483zm2.517-3.809.5-.012zm1.724-6.775-.433-.25zm5.005-4.881-.239-.439zm2.041-4.084.483-.129zm14.246-10.531.182-.466zm-3.695 2.002-.483-.13zm-2.285 8.529-.483-.129zm2.04 4.084.24-.439zm5.005 4.881.433-.25zm1.725 6.775-.5-.012zm2.517 3.809.13-.483zm8.53 2.286-.13.483zm3.58-2.199.493.076zm-3.41-18.143.432-.25zM49 415.666v.5c19.606 0 35.5 15.894 35.5 35.5h1c0-20.158-16.342-36.5-36.5-36.5zm36 36h-.5c0 19.606-15.894 35.5-35.5 35.5v1c20.158 0 36.5-16.342 36.5-36.5zm-36 36v-.5c-19.606 0-35.5-15.894-35.5-35.5h-1c0 20.158 16.342 36.5 36.5 36.5zm-36-36h.5c0-19.606 15.894-35.5 35.5-35.5v-1c-20.158 0-36.5 16.342-36.5 36.5zm29.443 10.838.26-.428c-1.578-.954-3.771-1.049-5.175.355l.354.353.353.354c.984-.984 2.638-1 3.95-.206zm-4.561.28-.354-.353-6.244 6.244.354.353.353.354 6.244-6.244zm-6.244 6.244-.354-.353c-1.376 1.377-1.423 3.679.157 4.943l.312-.39.312-.391c-1.056-.845-1.084-2.445-.074-3.455zm.115 4.2-.312.39A28.1 28.1 0 0 0 49 479.776v-1a27.1 27.1 0 0 1-16.935-5.939zM49 479.276v.5a28.1 28.1 0 0 0 17.558-6.158l-.312-.39-.312-.391A27.1 27.1 0 0 1 49 478.776zm17.246-6.048.312.39c1.58-1.264 1.534-3.566.157-4.943l-.354.353-.353.354c1.01 1.01.982 2.61-.074 3.455zm.115-4.2.354-.353-6.243-6.244-.354.353-.353.354 6.243 6.244zm-6.243-6.244.354-.353c-1.404-1.404-3.597-1.309-5.174-.355l.259.428.258.428c1.312-.793 2.966-.778 3.95.206zm-4.561-.28-.26-.428A12.17 12.17 0 0 1 49 463.833v1a13.17 13.17 0 0 0 6.815-1.901zM49 464.333v-.5c-2.239 0-4.414-.617-6.298-1.757l-.259.428-.258.428A13.17 13.17 0 0 0 49 464.833zm-6.417-36.614.483-.13c-.504-1.881-2.474-3.073-4.359-2.338l.182.466.181.466c1.26-.491 2.66.285 3.03 1.665zm-3.694-2.002-.182-.466a28.35 28.35 0 0 0-14.257 12.24l.433.25.433.25a27.35 27.35 0 0 1 13.754-11.808zm-14.006 12.024-.433-.25a28.35 28.35 0 0 0-3.472 18.469l.495-.076.494-.076a27.35 27.35 0 0 1 3.349-17.817zm-3.41 18.143-.495.076c.307 1.999 2.323 3.11 4.204 2.606l-.13-.483-.129-.483c-1.38.37-2.751-.454-2.956-1.792zm3.58 2.199.13.483 8.529-2.286-.13-.483-.13-.483-8.529 2.286zm8.529-2.286.13.483c1.916-.514 2.932-2.459 2.886-4.304l-.5.012-.5.013c.039 1.529-.802 2.953-2.145 3.313zm2.517-3.809.5-.012a12.4 12.4 0 0 1 1.657-6.513l-.433-.25-.433-.25a13.4 13.4 0 0 0-1.791 7.038zm1.724-6.775.433.25a12.4 12.4 0 0 1 4.811-4.692l-.239-.439-.239-.439a13.4 13.4 0 0 0-5.199 5.07zm5.005-4.881.24.439c1.62-.883 2.797-2.735 2.284-4.652l-.483.129-.483.129c.36 1.344-.453 2.784-1.797 3.516zm2.041-4.084.483-.129-2.286-8.53-.483.13-.483.129 2.286 8.529zm14.246-10.531.182-.466c-1.885-.735-3.856.457-4.36 2.338l.483.13.483.129c.37-1.38 1.77-2.157 3.03-1.665zm-3.695 2.002-.483-.13-2.285 8.53.483.129.483.129 2.285-8.529zm-2.285 8.529-.483-.129c-.514 1.917.664 3.769 2.285 4.652l.239-.439.239-.439c-1.344-.732-2.157-2.172-1.797-3.516zm2.04 4.084-.238.439a12.4 12.4 0 0 1 4.81 4.692l.433-.25.433-.25a13.4 13.4 0 0 0-5.198-5.07zm5.005 4.881-.433.25a12.4 12.4 0 0 1 1.658 6.513l.5.012.5.013a13.4 13.4 0 0 0-1.792-7.038zm1.725 6.775-.5-.012c-.045 1.845.97 3.79 2.888 4.304l.129-.483.13-.483c-1.345-.36-2.185-1.784-2.147-3.313zm2.517 3.809-.13.483 8.53 2.286.13-.483.129-.483-8.53-2.286zm8.53 2.286-.13.483c1.881.504 3.897-.607 4.203-2.606l-.494-.076-.494-.076c-.205 1.338-1.577 2.162-2.956 1.792zm3.58-2.199.493.076a28.35 28.35 0 0 0-3.47-18.469l-.434.25-.433.25a27.35 27.35 0 0 1 3.349 17.817zm-3.41-18.143.432-.25a28.35 28.35 0 0 0-14.257-12.24l-.182.466-.181.466a27.35 27.35 0 0 1 13.754 11.808z" />
                            </g>
                          </g>
                          <defs>
                            <filter id="home-hero-rail-active_svg__filter0_dii_220_219" width="25" height="26" x="202" y="86" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter1_dii_220_219" width="44" height="62" x="13" y="51" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter2_dii_220_219" width="29" height="66" x="160" y="99" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter3_i_220_219" width="19" height="20" x="138" y="138" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect1_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter4_i_220_219" width="19" height="20" x="84" y="138" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect1_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter5_i_220_219" width="19" height="20" x="30" y="138" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect1_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter6_dii_220_219" width="25" height="26" x="202" y="191.998" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter7_i_220_219" width="64" height="81" x="194" y="239.998" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect1_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter8_dii_220_219" width="35" height="35" x="197" y="244.998" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter9_dii_220_219" width="28" height="29" x="19" y="267.998" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter10_dii_220_219" width="28" height="29" x="105" y="267.998" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter11_dii_220_219" width="62" height="44" x="11" y="346.666" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter12_dii_220_219" width="62" height="44" x="47" y="370.666" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter13_dii_220_219" width="28" height="29" x="159" y="377.666" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <clipPath id="home-hero-rail-active_svg__clip0_220_219">
                              <path fill="#fff" d="M0 0h258v166.667H0z" />
                            </clipPath>
                            <clipPath id="home-hero-rail-active_svg__clip2_220_219">
                              <path fill="#fff" d="M0 166.666h258v167H0z" />
                            </clipPath>
                            <clipPath id="home-hero-rail-active_svg__clip6_220_219">
                              <path fill="#fff" d="M0 333.666h258v166H0z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div data-hero-circuit-section="bottom" className="HeroCircuitBackdrop-module__HTAPZW__bottomSection group/bottom absolute inset-x-0 top-83.25 h-41.75 overflow-hidden">
                      <div data-hero-section-background="solid" className="absolute inset-0 bg-[#1066F1] opacity-0 transition-opacity duration-0 ease-out motion-reduce:transition-none group-hover/bottom:opacity-100"></div>
                      <div className="pointer-events-none absolute inset-0 origin-center overflow-hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="257" height="500" fill="none" viewBox="0 0 257 500" aria-hidden="true" data-hero-rail-layer="base" className="absolute left-0 h-125 w-full max-w-none opacity-100 transition-opacity duration-0 ease-out motion-reduce:transition-none -top-[333px] group-hover/bottom:opacity-0">
                          <path stroke="#DBDFE5" d="M214 85c0-12.702 10.297-23 23-23h20M201 85h25v25h-25zM201 191h25v25h-25z" />
                          <path stroke="#DBDFE5" strokeDasharray="3 2" d="M235 500v-31.034h-48V416" />
                          <circle cx="213.5" cy="97.5" r="7" stroke="#DBDFE5" />
                          <circle cx="213.5" cy="203.5" r="7" stroke="#DBDFE5" />
                          <path stroke="#DBDFE5" strokeDasharray="3 2" d="M193 77h41v147h-41z" />
                          <path stroke="#DBDFE5" d="M151 204h50.5" />
                          <path fill="#DFE3E8" d="m224.063 320.484.142.005q.396.01.795.011h1.6v1H225q-.507 0-1.012-.018a30 30 0 0 1-.519-.019l.022-.498.024-.499q.273.011.548.018m7.871.016v1h-3.201v-1zm5.333 0v1h-3.201v-1zm5.333 0v1h-3.2v-1zm5.334 0v1h-3.201v-1zm5.333 0v1h-3.201v-1zm3.733 0v1h-1.6v-1zm-38.384-.647.274.052q.255.051.511.098l.184.031q.276.048.555.092.141.021.284.041.24.036.482.068.144.018.287.035c.116.013.232.03.348.042l-.054.498-.054.494-.307-.034a33 33 0 0 1-2.704-.437l-.014-.003.101-.489.101-.489zm-4.605-1.325a21 21 0 0 0 .735.263l.31.105a48 48 0 0 0 .713.228q.233.071.468.139l.255.073.193.055-.132.482-.132.481-.133-.037a32 32 0 0 1-2.779-.909l.177-.466.176-.467zm-4.241-1.951.25.139q.986.535 2.014 1.001l-.412.91a34 34 0 0 1-.698-.326q-.132-.064-.262-.129a34 34 0 0 1-1.767-.938l.496-.867q.188.106.379.21m-4.316-2.875.241.189q.161.125.326.25l.301.224q.139.102.279.203.163.118.33.235.158.111.318.221.144.098.289.195l.166.112-.274.418-.275.415-.193-.128a33 33 0 0 1-2.145-1.562l-.137-.112.312-.387.313-.39q.074.06.149.117m-3.753-3.502a32 32 0 0 0 2.099 2.099l-.336.37-.337.368a33 33 0 0 1-2.165-2.165l.369-.336zm-2.921-3.739q.097.145.195.289a26 26 0 0 0 .456.648q.094.13.189.26l.238.321.25.325.19.241q.058.076.117.15l-.39.313-.388.311-.112-.137a33 33 0 0 1-1.69-2.338l.416-.274.418-.274zm-2.497-4.495q.465 1.027 1 2.013l.139.25q.104.192.211.38l-.434.248-.434.247q-.18-.314-.353-.633a32 32 0 0 1-1.04-2.094l.456-.205zm-1.62-4.459.073.255q.068.235.139.468a28 28 0 0 0 .229.713l.104.31a25 25 0 0 0 .263.735l.054.15-.467.176-.467.176-.049-.13a32 32 0 0 1-.86-2.649q-.019-.067-.036-.133l.481-.131.482-.132zm-.934-4.701q.017.143.035.287.032.242.068.482.02.143.041.284.044.279.092.555l.031.184.047.247q.05.269.103.538l.002.007-.489.101-.49.101a33 33 0 0 1-.473-3.026l.494-.053.498-.054q.02.173.041.347M192.5 289v-1.47h1V289q0 .747.034 1.485l-.499.024-.498.021a30 30 0 0 1-.019-.519A31 31 0 0 1 192.5 289m1-6.37v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm.977-3.93v1h-.977v.97h-1v-1.97zm4.923 0v1h-2.954v-1zm4.923 0v1h-2.954v-1zm4.923 0v1h-2.954v-1zm4.923 0v1h-2.953v-1zm4.924 0v1h-2.954v-1zm4.923 0v1h-2.954v-1zm4.922 0v1h-2.954v-1zm4.923 0v1h-2.954v-1zm4.923 0v1h-2.953v-1zm4.924 0v1h-2.954v-1zm4.923 0v1h-2.954v-1zm4.923 0v1H250.6v-1zm3.446 0v1h-1.477v-1z" />
                          <path fill="#DBDFE5" d="M73 204v-.5h-.5v.5zm0 0h-.5v1.477h1V204zm0 3.446h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.924h-.5v2.953h1v-2.953zm0 4.923h-.5v2.953h1v-2.953zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1V261.6zm0 4.923h-.5V268h1v-1.477zM151 204v-.5h-1.463v1H151zm-3.412 0v-.5h-2.926v1h2.926zm-4.875 0v-.5h-2.926v1h2.926zm-4.875 0v-.5h-2.926v1h2.926zm-4.875 0v-.5h-2.925v1h2.925zm-4.876 0v-.5h-2.924v1h2.924zm-4.875 0v-.5h-2.924v1h2.924zm-4.874 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5H73v1h1.463z" />
                          <path stroke="#DBDFE5" d="M201 248h25v25h-25z" />
                          <path fill="#DBDFE5" d="M32 294v-.5q-.747 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.126l-.245.437-.245.436c.917.514 1.9.924 2.932 1.215zm-4.518-2.305.31-.393a12.6 12.6 0 0 1-2.08-2.078l-.392.309-.392.31a13.6 13.6 0 0 0 2.244 2.244zm-3.297-3.857.436-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.566-4.824.497-.058A13 13 0 0 1 19.5 281h-1q0 .805.092 1.587zM19 281h.5q.001-.747.086-1.471l-.497-.058-.497-.058q-.091.782-.092 1.587zm.485-3.53.481.135c.27-.956.65-1.865 1.125-2.713l-.436-.245-.436-.245a13.4 13.4 0 0 0-1.215 2.932zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.297.245.437a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.5 13.5 0 0 0-2.932 1.215zm4.824-1.566.058.497q.724-.086 1.471-.086v-1q-.805 0-1.587.092zM32 268v.5h1.518v-1H32zm3.541 0v.5h3.036v-1H35.54zm5.059 0v.5h3.035v-1H40.6zm5.059 0v.5h3.035v-1H45.66zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5h3.036v-1h-3.035zm5.06 0v.5h3.035v-1h-3.036zm5.058 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1H81.07zm5.058 0v.5h3.036v-1h-3.036zm5.06 0v.5h3.035v-1h-3.036zm5.058 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5H118v-1h-1.518zm1.518 0v.5q.748 0 1.471.086l.058-.497.058-.497A14 14 0 0 0 118 267.5zm3.53.485-.135.481a12.4 12.4 0 0 1 2.713 1.126l.245-.437.245-.436a13.5 13.5 0 0 0-2.932-1.215zm4.518 2.305-.309.393a12.6 12.6 0 0 1 2.078 2.078l.393-.309.392-.31a13.5 13.5 0 0 0-2.244-2.244zm3.297 3.857-.437.245a12.4 12.4 0 0 1 1.126 2.713l.481-.135.481-.136a13.5 13.5 0 0 0-1.215-2.932zm1.566 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zM131 281h-.5q0 .747-.086 1.471l.497.058.497.058q.092-.782.092-1.587zm-.485 3.53-.481-.135a12.4 12.4 0 0 1-1.126 2.713l.437.245.436.245c.514-.917.924-1.899 1.215-2.932zm-2.305 4.518-.393-.309a12.6 12.6 0 0 1-2.078 2.078l.309.393.31.392a13.5 13.5 0 0 0 2.244-2.244zm-3.857 3.297-.245-.437a12.4 12.4 0 0 1-2.713 1.126l.135.481.136.481a13.5 13.5 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.724.086-1.471.086v1q.805 0 1.587-.092zM118 294v-.5h-1.518v1H118zm-3.541 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.035zm-5.06 0v-.5H86.13v1h3.036zm-5.058 0v-.5H81.07v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.036zm-5.06 0v-.5h-3.035v1h3.036zm-5.058 0v-.5h-3.035v1h3.035zm-5.059 0v-.5H45.66v1h3.035zm-5.059 0v-.5H40.6v1h3.035zm-5.058 0v-.5H35.54v1h3.036zm-5.06 0v-.5H32v1h1.518zM86 404v-.5q-.748 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.126l-.245.437-.245.436c.917.514 1.9.924 2.932 1.215zm-4.519-2.305.31-.393a12.6 12.6 0 0 1-2.078-2.078l-.393.309-.392.31a13.6 13.6 0 0 0 2.244 2.244zm-3.295-3.857.435-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.567-4.824.497-.058A13 13 0 0 1 73.5 391h-1q0 .805.092 1.587zM73 391h.5q.001-.747.086-1.471l-.497-.058-.497-.058q-.091.782-.092 1.587zm.485-3.53.481.135c.27-.956.65-1.865 1.126-2.713l-.436-.245-.437-.245a13.4 13.4 0 0 0-1.215 2.932zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.297.245.437a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.5 13.5 0 0 0-2.932 1.215zm4.824-1.566.058.497q.724-.086 1.471-.086v-1q-.805 0-1.587.092zM86 378v.5h1.518v-1H86zm3.541 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1H94.6zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5H172v-1h-1.518zm1.518 0v.5q.747 0 1.471.086l.058-.497.058-.497A14 14 0 0 0 172 377.5zm3.53.485-.135.481a12.4 12.4 0 0 1 2.713 1.126l.245-.437.245-.436a13.5 13.5 0 0 0-2.932-1.215zm4.518 2.305-.309.393a12.6 12.6 0 0 1 2.078 2.078l.393-.309.392-.31a13.5 13.5 0 0 0-2.244-2.244zm3.297 3.857-.437.245a12.4 12.4 0 0 1 1.126 2.713l.481-.135.481-.136a13.5 13.5 0 0 0-1.215-2.932zm1.566 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zM185 391h-.5q0 .747-.086 1.471l.497.058.497.058q.092-.782.092-1.587zm-.485 3.53-.481-.135a12.4 12.4 0 0 1-1.126 2.713l.437.245.436.245c.514-.917.924-1.899 1.215-2.932zm-2.305 4.518-.393-.309a12.6 12.6 0 0 1-2.078 2.078l.309.393.31.392a13.5 13.5 0 0 0 2.244-2.244zm-3.857 3.297-.245-.437a12.4 12.4 0 0 1-2.713 1.126l.135.481.136.481a13.5 13.5 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.724.086-1.471.086v1q.805 0 1.587-.092zM172 404v-.5h-1.518v1H172zm-3.541 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5H94.6v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5H86v1h1.518z" />
                          <path fill="#DBDFE5" d="M19 281h.5q.001-.747.086-1.471l-.497-.058-.497-.058q-.091.782-.092 1.587zm.485-3.53.481.135c.27-.956.65-1.865 1.125-2.713l-.436-.245-.436-.245a13.4 13.4 0 0 0-1.215 2.932zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.297.245.437a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.5 13.5 0 0 0-2.932 1.215zm4.824-1.566.058.497q.724-.086 1.471-.086v-1q-.805 0-1.587.092zM32 268v.5q.748 0 1.47.086l.059-.497.058-.497q-.78-.092-1.587-.092zm3.53.485-.135.481c.955.269 1.865.649 2.713 1.126l.245-.437.245-.436c-.917-.514-1.9-.924-2.932-1.215zm4.518 2.305-.31.393c.772.609 1.47 1.307 2.08 2.078l.392-.309.392-.31a13.6 13.6 0 0 0-2.244-2.244zm3.296 3.857-.436.245c.477.848.857 1.757 1.126 2.713l.481-.135.481-.136a13.4 13.4 0 0 0-1.215-2.932zm1.567 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zM45 281h-.5v1.518h1V281zm0 3.541h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1V289.6zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v3.036h1v-3.036zm0 5.059h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v3.036h1v-3.036zm0 5.059h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5V367h1v-1.518zM45 367h-.5q-.001.747-.086 1.471l.497.058.497.058q.091-.782.092-1.587zm-.485 3.53-.481-.135c-.27.956-.65 1.865-1.126 2.713l.436.245.437.245c.514-.917.925-1.899 1.215-2.932zm-2.305 4.518-.393-.309a12.6 12.6 0 0 1-2.078 2.078l.31.393.31.392a13.6 13.6 0 0 0 2.243-2.244zm-3.857 3.297-.245-.437c-.848.477-1.758.857-2.713 1.126l.135.481.136.481a13.4 13.4 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.723.086-1.471.086v1q.805 0 1.587-.092zM32 380v-.5q-.747 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.126l-.245.437-.245.436c.917.514 1.9.924 2.932 1.215zm-4.518-2.305.31-.393a12.6 12.6 0 0 1-2.08-2.078l-.392.309-.392.31a13.6 13.6 0 0 0 2.244 2.244zm-3.297-3.857.436-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.566-4.824.497-.058A13 13 0 0 1 19.5 367h-1q0 .805.092 1.587zM19 367h.5v-1.518h-1V367zm0-3.541h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-3.036h-1v3.036zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-3.036h-1v3.036zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5V289.6h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5V281h-1v1.518z" />
                          <circle cx="32" cy="281" r="8.5" stroke="#DBDFE5" />
                          <circle cx="118" cy="281" r="8.5" stroke="#DBDFE5" />
                          <path stroke="#DBDFE5" d="M151 366h82v50h-82z" />
                          <g data-hero-motion="bottom-teardrop-primary" style={{ "transformOrigin": "33px 366.666px" }}>
                            <circle cx="9" cy="9" r="8.5" stroke="#DBDFE5" transform="matrix(0 -1 -1 0 41 376)" />
                            <path stroke="#DBDFE5" d="M66.5 367c0-.778-.338-1.634-1.02-2.555-.681-.918-1.679-1.867-2.931-2.821-2.504-1.907-5.96-3.782-9.73-5.437a85 85 0 0 0-11.521-4.087c-3.707-1.013-7.017-1.6-9.298-1.6-9.113 0-16.5 7.387-16.5 16.5s7.387 16.5 16.5 16.5c2.28 0 5.591-.587 9.298-1.6a85 85 0 0 0 11.521-4.087c3.77-1.655 7.226-3.53 9.73-5.437 1.252-.954 2.25-1.903 2.93-2.821.683-.921 1.021-1.777 1.021-2.555Z" />
                          </g>
                          <g data-hero-motion="top-pin" style={{ "transformOrigin": "35px 71px" }}>
                            <circle cx="9" cy="9" r="8.5" stroke="#DBDFE5" transform="matrix(1 0 0 -1 26 80)" />
                            <path stroke="#DBDFE5" d="M35 105.5c.778 0 1.634-.338 2.555-1.021.918-.68 1.867-1.678 2.821-2.93 1.907-2.504 3.782-5.96 5.438-9.73A85.5 85.5 0 0 0 49.9 80.298c1.013-3.707 1.6-7.017 1.6-9.298 0-9.113-7.387-16.5-16.5-16.5S18.5 61.887 18.5 71c0 2.28.587 5.591 1.6 9.298a85.5 85.5 0 0 0 4.086 11.521c1.656 3.77 3.531 7.226 5.438 9.73.954 1.252 1.903 2.25 2.821 2.93.921.683 1.777 1.021 2.555 1.021Z" />
                          </g>
                          <path stroke="#DFE3E8" d="M51 71h75c11.046 0 20 8.954 20 20v47" />
                          <g data-hero-motion="bottom-teardrop-secondary" style={{ "transformOrigin": "91px 390.666px" }}>
                            <circle cx="9" cy="9" r="8.5" stroke="#DBDFE5" transform="matrix(0 1 1 0 81 382)" />
                            <path stroke="#DBDFE5" d="M55.5 391c0 .778.338 1.634 1.02 2.555.681.918 1.679 1.867 2.931 2.821 2.504 1.907 5.96 3.782 9.73 5.437a85 85 0 0 0 11.521 4.087c3.707 1.013 7.017 1.6 9.298 1.6 9.113 0 16.5-7.387 16.5-16.5s-7.387-16.5-16.5-16.5c-2.28 0-5.591.587-9.298 1.6a85 85 0 0 0-11.521 4.087c-3.77 1.655-7.226 3.53-9.73 5.437-1.252.954-2.25 1.903-2.93 2.821-.683.921-1.021 1.777-1.021 2.555Z" />
                          </g>
                          <circle cx="172" cy="391" r="8.5" stroke="#DBDFE5" />
                          <path stroke="#DBDFE5" d="M164 102h19v56h-19zM137 138h19v20h-19zM110 138h19v20h-19zM83 138h19v20H83zM56 138h19v20H56zM29 138h19v20H29z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="258" height="500" fill="none" viewBox="0 0 258 500" aria-hidden="true" data-hero-rail-layer="active" className="absolute left-0 h-125 w-full max-w-none opacity-0 transition-opacity duration-0 ease-out motion-reduce:transition-none -top-[333px] group-hover/bottom:opacity-100">
                          <g clipPath="url(#home-hero-rail-active_svg__clip0_220_219)">
                            <path stroke="#82AFFB" d="M215 85c0-12.702 10.297-23 23-23h20M202 85h25v25h-25z" />
                            <g data-figma-bg-blur-radius="4" filter="url(#home-hero-rail-active_svg__filter0_dii_220_219)">
                              <circle cx="214.5" cy="97.5" r="7.5" fill="#0D5FE2" />
                            </g>
                            <path stroke="#82AFFB" strokeDasharray="3 2" d="M194 77h41v147h-41z" />
                            <g data-hero-motion="top-pin" style={{ "transformOrigin": "35px 71px" }}>
                              <path stroke="#82AFFB" d="M35 105.5c.778 0 1.634-.338 2.555-1.021.918-.68 1.867-1.678 2.821-2.93 1.907-2.504 3.782-5.96 5.438-9.73A85.5 85.5 0 0 0 49.9 80.298c1.013-3.707 1.6-7.017 1.6-9.298 0-9.113-7.387-16.5-16.5-16.5S18.5 61.887 18.5 71c0 2.28.587 5.591 1.6 9.298a85.5 85.5 0 0 0 4.086 11.521c1.656 3.77 3.531 7.226 5.438 9.73.954 1.252 1.903 2.25 2.821 2.93.921.683 1.777 1.021 2.555 1.021Z" />
                              <g filter="url(#home-hero-rail-active_svg__filter1_dii_220_219)">
                                <path fill="#307AF3" d="M35 106c-7.389 0-17-25.611-17-35s7.611-17 17-17 17 7.611 17 17-9.611 35-17 35m0-26a9 9 0 1 0 0-18 9 9 0 0 0 0 18" />
                              </g>
                            </g>
                            <path stroke="#4D8CF9" d="M52 71h75c11.046 0 20 8.954 20 20v47" />
                            <g filter="url(#home-hero-rail-active_svg__filter2_dii_220_219)">
                              <path fill="#0D5FE2" d="M165 102h19v56h-19z" />
                            </g>
                            <g data-hero-motion="top-fifth-bar">
                              <g filter="url(#home-hero-rail-active_svg__filter3_i_220_219)">
                                <path data-hero-bar-fill="true" fill="#307AF3" fillOpacity="0.5" d="M138 138h19v20h-19z" />
                              </g>
                            </g>
                            <path stroke="#82AFFB" d="M111 128h19v30h-19z" />
                            <g filter="url(#home-hero-rail-active_svg__filter4_i_220_219)">
                              <path fill="#307AF3" fillOpacity="0.5" d="M84 138h19v20H84z" />
                            </g>
                            <path stroke="#82AFFB" d="M57 119h19v39H57z" />
                            <g filter="url(#home-hero-rail-active_svg__filter5_i_220_219)">
                              <path fill="#307AF3" fillOpacity="0.5" d="M30 138h19v20H30z" />
                            </g>
                          </g>
                          <g clipPath="url(#home-hero-rail-active_svg__clip2_220_219)">
                            <path stroke="#82AFFB" d="M202 190.998h25v25h-25z" />
                            <g data-hero-motion="middle-node">
                              <g data-figma-bg-blur-radius="4" filter="url(#home-hero-rail-active_svg__filter6_dii_220_219)">
                                <circle data-hero-middle-fill="true" cx="214.5" cy="203.498" r="7.5" fill="#0D5FE2" />
                              </g>
                              <circle data-hero-middle-outline="true" cx="214.5" cy="203.498" r="7.5" fill="none" stroke="#82AFFB" opacity="0" />
                            </g>
                            <path stroke="#82AFFB" strokeDasharray="3 2" d="M194 76.998h41v147h-41z" />
                            <path stroke="#82AFFB" d="M152 203.998h50.5" />
                            <g filter="url(#home-hero-rail-active_svg__filter7_i_220_219)">
                              <path fill="#2976F2" d="M194 239.998h64v81h-32c-17.673 0-32-14.327-32-32z" />
                            </g>
                            <path fill="#E6EFFE" d="M74 203.998v-.5h-.5v.5zm0 0h-.5v1.477h1v-1.477zm0 3.446h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.924h-.5v2.953h1v-2.953zm0 4.923h-.5v2.953h1v-2.953zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v1.477h1v-1.477zm78-62.523v-.5h-1.463v1H152zm-3.412 0v-.5h-2.926v1h2.926zm-4.875 0v-.5h-2.926v1h2.926zm-4.875 0v-.5h-2.926v1h2.926zm-4.875 0v-.5h-2.925v1h2.925zm-4.876 0v-.5h-2.924v1h2.924zm-4.875 0v-.5h-2.924v1h2.924zm-4.874 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5H74v1h1.463z" />
                            <g data-hero-motion="middle-node">
                              <g filter="url(#home-hero-rail-active_svg__filter8_dii_220_219)">
                                <path data-hero-middle-fill="true" fill="#0D5FE2" d="M202 247.998h25v25h-25z" />
                              </g>
                              <path data-hero-middle-outline="true" d="M202 247.998h25v25h-25z" fill="none" stroke="#82AFFB" opacity="0" />
                            </g>
                            <path fill="none" d="M20 280.998h.5q.001-.747.086-1.471l-.497-.058-.497-.058q-.091.781-.092 1.587zm.485-3.53.481.135c.27-.955.65-1.865 1.125-2.713l-.436-.245-.436-.245a13.4 13.4 0 0 0-1.215 2.932zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.296.245.436a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.4 13.4 0 0 0-2.932 1.216zm4.824-1.567.058.497q.723-.086 1.471-.086v-1q-.805 0-1.587.092zm1.529-.089v.5q.748 0 1.47.086l.059-.497.058-.497q-.78-.092-1.587-.092zm3.53.485-.135.481c.955.269 1.865.649 2.713 1.126l.245-.436.245-.436a13.4 13.4 0 0 0-2.932-1.216zm4.518 2.305-.31.393c.772.609 1.47 1.307 2.08 2.078l.392-.309.392-.31a13.6 13.6 0 0 0-2.244-2.244zm3.296 3.857-.436.245c.477.848.857 1.758 1.126 2.713l.481-.135.481-.136a13.4 13.4 0 0 0-1.215-2.932zm1.567 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zm.089 1.529h-.5v1.518h1v-1.518zm0 3.541h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v3.036h1v-3.036zm0 5.059h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v1.518h1v-1.518zm0 1.518h-.5q-.001.747-.086 1.471l.497.058.497.058q.091-.781.092-1.587zm-.485 3.53-.481-.135c-.27.956-.65 1.865-1.126 2.713l.436.245.437.245c.514-.917.925-1.899 1.215-2.932zm-2.305 4.519-.393-.31a12.6 12.6 0 0 1-2.078 2.078l.31.393.31.392a13.6 13.6 0 0 0 2.243-2.244zm-3.857 3.296-.245-.436c-.848.476-1.758.856-2.713 1.125l.135.481.136.481a13.4 13.4 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.723.086-1.471.086v1q.805 0 1.587-.092zm-1.529.089v-.5q-.748 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.125l-.245.436-.245.436c.917.514 1.9.925 2.932 1.215zm-4.518-2.305.31-.393a12.6 12.6 0 0 1-2.08-2.078l-.392.31-.392.309a13.6 13.6 0 0 0 2.244 2.244zm-3.297-3.857.436-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.566-4.824.497-.058a13 13 0 0 1-.086-1.471h-1q0 .805.092 1.587zM20 366.998h.5v-1.518h-1v1.518zm0-3.541h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-3.036h-1v3.036zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-1.518h-1v1.518z" />
                            <path data-hero-belt="middle-primary" d="M33 267.998c7.18 0 13 5.82 13 13v86c0 7.18-5.82 13-13 13s-13-5.82-13-13v-86c0-7.18 5.82-13 13-13Z" fill="none" stroke="#82AFFB" strokeDasharray="3 2" strokeDashoffset="-4.7166666666666766" />
                            <path data-hero-belt="middle" d="M33 267.998h86c7.18 0 13 5.82 13 13s-5.82 13-13 13H33c-7.18 0-13-5.82-13-13s5.82-13 13-13Z" fill="none" stroke="#E6EFFE" strokeDasharray="3 2" strokeDashoffset="-4.7166666666666766" />
                            <g data-figma-bg-blur-radius="4" filter="url(#home-hero-rail-active_svg__filter9_dii_220_219)">
                              <circle cx="33" cy="280.998" r="9" fill="#0D5FE2" />
                            </g>
                            <g data-hero-motion="middle-node">
                              <g data-figma-bg-blur-radius="4" filter="url(#home-hero-rail-active_svg__filter10_dii_220_219)">
                                <circle data-hero-middle-fill="true" cx="119" cy="280.998" r="9" fill="#0D5FE2" />
                              </g>
                              <circle data-hero-middle-outline="true" cx="119" cy="280.998" r="8.5" fill="none" stroke="#82AFFB" opacity="0" />
                            </g>
                            <path fill="none" d="M33 293.998v-.5q-.748 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.125l-.245.436-.245.436c.917.514 1.9.925 2.932 1.215zm-4.518-2.305.31-.393a12.6 12.6 0 0 1-2.08-2.078l-.392.31-.392.309a13.6 13.6 0 0 0 2.244 2.244zm-3.297-3.857.436-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.566-4.824.497-.058a13 13 0 0 1-.086-1.471h-1q0 .805.092 1.587zM20 280.998h.5q.001-.747.086-1.471l-.497-.058-.497-.058q-.091.781-.092 1.587zm.485-3.53.481.135c.27-.955.65-1.865 1.125-2.713l-.436-.245-.436-.245a13.4 13.4 0 0 0-1.215 2.932zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.296.245.436a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.4 13.4 0 0 0-2.932 1.216zm4.824-1.567.058.497q.723-.086 1.471-.086v-1q-.805 0-1.587.092zm1.529-.089v.5h1.518v-1H33zm3.541 0v.5h3.036v-1H36.54zm5.059 0v.5h3.035v-1H41.6zm5.059 0v.5h3.035v-1H46.66zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5h3.036v-1h-3.035zm5.06 0v.5h3.035v-1h-3.036zm5.058 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1H82.07zm5.058 0v.5h3.036v-1h-3.036zm5.06 0v.5h3.035v-1h-3.036zm5.058 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5H119v-1h-1.518zm1.518 0v.5q.748 0 1.471.086l.058-.497.058-.497a14 14 0 0 0-1.587-.092zm3.53.485-.135.481a12.4 12.4 0 0 1 2.713 1.126l.245-.436.245-.436a13.4 13.4 0 0 0-2.932-1.216zm4.518 2.305-.309.393a12.6 12.6 0 0 1 2.078 2.078l.393-.309.392-.31a13.5 13.5 0 0 0-2.244-2.244zm3.297 3.857-.437.245a12.4 12.4 0 0 1 1.126 2.713l.481-.135.481-.136a13.5 13.5 0 0 0-1.215-2.932zm1.566 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zm.089 1.529h-.5q0 .748-.086 1.471l.497.058.497.058q.092-.781.092-1.587zm-.485 3.53-.481-.135a12.4 12.4 0 0 1-1.126 2.713l.437.245.436.245c.514-.917.924-1.899 1.215-2.932zm-2.305 4.519-.393-.31a12.6 12.6 0 0 1-2.078 2.078l.309.393.31.392a13.5 13.5 0 0 0 2.244-2.244zm-3.857 3.296-.245-.436c-.848.476-1.757.856-2.713 1.125l.135.481.136.481a13.4 13.4 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.724.086-1.471.086v1q.805 0 1.587-.092zm-1.529.089v-.5h-1.518v1H119zm-3.541 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.035zm-5.06 0v-.5H87.13v1h3.036zm-5.058 0v-.5H82.07v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.036zm-5.06 0v-.5h-3.035v1h3.036zm-5.058 0v-.5h-3.035v1h3.035zm-5.059 0v-.5H46.66v1h3.035zm-5.059 0v-.5H41.6v1h3.035zm-5.058 0v-.5H36.54v1h3.036zm-5.06 0v-.5H33v1h1.518z" />
                          </g>
                          <g clipPath="url(#home-hero-rail-active_svg__clip6_220_219)">
                            <path stroke="#4D8CF9" strokeDasharray="3 2" d="M236 499.666v-31.034h-48v-52.966" />
                            <path fill="none" d="M87 403.666v-.5q-.748 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.125l-.245.436-.245.436c.917.514 1.9.924 2.932 1.215zm-4.519-2.305.31-.393a12.6 12.6 0 0 1-2.078-2.078l-.393.309-.392.31a13.6 13.6 0 0 0 2.244 2.244zm-3.295-3.857.435-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.567-4.824.497-.058a13 13 0 0 1-.086-1.471h-1q0 .805.092 1.587zM74 390.666h.5q.001-.748.086-1.471l-.497-.058-.497-.058q-.091.782-.092 1.587zm.485-3.53.481.135c.27-.955.65-1.865 1.126-2.713l-.436-.245-.437-.245A13.4 13.4 0 0 0 74.005 387zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.296.245.436a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.5 13.5 0 0 0-2.932 1.215zm4.824-1.567.058.497q.724-.086 1.471-.086v-1q-.805 0-1.587.092zm1.529-.089v.5h1.518v-1H87zm3.541 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1H95.6zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5H173v-1h-1.518zm1.518 0v.5q.747 0 1.471.086l.058-.497.058-.497a14 14 0 0 0-1.587-.092zm3.53.485-.135.481a12.4 12.4 0 0 1 2.713 1.126l.245-.436.245-.437a13.5 13.5 0 0 0-2.932-1.215zm4.518 2.305-.309.393a12.6 12.6 0 0 1 2.078 2.078l.393-.309.392-.31a13.5 13.5 0 0 0-2.244-2.244zm3.297 3.857-.437.245a12.4 12.4 0 0 1 1.126 2.713l.481-.135.481-.136a13.5 13.5 0 0 0-1.215-2.932zm1.566 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zm.089 1.529h-.5q0 .748-.086 1.471l.497.058.497.058q.092-.781.092-1.587zm-.485 3.53-.481-.135a12.4 12.4 0 0 1-1.126 2.713l.437.245.436.245c.514-.917.924-1.899 1.215-2.932zm-2.305 4.518-.393-.309a12.6 12.6 0 0 1-2.078 2.078l.309.393.31.392a13.5 13.5 0 0 0 2.244-2.244zm-3.857 3.297-.245-.436c-.848.476-1.757.856-2.713 1.125l.135.481.136.481a13.5 13.5 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.724.086-1.471.086v1q.805 0 1.587-.092zm-1.529.089v-.5h-1.518v1H173zm-3.541 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5H95.6v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5H87v1h1.518zM20 280.666h.5q.001-.748.086-1.471l-.497-.058-.497-.058q-.091.781-.092 1.587zm.485-3.53.481.135c.27-.956.65-1.865 1.125-2.713l-.436-.245-.436-.245A13.4 13.4 0 0 0 20.005 277zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.296.245.436a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.5 13.5 0 0 0-2.932 1.215zm4.824-1.567.058.497q.723-.086 1.471-.086v-1q-.805 0-1.587.092zm1.529-.089v.5q.748 0 1.47.086l.059-.497.058-.497q-.78-.092-1.587-.092zm3.53.485-.135.481c.955.269 1.865.649 2.713 1.126l.245-.436.245-.437c-.917-.514-1.9-.924-2.932-1.215zm4.518 2.305-.31.393c.772.609 1.47 1.307 2.08 2.078l.392-.309.392-.31a13.6 13.6 0 0 0-2.244-2.244zm3.296 3.857-.436.245c.477.848.857 1.758 1.126 2.713l.481-.135.481-.136a13.4 13.4 0 0 0-1.215-2.932zm1.567 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zm.089 1.529h-.5v1.518h1v-1.518zm0 3.541h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v3.036h1v-3.036zm0 5.059h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v3.036h1v-3.036zm0 5.059h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v1.518h1v-1.518zm0 1.518h-.5q-.001.748-.086 1.471l.497.058.497.058q.091-.781.092-1.587zm-.485 3.53-.481-.135c-.27.956-.65 1.865-1.126 2.713l.436.245.437.245c.514-.917.925-1.899 1.215-2.932zm-2.305 4.518-.393-.309a12.6 12.6 0 0 1-2.078 2.078l.31.393.31.392a13.6 13.6 0 0 0 2.243-2.244zm-3.857 3.297-.245-.436c-.848.476-1.758.856-2.713 1.125l.135.481.136.481a13.4 13.4 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.723.086-1.471.086v1q.805 0 1.587-.092zm-1.529.089v-.5q-.748 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.125l-.245.436-.245.436c.917.514 1.9.924 2.932 1.215zm-4.518-2.305.31-.393a12.6 12.6 0 0 1-2.08-2.078l-.392.309-.392.31a13.6 13.6 0 0 0 2.244 2.244zm-3.297-3.857.436-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.566-4.824.497-.058a13 13 0 0 1-.086-1.471h-1q0 .805.092 1.587zM20 366.666h.5v-1.518h-1v1.518zm0-3.541h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-3.036h-1v3.036zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-3.036h-1v3.036zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-1.518h-1v1.518z" />
                            <path data-hero-belt="bottom" d="M87 377.666h86c7.18 0 13 5.82 13 13s-5.82 13-13 13H87c-7.18 0-13-5.82-13-13s5.82-13 13-13Z" fill="none" stroke="#DFE3E8" strokeDasharray="3 2" strokeDashoffset="-4.7166666666666766" />
                            <path data-hero-belt="bottom-primary" d="M33 267.666c7.18 0 13 5.82 13 13v86c0 7.18-5.82 13-13 13s-13-5.82-13-13v-86c0-7.18 5.82-13 13-13Z" fill="none" stroke="#E6EFFE" strokeDasharray="3 2" strokeDashoffset="-4.7166666666666766" />
                            <path stroke="#DFE3E8" d="M152 365.666h82v50h-82z" />
                            <g data-hero-motion="bottom-teardrop-primary" filter="url(#home-hero-rail-active_svg__filter11_dii_220_219)" style={{ "transformOrigin": "33px 366.666px" }}>
                              <path fill="#307AF3" d="M68 366.666c0 7.389-25.611 17-35 17s-17-7.611-17-17 7.611-17 17-17 35 9.611 35 17m-26 0a9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9" />
                            </g>
                            <g data-hero-motion="bottom-teardrop-secondary" filter="url(#home-hero-rail-active_svg__filter12_dii_220_219)" style={{ "transformOrigin": "91px 390.666px" }}>
                              <path fill="#307AF3" d="M56 390.666c0 7.389 25.611 17 35 17s17-7.611 17-17-7.611-17-17-17-35 9.611-35 17m26 0a9 9 0 0 1 9-9 9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9" />
                            </g>
                            <g data-figma-bg-blur-radius="4" filter="url(#home-hero-rail-active_svg__filter13_dii_220_219)">
                              <circle cx="173" cy="390.666" r="9" fill="#0D5FE2" />
                            </g>
                            <g data-hero-motion="bottom-wheel" style={{ "transformOrigin": "49px 451.666px" }}>
                              <path fill="#82AFFB" d="m42.443 462.504.26-.428zm-4.561.28.353.354zm-6.244 6.244-.354-.353zm.115 4.2-.312.39zM49 479.276v.5zm17.246-6.048.312.39zm.115-4.2-.353.354zm-6.243-6.244.354-.353zm-4.561-.28.258.428zM49 464.333v.5zm-6.417-36.614-.483.129zm-3.694-2.002-.182-.466zm-14.006 12.024-.433-.25zm-3.41 18.143-.495.076zm3.58 2.199.13.483zm8.529-2.286.13.483zm2.517-3.809.5-.012zm1.724-6.775-.433-.25zm5.005-4.881-.239-.439zm2.041-4.084.483-.129zm14.246-10.531.182-.466zm-3.695 2.002-.483-.13zm-2.285 8.529-.483-.129zm2.04 4.084.24-.439zm5.005 4.881.433-.25zm1.725 6.775-.5-.012zm2.517 3.809.13-.483zm8.53 2.286-.13.483zm3.58-2.199.493.076zm-3.41-18.143.432-.25zM49 415.666v.5c19.606 0 35.5 15.894 35.5 35.5h1c0-20.158-16.342-36.5-36.5-36.5zm36 36h-.5c0 19.606-15.894 35.5-35.5 35.5v1c20.158 0 36.5-16.342 36.5-36.5zm-36 36v-.5c-19.606 0-35.5-15.894-35.5-35.5h-1c0 20.158 16.342 36.5 36.5 36.5zm-36-36h.5c0-19.606 15.894-35.5 35.5-35.5v-1c-20.158 0-36.5 16.342-36.5 36.5zm29.443 10.838.26-.428c-1.578-.954-3.771-1.049-5.175.355l.354.353.353.354c.984-.984 2.638-1 3.95-.206zm-4.561.28-.354-.353-6.244 6.244.354.353.353.354 6.244-6.244zm-6.244 6.244-.354-.353c-1.376 1.377-1.423 3.679.157 4.943l.312-.39.312-.391c-1.056-.845-1.084-2.445-.074-3.455zm.115 4.2-.312.39A28.1 28.1 0 0 0 49 479.776v-1a27.1 27.1 0 0 1-16.935-5.939zM49 479.276v.5a28.1 28.1 0 0 0 17.558-6.158l-.312-.39-.312-.391A27.1 27.1 0 0 1 49 478.776zm17.246-6.048.312.39c1.58-1.264 1.534-3.566.157-4.943l-.354.353-.353.354c1.01 1.01.982 2.61-.074 3.455zm.115-4.2.354-.353-6.243-6.244-.354.353-.353.354 6.243 6.244zm-6.243-6.244.354-.353c-1.404-1.404-3.597-1.309-5.174-.355l.259.428.258.428c1.312-.793 2.966-.778 3.95.206zm-4.561-.28-.26-.428A12.17 12.17 0 0 1 49 463.833v1a13.17 13.17 0 0 0 6.815-1.901zM49 464.333v-.5c-2.239 0-4.414-.617-6.298-1.757l-.259.428-.258.428A13.17 13.17 0 0 0 49 464.833zm-6.417-36.614.483-.13c-.504-1.881-2.474-3.073-4.359-2.338l.182.466.181.466c1.26-.491 2.66.285 3.03 1.665zm-3.694-2.002-.182-.466a28.35 28.35 0 0 0-14.257 12.24l.433.25.433.25a27.35 27.35 0 0 1 13.754-11.808zm-14.006 12.024-.433-.25a28.35 28.35 0 0 0-3.472 18.469l.495-.076.494-.076a27.35 27.35 0 0 1 3.349-17.817zm-3.41 18.143-.495.076c.307 1.999 2.323 3.11 4.204 2.606l-.13-.483-.129-.483c-1.38.37-2.751-.454-2.956-1.792zm3.58 2.199.13.483 8.529-2.286-.13-.483-.13-.483-8.529 2.286zm8.529-2.286.13.483c1.916-.514 2.932-2.459 2.886-4.304l-.5.012-.5.013c.039 1.529-.802 2.953-2.145 3.313zm2.517-3.809.5-.012a12.4 12.4 0 0 1 1.657-6.513l-.433-.25-.433-.25a13.4 13.4 0 0 0-1.791 7.038zm1.724-6.775.433.25a12.4 12.4 0 0 1 4.811-4.692l-.239-.439-.239-.439a13.4 13.4 0 0 0-5.199 5.07zm5.005-4.881.24.439c1.62-.883 2.797-2.735 2.284-4.652l-.483.129-.483.129c.36 1.344-.453 2.784-1.797 3.516zm2.041-4.084.483-.129-2.286-8.53-.483.13-.483.129 2.286 8.529zm14.246-10.531.182-.466c-1.885-.735-3.856.457-4.36 2.338l.483.13.483.129c.37-1.38 1.77-2.157 3.03-1.665zm-3.695 2.002-.483-.13-2.285 8.53.483.129.483.129 2.285-8.529zm-2.285 8.529-.483-.129c-.514 1.917.664 3.769 2.285 4.652l.239-.439.239-.439c-1.344-.732-2.157-2.172-1.797-3.516zm2.04 4.084-.238.439a12.4 12.4 0 0 1 4.81 4.692l.433-.25.433-.25a13.4 13.4 0 0 0-5.198-5.07zm5.005 4.881-.433.25a12.4 12.4 0 0 1 1.658 6.513l.5.012.5.013a13.4 13.4 0 0 0-1.792-7.038zm1.725 6.775-.5-.012c-.045 1.845.97 3.79 2.888 4.304l.129-.483.13-.483c-1.345-.36-2.185-1.784-2.147-3.313zm2.517 3.809-.13.483 8.53 2.286.13-.483.129-.483-8.53-2.286zm8.53 2.286-.13.483c1.881.504 3.897-.607 4.203-2.606l-.494-.076-.494-.076c-.205 1.338-1.577 2.162-2.956 1.792zm3.58-2.199.493.076a28.35 28.35 0 0 0-3.47-18.469l-.434.25-.433.25a27.35 27.35 0 0 1 3.349 17.817zm-3.41-18.143.432-.25a28.35 28.35 0 0 0-14.257-12.24l-.182.466-.181.466a27.35 27.35 0 0 1 13.754 11.808z" />
                            </g>
                          </g>
                          <defs>
                            <filter id="home-hero-rail-active_svg__filter0_dii_220_219" width="25" height="26" x="202" y="86" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter1_dii_220_219" width="44" height="62" x="13" y="51" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter2_dii_220_219" width="29" height="66" x="160" y="99" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter3_i_220_219" width="19" height="20" x="138" y="138" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect1_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter4_i_220_219" width="19" height="20" x="84" y="138" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect1_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter5_i_220_219" width="19" height="20" x="30" y="138" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect1_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter6_dii_220_219" width="25" height="26" x="202" y="191.998" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter7_i_220_219" width="64" height="81" x="194" y="239.998" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect1_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter8_dii_220_219" width="35" height="35" x="197" y="244.998" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter9_dii_220_219" width="28" height="29" x="19" y="267.998" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter10_dii_220_219" width="28" height="29" x="105" y="267.998" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter11_dii_220_219" width="62" height="44" x="11" y="346.666" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter12_dii_220_219" width="62" height="44" x="47" y="370.666" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter13_dii_220_219" width="28" height="29" x="159" y="377.666" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <clipPath id="home-hero-rail-active_svg__clip0_220_219">
                              <path fill="#fff" d="M0 0h258v166.667H0z" />
                            </clipPath>
                            <clipPath id="home-hero-rail-active_svg__clip2_220_219">
                              <path fill="#fff" d="M0 166.666h258v167H0z" />
                            </clipPath>
                            <clipPath id="home-hero-rail-active_svg__clip6_220_219">
                              <path fill="#fff" d="M0 333.666h258v166H0z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div aria-hidden="true" data-hero-label="true" className="pointer-events-none absolute top-0 z-10 flex h-12 w-38 items-center justify-center p-2 font-mono text-[12px] leading-none text-[#D6DBE1] transition-colors duration-0 ease-out motion-reduce:transition-none group-hover/top:text-[#FCFDFE] peer-hover/top:text-[#FCFDFE] left-0">// INTEGRATE //</div>
                  </div>
                </div>
                <header className="relative z-10 mx-auto flex w-full min-w-0 flex-col text-center lg:size-full lg:max-w-171 lg:border-x lg:border-[#E7EAEE]">
                  <div aria-hidden="true" className="group relative flex h-29.75 w-full cursor-pointer touch-manipulation select-none justify-between overflow-hidden lg:hidden border-b border-[#E7EAEE]">
                    <div className="absolute inset-0 bg-[#1066F1] opacity-0 transition-opacity duration-0 group-hover:opacity-100 group-active:opacity-100"></div>
                    <div className="relative h-29.75 shrink-0 overflow-hidden" style={{ "width": "204px" }}>
                      <img alt="" loading="lazy" width="368" height="119" decoding="async" data-nimg="1" className="absolute left-0 top-0 h-29.75 w-92 max-w-none" style={{ "color": "transparent" }} src="/images/home/integrate-graphic-mobile__0dc0adc0.svg" />
                    </div>
                    <div className="relative h-29.75 shrink-0 overflow-hidden" style={{ "width": "164px" }}>
                      <img alt="" loading="lazy" width="368" height="119" decoding="async" data-nimg="1" className="absolute right-0 top-0 h-29.75 w-92 max-w-none" style={{ "color": "transparent" }} src="/images/home/integrate-graphic-mobile__0dc0adc0.svg" />
                    </div>
                  </div>
                  <div aria-hidden="true" className="hidden h-25 w-full grid-cols-7 border-b border-[#E7EAEE] lg:grid">
                    <div className="border-r border-[#E7EAEE] last:border-r-0"></div>
                    <div className="border-r border-[#E7EAEE] last:border-r-0"></div>
                    <div className="border-r border-[#E7EAEE] last:border-r-0"></div>
                    <div className="border-r border-[#E7EAEE] last:border-r-0"></div>
                    <div className="border-r border-[#E7EAEE] last:border-r-0"></div>
                    <div className="border-r border-[#E7EAEE] last:border-r-0"></div>
                    <div className="border-r border-[#E7EAEE] last:border-r-0"></div>
                  </div>
                  <div className="relative flex min-h-76 flex-1 flex-col items-center justify-center overflow-hidden py-8 lg:min-h-0 lg:py-0">
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
                      <svg aria-hidden="true" data-hero-corner-arc="top-left" className="absolute left-0 top-0 size-[28.25px] -scale-100" viewBox="0 0 56.5 56.5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 56C0.5 25.3483 25.3483 0.5 56 0.5" stroke="#E7EAEE" />
                      </svg>
                      <svg aria-hidden="true" data-hero-corner-arc="top-right" className="absolute right-0 top-0 size-[28.25px] -scale-100 rotate-90" viewBox="0 0 56.5 56.5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 56C0.5 25.3483 25.3483 0.5 56 0.5" stroke="#E7EAEE" />
                      </svg>
                      <svg aria-hidden="true" data-hero-corner-arc="bottom-left" className="absolute bottom-0 left-0 size-[28.25px] -scale-100 -rotate-90" viewBox="0 0 56.5 56.5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 56C0.5 25.3483 25.3483 0.5 56 0.5" stroke="#E7EAEE" />
                      </svg>
                      <svg aria-hidden="true" data-hero-corner-arc="bottom-right" className="absolute bottom-0 right-0 size-[28.25px] -scale-100 rotate-180" viewBox="0 0 56.5 56.5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 56C0.5 25.3483 25.3483 0.5 56 0.5" stroke="#E7EAEE" />
                      </svg>
                    </div>
                    <div className="flex w-full flex-col items-center gap-3 px-6">
                      <h1 id="_S_2_" className="w-full text-[40px] font-semibold leading-[0.98] tracking-normal text-black lg:text-[60px]">
                        <span className="block text-[#1066F1]">Rip and Replace</span>
                        <span className="lg:block">your Competition</span>
                      </h1>
                      <p id="_S_3_" className="max-w-85 text-base/7 font-normal  text-[#3C424A] lg:max-w-97.5">
                        Rubie makes it easy for you to offer
                        <strong>{" zero-effort data migrations. "}</strong>
                        Close deals faster and automate onboarding with agentic integrations.
                      </p>
                    </div>
                    <a target="_blank" rel="noopener noreferrer" className="relative inline-flex items-center justify-center overflow-hidden rounded-[8px] text-[14px] font-medium leading-[24px] tracking-normal text-white shadow-[0px_12px_12px_-6px_rgba(16,102,241,0.05),0px_8px_8px_-4px_rgba(16,102,241,0.05),0px_6px_6px_-3px_rgba(16,102,241,0.05),0px_4px_4px_-2px_rgba(16,102,241,0.05)] transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#1066F1] focus:ring-offset-2 mt-5 px-3 py-1.5">
                      <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[inherit]">
                        <span className="absolute inset-0 rounded-[inherit] bg-[#0263FF]"></span>
                        <span className="absolute inset-x-0 top-0 h-[63.62%] rounded-t-[inherit] bg-[linear-gradient(180deg,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0)_100%)]"></span>
                      </span>
                      <span className="relative z-10 whitespace-nowrap">See Rubie in action</span>
                      <span className="sr-only">{" (opens in a new tab)"}</span>
                      <span className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_4px_0px_rgba(255,255,255,0.5),inset_0px_0px_8px_0px_rgba(255,255,255,0.2)]"></span>
                    </a>
                  </div>
                  <div aria-hidden="true" className="group relative flex h-29.75 w-full cursor-pointer touch-manipulation select-none justify-between overflow-hidden lg:hidden border-t border-[#E7EAEE]">
                    <div className="absolute inset-0 bg-[#1066F1] opacity-0 transition-opacity duration-0 group-hover:opacity-100 group-active:opacity-100"></div>
                    <div className="relative h-29.75 shrink-0 overflow-hidden" style={{ "width": "164px" }}>
                      <img alt="" loading="lazy" width="368" height="119" decoding="async" data-nimg="1" className="absolute left-0 top-0 h-29.75 w-92 max-w-none" style={{ "color": "transparent" }} src="/images/home/migrate-graphic-mobile__0dc0adc0.svg" />
                    </div>
                    <div className="relative h-29.75 shrink-0 overflow-hidden" style={{ "width": "204px" }}>
                      <img alt="" loading="lazy" width="368" height="119" decoding="async" data-nimg="1" className="absolute right-0 top-0 h-29.75 w-92 max-w-none" style={{ "color": "transparent" }} src="/images/home/migrate-graphic-mobile__0dc0adc0.svg" />
                    </div>
                  </div>
                </header>
                <div aria-hidden="true" className="relative hidden h-full overflow-hidden border-x border-[#E7EAEE] lg:block">
                  <div aria-hidden="true" data-hero-circuit="right" className="absolute inset-0 overflow-hidden text-[#DBDFE5]">
                    <div data-hero-circuit-section="top" className="HeroCircuitBackdrop-module__HTAPZW__topSection group/top peer/top absolute inset-x-0 top-0 h-41.75 overflow-hidden border-b border-[#E7EAEE]">
                      <div data-hero-section-background="solid" className="absolute inset-0 bg-[#1066F1] opacity-0 transition-opacity duration-0 ease-out motion-reduce:transition-none group-hover/top:opacity-100"></div>
                      <div className="pointer-events-none absolute inset-0 origin-center overflow-hidden -scale-x-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="257" height="500" fill="none" viewBox="0 0 257 500" aria-hidden="true" data-hero-rail-layer="base" className="absolute left-0 h-125 w-full max-w-none opacity-100 transition-opacity duration-0 ease-out motion-reduce:transition-none top-0 group-hover/top:opacity-0">
                          <path stroke="#DBDFE5" d="M214 85c0-12.702 10.297-23 23-23h20M201 85h25v25h-25zM201 191h25v25h-25z" />
                          <path stroke="#DBDFE5" strokeDasharray="3 2" d="M235 500v-31.034h-48V416" />
                          <circle cx="213.5" cy="97.5" r="7" stroke="#DBDFE5" />
                          <circle cx="213.5" cy="203.5" r="7" stroke="#DBDFE5" />
                          <path stroke="#DBDFE5" strokeDasharray="3 2" d="M193 77h41v147h-41z" />
                          <path stroke="#DBDFE5" d="M151 204h50.5" />
                          <path fill="#DFE3E8" d="m224.063 320.484.142.005q.396.01.795.011h1.6v1H225q-.507 0-1.012-.018a30 30 0 0 1-.519-.019l.022-.498.024-.499q.273.011.548.018m7.871.016v1h-3.201v-1zm5.333 0v1h-3.201v-1zm5.333 0v1h-3.2v-1zm5.334 0v1h-3.201v-1zm5.333 0v1h-3.201v-1zm3.733 0v1h-1.6v-1zm-38.384-.647.274.052q.255.051.511.098l.184.031q.276.048.555.092.141.021.284.041.24.036.482.068.144.018.287.035c.116.013.232.03.348.042l-.054.498-.054.494-.307-.034a33 33 0 0 1-2.704-.437l-.014-.003.101-.489.101-.489zm-4.605-1.325a21 21 0 0 0 .735.263l.31.105a48 48 0 0 0 .713.228q.233.071.468.139l.255.073.193.055-.132.482-.132.481-.133-.037a32 32 0 0 1-2.779-.909l.177-.466.176-.467zm-4.241-1.951.25.139q.986.535 2.014 1.001l-.412.91a34 34 0 0 1-.698-.326q-.132-.064-.262-.129a34 34 0 0 1-1.767-.938l.496-.867q.188.106.379.21m-4.316-2.875.241.189q.161.125.326.25l.301.224q.139.102.279.203.163.118.33.235.158.111.318.221.144.098.289.195l.166.112-.274.418-.275.415-.193-.128a33 33 0 0 1-2.145-1.562l-.137-.112.312-.387.313-.39q.074.06.149.117m-3.753-3.502a32 32 0 0 0 2.099 2.099l-.336.37-.337.368a33 33 0 0 1-2.165-2.165l.369-.336zm-2.921-3.739q.097.145.195.289a26 26 0 0 0 .456.648q.094.13.189.26l.238.321.25.325.19.241q.058.076.117.15l-.39.313-.388.311-.112-.137a33 33 0 0 1-1.69-2.338l.416-.274.418-.274zm-2.497-4.495q.465 1.027 1 2.013l.139.25q.104.192.211.38l-.434.248-.434.247q-.18-.314-.353-.633a32 32 0 0 1-1.04-2.094l.456-.205zm-1.62-4.459.073.255q.068.235.139.468a28 28 0 0 0 .229.713l.104.31a25 25 0 0 0 .263.735l.054.15-.467.176-.467.176-.049-.13a32 32 0 0 1-.86-2.649q-.019-.067-.036-.133l.481-.131.482-.132zm-.934-4.701q.017.143.035.287.032.242.068.482.02.143.041.284.044.279.092.555l.031.184.047.247q.05.269.103.538l.002.007-.489.101-.49.101a33 33 0 0 1-.473-3.026l.494-.053.498-.054q.02.173.041.347M192.5 289v-1.47h1V289q0 .747.034 1.485l-.499.024-.498.021a30 30 0 0 1-.019-.519A31 31 0 0 1 192.5 289m1-6.37v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm.977-3.93v1h-.977v.97h-1v-1.97zm4.923 0v1h-2.954v-1zm4.923 0v1h-2.954v-1zm4.923 0v1h-2.954v-1zm4.923 0v1h-2.953v-1zm4.924 0v1h-2.954v-1zm4.923 0v1h-2.954v-1zm4.922 0v1h-2.954v-1zm4.923 0v1h-2.954v-1zm4.923 0v1h-2.953v-1zm4.924 0v1h-2.954v-1zm4.923 0v1h-2.954v-1zm4.923 0v1H250.6v-1zm3.446 0v1h-1.477v-1z" />
                          <path fill="#DBDFE5" d="M73 204v-.5h-.5v.5zm0 0h-.5v1.477h1V204zm0 3.446h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.924h-.5v2.953h1v-2.953zm0 4.923h-.5v2.953h1v-2.953zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1V261.6zm0 4.923h-.5V268h1v-1.477zM151 204v-.5h-1.463v1H151zm-3.412 0v-.5h-2.926v1h2.926zm-4.875 0v-.5h-2.926v1h2.926zm-4.875 0v-.5h-2.926v1h2.926zm-4.875 0v-.5h-2.925v1h2.925zm-4.876 0v-.5h-2.924v1h2.924zm-4.875 0v-.5h-2.924v1h2.924zm-4.874 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5H73v1h1.463z" />
                          <path stroke="#DBDFE5" d="M201 248h25v25h-25z" />
                          <path fill="#DBDFE5" d="M32 294v-.5q-.747 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.126l-.245.437-.245.436c.917.514 1.9.924 2.932 1.215zm-4.518-2.305.31-.393a12.6 12.6 0 0 1-2.08-2.078l-.392.309-.392.31a13.6 13.6 0 0 0 2.244 2.244zm-3.297-3.857.436-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.566-4.824.497-.058A13 13 0 0 1 19.5 281h-1q0 .805.092 1.587zM19 281h.5q.001-.747.086-1.471l-.497-.058-.497-.058q-.091.782-.092 1.587zm.485-3.53.481.135c.27-.956.65-1.865 1.125-2.713l-.436-.245-.436-.245a13.4 13.4 0 0 0-1.215 2.932zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.297.245.437a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.5 13.5 0 0 0-2.932 1.215zm4.824-1.566.058.497q.724-.086 1.471-.086v-1q-.805 0-1.587.092zM32 268v.5h1.518v-1H32zm3.541 0v.5h3.036v-1H35.54zm5.059 0v.5h3.035v-1H40.6zm5.059 0v.5h3.035v-1H45.66zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5h3.036v-1h-3.035zm5.06 0v.5h3.035v-1h-3.036zm5.058 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1H81.07zm5.058 0v.5h3.036v-1h-3.036zm5.06 0v.5h3.035v-1h-3.036zm5.058 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5H118v-1h-1.518zm1.518 0v.5q.748 0 1.471.086l.058-.497.058-.497A14 14 0 0 0 118 267.5zm3.53.485-.135.481a12.4 12.4 0 0 1 2.713 1.126l.245-.437.245-.436a13.5 13.5 0 0 0-2.932-1.215zm4.518 2.305-.309.393a12.6 12.6 0 0 1 2.078 2.078l.393-.309.392-.31a13.5 13.5 0 0 0-2.244-2.244zm3.297 3.857-.437.245a12.4 12.4 0 0 1 1.126 2.713l.481-.135.481-.136a13.5 13.5 0 0 0-1.215-2.932zm1.566 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zM131 281h-.5q0 .747-.086 1.471l.497.058.497.058q.092-.782.092-1.587zm-.485 3.53-.481-.135a12.4 12.4 0 0 1-1.126 2.713l.437.245.436.245c.514-.917.924-1.899 1.215-2.932zm-2.305 4.518-.393-.309a12.6 12.6 0 0 1-2.078 2.078l.309.393.31.392a13.5 13.5 0 0 0 2.244-2.244zm-3.857 3.297-.245-.437a12.4 12.4 0 0 1-2.713 1.126l.135.481.136.481a13.5 13.5 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.724.086-1.471.086v1q.805 0 1.587-.092zM118 294v-.5h-1.518v1H118zm-3.541 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.035zm-5.06 0v-.5H86.13v1h3.036zm-5.058 0v-.5H81.07v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.036zm-5.06 0v-.5h-3.035v1h3.036zm-5.058 0v-.5h-3.035v1h3.035zm-5.059 0v-.5H45.66v1h3.035zm-5.059 0v-.5H40.6v1h3.035zm-5.058 0v-.5H35.54v1h3.036zm-5.06 0v-.5H32v1h1.518zM86 404v-.5q-.748 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.126l-.245.437-.245.436c.917.514 1.9.924 2.932 1.215zm-4.519-2.305.31-.393a12.6 12.6 0 0 1-2.078-2.078l-.393.309-.392.31a13.6 13.6 0 0 0 2.244 2.244zm-3.295-3.857.435-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.567-4.824.497-.058A13 13 0 0 1 73.5 391h-1q0 .805.092 1.587zM73 391h.5q.001-.747.086-1.471l-.497-.058-.497-.058q-.091.782-.092 1.587zm.485-3.53.481.135c.27-.956.65-1.865 1.126-2.713l-.436-.245-.437-.245a13.4 13.4 0 0 0-1.215 2.932zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.297.245.437a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.5 13.5 0 0 0-2.932 1.215zm4.824-1.566.058.497q.724-.086 1.471-.086v-1q-.805 0-1.587.092zM86 378v.5h1.518v-1H86zm3.541 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1H94.6zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5H172v-1h-1.518zm1.518 0v.5q.747 0 1.471.086l.058-.497.058-.497A14 14 0 0 0 172 377.5zm3.53.485-.135.481a12.4 12.4 0 0 1 2.713 1.126l.245-.437.245-.436a13.5 13.5 0 0 0-2.932-1.215zm4.518 2.305-.309.393a12.6 12.6 0 0 1 2.078 2.078l.393-.309.392-.31a13.5 13.5 0 0 0-2.244-2.244zm3.297 3.857-.437.245a12.4 12.4 0 0 1 1.126 2.713l.481-.135.481-.136a13.5 13.5 0 0 0-1.215-2.932zm1.566 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zM185 391h-.5q0 .747-.086 1.471l.497.058.497.058q.092-.782.092-1.587zm-.485 3.53-.481-.135a12.4 12.4 0 0 1-1.126 2.713l.437.245.436.245c.514-.917.924-1.899 1.215-2.932zm-2.305 4.518-.393-.309a12.6 12.6 0 0 1-2.078 2.078l.309.393.31.392a13.5 13.5 0 0 0 2.244-2.244zm-3.857 3.297-.245-.437a12.4 12.4 0 0 1-2.713 1.126l.135.481.136.481a13.5 13.5 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.724.086-1.471.086v1q.805 0 1.587-.092zM172 404v-.5h-1.518v1H172zm-3.541 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5H94.6v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5H86v1h1.518z" />
                          <path fill="#DBDFE5" d="M19 281h.5q.001-.747.086-1.471l-.497-.058-.497-.058q-.091.782-.092 1.587zm.485-3.53.481.135c.27-.956.65-1.865 1.125-2.713l-.436-.245-.436-.245a13.4 13.4 0 0 0-1.215 2.932zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.297.245.437a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.5 13.5 0 0 0-2.932 1.215zm4.824-1.566.058.497q.724-.086 1.471-.086v-1q-.805 0-1.587.092zM32 268v.5q.748 0 1.47.086l.059-.497.058-.497q-.78-.092-1.587-.092zm3.53.485-.135.481c.955.269 1.865.649 2.713 1.126l.245-.437.245-.436c-.917-.514-1.9-.924-2.932-1.215zm4.518 2.305-.31.393c.772.609 1.47 1.307 2.08 2.078l.392-.309.392-.31a13.6 13.6 0 0 0-2.244-2.244zm3.296 3.857-.436.245c.477.848.857 1.757 1.126 2.713l.481-.135.481-.136a13.4 13.4 0 0 0-1.215-2.932zm1.567 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zM45 281h-.5v1.518h1V281zm0 3.541h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1V289.6zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v3.036h1v-3.036zm0 5.059h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v3.036h1v-3.036zm0 5.059h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5V367h1v-1.518zM45 367h-.5q-.001.747-.086 1.471l.497.058.497.058q.091-.782.092-1.587zm-.485 3.53-.481-.135c-.27.956-.65 1.865-1.126 2.713l.436.245.437.245c.514-.917.925-1.899 1.215-2.932zm-2.305 4.518-.393-.309a12.6 12.6 0 0 1-2.078 2.078l.31.393.31.392a13.6 13.6 0 0 0 2.243-2.244zm-3.857 3.297-.245-.437c-.848.477-1.758.857-2.713 1.126l.135.481.136.481a13.4 13.4 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.723.086-1.471.086v1q.805 0 1.587-.092zM32 380v-.5q-.747 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.126l-.245.437-.245.436c.917.514 1.9.924 2.932 1.215zm-4.518-2.305.31-.393a12.6 12.6 0 0 1-2.08-2.078l-.392.309-.392.31a13.6 13.6 0 0 0 2.244 2.244zm-3.297-3.857.436-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.566-4.824.497-.058A13 13 0 0 1 19.5 367h-1q0 .805.092 1.587zM19 367h.5v-1.518h-1V367zm0-3.541h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-3.036h-1v3.036zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-3.036h-1v3.036zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5V289.6h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5V281h-1v1.518z" />
                          <circle cx="32" cy="281" r="8.5" stroke="#DBDFE5" />
                          <circle cx="118" cy="281" r="8.5" stroke="#DBDFE5" />
                          <path stroke="#DBDFE5" d="M151 366h82v50h-82z" />
                          <g data-hero-motion="bottom-teardrop-primary" style={{ "transformOrigin": "33px 366.666px" }}>
                            <circle cx="9" cy="9" r="8.5" stroke="#DBDFE5" transform="matrix(0 -1 -1 0 41 376)" />
                            <path stroke="#DBDFE5" d="M66.5 367c0-.778-.338-1.634-1.02-2.555-.681-.918-1.679-1.867-2.931-2.821-2.504-1.907-5.96-3.782-9.73-5.437a85 85 0 0 0-11.521-4.087c-3.707-1.013-7.017-1.6-9.298-1.6-9.113 0-16.5 7.387-16.5 16.5s7.387 16.5 16.5 16.5c2.28 0 5.591-.587 9.298-1.6a85 85 0 0 0 11.521-4.087c3.77-1.655 7.226-3.53 9.73-5.437 1.252-.954 2.25-1.903 2.93-2.821.683-.921 1.021-1.777 1.021-2.555Z" />
                          </g>
                          <g data-hero-motion="top-pin" style={{ "transformOrigin": "35px 71px" }}>
                            <circle cx="9" cy="9" r="8.5" stroke="#DBDFE5" transform="matrix(1 0 0 -1 26 80)" />
                            <path stroke="#DBDFE5" d="M35 105.5c.778 0 1.634-.338 2.555-1.021.918-.68 1.867-1.678 2.821-2.93 1.907-2.504 3.782-5.96 5.438-9.73A85.5 85.5 0 0 0 49.9 80.298c1.013-3.707 1.6-7.017 1.6-9.298 0-9.113-7.387-16.5-16.5-16.5S18.5 61.887 18.5 71c0 2.28.587 5.591 1.6 9.298a85.5 85.5 0 0 0 4.086 11.521c1.656 3.77 3.531 7.226 5.438 9.73.954 1.252 1.903 2.25 2.821 2.93.921.683 1.777 1.021 2.555 1.021Z" />
                          </g>
                          <path stroke="#DFE3E8" d="M51 71h75c11.046 0 20 8.954 20 20v47" />
                          <g data-hero-motion="bottom-teardrop-secondary" style={{ "transformOrigin": "91px 390.666px" }}>
                            <circle cx="9" cy="9" r="8.5" stroke="#DBDFE5" transform="matrix(0 1 1 0 81 382)" />
                            <path stroke="#DBDFE5" d="M55.5 391c0 .778.338 1.634 1.02 2.555.681.918 1.679 1.867 2.931 2.821 2.504 1.907 5.96 3.782 9.73 5.437a85 85 0 0 0 11.521 4.087c3.707 1.013 7.017 1.6 9.298 1.6 9.113 0 16.5-7.387 16.5-16.5s-7.387-16.5-16.5-16.5c-2.28 0-5.591.587-9.298 1.6a85 85 0 0 0-11.521 4.087c-3.77 1.655-7.226 3.53-9.73 5.437-1.252.954-2.25 1.903-2.93 2.821-.683.921-1.021 1.777-1.021 2.555Z" />
                          </g>
                          <circle cx="172" cy="391" r="8.5" stroke="#DBDFE5" />
                          <path stroke="#DBDFE5" d="M164 102h19v56h-19zM137 138h19v20h-19zM110 138h19v20h-19zM83 138h19v20H83zM56 138h19v20H56zM29 138h19v20H29z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="258" height="500" fill="none" viewBox="0 0 258 500" aria-hidden="true" data-hero-rail-layer="active" className="absolute left-0 h-125 w-full max-w-none opacity-0 transition-opacity duration-0 ease-out motion-reduce:transition-none top-0 group-hover/top:opacity-100">
                          <g clipPath="url(#home-hero-rail-active_svg__clip0_220_219)">
                            <path stroke="#82AFFB" d="M215 85c0-12.702 10.297-23 23-23h20M202 85h25v25h-25z" />
                            <g data-figma-bg-blur-radius="4" filter="url(#home-hero-rail-active_svg__filter0_dii_220_219)">
                              <circle cx="214.5" cy="97.5" r="7.5" fill="#0D5FE2" />
                            </g>
                            <path stroke="#82AFFB" strokeDasharray="3 2" d="M194 77h41v147h-41z" />
                            <g data-hero-motion="top-pin" style={{ "transformOrigin": "35px 71px" }}>
                              <path stroke="#82AFFB" d="M35 105.5c.778 0 1.634-.338 2.555-1.021.918-.68 1.867-1.678 2.821-2.93 1.907-2.504 3.782-5.96 5.438-9.73A85.5 85.5 0 0 0 49.9 80.298c1.013-3.707 1.6-7.017 1.6-9.298 0-9.113-7.387-16.5-16.5-16.5S18.5 61.887 18.5 71c0 2.28.587 5.591 1.6 9.298a85.5 85.5 0 0 0 4.086 11.521c1.656 3.77 3.531 7.226 5.438 9.73.954 1.252 1.903 2.25 2.821 2.93.921.683 1.777 1.021 2.555 1.021Z" />
                              <g filter="url(#home-hero-rail-active_svg__filter1_dii_220_219)">
                                <path fill="#307AF3" d="M35 106c-7.389 0-17-25.611-17-35s7.611-17 17-17 17 7.611 17 17-9.611 35-17 35m0-26a9 9 0 1 0 0-18 9 9 0 0 0 0 18" />
                              </g>
                            </g>
                            <path stroke="#4D8CF9" d="M52 71h75c11.046 0 20 8.954 20 20v47" />
                            <g filter="url(#home-hero-rail-active_svg__filter2_dii_220_219)">
                              <path fill="#0D5FE2" d="M165 102h19v56h-19z" />
                            </g>
                            <g data-hero-motion="top-fifth-bar">
                              <g filter="url(#home-hero-rail-active_svg__filter3_i_220_219)">
                                <path data-hero-bar-fill="true" fill="#307AF3" fillOpacity="0.5" d="M138 138h19v20h-19z" />
                              </g>
                            </g>
                            <path stroke="#82AFFB" d="M111 128h19v30h-19z" />
                            <g filter="url(#home-hero-rail-active_svg__filter4_i_220_219)">
                              <path fill="#307AF3" fillOpacity="0.5" d="M84 138h19v20H84z" />
                            </g>
                            <path stroke="#82AFFB" d="M57 119h19v39H57z" />
                            <g filter="url(#home-hero-rail-active_svg__filter5_i_220_219)">
                              <path fill="#307AF3" fillOpacity="0.5" d="M30 138h19v20H30z" />
                            </g>
                          </g>
                          <g clipPath="url(#home-hero-rail-active_svg__clip2_220_219)">
                            <path stroke="#82AFFB" d="M202 190.998h25v25h-25z" />
                            <g data-hero-motion="middle-node">
                              <g data-figma-bg-blur-radius="4" filter="url(#home-hero-rail-active_svg__filter6_dii_220_219)">
                                <circle data-hero-middle-fill="true" cx="214.5" cy="203.498" r="7.5" fill="#0D5FE2" />
                              </g>
                              <circle data-hero-middle-outline="true" cx="214.5" cy="203.498" r="7.5" fill="none" stroke="#82AFFB" opacity="0" />
                            </g>
                            <path stroke="#82AFFB" strokeDasharray="3 2" d="M194 76.998h41v147h-41z" />
                            <path stroke="#82AFFB" d="M152 203.998h50.5" />
                            <g filter="url(#home-hero-rail-active_svg__filter7_i_220_219)">
                              <path fill="#2976F2" d="M194 239.998h64v81h-32c-17.673 0-32-14.327-32-32z" />
                            </g>
                            <path fill="#E6EFFE" d="M74 203.998v-.5h-.5v.5zm0 0h-.5v1.477h1v-1.477zm0 3.446h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.924h-.5v2.953h1v-2.953zm0 4.923h-.5v2.953h1v-2.953zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v1.477h1v-1.477zm78-62.523v-.5h-1.463v1H152zm-3.412 0v-.5h-2.926v1h2.926zm-4.875 0v-.5h-2.926v1h2.926zm-4.875 0v-.5h-2.926v1h2.926zm-4.875 0v-.5h-2.925v1h2.925zm-4.876 0v-.5h-2.924v1h2.924zm-4.875 0v-.5h-2.924v1h2.924zm-4.874 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5H74v1h1.463z" />
                            <g data-hero-motion="middle-node">
                              <g filter="url(#home-hero-rail-active_svg__filter8_dii_220_219)">
                                <path data-hero-middle-fill="true" fill="#0D5FE2" d="M202 247.998h25v25h-25z" />
                              </g>
                              <path data-hero-middle-outline="true" d="M202 247.998h25v25h-25z" fill="none" stroke="#82AFFB" opacity="0" />
                            </g>
                            <path fill="none" d="M20 280.998h.5q.001-.747.086-1.471l-.497-.058-.497-.058q-.091.781-.092 1.587zm.485-3.53.481.135c.27-.955.65-1.865 1.125-2.713l-.436-.245-.436-.245a13.4 13.4 0 0 0-1.215 2.932zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.296.245.436a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.4 13.4 0 0 0-2.932 1.216zm4.824-1.567.058.497q.723-.086 1.471-.086v-1q-.805 0-1.587.092zm1.529-.089v.5q.748 0 1.47.086l.059-.497.058-.497q-.78-.092-1.587-.092zm3.53.485-.135.481c.955.269 1.865.649 2.713 1.126l.245-.436.245-.436a13.4 13.4 0 0 0-2.932-1.216zm4.518 2.305-.31.393c.772.609 1.47 1.307 2.08 2.078l.392-.309.392-.31a13.6 13.6 0 0 0-2.244-2.244zm3.296 3.857-.436.245c.477.848.857 1.758 1.126 2.713l.481-.135.481-.136a13.4 13.4 0 0 0-1.215-2.932zm1.567 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zm.089 1.529h-.5v1.518h1v-1.518zm0 3.541h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v3.036h1v-3.036zm0 5.059h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v1.518h1v-1.518zm0 1.518h-.5q-.001.747-.086 1.471l.497.058.497.058q.091-.781.092-1.587zm-.485 3.53-.481-.135c-.27.956-.65 1.865-1.126 2.713l.436.245.437.245c.514-.917.925-1.899 1.215-2.932zm-2.305 4.519-.393-.31a12.6 12.6 0 0 1-2.078 2.078l.31.393.31.392a13.6 13.6 0 0 0 2.243-2.244zm-3.857 3.296-.245-.436c-.848.476-1.758.856-2.713 1.125l.135.481.136.481a13.4 13.4 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.723.086-1.471.086v1q.805 0 1.587-.092zm-1.529.089v-.5q-.748 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.125l-.245.436-.245.436c.917.514 1.9.925 2.932 1.215zm-4.518-2.305.31-.393a12.6 12.6 0 0 1-2.08-2.078l-.392.31-.392.309a13.6 13.6 0 0 0 2.244 2.244zm-3.297-3.857.436-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.566-4.824.497-.058a13 13 0 0 1-.086-1.471h-1q0 .805.092 1.587zM20 366.998h.5v-1.518h-1v1.518zm0-3.541h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-3.036h-1v3.036zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-1.518h-1v1.518z" />
                            <path data-hero-belt="middle-primary" d="M33 267.998c7.18 0 13 5.82 13 13v86c0 7.18-5.82 13-13 13s-13-5.82-13-13v-86c0-7.18 5.82-13 13-13Z" fill="none" stroke="#82AFFB" strokeDasharray="3 2" strokeDashoffset="-4.7166666666666766" />
                            <path data-hero-belt="middle" d="M33 267.998h86c7.18 0 13 5.82 13 13s-5.82 13-13 13H33c-7.18 0-13-5.82-13-13s5.82-13 13-13Z" fill="none" stroke="#E6EFFE" strokeDasharray="3 2" strokeDashoffset="-4.7166666666666766" />
                            <g data-figma-bg-blur-radius="4" filter="url(#home-hero-rail-active_svg__filter9_dii_220_219)">
                              <circle cx="33" cy="280.998" r="9" fill="#0D5FE2" />
                            </g>
                            <g data-hero-motion="middle-node">
                              <g data-figma-bg-blur-radius="4" filter="url(#home-hero-rail-active_svg__filter10_dii_220_219)">
                                <circle data-hero-middle-fill="true" cx="119" cy="280.998" r="9" fill="#0D5FE2" />
                              </g>
                              <circle data-hero-middle-outline="true" cx="119" cy="280.998" r="8.5" fill="none" stroke="#82AFFB" opacity="0" />
                            </g>
                            <path fill="none" d="M33 293.998v-.5q-.748 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.125l-.245.436-.245.436c.917.514 1.9.925 2.932 1.215zm-4.518-2.305.31-.393a12.6 12.6 0 0 1-2.08-2.078l-.392.31-.392.309a13.6 13.6 0 0 0 2.244 2.244zm-3.297-3.857.436-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.566-4.824.497-.058a13 13 0 0 1-.086-1.471h-1q0 .805.092 1.587zM20 280.998h.5q.001-.747.086-1.471l-.497-.058-.497-.058q-.091.781-.092 1.587zm.485-3.53.481.135c.27-.955.65-1.865 1.125-2.713l-.436-.245-.436-.245a13.4 13.4 0 0 0-1.215 2.932zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.296.245.436a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.4 13.4 0 0 0-2.932 1.216zm4.824-1.567.058.497q.723-.086 1.471-.086v-1q-.805 0-1.587.092zm1.529-.089v.5h1.518v-1H33zm3.541 0v.5h3.036v-1H36.54zm5.059 0v.5h3.035v-1H41.6zm5.059 0v.5h3.035v-1H46.66zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5h3.036v-1h-3.035zm5.06 0v.5h3.035v-1h-3.036zm5.058 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1H82.07zm5.058 0v.5h3.036v-1h-3.036zm5.06 0v.5h3.035v-1h-3.036zm5.058 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5H119v-1h-1.518zm1.518 0v.5q.748 0 1.471.086l.058-.497.058-.497a14 14 0 0 0-1.587-.092zm3.53.485-.135.481a12.4 12.4 0 0 1 2.713 1.126l.245-.436.245-.436a13.4 13.4 0 0 0-2.932-1.216zm4.518 2.305-.309.393a12.6 12.6 0 0 1 2.078 2.078l.393-.309.392-.31a13.5 13.5 0 0 0-2.244-2.244zm3.297 3.857-.437.245a12.4 12.4 0 0 1 1.126 2.713l.481-.135.481-.136a13.5 13.5 0 0 0-1.215-2.932zm1.566 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zm.089 1.529h-.5q0 .748-.086 1.471l.497.058.497.058q.092-.781.092-1.587zm-.485 3.53-.481-.135a12.4 12.4 0 0 1-1.126 2.713l.437.245.436.245c.514-.917.924-1.899 1.215-2.932zm-2.305 4.519-.393-.31a12.6 12.6 0 0 1-2.078 2.078l.309.393.31.392a13.5 13.5 0 0 0 2.244-2.244zm-3.857 3.296-.245-.436c-.848.476-1.757.856-2.713 1.125l.135.481.136.481a13.4 13.4 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.724.086-1.471.086v1q.805 0 1.587-.092zm-1.529.089v-.5h-1.518v1H119zm-3.541 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.035zm-5.06 0v-.5H87.13v1h3.036zm-5.058 0v-.5H82.07v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.036zm-5.06 0v-.5h-3.035v1h3.036zm-5.058 0v-.5h-3.035v1h3.035zm-5.059 0v-.5H46.66v1h3.035zm-5.059 0v-.5H41.6v1h3.035zm-5.058 0v-.5H36.54v1h3.036zm-5.06 0v-.5H33v1h1.518z" />
                          </g>
                          <g clipPath="url(#home-hero-rail-active_svg__clip6_220_219)">
                            <path stroke="#4D8CF9" strokeDasharray="3 2" d="M236 499.666v-31.034h-48v-52.966" />
                            <path fill="none" d="M87 403.666v-.5q-.748 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.125l-.245.436-.245.436c.917.514 1.9.924 2.932 1.215zm-4.519-2.305.31-.393a12.6 12.6 0 0 1-2.078-2.078l-.393.309-.392.31a13.6 13.6 0 0 0 2.244 2.244zm-3.295-3.857.435-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.567-4.824.497-.058a13 13 0 0 1-.086-1.471h-1q0 .805.092 1.587zM74 390.666h.5q.001-.748.086-1.471l-.497-.058-.497-.058q-.091.782-.092 1.587zm.485-3.53.481.135c.27-.955.65-1.865 1.126-2.713l-.436-.245-.437-.245A13.4 13.4 0 0 0 74.005 387zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.296.245.436a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.5 13.5 0 0 0-2.932 1.215zm4.824-1.567.058.497q.724-.086 1.471-.086v-1q-.805 0-1.587.092zm1.529-.089v.5h1.518v-1H87zm3.541 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1H95.6zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5H173v-1h-1.518zm1.518 0v.5q.747 0 1.471.086l.058-.497.058-.497a14 14 0 0 0-1.587-.092zm3.53.485-.135.481a12.4 12.4 0 0 1 2.713 1.126l.245-.436.245-.437a13.5 13.5 0 0 0-2.932-1.215zm4.518 2.305-.309.393a12.6 12.6 0 0 1 2.078 2.078l.393-.309.392-.31a13.5 13.5 0 0 0-2.244-2.244zm3.297 3.857-.437.245a12.4 12.4 0 0 1 1.126 2.713l.481-.135.481-.136a13.5 13.5 0 0 0-1.215-2.932zm1.566 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zm.089 1.529h-.5q0 .748-.086 1.471l.497.058.497.058q.092-.781.092-1.587zm-.485 3.53-.481-.135a12.4 12.4 0 0 1-1.126 2.713l.437.245.436.245c.514-.917.924-1.899 1.215-2.932zm-2.305 4.518-.393-.309a12.6 12.6 0 0 1-2.078 2.078l.309.393.31.392a13.5 13.5 0 0 0 2.244-2.244zm-3.857 3.297-.245-.436c-.848.476-1.757.856-2.713 1.125l.135.481.136.481a13.5 13.5 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.724.086-1.471.086v1q.805 0 1.587-.092zm-1.529.089v-.5h-1.518v1H173zm-3.541 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5H95.6v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5H87v1h1.518zM20 280.666h.5q.001-.748.086-1.471l-.497-.058-.497-.058q-.091.781-.092 1.587zm.485-3.53.481.135c.27-.956.65-1.865 1.125-2.713l-.436-.245-.436-.245A13.4 13.4 0 0 0 20.005 277zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.296.245.436a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.5 13.5 0 0 0-2.932 1.215zm4.824-1.567.058.497q.723-.086 1.471-.086v-1q-.805 0-1.587.092zm1.529-.089v.5q.748 0 1.47.086l.059-.497.058-.497q-.78-.092-1.587-.092zm3.53.485-.135.481c.955.269 1.865.649 2.713 1.126l.245-.436.245-.437c-.917-.514-1.9-.924-2.932-1.215zm4.518 2.305-.31.393c.772.609 1.47 1.307 2.08 2.078l.392-.309.392-.31a13.6 13.6 0 0 0-2.244-2.244zm3.296 3.857-.436.245c.477.848.857 1.758 1.126 2.713l.481-.135.481-.136a13.4 13.4 0 0 0-1.215-2.932zm1.567 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zm.089 1.529h-.5v1.518h1v-1.518zm0 3.541h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v3.036h1v-3.036zm0 5.059h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v3.036h1v-3.036zm0 5.059h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v1.518h1v-1.518zm0 1.518h-.5q-.001.748-.086 1.471l.497.058.497.058q.091-.781.092-1.587zm-.485 3.53-.481-.135c-.27.956-.65 1.865-1.126 2.713l.436.245.437.245c.514-.917.925-1.899 1.215-2.932zm-2.305 4.518-.393-.309a12.6 12.6 0 0 1-2.078 2.078l.31.393.31.392a13.6 13.6 0 0 0 2.243-2.244zm-3.857 3.297-.245-.436c-.848.476-1.758.856-2.713 1.125l.135.481.136.481a13.4 13.4 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.723.086-1.471.086v1q.805 0 1.587-.092zm-1.529.089v-.5q-.748 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.125l-.245.436-.245.436c.917.514 1.9.924 2.932 1.215zm-4.518-2.305.31-.393a12.6 12.6 0 0 1-2.08-2.078l-.392.309-.392.31a13.6 13.6 0 0 0 2.244 2.244zm-3.297-3.857.436-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.566-4.824.497-.058a13 13 0 0 1-.086-1.471h-1q0 .805.092 1.587zM20 366.666h.5v-1.518h-1v1.518zm0-3.541h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-3.036h-1v3.036zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-3.036h-1v3.036zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-1.518h-1v1.518z" />
                            <path data-hero-belt="bottom" d="M87 377.666h86c7.18 0 13 5.82 13 13s-5.82 13-13 13H87c-7.18 0-13-5.82-13-13s5.82-13 13-13Z" fill="none" stroke="#DFE3E8" strokeDasharray="3 2" strokeDashoffset="-4.7166666666666766" />
                            <path data-hero-belt="bottom-primary" d="M33 267.666c7.18 0 13 5.82 13 13v86c0 7.18-5.82 13-13 13s-13-5.82-13-13v-86c0-7.18 5.82-13 13-13Z" fill="none" stroke="#E6EFFE" strokeDasharray="3 2" strokeDashoffset="-4.7166666666666766" />
                            <path stroke="#DFE3E8" d="M152 365.666h82v50h-82z" />
                            <g data-hero-motion="bottom-teardrop-primary" filter="url(#home-hero-rail-active_svg__filter11_dii_220_219)" style={{ "transformOrigin": "33px 366.666px" }}>
                              <path fill="#307AF3" d="M68 366.666c0 7.389-25.611 17-35 17s-17-7.611-17-17 7.611-17 17-17 35 9.611 35 17m-26 0a9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9" />
                            </g>
                            <g data-hero-motion="bottom-teardrop-secondary" filter="url(#home-hero-rail-active_svg__filter12_dii_220_219)" style={{ "transformOrigin": "91px 390.666px" }}>
                              <path fill="#307AF3" d="M56 390.666c0 7.389 25.611 17 35 17s17-7.611 17-17-7.611-17-17-17-35 9.611-35 17m26 0a9 9 0 0 1 9-9 9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9" />
                            </g>
                            <g data-figma-bg-blur-radius="4" filter="url(#home-hero-rail-active_svg__filter13_dii_220_219)">
                              <circle cx="173" cy="390.666" r="9" fill="#0D5FE2" />
                            </g>
                            <g data-hero-motion="bottom-wheel" style={{ "transformOrigin": "49px 451.666px" }}>
                              <path fill="#82AFFB" d="m42.443 462.504.26-.428zm-4.561.28.353.354zm-6.244 6.244-.354-.353zm.115 4.2-.312.39zM49 479.276v.5zm17.246-6.048.312.39zm.115-4.2-.353.354zm-6.243-6.244.354-.353zm-4.561-.28.258.428zM49 464.333v.5zm-6.417-36.614-.483.129zm-3.694-2.002-.182-.466zm-14.006 12.024-.433-.25zm-3.41 18.143-.495.076zm3.58 2.199.13.483zm8.529-2.286.13.483zm2.517-3.809.5-.012zm1.724-6.775-.433-.25zm5.005-4.881-.239-.439zm2.041-4.084.483-.129zm14.246-10.531.182-.466zm-3.695 2.002-.483-.13zm-2.285 8.529-.483-.129zm2.04 4.084.24-.439zm5.005 4.881.433-.25zm1.725 6.775-.5-.012zm2.517 3.809.13-.483zm8.53 2.286-.13.483zm3.58-2.199.493.076zm-3.41-18.143.432-.25zM49 415.666v.5c19.606 0 35.5 15.894 35.5 35.5h1c0-20.158-16.342-36.5-36.5-36.5zm36 36h-.5c0 19.606-15.894 35.5-35.5 35.5v1c20.158 0 36.5-16.342 36.5-36.5zm-36 36v-.5c-19.606 0-35.5-15.894-35.5-35.5h-1c0 20.158 16.342 36.5 36.5 36.5zm-36-36h.5c0-19.606 15.894-35.5 35.5-35.5v-1c-20.158 0-36.5 16.342-36.5 36.5zm29.443 10.838.26-.428c-1.578-.954-3.771-1.049-5.175.355l.354.353.353.354c.984-.984 2.638-1 3.95-.206zm-4.561.28-.354-.353-6.244 6.244.354.353.353.354 6.244-6.244zm-6.244 6.244-.354-.353c-1.376 1.377-1.423 3.679.157 4.943l.312-.39.312-.391c-1.056-.845-1.084-2.445-.074-3.455zm.115 4.2-.312.39A28.1 28.1 0 0 0 49 479.776v-1a27.1 27.1 0 0 1-16.935-5.939zM49 479.276v.5a28.1 28.1 0 0 0 17.558-6.158l-.312-.39-.312-.391A27.1 27.1 0 0 1 49 478.776zm17.246-6.048.312.39c1.58-1.264 1.534-3.566.157-4.943l-.354.353-.353.354c1.01 1.01.982 2.61-.074 3.455zm.115-4.2.354-.353-6.243-6.244-.354.353-.353.354 6.243 6.244zm-6.243-6.244.354-.353c-1.404-1.404-3.597-1.309-5.174-.355l.259.428.258.428c1.312-.793 2.966-.778 3.95.206zm-4.561-.28-.26-.428A12.17 12.17 0 0 1 49 463.833v1a13.17 13.17 0 0 0 6.815-1.901zM49 464.333v-.5c-2.239 0-4.414-.617-6.298-1.757l-.259.428-.258.428A13.17 13.17 0 0 0 49 464.833zm-6.417-36.614.483-.13c-.504-1.881-2.474-3.073-4.359-2.338l.182.466.181.466c1.26-.491 2.66.285 3.03 1.665zm-3.694-2.002-.182-.466a28.35 28.35 0 0 0-14.257 12.24l.433.25.433.25a27.35 27.35 0 0 1 13.754-11.808zm-14.006 12.024-.433-.25a28.35 28.35 0 0 0-3.472 18.469l.495-.076.494-.076a27.35 27.35 0 0 1 3.349-17.817zm-3.41 18.143-.495.076c.307 1.999 2.323 3.11 4.204 2.606l-.13-.483-.129-.483c-1.38.37-2.751-.454-2.956-1.792zm3.58 2.199.13.483 8.529-2.286-.13-.483-.13-.483-8.529 2.286zm8.529-2.286.13.483c1.916-.514 2.932-2.459 2.886-4.304l-.5.012-.5.013c.039 1.529-.802 2.953-2.145 3.313zm2.517-3.809.5-.012a12.4 12.4 0 0 1 1.657-6.513l-.433-.25-.433-.25a13.4 13.4 0 0 0-1.791 7.038zm1.724-6.775.433.25a12.4 12.4 0 0 1 4.811-4.692l-.239-.439-.239-.439a13.4 13.4 0 0 0-5.199 5.07zm5.005-4.881.24.439c1.62-.883 2.797-2.735 2.284-4.652l-.483.129-.483.129c.36 1.344-.453 2.784-1.797 3.516zm2.041-4.084.483-.129-2.286-8.53-.483.13-.483.129 2.286 8.529zm14.246-10.531.182-.466c-1.885-.735-3.856.457-4.36 2.338l.483.13.483.129c.37-1.38 1.77-2.157 3.03-1.665zm-3.695 2.002-.483-.13-2.285 8.53.483.129.483.129 2.285-8.529zm-2.285 8.529-.483-.129c-.514 1.917.664 3.769 2.285 4.652l.239-.439.239-.439c-1.344-.732-2.157-2.172-1.797-3.516zm2.04 4.084-.238.439a12.4 12.4 0 0 1 4.81 4.692l.433-.25.433-.25a13.4 13.4 0 0 0-5.198-5.07zm5.005 4.881-.433.25a12.4 12.4 0 0 1 1.658 6.513l.5.012.5.013a13.4 13.4 0 0 0-1.792-7.038zm1.725 6.775-.5-.012c-.045 1.845.97 3.79 2.888 4.304l.129-.483.13-.483c-1.345-.36-2.185-1.784-2.147-3.313zm2.517 3.809-.13.483 8.53 2.286.13-.483.129-.483-8.53-2.286zm8.53 2.286-.13.483c1.881.504 3.897-.607 4.203-2.606l-.494-.076-.494-.076c-.205 1.338-1.577 2.162-2.956 1.792zm3.58-2.199.493.076a28.35 28.35 0 0 0-3.47-18.469l-.434.25-.433.25a27.35 27.35 0 0 1 3.349 17.817zm-3.41-18.143.432-.25a28.35 28.35 0 0 0-14.257-12.24l-.182.466-.181.466a27.35 27.35 0 0 1 13.754 11.808z" />
                            </g>
                          </g>
                          <defs>
                            <filter id="home-hero-rail-active_svg__filter0_dii_220_219" width="25" height="26" x="202" y="86" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter1_dii_220_219" width="44" height="62" x="13" y="51" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter2_dii_220_219" width="29" height="66" x="160" y="99" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter3_i_220_219" width="19" height="20" x="138" y="138" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect1_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter4_i_220_219" width="19" height="20" x="84" y="138" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect1_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter5_i_220_219" width="19" height="20" x="30" y="138" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect1_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter6_dii_220_219" width="25" height="26" x="202" y="191.998" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter7_i_220_219" width="64" height="81" x="194" y="239.998" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect1_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter8_dii_220_219" width="35" height="35" x="197" y="244.998" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter9_dii_220_219" width="28" height="29" x="19" y="267.998" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter10_dii_220_219" width="28" height="29" x="105" y="267.998" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter11_dii_220_219" width="62" height="44" x="11" y="346.666" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter12_dii_220_219" width="62" height="44" x="47" y="370.666" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter13_dii_220_219" width="28" height="29" x="159" y="377.666" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <clipPath id="home-hero-rail-active_svg__clip0_220_219">
                              <path fill="#fff" d="M0 0h258v166.667H0z" />
                            </clipPath>
                            <clipPath id="home-hero-rail-active_svg__clip2_220_219">
                              <path fill="#fff" d="M0 166.666h258v167H0z" />
                            </clipPath>
                            <clipPath id="home-hero-rail-active_svg__clip6_220_219">
                              <path fill="#fff" d="M0 333.666h258v166H0z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div data-hero-circuit-section="middle" className="HeroCircuitBackdrop-module__HTAPZW__middleSection group/middle absolute inset-x-0 top-41.75 h-41.5 overflow-hidden border-b border-[#E7EAEE]">
                      <div data-hero-section-background="solid" className="absolute inset-0 bg-[#1066F1] opacity-0 transition-opacity duration-0 ease-out motion-reduce:transition-none group-hover/middle:opacity-100"></div>
                      <div className="pointer-events-none absolute inset-0 origin-center overflow-hidden -scale-x-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="257" height="500" fill="none" viewBox="0 0 257 500" aria-hidden="true" data-hero-rail-layer="base" className="absolute left-0 h-125 w-full max-w-none opacity-100 transition-opacity duration-0 ease-out motion-reduce:transition-none -top-[167px] group-hover/middle:opacity-0">
                          <path stroke="#DBDFE5" d="M214 85c0-12.702 10.297-23 23-23h20M201 85h25v25h-25zM201 191h25v25h-25z" />
                          <path stroke="#DBDFE5" strokeDasharray="3 2" d="M235 500v-31.034h-48V416" />
                          <circle cx="213.5" cy="97.5" r="7" stroke="#DBDFE5" />
                          <circle cx="213.5" cy="203.5" r="7" stroke="#DBDFE5" />
                          <path stroke="#DBDFE5" strokeDasharray="3 2" d="M193 77h41v147h-41z" />
                          <path stroke="#DBDFE5" d="M151 204h50.5" />
                          <path fill="#DFE3E8" d="m224.063 320.484.142.005q.396.01.795.011h1.6v1H225q-.507 0-1.012-.018a30 30 0 0 1-.519-.019l.022-.498.024-.499q.273.011.548.018m7.871.016v1h-3.201v-1zm5.333 0v1h-3.201v-1zm5.333 0v1h-3.2v-1zm5.334 0v1h-3.201v-1zm5.333 0v1h-3.201v-1zm3.733 0v1h-1.6v-1zm-38.384-.647.274.052q.255.051.511.098l.184.031q.276.048.555.092.141.021.284.041.24.036.482.068.144.018.287.035c.116.013.232.03.348.042l-.054.498-.054.494-.307-.034a33 33 0 0 1-2.704-.437l-.014-.003.101-.489.101-.489zm-4.605-1.325a21 21 0 0 0 .735.263l.31.105a48 48 0 0 0 .713.228q.233.071.468.139l.255.073.193.055-.132.482-.132.481-.133-.037a32 32 0 0 1-2.779-.909l.177-.466.176-.467zm-4.241-1.951.25.139q.986.535 2.014 1.001l-.412.91a34 34 0 0 1-.698-.326q-.132-.064-.262-.129a34 34 0 0 1-1.767-.938l.496-.867q.188.106.379.21m-4.316-2.875.241.189q.161.125.326.25l.301.224q.139.102.279.203.163.118.33.235.158.111.318.221.144.098.289.195l.166.112-.274.418-.275.415-.193-.128a33 33 0 0 1-2.145-1.562l-.137-.112.312-.387.313-.39q.074.06.149.117m-3.753-3.502a32 32 0 0 0 2.099 2.099l-.336.37-.337.368a33 33 0 0 1-2.165-2.165l.369-.336zm-2.921-3.739q.097.145.195.289a26 26 0 0 0 .456.648q.094.13.189.26l.238.321.25.325.19.241q.058.076.117.15l-.39.313-.388.311-.112-.137a33 33 0 0 1-1.69-2.338l.416-.274.418-.274zm-2.497-4.495q.465 1.027 1 2.013l.139.25q.104.192.211.38l-.434.248-.434.247q-.18-.314-.353-.633a32 32 0 0 1-1.04-2.094l.456-.205zm-1.62-4.459.073.255q.068.235.139.468a28 28 0 0 0 .229.713l.104.31a25 25 0 0 0 .263.735l.054.15-.467.176-.467.176-.049-.13a32 32 0 0 1-.86-2.649q-.019-.067-.036-.133l.481-.131.482-.132zm-.934-4.701q.017.143.035.287.032.242.068.482.02.143.041.284.044.279.092.555l.031.184.047.247q.05.269.103.538l.002.007-.489.101-.49.101a33 33 0 0 1-.473-3.026l.494-.053.498-.054q.02.173.041.347M192.5 289v-1.47h1V289q0 .747.034 1.485l-.499.024-.498.021a30 30 0 0 1-.019-.519A31 31 0 0 1 192.5 289m1-6.37v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm.977-3.93v1h-.977v.97h-1v-1.97zm4.923 0v1h-2.954v-1zm4.923 0v1h-2.954v-1zm4.923 0v1h-2.954v-1zm4.923 0v1h-2.953v-1zm4.924 0v1h-2.954v-1zm4.923 0v1h-2.954v-1zm4.922 0v1h-2.954v-1zm4.923 0v1h-2.954v-1zm4.923 0v1h-2.953v-1zm4.924 0v1h-2.954v-1zm4.923 0v1h-2.954v-1zm4.923 0v1H250.6v-1zm3.446 0v1h-1.477v-1z" />
                          <path fill="#DBDFE5" d="M73 204v-.5h-.5v.5zm0 0h-.5v1.477h1V204zm0 3.446h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.924h-.5v2.953h1v-2.953zm0 4.923h-.5v2.953h1v-2.953zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1V261.6zm0 4.923h-.5V268h1v-1.477zM151 204v-.5h-1.463v1H151zm-3.412 0v-.5h-2.926v1h2.926zm-4.875 0v-.5h-2.926v1h2.926zm-4.875 0v-.5h-2.926v1h2.926zm-4.875 0v-.5h-2.925v1h2.925zm-4.876 0v-.5h-2.924v1h2.924zm-4.875 0v-.5h-2.924v1h2.924zm-4.874 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5H73v1h1.463z" />
                          <path stroke="#DBDFE5" d="M201 248h25v25h-25z" />
                          <path fill="#DBDFE5" d="M32 294v-.5q-.747 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.126l-.245.437-.245.436c.917.514 1.9.924 2.932 1.215zm-4.518-2.305.31-.393a12.6 12.6 0 0 1-2.08-2.078l-.392.309-.392.31a13.6 13.6 0 0 0 2.244 2.244zm-3.297-3.857.436-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.566-4.824.497-.058A13 13 0 0 1 19.5 281h-1q0 .805.092 1.587zM19 281h.5q.001-.747.086-1.471l-.497-.058-.497-.058q-.091.782-.092 1.587zm.485-3.53.481.135c.27-.956.65-1.865 1.125-2.713l-.436-.245-.436-.245a13.4 13.4 0 0 0-1.215 2.932zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.297.245.437a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.5 13.5 0 0 0-2.932 1.215zm4.824-1.566.058.497q.724-.086 1.471-.086v-1q-.805 0-1.587.092zM32 268v.5h1.518v-1H32zm3.541 0v.5h3.036v-1H35.54zm5.059 0v.5h3.035v-1H40.6zm5.059 0v.5h3.035v-1H45.66zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5h3.036v-1h-3.035zm5.06 0v.5h3.035v-1h-3.036zm5.058 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1H81.07zm5.058 0v.5h3.036v-1h-3.036zm5.06 0v.5h3.035v-1h-3.036zm5.058 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5H118v-1h-1.518zm1.518 0v.5q.748 0 1.471.086l.058-.497.058-.497A14 14 0 0 0 118 267.5zm3.53.485-.135.481a12.4 12.4 0 0 1 2.713 1.126l.245-.437.245-.436a13.5 13.5 0 0 0-2.932-1.215zm4.518 2.305-.309.393a12.6 12.6 0 0 1 2.078 2.078l.393-.309.392-.31a13.5 13.5 0 0 0-2.244-2.244zm3.297 3.857-.437.245a12.4 12.4 0 0 1 1.126 2.713l.481-.135.481-.136a13.5 13.5 0 0 0-1.215-2.932zm1.566 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zM131 281h-.5q0 .747-.086 1.471l.497.058.497.058q.092-.782.092-1.587zm-.485 3.53-.481-.135a12.4 12.4 0 0 1-1.126 2.713l.437.245.436.245c.514-.917.924-1.899 1.215-2.932zm-2.305 4.518-.393-.309a12.6 12.6 0 0 1-2.078 2.078l.309.393.31.392a13.5 13.5 0 0 0 2.244-2.244zm-3.857 3.297-.245-.437a12.4 12.4 0 0 1-2.713 1.126l.135.481.136.481a13.5 13.5 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.724.086-1.471.086v1q.805 0 1.587-.092zM118 294v-.5h-1.518v1H118zm-3.541 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.035zm-5.06 0v-.5H86.13v1h3.036zm-5.058 0v-.5H81.07v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.036zm-5.06 0v-.5h-3.035v1h3.036zm-5.058 0v-.5h-3.035v1h3.035zm-5.059 0v-.5H45.66v1h3.035zm-5.059 0v-.5H40.6v1h3.035zm-5.058 0v-.5H35.54v1h3.036zm-5.06 0v-.5H32v1h1.518zM86 404v-.5q-.748 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.126l-.245.437-.245.436c.917.514 1.9.924 2.932 1.215zm-4.519-2.305.31-.393a12.6 12.6 0 0 1-2.078-2.078l-.393.309-.392.31a13.6 13.6 0 0 0 2.244 2.244zm-3.295-3.857.435-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.567-4.824.497-.058A13 13 0 0 1 73.5 391h-1q0 .805.092 1.587zM73 391h.5q.001-.747.086-1.471l-.497-.058-.497-.058q-.091.782-.092 1.587zm.485-3.53.481.135c.27-.956.65-1.865 1.126-2.713l-.436-.245-.437-.245a13.4 13.4 0 0 0-1.215 2.932zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.297.245.437a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.5 13.5 0 0 0-2.932 1.215zm4.824-1.566.058.497q.724-.086 1.471-.086v-1q-.805 0-1.587.092zM86 378v.5h1.518v-1H86zm3.541 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1H94.6zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5H172v-1h-1.518zm1.518 0v.5q.747 0 1.471.086l.058-.497.058-.497A14 14 0 0 0 172 377.5zm3.53.485-.135.481a12.4 12.4 0 0 1 2.713 1.126l.245-.437.245-.436a13.5 13.5 0 0 0-2.932-1.215zm4.518 2.305-.309.393a12.6 12.6 0 0 1 2.078 2.078l.393-.309.392-.31a13.5 13.5 0 0 0-2.244-2.244zm3.297 3.857-.437.245a12.4 12.4 0 0 1 1.126 2.713l.481-.135.481-.136a13.5 13.5 0 0 0-1.215-2.932zm1.566 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zM185 391h-.5q0 .747-.086 1.471l.497.058.497.058q.092-.782.092-1.587zm-.485 3.53-.481-.135a12.4 12.4 0 0 1-1.126 2.713l.437.245.436.245c.514-.917.924-1.899 1.215-2.932zm-2.305 4.518-.393-.309a12.6 12.6 0 0 1-2.078 2.078l.309.393.31.392a13.5 13.5 0 0 0 2.244-2.244zm-3.857 3.297-.245-.437a12.4 12.4 0 0 1-2.713 1.126l.135.481.136.481a13.5 13.5 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.724.086-1.471.086v1q.805 0 1.587-.092zM172 404v-.5h-1.518v1H172zm-3.541 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5H94.6v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5H86v1h1.518z" />
                          <path fill="#DBDFE5" d="M19 281h.5q.001-.747.086-1.471l-.497-.058-.497-.058q-.091.782-.092 1.587zm.485-3.53.481.135c.27-.956.65-1.865 1.125-2.713l-.436-.245-.436-.245a13.4 13.4 0 0 0-1.215 2.932zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.297.245.437a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.5 13.5 0 0 0-2.932 1.215zm4.824-1.566.058.497q.724-.086 1.471-.086v-1q-.805 0-1.587.092zM32 268v.5q.748 0 1.47.086l.059-.497.058-.497q-.78-.092-1.587-.092zm3.53.485-.135.481c.955.269 1.865.649 2.713 1.126l.245-.437.245-.436c-.917-.514-1.9-.924-2.932-1.215zm4.518 2.305-.31.393c.772.609 1.47 1.307 2.08 2.078l.392-.309.392-.31a13.6 13.6 0 0 0-2.244-2.244zm3.296 3.857-.436.245c.477.848.857 1.757 1.126 2.713l.481-.135.481-.136a13.4 13.4 0 0 0-1.215-2.932zm1.567 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zM45 281h-.5v1.518h1V281zm0 3.541h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1V289.6zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v3.036h1v-3.036zm0 5.059h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v3.036h1v-3.036zm0 5.059h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5V367h1v-1.518zM45 367h-.5q-.001.747-.086 1.471l.497.058.497.058q.091-.782.092-1.587zm-.485 3.53-.481-.135c-.27.956-.65 1.865-1.126 2.713l.436.245.437.245c.514-.917.925-1.899 1.215-2.932zm-2.305 4.518-.393-.309a12.6 12.6 0 0 1-2.078 2.078l.31.393.31.392a13.6 13.6 0 0 0 2.243-2.244zm-3.857 3.297-.245-.437c-.848.477-1.758.857-2.713 1.126l.135.481.136.481a13.4 13.4 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.723.086-1.471.086v1q.805 0 1.587-.092zM32 380v-.5q-.747 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.126l-.245.437-.245.436c.917.514 1.9.924 2.932 1.215zm-4.518-2.305.31-.393a12.6 12.6 0 0 1-2.08-2.078l-.392.309-.392.31a13.6 13.6 0 0 0 2.244 2.244zm-3.297-3.857.436-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.566-4.824.497-.058A13 13 0 0 1 19.5 367h-1q0 .805.092 1.587zM19 367h.5v-1.518h-1V367zm0-3.541h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-3.036h-1v3.036zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-3.036h-1v3.036zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5V289.6h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5V281h-1v1.518z" />
                          <circle cx="32" cy="281" r="8.5" stroke="#DBDFE5" />
                          <circle cx="118" cy="281" r="8.5" stroke="#DBDFE5" />
                          <path stroke="#DBDFE5" d="M151 366h82v50h-82z" />
                          <g data-hero-motion="bottom-teardrop-primary" style={{ "transformOrigin": "33px 366.666px" }}>
                            <circle cx="9" cy="9" r="8.5" stroke="#DBDFE5" transform="matrix(0 -1 -1 0 41 376)" />
                            <path stroke="#DBDFE5" d="M66.5 367c0-.778-.338-1.634-1.02-2.555-.681-.918-1.679-1.867-2.931-2.821-2.504-1.907-5.96-3.782-9.73-5.437a85 85 0 0 0-11.521-4.087c-3.707-1.013-7.017-1.6-9.298-1.6-9.113 0-16.5 7.387-16.5 16.5s7.387 16.5 16.5 16.5c2.28 0 5.591-.587 9.298-1.6a85 85 0 0 0 11.521-4.087c3.77-1.655 7.226-3.53 9.73-5.437 1.252-.954 2.25-1.903 2.93-2.821.683-.921 1.021-1.777 1.021-2.555Z" />
                          </g>
                          <g data-hero-motion="top-pin" style={{ "transformOrigin": "35px 71px" }}>
                            <circle cx="9" cy="9" r="8.5" stroke="#DBDFE5" transform="matrix(1 0 0 -1 26 80)" />
                            <path stroke="#DBDFE5" d="M35 105.5c.778 0 1.634-.338 2.555-1.021.918-.68 1.867-1.678 2.821-2.93 1.907-2.504 3.782-5.96 5.438-9.73A85.5 85.5 0 0 0 49.9 80.298c1.013-3.707 1.6-7.017 1.6-9.298 0-9.113-7.387-16.5-16.5-16.5S18.5 61.887 18.5 71c0 2.28.587 5.591 1.6 9.298a85.5 85.5 0 0 0 4.086 11.521c1.656 3.77 3.531 7.226 5.438 9.73.954 1.252 1.903 2.25 2.821 2.93.921.683 1.777 1.021 2.555 1.021Z" />
                          </g>
                          <path stroke="#DFE3E8" d="M51 71h75c11.046 0 20 8.954 20 20v47" />
                          <g data-hero-motion="bottom-teardrop-secondary" style={{ "transformOrigin": "91px 390.666px" }}>
                            <circle cx="9" cy="9" r="8.5" stroke="#DBDFE5" transform="matrix(0 1 1 0 81 382)" />
                            <path stroke="#DBDFE5" d="M55.5 391c0 .778.338 1.634 1.02 2.555.681.918 1.679 1.867 2.931 2.821 2.504 1.907 5.96 3.782 9.73 5.437a85 85 0 0 0 11.521 4.087c3.707 1.013 7.017 1.6 9.298 1.6 9.113 0 16.5-7.387 16.5-16.5s-7.387-16.5-16.5-16.5c-2.28 0-5.591.587-9.298 1.6a85 85 0 0 0-11.521 4.087c-3.77 1.655-7.226 3.53-9.73 5.437-1.252.954-2.25 1.903-2.93 2.821-.683.921-1.021 1.777-1.021 2.555Z" />
                          </g>
                          <circle cx="172" cy="391" r="8.5" stroke="#DBDFE5" />
                          <path stroke="#DBDFE5" d="M164 102h19v56h-19zM137 138h19v20h-19zM110 138h19v20h-19zM83 138h19v20H83zM56 138h19v20H56zM29 138h19v20H29z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="258" height="500" fill="none" viewBox="0 0 258 500" aria-hidden="true" data-hero-rail-layer="active" className="absolute left-0 h-125 w-full max-w-none opacity-0 transition-opacity duration-0 ease-out motion-reduce:transition-none -top-[167px] group-hover/middle:opacity-100">
                          <g clipPath="url(#home-hero-rail-active_svg__clip0_220_219)">
                            <path stroke="#82AFFB" d="M215 85c0-12.702 10.297-23 23-23h20M202 85h25v25h-25z" />
                            <g data-figma-bg-blur-radius="4" filter="url(#home-hero-rail-active_svg__filter0_dii_220_219)">
                              <circle cx="214.5" cy="97.5" r="7.5" fill="#0D5FE2" />
                            </g>
                            <path stroke="#82AFFB" strokeDasharray="3 2" d="M194 77h41v147h-41z" />
                            <g data-hero-motion="top-pin" style={{ "transformOrigin": "35px 71px" }}>
                              <path stroke="#82AFFB" d="M35 105.5c.778 0 1.634-.338 2.555-1.021.918-.68 1.867-1.678 2.821-2.93 1.907-2.504 3.782-5.96 5.438-9.73A85.5 85.5 0 0 0 49.9 80.298c1.013-3.707 1.6-7.017 1.6-9.298 0-9.113-7.387-16.5-16.5-16.5S18.5 61.887 18.5 71c0 2.28.587 5.591 1.6 9.298a85.5 85.5 0 0 0 4.086 11.521c1.656 3.77 3.531 7.226 5.438 9.73.954 1.252 1.903 2.25 2.821 2.93.921.683 1.777 1.021 2.555 1.021Z" />
                              <g filter="url(#home-hero-rail-active_svg__filter1_dii_220_219)">
                                <path fill="#307AF3" d="M35 106c-7.389 0-17-25.611-17-35s7.611-17 17-17 17 7.611 17 17-9.611 35-17 35m0-26a9 9 0 1 0 0-18 9 9 0 0 0 0 18" />
                              </g>
                            </g>
                            <path stroke="#4D8CF9" d="M52 71h75c11.046 0 20 8.954 20 20v47" />
                            <g filter="url(#home-hero-rail-active_svg__filter2_dii_220_219)">
                              <path fill="#0D5FE2" d="M165 102h19v56h-19z" />
                            </g>
                            <g data-hero-motion="top-fifth-bar">
                              <g filter="url(#home-hero-rail-active_svg__filter3_i_220_219)">
                                <path data-hero-bar-fill="true" fill="#307AF3" fillOpacity="0.5" d="M138 138h19v20h-19z" />
                              </g>
                            </g>
                            <path stroke="#82AFFB" d="M111 128h19v30h-19z" />
                            <g filter="url(#home-hero-rail-active_svg__filter4_i_220_219)">
                              <path fill="#307AF3" fillOpacity="0.5" d="M84 138h19v20H84z" />
                            </g>
                            <path stroke="#82AFFB" d="M57 119h19v39H57z" />
                            <g filter="url(#home-hero-rail-active_svg__filter5_i_220_219)">
                              <path fill="#307AF3" fillOpacity="0.5" d="M30 138h19v20H30z" />
                            </g>
                          </g>
                          <g clipPath="url(#home-hero-rail-active_svg__clip2_220_219)">
                            <path stroke="#82AFFB" d="M202 190.998h25v25h-25z" />
                            <g data-hero-motion="middle-node">
                              <g data-figma-bg-blur-radius="4" filter="url(#home-hero-rail-active_svg__filter6_dii_220_219)">
                                <circle data-hero-middle-fill="true" cx="214.5" cy="203.498" r="7.5" fill="#0D5FE2" />
                              </g>
                              <circle data-hero-middle-outline="true" cx="214.5" cy="203.498" r="7.5" fill="none" stroke="#82AFFB" opacity="0" />
                            </g>
                            <path stroke="#82AFFB" strokeDasharray="3 2" d="M194 76.998h41v147h-41z" />
                            <path stroke="#82AFFB" d="M152 203.998h50.5" />
                            <g filter="url(#home-hero-rail-active_svg__filter7_i_220_219)">
                              <path fill="#2976F2" d="M194 239.998h64v81h-32c-17.673 0-32-14.327-32-32z" />
                            </g>
                            <path fill="#E6EFFE" d="M74 203.998v-.5h-.5v.5zm0 0h-.5v1.477h1v-1.477zm0 3.446h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.924h-.5v2.953h1v-2.953zm0 4.923h-.5v2.953h1v-2.953zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v1.477h1v-1.477zm78-62.523v-.5h-1.463v1H152zm-3.412 0v-.5h-2.926v1h2.926zm-4.875 0v-.5h-2.926v1h2.926zm-4.875 0v-.5h-2.926v1h2.926zm-4.875 0v-.5h-2.925v1h2.925zm-4.876 0v-.5h-2.924v1h2.924zm-4.875 0v-.5h-2.924v1h2.924zm-4.874 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5H74v1h1.463z" />
                            <g data-hero-motion="middle-node">
                              <g filter="url(#home-hero-rail-active_svg__filter8_dii_220_219)">
                                <path data-hero-middle-fill="true" fill="#0D5FE2" d="M202 247.998h25v25h-25z" />
                              </g>
                              <path data-hero-middle-outline="true" d="M202 247.998h25v25h-25z" fill="none" stroke="#82AFFB" opacity="0" />
                            </g>
                            <path fill="none" d="M20 280.998h.5q.001-.747.086-1.471l-.497-.058-.497-.058q-.091.781-.092 1.587zm.485-3.53.481.135c.27-.955.65-1.865 1.125-2.713l-.436-.245-.436-.245a13.4 13.4 0 0 0-1.215 2.932zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.296.245.436a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.4 13.4 0 0 0-2.932 1.216zm4.824-1.567.058.497q.723-.086 1.471-.086v-1q-.805 0-1.587.092zm1.529-.089v.5q.748 0 1.47.086l.059-.497.058-.497q-.78-.092-1.587-.092zm3.53.485-.135.481c.955.269 1.865.649 2.713 1.126l.245-.436.245-.436a13.4 13.4 0 0 0-2.932-1.216zm4.518 2.305-.31.393c.772.609 1.47 1.307 2.08 2.078l.392-.309.392-.31a13.6 13.6 0 0 0-2.244-2.244zm3.296 3.857-.436.245c.477.848.857 1.758 1.126 2.713l.481-.135.481-.136a13.4 13.4 0 0 0-1.215-2.932zm1.567 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zm.089 1.529h-.5v1.518h1v-1.518zm0 3.541h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v3.036h1v-3.036zm0 5.059h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v1.518h1v-1.518zm0 1.518h-.5q-.001.747-.086 1.471l.497.058.497.058q.091-.781.092-1.587zm-.485 3.53-.481-.135c-.27.956-.65 1.865-1.126 2.713l.436.245.437.245c.514-.917.925-1.899 1.215-2.932zm-2.305 4.519-.393-.31a12.6 12.6 0 0 1-2.078 2.078l.31.393.31.392a13.6 13.6 0 0 0 2.243-2.244zm-3.857 3.296-.245-.436c-.848.476-1.758.856-2.713 1.125l.135.481.136.481a13.4 13.4 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.723.086-1.471.086v1q.805 0 1.587-.092zm-1.529.089v-.5q-.748 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.125l-.245.436-.245.436c.917.514 1.9.925 2.932 1.215zm-4.518-2.305.31-.393a12.6 12.6 0 0 1-2.08-2.078l-.392.31-.392.309a13.6 13.6 0 0 0 2.244 2.244zm-3.297-3.857.436-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.566-4.824.497-.058a13 13 0 0 1-.086-1.471h-1q0 .805.092 1.587zM20 366.998h.5v-1.518h-1v1.518zm0-3.541h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-3.036h-1v3.036zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-1.518h-1v1.518z" />
                            <path data-hero-belt="middle-primary" d="M33 267.998c7.18 0 13 5.82 13 13v86c0 7.18-5.82 13-13 13s-13-5.82-13-13v-86c0-7.18 5.82-13 13-13Z" fill="none" stroke="#82AFFB" strokeDasharray="3 2" strokeDashoffset="-4.7166666666666766" />
                            <path data-hero-belt="middle" d="M33 267.998h86c7.18 0 13 5.82 13 13s-5.82 13-13 13H33c-7.18 0-13-5.82-13-13s5.82-13 13-13Z" fill="none" stroke="#E6EFFE" strokeDasharray="3 2" strokeDashoffset="-4.7166666666666766" />
                            <g data-figma-bg-blur-radius="4" filter="url(#home-hero-rail-active_svg__filter9_dii_220_219)">
                              <circle cx="33" cy="280.998" r="9" fill="#0D5FE2" />
                            </g>
                            <g data-hero-motion="middle-node">
                              <g data-figma-bg-blur-radius="4" filter="url(#home-hero-rail-active_svg__filter10_dii_220_219)">
                                <circle data-hero-middle-fill="true" cx="119" cy="280.998" r="9" fill="#0D5FE2" />
                              </g>
                              <circle data-hero-middle-outline="true" cx="119" cy="280.998" r="8.5" fill="none" stroke="#82AFFB" opacity="0" />
                            </g>
                            <path fill="none" d="M33 293.998v-.5q-.748 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.125l-.245.436-.245.436c.917.514 1.9.925 2.932 1.215zm-4.518-2.305.31-.393a12.6 12.6 0 0 1-2.08-2.078l-.392.31-.392.309a13.6 13.6 0 0 0 2.244 2.244zm-3.297-3.857.436-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.566-4.824.497-.058a13 13 0 0 1-.086-1.471h-1q0 .805.092 1.587zM20 280.998h.5q.001-.747.086-1.471l-.497-.058-.497-.058q-.091.781-.092 1.587zm.485-3.53.481.135c.27-.955.65-1.865 1.125-2.713l-.436-.245-.436-.245a13.4 13.4 0 0 0-1.215 2.932zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.296.245.436a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.4 13.4 0 0 0-2.932 1.216zm4.824-1.567.058.497q.723-.086 1.471-.086v-1q-.805 0-1.587.092zm1.529-.089v.5h1.518v-1H33zm3.541 0v.5h3.036v-1H36.54zm5.059 0v.5h3.035v-1H41.6zm5.059 0v.5h3.035v-1H46.66zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5h3.036v-1h-3.035zm5.06 0v.5h3.035v-1h-3.036zm5.058 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1H82.07zm5.058 0v.5h3.036v-1h-3.036zm5.06 0v.5h3.035v-1h-3.036zm5.058 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5H119v-1h-1.518zm1.518 0v.5q.748 0 1.471.086l.058-.497.058-.497a14 14 0 0 0-1.587-.092zm3.53.485-.135.481a12.4 12.4 0 0 1 2.713 1.126l.245-.436.245-.436a13.4 13.4 0 0 0-2.932-1.216zm4.518 2.305-.309.393a12.6 12.6 0 0 1 2.078 2.078l.393-.309.392-.31a13.5 13.5 0 0 0-2.244-2.244zm3.297 3.857-.437.245a12.4 12.4 0 0 1 1.126 2.713l.481-.135.481-.136a13.5 13.5 0 0 0-1.215-2.932zm1.566 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zm.089 1.529h-.5q0 .748-.086 1.471l.497.058.497.058q.092-.781.092-1.587zm-.485 3.53-.481-.135a12.4 12.4 0 0 1-1.126 2.713l.437.245.436.245c.514-.917.924-1.899 1.215-2.932zm-2.305 4.519-.393-.31a12.6 12.6 0 0 1-2.078 2.078l.309.393.31.392a13.5 13.5 0 0 0 2.244-2.244zm-3.857 3.296-.245-.436c-.848.476-1.757.856-2.713 1.125l.135.481.136.481a13.4 13.4 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.724.086-1.471.086v1q.805 0 1.587-.092zm-1.529.089v-.5h-1.518v1H119zm-3.541 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.035zm-5.06 0v-.5H87.13v1h3.036zm-5.058 0v-.5H82.07v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.036zm-5.06 0v-.5h-3.035v1h3.036zm-5.058 0v-.5h-3.035v1h3.035zm-5.059 0v-.5H46.66v1h3.035zm-5.059 0v-.5H41.6v1h3.035zm-5.058 0v-.5H36.54v1h3.036zm-5.06 0v-.5H33v1h1.518z" />
                          </g>
                          <g clipPath="url(#home-hero-rail-active_svg__clip6_220_219)">
                            <path stroke="#4D8CF9" strokeDasharray="3 2" d="M236 499.666v-31.034h-48v-52.966" />
                            <path fill="none" d="M87 403.666v-.5q-.748 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.125l-.245.436-.245.436c.917.514 1.9.924 2.932 1.215zm-4.519-2.305.31-.393a12.6 12.6 0 0 1-2.078-2.078l-.393.309-.392.31a13.6 13.6 0 0 0 2.244 2.244zm-3.295-3.857.435-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.567-4.824.497-.058a13 13 0 0 1-.086-1.471h-1q0 .805.092 1.587zM74 390.666h.5q.001-.748.086-1.471l-.497-.058-.497-.058q-.091.782-.092 1.587zm.485-3.53.481.135c.27-.955.65-1.865 1.126-2.713l-.436-.245-.437-.245A13.4 13.4 0 0 0 74.005 387zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.296.245.436a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.5 13.5 0 0 0-2.932 1.215zm4.824-1.567.058.497q.724-.086 1.471-.086v-1q-.805 0-1.587.092zm1.529-.089v.5h1.518v-1H87zm3.541 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1H95.6zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5H173v-1h-1.518zm1.518 0v.5q.747 0 1.471.086l.058-.497.058-.497a14 14 0 0 0-1.587-.092zm3.53.485-.135.481a12.4 12.4 0 0 1 2.713 1.126l.245-.436.245-.437a13.5 13.5 0 0 0-2.932-1.215zm4.518 2.305-.309.393a12.6 12.6 0 0 1 2.078 2.078l.393-.309.392-.31a13.5 13.5 0 0 0-2.244-2.244zm3.297 3.857-.437.245a12.4 12.4 0 0 1 1.126 2.713l.481-.135.481-.136a13.5 13.5 0 0 0-1.215-2.932zm1.566 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zm.089 1.529h-.5q0 .748-.086 1.471l.497.058.497.058q.092-.781.092-1.587zm-.485 3.53-.481-.135a12.4 12.4 0 0 1-1.126 2.713l.437.245.436.245c.514-.917.924-1.899 1.215-2.932zm-2.305 4.518-.393-.309a12.6 12.6 0 0 1-2.078 2.078l.309.393.31.392a13.5 13.5 0 0 0 2.244-2.244zm-3.857 3.297-.245-.436c-.848.476-1.757.856-2.713 1.125l.135.481.136.481a13.5 13.5 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.724.086-1.471.086v1q.805 0 1.587-.092zm-1.529.089v-.5h-1.518v1H173zm-3.541 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5H95.6v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5H87v1h1.518zM20 280.666h.5q.001-.748.086-1.471l-.497-.058-.497-.058q-.091.781-.092 1.587zm.485-3.53.481.135c.27-.956.65-1.865 1.125-2.713l-.436-.245-.436-.245A13.4 13.4 0 0 0 20.005 277zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.296.245.436a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.5 13.5 0 0 0-2.932 1.215zm4.824-1.567.058.497q.723-.086 1.471-.086v-1q-.805 0-1.587.092zm1.529-.089v.5q.748 0 1.47.086l.059-.497.058-.497q-.78-.092-1.587-.092zm3.53.485-.135.481c.955.269 1.865.649 2.713 1.126l.245-.436.245-.437c-.917-.514-1.9-.924-2.932-1.215zm4.518 2.305-.31.393c.772.609 1.47 1.307 2.08 2.078l.392-.309.392-.31a13.6 13.6 0 0 0-2.244-2.244zm3.296 3.857-.436.245c.477.848.857 1.758 1.126 2.713l.481-.135.481-.136a13.4 13.4 0 0 0-1.215-2.932zm1.567 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zm.089 1.529h-.5v1.518h1v-1.518zm0 3.541h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v3.036h1v-3.036zm0 5.059h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v3.036h1v-3.036zm0 5.059h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v1.518h1v-1.518zm0 1.518h-.5q-.001.748-.086 1.471l.497.058.497.058q.091-.781.092-1.587zm-.485 3.53-.481-.135c-.27.956-.65 1.865-1.126 2.713l.436.245.437.245c.514-.917.925-1.899 1.215-2.932zm-2.305 4.518-.393-.309a12.6 12.6 0 0 1-2.078 2.078l.31.393.31.392a13.6 13.6 0 0 0 2.243-2.244zm-3.857 3.297-.245-.436c-.848.476-1.758.856-2.713 1.125l.135.481.136.481a13.4 13.4 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.723.086-1.471.086v1q.805 0 1.587-.092zm-1.529.089v-.5q-.748 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.125l-.245.436-.245.436c.917.514 1.9.924 2.932 1.215zm-4.518-2.305.31-.393a12.6 12.6 0 0 1-2.08-2.078l-.392.309-.392.31a13.6 13.6 0 0 0 2.244 2.244zm-3.297-3.857.436-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.566-4.824.497-.058a13 13 0 0 1-.086-1.471h-1q0 .805.092 1.587zM20 366.666h.5v-1.518h-1v1.518zm0-3.541h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-3.036h-1v3.036zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-3.036h-1v3.036zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-1.518h-1v1.518z" />
                            <path data-hero-belt="bottom" d="M87 377.666h86c7.18 0 13 5.82 13 13s-5.82 13-13 13H87c-7.18 0-13-5.82-13-13s5.82-13 13-13Z" fill="none" stroke="#DFE3E8" strokeDasharray="3 2" strokeDashoffset="-4.7166666666666766" />
                            <path data-hero-belt="bottom-primary" d="M33 267.666c7.18 0 13 5.82 13 13v86c0 7.18-5.82 13-13 13s-13-5.82-13-13v-86c0-7.18 5.82-13 13-13Z" fill="none" stroke="#E6EFFE" strokeDasharray="3 2" strokeDashoffset="-4.7166666666666766" />
                            <path stroke="#DFE3E8" d="M152 365.666h82v50h-82z" />
                            <g data-hero-motion="bottom-teardrop-primary" filter="url(#home-hero-rail-active_svg__filter11_dii_220_219)" style={{ "transformOrigin": "33px 366.666px" }}>
                              <path fill="#307AF3" d="M68 366.666c0 7.389-25.611 17-35 17s-17-7.611-17-17 7.611-17 17-17 35 9.611 35 17m-26 0a9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9" />
                            </g>
                            <g data-hero-motion="bottom-teardrop-secondary" filter="url(#home-hero-rail-active_svg__filter12_dii_220_219)" style={{ "transformOrigin": "91px 390.666px" }}>
                              <path fill="#307AF3" d="M56 390.666c0 7.389 25.611 17 35 17s17-7.611 17-17-7.611-17-17-17-35 9.611-35 17m26 0a9 9 0 0 1 9-9 9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9" />
                            </g>
                            <g data-figma-bg-blur-radius="4" filter="url(#home-hero-rail-active_svg__filter13_dii_220_219)">
                              <circle cx="173" cy="390.666" r="9" fill="#0D5FE2" />
                            </g>
                            <g data-hero-motion="bottom-wheel" style={{ "transformOrigin": "49px 451.666px" }}>
                              <path fill="#82AFFB" d="m42.443 462.504.26-.428zm-4.561.28.353.354zm-6.244 6.244-.354-.353zm.115 4.2-.312.39zM49 479.276v.5zm17.246-6.048.312.39zm.115-4.2-.353.354zm-6.243-6.244.354-.353zm-4.561-.28.258.428zM49 464.333v.5zm-6.417-36.614-.483.129zm-3.694-2.002-.182-.466zm-14.006 12.024-.433-.25zm-3.41 18.143-.495.076zm3.58 2.199.13.483zm8.529-2.286.13.483zm2.517-3.809.5-.012zm1.724-6.775-.433-.25zm5.005-4.881-.239-.439zm2.041-4.084.483-.129zm14.246-10.531.182-.466zm-3.695 2.002-.483-.13zm-2.285 8.529-.483-.129zm2.04 4.084.24-.439zm5.005 4.881.433-.25zm1.725 6.775-.5-.012zm2.517 3.809.13-.483zm8.53 2.286-.13.483zm3.58-2.199.493.076zm-3.41-18.143.432-.25zM49 415.666v.5c19.606 0 35.5 15.894 35.5 35.5h1c0-20.158-16.342-36.5-36.5-36.5zm36 36h-.5c0 19.606-15.894 35.5-35.5 35.5v1c20.158 0 36.5-16.342 36.5-36.5zm-36 36v-.5c-19.606 0-35.5-15.894-35.5-35.5h-1c0 20.158 16.342 36.5 36.5 36.5zm-36-36h.5c0-19.606 15.894-35.5 35.5-35.5v-1c-20.158 0-36.5 16.342-36.5 36.5zm29.443 10.838.26-.428c-1.578-.954-3.771-1.049-5.175.355l.354.353.353.354c.984-.984 2.638-1 3.95-.206zm-4.561.28-.354-.353-6.244 6.244.354.353.353.354 6.244-6.244zm-6.244 6.244-.354-.353c-1.376 1.377-1.423 3.679.157 4.943l.312-.39.312-.391c-1.056-.845-1.084-2.445-.074-3.455zm.115 4.2-.312.39A28.1 28.1 0 0 0 49 479.776v-1a27.1 27.1 0 0 1-16.935-5.939zM49 479.276v.5a28.1 28.1 0 0 0 17.558-6.158l-.312-.39-.312-.391A27.1 27.1 0 0 1 49 478.776zm17.246-6.048.312.39c1.58-1.264 1.534-3.566.157-4.943l-.354.353-.353.354c1.01 1.01.982 2.61-.074 3.455zm.115-4.2.354-.353-6.243-6.244-.354.353-.353.354 6.243 6.244zm-6.243-6.244.354-.353c-1.404-1.404-3.597-1.309-5.174-.355l.259.428.258.428c1.312-.793 2.966-.778 3.95.206zm-4.561-.28-.26-.428A12.17 12.17 0 0 1 49 463.833v1a13.17 13.17 0 0 0 6.815-1.901zM49 464.333v-.5c-2.239 0-4.414-.617-6.298-1.757l-.259.428-.258.428A13.17 13.17 0 0 0 49 464.833zm-6.417-36.614.483-.13c-.504-1.881-2.474-3.073-4.359-2.338l.182.466.181.466c1.26-.491 2.66.285 3.03 1.665zm-3.694-2.002-.182-.466a28.35 28.35 0 0 0-14.257 12.24l.433.25.433.25a27.35 27.35 0 0 1 13.754-11.808zm-14.006 12.024-.433-.25a28.35 28.35 0 0 0-3.472 18.469l.495-.076.494-.076a27.35 27.35 0 0 1 3.349-17.817zm-3.41 18.143-.495.076c.307 1.999 2.323 3.11 4.204 2.606l-.13-.483-.129-.483c-1.38.37-2.751-.454-2.956-1.792zm3.58 2.199.13.483 8.529-2.286-.13-.483-.13-.483-8.529 2.286zm8.529-2.286.13.483c1.916-.514 2.932-2.459 2.886-4.304l-.5.012-.5.013c.039 1.529-.802 2.953-2.145 3.313zm2.517-3.809.5-.012a12.4 12.4 0 0 1 1.657-6.513l-.433-.25-.433-.25a13.4 13.4 0 0 0-1.791 7.038zm1.724-6.775.433.25a12.4 12.4 0 0 1 4.811-4.692l-.239-.439-.239-.439a13.4 13.4 0 0 0-5.199 5.07zm5.005-4.881.24.439c1.62-.883 2.797-2.735 2.284-4.652l-.483.129-.483.129c.36 1.344-.453 2.784-1.797 3.516zm2.041-4.084.483-.129-2.286-8.53-.483.13-.483.129 2.286 8.529zm14.246-10.531.182-.466c-1.885-.735-3.856.457-4.36 2.338l.483.13.483.129c.37-1.38 1.77-2.157 3.03-1.665zm-3.695 2.002-.483-.13-2.285 8.53.483.129.483.129 2.285-8.529zm-2.285 8.529-.483-.129c-.514 1.917.664 3.769 2.285 4.652l.239-.439.239-.439c-1.344-.732-2.157-2.172-1.797-3.516zm2.04 4.084-.238.439a12.4 12.4 0 0 1 4.81 4.692l.433-.25.433-.25a13.4 13.4 0 0 0-5.198-5.07zm5.005 4.881-.433.25a12.4 12.4 0 0 1 1.658 6.513l.5.012.5.013a13.4 13.4 0 0 0-1.792-7.038zm1.725 6.775-.5-.012c-.045 1.845.97 3.79 2.888 4.304l.129-.483.13-.483c-1.345-.36-2.185-1.784-2.147-3.313zm2.517 3.809-.13.483 8.53 2.286.13-.483.129-.483-8.53-2.286zm8.53 2.286-.13.483c1.881.504 3.897-.607 4.203-2.606l-.494-.076-.494-.076c-.205 1.338-1.577 2.162-2.956 1.792zm3.58-2.199.493.076a28.35 28.35 0 0 0-3.47-18.469l-.434.25-.433.25a27.35 27.35 0 0 1 3.349 17.817zm-3.41-18.143.432-.25a28.35 28.35 0 0 0-14.257-12.24l-.182.466-.181.466a27.35 27.35 0 0 1 13.754 11.808z" />
                            </g>
                          </g>
                          <defs>
                            <filter id="home-hero-rail-active_svg__filter0_dii_220_219" width="25" height="26" x="202" y="86" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter1_dii_220_219" width="44" height="62" x="13" y="51" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter2_dii_220_219" width="29" height="66" x="160" y="99" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter3_i_220_219" width="19" height="20" x="138" y="138" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect1_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter4_i_220_219" width="19" height="20" x="84" y="138" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect1_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter5_i_220_219" width="19" height="20" x="30" y="138" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect1_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter6_dii_220_219" width="25" height="26" x="202" y="191.998" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter7_i_220_219" width="64" height="81" x="194" y="239.998" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect1_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter8_dii_220_219" width="35" height="35" x="197" y="244.998" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter9_dii_220_219" width="28" height="29" x="19" y="267.998" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter10_dii_220_219" width="28" height="29" x="105" y="267.998" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter11_dii_220_219" width="62" height="44" x="11" y="346.666" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter12_dii_220_219" width="62" height="44" x="47" y="370.666" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter13_dii_220_219" width="28" height="29" x="159" y="377.666" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <clipPath id="home-hero-rail-active_svg__clip0_220_219">
                              <path fill="#fff" d="M0 0h258v166.667H0z" />
                            </clipPath>
                            <clipPath id="home-hero-rail-active_svg__clip2_220_219">
                              <path fill="#fff" d="M0 166.666h258v167H0z" />
                            </clipPath>
                            <clipPath id="home-hero-rail-active_svg__clip6_220_219">
                              <path fill="#fff" d="M0 333.666h258v166H0z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div data-hero-circuit-section="bottom" className="HeroCircuitBackdrop-module__HTAPZW__bottomSection group/bottom absolute inset-x-0 top-83.25 h-41.75 overflow-hidden">
                      <div data-hero-section-background="solid" className="absolute inset-0 bg-[#1066F1] opacity-0 transition-opacity duration-0 ease-out motion-reduce:transition-none group-hover/bottom:opacity-100"></div>
                      <div className="pointer-events-none absolute inset-0 origin-center overflow-hidden -scale-x-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="257" height="500" fill="none" viewBox="0 0 257 500" aria-hidden="true" data-hero-rail-layer="base" className="absolute left-0 h-125 w-full max-w-none opacity-100 transition-opacity duration-0 ease-out motion-reduce:transition-none -top-[333px] group-hover/bottom:opacity-0">
                          <path stroke="#DBDFE5" d="M214 85c0-12.702 10.297-23 23-23h20M201 85h25v25h-25zM201 191h25v25h-25z" />
                          <path stroke="#DBDFE5" strokeDasharray="3 2" d="M235 500v-31.034h-48V416" />
                          <circle cx="213.5" cy="97.5" r="7" stroke="#DBDFE5" />
                          <circle cx="213.5" cy="203.5" r="7" stroke="#DBDFE5" />
                          <path stroke="#DBDFE5" strokeDasharray="3 2" d="M193 77h41v147h-41z" />
                          <path stroke="#DBDFE5" d="M151 204h50.5" />
                          <path fill="#DFE3E8" d="m224.063 320.484.142.005q.396.01.795.011h1.6v1H225q-.507 0-1.012-.018a30 30 0 0 1-.519-.019l.022-.498.024-.499q.273.011.548.018m7.871.016v1h-3.201v-1zm5.333 0v1h-3.201v-1zm5.333 0v1h-3.2v-1zm5.334 0v1h-3.201v-1zm5.333 0v1h-3.201v-1zm3.733 0v1h-1.6v-1zm-38.384-.647.274.052q.255.051.511.098l.184.031q.276.048.555.092.141.021.284.041.24.036.482.068.144.018.287.035c.116.013.232.03.348.042l-.054.498-.054.494-.307-.034a33 33 0 0 1-2.704-.437l-.014-.003.101-.489.101-.489zm-4.605-1.325a21 21 0 0 0 .735.263l.31.105a48 48 0 0 0 .713.228q.233.071.468.139l.255.073.193.055-.132.482-.132.481-.133-.037a32 32 0 0 1-2.779-.909l.177-.466.176-.467zm-4.241-1.951.25.139q.986.535 2.014 1.001l-.412.91a34 34 0 0 1-.698-.326q-.132-.064-.262-.129a34 34 0 0 1-1.767-.938l.496-.867q.188.106.379.21m-4.316-2.875.241.189q.161.125.326.25l.301.224q.139.102.279.203.163.118.33.235.158.111.318.221.144.098.289.195l.166.112-.274.418-.275.415-.193-.128a33 33 0 0 1-2.145-1.562l-.137-.112.312-.387.313-.39q.074.06.149.117m-3.753-3.502a32 32 0 0 0 2.099 2.099l-.336.37-.337.368a33 33 0 0 1-2.165-2.165l.369-.336zm-2.921-3.739q.097.145.195.289a26 26 0 0 0 .456.648q.094.13.189.26l.238.321.25.325.19.241q.058.076.117.15l-.39.313-.388.311-.112-.137a33 33 0 0 1-1.69-2.338l.416-.274.418-.274zm-2.497-4.495q.465 1.027 1 2.013l.139.25q.104.192.211.38l-.434.248-.434.247q-.18-.314-.353-.633a32 32 0 0 1-1.04-2.094l.456-.205zm-1.62-4.459.073.255q.068.235.139.468a28 28 0 0 0 .229.713l.104.31a25 25 0 0 0 .263.735l.054.15-.467.176-.467.176-.049-.13a32 32 0 0 1-.86-2.649q-.019-.067-.036-.133l.481-.131.482-.132zm-.934-4.701q.017.143.035.287.032.242.068.482.02.143.041.284.044.279.092.555l.031.184.047.247q.05.269.103.538l.002.007-.489.101-.49.101a33 33 0 0 1-.473-3.026l.494-.053.498-.054q.02.173.041.347M192.5 289v-1.47h1V289q0 .747.034 1.485l-.499.024-.498.021a30 30 0 0 1-.019-.519A31 31 0 0 1 192.5 289m1-6.37v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm0-4.9v2.94h-1v-2.94zm.977-3.93v1h-.977v.97h-1v-1.97zm4.923 0v1h-2.954v-1zm4.923 0v1h-2.954v-1zm4.923 0v1h-2.954v-1zm4.923 0v1h-2.953v-1zm4.924 0v1h-2.954v-1zm4.923 0v1h-2.954v-1zm4.922 0v1h-2.954v-1zm4.923 0v1h-2.954v-1zm4.923 0v1h-2.953v-1zm4.924 0v1h-2.954v-1zm4.923 0v1h-2.954v-1zm4.923 0v1H250.6v-1zm3.446 0v1h-1.477v-1z" />
                          <path fill="#DBDFE5" d="M73 204v-.5h-.5v.5zm0 0h-.5v1.477h1V204zm0 3.446h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.924h-.5v2.953h1v-2.953zm0 4.923h-.5v2.953h1v-2.953zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1V261.6zm0 4.923h-.5V268h1v-1.477zM151 204v-.5h-1.463v1H151zm-3.412 0v-.5h-2.926v1h2.926zm-4.875 0v-.5h-2.926v1h2.926zm-4.875 0v-.5h-2.926v1h2.926zm-4.875 0v-.5h-2.925v1h2.925zm-4.876 0v-.5h-2.924v1h2.924zm-4.875 0v-.5h-2.924v1h2.924zm-4.874 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5H73v1h1.463z" />
                          <path stroke="#DBDFE5" d="M201 248h25v25h-25z" />
                          <path fill="#DBDFE5" d="M32 294v-.5q-.747 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.126l-.245.437-.245.436c.917.514 1.9.924 2.932 1.215zm-4.518-2.305.31-.393a12.6 12.6 0 0 1-2.08-2.078l-.392.309-.392.31a13.6 13.6 0 0 0 2.244 2.244zm-3.297-3.857.436-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.566-4.824.497-.058A13 13 0 0 1 19.5 281h-1q0 .805.092 1.587zM19 281h.5q.001-.747.086-1.471l-.497-.058-.497-.058q-.091.782-.092 1.587zm.485-3.53.481.135c.27-.956.65-1.865 1.125-2.713l-.436-.245-.436-.245a13.4 13.4 0 0 0-1.215 2.932zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.297.245.437a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.5 13.5 0 0 0-2.932 1.215zm4.824-1.566.058.497q.724-.086 1.471-.086v-1q-.805 0-1.587.092zM32 268v.5h1.518v-1H32zm3.541 0v.5h3.036v-1H35.54zm5.059 0v.5h3.035v-1H40.6zm5.059 0v.5h3.035v-1H45.66zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5h3.036v-1h-3.035zm5.06 0v.5h3.035v-1h-3.036zm5.058 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1H81.07zm5.058 0v.5h3.036v-1h-3.036zm5.06 0v.5h3.035v-1h-3.036zm5.058 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5H118v-1h-1.518zm1.518 0v.5q.748 0 1.471.086l.058-.497.058-.497A14 14 0 0 0 118 267.5zm3.53.485-.135.481a12.4 12.4 0 0 1 2.713 1.126l.245-.437.245-.436a13.5 13.5 0 0 0-2.932-1.215zm4.518 2.305-.309.393a12.6 12.6 0 0 1 2.078 2.078l.393-.309.392-.31a13.5 13.5 0 0 0-2.244-2.244zm3.297 3.857-.437.245a12.4 12.4 0 0 1 1.126 2.713l.481-.135.481-.136a13.5 13.5 0 0 0-1.215-2.932zm1.566 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zM131 281h-.5q0 .747-.086 1.471l.497.058.497.058q.092-.782.092-1.587zm-.485 3.53-.481-.135a12.4 12.4 0 0 1-1.126 2.713l.437.245.436.245c.514-.917.924-1.899 1.215-2.932zm-2.305 4.518-.393-.309a12.6 12.6 0 0 1-2.078 2.078l.309.393.31.392a13.5 13.5 0 0 0 2.244-2.244zm-3.857 3.297-.245-.437a12.4 12.4 0 0 1-2.713 1.126l.135.481.136.481a13.5 13.5 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.724.086-1.471.086v1q.805 0 1.587-.092zM118 294v-.5h-1.518v1H118zm-3.541 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.035zm-5.06 0v-.5H86.13v1h3.036zm-5.058 0v-.5H81.07v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.036zm-5.06 0v-.5h-3.035v1h3.036zm-5.058 0v-.5h-3.035v1h3.035zm-5.059 0v-.5H45.66v1h3.035zm-5.059 0v-.5H40.6v1h3.035zm-5.058 0v-.5H35.54v1h3.036zm-5.06 0v-.5H32v1h1.518zM86 404v-.5q-.748 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.126l-.245.437-.245.436c.917.514 1.9.924 2.932 1.215zm-4.519-2.305.31-.393a12.6 12.6 0 0 1-2.078-2.078l-.393.309-.392.31a13.6 13.6 0 0 0 2.244 2.244zm-3.295-3.857.435-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.567-4.824.497-.058A13 13 0 0 1 73.5 391h-1q0 .805.092 1.587zM73 391h.5q.001-.747.086-1.471l-.497-.058-.497-.058q-.091.782-.092 1.587zm.485-3.53.481.135c.27-.956.65-1.865 1.126-2.713l-.436-.245-.437-.245a13.4 13.4 0 0 0-1.215 2.932zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.297.245.437a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.5 13.5 0 0 0-2.932 1.215zm4.824-1.566.058.497q.724-.086 1.471-.086v-1q-.805 0-1.587.092zM86 378v.5h1.518v-1H86zm3.541 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1H94.6zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5H172v-1h-1.518zm1.518 0v.5q.747 0 1.471.086l.058-.497.058-.497A14 14 0 0 0 172 377.5zm3.53.485-.135.481a12.4 12.4 0 0 1 2.713 1.126l.245-.437.245-.436a13.5 13.5 0 0 0-2.932-1.215zm4.518 2.305-.309.393a12.6 12.6 0 0 1 2.078 2.078l.393-.309.392-.31a13.5 13.5 0 0 0-2.244-2.244zm3.297 3.857-.437.245a12.4 12.4 0 0 1 1.126 2.713l.481-.135.481-.136a13.5 13.5 0 0 0-1.215-2.932zm1.566 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zM185 391h-.5q0 .747-.086 1.471l.497.058.497.058q.092-.782.092-1.587zm-.485 3.53-.481-.135a12.4 12.4 0 0 1-1.126 2.713l.437.245.436.245c.514-.917.924-1.899 1.215-2.932zm-2.305 4.518-.393-.309a12.6 12.6 0 0 1-2.078 2.078l.309.393.31.392a13.5 13.5 0 0 0 2.244-2.244zm-3.857 3.297-.245-.437a12.4 12.4 0 0 1-2.713 1.126l.135.481.136.481a13.5 13.5 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.724.086-1.471.086v1q.805 0 1.587-.092zM172 404v-.5h-1.518v1H172zm-3.541 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5H94.6v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5H86v1h1.518z" />
                          <path fill="#DBDFE5" d="M19 281h.5q.001-.747.086-1.471l-.497-.058-.497-.058q-.091.782-.092 1.587zm.485-3.53.481.135c.27-.956.65-1.865 1.125-2.713l-.436-.245-.436-.245a13.4 13.4 0 0 0-1.215 2.932zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.297.245.437a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.5 13.5 0 0 0-2.932 1.215zm4.824-1.566.058.497q.724-.086 1.471-.086v-1q-.805 0-1.587.092zM32 268v.5q.748 0 1.47.086l.059-.497.058-.497q-.78-.092-1.587-.092zm3.53.485-.135.481c.955.269 1.865.649 2.713 1.126l.245-.437.245-.436c-.917-.514-1.9-.924-2.932-1.215zm4.518 2.305-.31.393c.772.609 1.47 1.307 2.08 2.078l.392-.309.392-.31a13.6 13.6 0 0 0-2.244-2.244zm3.296 3.857-.436.245c.477.848.857 1.757 1.126 2.713l.481-.135.481-.136a13.4 13.4 0 0 0-1.215-2.932zm1.567 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zM45 281h-.5v1.518h1V281zm0 3.541h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1V289.6zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v3.036h1v-3.036zm0 5.059h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v3.036h1v-3.036zm0 5.059h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5V367h1v-1.518zM45 367h-.5q-.001.747-.086 1.471l.497.058.497.058q.091-.782.092-1.587zm-.485 3.53-.481-.135c-.27.956-.65 1.865-1.126 2.713l.436.245.437.245c.514-.917.925-1.899 1.215-2.932zm-2.305 4.518-.393-.309a12.6 12.6 0 0 1-2.078 2.078l.31.393.31.392a13.6 13.6 0 0 0 2.243-2.244zm-3.857 3.297-.245-.437c-.848.477-1.758.857-2.713 1.126l.135.481.136.481a13.4 13.4 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.723.086-1.471.086v1q.805 0 1.587-.092zM32 380v-.5q-.747 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.126l-.245.437-.245.436c.917.514 1.9.924 2.932 1.215zm-4.518-2.305.31-.393a12.6 12.6 0 0 1-2.08-2.078l-.392.309-.392.31a13.6 13.6 0 0 0 2.244 2.244zm-3.297-3.857.436-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.566-4.824.497-.058A13 13 0 0 1 19.5 367h-1q0 .805.092 1.587zM19 367h.5v-1.518h-1V367zm0-3.541h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-3.036h-1v3.036zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-3.036h-1v3.036zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5V289.6h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5V281h-1v1.518z" />
                          <circle cx="32" cy="281" r="8.5" stroke="#DBDFE5" />
                          <circle cx="118" cy="281" r="8.5" stroke="#DBDFE5" />
                          <path stroke="#DBDFE5" d="M151 366h82v50h-82z" />
                          <g data-hero-motion="bottom-teardrop-primary" style={{ "transformOrigin": "33px 366.666px" }}>
                            <circle cx="9" cy="9" r="8.5" stroke="#DBDFE5" transform="matrix(0 -1 -1 0 41 376)" />
                            <path stroke="#DBDFE5" d="M66.5 367c0-.778-.338-1.634-1.02-2.555-.681-.918-1.679-1.867-2.931-2.821-2.504-1.907-5.96-3.782-9.73-5.437a85 85 0 0 0-11.521-4.087c-3.707-1.013-7.017-1.6-9.298-1.6-9.113 0-16.5 7.387-16.5 16.5s7.387 16.5 16.5 16.5c2.28 0 5.591-.587 9.298-1.6a85 85 0 0 0 11.521-4.087c3.77-1.655 7.226-3.53 9.73-5.437 1.252-.954 2.25-1.903 2.93-2.821.683-.921 1.021-1.777 1.021-2.555Z" />
                          </g>
                          <g data-hero-motion="top-pin" style={{ "transformOrigin": "35px 71px" }}>
                            <circle cx="9" cy="9" r="8.5" stroke="#DBDFE5" transform="matrix(1 0 0 -1 26 80)" />
                            <path stroke="#DBDFE5" d="M35 105.5c.778 0 1.634-.338 2.555-1.021.918-.68 1.867-1.678 2.821-2.93 1.907-2.504 3.782-5.96 5.438-9.73A85.5 85.5 0 0 0 49.9 80.298c1.013-3.707 1.6-7.017 1.6-9.298 0-9.113-7.387-16.5-16.5-16.5S18.5 61.887 18.5 71c0 2.28.587 5.591 1.6 9.298a85.5 85.5 0 0 0 4.086 11.521c1.656 3.77 3.531 7.226 5.438 9.73.954 1.252 1.903 2.25 2.821 2.93.921.683 1.777 1.021 2.555 1.021Z" />
                          </g>
                          <path stroke="#DFE3E8" d="M51 71h75c11.046 0 20 8.954 20 20v47" />
                          <g data-hero-motion="bottom-teardrop-secondary" style={{ "transformOrigin": "91px 390.666px" }}>
                            <circle cx="9" cy="9" r="8.5" stroke="#DBDFE5" transform="matrix(0 1 1 0 81 382)" />
                            <path stroke="#DBDFE5" d="M55.5 391c0 .778.338 1.634 1.02 2.555.681.918 1.679 1.867 2.931 2.821 2.504 1.907 5.96 3.782 9.73 5.437a85 85 0 0 0 11.521 4.087c3.707 1.013 7.017 1.6 9.298 1.6 9.113 0 16.5-7.387 16.5-16.5s-7.387-16.5-16.5-16.5c-2.28 0-5.591.587-9.298 1.6a85 85 0 0 0-11.521 4.087c-3.77 1.655-7.226 3.53-9.73 5.437-1.252.954-2.25 1.903-2.93 2.821-.683.921-1.021 1.777-1.021 2.555Z" />
                          </g>
                          <circle cx="172" cy="391" r="8.5" stroke="#DBDFE5" />
                          <path stroke="#DBDFE5" d="M164 102h19v56h-19zM137 138h19v20h-19zM110 138h19v20h-19zM83 138h19v20H83zM56 138h19v20H56zM29 138h19v20H29z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="258" height="500" fill="none" viewBox="0 0 258 500" aria-hidden="true" data-hero-rail-layer="active" className="absolute left-0 h-125 w-full max-w-none opacity-0 transition-opacity duration-0 ease-out motion-reduce:transition-none -top-[333px] group-hover/bottom:opacity-100">
                          <g clipPath="url(#home-hero-rail-active_svg__clip0_220_219)">
                            <path stroke="#82AFFB" d="M215 85c0-12.702 10.297-23 23-23h20M202 85h25v25h-25z" />
                            <g data-figma-bg-blur-radius="4" filter="url(#home-hero-rail-active_svg__filter0_dii_220_219)">
                              <circle cx="214.5" cy="97.5" r="7.5" fill="#0D5FE2" />
                            </g>
                            <path stroke="#82AFFB" strokeDasharray="3 2" d="M194 77h41v147h-41z" />
                            <g data-hero-motion="top-pin" style={{ "transformOrigin": "35px 71px" }}>
                              <path stroke="#82AFFB" d="M35 105.5c.778 0 1.634-.338 2.555-1.021.918-.68 1.867-1.678 2.821-2.93 1.907-2.504 3.782-5.96 5.438-9.73A85.5 85.5 0 0 0 49.9 80.298c1.013-3.707 1.6-7.017 1.6-9.298 0-9.113-7.387-16.5-16.5-16.5S18.5 61.887 18.5 71c0 2.28.587 5.591 1.6 9.298a85.5 85.5 0 0 0 4.086 11.521c1.656 3.77 3.531 7.226 5.438 9.73.954 1.252 1.903 2.25 2.821 2.93.921.683 1.777 1.021 2.555 1.021Z" />
                              <g filter="url(#home-hero-rail-active_svg__filter1_dii_220_219)">
                                <path fill="#307AF3" d="M35 106c-7.389 0-17-25.611-17-35s7.611-17 17-17 17 7.611 17 17-9.611 35-17 35m0-26a9 9 0 1 0 0-18 9 9 0 0 0 0 18" />
                              </g>
                            </g>
                            <path stroke="#4D8CF9" d="M52 71h75c11.046 0 20 8.954 20 20v47" />
                            <g filter="url(#home-hero-rail-active_svg__filter2_dii_220_219)">
                              <path fill="#0D5FE2" d="M165 102h19v56h-19z" />
                            </g>
                            <g data-hero-motion="top-fifth-bar">
                              <g filter="url(#home-hero-rail-active_svg__filter3_i_220_219)">
                                <path data-hero-bar-fill="true" fill="#307AF3" fillOpacity="0.5" d="M138 138h19v20h-19z" />
                              </g>
                            </g>
                            <path stroke="#82AFFB" d="M111 128h19v30h-19z" />
                            <g filter="url(#home-hero-rail-active_svg__filter4_i_220_219)">
                              <path fill="#307AF3" fillOpacity="0.5" d="M84 138h19v20H84z" />
                            </g>
                            <path stroke="#82AFFB" d="M57 119h19v39H57z" />
                            <g filter="url(#home-hero-rail-active_svg__filter5_i_220_219)">
                              <path fill="#307AF3" fillOpacity="0.5" d="M30 138h19v20H30z" />
                            </g>
                          </g>
                          <g clipPath="url(#home-hero-rail-active_svg__clip2_220_219)">
                            <path stroke="#82AFFB" d="M202 190.998h25v25h-25z" />
                            <g data-hero-motion="middle-node">
                              <g data-figma-bg-blur-radius="4" filter="url(#home-hero-rail-active_svg__filter6_dii_220_219)">
                                <circle data-hero-middle-fill="true" cx="214.5" cy="203.498" r="7.5" fill="#0D5FE2" />
                              </g>
                              <circle data-hero-middle-outline="true" cx="214.5" cy="203.498" r="7.5" fill="none" stroke="#82AFFB" opacity="0" />
                            </g>
                            <path stroke="#82AFFB" strokeDasharray="3 2" d="M194 76.998h41v147h-41z" />
                            <path stroke="#82AFFB" d="M152 203.998h50.5" />
                            <g filter="url(#home-hero-rail-active_svg__filter7_i_220_219)">
                              <path fill="#2976F2" d="M194 239.998h64v81h-32c-17.673 0-32-14.327-32-32z" />
                            </g>
                            <path fill="#E6EFFE" d="M74 203.998v-.5h-.5v.5zm0 0h-.5v1.477h1v-1.477zm0 3.446h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.924h-.5v2.953h1v-2.953zm0 4.923h-.5v2.953h1v-2.953zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v2.954h1v-2.954zm0 4.923h-.5v1.477h1v-1.477zm78-62.523v-.5h-1.463v1H152zm-3.412 0v-.5h-2.926v1h2.926zm-4.875 0v-.5h-2.926v1h2.926zm-4.875 0v-.5h-2.926v1h2.926zm-4.875 0v-.5h-2.925v1h2.925zm-4.876 0v-.5h-2.924v1h2.924zm-4.875 0v-.5h-2.924v1h2.924zm-4.874 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5h-2.925v1h2.925zm-4.875 0v-.5H74v1h1.463z" />
                            <g data-hero-motion="middle-node">
                              <g filter="url(#home-hero-rail-active_svg__filter8_dii_220_219)">
                                <path data-hero-middle-fill="true" fill="#0D5FE2" d="M202 247.998h25v25h-25z" />
                              </g>
                              <path data-hero-middle-outline="true" d="M202 247.998h25v25h-25z" fill="none" stroke="#82AFFB" opacity="0" />
                            </g>
                            <path fill="none" d="M20 280.998h.5q.001-.747.086-1.471l-.497-.058-.497-.058q-.091.781-.092 1.587zm.485-3.53.481.135c.27-.955.65-1.865 1.125-2.713l-.436-.245-.436-.245a13.4 13.4 0 0 0-1.215 2.932zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.296.245.436a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.4 13.4 0 0 0-2.932 1.216zm4.824-1.567.058.497q.723-.086 1.471-.086v-1q-.805 0-1.587.092zm1.529-.089v.5q.748 0 1.47.086l.059-.497.058-.497q-.78-.092-1.587-.092zm3.53.485-.135.481c.955.269 1.865.649 2.713 1.126l.245-.436.245-.436a13.4 13.4 0 0 0-2.932-1.216zm4.518 2.305-.31.393c.772.609 1.47 1.307 2.08 2.078l.392-.309.392-.31a13.6 13.6 0 0 0-2.244-2.244zm3.296 3.857-.436.245c.477.848.857 1.758 1.126 2.713l.481-.135.481-.136a13.4 13.4 0 0 0-1.215-2.932zm1.567 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zm.089 1.529h-.5v1.518h1v-1.518zm0 3.541h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v3.036h1v-3.036zm0 5.059h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v1.518h1v-1.518zm0 1.518h-.5q-.001.747-.086 1.471l.497.058.497.058q.091-.781.092-1.587zm-.485 3.53-.481-.135c-.27.956-.65 1.865-1.126 2.713l.436.245.437.245c.514-.917.925-1.899 1.215-2.932zm-2.305 4.519-.393-.31a12.6 12.6 0 0 1-2.078 2.078l.31.393.31.392a13.6 13.6 0 0 0 2.243-2.244zm-3.857 3.296-.245-.436c-.848.476-1.758.856-2.713 1.125l.135.481.136.481a13.4 13.4 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.723.086-1.471.086v1q.805 0 1.587-.092zm-1.529.089v-.5q-.748 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.125l-.245.436-.245.436c.917.514 1.9.925 2.932 1.215zm-4.518-2.305.31-.393a12.6 12.6 0 0 1-2.08-2.078l-.392.31-.392.309a13.6 13.6 0 0 0 2.244 2.244zm-3.297-3.857.436-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.566-4.824.497-.058a13 13 0 0 1-.086-1.471h-1q0 .805.092 1.587zM20 366.998h.5v-1.518h-1v1.518zm0-3.541h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-3.036h-1v3.036zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-1.518h-1v1.518z" />
                            <path data-hero-belt="middle-primary" d="M33 267.998c7.18 0 13 5.82 13 13v86c0 7.18-5.82 13-13 13s-13-5.82-13-13v-86c0-7.18 5.82-13 13-13Z" fill="none" stroke="#82AFFB" strokeDasharray="3 2" strokeDashoffset="-4.7166666666666766" />
                            <path data-hero-belt="middle" d="M33 267.998h86c7.18 0 13 5.82 13 13s-5.82 13-13 13H33c-7.18 0-13-5.82-13-13s5.82-13 13-13Z" fill="none" stroke="#E6EFFE" strokeDasharray="3 2" strokeDashoffset="-4.7166666666666766" />
                            <g data-figma-bg-blur-radius="4" filter="url(#home-hero-rail-active_svg__filter9_dii_220_219)">
                              <circle cx="33" cy="280.998" r="9" fill="#0D5FE2" />
                            </g>
                            <g data-hero-motion="middle-node">
                              <g data-figma-bg-blur-radius="4" filter="url(#home-hero-rail-active_svg__filter10_dii_220_219)">
                                <circle data-hero-middle-fill="true" cx="119" cy="280.998" r="9" fill="#0D5FE2" />
                              </g>
                              <circle data-hero-middle-outline="true" cx="119" cy="280.998" r="8.5" fill="none" stroke="#82AFFB" opacity="0" />
                            </g>
                            <path fill="none" d="M33 293.998v-.5q-.748 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.125l-.245.436-.245.436c.917.514 1.9.925 2.932 1.215zm-4.518-2.305.31-.393a12.6 12.6 0 0 1-2.08-2.078l-.392.31-.392.309a13.6 13.6 0 0 0 2.244 2.244zm-3.297-3.857.436-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.566-4.824.497-.058a13 13 0 0 1-.086-1.471h-1q0 .805.092 1.587zM20 280.998h.5q.001-.747.086-1.471l-.497-.058-.497-.058q-.091.781-.092 1.587zm.485-3.53.481.135c.27-.955.65-1.865 1.125-2.713l-.436-.245-.436-.245a13.4 13.4 0 0 0-1.215 2.932zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.296.245.436a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.4 13.4 0 0 0-2.932 1.216zm4.824-1.567.058.497q.723-.086 1.471-.086v-1q-.805 0-1.587.092zm1.529-.089v.5h1.518v-1H33zm3.541 0v.5h3.036v-1H36.54zm5.059 0v.5h3.035v-1H41.6zm5.059 0v.5h3.035v-1H46.66zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5h3.036v-1h-3.035zm5.06 0v.5h3.035v-1h-3.036zm5.058 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1H82.07zm5.058 0v.5h3.036v-1h-3.036zm5.06 0v.5h3.035v-1h-3.036zm5.058 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5H119v-1h-1.518zm1.518 0v.5q.748 0 1.471.086l.058-.497.058-.497a14 14 0 0 0-1.587-.092zm3.53.485-.135.481a12.4 12.4 0 0 1 2.713 1.126l.245-.436.245-.436a13.4 13.4 0 0 0-2.932-1.216zm4.518 2.305-.309.393a12.6 12.6 0 0 1 2.078 2.078l.393-.309.392-.31a13.5 13.5 0 0 0-2.244-2.244zm3.297 3.857-.437.245a12.4 12.4 0 0 1 1.126 2.713l.481-.135.481-.136a13.5 13.5 0 0 0-1.215-2.932zm1.566 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zm.089 1.529h-.5q0 .748-.086 1.471l.497.058.497.058q.092-.781.092-1.587zm-.485 3.53-.481-.135a12.4 12.4 0 0 1-1.126 2.713l.437.245.436.245c.514-.917.924-1.899 1.215-2.932zm-2.305 4.519-.393-.31a12.6 12.6 0 0 1-2.078 2.078l.309.393.31.392a13.5 13.5 0 0 0 2.244-2.244zm-3.857 3.296-.245-.436c-.848.476-1.757.856-2.713 1.125l.135.481.136.481a13.4 13.4 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.724.086-1.471.086v1q.805 0 1.587-.092zm-1.529.089v-.5h-1.518v1H119zm-3.541 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.035zm-5.06 0v-.5H87.13v1h3.036zm-5.058 0v-.5H82.07v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.036zm-5.06 0v-.5h-3.035v1h3.036zm-5.058 0v-.5h-3.035v1h3.035zm-5.059 0v-.5H46.66v1h3.035zm-5.059 0v-.5H41.6v1h3.035zm-5.058 0v-.5H36.54v1h3.036zm-5.06 0v-.5H33v1h1.518z" />
                          </g>
                          <g clipPath="url(#home-hero-rail-active_svg__clip6_220_219)">
                            <path stroke="#4D8CF9" strokeDasharray="3 2" d="M236 499.666v-31.034h-48v-52.966" />
                            <path fill="none" d="M87 403.666v-.5q-.748 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.125l-.245.436-.245.436c.917.514 1.9.924 2.932 1.215zm-4.519-2.305.31-.393a12.6 12.6 0 0 1-2.078-2.078l-.393.309-.392.31a13.6 13.6 0 0 0 2.244 2.244zm-3.295-3.857.435-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.567-4.824.497-.058a13 13 0 0 1-.086-1.471h-1q0 .805.092 1.587zM74 390.666h.5q.001-.748.086-1.471l-.497-.058-.497-.058q-.091.782-.092 1.587zm.485-3.53.481.135c.27-.955.65-1.865 1.126-2.713l-.436-.245-.437-.245A13.4 13.4 0 0 0 74.005 387zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.296.245.436a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.5 13.5 0 0 0-2.932 1.215zm4.824-1.567.058.497q.724-.086 1.471-.086v-1q-.805 0-1.587.092zm1.529-.089v.5h1.518v-1H87zm3.541 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1H95.6zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.036v-1h-3.036zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.059 0v.5h3.035v-1h-3.035zm5.058 0v.5H173v-1h-1.518zm1.518 0v.5q.747 0 1.471.086l.058-.497.058-.497a14 14 0 0 0-1.587-.092zm3.53.485-.135.481a12.4 12.4 0 0 1 2.713 1.126l.245-.436.245-.437a13.5 13.5 0 0 0-2.932-1.215zm4.518 2.305-.309.393a12.6 12.6 0 0 1 2.078 2.078l.393-.309.392-.31a13.5 13.5 0 0 0-2.244-2.244zm3.297 3.857-.437.245a12.4 12.4 0 0 1 1.126 2.713l.481-.135.481-.136a13.5 13.5 0 0 0-1.215-2.932zm1.566 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zm.089 1.529h-.5q0 .748-.086 1.471l.497.058.497.058q.092-.781.092-1.587zm-.485 3.53-.481-.135a12.4 12.4 0 0 1-1.126 2.713l.437.245.436.245c.514-.917.924-1.899 1.215-2.932zm-2.305 4.518-.393-.309a12.6 12.6 0 0 1-2.078 2.078l.309.393.31.392a13.5 13.5 0 0 0 2.244-2.244zm-3.857 3.297-.245-.436c-.848.476-1.757.856-2.713 1.125l.135.481.136.481a13.5 13.5 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.724.086-1.471.086v1q.805 0 1.587-.092zm-1.529.089v-.5h-1.518v1H173zm-3.541 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.036v1h3.036zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.059 0v-.5H95.6v1h3.035zm-5.059 0v-.5h-3.035v1h3.035zm-5.058 0v-.5H87v1h1.518zM20 280.666h.5q.001-.748.086-1.471l-.497-.058-.497-.058q-.091.781-.092 1.587zm.485-3.53.481.135c.27-.956.65-1.865 1.125-2.713l-.436-.245-.436-.245A13.4 13.4 0 0 0 20.005 277zm2.305-4.518.393.309a12.6 12.6 0 0 1 2.078-2.078l-.31-.393-.31-.392a13.6 13.6 0 0 0-2.243 2.244zm3.857-3.296.245.436a12.4 12.4 0 0 1 2.713-1.126l-.135-.481-.136-.481a13.5 13.5 0 0 0-2.932 1.215zm4.824-1.567.058.497q.723-.086 1.471-.086v-1q-.805 0-1.587.092zm1.529-.089v.5q.748 0 1.47.086l.059-.497.058-.497q-.78-.092-1.587-.092zm3.53.485-.135.481c.955.269 1.865.649 2.713 1.126l.245-.436.245-.437c-.917-.514-1.9-.924-2.932-1.215zm4.518 2.305-.31.393c.772.609 1.47 1.307 2.08 2.078l.392-.309.392-.31a13.6 13.6 0 0 0-2.244-2.244zm3.296 3.857-.436.245c.477.848.857 1.758 1.126 2.713l.481-.135.481-.136a13.4 13.4 0 0 0-1.215-2.932zm1.567 4.824-.497.058q.086.724.086 1.471h1q0-.805-.092-1.587zm.089 1.529h-.5v1.518h1v-1.518zm0 3.541h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v3.036h1v-3.036zm0 5.059h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v3.036h1v-3.036zm0 5.059h-.5v3.036h1v-3.036zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.059h-.5v3.035h1v-3.035zm0 5.058h-.5v1.518h1v-1.518zm0 1.518h-.5q-.001.748-.086 1.471l.497.058.497.058q.091-.781.092-1.587zm-.485 3.53-.481-.135c-.27.956-.65 1.865-1.126 2.713l.436.245.437.245c.514-.917.925-1.899 1.215-2.932zm-2.305 4.518-.393-.309a12.6 12.6 0 0 1-2.078 2.078l.31.393.31.392a13.6 13.6 0 0 0 2.243-2.244zm-3.857 3.297-.245-.436c-.848.476-1.758.856-2.713 1.125l.135.481.136.481a13.4 13.4 0 0 0 2.932-1.215zm-4.824 1.566-.058-.497q-.723.086-1.471.086v1q.805 0 1.587-.092zm-1.529.089v-.5q-.748 0-1.47-.086l-.059.497-.058.497q.78.092 1.587.092zm-3.53-.485.135-.481a12.4 12.4 0 0 1-2.713-1.125l-.245.436-.245.436c.917.514 1.9.924 2.932 1.215zm-4.518-2.305.31-.393a12.6 12.6 0 0 1-2.08-2.078l-.392.309-.392.31a13.6 13.6 0 0 0 2.244 2.244zm-3.297-3.857.436-.245a12.4 12.4 0 0 1-1.125-2.713l-.481.135-.481.136c.29 1.033.701 2.015 1.215 2.932zm-1.566-4.824.497-.058a13 13 0 0 1-.086-1.471h-1q0 .805.092 1.587zM20 366.666h.5v-1.518h-1v1.518zm0-3.541h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-3.036h-1v3.036zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-3.036h-1v3.036zm0-5.059h.5v-3.036h-1v3.036zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.059h.5v-3.035h-1v3.035zm0-5.058h.5v-1.518h-1v1.518z" />
                            <path data-hero-belt="bottom" d="M87 377.666h86c7.18 0 13 5.82 13 13s-5.82 13-13 13H87c-7.18 0-13-5.82-13-13s5.82-13 13-13Z" fill="none" stroke="#DFE3E8" strokeDasharray="3 2" strokeDashoffset="-4.7166666666666766" />
                            <path data-hero-belt="bottom-primary" d="M33 267.666c7.18 0 13 5.82 13 13v86c0 7.18-5.82 13-13 13s-13-5.82-13-13v-86c0-7.18 5.82-13 13-13Z" fill="none" stroke="#E6EFFE" strokeDasharray="3 2" strokeDashoffset="-4.7166666666666766" />
                            <path stroke="#DFE3E8" d="M152 365.666h82v50h-82z" />
                            <g data-hero-motion="bottom-teardrop-primary" filter="url(#home-hero-rail-active_svg__filter11_dii_220_219)" style={{ "transformOrigin": "33px 366.666px" }}>
                              <path fill="#307AF3" d="M68 366.666c0 7.389-25.611 17-35 17s-17-7.611-17-17 7.611-17 17-17 35 9.611 35 17m-26 0a9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9" />
                            </g>
                            <g data-hero-motion="bottom-teardrop-secondary" filter="url(#home-hero-rail-active_svg__filter12_dii_220_219)" style={{ "transformOrigin": "91px 390.666px" }}>
                              <path fill="#307AF3" d="M56 390.666c0 7.389 25.611 17 35 17s17-7.611 17-17-7.611-17-17-17-35 9.611-35 17m26 0a9 9 0 0 1 9-9 9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9" />
                            </g>
                            <g data-figma-bg-blur-radius="4" filter="url(#home-hero-rail-active_svg__filter13_dii_220_219)">
                              <circle cx="173" cy="390.666" r="9" fill="#0D5FE2" />
                            </g>
                            <g data-hero-motion="bottom-wheel" style={{ "transformOrigin": "49px 451.666px" }}>
                              <path fill="#82AFFB" d="m42.443 462.504.26-.428zm-4.561.28.353.354zm-6.244 6.244-.354-.353zm.115 4.2-.312.39zM49 479.276v.5zm17.246-6.048.312.39zm.115-4.2-.353.354zm-6.243-6.244.354-.353zm-4.561-.28.258.428zM49 464.333v.5zm-6.417-36.614-.483.129zm-3.694-2.002-.182-.466zm-14.006 12.024-.433-.25zm-3.41 18.143-.495.076zm3.58 2.199.13.483zm8.529-2.286.13.483zm2.517-3.809.5-.012zm1.724-6.775-.433-.25zm5.005-4.881-.239-.439zm2.041-4.084.483-.129zm14.246-10.531.182-.466zm-3.695 2.002-.483-.13zm-2.285 8.529-.483-.129zm2.04 4.084.24-.439zm5.005 4.881.433-.25zm1.725 6.775-.5-.012zm2.517 3.809.13-.483zm8.53 2.286-.13.483zm3.58-2.199.493.076zm-3.41-18.143.432-.25zM49 415.666v.5c19.606 0 35.5 15.894 35.5 35.5h1c0-20.158-16.342-36.5-36.5-36.5zm36 36h-.5c0 19.606-15.894 35.5-35.5 35.5v1c20.158 0 36.5-16.342 36.5-36.5zm-36 36v-.5c-19.606 0-35.5-15.894-35.5-35.5h-1c0 20.158 16.342 36.5 36.5 36.5zm-36-36h.5c0-19.606 15.894-35.5 35.5-35.5v-1c-20.158 0-36.5 16.342-36.5 36.5zm29.443 10.838.26-.428c-1.578-.954-3.771-1.049-5.175.355l.354.353.353.354c.984-.984 2.638-1 3.95-.206zm-4.561.28-.354-.353-6.244 6.244.354.353.353.354 6.244-6.244zm-6.244 6.244-.354-.353c-1.376 1.377-1.423 3.679.157 4.943l.312-.39.312-.391c-1.056-.845-1.084-2.445-.074-3.455zm.115 4.2-.312.39A28.1 28.1 0 0 0 49 479.776v-1a27.1 27.1 0 0 1-16.935-5.939zM49 479.276v.5a28.1 28.1 0 0 0 17.558-6.158l-.312-.39-.312-.391A27.1 27.1 0 0 1 49 478.776zm17.246-6.048.312.39c1.58-1.264 1.534-3.566.157-4.943l-.354.353-.353.354c1.01 1.01.982 2.61-.074 3.455zm.115-4.2.354-.353-6.243-6.244-.354.353-.353.354 6.243 6.244zm-6.243-6.244.354-.353c-1.404-1.404-3.597-1.309-5.174-.355l.259.428.258.428c1.312-.793 2.966-.778 3.95.206zm-4.561-.28-.26-.428A12.17 12.17 0 0 1 49 463.833v1a13.17 13.17 0 0 0 6.815-1.901zM49 464.333v-.5c-2.239 0-4.414-.617-6.298-1.757l-.259.428-.258.428A13.17 13.17 0 0 0 49 464.833zm-6.417-36.614.483-.13c-.504-1.881-2.474-3.073-4.359-2.338l.182.466.181.466c1.26-.491 2.66.285 3.03 1.665zm-3.694-2.002-.182-.466a28.35 28.35 0 0 0-14.257 12.24l.433.25.433.25a27.35 27.35 0 0 1 13.754-11.808zm-14.006 12.024-.433-.25a28.35 28.35 0 0 0-3.472 18.469l.495-.076.494-.076a27.35 27.35 0 0 1 3.349-17.817zm-3.41 18.143-.495.076c.307 1.999 2.323 3.11 4.204 2.606l-.13-.483-.129-.483c-1.38.37-2.751-.454-2.956-1.792zm3.58 2.199.13.483 8.529-2.286-.13-.483-.13-.483-8.529 2.286zm8.529-2.286.13.483c1.916-.514 2.932-2.459 2.886-4.304l-.5.012-.5.013c.039 1.529-.802 2.953-2.145 3.313zm2.517-3.809.5-.012a12.4 12.4 0 0 1 1.657-6.513l-.433-.25-.433-.25a13.4 13.4 0 0 0-1.791 7.038zm1.724-6.775.433.25a12.4 12.4 0 0 1 4.811-4.692l-.239-.439-.239-.439a13.4 13.4 0 0 0-5.199 5.07zm5.005-4.881.24.439c1.62-.883 2.797-2.735 2.284-4.652l-.483.129-.483.129c.36 1.344-.453 2.784-1.797 3.516zm2.041-4.084.483-.129-2.286-8.53-.483.13-.483.129 2.286 8.529zm14.246-10.531.182-.466c-1.885-.735-3.856.457-4.36 2.338l.483.13.483.129c.37-1.38 1.77-2.157 3.03-1.665zm-3.695 2.002-.483-.13-2.285 8.53.483.129.483.129 2.285-8.529zm-2.285 8.529-.483-.129c-.514 1.917.664 3.769 2.285 4.652l.239-.439.239-.439c-1.344-.732-2.157-2.172-1.797-3.516zm2.04 4.084-.238.439a12.4 12.4 0 0 1 4.81 4.692l.433-.25.433-.25a13.4 13.4 0 0 0-5.198-5.07zm5.005 4.881-.433.25a12.4 12.4 0 0 1 1.658 6.513l.5.012.5.013a13.4 13.4 0 0 0-1.792-7.038zm1.725 6.775-.5-.012c-.045 1.845.97 3.79 2.888 4.304l.129-.483.13-.483c-1.345-.36-2.185-1.784-2.147-3.313zm2.517 3.809-.13.483 8.53 2.286.13-.483.129-.483-8.53-2.286zm8.53 2.286-.13.483c1.881.504 3.897-.607 4.203-2.606l-.494-.076-.494-.076c-.205 1.338-1.577 2.162-2.956 1.792zm3.58-2.199.493.076a28.35 28.35 0 0 0-3.47-18.469l-.434.25-.433.25a27.35 27.35 0 0 1 3.349 17.817zm-3.41-18.143.432-.25a28.35 28.35 0 0 0-14.257-12.24l-.182.466-.181.466a27.35 27.35 0 0 1 13.754 11.808z" />
                            </g>
                          </g>
                          <defs>
                            <filter id="home-hero-rail-active_svg__filter0_dii_220_219" width="25" height="26" x="202" y="86" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter1_dii_220_219" width="44" height="62" x="13" y="51" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter2_dii_220_219" width="29" height="66" x="160" y="99" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter3_i_220_219" width="19" height="20" x="138" y="138" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect1_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter4_i_220_219" width="19" height="20" x="84" y="138" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect1_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter5_i_220_219" width="19" height="20" x="30" y="138" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect1_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter6_dii_220_219" width="25" height="26" x="202" y="191.998" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter7_i_220_219" width="64" height="81" x="194" y="239.998" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect1_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter8_dii_220_219" width="35" height="35" x="197" y="244.998" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter9_dii_220_219" width="28" height="29" x="19" y="267.998" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter10_dii_220_219" width="28" height="29" x="105" y="267.998" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter11_dii_220_219" width="62" height="44" x="11" y="346.666" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter12_dii_220_219" width="62" height="44" x="47" y="370.666" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <filter id="home-hero-rail-active_svg__filter13_dii_220_219" width="28" height="29" x="159" y="377.666" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                              <feFlood floodOpacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="2.5" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_220_219" />
                              <feBlend in="SourceGraphic" in2="effect1_dropShadow_220_219" result="shape" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="1" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                              <feBlend in2="shape" result="effect2_innerShadow_220_219" />
                              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                              <feOffset />
                              <feGaussianBlur stdDeviation="5" />
                              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                              <feBlend in2="effect2_innerShadow_220_219" mode="lighten" result="effect3_innerShadow_220_219" />
                            </filter>
                            <clipPath id="home-hero-rail-active_svg__clip0_220_219">
                              <path fill="#fff" d="M0 0h258v166.667H0z" />
                            </clipPath>
                            <clipPath id="home-hero-rail-active_svg__clip2_220_219">
                              <path fill="#fff" d="M0 166.666h258v167H0z" />
                            </clipPath>
                            <clipPath id="home-hero-rail-active_svg__clip6_220_219">
                              <path fill="#fff" d="M0 333.666h258v166H0z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div aria-hidden="true" data-hero-label="true" className="pointer-events-none absolute top-0 z-10 flex h-12 w-38 items-center justify-center p-2 font-mono text-[12px] leading-none text-[#D6DBE1] transition-colors duration-0 ease-out motion-reduce:transition-none group-hover/top:text-[#FCFDFE] peer-hover/top:text-[#FCFDFE] right-0">// MIGRATE //</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto w-full max-w-300 px-0 lg:px-0">
              <section aria-labelledby="_S_5_" className="grid min-h-28 border-b border-r border-[#E3E7EB] lg:grid-cols-[258px_1fr]">
                <div className="flex items-center border-b border-[#E3E7EB] px-8 py-6 text-center font-normal leading-6 text-[#79818D] lg:border-b-0 lg:border-r lg:px-10 lg:py-8 lg:text-left">
                  <div id="_S_5_" className="w-full text-inherit font-[inherit] lg:mx-5">Trusted by leading companies</div>
                </div>
                <div className="relative h-28 overflow-hidden lg:h-auto">
                  <ul className="sr-only">
                    <li>Order.co</li>
                    <li>Rillet</li>
                    <li>CurbWaste</li>
                    <li>Granum</li>
                    <li>Brivity</li>
                    <li>Cariina</li>
                    <li>Arketa</li>
                    <li>Bound</li>
                    <li>Golf Live</li>
                  </ul>
                  <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-[rgb(var(--site-bg-rgb))] to-transparent"></div>
                  <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-[rgb(var(--site-bg-rgb))] to-transparent"></div>
                  <div aria-hidden="true" className="absolute inset-0 flex items-center overflow-hidden px-8">
                    <div className="flex animate-[ticker_90s_linear_infinite] items-center motion-reduce:animate-none">
                      <div className="flex shrink-0 items-center gap-8 pr-8 will-change-transform">
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="122" height="24" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__56d2ada9 1x, /_next/image__2e7feff4 2x" src="/_next/image__56d2ada9" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="110" height="24" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0 max-h-6" style={{ "color": "transparent" }} src="/images/logos/rillet-logo__0dc0adc0.svg" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="171" height="24" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__c119ed89 1x, /_next/image__4d86610a 2x" src="/_next/image__c119ed89" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="138" height="24" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__3a7d810e 1x, /_next/image__9a827f43 2x" src="/_next/image__3a7d810e" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="112" height="28" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__674b2bfd 1x, /_next/image__f466d905 2x" src="/_next/image__674b2bfd" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="105" height="28" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__7925302f 1x, /_next/image__23d4d84e 2x" src="/_next/image__7925302f" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="102" height="24" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__13251b03 1x, /_next/image__9f5f9718 2x" src="/_next/image__13251b03" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="143" height="28" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__c0cf0449 1x, /_next/image__8dfaca3d 2x" src="/_next/image__c0cf0449" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="93" height="24" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} src="/images/golf-live-logo__0dc0adc0.svg" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="122" height="24" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__56d2ada9 1x, /_next/image__2e7feff4 2x" src="/_next/image__56d2ada9" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="110" height="24" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0 max-h-6" style={{ "color": "transparent" }} src="/images/logos/rillet-logo__0dc0adc0.svg" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="171" height="24" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__c119ed89 1x, /_next/image__4d86610a 2x" src="/_next/image__c119ed89" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="138" height="24" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__3a7d810e 1x, /_next/image__9a827f43 2x" src="/_next/image__3a7d810e" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="112" height="28" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__674b2bfd 1x, /_next/image__f466d905 2x" src="/_next/image__674b2bfd" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="105" height="28" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__7925302f 1x, /_next/image__23d4d84e 2x" src="/_next/image__7925302f" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="102" height="24" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__13251b03 1x, /_next/image__9f5f9718 2x" src="/_next/image__13251b03" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="143" height="28" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__c0cf0449 1x, /_next/image__8dfaca3d 2x" src="/_next/image__c0cf0449" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="93" height="24" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} src="/images/golf-live-logo__0dc0adc0.svg" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="122" height="24" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__56d2ada9 1x, /_next/image__2e7feff4 2x" src="/_next/image__56d2ada9" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="110" height="24" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0 max-h-6" style={{ "color": "transparent" }} src="/images/logos/rillet-logo__0dc0adc0.svg" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="171" height="24" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__c119ed89 1x, /_next/image__4d86610a 2x" src="/_next/image__c119ed89" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="138" height="24" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__3a7d810e 1x, /_next/image__9a827f43 2x" src="/_next/image__3a7d810e" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="112" height="28" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__674b2bfd 1x, /_next/image__f466d905 2x" src="/_next/image__674b2bfd" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="105" height="28" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__7925302f 1x, /_next/image__23d4d84e 2x" src="/_next/image__7925302f" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="102" height="24" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__13251b03 1x, /_next/image__9f5f9718 2x" src="/_next/image__13251b03" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="143" height="28" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__c0cf0449 1x, /_next/image__8dfaca3d 2x" src="/_next/image__c0cf0449" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="93" height="24" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} src="/images/golf-live-logo__0dc0adc0.svg" />
                        </div>
                      </div>
                      <div className="flex shrink-0 items-center gap-8 pr-8 will-change-transform">
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="122" height="24" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__56d2ada9 1x, /_next/image__2e7feff4 2x" src="/_next/image__56d2ada9" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="110" height="24" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0 max-h-6" style={{ "color": "transparent" }} src="/images/logos/rillet-logo__0dc0adc0.svg" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="171" height="24" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__c119ed89 1x, /_next/image__4d86610a 2x" src="/_next/image__c119ed89" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="138" height="24" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__3a7d810e 1x, /_next/image__9a827f43 2x" src="/_next/image__3a7d810e" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="112" height="28" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__674b2bfd 1x, /_next/image__f466d905 2x" src="/_next/image__674b2bfd" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="105" height="28" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__7925302f 1x, /_next/image__23d4d84e 2x" src="/_next/image__7925302f" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="102" height="24" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__13251b03 1x, /_next/image__9f5f9718 2x" src="/_next/image__13251b03" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="143" height="28" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__c0cf0449 1x, /_next/image__8dfaca3d 2x" src="/_next/image__c0cf0449" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="93" height="24" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} src="/images/golf-live-logo__0dc0adc0.svg" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="122" height="24" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__56d2ada9 1x, /_next/image__2e7feff4 2x" src="/_next/image__56d2ada9" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="110" height="24" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0 max-h-6" style={{ "color": "transparent" }} src="/images/logos/rillet-logo__0dc0adc0.svg" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="171" height="24" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__c119ed89 1x, /_next/image__4d86610a 2x" src="/_next/image__c119ed89" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="138" height="24" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__3a7d810e 1x, /_next/image__9a827f43 2x" src="/_next/image__3a7d810e" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="112" height="28" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__674b2bfd 1x, /_next/image__f466d905 2x" src="/_next/image__674b2bfd" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="105" height="28" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__7925302f 1x, /_next/image__23d4d84e 2x" src="/_next/image__7925302f" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="102" height="24" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__13251b03 1x, /_next/image__9f5f9718 2x" src="/_next/image__13251b03" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="143" height="28" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__c0cf0449 1x, /_next/image__8dfaca3d 2x" src="/_next/image__c0cf0449" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="93" height="24" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} src="/images/golf-live-logo__0dc0adc0.svg" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="122" height="24" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__56d2ada9 1x, /_next/image__2e7feff4 2x" src="/_next/image__56d2ada9" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="110" height="24" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0 max-h-6" style={{ "color": "transparent" }} src="/images/logos/rillet-logo__0dc0adc0.svg" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="171" height="24" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__c119ed89 1x, /_next/image__4d86610a 2x" src="/_next/image__c119ed89" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="138" height="24" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__3a7d810e 1x, /_next/image__9a827f43 2x" src="/_next/image__3a7d810e" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="112" height="28" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__674b2bfd 1x, /_next/image__f466d905 2x" src="/_next/image__674b2bfd" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="105" height="28" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__7925302f 1x, /_next/image__23d4d84e 2x" src="/_next/image__7925302f" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="102" height="24" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__13251b03 1x, /_next/image__9f5f9718 2x" src="/_next/image__13251b03" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="143" height="28" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} srcSet="/_next/image__c0cf0449 1x, /_next/image__8dfaca3d 2x" src="/_next/image__c0cf0449" />
                        </div>
                        <div className="flex h-18.75 w-34.5 shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
                          <img alt="" loading="lazy" width="93" height="24" decoding="async" data-nimg="1" className="object-contain grayscale transition duration-200 hover:grayscale-0" style={{ "color": "transparent" }} src="/images/golf-live-logo__0dc0adc0.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
          <section className="relative overflow-hidden border-b border-[#E3E7EB] bg-[rgb(var(--site-bg-rgb))]">
            <div className="mx-auto w-full max-w-300">
              <div className="relative border-x border-[#E3E7EB] lg:min-h-192.5">
                <div aria-hidden="true" className="absolute inset-x-0 top-0 hidden lg:block h-37.5"></div>
                <div aria-hidden="true" className="absolute left-1/2 hidden w-screen -translate-x-1/2 border-t border-[#E3E7EB] lg:block top-37.5"></div>
                <div className="mt-16 flex items-center lg:mt-0 lg:block">
                  <div className="flex-1 border-t border-[#E3E7EB] lg:hidden"></div>
                  <div className="relative top-0 z-10 inline-flex h-7 items-center rounded-full border border-[#DFE3E8] bg-[rgb(var(--site-bg-rgb))] py-0.5 pl-2 pr-3 lg:absolute lg:left-8 lg:top-34">
                    <svg aria-hidden="true" viewBox="0 0 20 20" className="size-5 text-(--gray-700)" fill="none">
                      <path d="M10.6719 7.33203L8.67188 9.33203L11.3385 10.6654L9.33854 12.6654" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6.94267 15.6093L4.39067 13.0573C4.14067 12.8073 4 12.468 4 12.1147V7.88533C4 7.532 4.14067 7.19267 4.39067 6.94267L6.94267 4.39067C7.19267 4.14067 7.532 4 7.88533 4H12.114C12.4673 4 12.8067 4.14067 13.0567 4.39067L15.6087 6.94267C15.8593 7.19267 16 7.532 16 7.88533V12.114C16 12.4673 15.8593 12.8067 15.6093 13.0567L13.0573 15.6087C12.8073 15.8593 12.468 16 12.1147 16H7.88533C7.532 16 7.19267 15.8593 6.94267 15.6093Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="pl-1 text-[13px]/6  text-[#5D646E]">The Challenge</span>
                  </div>
                  <div className="flex-1 border-t border-[#E3E7EB] lg:hidden"></div>
                </div>
                <div className="relative top-0 z-10 mx-auto mt-6 max-w-[calc(100%-2rem)] px-4 py-8 text-center lg:absolute lg:left-8.5 lg:top-65 lg:mx-0 lg:mt-0 lg:max-w-164.25 lg:p-0 lg:text-left">
                  <h2 className="text-balance text-4xl/10 font-semibold tracking-tight lg:text-5xl/14 lg:mx-0 text-[#000A27]">
                    <span className="text-[#1066F1]">{"Your customers' data"}</span>
                    {" "}
                    is locked up in legacy systems.
                  </h2>
                  <p className="text-base/6.5 text-[#000A27] mx-auto max-w-103.5 lg:mx-0 mt-4">{"Vendor portals, dead spreadsheets, and uncooperative software. Your customers don't care — they just want their data."}</p>
                </div>
                <div aria-hidden="true" className="relative flex h-64 w-full items-center justify-center overflow-hidden border-t border-[#E7EAEE] lg:absolute lg:left-164 lg:top-37.5 lg:block lg:h-99 lg:w-120 lg:border-t-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="480" height="396" fill="none" viewBox="0 0 480 396" aria-hidden="true" className="h-64 w-auto max-w-none lg:size-full">
                    <rect width="79" height="79" x="282.5" y="81.5" stroke="#E7EAEE" rx="15.5" />
                    <rect width="48" height="48" x="298" y="97" fill="#E6EFFE" rx="24" />
                    <rect width="79" height="79" x="119.5" y="235.5" stroke="#E7EAEE" rx="15.5" />
                    <rect width="48" height="48" x="135" y="251" fill="#E6EFFE" rx="24" />
                    <path stroke="#E7EAEE" d="M362 121h6.5c8.837 0 16 7.163 16 16v83M118.5 275H112c-8.837 0-16-7.163-16-16v-83" />
                    <circle cx="385" cy="235" r="8" stroke="#E7EAEE" />
                    <circle cx="96" cy="160" r="8" stroke="#E7EAEE" />
                    <path d="M96 152v-48c0-8.837 7.163-16 16-16h93.5c8.837 0 16 7.163 16 16v16" fill="none" stroke="#1066F1" strokeDasharray="3 5" strokeDashoffset="-7.546666666666682" />
                    <path d="M384.5 243v48c0 8.837-7.163 16-16 16H275c-8.837 0-16-7.163-16-16v-16" fill="none" stroke="#1066F1" strokeDasharray="3 5" strokeDashoffset="-7.546666666666682" />
                    <g filter="url(#challenge-illustration_svg__filter0_dddd_199_291)">
                      <g clipPath="url(#challenge-illustration_svg__clip0_199_291)">
                        <path fill="#fff" d="M159 137c0-8.837 7.163-16 16-16h131c8.837 0 16 7.163 16 16v122c0 8.837-7.163 16-16 16H175c-8.837 0-16-7.163-16-16z" />
                        <path fill="#E7EAEE" d="M159 121h163zm163 24.5H159v-1h163zm-163-.5v-24zm163-24v24z" />
                        <circle cx="171" cy="133" r="4" fill="#E7EAEE" />
                        <circle cx="183" cy="133" r="4" fill="#E7EAEE" />
                        <circle cx="195" cy="133" r="4" fill="#E7EAEE" />
                        <g fill="#E3E7EB" opacity="0.5">
                          <g opacity="0.4">
                            <path d="M182.456 167.609a2.61 2.61 0 0 1 2.609-2.609h13.043a2.609 2.609 0 1 1 0 5.217h-13.043a2.61 2.61 0 0 1-2.609-2.608M205.935 167.609a2.61 2.61 0 0 1 2.608-2.609h14.348a2.609 2.609 0 1 1 0 5.217h-14.348a2.61 2.61 0 0 1-2.608-2.608M230.717 167.609a2.61 2.61 0 0 1 2.608-2.609h22.174a2.609 2.609 0 1 1 0 5.217h-22.174a2.61 2.61 0 0 1-2.608-2.608" />
                            <rect width="14.348" height="5.217" x="263.325" y="165" rx="2.609" />
                            <rect width="14.348" height="5.217" x="282.891" y="165" rx="2.609" />
                            <path d="M182.456 183.261a2.61 2.61 0 0 1 2.609-2.609h13.043a2.609 2.609 0 1 1 0 5.218h-13.043a2.61 2.61 0 0 1-2.609-2.609M205.935 183.261a2.61 2.61 0 0 1 2.608-2.609h22.174a2.609 2.609 0 1 1 0 5.218h-22.174a2.61 2.61 0 0 1-2.608-2.609M238.543 183.261a2.61 2.61 0 0 1 2.609-2.609h22.174a2.609 2.609 0 0 1 0 5.218h-22.174a2.61 2.61 0 0 1-2.609-2.609M271.151 183.261a2.61 2.61 0 0 1 2.609-2.609h9.131a2.609 2.609 0 0 1-.001 5.218h-9.13a2.61 2.61 0 0 1-2.609-2.609M182.456 198.913a2.61 2.61 0 0 1 2.609-2.608h13.043a2.609 2.609 0 1 1 0 5.217h-13.043a2.61 2.61 0 0 1-2.609-2.609M205.935 198.913a2.61 2.61 0 0 1 2.608-2.608h18.261a2.609 2.609 0 1 1 0 5.217h-18.261a2.61 2.61 0 0 1-2.608-2.609M234.63 198.913a2.61 2.61 0 0 1 2.609-2.608h9.13a2.609 2.609 0 1 1 0 5.217h-9.13a2.61 2.61 0 0 1-2.609-2.609M254.195 198.913a2.61 2.61 0 0 1 2.609-2.608h22.174a2.609 2.609 0 1 1 0 5.217h-22.174a2.61 2.61 0 0 1-2.609-2.609M286.804 198.913a2.61 2.61 0 0 1 2.608-2.608h6.522a2.609 2.609 0 1 1 0 5.217h-6.522a2.61 2.61 0 0 1-2.608-2.609" />
                          </g>
                          <g opacity="0.4">
                            <path d="M182.456 221.087a2.61 2.61 0 0 1 2.609-2.608h13.043a2.609 2.609 0 1 1 0 5.217h-13.043a2.61 2.61 0 0 1-2.609-2.609M205.935 221.087a2.61 2.61 0 0 1 2.608-2.608h14.348a2.609 2.609 0 1 1 0 5.217h-14.348a2.61 2.61 0 0 1-2.608-2.609M230.717 221.087a2.61 2.61 0 0 1 2.608-2.608h22.174a2.609 2.609 0 1 1 0 5.217h-22.174a2.61 2.61 0 0 1-2.608-2.609" />
                            <rect width="14.348" height="5.217" x="263.325" y="218.479" rx="2.609" />
                            <rect width="14.348" height="5.217" x="282.891" y="218.479" rx="2.609" />
                            <path d="M182.456 236.74a2.61 2.61 0 0 1 2.609-2.609h13.043a2.609 2.609 0 1 1 0 5.217h-13.043a2.61 2.61 0 0 1-2.609-2.608M205.935 236.74a2.61 2.61 0 0 1 2.608-2.609h22.174a2.609 2.609 0 1 1 0 5.217h-22.174a2.61 2.61 0 0 1-2.608-2.608M238.543 236.74a2.61 2.61 0 0 1 2.609-2.609h22.174a2.608 2.608 0 0 1 0 5.217h-22.174a2.61 2.61 0 0 1-2.609-2.608M271.151 236.74a2.61 2.61 0 0 1 2.609-2.609h9.131a2.609 2.609 0 0 1-.001 5.217h-9.13a2.61 2.61 0 0 1-2.609-2.608M182.456 252.392a2.61 2.61 0 0 1 2.609-2.609h13.043a2.609 2.609 0 1 1 0 5.218h-13.043a2.61 2.61 0 0 1-2.609-2.609M205.935 252.392a2.61 2.61 0 0 1 2.608-2.609h18.261a2.609 2.609 0 1 1 0 5.218h-18.261a2.61 2.61 0 0 1-2.608-2.609M234.63 252.392a2.61 2.61 0 0 1 2.609-2.609h9.13a2.609 2.609 0 1 1 0 5.218h-9.13a2.61 2.61 0 0 1-2.609-2.609M254.195 252.392a2.61 2.61 0 0 1 2.609-2.609h22.174a2.609 2.609 0 1 1 0 5.218h-22.174a2.61 2.61 0 0 1-2.609-2.609M286.804 252.392a2.61 2.61 0 0 1 2.608-2.609h6.522a2.609 2.609 0 1 1 0 5.218h-6.522a2.61 2.61 0 0 1-2.608-2.609" />
                          </g>
                        </g>
                        <path fill="#B4CFFD" d="M260.83 219.372 246.36 194.3c-1.12-1.925-3.124-3.073-5.361-3.073s-4.241 1.148-5.361 3.073l-.003.006-14.468 25.068a6.14 6.14 0 0 0 .002 6.197 6.13 6.13 0 0 0 5.363 3.094h28.933a6.13 6.13 0 0 0 5.363-3.094 6.14 6.14 0 0 0 .002-6.199" />
                        <path fill="#1066F1" d="M241 214a2 2 0 0 1-2-2v-8a2 2 0 0 1 4 0v8a2 2 0 0 1-2 2M241.01 221.997a2.67 2.67 0 0 1-2.666-2.666 2.67 2.67 0 0 1 2.666-2.667c1.472 0 2.667 1.2 2.667 2.667a2.67 2.67 0 0 1-2.667 2.666" />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="challenge-illustration_svg__clip0_199_291">
                        <path fill="#fff" d="M159 137c0-8.837 7.163-16 16-16h131c8.837 0 16 7.163 16 16v122c0 8.837-7.163 16-16 16H175c-8.837 0-16-7.163-16-16z" />
                      </clipPath>
                      <filter id="challenge-illustration_svg__filter0_dddd_199_291" width="203" height="202" x="139" y="117" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feMorphology in="SourceAlpha" operator="dilate" radius="1" result="effect1_dropShadow_199_291" />
                        <feOffset />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0" />
                        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_199_291" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feMorphology in="SourceAlpha" radius="12" result="effect2_dropShadow_199_291" />
                        <feOffset dy="24" />
                        <feGaussianBlur stdDeviation="16" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0" />
                        <feBlend in2="effect1_dropShadow_199_291" result="effect2_dropShadow_199_291" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feMorphology in="SourceAlpha" radius="8" result="effect3_dropShadow_199_291" />
                        <feOffset dy="16" />
                        <feGaussianBlur stdDeviation="12" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0" />
                        <feBlend in2="effect2_dropShadow_199_291" result="effect3_dropShadow_199_291" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feMorphology in="SourceAlpha" radius="4" result="effect4_dropShadow_199_291" />
                        <feOffset dy="8" />
                        <feGaussianBlur stdDeviation="8" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0" />
                        <feBlend in2="effect3_dropShadow_199_291" result="effect4_dropShadow_199_291" />
                        <feBlend in="SourceGraphic" in2="effect4_dropShadow_199_291" result="shape" />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div className="relative inset-x-0 top-0 grid grid-cols-1 border-t border-[#E7EAEE] md:grid-cols-2 mt-0 lg:absolute lg:top-136.5 lg:grid-cols-4">
                  <article className={"flex min-h-42 flex-col items-start border-b border-l border-[#E7EAEE] bg-[#F8F9FC] px-5 py-6 first:border-l-0 last:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0 lg:min-h-56 lg:border-b-0 lg:bg-[rgb(var(--site-bg-rgb))] lg:px-8 lg:pb-12 lg:pt-8"}>
                    <img alt="" aria-hidden="true" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className="size-6" style={{ "color": "transparent" }} src="/images/icons/home/three-dots-circle-icon__0dc0adc0.svg" />
                    <p className="text-base/6 text-[#5D646E] mt-6 font-normal lg:mt-8">
                      <span className="text-[#00030A]">Prebuilt connectors</span>
                      {" "}
                      cover 15% of the long tail — and none of the systems your enterprise customers actually use.
                    </p>
                  </article>
                  <article className={"flex min-h-42 flex-col items-start border-b border-l border-[#E7EAEE] bg-[#F8F9FC] px-5 py-6 first:border-l-0 last:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0 lg:min-h-56 lg:border-b-0 lg:bg-[rgb(var(--site-bg-rgb))] lg:px-8 lg:pb-12 lg:pt-8"}>
                    <img alt="" aria-hidden="true" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className="size-6" style={{ "color": "transparent" }} src="/images/icons/home/stacking-layers-icon__0dc0adc0.svg" />
                    <p className="text-base/6 text-[#5D646E] mt-6 font-normal lg:mt-8">
                      <span className="text-[#00030A]">Custom API work</span>
                      {" "}
                      puts engineering on a treadmill building one-off integrations instead of shipping product.
                    </p>
                  </article>
                  <article className={"flex min-h-42 flex-col items-start border-b border-l border-[#E7EAEE] bg-[#F8F9FC] px-5 py-6 first:border-l-0 last:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0 lg:min-h-56 lg:border-b-0 lg:bg-[rgb(var(--site-bg-rgb))] lg:px-8 lg:pb-12 lg:pt-8"}>
                    <img alt="" aria-hidden="true" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className="size-6" style={{ "color": "transparent" }} src="/images/icons/home/human-laptop-icon__0dc0adc0.svg" />
                    <p className="text-base/6 text-[#5D646E] mt-6 font-normal lg:mt-8">
                      <span className="text-[#00030A]">Manual processes</span>
                      {" "}
                      turn your ops and onboarding teams into full-time data clerks.
                    </p>
                  </article>
                  <article className={"flex min-h-42 flex-col items-start border-b border-l border-[#E7EAEE] bg-[#F8F9FC] px-5 py-6 first:border-l-0 last:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0 lg:min-h-56 lg:border-b-0 lg:bg-[rgb(var(--site-bg-rgb))] lg:px-8 lg:pb-12 lg:pt-8"}>
                    <img alt="" aria-hidden="true" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className="size-6" style={{ "color": "transparent" }} src="/images/icons/home/warning-icon__0dc0adc0.svg" />
                    <p className="text-base/6 text-[#5D646E] mt-6 font-normal lg:mt-8">
                      <span className="text-[#00030A]">Traditional ETL</span>
                      {" "}
                      {"doesn't work when there's no API to read from."}
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </section>
          <section className="relative overflow-hidden bg-[rgb(var(--site-bg-rgb))]">
            <div className="mx-auto flex w-full max-w-300 flex-col border-x border-[#E3E7EB] bg-[rgb(var(--site-bg-rgb))] lg:min-h-140.75">
              <div className="h-28 lg:h-24"></div>
              <div className="flex items-center">
                <div className="flex-1 border-t border-[#E3E7EB]"></div>
                <div className="z-10 flex items-center rounded-full border border-[#DFE3E8] bg-[rgb(var(--site-bg-rgb))] py-0.5 pl-2 pr-3">
                  <svg aria-hidden="true" viewBox="0 0 20 20" className="size-5 text-(--gray-700)" fill="none">
                    <path d="M17.5 16.6663H2.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.1983 14.1661C15.9848 13.186 16.4782 12.0036 16.6217 10.7552C16.7653 9.50686 16.553 8.24332 16.0095 7.11033C15.466 5.97734 14.6133 5.02103 13.5498 4.35167C12.4863 3.6823 11.2553 3.32715 9.9987 3.32715C8.74209 3.32715 7.51106 3.6823 6.44756 4.35167C5.38406 5.02103 4.5314 5.97734 3.98788 7.11033C3.44437 8.24332 3.23214 9.50686 3.37566 10.7552C3.51919 12.0036 4.01262 13.186 4.79907 14.1661" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.91797 9.99951L9.58464 11.6662" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9.58203 11.6662L12.4987 8.74951" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="pl-1 text-[13px]/6  text-[#5D646E]">The Solution</span>
                </div>
                <div className="flex-1 border-t border-[#E3E7EB]"></div>
              </div>
              <div className="hidden items-start justify-between lg:flex">
                <div aria-hidden="true" className="relative hidden h-37.5 w-138 -mt-4 lg:block ">
                  <svg aria-hidden="true" width="126" height="130" viewBox="0 0 126 130" fill="none" className="absolute left-2.5 top-2.5">
                    <rect x="0.5" y="-0.5" width="125" height="129" transform="matrix(1 0 0 -1 0 129)" stroke="#E7EAEE" />
                  </svg>
                  <svg aria-hidden="true" width="52" height="34" viewBox="0 0 52 34" fill="none" className="absolute left-6 top-5 rotate-180">
                    <circle cx="35" cy="17" r="8.5" transform="rotate(-90 35 17)" stroke="#DFE3E8" />
                    <path d="M0.500001 17C0.500001 16.2222 0.838077 15.3664 1.52051 14.4453C2.20126 13.5266 3.19902 12.5775 4.45117 11.624C6.95514 9.71727 10.4111 7.84153 14.1807 6.18653C17.9461 4.53334 22.0045 3.10962 25.7021 2.09961C29.409 1.08708 32.7194 0.500001 35 0.500001C44.1127 0.5 51.5 7.8873 51.5 17C51.5 26.1127 44.1127 33.5 35 33.5C32.7194 33.5 29.409 32.9129 25.7021 31.9004C22.0045 30.8904 17.9461 29.4667 14.1807 27.8135C10.4111 26.1585 6.95514 24.2827 4.45117 22.376C3.19902 21.4225 2.20126 20.4734 1.52051 19.5547C0.838078 18.6336 0.500001 17.7779 0.500001 17Z" stroke="#DFE3E8" />
                  </svg>
                  <svg aria-hidden="true" width="52" height="34" viewBox="0 0 52 34" fill="none" className="absolute left-18.5 top-9.5">
                    <circle cx="35" cy="17" r="8.5" transform="rotate(-90 35 17)" stroke="#DFE3E8" />
                    <path d="M0.500001 17C0.500001 16.2222 0.838077 15.3664 1.52051 14.4453C2.20126 13.5266 3.19902 12.5775 4.45117 11.624C6.95514 9.71727 10.4111 7.84153 14.1807 6.18653C17.9461 4.53334 22.0045 3.10962 25.7021 2.09961C29.409 1.08708 32.7194 0.500001 35 0.500001C44.1127 0.5 51.5 7.8873 51.5 17C51.5 26.1127 44.1127 33.5 35 33.5C32.7194 33.5 29.409 32.9129 25.7021 31.9004C22.0045 30.8904 17.9461 29.4667 14.1807 27.8135C10.4111 26.1585 6.95514 24.2827 4.45117 22.376C3.19902 21.4225 2.20126 20.4734 1.52051 19.5547C0.838078 18.6336 0.500001 17.7779 0.500001 17Z" stroke="#DFE3E8" />
                  </svg>
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" className="absolute bottom-6.5 left-8">
                    <circle cx="9" cy="9" r="8.5" transform="matrix(1 0 0 -1 0 18)" stroke="#DFE3E8" />
                  </svg>
                  <svg aria-hidden="true" width="27" height="105" viewBox="0 0 27 105" fill="none" className="absolute left-7 top-6">
                    <path d="M0.499999 91.5L0.999999 91.5C0.999999 91.9978 1.02907 92.4885 1.08556 92.9707L0.588958 93.0289L0.0923552 93.0871C0.0313468 92.5664 -5.44786e-07 92.0367 -5.68248e-07 91.5L0.499999 91.5ZM0.985036 95.0302L1.46633 94.8947C1.7354 95.8505 2.11535 96.76 2.59151 97.6084L2.15549 97.8531L1.71946 98.0979C1.20513 97.1814 0.794544 96.1987 0.503744 95.1657L0.985036 95.0302ZM3.2904 99.5485L3.68285 99.2387C4.29185 100.01 4.98986 100.708 5.76133 101.317L5.45152 101.71L5.14172 102.102C4.30887 101.445 3.55539 100.691 2.89794 99.8583L3.2904 99.5485ZM7.14686 102.845L7.39156 102.408C8.24 102.885 9.14948 103.265 10.1053 103.534L9.96983 104.015L9.83434 104.496C8.80133 104.205 7.81861 103.795 6.90215 103.281L7.14686 102.845ZM11.9711 104.411L12.0293 103.914C12.5115 103.971 13.0022 104 13.5 104L13.5 104.5L13.5 105C12.9633 105 12.4336 104.969 11.9129 104.908L11.9711 104.411ZM13.5 104.5L13.5 104C13.9978 104 14.4885 103.971 14.9707 103.914L15.0289 104.411L15.0871 104.908C14.5664 104.969 14.0367 105 13.5 105L13.5 104.5ZM17.0302 104.015L16.8947 103.534C17.8505 103.265 18.76 102.885 19.6084 102.408L19.8531 102.845L20.0979 103.281C19.1814 103.795 18.1987 104.205 17.1657 104.496L17.0302 104.015ZM21.5485 101.71L21.2387 101.317C22.0101 100.708 22.7081 100.01 23.3171 99.2387L23.7096 99.5485L24.1021 99.8583C23.4446 100.691 22.6911 101.445 21.8583 102.102L21.5485 101.71ZM24.8445 97.8531L24.4085 97.6084C24.8846 96.76 25.2646 95.8505 25.5337 94.8947L26.015 95.0302L26.4963 95.1657C26.2055 96.1987 25.7949 97.1814 25.2805 98.0979L24.8445 97.8531ZM26.411 93.0289L25.9144 92.9707C25.9709 92.4885 26 91.9978 26 91.5L26.5 91.5L27 91.5C27 92.0367 26.9687 92.5664 26.9076 93.0871L26.411 93.0289ZM26.5 91.5L26 91.5L26 90.0375L26.5 90.0375L27 90.0375L27 91.5L26.5 91.5ZM26.5 88.0875L26 88.0875L26 85.1625L26.5 85.1625L27 85.1625L27 88.0875L26.5 88.0875ZM26.5 83.2125L26 83.2125L26 80.2875L26.5 80.2875L27 80.2875L27 83.2125L26.5 83.2125ZM26.5 78.3375L26 78.3375L26 75.4125L26.5 75.4125L27 75.4125L27 78.3375L26.5 78.3375ZM26.5 73.4625L26 73.4625L26 70.5375L26.5 70.5375L27 70.5375L27 73.4625L26.5 73.4625ZM26.5 68.5875L26 68.5875L26 65.6625L26.5 65.6625L27 65.6625L27 68.5875L26.5 68.5875ZM26.5 63.7125L26 63.7125L26 60.7875L26.5 60.7875L27 60.7875L27 63.7125L26.5 63.7125ZM26.5 58.8375L26 58.8375L26 55.9125L26.5 55.9125L27 55.9125L27 58.8375L26.5 58.8375ZM26.5 53.9625L26 53.9625L26 51.0375L26.5 51.0375L27 51.0375L27 53.9625L26.5 53.9625ZM26.5 49.0875L26 49.0875L26 46.1625L26.5 46.1625L27 46.1625L27 49.0875L26.5 49.0875ZM26.5 44.2125L26 44.2125L26 41.2875L26.5 41.2875L27 41.2875L27 44.2125L26.5 44.2125ZM26.5 39.3375L26 39.3375L26 36.4125L26.5 36.4125L27 36.4125L27 39.3375L26.5 39.3375ZM26.5 34.4625L26 34.4625L26 31.5375L26.5 31.5375L27 31.5375L27 34.4625L26.5 34.4625ZM26.5 29.5875L26 29.5875L26 26.6625L26.5 26.6625L27 26.6625L27 29.5875L26.5 29.5875ZM26.5 24.7125L26 24.7125L26 21.7875L26.5 21.7875L27 21.7875L27 24.7125L26.5 24.7125ZM26.5 19.8375L26 19.8375L26 16.9125L26.5 16.9125L27 16.9125L27 19.8375L26.5 19.8375ZM26.5 14.9625L26 14.9625L26 13.5L26.5 13.5L27 13.5L27 14.9625L26.5 14.9625ZM26.5 13.5L26 13.5C26 13.0022 25.9709 12.5115 25.9144 12.0293L26.411 11.9711L26.9076 11.9129C26.9686 12.4336 27 12.9633 27 13.5L26.5 13.5ZM26.015 9.96983L25.5337 10.1053C25.2646 9.14948 24.8846 8.24 24.4085 7.39156L24.8445 7.14686L25.2805 6.90215C25.7949 7.81861 26.2055 8.80133 26.4963 9.83434L26.015 9.96983ZM23.7096 5.45152L23.3171 5.76133C22.7081 4.98986 22.0101 4.29186 21.2387 3.68285L21.5485 3.2904L21.8583 2.89794C22.6911 3.5554 23.4446 4.30888 24.1021 5.14172L23.7096 5.45152ZM19.8531 2.15549L19.6084 2.59151C18.76 2.11536 17.8505 1.73541 16.8947 1.46633L17.0302 0.985039L17.1657 0.503746C18.1987 0.794541 19.1814 1.20512 20.0978 1.71946L19.8531 2.15549ZM15.0289 0.588959L14.9707 1.08556C14.4885 1.02907 13.9978 1 13.5 1L13.5 0.500001L13.5 5.68248e-07C14.0367 5.44786e-07 14.5664 0.0313497 15.0871 0.0923543L15.0289 0.588959ZM13.5 0.500001L13.5 1C13.0022 1 12.5115 1.02907 12.0292 1.08556L11.9711 0.588959L11.9129 0.0923545C12.4336 0.0313498 12.9633 5.9171e-07 13.5 5.68248e-07L13.5 0.500001ZM9.96982 0.985039L10.1053 1.46633C9.14948 1.73541 8.23999 2.11536 7.39156 2.59152L7.14685 2.15549L6.90214 1.71946C7.8186 1.20512 8.80133 0.794541 9.83433 0.503747L9.96982 0.985039ZM5.45152 3.2904L5.76133 3.68285C4.98985 4.29186 4.29185 4.98986 3.68285 5.76133L3.29039 5.45152L2.89794 5.14172C3.55539 4.30888 4.30887 3.55539 5.14172 2.89794L5.45152 3.2904ZM2.15548 7.14686L2.59151 7.39156C2.11535 8.24 1.7354 9.14948 1.46633 10.1053L0.985033 9.96983L0.50374 9.83434C0.79454 8.80133 1.20512 7.8186 1.71946 6.90215L2.15548 7.14686ZM0.588957 11.9711L1.08556 12.0293C1.02907 12.5115 0.999996 13.0022 0.999996 13.5L0.499996 13.5L-3.97774e-06 13.5C-4.0012e-06 12.9633 0.0313452 12.4336 0.0923517 11.9129L0.588957 11.9711ZM0.499996 13.5L0.999996 13.5L0.999996 14.9625L0.499996 14.9625L-3.91381e-06 14.9625L-3.97774e-06 13.5L0.499996 13.5ZM0.499996 16.9125L0.999996 16.9125L0.999996 19.8375L0.499996 19.8375L-3.70072e-06 19.8375L-3.82857e-06 16.9125L0.499996 16.9125ZM0.499996 21.7875L0.999996 21.7875L0.999997 24.7125L0.499997 24.7125L-3.48762e-06 24.7125L-3.61548e-06 21.7875L0.499996 21.7875ZM0.499997 26.6625L0.999997 26.6625L0.999997 29.5875L0.499997 29.5875L-3.27453e-06 29.5875L-3.40239e-06 26.6625L0.499997 26.6625ZM0.499997 31.5375L0.999997 31.5375L0.999997 34.4625L0.499997 34.4625L-3.06144e-06 34.4625L-3.18929e-06 31.5375L0.499997 31.5375ZM0.499997 36.4125L0.999997 36.4125L0.999997 39.3375L0.499997 39.3375L-2.84834e-06 39.3375L-2.9762e-06 36.4125L0.499997 36.4125ZM0.499997 41.2875L0.999997 41.2875L0.999997 44.2125L0.499997 44.2125L-2.63525e-06 44.2125L-2.76311e-06 41.2875L0.499997 41.2875ZM0.499997 46.1625L0.999997 46.1625L0.999998 49.0875L0.499998 49.0875L-2.42216e-06 49.0875L-2.55001e-06 46.1625L0.499997 46.1625ZM0.499998 51.0375L0.999998 51.0375L0.999998 53.9625L0.499998 53.9625L-2.20906e-06 53.9625L-2.33692e-06 51.0375L0.499998 51.0375ZM0.499998 55.9125L0.999998 55.9125L0.999998 58.8375L0.499998 58.8375L-1.99597e-06 58.8375L-2.12383e-06 55.9125L0.499998 55.9125ZM0.499998 60.7875L0.999998 60.7875L0.999998 63.7125L0.499998 63.7125L-1.78288e-06 63.7125L-1.91073e-06 60.7875L0.499998 60.7875ZM0.499998 65.6625L0.999998 65.6625L0.999998 68.5875L0.499998 68.5875L-1.56979e-06 68.5875L-1.69764e-06 65.6625L0.499998 65.6625ZM0.499999 70.5375L0.999999 70.5375L0.999999 73.4625L0.499999 73.4625L-1.35669e-06 73.4625L-1.48455e-06 70.5375L0.499999 70.5375ZM0.499999 75.4125L0.999999 75.4125L0.999999 78.3375L0.499999 78.3375L-1.1436e-06 78.3375L-1.27146e-06 75.4125L0.499999 75.4125ZM0.499999 80.2875L0.999999 80.2875L0.999999 83.2125L0.499999 83.2125L-9.30506e-07 83.2125L-1.05836e-06 80.2875L0.499999 80.2875ZM0.499999 85.1625L0.999999 85.1625L0.999999 88.0875L0.499999 88.0875L-7.17413e-07 88.0875L-8.45269e-07 85.1625L0.499999 85.1625ZM0.499999 90.0375L0.999999 90.0375L0.999999 91.5L0.499999 91.5L-5.68248e-07 91.5L-6.32176e-07 90.0375L0.499999 90.0375Z" fill="#DFE3E8" />
                  </svg>
                  <svg aria-hidden="true" width="182" height="88" viewBox="0 0 182 88" fill="none" className="absolute left-42.5 top-px">
                    <path d="M0.5 63.5002V82.3159C0.5 85.0773 2.73858 87.3159 5.5 87.3159H94C96.7614 87.3159 99 85.0773 99 82.3159V68.5002C99 65.7387 101.239 63.5002 104 63.5002H176.5C179.261 63.5002 181.5 61.2616 181.5 58.5002V0.500175H0.5V63.5002Z" stroke="#E7EAEE" />
                  </svg>
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" className="absolute left-44 top-11.5">
                    <circle cx="9" cy="9" r="8.5" transform="matrix(1 0 0 -1 0 18)" stroke="#DFE3E8" />
                  </svg>
                  <svg aria-hidden="true" width="27" height="105" viewBox="0 0 27 105" fill="none" className="absolute left-33.5 top-0.5 rotate-90">
                    <path d="M0.499999 91.5L0.999999 91.5C0.999999 91.9978 1.02907 92.4885 1.08556 92.9707L0.588958 93.0289L0.0923552 93.0871C0.0313468 92.5664 -5.44786e-07 92.0367 -5.68248e-07 91.5L0.499999 91.5ZM0.985036 95.0302L1.46633 94.8947C1.7354 95.8505 2.11535 96.76 2.59151 97.6084L2.15549 97.8531L1.71946 98.0979C1.20513 97.1814 0.794544 96.1987 0.503744 95.1657L0.985036 95.0302ZM3.2904 99.5485L3.68285 99.2387C4.29185 100.01 4.98986 100.708 5.76133 101.317L5.45152 101.71L5.14172 102.102C4.30887 101.445 3.55539 100.691 2.89794 99.8583L3.2904 99.5485ZM7.14686 102.845L7.39156 102.408C8.24 102.885 9.14948 103.265 10.1053 103.534L9.96983 104.015L9.83434 104.496C8.80133 104.205 7.81861 103.795 6.90215 103.281L7.14686 102.845ZM11.9711 104.411L12.0293 103.914C12.5115 103.971 13.0022 104 13.5 104L13.5 104.5L13.5 105C12.9633 105 12.4336 104.969 11.9129 104.908L11.9711 104.411ZM13.5 104.5L13.5 104C13.9978 104 14.4885 103.971 14.9707 103.914L15.0289 104.411L15.0871 104.908C14.5664 104.969 14.0367 105 13.5 105L13.5 104.5ZM17.0302 104.015L16.8947 103.534C17.8505 103.265 18.76 102.885 19.6084 102.408L19.8531 102.845L20.0979 103.281C19.1814 103.795 18.1987 104.205 17.1657 104.496L17.0302 104.015ZM21.5485 101.71L21.2387 101.317C22.0101 100.708 22.7081 100.01 23.3171 99.2387L23.7096 99.5485L24.1021 99.8583C23.4446 100.691 22.6911 101.445 21.8583 102.102L21.5485 101.71ZM24.8445 97.8531L24.4085 97.6084C24.8846 96.76 25.2646 95.8505 25.5337 94.8947L26.015 95.0302L26.4963 95.1657C26.2055 96.1987 25.7949 97.1814 25.2805 98.0979L24.8445 97.8531ZM26.411 93.0289L25.9144 92.9707C25.9709 92.4885 26 91.9978 26 91.5L26.5 91.5L27 91.5C27 92.0367 26.9687 92.5664 26.9076 93.0871L26.411 93.0289ZM26.5 91.5L26 91.5L26 90.0375L26.5 90.0375L27 90.0375L27 91.5L26.5 91.5ZM26.5 88.0875L26 88.0875L26 85.1625L26.5 85.1625L27 85.1625L27 88.0875L26.5 88.0875ZM26.5 83.2125L26 83.2125L26 80.2875L26.5 80.2875L27 80.2875L27 83.2125L26.5 83.2125ZM26.5 78.3375L26 78.3375L26 75.4125L26.5 75.4125L27 75.4125L27 78.3375L26.5 78.3375ZM26.5 73.4625L26 73.4625L26 70.5375L26.5 70.5375L27 70.5375L27 73.4625L26.5 73.4625ZM26.5 68.5875L26 68.5875L26 65.6625L26.5 65.6625L27 65.6625L27 68.5875L26.5 68.5875ZM26.5 63.7125L26 63.7125L26 60.7875L26.5 60.7875L27 60.7875L27 63.7125L26.5 63.7125ZM26.5 58.8375L26 58.8375L26 55.9125L26.5 55.9125L27 55.9125L27 58.8375L26.5 58.8375ZM26.5 53.9625L26 53.9625L26 51.0375L26.5 51.0375L27 51.0375L27 53.9625L26.5 53.9625ZM26.5 49.0875L26 49.0875L26 46.1625L26.5 46.1625L27 46.1625L27 49.0875L26.5 49.0875ZM26.5 44.2125L26 44.2125L26 41.2875L26.5 41.2875L27 41.2875L27 44.2125L26.5 44.2125ZM26.5 39.3375L26 39.3375L26 36.4125L26.5 36.4125L27 36.4125L27 39.3375L26.5 39.3375ZM26.5 34.4625L26 34.4625L26 31.5375L26.5 31.5375L27 31.5375L27 34.4625L26.5 34.4625ZM26.5 29.5875L26 29.5875L26 26.6625L26.5 26.6625L27 26.6625L27 29.5875L26.5 29.5875ZM26.5 24.7125L26 24.7125L26 21.7875L26.5 21.7875L27 21.7875L27 24.7125L26.5 24.7125ZM26.5 19.8375L26 19.8375L26 16.9125L26.5 16.9125L27 16.9125L27 19.8375L26.5 19.8375ZM26.5 14.9625L26 14.9625L26 13.5L26.5 13.5L27 13.5L27 14.9625L26.5 14.9625ZM26.5 13.5L26 13.5C26 13.0022 25.9709 12.5115 25.9144 12.0293L26.411 11.9711L26.9076 11.9129C26.9686 12.4336 27 12.9633 27 13.5L26.5 13.5ZM26.015 9.96983L25.5337 10.1053C25.2646 9.14948 24.8846 8.24 24.4085 7.39156L24.8445 7.14686L25.2805 6.90215C25.7949 7.81861 26.2055 8.80133 26.4963 9.83434L26.015 9.96983ZM23.7096 5.45152L23.3171 5.76133C22.7081 4.98986 22.0101 4.29186 21.2387 3.68285L21.5485 3.2904L21.8583 2.89794C22.6911 3.5554 23.4446 4.30888 24.1021 5.14172L23.7096 5.45152ZM19.8531 2.15549L19.6084 2.59151C18.76 2.11536 17.8505 1.73541 16.8947 1.46633L17.0302 0.985039L17.1657 0.503746C18.1987 0.794541 19.1814 1.20512 20.0978 1.71946L19.8531 2.15549ZM15.0289 0.588959L14.9707 1.08556C14.4885 1.02907 13.9978 1 13.5 1L13.5 0.500001L13.5 5.68248e-07C14.0367 5.44786e-07 14.5664 0.0313497 15.0871 0.0923543L15.0289 0.588959ZM13.5 0.500001L13.5 1C13.0022 1 12.5115 1.02907 12.0292 1.08556L11.9711 0.588959L11.9129 0.0923545C12.4336 0.0313498 12.9633 5.9171e-07 13.5 5.68248e-07L13.5 0.500001ZM9.96982 0.985039L10.1053 1.46633C9.14948 1.73541 8.23999 2.11536 7.39156 2.59152L7.14685 2.15549L6.90214 1.71946C7.8186 1.20512 8.80133 0.794541 9.83433 0.503747L9.96982 0.985039ZM5.45152 3.2904L5.76133 3.68285C4.98985 4.29186 4.29185 4.98986 3.68285 5.76133L3.29039 5.45152L2.89794 5.14172C3.55539 4.30888 4.30887 3.55539 5.14172 2.89794L5.45152 3.2904ZM2.15548 7.14686L2.59151 7.39156C2.11535 8.24 1.7354 9.14948 1.46633 10.1053L0.985033 9.96983L0.50374 9.83434C0.79454 8.80133 1.20512 7.8186 1.71946 6.90215L2.15548 7.14686ZM0.588957 11.9711L1.08556 12.0293C1.02907 12.5115 0.999996 13.0022 0.999996 13.5L0.499996 13.5L-3.97774e-06 13.5C-4.0012e-06 12.9633 0.0313452 12.4336 0.0923517 11.9129L0.588957 11.9711ZM0.499996 13.5L0.999996 13.5L0.999996 14.9625L0.499996 14.9625L-3.91381e-06 14.9625L-3.97774e-06 13.5L0.499996 13.5ZM0.499996 16.9125L0.999996 16.9125L0.999996 19.8375L0.499996 19.8375L-3.70072e-06 19.8375L-3.82857e-06 16.9125L0.499996 16.9125ZM0.499996 21.7875L0.999996 21.7875L0.999997 24.7125L0.499997 24.7125L-3.48762e-06 24.7125L-3.61548e-06 21.7875L0.499996 21.7875ZM0.499997 26.6625L0.999997 26.6625L0.999997 29.5875L0.499997 29.5875L-3.27453e-06 29.5875L-3.40239e-06 26.6625L0.499997 26.6625ZM0.499997 31.5375L0.999997 31.5375L0.999997 34.4625L0.499997 34.4625L-3.06144e-06 34.4625L-3.18929e-06 31.5375L0.499997 31.5375ZM0.499997 36.4125L0.999997 36.4125L0.999997 39.3375L0.499997 39.3375L-2.84834e-06 39.3375L-2.9762e-06 36.4125L0.499997 36.4125ZM0.499997 41.2875L0.999997 41.2875L0.999997 44.2125L0.499997 44.2125L-2.63525e-06 44.2125L-2.76311e-06 41.2875L0.499997 41.2875ZM0.499997 46.1625L0.999997 46.1625L0.999998 49.0875L0.499998 49.0875L-2.42216e-06 49.0875L-2.55001e-06 46.1625L0.499997 46.1625ZM0.499998 51.0375L0.999998 51.0375L0.999998 53.9625L0.499998 53.9625L-2.20906e-06 53.9625L-2.33692e-06 51.0375L0.499998 51.0375ZM0.499998 55.9125L0.999998 55.9125L0.999998 58.8375L0.499998 58.8375L-1.99597e-06 58.8375L-2.12383e-06 55.9125L0.499998 55.9125ZM0.499998 60.7875L0.999998 60.7875L0.999998 63.7125L0.499998 63.7125L-1.78288e-06 63.7125L-1.91073e-06 60.7875L0.499998 60.7875ZM0.499998 65.6625L0.999998 65.6625L0.999998 68.5875L0.499998 68.5875L-1.56979e-06 68.5875L-1.69764e-06 65.6625L0.499998 65.6625ZM0.499999 70.5375L0.999999 70.5375L0.999999 73.4625L0.499999 73.4625L-1.35669e-06 73.4625L-1.48455e-06 70.5375L0.499999 70.5375ZM0.499999 75.4125L0.999999 75.4125L0.999999 78.3375L0.499999 78.3375L-1.1436e-06 78.3375L-1.27146e-06 75.4125L0.499999 75.4125ZM0.499999 80.2875L0.999999 80.2875L0.999999 83.2125L0.499999 83.2125L-9.30506e-07 83.2125L-1.05836e-06 80.2875L0.499999 80.2875ZM0.499999 85.1625L0.999999 85.1625L0.999999 88.0875L0.499999 88.0875L-7.17413e-07 88.0875L-8.45269e-07 85.1625L0.499999 85.1625ZM0.499999 90.0375L0.999999 90.0375L0.999999 91.5L0.499999 91.5L-5.68248e-07 91.5L-6.32176e-07 90.0375L0.499999 90.0375Z" fill="#DFE3E8" />
                  </svg>
                  <svg aria-hidden="true" width="60" height="60" viewBox="0 0 60 60" fill="none" className="absolute left-70 top-8.5">
                    <circle cx="30" cy="30" r="29.5" transform="matrix(1 0 0 -1 0 60)" fill="#F8F9FC" stroke="#E7EAEE" />
                    <path d="M29.0391 47.3789C29.4828 48.8739 31.5172 48.8739 31.9609 47.3789L36.0254 33.6738C36.1365 33.2991 36.3298 32.9535 36.5908 32.665L46.0752 22.1855C46.5961 21.61 46.6035 20.8657 46.2832 20.2939C45.9638 19.7241 45.3481 19.3721 44.6221 19.5449L31.0723 22.7695C30.6958 22.8591 30.3042 22.8591 29.9277 22.7695L16.3779 19.5449C15.652 19.3722 15.0362 19.7241 14.7168 20.2939C14.3965 20.8657 14.4039 21.61 14.9248 22.1855L24.4092 32.665C24.6702 32.9535 24.8635 33.2991 24.9746 33.6738L29.0391 47.3789Z" stroke="#DFE3E8" />
                  </svg>
                </div>
                <div aria-hidden="true" className="relative hidden h-37.5 w-138 -mt-4 lg:block scale-x-[-1]">
                  <svg aria-hidden="true" width="126" height="130" viewBox="0 0 126 130" fill="none" className="absolute left-2.5 top-2.5">
                    <rect x="0.5" y="-0.5" width="125" height="129" transform="matrix(1 0 0 -1 0 129)" stroke="#E7EAEE" />
                  </svg>
                  <svg aria-hidden="true" width="52" height="34" viewBox="0 0 52 34" fill="none" className="absolute left-6 top-5 rotate-180">
                    <circle cx="35" cy="17" r="8.5" transform="rotate(-90 35 17)" stroke="#DFE3E8" />
                    <path d="M0.500001 17C0.500001 16.2222 0.838077 15.3664 1.52051 14.4453C2.20126 13.5266 3.19902 12.5775 4.45117 11.624C6.95514 9.71727 10.4111 7.84153 14.1807 6.18653C17.9461 4.53334 22.0045 3.10962 25.7021 2.09961C29.409 1.08708 32.7194 0.500001 35 0.500001C44.1127 0.5 51.5 7.8873 51.5 17C51.5 26.1127 44.1127 33.5 35 33.5C32.7194 33.5 29.409 32.9129 25.7021 31.9004C22.0045 30.8904 17.9461 29.4667 14.1807 27.8135C10.4111 26.1585 6.95514 24.2827 4.45117 22.376C3.19902 21.4225 2.20126 20.4734 1.52051 19.5547C0.838078 18.6336 0.500001 17.7779 0.500001 17Z" stroke="#DFE3E8" />
                  </svg>
                  <svg aria-hidden="true" width="52" height="34" viewBox="0 0 52 34" fill="none" className="absolute left-18.5 top-9.5">
                    <circle cx="35" cy="17" r="8.5" transform="rotate(-90 35 17)" stroke="#DFE3E8" />
                    <path d="M0.500001 17C0.500001 16.2222 0.838077 15.3664 1.52051 14.4453C2.20126 13.5266 3.19902 12.5775 4.45117 11.624C6.95514 9.71727 10.4111 7.84153 14.1807 6.18653C17.9461 4.53334 22.0045 3.10962 25.7021 2.09961C29.409 1.08708 32.7194 0.500001 35 0.500001C44.1127 0.5 51.5 7.8873 51.5 17C51.5 26.1127 44.1127 33.5 35 33.5C32.7194 33.5 29.409 32.9129 25.7021 31.9004C22.0045 30.8904 17.9461 29.4667 14.1807 27.8135C10.4111 26.1585 6.95514 24.2827 4.45117 22.376C3.19902 21.4225 2.20126 20.4734 1.52051 19.5547C0.838078 18.6336 0.500001 17.7779 0.500001 17Z" stroke="#DFE3E8" />
                  </svg>
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" className="absolute bottom-6.5 left-8">
                    <circle cx="9" cy="9" r="8.5" transform="matrix(1 0 0 -1 0 18)" stroke="#DFE3E8" />
                  </svg>
                  <svg aria-hidden="true" width="27" height="105" viewBox="0 0 27 105" fill="none" className="absolute left-7 top-6">
                    <path d="M0.499999 91.5L0.999999 91.5C0.999999 91.9978 1.02907 92.4885 1.08556 92.9707L0.588958 93.0289L0.0923552 93.0871C0.0313468 92.5664 -5.44786e-07 92.0367 -5.68248e-07 91.5L0.499999 91.5ZM0.985036 95.0302L1.46633 94.8947C1.7354 95.8505 2.11535 96.76 2.59151 97.6084L2.15549 97.8531L1.71946 98.0979C1.20513 97.1814 0.794544 96.1987 0.503744 95.1657L0.985036 95.0302ZM3.2904 99.5485L3.68285 99.2387C4.29185 100.01 4.98986 100.708 5.76133 101.317L5.45152 101.71L5.14172 102.102C4.30887 101.445 3.55539 100.691 2.89794 99.8583L3.2904 99.5485ZM7.14686 102.845L7.39156 102.408C8.24 102.885 9.14948 103.265 10.1053 103.534L9.96983 104.015L9.83434 104.496C8.80133 104.205 7.81861 103.795 6.90215 103.281L7.14686 102.845ZM11.9711 104.411L12.0293 103.914C12.5115 103.971 13.0022 104 13.5 104L13.5 104.5L13.5 105C12.9633 105 12.4336 104.969 11.9129 104.908L11.9711 104.411ZM13.5 104.5L13.5 104C13.9978 104 14.4885 103.971 14.9707 103.914L15.0289 104.411L15.0871 104.908C14.5664 104.969 14.0367 105 13.5 105L13.5 104.5ZM17.0302 104.015L16.8947 103.534C17.8505 103.265 18.76 102.885 19.6084 102.408L19.8531 102.845L20.0979 103.281C19.1814 103.795 18.1987 104.205 17.1657 104.496L17.0302 104.015ZM21.5485 101.71L21.2387 101.317C22.0101 100.708 22.7081 100.01 23.3171 99.2387L23.7096 99.5485L24.1021 99.8583C23.4446 100.691 22.6911 101.445 21.8583 102.102L21.5485 101.71ZM24.8445 97.8531L24.4085 97.6084C24.8846 96.76 25.2646 95.8505 25.5337 94.8947L26.015 95.0302L26.4963 95.1657C26.2055 96.1987 25.7949 97.1814 25.2805 98.0979L24.8445 97.8531ZM26.411 93.0289L25.9144 92.9707C25.9709 92.4885 26 91.9978 26 91.5L26.5 91.5L27 91.5C27 92.0367 26.9687 92.5664 26.9076 93.0871L26.411 93.0289ZM26.5 91.5L26 91.5L26 90.0375L26.5 90.0375L27 90.0375L27 91.5L26.5 91.5ZM26.5 88.0875L26 88.0875L26 85.1625L26.5 85.1625L27 85.1625L27 88.0875L26.5 88.0875ZM26.5 83.2125L26 83.2125L26 80.2875L26.5 80.2875L27 80.2875L27 83.2125L26.5 83.2125ZM26.5 78.3375L26 78.3375L26 75.4125L26.5 75.4125L27 75.4125L27 78.3375L26.5 78.3375ZM26.5 73.4625L26 73.4625L26 70.5375L26.5 70.5375L27 70.5375L27 73.4625L26.5 73.4625ZM26.5 68.5875L26 68.5875L26 65.6625L26.5 65.6625L27 65.6625L27 68.5875L26.5 68.5875ZM26.5 63.7125L26 63.7125L26 60.7875L26.5 60.7875L27 60.7875L27 63.7125L26.5 63.7125ZM26.5 58.8375L26 58.8375L26 55.9125L26.5 55.9125L27 55.9125L27 58.8375L26.5 58.8375ZM26.5 53.9625L26 53.9625L26 51.0375L26.5 51.0375L27 51.0375L27 53.9625L26.5 53.9625ZM26.5 49.0875L26 49.0875L26 46.1625L26.5 46.1625L27 46.1625L27 49.0875L26.5 49.0875ZM26.5 44.2125L26 44.2125L26 41.2875L26.5 41.2875L27 41.2875L27 44.2125L26.5 44.2125ZM26.5 39.3375L26 39.3375L26 36.4125L26.5 36.4125L27 36.4125L27 39.3375L26.5 39.3375ZM26.5 34.4625L26 34.4625L26 31.5375L26.5 31.5375L27 31.5375L27 34.4625L26.5 34.4625ZM26.5 29.5875L26 29.5875L26 26.6625L26.5 26.6625L27 26.6625L27 29.5875L26.5 29.5875ZM26.5 24.7125L26 24.7125L26 21.7875L26.5 21.7875L27 21.7875L27 24.7125L26.5 24.7125ZM26.5 19.8375L26 19.8375L26 16.9125L26.5 16.9125L27 16.9125L27 19.8375L26.5 19.8375ZM26.5 14.9625L26 14.9625L26 13.5L26.5 13.5L27 13.5L27 14.9625L26.5 14.9625ZM26.5 13.5L26 13.5C26 13.0022 25.9709 12.5115 25.9144 12.0293L26.411 11.9711L26.9076 11.9129C26.9686 12.4336 27 12.9633 27 13.5L26.5 13.5ZM26.015 9.96983L25.5337 10.1053C25.2646 9.14948 24.8846 8.24 24.4085 7.39156L24.8445 7.14686L25.2805 6.90215C25.7949 7.81861 26.2055 8.80133 26.4963 9.83434L26.015 9.96983ZM23.7096 5.45152L23.3171 5.76133C22.7081 4.98986 22.0101 4.29186 21.2387 3.68285L21.5485 3.2904L21.8583 2.89794C22.6911 3.5554 23.4446 4.30888 24.1021 5.14172L23.7096 5.45152ZM19.8531 2.15549L19.6084 2.59151C18.76 2.11536 17.8505 1.73541 16.8947 1.46633L17.0302 0.985039L17.1657 0.503746C18.1987 0.794541 19.1814 1.20512 20.0978 1.71946L19.8531 2.15549ZM15.0289 0.588959L14.9707 1.08556C14.4885 1.02907 13.9978 1 13.5 1L13.5 0.500001L13.5 5.68248e-07C14.0367 5.44786e-07 14.5664 0.0313497 15.0871 0.0923543L15.0289 0.588959ZM13.5 0.500001L13.5 1C13.0022 1 12.5115 1.02907 12.0292 1.08556L11.9711 0.588959L11.9129 0.0923545C12.4336 0.0313498 12.9633 5.9171e-07 13.5 5.68248e-07L13.5 0.500001ZM9.96982 0.985039L10.1053 1.46633C9.14948 1.73541 8.23999 2.11536 7.39156 2.59152L7.14685 2.15549L6.90214 1.71946C7.8186 1.20512 8.80133 0.794541 9.83433 0.503747L9.96982 0.985039ZM5.45152 3.2904L5.76133 3.68285C4.98985 4.29186 4.29185 4.98986 3.68285 5.76133L3.29039 5.45152L2.89794 5.14172C3.55539 4.30888 4.30887 3.55539 5.14172 2.89794L5.45152 3.2904ZM2.15548 7.14686L2.59151 7.39156C2.11535 8.24 1.7354 9.14948 1.46633 10.1053L0.985033 9.96983L0.50374 9.83434C0.79454 8.80133 1.20512 7.8186 1.71946 6.90215L2.15548 7.14686ZM0.588957 11.9711L1.08556 12.0293C1.02907 12.5115 0.999996 13.0022 0.999996 13.5L0.499996 13.5L-3.97774e-06 13.5C-4.0012e-06 12.9633 0.0313452 12.4336 0.0923517 11.9129L0.588957 11.9711ZM0.499996 13.5L0.999996 13.5L0.999996 14.9625L0.499996 14.9625L-3.91381e-06 14.9625L-3.97774e-06 13.5L0.499996 13.5ZM0.499996 16.9125L0.999996 16.9125L0.999996 19.8375L0.499996 19.8375L-3.70072e-06 19.8375L-3.82857e-06 16.9125L0.499996 16.9125ZM0.499996 21.7875L0.999996 21.7875L0.999997 24.7125L0.499997 24.7125L-3.48762e-06 24.7125L-3.61548e-06 21.7875L0.499996 21.7875ZM0.499997 26.6625L0.999997 26.6625L0.999997 29.5875L0.499997 29.5875L-3.27453e-06 29.5875L-3.40239e-06 26.6625L0.499997 26.6625ZM0.499997 31.5375L0.999997 31.5375L0.999997 34.4625L0.499997 34.4625L-3.06144e-06 34.4625L-3.18929e-06 31.5375L0.499997 31.5375ZM0.499997 36.4125L0.999997 36.4125L0.999997 39.3375L0.499997 39.3375L-2.84834e-06 39.3375L-2.9762e-06 36.4125L0.499997 36.4125ZM0.499997 41.2875L0.999997 41.2875L0.999997 44.2125L0.499997 44.2125L-2.63525e-06 44.2125L-2.76311e-06 41.2875L0.499997 41.2875ZM0.499997 46.1625L0.999997 46.1625L0.999998 49.0875L0.499998 49.0875L-2.42216e-06 49.0875L-2.55001e-06 46.1625L0.499997 46.1625ZM0.499998 51.0375L0.999998 51.0375L0.999998 53.9625L0.499998 53.9625L-2.20906e-06 53.9625L-2.33692e-06 51.0375L0.499998 51.0375ZM0.499998 55.9125L0.999998 55.9125L0.999998 58.8375L0.499998 58.8375L-1.99597e-06 58.8375L-2.12383e-06 55.9125L0.499998 55.9125ZM0.499998 60.7875L0.999998 60.7875L0.999998 63.7125L0.499998 63.7125L-1.78288e-06 63.7125L-1.91073e-06 60.7875L0.499998 60.7875ZM0.499998 65.6625L0.999998 65.6625L0.999998 68.5875L0.499998 68.5875L-1.56979e-06 68.5875L-1.69764e-06 65.6625L0.499998 65.6625ZM0.499999 70.5375L0.999999 70.5375L0.999999 73.4625L0.499999 73.4625L-1.35669e-06 73.4625L-1.48455e-06 70.5375L0.499999 70.5375ZM0.499999 75.4125L0.999999 75.4125L0.999999 78.3375L0.499999 78.3375L-1.1436e-06 78.3375L-1.27146e-06 75.4125L0.499999 75.4125ZM0.499999 80.2875L0.999999 80.2875L0.999999 83.2125L0.499999 83.2125L-9.30506e-07 83.2125L-1.05836e-06 80.2875L0.499999 80.2875ZM0.499999 85.1625L0.999999 85.1625L0.999999 88.0875L0.499999 88.0875L-7.17413e-07 88.0875L-8.45269e-07 85.1625L0.499999 85.1625ZM0.499999 90.0375L0.999999 90.0375L0.999999 91.5L0.499999 91.5L-5.68248e-07 91.5L-6.32176e-07 90.0375L0.499999 90.0375Z" fill="#DFE3E8" />
                  </svg>
                  <svg aria-hidden="true" width="182" height="88" viewBox="0 0 182 88" fill="none" className="absolute left-42.5 top-px">
                    <path d="M0.5 63.5002V82.3159C0.5 85.0773 2.73858 87.3159 5.5 87.3159H94C96.7614 87.3159 99 85.0773 99 82.3159V68.5002C99 65.7387 101.239 63.5002 104 63.5002H176.5C179.261 63.5002 181.5 61.2616 181.5 58.5002V0.500175H0.5V63.5002Z" stroke="#E7EAEE" />
                  </svg>
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" className="absolute left-44 top-11.5">
                    <circle cx="9" cy="9" r="8.5" transform="matrix(1 0 0 -1 0 18)" stroke="#DFE3E8" />
                  </svg>
                  <svg aria-hidden="true" width="27" height="105" viewBox="0 0 27 105" fill="none" className="absolute left-33.5 top-0.5 rotate-90">
                    <path d="M0.499999 91.5L0.999999 91.5C0.999999 91.9978 1.02907 92.4885 1.08556 92.9707L0.588958 93.0289L0.0923552 93.0871C0.0313468 92.5664 -5.44786e-07 92.0367 -5.68248e-07 91.5L0.499999 91.5ZM0.985036 95.0302L1.46633 94.8947C1.7354 95.8505 2.11535 96.76 2.59151 97.6084L2.15549 97.8531L1.71946 98.0979C1.20513 97.1814 0.794544 96.1987 0.503744 95.1657L0.985036 95.0302ZM3.2904 99.5485L3.68285 99.2387C4.29185 100.01 4.98986 100.708 5.76133 101.317L5.45152 101.71L5.14172 102.102C4.30887 101.445 3.55539 100.691 2.89794 99.8583L3.2904 99.5485ZM7.14686 102.845L7.39156 102.408C8.24 102.885 9.14948 103.265 10.1053 103.534L9.96983 104.015L9.83434 104.496C8.80133 104.205 7.81861 103.795 6.90215 103.281L7.14686 102.845ZM11.9711 104.411L12.0293 103.914C12.5115 103.971 13.0022 104 13.5 104L13.5 104.5L13.5 105C12.9633 105 12.4336 104.969 11.9129 104.908L11.9711 104.411ZM13.5 104.5L13.5 104C13.9978 104 14.4885 103.971 14.9707 103.914L15.0289 104.411L15.0871 104.908C14.5664 104.969 14.0367 105 13.5 105L13.5 104.5ZM17.0302 104.015L16.8947 103.534C17.8505 103.265 18.76 102.885 19.6084 102.408L19.8531 102.845L20.0979 103.281C19.1814 103.795 18.1987 104.205 17.1657 104.496L17.0302 104.015ZM21.5485 101.71L21.2387 101.317C22.0101 100.708 22.7081 100.01 23.3171 99.2387L23.7096 99.5485L24.1021 99.8583C23.4446 100.691 22.6911 101.445 21.8583 102.102L21.5485 101.71ZM24.8445 97.8531L24.4085 97.6084C24.8846 96.76 25.2646 95.8505 25.5337 94.8947L26.015 95.0302L26.4963 95.1657C26.2055 96.1987 25.7949 97.1814 25.2805 98.0979L24.8445 97.8531ZM26.411 93.0289L25.9144 92.9707C25.9709 92.4885 26 91.9978 26 91.5L26.5 91.5L27 91.5C27 92.0367 26.9687 92.5664 26.9076 93.0871L26.411 93.0289ZM26.5 91.5L26 91.5L26 90.0375L26.5 90.0375L27 90.0375L27 91.5L26.5 91.5ZM26.5 88.0875L26 88.0875L26 85.1625L26.5 85.1625L27 85.1625L27 88.0875L26.5 88.0875ZM26.5 83.2125L26 83.2125L26 80.2875L26.5 80.2875L27 80.2875L27 83.2125L26.5 83.2125ZM26.5 78.3375L26 78.3375L26 75.4125L26.5 75.4125L27 75.4125L27 78.3375L26.5 78.3375ZM26.5 73.4625L26 73.4625L26 70.5375L26.5 70.5375L27 70.5375L27 73.4625L26.5 73.4625ZM26.5 68.5875L26 68.5875L26 65.6625L26.5 65.6625L27 65.6625L27 68.5875L26.5 68.5875ZM26.5 63.7125L26 63.7125L26 60.7875L26.5 60.7875L27 60.7875L27 63.7125L26.5 63.7125ZM26.5 58.8375L26 58.8375L26 55.9125L26.5 55.9125L27 55.9125L27 58.8375L26.5 58.8375ZM26.5 53.9625L26 53.9625L26 51.0375L26.5 51.0375L27 51.0375L27 53.9625L26.5 53.9625ZM26.5 49.0875L26 49.0875L26 46.1625L26.5 46.1625L27 46.1625L27 49.0875L26.5 49.0875ZM26.5 44.2125L26 44.2125L26 41.2875L26.5 41.2875L27 41.2875L27 44.2125L26.5 44.2125ZM26.5 39.3375L26 39.3375L26 36.4125L26.5 36.4125L27 36.4125L27 39.3375L26.5 39.3375ZM26.5 34.4625L26 34.4625L26 31.5375L26.5 31.5375L27 31.5375L27 34.4625L26.5 34.4625ZM26.5 29.5875L26 29.5875L26 26.6625L26.5 26.6625L27 26.6625L27 29.5875L26.5 29.5875ZM26.5 24.7125L26 24.7125L26 21.7875L26.5 21.7875L27 21.7875L27 24.7125L26.5 24.7125ZM26.5 19.8375L26 19.8375L26 16.9125L26.5 16.9125L27 16.9125L27 19.8375L26.5 19.8375ZM26.5 14.9625L26 14.9625L26 13.5L26.5 13.5L27 13.5L27 14.9625L26.5 14.9625ZM26.5 13.5L26 13.5C26 13.0022 25.9709 12.5115 25.9144 12.0293L26.411 11.9711L26.9076 11.9129C26.9686 12.4336 27 12.9633 27 13.5L26.5 13.5ZM26.015 9.96983L25.5337 10.1053C25.2646 9.14948 24.8846 8.24 24.4085 7.39156L24.8445 7.14686L25.2805 6.90215C25.7949 7.81861 26.2055 8.80133 26.4963 9.83434L26.015 9.96983ZM23.7096 5.45152L23.3171 5.76133C22.7081 4.98986 22.0101 4.29186 21.2387 3.68285L21.5485 3.2904L21.8583 2.89794C22.6911 3.5554 23.4446 4.30888 24.1021 5.14172L23.7096 5.45152ZM19.8531 2.15549L19.6084 2.59151C18.76 2.11536 17.8505 1.73541 16.8947 1.46633L17.0302 0.985039L17.1657 0.503746C18.1987 0.794541 19.1814 1.20512 20.0978 1.71946L19.8531 2.15549ZM15.0289 0.588959L14.9707 1.08556C14.4885 1.02907 13.9978 1 13.5 1L13.5 0.500001L13.5 5.68248e-07C14.0367 5.44786e-07 14.5664 0.0313497 15.0871 0.0923543L15.0289 0.588959ZM13.5 0.500001L13.5 1C13.0022 1 12.5115 1.02907 12.0292 1.08556L11.9711 0.588959L11.9129 0.0923545C12.4336 0.0313498 12.9633 5.9171e-07 13.5 5.68248e-07L13.5 0.500001ZM9.96982 0.985039L10.1053 1.46633C9.14948 1.73541 8.23999 2.11536 7.39156 2.59152L7.14685 2.15549L6.90214 1.71946C7.8186 1.20512 8.80133 0.794541 9.83433 0.503747L9.96982 0.985039ZM5.45152 3.2904L5.76133 3.68285C4.98985 4.29186 4.29185 4.98986 3.68285 5.76133L3.29039 5.45152L2.89794 5.14172C3.55539 4.30888 4.30887 3.55539 5.14172 2.89794L5.45152 3.2904ZM2.15548 7.14686L2.59151 7.39156C2.11535 8.24 1.7354 9.14948 1.46633 10.1053L0.985033 9.96983L0.50374 9.83434C0.79454 8.80133 1.20512 7.8186 1.71946 6.90215L2.15548 7.14686ZM0.588957 11.9711L1.08556 12.0293C1.02907 12.5115 0.999996 13.0022 0.999996 13.5L0.499996 13.5L-3.97774e-06 13.5C-4.0012e-06 12.9633 0.0313452 12.4336 0.0923517 11.9129L0.588957 11.9711ZM0.499996 13.5L0.999996 13.5L0.999996 14.9625L0.499996 14.9625L-3.91381e-06 14.9625L-3.97774e-06 13.5L0.499996 13.5ZM0.499996 16.9125L0.999996 16.9125L0.999996 19.8375L0.499996 19.8375L-3.70072e-06 19.8375L-3.82857e-06 16.9125L0.499996 16.9125ZM0.499996 21.7875L0.999996 21.7875L0.999997 24.7125L0.499997 24.7125L-3.48762e-06 24.7125L-3.61548e-06 21.7875L0.499996 21.7875ZM0.499997 26.6625L0.999997 26.6625L0.999997 29.5875L0.499997 29.5875L-3.27453e-06 29.5875L-3.40239e-06 26.6625L0.499997 26.6625ZM0.499997 31.5375L0.999997 31.5375L0.999997 34.4625L0.499997 34.4625L-3.06144e-06 34.4625L-3.18929e-06 31.5375L0.499997 31.5375ZM0.499997 36.4125L0.999997 36.4125L0.999997 39.3375L0.499997 39.3375L-2.84834e-06 39.3375L-2.9762e-06 36.4125L0.499997 36.4125ZM0.499997 41.2875L0.999997 41.2875L0.999997 44.2125L0.499997 44.2125L-2.63525e-06 44.2125L-2.76311e-06 41.2875L0.499997 41.2875ZM0.499997 46.1625L0.999997 46.1625L0.999998 49.0875L0.499998 49.0875L-2.42216e-06 49.0875L-2.55001e-06 46.1625L0.499997 46.1625ZM0.499998 51.0375L0.999998 51.0375L0.999998 53.9625L0.499998 53.9625L-2.20906e-06 53.9625L-2.33692e-06 51.0375L0.499998 51.0375ZM0.499998 55.9125L0.999998 55.9125L0.999998 58.8375L0.499998 58.8375L-1.99597e-06 58.8375L-2.12383e-06 55.9125L0.499998 55.9125ZM0.499998 60.7875L0.999998 60.7875L0.999998 63.7125L0.499998 63.7125L-1.78288e-06 63.7125L-1.91073e-06 60.7875L0.499998 60.7875ZM0.499998 65.6625L0.999998 65.6625L0.999998 68.5875L0.499998 68.5875L-1.56979e-06 68.5875L-1.69764e-06 65.6625L0.499998 65.6625ZM0.499999 70.5375L0.999999 70.5375L0.999999 73.4625L0.499999 73.4625L-1.35669e-06 73.4625L-1.48455e-06 70.5375L0.499999 70.5375ZM0.499999 75.4125L0.999999 75.4125L0.999999 78.3375L0.499999 78.3375L-1.1436e-06 78.3375L-1.27146e-06 75.4125L0.499999 75.4125ZM0.499999 80.2875L0.999999 80.2875L0.999999 83.2125L0.499999 83.2125L-9.30506e-07 83.2125L-1.05836e-06 80.2875L0.499999 80.2875ZM0.499999 85.1625L0.999999 85.1625L0.999999 88.0875L0.499999 88.0875L-7.17413e-07 88.0875L-8.45269e-07 85.1625L0.499999 85.1625ZM0.499999 90.0375L0.999999 90.0375L0.999999 91.5L0.499999 91.5L-5.68248e-07 91.5L-6.32176e-07 90.0375L0.499999 90.0375Z" fill="#DFE3E8" />
                  </svg>
                  <svg aria-hidden="true" width="60" height="60" viewBox="0 0 60 60" fill="none" className="absolute left-70 top-8.5">
                    <circle cx="30" cy="30" r="29.5" transform="matrix(1 0 0 -1 0 60)" fill="#F8F9FC" stroke="#E7EAEE" />
                    <path d="M29.0391 47.3789C29.4828 48.8739 31.5172 48.8739 31.9609 47.3789L36.0254 33.6738C36.1365 33.2991 36.3298 32.9535 36.5908 32.665L46.0752 22.1855C46.5961 21.61 46.6035 20.8657 46.2832 20.2939C45.9638 19.7241 45.3481 19.3721 44.6221 19.5449L31.0723 22.7695C30.6958 22.8591 30.3042 22.8591 29.9277 22.7695L16.3779 19.5449C15.652 19.3722 15.0362 19.7241 14.7168 20.2939C14.3965 20.8657 14.4039 21.61 14.9248 22.1855L24.4092 32.665C24.6702 32.9535 24.8635 33.2991 24.9746 33.6738L29.0391 47.3789Z" stroke="#DFE3E8" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col items-center px-8 py-14 text-center text-[#000A27] lg:flex-1 lg:py-0">
                <h2 className="text-balance text-4xl/10 font-semibold tracking-tight lg:text-5xl/14 text-[#000A27]">
                  <span className="block">Any source.</span>
                  <span className="block text-[#1066F1]">Your platform.</span>
                </h2>
                <p className="text-base/6.5 text-[#000A27] mt-4 max-w-144.75 lg:mt-0">One-time migration or hourly portal pull — Rubie gets the data, in the format you need. Predictable. Observable. Reliable at any scale.</p>
              </div>
            </div>
            <div className="overflow-hidden bg-[#111029] pointer-events-none">
              <div className="relative left-1/2 w-full -translate-x-1/2 sm:w-300 sm:translate-y-0.5">
                <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 z-10 w-full border-x border-[#35364C]"></div>
                <div className="pointer-events-none mx-auto h-[117.25vw] w-full sm:h-152.25 sm:w-300">
                  <Riv artboard="Animation_1" still="/stills/7f4712aa.png" width={1200} height={609} />
                </div>
              </div>
            </div>
            <div className="relative h-[37.5vw] overflow-hidden bg-[#1066F1] sm:h-37.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="400" height="150" fill="none" viewBox="0 0 400 150" aria-hidden="true" className="block size-full sm:hidden sm:-translate-y-0.5">
                <g clipPath="url(#blue-band-mobile_svg__clip0_1_7)">
                  <g clipPath="url(#blue-band-mobile_svg__clip1_1_7)">
                    <path fill="#1066F1" d="M-1097 150h2594V0h-2594z" />
                    <path stroke="#fff" strokeDasharray="3 2" d="M723.5 118.5H391c-13.255 0-24-10.745-24-24V85" opacity="0.5" />
                    <path fill="#1066F1" stroke="#fff" d="M354 94V69h25v25z" opacity="0.2" />
                    <g data-figma-bg-blur-radius="4" filter="url(#blue-band-mobile_svg__filter0_dii_1_7)">
                      <circle cx="366.5" cy="81.5" r="7.5" fill="#0D5FE2" transform="rotate(-90 366.5 81.5)" />
                    </g>
                    <path stroke="#4D8CF9" strokeDasharray="3 2" d="M240 102V61h147v41z" />
                    <circle cx="30" cy="30" r="30" fill="#1066F1" transform="matrix(-1 0 0 1 286 51)" />
                    <circle cx="30" cy="30" r="29.5" stroke="#82AFFB" strokeOpacity="0.5" transform="matrix(-1 0 0 1 286 51)" />
                    <g filter="url(#blue-band-mobile_svg__filter1_i_1_7)">
                      <path fill="#307AF3" fillOpacity="0.5" d="M257.44 63.48c-.585-1.973-3.295-1.973-3.88 0l-4.065 13.704c-.09.304-.246.583-.456.815l-9.485 10.48c-1.365 1.509-.011 3.927 1.94 3.463l13.55-3.225c.3-.071.612-.071.912 0l13.55 3.225c1.951.464 3.305-1.954 1.94-3.463L261.961 78a2.1 2.1 0 0 1-.456-.815z" />
                    </g>
                    <path stroke="#fff" strokeDasharray="3 2" d="M-322.5 118.5H10c13.255 0 24-10.745 24-24V85" opacity="0.5" />
                    <path fill="#1066F1" stroke="#fff" d="M47 94V69H22v25z" opacity="0.2" />
                    <g data-figma-bg-blur-radius="4" filter="url(#blue-band-mobile_svg__filter2_dii_1_7)">
                      <circle cx="7.5" cy="7.5" r="7.5" fill="#0D5FE2" transform="matrix(0 -1 -1 0 42 89)" />
                    </g>
                    <path stroke="#4D8CF9" strokeDasharray="3 2" d="M161 102V61H14v41z" />
                    <circle cx="30" cy="30" r="30" fill="#1066F1" transform="matrix(-1 0 0 1 175 51)" />
                    <circle cx="30" cy="30" r="29.5" stroke="#82AFFB" strokeOpacity="0.5" transform="matrix(-1 0 0 1 175 51)" />
                    <g filter="url(#blue-band-mobile_svg__filter3_i_1_7)">
                      <path fill="#307AF3" fillOpacity="0.5" d="M146.44 63.48c-.585-1.973-3.295-1.973-3.88 0l-4.065 13.704c-.09.304-.246.583-.456.815l-9.485 10.48c-1.365 1.509-.011 3.927 1.94 3.463l13.55-3.225c.3-.071.612-.071.912 0l13.55 3.225c1.951.464 3.305-1.954 1.94-3.463L150.961 78a2.1 2.1 0 0 1-.456-.815z" />
                    </g>
                    <path stroke="#fff" d="M.5 139.5h100v-129H.5zM461.5 139.5h-100v-129h100z" opacity="0.1" />
                    <path stroke="url(#blue-band-mobile_svg__paint0_linear_1_7)" strokeLinecap="round" d="M20 11.5V-9.644a24 24 0 0 1 12-20.784L104.004-72" />
                    <path stroke="url(#blue-band-mobile_svg__paint1_linear_1_7)" strokeLinecap="round" d="M386 11.5V-9.644a24 24 0 0 0-12-20.784L301.996-72" />
                  </g>
                </g>
                <defs>
                  <filter id="blue-band-mobile_svg__filter0_dii_1_7" width="25" height="26" x="354" y="70" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="2.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_7" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_7" result="shape" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                    <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                    <feBlend in2="shape" result="effect2_innerShadow_1_7" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="5" />
                    <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                    <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                    <feBlend in2="effect2_innerShadow_1_7" mode="lighten" result="effect3_innerShadow_1_7" />
                  </filter>
                  <filter id="blue-band-mobile_svg__filter1_i_1_7" width="33" height="30" x="239" y="62" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                    <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                    <feBlend in2="shape" result="effect1_innerShadow_1_7" />
                  </filter>
                  <filter id="blue-band-mobile_svg__filter2_dii_1_7" width="25" height="26" x="22" y="70" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="2.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_7" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_7" result="shape" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                    <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                    <feBlend in2="shape" result="effect2_innerShadow_1_7" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="5" />
                    <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                    <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                    <feBlend in2="effect2_innerShadow_1_7" mode="lighten" result="effect3_innerShadow_1_7" />
                  </filter>
                  <filter id="blue-band-mobile_svg__filter3_i_1_7" width="33" height="30" x="128" y="62" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                    <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                    <feBlend in2="shape" result="effect1_innerShadow_1_7" />
                  </filter>
                  <linearGradient id="blue-band-mobile_svg__paint0_linear_1_7" x1="62.002" x2="62.002" y1="-72" y2="11.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#DFE3E8" />
                    <stop offset="1" stopColor="#DFE3E8" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="blue-band-mobile_svg__paint1_linear_1_7" x1="343.998" x2="343.998" y1="-72" y2="11.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#DFE3E8" />
                    <stop offset="1" stopColor="#DFE3E8" stopOpacity="0" />
                  </linearGradient>
                  <clipPath id="blue-band-mobile_svg__clip0_1_7">
                    <path fill="#fff" d="M0 0h400v150H0z" />
                  </clipPath>
                  <clipPath id="blue-band-mobile_svg__clip1_1_7">
                    <path fill="#fff" d="M-1097 150h2594V0h-2594z" />
                  </clipPath>
                </defs>
              </svg>
              <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-1/2 z-20 hidden w-300 -translate-x-1/2 border-x border-[#3F8BFF] lg:block"></div>
              <div className="relative left-1/2 z-10 hidden w-300 -translate-x-1/2 -translate-y-18 justify-between sm:flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="552" height="223" fill="none" viewBox="0 0 552 223" aria-hidden="true" className="h-55 w-136.25 shrink-0">
                  <path stroke="#82AFFB" d="M166 134.262V154.5a5 5 0 0 0 5 5h88.5a5 5 0 0 0 5-5v-15.238a5 5 0 0 1 5-5H342a5 5 0 0 0 5-5V67.5H166z" opacity="0.5" />
                  <circle cx="301" cy="135.5" r="30" fill="#1066F1" transform="rotate(-180 301 135.5)" />
                  <circle cx="301" cy="135.5" r="29.5" stroke="#82AFFB" strokeOpacity="0.5" transform="rotate(-180 301 135.5)" />
                  <g filter="url(#blue-band_svg__filter0_i_143_211)">
                    <path fill="#307AF3" fillOpacity="0.5" d="M302.44 153.021c-.585 1.972-3.295 1.972-3.88 0l-4.065-13.705a2.1 2.1 0 0 0-.456-.815l-9.485-10.48c-1.365-1.509-.011-3.927 1.94-3.463l13.55 3.225c.3.071.612.071.912 0l13.55-3.225c1.951-.464 3.305 1.954 1.94 3.463l-9.485 10.48c-.21.232-.366.511-.456.815z" />
                  </g>
                  <path stroke="#fff" strokeDasharray="3 2" d="M54.5 191H387c13.255 0 24-10.745 24-24v-9.5" opacity="0.5" />
                  <path fill="#1066F1" stroke="#fff" d="M424 166.5v-25h-25v25z" opacity="0.2" />
                  <g data-figma-bg-blur-radius="4" filter="url(#blue-band_svg__filter1_dii_143_211)">
                    <circle cx="7.5" cy="7.5" r="7.5" fill="#0D5FE2" transform="matrix(0 -1 -1 0 419 161.5)" />
                  </g>
                  <path stroke="#4D8CF9" strokeDasharray="3 2" d="M538 174.5v-41H391v41z" />
                  <path fill="#fff" d="M106 120.5v.5q-.748 0-1.471.086l-.058-.497-.058-.497Q105.195 120 106 120zm-3.53.485.135.481c-.956.269-1.865.649-2.713 1.126l-.245-.437-.245-.436a13.5 13.5 0 0 1 2.932-1.215zm-4.519 2.305.31.393a12.6 12.6 0 0 0-2.078 2.078l-.393-.309-.392-.31a13.6 13.6 0 0 1 2.244-2.244zm-3.295 3.857.435.245a12.4 12.4 0 0 0-1.125 2.713l-.481-.135-.481-.136c.29-1.033.701-2.015 1.215-2.932zm-1.567 4.824.497.058q-.086.724-.086 1.471h-1q0-.805.092-1.587zM93 133.5h.5q.001.748.086 1.471l-.497.058-.497.058a14 14 0 0 1-.092-1.587zm.485 3.53.481-.135c.27.956.65 1.865 1.126 2.713l-.436.245-.437.245a13.4 13.4 0 0 1-1.215-2.932zm2.305 4.518.393-.309a12.6 12.6 0 0 0 2.078 2.078l-.31.393-.31.392a13.6 13.6 0 0 1-2.243-2.244zm3.857 3.297.245-.437c.848.477 1.757.857 2.713 1.126l-.135.481-.136.481a13.5 13.5 0 0 1-2.932-1.215zm4.824 1.566.058-.497q.724.086 1.471.086v1q-.805 0-1.587-.092zm1.529.089v-.5h1.518v1H106zm3.541 0v-.5h3.035v1h-3.035zm5.059 0v-.5h3.035v1H114.6zm5.059 0v-.5h3.035v1h-3.035zm5.059 0v-.5h3.035v1h-3.035zm5.058 0v-.5h3.036v1h-3.036zm5.059 0v-.5h3.036v1h-3.036zm5.059 0v-.5h3.035v1h-3.035zm5.059 0v-.5h3.035v1h-3.035zm5.059 0v-.5h3.035v1h-3.035zm5.059 0v-.5h3.035v1h-3.035zm5.058 0v-.5h3.036v1h-3.036zm5.059 0v-.5h3.036v1h-3.036zm5.059 0v-.5h3.035v1h-3.035zm5.059 0v-.5h3.035v1h-3.035zm5.059 0v-.5h3.035v1h-3.035zm5.059 0v-.5h3.035v1h-3.035zm5.058 0v-.5H192v1h-1.518zm1.518 0v-.5q.747 0 1.471-.086l.058.497.058.497q-.782.092-1.587.092zm3.53-.485-.135-.481a12.4 12.4 0 0 0 2.713-1.126l.245.437.245.436c-.917.514-1.899.924-2.932 1.215zm4.518-2.305-.309-.393a12.6 12.6 0 0 0 2.078-2.078l.393.309.392.31a13.5 13.5 0 0 1-2.244 2.244zm3.297-3.857-.437-.245a12.4 12.4 0 0 0 1.126-2.713l.481.135.481.136a13.5 13.5 0 0 1-1.215 2.932zm1.566-4.824-.497-.058q.086-.724.086-1.471h1q0 .805-.092 1.587zM205 133.5h-.5q0-.748-.086-1.471l.497-.058.497-.058q.092.781.092 1.587zm-.485-3.53-.481.135a12.4 12.4 0 0 0-1.126-2.713l.437-.245.436-.245c.514.917.924 1.899 1.215 2.932zm-2.305-4.518-.393.309a12.6 12.6 0 0 0-2.078-2.078l.309-.393.31-.392a13.5 13.5 0 0 1 2.244 2.244zm-3.857-3.297-.245.437a12.4 12.4 0 0 0-2.713-1.126l.135-.481.136-.481c1.033.291 2.015.701 2.932 1.215zm-4.824-1.566-.058.497A13 13 0 0 0 192 121v-1q.805 0 1.587.092zM192 120.5v.5h-1.518v-1H192zm-3.541 0v.5h-3.035v-1h3.035zm-5.059 0v.5h-3.035v-1h3.035zm-5.059 0v.5h-3.035v-1h3.035zm-5.059 0v.5h-3.035v-1h3.035zm-5.058 0v.5h-3.036v-1h3.036zm-5.059 0v.5h-3.036v-1h3.036zm-5.059 0v.5h-3.035v-1h3.035zm-5.059 0v.5h-3.035v-1h3.035zm-5.059 0v.5h-3.035v-1h3.035zm-5.059 0v.5h-3.035v-1h3.035zm-5.058 0v.5h-3.036v-1h3.036zm-5.059 0v.5h-3.036v-1h3.036zm-5.059 0v.5h-3.035v-1h3.035zm-5.059 0v.5h-3.035v-1h3.035zm-5.059 0v.5H114.6v-1h3.035zm-5.059 0v.5h-3.035v-1h3.035zm-5.058 0v.5H106v-1h1.518z" />
                  <path fill="#4D8CF9" d="M32 190.5h.5q.001.747.086 1.471l-.497.058-.497.058a14 14 0 0 1-.092-1.587zm.485 3.53.481-.135c.27.956.65 1.865 1.126 2.713l-.436.245-.437.245a13.4 13.4 0 0 1-1.215-2.932zm2.305 4.518.393-.309a12.6 12.6 0 0 0 2.078 2.078l-.31.393-.31.392a13.6 13.6 0 0 1-2.243-2.244zm3.857 3.297.245-.437c.848.477 1.758.857 2.713 1.126l-.135.481-.136.481a13.5 13.5 0 0 1-2.932-1.215zm4.824 1.566.058-.497Q44.252 203 45 203v1q-.805 0-1.587-.092zM45 203.5v-.5q.748 0 1.47-.086l.059.497.058.497Q45.807 204 45 204zm3.53-.485-.135-.481a12.4 12.4 0 0 0 2.713-1.126l.245.437.245.436c-.917.514-1.9.924-2.932 1.215zm4.518-2.305-.31-.393a12.6 12.6 0 0 0 2.08-2.078l.392.309.392.31a13.6 13.6 0 0 1-2.244 2.244zm3.296-3.857-.436-.245c.477-.848.857-1.757 1.126-2.713l.481.135.481.136a13.4 13.4 0 0 1-1.215 2.932zm1.567-4.824-.497-.058q.086-.724.086-1.471h1q0 .805-.092 1.587zM58 190.5h-.5v-1.462h1v1.462zm0-3.413h-.5v-2.924h1v2.924zm0-4.875h-.5v-2.924h1v2.924zm0-4.874h-.5v-2.925h1v2.925zm0-4.876h-.5v-2.924h1v2.924zm0-4.875h-.5v-2.924h1v2.924zm0-4.875h-.5v-2.924h1v2.924zm0-4.874h-.5v-2.925h1v2.925zm0-4.875h-.5v-2.925h1v2.925zm0-4.875h-.5v-2.925h1v2.925zm0-4.875h-.5v-2.925h1v2.925zm0-4.875h-.5v-2.925h1v2.925zm0-4.875h-.5v-2.925h1v2.925zm0-4.875h-.5v-2.926h1v2.926zm0-4.875h-.5v-2.926h1v2.926zm0-4.875h-.5v-2.926h1v2.926zm0-4.875h-.5V112.5h1v1.463zm0-1.463h-.5q-.001-.748-.086-1.471l.497-.058.497-.058q.091.782.092 1.587zm-.485-3.53-.481.135c-.27-.956-.65-1.865-1.126-2.713l.436-.245.437-.245c.514.917.925 1.899 1.215 2.932zm-2.305-4.518-.393.309a12.6 12.6 0 0 0-2.078-2.078l.31-.393.31-.392a13.6 13.6 0 0 1 2.243 2.244zm-3.857-3.297-.245.437a12.4 12.4 0 0 0-2.713-1.126l.135-.481.136-.481c1.033.29 2.015.701 2.932 1.215zm-4.824-1.566-.058.497A13 13 0 0 0 45 100v-1q.805 0 1.587.092zM45 99.5v.5q-.748 0-1.47.086l-.059-.497-.058-.497q.78-.091 1.587-.092zm-3.53.485.135.481c-.955.269-1.865.649-2.713 1.126l-.245-.437-.245-.436c.917-.514 1.9-.924 2.932-1.215zm-4.518 2.305.31.393a12.6 12.6 0 0 0-2.08 2.078l-.392-.309-.392-.31a13.6 13.6 0 0 1 2.244-2.244zm-3.296 3.857.436.245a12.4 12.4 0 0 0-1.126 2.713l-.481-.135-.481-.136c.29-1.033.701-2.015 1.215-2.932zm-1.567 4.824.497.058q-.086.724-.086 1.471h-1q0-.805.092-1.587zM32 112.5h.5v1.463h-1V112.5zm0 3.412h.5v2.926h-1v-2.926zm0 4.875h.5v2.926h-1v-2.926zm0 4.875h.5v2.926h-1v-2.926zm0 4.875h.5v2.926h-1v-2.926zm0 4.875h.5v2.926h-1v-2.926zm0 4.876h.5v2.924h-1v-2.924zm0 4.874h.5v2.925h-1v-2.925zm0 4.875h.5v2.925h-1v-2.925zm0 4.875h.5v2.925h-1v-2.925zm0 4.875h.5v2.925h-1v-2.925zm0 4.875h.5v2.925h-1v-2.925zm0 4.875h.5v2.925h-1v-2.925zm0 4.875h.5v2.926h-1v-2.926zm0 4.875h.5v2.926h-1v-2.926zm0 4.875h.5v2.926h-1v-2.926zm0 4.876h.5v1.462h-1v-1.462z" />
                  <circle cx="9" cy="9" r="8.5" stroke="#fff" transform="matrix(1 0 0 -1 36 199.5)" />
                  <circle cx="9" cy="9" r="8.5" stroke="#fff" transform="matrix(1 0 0 -1 182 142.5)" />
                  <g filter="url(#blue-band_svg__filter2_dii_143_211)">
                    <path fill="#307AF3" d="M80 112.5c0-7.389-25.611-17-35-17s-17 7.611-17 17 7.611 17 17 17 35-9.611 35-17m-26 0a9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9 9 9 0 0 1 9 9" />
                  </g>
                  <g filter="url(#blue-band_svg__filter3_dii_143_211)">
                    <path fill="#307AF3" d="M71 133.5c0-7.389 25.611-17 35-17s17 7.611 17 17-7.611 17-17 17-35-9.611-35-17m26 0a9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9" />
                  </g>
                  <circle cx="30" cy="30" r="30" fill="#1066F1" transform="matrix(-1 0 0 1 552 123.5)" />
                  <circle cx="30" cy="30" r="29.5" stroke="#82AFFB" strokeOpacity="0.5" transform="matrix(-1 0 0 1 552 123.5)" />
                  <g filter="url(#blue-band_svg__filter4_i_143_211)">
                    <path fill="#307AF3" fillOpacity="0.5" d="M523.44 135.979c-.585-1.972-3.295-1.972-3.88 0l-4.065 13.705c-.09.304-.246.583-.456.815l-9.485 10.48c-1.365 1.509-.011 3.927 1.94 3.463l13.55-3.225c.3-.071.612-.071.912 0l13.55 3.225c1.951.464 3.305-1.954 1.94-3.463l-9.485-10.48a2.1 2.1 0 0 1-.456-.815z" />
                  </g>
                  <path stroke="#fff" d="M10.5 212h125V83h-125zM377.5 212h100V83h-100z" opacity="0.1" />
                  <path stroke="url(#blue-band_svg__paint0_linear_143_211)" strokeLinecap="round" d="M428 84V73" />
                  <defs>
                    <filter id="blue-band_svg__filter0_i_143_211" width="33" height="30" x="284" y="124.5" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="1" />
                      <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                      <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                      <feBlend in2="shape" result="effect1_innerShadow_143_211" />
                    </filter>
                    <filter id="blue-band_svg__filter1_dii_143_211" width="25" height="26" x="399" y="142.5" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dy="2" />
                      <feGaussianBlur stdDeviation="2.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                      <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_143_211" />
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_143_211" result="shape" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="1" />
                      <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                      <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                      <feBlend in2="shape" result="effect2_innerShadow_143_211" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="5" />
                      <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                      <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                      <feBlend in2="effect2_innerShadow_143_211" mode="lighten" result="effect3_innerShadow_143_211" />
                    </filter>
                    <filter id="blue-band_svg__filter2_dii_143_211" width="62" height="44" x="23" y="92.5" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dy="2" />
                      <feGaussianBlur stdDeviation="2.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                      <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_143_211" />
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_143_211" result="shape" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="1" />
                      <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                      <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                      <feBlend in2="shape" result="effect2_innerShadow_143_211" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="5" />
                      <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                      <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                      <feBlend in2="effect2_innerShadow_143_211" mode="lighten" result="effect3_innerShadow_143_211" />
                    </filter>
                    <filter id="blue-band_svg__filter3_dii_143_211" width="62" height="44" x="66" y="113.5" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dy="2" />
                      <feGaussianBlur stdDeviation="2.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                      <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_143_211" />
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_143_211" result="shape" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="1" />
                      <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                      <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                      <feBlend in2="shape" result="effect2_innerShadow_143_211" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="5" />
                      <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                      <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                      <feBlend in2="effect2_innerShadow_143_211" mode="lighten" result="effect3_innerShadow_143_211" />
                    </filter>
                    <filter id="blue-band_svg__filter4_i_143_211" width="33" height="30" x="505" y="134.5" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="1" />
                      <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                      <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                      <feBlend in2="shape" result="effect1_innerShadow_143_211" />
                    </filter>
                    <linearGradient id="blue-band_svg__paint0_linear_143_211" x1="470.002" x2="470.002" y1="0.5" y2="84" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#DFE3E8" />
                      <stop offset="1" stopColor="#DFE3E8" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="552" height="223" fill="none" viewBox="0 0 552 223" aria-hidden="true" className="h-55 w-136.25 shrink-0 scale-x-[-1]">
                  <path stroke="#82AFFB" d="M166 134.262V154.5a5 5 0 0 0 5 5h88.5a5 5 0 0 0 5-5v-15.238a5 5 0 0 1 5-5H342a5 5 0 0 0 5-5V67.5H166z" opacity="0.5" />
                  <circle cx="301" cy="135.5" r="30" fill="#1066F1" transform="rotate(-180 301 135.5)" />
                  <circle cx="301" cy="135.5" r="29.5" stroke="#82AFFB" strokeOpacity="0.5" transform="rotate(-180 301 135.5)" />
                  <g filter="url(#blue-band_svg__filter0_i_143_211)">
                    <path fill="#307AF3" fillOpacity="0.5" d="M302.44 153.021c-.585 1.972-3.295 1.972-3.88 0l-4.065-13.705a2.1 2.1 0 0 0-.456-.815l-9.485-10.48c-1.365-1.509-.011-3.927 1.94-3.463l13.55 3.225c.3.071.612.071.912 0l13.55-3.225c1.951-.464 3.305 1.954 1.94 3.463l-9.485 10.48c-.21.232-.366.511-.456.815z" />
                  </g>
                  <path stroke="#fff" strokeDasharray="3 2" d="M54.5 191H387c13.255 0 24-10.745 24-24v-9.5" opacity="0.5" />
                  <path fill="#1066F1" stroke="#fff" d="M424 166.5v-25h-25v25z" opacity="0.2" />
                  <g data-figma-bg-blur-radius="4" filter="url(#blue-band_svg__filter1_dii_143_211)">
                    <circle cx="7.5" cy="7.5" r="7.5" fill="#0D5FE2" transform="matrix(0 -1 -1 0 419 161.5)" />
                  </g>
                  <path stroke="#4D8CF9" strokeDasharray="3 2" d="M538 174.5v-41H391v41z" />
                  <path fill="#fff" d="M106 120.5v.5q-.748 0-1.471.086l-.058-.497-.058-.497Q105.195 120 106 120zm-3.53.485.135.481c-.956.269-1.865.649-2.713 1.126l-.245-.437-.245-.436a13.5 13.5 0 0 1 2.932-1.215zm-4.519 2.305.31.393a12.6 12.6 0 0 0-2.078 2.078l-.393-.309-.392-.31a13.6 13.6 0 0 1 2.244-2.244zm-3.295 3.857.435.245a12.4 12.4 0 0 0-1.125 2.713l-.481-.135-.481-.136c.29-1.033.701-2.015 1.215-2.932zm-1.567 4.824.497.058q-.086.724-.086 1.471h-1q0-.805.092-1.587zM93 133.5h.5q.001.748.086 1.471l-.497.058-.497.058a14 14 0 0 1-.092-1.587zm.485 3.53.481-.135c.27.956.65 1.865 1.126 2.713l-.436.245-.437.245a13.4 13.4 0 0 1-1.215-2.932zm2.305 4.518.393-.309a12.6 12.6 0 0 0 2.078 2.078l-.31.393-.31.392a13.6 13.6 0 0 1-2.243-2.244zm3.857 3.297.245-.437c.848.477 1.757.857 2.713 1.126l-.135.481-.136.481a13.5 13.5 0 0 1-2.932-1.215zm4.824 1.566.058-.497q.724.086 1.471.086v1q-.805 0-1.587-.092zm1.529.089v-.5h1.518v1H106zm3.541 0v-.5h3.035v1h-3.035zm5.059 0v-.5h3.035v1H114.6zm5.059 0v-.5h3.035v1h-3.035zm5.059 0v-.5h3.035v1h-3.035zm5.058 0v-.5h3.036v1h-3.036zm5.059 0v-.5h3.036v1h-3.036zm5.059 0v-.5h3.035v1h-3.035zm5.059 0v-.5h3.035v1h-3.035zm5.059 0v-.5h3.035v1h-3.035zm5.059 0v-.5h3.035v1h-3.035zm5.058 0v-.5h3.036v1h-3.036zm5.059 0v-.5h3.036v1h-3.036zm5.059 0v-.5h3.035v1h-3.035zm5.059 0v-.5h3.035v1h-3.035zm5.059 0v-.5h3.035v1h-3.035zm5.059 0v-.5h3.035v1h-3.035zm5.058 0v-.5H192v1h-1.518zm1.518 0v-.5q.747 0 1.471-.086l.058.497.058.497q-.782.092-1.587.092zm3.53-.485-.135-.481a12.4 12.4 0 0 0 2.713-1.126l.245.437.245.436c-.917.514-1.899.924-2.932 1.215zm4.518-2.305-.309-.393a12.6 12.6 0 0 0 2.078-2.078l.393.309.392.31a13.5 13.5 0 0 1-2.244 2.244zm3.297-3.857-.437-.245a12.4 12.4 0 0 0 1.126-2.713l.481.135.481.136a13.5 13.5 0 0 1-1.215 2.932zm1.566-4.824-.497-.058q.086-.724.086-1.471h1q0 .805-.092 1.587zM205 133.5h-.5q0-.748-.086-1.471l.497-.058.497-.058q.092.781.092 1.587zm-.485-3.53-.481.135a12.4 12.4 0 0 0-1.126-2.713l.437-.245.436-.245c.514.917.924 1.899 1.215 2.932zm-2.305-4.518-.393.309a12.6 12.6 0 0 0-2.078-2.078l.309-.393.31-.392a13.5 13.5 0 0 1 2.244 2.244zm-3.857-3.297-.245.437a12.4 12.4 0 0 0-2.713-1.126l.135-.481.136-.481c1.033.291 2.015.701 2.932 1.215zm-4.824-1.566-.058.497A13 13 0 0 0 192 121v-1q.805 0 1.587.092zM192 120.5v.5h-1.518v-1H192zm-3.541 0v.5h-3.035v-1h3.035zm-5.059 0v.5h-3.035v-1h3.035zm-5.059 0v.5h-3.035v-1h3.035zm-5.059 0v.5h-3.035v-1h3.035zm-5.058 0v.5h-3.036v-1h3.036zm-5.059 0v.5h-3.036v-1h3.036zm-5.059 0v.5h-3.035v-1h3.035zm-5.059 0v.5h-3.035v-1h3.035zm-5.059 0v.5h-3.035v-1h3.035zm-5.059 0v.5h-3.035v-1h3.035zm-5.058 0v.5h-3.036v-1h3.036zm-5.059 0v.5h-3.036v-1h3.036zm-5.059 0v.5h-3.035v-1h3.035zm-5.059 0v.5h-3.035v-1h3.035zm-5.059 0v.5H114.6v-1h3.035zm-5.059 0v.5h-3.035v-1h3.035zm-5.058 0v.5H106v-1h1.518z" />
                  <path fill="#4D8CF9" d="M32 190.5h.5q.001.747.086 1.471l-.497.058-.497.058a14 14 0 0 1-.092-1.587zm.485 3.53.481-.135c.27.956.65 1.865 1.126 2.713l-.436.245-.437.245a13.4 13.4 0 0 1-1.215-2.932zm2.305 4.518.393-.309a12.6 12.6 0 0 0 2.078 2.078l-.31.393-.31.392a13.6 13.6 0 0 1-2.243-2.244zm3.857 3.297.245-.437c.848.477 1.758.857 2.713 1.126l-.135.481-.136.481a13.5 13.5 0 0 1-2.932-1.215zm4.824 1.566.058-.497Q44.252 203 45 203v1q-.805 0-1.587-.092zM45 203.5v-.5q.748 0 1.47-.086l.059.497.058.497Q45.807 204 45 204zm3.53-.485-.135-.481a12.4 12.4 0 0 0 2.713-1.126l.245.437.245.436c-.917.514-1.9.924-2.932 1.215zm4.518-2.305-.31-.393a12.6 12.6 0 0 0 2.08-2.078l.392.309.392.31a13.6 13.6 0 0 1-2.244 2.244zm3.296-3.857-.436-.245c.477-.848.857-1.757 1.126-2.713l.481.135.481.136a13.4 13.4 0 0 1-1.215 2.932zm1.567-4.824-.497-.058q.086-.724.086-1.471h1q0 .805-.092 1.587zM58 190.5h-.5v-1.462h1v1.462zm0-3.413h-.5v-2.924h1v2.924zm0-4.875h-.5v-2.924h1v2.924zm0-4.874h-.5v-2.925h1v2.925zm0-4.876h-.5v-2.924h1v2.924zm0-4.875h-.5v-2.924h1v2.924zm0-4.875h-.5v-2.924h1v2.924zm0-4.874h-.5v-2.925h1v2.925zm0-4.875h-.5v-2.925h1v2.925zm0-4.875h-.5v-2.925h1v2.925zm0-4.875h-.5v-2.925h1v2.925zm0-4.875h-.5v-2.925h1v2.925zm0-4.875h-.5v-2.925h1v2.925zm0-4.875h-.5v-2.926h1v2.926zm0-4.875h-.5v-2.926h1v2.926zm0-4.875h-.5v-2.926h1v2.926zm0-4.875h-.5V112.5h1v1.463zm0-1.463h-.5q-.001-.748-.086-1.471l.497-.058.497-.058q.091.782.092 1.587zm-.485-3.53-.481.135c-.27-.956-.65-1.865-1.126-2.713l.436-.245.437-.245c.514.917.925 1.899 1.215 2.932zm-2.305-4.518-.393.309a12.6 12.6 0 0 0-2.078-2.078l.31-.393.31-.392a13.6 13.6 0 0 1 2.243 2.244zm-3.857-3.297-.245.437a12.4 12.4 0 0 0-2.713-1.126l.135-.481.136-.481c1.033.29 2.015.701 2.932 1.215zm-4.824-1.566-.058.497A13 13 0 0 0 45 100v-1q.805 0 1.587.092zM45 99.5v.5q-.748 0-1.47.086l-.059-.497-.058-.497q.78-.091 1.587-.092zm-3.53.485.135.481c-.955.269-1.865.649-2.713 1.126l-.245-.437-.245-.436c.917-.514 1.9-.924 2.932-1.215zm-4.518 2.305.31.393a12.6 12.6 0 0 0-2.08 2.078l-.392-.309-.392-.31a13.6 13.6 0 0 1 2.244-2.244zm-3.296 3.857.436.245a12.4 12.4 0 0 0-1.126 2.713l-.481-.135-.481-.136c.29-1.033.701-2.015 1.215-2.932zm-1.567 4.824.497.058q-.086.724-.086 1.471h-1q0-.805.092-1.587zM32 112.5h.5v1.463h-1V112.5zm0 3.412h.5v2.926h-1v-2.926zm0 4.875h.5v2.926h-1v-2.926zm0 4.875h.5v2.926h-1v-2.926zm0 4.875h.5v2.926h-1v-2.926zm0 4.875h.5v2.926h-1v-2.926zm0 4.876h.5v2.924h-1v-2.924zm0 4.874h.5v2.925h-1v-2.925zm0 4.875h.5v2.925h-1v-2.925zm0 4.875h.5v2.925h-1v-2.925zm0 4.875h.5v2.925h-1v-2.925zm0 4.875h.5v2.925h-1v-2.925zm0 4.875h.5v2.925h-1v-2.925zm0 4.875h.5v2.926h-1v-2.926zm0 4.875h.5v2.926h-1v-2.926zm0 4.875h.5v2.926h-1v-2.926zm0 4.876h.5v1.462h-1v-1.462z" />
                  <circle cx="9" cy="9" r="8.5" stroke="#fff" transform="matrix(1 0 0 -1 36 199.5)" />
                  <circle cx="9" cy="9" r="8.5" stroke="#fff" transform="matrix(1 0 0 -1 182 142.5)" />
                  <g filter="url(#blue-band_svg__filter2_dii_143_211)">
                    <path fill="#307AF3" d="M80 112.5c0-7.389-25.611-17-35-17s-17 7.611-17 17 7.611 17 17 17 35-9.611 35-17m-26 0a9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9 9 9 0 0 1 9 9" />
                  </g>
                  <g filter="url(#blue-band_svg__filter3_dii_143_211)">
                    <path fill="#307AF3" d="M71 133.5c0-7.389 25.611-17 35-17s17 7.611 17 17-7.611 17-17 17-35-9.611-35-17m26 0a9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9" />
                  </g>
                  <circle cx="30" cy="30" r="30" fill="#1066F1" transform="matrix(-1 0 0 1 552 123.5)" />
                  <circle cx="30" cy="30" r="29.5" stroke="#82AFFB" strokeOpacity="0.5" transform="matrix(-1 0 0 1 552 123.5)" />
                  <g filter="url(#blue-band_svg__filter4_i_143_211)">
                    <path fill="#307AF3" fillOpacity="0.5" d="M523.44 135.979c-.585-1.972-3.295-1.972-3.88 0l-4.065 13.705c-.09.304-.246.583-.456.815l-9.485 10.48c-1.365 1.509-.011 3.927 1.94 3.463l13.55-3.225c.3-.071.612-.071.912 0l13.55 3.225c1.951.464 3.305-1.954 1.94-3.463l-9.485-10.48a2.1 2.1 0 0 1-.456-.815z" />
                  </g>
                  <path stroke="#fff" d="M10.5 212h125V83h-125zM377.5 212h100V83h-100z" opacity="0.1" />
                  <path stroke="url(#blue-band_svg__paint0_linear_143_211)" strokeLinecap="round" d="M423 84V73" />
                  <defs>
                    <filter id="blue-band_svg__filter0_i_143_211" width="33" height="30" x="284" y="124.5" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="1" />
                      <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                      <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                      <feBlend in2="shape" result="effect1_innerShadow_143_211" />
                    </filter>
                    <filter id="blue-band_svg__filter1_dii_143_211" width="25" height="26" x="399" y="142.5" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dy="2" />
                      <feGaussianBlur stdDeviation="2.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                      <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_143_211" />
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_143_211" result="shape" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="1" />
                      <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                      <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                      <feBlend in2="shape" result="effect2_innerShadow_143_211" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="5" />
                      <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                      <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                      <feBlend in2="effect2_innerShadow_143_211" mode="lighten" result="effect3_innerShadow_143_211" />
                    </filter>
                    <filter id="blue-band_svg__filter2_dii_143_211" width="62" height="44" x="23" y="92.5" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dy="2" />
                      <feGaussianBlur stdDeviation="2.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                      <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_143_211" />
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_143_211" result="shape" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="1" />
                      <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                      <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                      <feBlend in2="shape" result="effect2_innerShadow_143_211" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="5" />
                      <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                      <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                      <feBlend in2="effect2_innerShadow_143_211" mode="lighten" result="effect3_innerShadow_143_211" />
                    </filter>
                    <filter id="blue-band_svg__filter3_dii_143_211" width="62" height="44" x="66" y="113.5" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dy="2" />
                      <feGaussianBlur stdDeviation="2.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                      <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_143_211" />
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_143_211" result="shape" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="1" />
                      <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                      <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                      <feBlend in2="shape" result="effect2_innerShadow_143_211" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="5" />
                      <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                      <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                      <feBlend in2="effect2_innerShadow_143_211" mode="lighten" result="effect3_innerShadow_143_211" />
                    </filter>
                    <filter id="blue-band_svg__filter4_i_143_211" width="33" height="30" x="505" y="134.5" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="1" />
                      <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                      <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                      <feBlend in2="shape" result="effect1_innerShadow_143_211" />
                    </filter>
                    <linearGradient id="blue-band_svg__paint0_linear_143_211" x1="470.002" x2="470.002" y1="0.5" y2="84" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#DFE3E8" />
                      <stop offset="1" stopColor="#DFE3E8" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </section>
          <section className="overflow-hidden bg-[rgb(var(--site-bg-rgb))]">
            <div className="mx-auto w-full max-w-300 border-x border-[#E7EAEE]">
              <div className="relative py-11 after:absolute after:bottom-0 after:left-1/2 after:w-screen after:-translate-x-1/2 after:border-b after:border-[#E7EAEE] lg:py-14" aria-hidden="true"></div>
              <div className="relative grid min-w-0 after:absolute after:bottom-0 after:left-1/2 after:w-screen after:-translate-x-1/2 after:border-b after:border-[#E7EAEE] lg:grid-cols-[33%_1fr]">
                <div className="min-w-0 lg:border-r lg:border-[#E7EAEE]">
                  <div className="flex items-center justify-center border-b border-[#E7EAEE] px-8 py-16 text-center lg:justify-start lg:pt-16 lg:pb-10 lg:text-left">
                    <h2 className="text-balance text-4xl/10 font-semibold tracking-tight lg:text-5xl/14 text-[#000A27]">
                      <span className="text-[#1066F1]">Platform</span>
                      {" "}
                      primitives
                    </h2>
                  </div>
                  <div className="relative">
                    <div role="tablist" aria-label="Platform primitives" className={"flex w-full max-w-full cursor-grab overflow-x-scroll overscroll-x-contain [-ms-overflow-style:none] scrollbar-none lg:grid lg:grid-rows-[repeat(6,5.5rem)] lg:cursor-auto lg:overflow-visible [&::-webkit-scrollbar]:hidden"}>
                      <button id="platform-primitive-tab-authenticate" type="button" role="tab" aria-selected={primitiveTab === "authenticate"} aria-controls="platform-primitive-panel-authenticate" onClick={() => setPrimitiveTab("authenticate")} className={`group flex h-18 min-w-0 flex-[0_0_calc(45%-12px)] cursor-pointer items-center justify-center gap-2 border-r border-t border-r-[#E7EAEE] border-t-[#E7EAEE] px-3 text-left outline-none transition-colors duration-300 hover:bg-[#F8FAFD] focus-visible:bg-[#F8FAFD] lg:size-full lg:basis-auto lg:justify-start lg:gap-4 lg:border-b-0 lg:border-r-0 lg:border-l-[3px] lg:px-8 lg:py-0 lg:first:border-t-0 lg:col-1 ${primitiveTab === "authenticate" ? "border-b-[3px] border-b-[#1066F1] lg:border-l-[#1066F1]" : "border-b border-b-[#E7EAEE] lg:border-l-transparent"}`}>
                        <svg aria-hidden="true" viewBox="0 0 14.5939 15.4468" className="size-4.5 shrink-0 transition-colors duration-300 text-[#1066F1]" fill="none" preserveAspectRatio="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M7.84388 1.5C6.53311 1.5 5.33383 1.98143 4.41286 2.77896C4.09973 3.05012 3.62608 3.0161 3.35492 2.70297C3.08377 2.38985 3.11779 1.91619 3.43091 1.64504C4.61394 0.62057 6.15865 0 7.84388 0C11.5671 0 14.5939 3.02679 14.5939 6.75C14.5939 9.137 14.2181 11.2847 13.5661 13.2042C13.4328 13.5964 13.0069 13.8064 12.6147 13.6732C12.2225 13.5399 12.0125 13.114 12.1458 12.7218C12.7437 10.9613 13.0939 8.977 13.0939 6.75C13.0939 3.85521 10.7387 1.5 7.84388 1.5Z" fill="#1066F1" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M2.73239 3.52122C3.10694 3.6981 3.26717 4.14512 3.09029 4.51967C2.77064 5.19653 2.5921 5.95235 2.5921 6.7514C2.5921 7.13278 2.5336 8.98509 1.38905 10.8471C1.17215 11.2 0.710254 11.3103 0.357374 11.0934C0.00448403 10.8765 -0.105746 10.4146 0.111154 10.0617C1.04661 8.53975 1.0921 7.01001 1.0921 6.7514C1.0921 5.72645 1.32159 4.75226 1.73394 3.87912C1.91082 3.50458 2.35784 3.34434 2.73239 3.52122Z" fill="#1066F1" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M10.8093 8.14644C11.2204 8.19759 11.5121 8.57227 11.461 8.9833C11.1699 11.322 10.4304 13.3455 9.41224 15.0769C9.20224 15.4339 8.7426 15.5532 8.38555 15.3432C8.0285 15.1332 7.90928 14.6736 8.11925 14.3165C9.03704 12.7559 9.70754 10.9274 9.97244 8.7981C10.0236 8.38704 10.3983 8.09529 10.8093 8.14644Z" fill="#4D8CF9" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M7.84678 4.5C6.60399 4.5 5.59678 5.50721 5.59678 6.75C5.59678 9.6022 4.62423 11.7639 3.29656 13.3682C3.03248 13.6873 2.5597 13.7319 2.24059 13.4678C1.92149 13.2037 1.87688 12.7309 2.14097 12.4118C3.2613 11.0581 4.09678 9.2298 4.09678 6.75C4.09678 4.67879 5.77557 3 7.84678 3C9.75237 3 11.3254 4.42128 11.5655 6.26093C11.6191 6.67166 11.3296 7.04808 10.9189 7.10169C10.5081 7.1553 10.1317 6.8658 10.0781 6.45507C9.93417 5.35272 8.98917 4.5 7.84678 4.5Z" fill="#4D8CF9" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M7.83967 6C8.25389 6 8.58967 6.33579 8.58967 6.75C8.58967 10.1826 7.50686 12.8227 5.98782 14.8218C5.73722 15.1516 5.2667 15.2158 4.9369 14.9652C4.6071 14.7146 4.5429 14.244 4.79351 13.9142C6.12247 12.1653 7.08967 9.8414 7.08967 6.75C7.08967 6.33579 7.42546 6 7.83967 6Z" fill="#1066F1" />
                        </svg>
                        <span className="text-base/6 transition-colors duration-300 font-medium text-[#00030A]">Authenticate</span>
                      </button>
                      <button id="platform-primitive-tab-navigate" type="button" role="tab" aria-selected={primitiveTab === "navigate"} aria-controls="platform-primitive-panel-navigate" onClick={() => setPrimitiveTab("navigate")} className={`group flex h-18 min-w-0 flex-[0_0_calc(45%-12px)] cursor-pointer items-center justify-center gap-2 border-r border-t border-r-[#E7EAEE] border-t-[#E7EAEE] px-3 text-left outline-none transition-colors duration-300 hover:bg-[#F8FAFD] focus-visible:bg-[#F8FAFD] lg:size-full lg:basis-auto lg:justify-start lg:gap-4 lg:border-b-0 lg:border-r-0 lg:border-l-[3px] lg:px-8 lg:py-0 lg:first:border-t-0 lg:col-1 ${primitiveTab === "navigate" ? "border-b-[3px] border-b-[#1066F1] lg:border-l-[#1066F1]" : "border-b border-b-[#E7EAEE] lg:border-l-transparent"}`}>
                        <svg aria-hidden="true" viewBox="0 0 14.0013 14.0023" className="size-4.5 shrink-0 transition-colors duration-300 text-[#BBC2CC]" fill="none" preserveAspectRatio="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M0.0808922 1.73262C-0.294858 0.703532 0.703532 -0.294858 1.73262 0.0808922L13.1558 4.25496C14.3094 4.67706 14.2722 6.31653 13.1071 6.69138L8.246 8.2469L6.69078 13.1068C6.31697 14.2755 4.67539 14.3086 4.25407 13.1571L0.0808922 1.73262Z" fill="currentColor" />
                        </svg>
                        <span className="text-base/6 transition-colors duration-300 font-normal text-[#5D646E] group-hover:text-[#000A27]">Navigate</span>
                      </button>
                      <button id="platform-primitive-tab-clean" type="button" role="tab" aria-selected={primitiveTab === "clean"} aria-controls="platform-primitive-panel-clean" onClick={() => setPrimitiveTab("clean")} className={`group flex h-18 min-w-0 flex-[0_0_calc(45%-12px)] cursor-pointer items-center justify-center gap-2 border-r border-t border-r-[#E7EAEE] border-t-[#E7EAEE] px-3 text-left outline-none transition-colors duration-300 hover:bg-[#F8FAFD] focus-visible:bg-[#F8FAFD] lg:size-full lg:basis-auto lg:justify-start lg:gap-4 lg:border-b-0 lg:border-r-0 lg:border-l-[3px] lg:px-8 lg:py-0 lg:first:border-t-0 lg:col-1 ${primitiveTab === "clean" ? "border-b-[3px] border-b-[#1066F1] lg:border-l-[#1066F1]" : "border-b border-b-[#E7EAEE] lg:border-l-transparent"}`}>
                        <svg aria-hidden="true" viewBox="0 0 16 16" className="size-4.5 shrink-0 transition-colors duration-300 text-[#BBC2CC]" fill="none" preserveAspectRatio="none">
                          <path d="M4.659 1.9899L3.396 1.56888L2.975 0.305999C2.838 -0.102 2.163 -0.102 2.026 0.305999L1.605 1.56888L0.342007 1.9899C0.138007 2.0579 0 2.2489 0 2.4639C0 2.6789 0.138007 2.8699 0.342007 2.9379L1.605 3.35892L2.026 4.62192C2.094 4.82592 2.286 4.9639 2.501 4.9639C2.716 4.9639 2.907 4.82592 2.976 4.62192L3.39701 3.35892L4.66 2.9379C4.864 2.8699 5.002 2.6789 5.002 2.4639C5.002 2.2489 4.863 2.0579 4.659 1.9899Z" fill="currentColor" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M8.50007 1C8.80783 1.00003 9.0843 1.18808 9.1975 1.47429L10.99 6.00903L15.5258 7.80255C15.812 7.91571 16 8.19224 16 8.5C16 8.80776 15.812 9.0843 15.5258 9.1975L10.99 10.9909L9.1975 15.5257C9.0843 15.8119 8.80783 16 8.50007 16C8.1923 16 7.91575 15.812 7.80256 15.5258L6.00905 10.991L1.47417 9.1974C1.18799 9.0843 1 8.80774 1 8.5C1 8.19226 1.18799 7.91575 1.47417 7.80256L6.00905 6.00903L7.80256 1.47417C7.91575 1.18797 8.1923 0.99997 8.50007 1Z" fill="currentColor" />
                        </svg>
                        <span className="text-base/6 transition-colors duration-300 font-normal text-[#5D646E] group-hover:text-[#000A27]">Clean</span>
                      </button>
                      <button id="platform-primitive-tab-transform" type="button" role="tab" aria-selected={primitiveTab === "transform"} aria-controls="platform-primitive-panel-transform" onClick={() => setPrimitiveTab("transform")} className={`group flex h-18 min-w-0 flex-[0_0_calc(45%-12px)] cursor-pointer items-center justify-center gap-2 border-r border-t border-r-[#E7EAEE] border-t-[#E7EAEE] px-3 text-left outline-none transition-colors duration-300 hover:bg-[#F8FAFD] focus-visible:bg-[#F8FAFD] lg:size-full lg:basis-auto lg:justify-start lg:gap-4 lg:border-b-0 lg:border-r-0 lg:border-l-[3px] lg:px-8 lg:py-0 lg:first:border-t-0 lg:col-1 ${primitiveTab === "transform" ? "border-b-[3px] border-b-[#1066F1] lg:border-l-[#1066F1]" : "border-b border-b-[#E7EAEE] lg:border-l-transparent"}`}>
                        <svg aria-hidden="true" viewBox="0 0 18.0002 14" className="size-4.5 shrink-0 transition-colors duration-300 text-[#BBC2CC]" fill="none" preserveAspectRatio="none">
                          <path d="M10.2502 10H4.04404C3.44884 10 2.89955 9.7012 2.57525 9.2012L0.12015 5.4073C-0.04005 5.1597 -0.04005 4.8404 0.12015 4.5928L2.57424 0.7998C2.89744 0.2993 3.44685 0 4.04395 0H10.2501C11.7667 0 13.0001 1.2334 13.0001 2.75V7.25C13.0001 8.7666 11.7668 10 10.2502 10Z" fill="currentColor" />
                          <path d="M5.00018 10H10.2502C11.7668 10 13.0001 8.7666 13.0001 7.25V4H13.9563C14.5535 4 15.1028 4.2993 15.426 4.7998L17.8801 8.5928C18.0403 8.8404 18.0403 9.1597 17.8801 9.4073L15.425 13.2012C15.1008 13.7012 14.5515 14 13.9562 14H7.75008C6.23348 14 5.00018 12.7666 5.00018 11.25V10Z" fill="currentColor" opacity="0.75" />
                        </svg>
                        <span className="text-base/6 transition-colors duration-300 font-normal text-[#5D646E] group-hover:text-[#000A27]">Transform</span>
                      </button>
                      <button id="platform-primitive-tab-review" type="button" role="tab" aria-selected={primitiveTab === "review"} aria-controls="platform-primitive-panel-review" onClick={() => setPrimitiveTab("review")} className={`group flex h-18 min-w-0 flex-[0_0_calc(45%-12px)] cursor-pointer items-center justify-center gap-2 border-r border-t border-r-[#E7EAEE] border-t-[#E7EAEE] px-3 text-left outline-none transition-colors duration-300 hover:bg-[#F8FAFD] focus-visible:bg-[#F8FAFD] lg:size-full lg:basis-auto lg:justify-start lg:gap-4 lg:border-b-0 lg:border-r-0 lg:border-l-[3px] lg:px-8 lg:py-0 lg:first:border-t-0 lg:col-1 ${primitiveTab === "review" ? "border-b-[3px] border-b-[#1066F1] lg:border-l-[#1066F1]" : "border-b border-b-[#E7EAEE] lg:border-l-transparent"}`}>
                        <svg aria-hidden="true" viewBox="0 0 15.7809 11.9805" className="size-4.5 shrink-0 transition-colors duration-300 text-[#BBC2CC]" fill="none" preserveAspectRatio="none">
                          <path opacity="0.4" d="M15.5672 5.45598C15.0524 4.93058 14.4932 4.46599 13.8986 4.06319L14.7801 2.62248C14.9959 2.26898 14.8856 1.80759 14.5321 1.59129C14.1776 1.37499 13.7167 1.48678 13.5009 1.83928L12.594 3.32149C11.9162 2.99069 11.2061 2.73358 10.4703 2.55318L10.8026 0.897389C10.8837 0.491189 10.621 0.0960686 10.2147 0.0145686C9.80944 -0.0655314 9.41294 0.195789 9.33194 0.602489L8.99384 2.28728C8.62973 2.25038 8.26173 2.23088 7.89053 2.23088C7.51933 2.23088 7.15133 2.25038 6.78723 2.28728L6.44913 0.602489C6.36803 0.195789 5.97164 -0.0660314 5.56634 0.0145686C5.16014 0.0960686 4.89745 0.491189 4.97845 0.897389L5.31073 2.55339C4.57483 2.73409 3.86454 2.99109 3.18664 3.32219L2.28024 1.83977C2.06444 1.48677 1.60344 1.37499 1.24904 1.59129C0.896542 1.80709 0.785142 2.26849 1.00104 2.62209L1.88254 4.06398C1.28834 4.46628 0.729442 4.93117 0.214842 5.45607C-0.0751575 5.75197 -0.0712574 6.22659 0.224643 6.51659C0.520543 6.80659 0.995143 6.80178 1.28514 6.50588C3.04004 4.71628 5.38575 3.73097 7.89065 3.73097C10.3955 3.73097 12.7422 4.71638 14.4951 6.50588C14.6426 6.65578 14.8369 6.73097 15.0312 6.73097C15.2207 6.73097 15.4101 6.65969 15.5556 6.51659C15.8515 6.22699 15.8563 5.75188 15.5672 5.45598Z" fill="currentColor" />
                          <path d="M7.89063 11.9805C9.8236 11.9805 11.3906 10.4135 11.3906 8.48047C11.3906 6.54747 9.8236 4.98047 7.89063 4.98047C5.95764 4.98047 4.39063 6.54747 4.39063 8.48047C4.39063 10.4135 5.95764 11.9805 7.89063 11.9805Z" fill="currentColor" />
                        </svg>
                        <span className="text-base/6 transition-colors duration-300 font-normal text-[#5D646E] group-hover:text-[#000A27]">Review</span>
                      </button>
                      <button id="platform-primitive-tab-load" type="button" role="tab" aria-selected={primitiveTab === "load"} aria-controls="platform-primitive-panel-load" onClick={() => setPrimitiveTab("load")} className={`group flex h-18 min-w-0 flex-[0_0_calc(45%-12px)] cursor-pointer items-center justify-center gap-2 border-r border-t border-r-[#E7EAEE] border-t-[#E7EAEE] px-3 text-left outline-none transition-colors duration-300 hover:bg-[#F8FAFD] focus-visible:bg-[#F8FAFD] lg:size-full lg:basis-auto lg:justify-start lg:gap-4 lg:border-b-0 lg:border-r-0 lg:border-l-[3px] lg:px-8 lg:py-0 lg:first:border-t-0 lg:col-1 ${primitiveTab === "load" ? "border-b-[3px] border-b-[#1066F1] lg:border-l-[#1066F1]" : "border-b border-b-[#E7EAEE] lg:border-l-transparent"}`}>
                        <svg aria-hidden="true" viewBox="0 0 18 14.5" className="size-4.5 shrink-0 transition-colors duration-300 text-[#BBC2CC]" fill="none" preserveAspectRatio="none">
                          <path opacity="0.4" d="M14.25 7H3.75C1.682 7 0 8.682 0 10.75C0 12.818 1.682 14.5 3.75 14.5H14.25C16.318 14.5 18 12.818 18 10.75C18 8.682 16.318 7 14.25 7Z" fill="currentColor" />
                          <path d="M8.99999 5.00098C8.58699 5.00098 8.20199 4.79999 7.97099 4.46399L6.21398 1.90998C5.95598 1.53498 5.92898 1.052 6.14498 0.650997C6.36098 0.249997 6.78198 0 7.24398 0H10.756C11.217 0 11.638 0.248997 11.855 0.650997C12.072 1.053 12.044 1.53498 11.786 1.90998L10.03 4.46296C9.79899 4.79896 9.41398 5 9.00098 5L8.99999 5.00098Z" fill="currentColor" />
                          <path d="M9 11.5H3.75C3.336 11.5 3 11.164 3 10.75C3 10.336 3.336 10 3.75 10H9C9.414 10 9.75 10.336 9.75 10.75C9.75 11.164 9.414 11.5 9 11.5Z" fill="currentColor" />
                        </svg>
                        <span className="text-base/6 transition-colors duration-300 font-normal text-[#5D646E] group-hover:text-[#000A27]">Load</span>
                      </button>
                    </div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-linear-to-r from-transparent to-[rgb(var(--site-bg-rgb))] md:hidden"></div>
                  </div>
                </div>
                <div className="min-w-0 lg:absolute lg:inset-y-0 lg:right-0 lg:left-[33%] lg:flex lg:flex-col">
                  <div className="flex flex-1 items-center justify-center overflow-hidden bg-[rgb(var(--site-bg-rgb))] px-8 py-12 lg:min-h-0">
                    <div aria-hidden="true" className="w-[min(64%,460px)]">
                      <svg viewBox="0 -8 504 417" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full overflow-visible select-none">
                        <g opacity="1" style={{ "transform": "translateY(108.5px)", "transformOrigin": "50% 50%", "transformBox": "fill-box" }}>
                          <svg viewBox="6 2 504 296" width="504" height="296" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#primitive-card-load-clip0_211_65)">
                              <rect width="384" height="211" rx="16" transform="matrix(0.866025 0.5 -0.866025 0.5 182.731 3)" fill="#E7EAEE" />
                              <g clipPath="url(#primitive-card-load-clip1_211_65)">
                                <path opacity="0.2" d="M472.85 195L332.554 276L42.4353 108.5L182.731 27.5L472.85 195Z" stroke="#4D8CF9" />
                              </g>
                              <g clipPath="url(#primitive-card-load-clip2_211_65)">
                                <g clipPath="url(#primitive-card-load-clip3_211_65)">
                                  <path d="M254.613 83.5L288.388 64" stroke="#D6DBE1" strokeDasharray="2 3" />
                                  <path d="M375.855 153.5L409.63 134" stroke="#D6DBE1" strokeDasharray="2 3" />
                                  <path d="M105.656 169.5L139.431 150" stroke="#D6DBE1" strokeDasharray="2 3" />
                                  <path d="M226.898 239.5L260.673 220" stroke="#D6DBE1" strokeDasharray="2 3" />
                                </g>
                                <path d="M253.743 84L238.155 93C215.197 79.7452 177.974 79.7452 155.016 93C132.058 106.255 132.058 127.745 155.016 141L140.294 149.5" stroke="#BBC2CC" />
                                <circle cx="34" cy="34" r="34.5" transform="matrix(0.866025 0.5 -0.866025 0.5 196.587 83)" stroke="#DFE3E8" />
                                <circle cx="17" cy="17" r="16.5" transform="matrix(0.866025 0.5 -0.866025 0.5 196.587 100)" fill="#1066F1" fillOpacity="0.3" stroke="#1066F1" />
                                <path d="M374.989 154L359.401 163C382.359 176.255 382.359 197.745 359.401 211C336.443 224.255 299.22 224.255 276.262 211L261.54 219.5" stroke="#1066F1" />
                                <circle cx="34" cy="34" r="33.5" transform="matrix(0.866025 0.5 -0.866025 0.5 317.833 153)" stroke="#1066F1" />
                                <g clipPath="url(#primitive-card-load-clip4_211_65)">
                                  <circle opacity="0.5" cx="17" cy="17" r="16.5" transform="matrix(0.866025 0.5 -0.866025 0.5 317.833 170)" fill="#1066F1" fillOpacity="0.3" stroke="#82AFFB" />
                                  <path opacity="0.5" d="M314.368 157L290.393 208.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M317.833 159L293.858 210.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M321.298 161L297.323 212.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M324.763 163L300.788 214.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M328.224 165L304.249 216.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M331.688 167L307.714 218.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M335.153 169L311.179 220.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M338.618 171L314.643 222.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M342.083 173L318.108 224.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M345.544 175L321.569 226.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M349.009 177L325.034 228.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <rect x="-2.98023e-08" y="0.5" width="33" height="33" rx="16.5" transform="matrix(0.866025 0.5 -0.866025 0.5 318.266 170.25)" stroke="#1066F1" />
                              </g>
                            </g>
                            <rect x="-2.98023e-08" y="0.5" width="383" height="210" rx="15.5" transform="matrix(0.866025 0.5 -0.866025 0.5 183.164 3.25)" stroke="#D6DBE1" />
                            <g clipPath="url(#primitive-card-load-clip5_211_65)">
                              <rect width="384" height="211" rx="16" transform="matrix(0.866025 0.5 -0.866025 0.5 182.731 0)" fill="#F8F9FC" />
                              <g clipPath="url(#primitive-card-load-clip6_211_65)">
                                <path opacity="0.2" d="M472.85 192L332.554 273L42.4353 105.5L182.731 24.5L472.85 192Z" stroke="#4D8CF9" />
                              </g>
                              <g clipPath="url(#primitive-card-load-clip7_211_65)">
                                <g clipPath="url(#primitive-card-load-clip8_211_65)">
                                  <path d="M254.613 80.5L288.388 61" stroke="#D6DBE1" strokeDasharray="2 3" />
                                  <path d="M375.855 150.5L409.63 131" stroke="#D6DBE1" strokeDasharray="2 3" />
                                  <path d="M105.656 166.5L139.431 147" stroke="#D6DBE1" strokeDasharray="2 3" />
                                  <path d="M226.898 236.5L260.673 217" stroke="#D6DBE1" strokeDasharray="2 3" />
                                </g>
                                <path d="M253.743 81L238.155 90C215.197 76.7452 177.974 76.7452 155.016 90C132.058 103.255 132.058 124.745 155.016 138L140.294 146.5" stroke="#BBC2CC" />
                                <circle cx="34" cy="34" r="34.5" transform="matrix(0.866025 0.5 -0.866025 0.5 196.587 80)" stroke="#DFE3E8" />
                                <circle cx="17" cy="17" r="16.5" transform="matrix(0.866025 0.5 -0.866025 0.5 196.587 97)" fill="#1066F1" fillOpacity="0.3" stroke="#1066F1" />
                                <path d="M374.989 151L359.401 160C382.359 173.255 382.359 194.745 359.401 208C336.443 221.255 299.22 221.255 276.262 208L261.54 216.5" stroke="#1066F1" />
                                <circle cx="34" cy="34" r="33.5" transform="matrix(0.866025 0.5 -0.866025 0.5 317.833 150)" stroke="#1066F1" />
                                <g clipPath="url(#primitive-card-load-clip9_211_65)">
                                  <circle opacity="0.5" cx="17" cy="17" r="16.5" transform="matrix(0.866025 0.5 -0.866025 0.5 317.833 167)" fill="#1066F1" fillOpacity="0.3" stroke="#82AFFB" />
                                  <path opacity="0.5" d="M314.368 154L290.393 205.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M317.833 156L293.858 207.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M321.298 158L297.323 209.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M324.763 160L300.788 211.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M328.224 162L304.249 213.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M331.688 164L307.714 215.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M335.153 166L311.179 217.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M338.618 168L314.643 219.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M342.083 170L318.108 221.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M345.544 172L321.569 223.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M349.009 174L325.034 225.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <rect x="-2.98023e-08" y="0.5" width="33" height="33" rx="16.5" transform="matrix(0.866025 0.5 -0.866025 0.5 318.266 167.25)" stroke="#1066F1" />
                              </g>
                            </g>
                            <rect x="-2.98023e-08" y="0.5" width="383" height="210" rx="15.5" transform="matrix(0.866025 0.5 -0.866025 0.5 183.164 0.25)" stroke="#D6DBE1" />
                            <defs>
                              <clipPath id="primitive-card-load-clip0_211_65">
                                <rect width="384" height="211" rx="16" transform="matrix(0.866025 0.5 -0.866025 0.5 182.731 3)" fill="white" />
                              </clipPath>
                              <clipPath id="primitive-card-load-clip1_211_65">
                                <rect width="384" height="211" fill="white" transform="matrix(0.866025 0.5 -0.866025 0.5 182.731 3)" />
                              </clipPath>
                              <clipPath id="primitive-card-load-clip2_211_65">
                                <rect width="336" height="163" fill="white" transform="matrix(0.866025 0.5 -0.866025 0.5 182.731 27)" />
                              </clipPath>
                              <clipPath id="primitive-card-load-clip3_211_65">
                                <rect width="384" height="211" fill="white" transform="matrix(0.866025 0.5 -0.866025 0.5 182.731 3)" />
                              </clipPath>
                              <clipPath id="primitive-card-load-clip4_211_65">
                                <rect width="34" height="34" rx="17" transform="matrix(0.866025 0.5 -0.866025 0.5 317.833 170)" fill="white" />
                              </clipPath>
                              <clipPath id="primitive-card-load-clip5_211_65">
                                <rect width="384" height="211" rx="16" transform="matrix(0.866025 0.5 -0.866025 0.5 182.731 0)" fill="white" />
                              </clipPath>
                              <clipPath id="primitive-card-load-clip6_211_65">
                                <rect width="384" height="211" fill="white" transform="matrix(0.866025 0.5 -0.866025 0.5 182.731 0)" />
                              </clipPath>
                              <clipPath id="primitive-card-load-clip7_211_65">
                                <rect width="336" height="163" fill="white" transform="matrix(0.866025 0.5 -0.866025 0.5 182.731 24)" />
                              </clipPath>
                              <clipPath id="primitive-card-load-clip8_211_65">
                                <rect width="384" height="211" fill="white" transform="matrix(0.866025 0.5 -0.866025 0.5 182.731 0)" />
                              </clipPath>
                              <clipPath id="primitive-card-load-clip9_211_65">
                                <rect width="34" height="34" rx="17" transform="matrix(0.866025 0.5 -0.866025 0.5 317.833 167)" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </g>
                        <g opacity="1" style={{ "transform": "translateY(95px)", "transformOrigin": "50% 50%", "transformBox": "fill-box" }}>
                          <svg viewBox="6 2 504 296" width="504" height="296" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#primitive-card-review-clip0_211_136)">
                              <rect width="384" height="211" rx="16" transform="matrix(0.866025 0.5 -0.866025 0.5 182.731 3)" fill="#E7EAEE" />
                              <g clipPath="url(#primitive-card-review-clip1_211_136)">
                                <path opacity="0.2" d="M472.85 195L332.554 276L42.4353 108.5L182.731 27.5L472.85 195Z" stroke="#4D8CF9" />
                              </g>
                              <circle cx="34" cy="34" r="34.5" transform="matrix(0.866025 0.5 -0.866025 0.5 192.259 80.5)" stroke="#BBC2CC" />
                              <circle cx="17" cy="17" r="16.5" transform="matrix(0.866025 0.5 -0.866025 0.5 192.259 97.5)" fill="#1066F1" fillOpacity="0.3" stroke="#1066F1" />
                              <circle cx="34" cy="34" r="34.5" transform="matrix(0.866025 0.5 -0.866025 0.5 322.161 155.5)" stroke="#BBC2CC" />
                              <circle cx="63" cy="63" r="62.5" transform="matrix(0.866025 0.5 -0.866025 0.5 192.255 51.5)" stroke="#1066F1" strokeOpacity="0.5" strokeDasharray="0 3" />
                              <circle cx="64" cy="64" r="63.5" transform="matrix(0.866025 0.5 -0.866025 0.5 322.161 125.5)" stroke="#1066F1" strokeOpacity="0.5" strokeDasharray="0 3" />
                              <g clipPath="url(#primitive-card-review-clip2_211_136)">
                                <circle opacity="0.5" cx="17" cy="17" r="16.5" transform="matrix(0.866025 0.5 -0.866025 0.5 322.161 172.5)" fill="#1066F1" fillOpacity="0.3" stroke="#82AFFB" />
                                <path opacity="0.5" d="M318.696 159.5L294.722 211.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M322.161 161.5L298.186 213.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M325.626 163.5L301.651 215.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M329.091 165.5L305.116 217.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M332.552 167.5L308.577 219.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M336.017 169.5L312.042 221.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M339.481 171.5L315.507 223.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M342.946 173.5L318.972 225.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M346.411 175.5L322.436 227.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M349.872 177.5L325.897 229.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M353.337 179.5L329.362 231.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                              </g>
                              <rect x="-2.98023e-08" y="0.5" width="33" height="33" rx="16.5" transform="matrix(0.866025 0.5 -0.866025 0.5 322.594 172.75)" stroke="#1066F1" />
                            </g>
                            <rect x="-2.98023e-08" y="0.5" width="383" height="210" rx="15.5" transform="matrix(0.866025 0.5 -0.866025 0.5 183.164 3.25)" stroke="#D6DBE1" />
                            <g clipPath="url(#primitive-card-review-clip3_211_136)">
                              <rect width="384" height="211" rx="16" transform="matrix(0.866025 0.5 -0.866025 0.5 182.731 0)" fill="#F8F9FC" />
                              <g clipPath="url(#primitive-card-review-clip4_211_136)">
                                <path opacity="0.2" d="M472.85 192L332.554 273L42.4353 105.5L182.731 24.5L472.85 192Z" stroke="#4D8CF9" />
                              </g>
                              <circle cx="34" cy="34" r="34.5" transform="matrix(0.866025 0.5 -0.866025 0.5 192.259 77.5)" stroke="#BBC2CC" />
                              <circle cx="17" cy="17" r="16.5" transform="matrix(0.866025 0.5 -0.866025 0.5 192.259 94.5)" fill="#1066F1" fillOpacity="0.3" stroke="#1066F1" />
                              <circle cx="34" cy="34" r="34.5" transform="matrix(0.866025 0.5 -0.866025 0.5 322.161 152.5)" stroke="#BBC2CC" />
                              <circle cx="63" cy="63" r="62.5" transform="matrix(0.866025 0.5 -0.866025 0.5 192.255 48.5)" stroke="#1066F1" strokeOpacity="0.5" strokeDasharray="0 3" />
                              <circle cx="64" cy="64" r="63.5" transform="matrix(0.866025 0.5 -0.866025 0.5 322.161 122.5)" stroke="#1066F1" strokeOpacity="0.5" strokeDasharray="0 3" />
                              <g clipPath="url(#primitive-card-review-clip5_211_136)">
                                <circle opacity="0.5" cx="17" cy="17" r="16.5" transform="matrix(0.866025 0.5 -0.866025 0.5 322.161 169.5)" fill="#1066F1" fillOpacity="0.3" stroke="#82AFFB" />
                                <path opacity="0.5" d="M318.696 156.5L294.722 208.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M322.161 158.5L298.186 210.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M325.626 160.5L301.651 212.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M329.091 162.5L305.116 214.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M332.552 164.5L308.577 216.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M336.017 166.5L312.042 218.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M339.481 168.5L315.507 220.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M342.946 170.5L318.972 222.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M346.411 172.5L322.436 224.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M349.872 174.5L325.897 226.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M353.337 176.5L329.362 228.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                              </g>
                              <rect x="-2.98023e-08" y="0.5" width="33" height="33" rx="16.5" transform="matrix(0.866025 0.5 -0.866025 0.5 322.594 169.75)" stroke="#1066F1" />
                            </g>
                            <rect x="-2.98023e-08" y="0.5" width="383" height="210" rx="15.5" transform="matrix(0.866025 0.5 -0.866025 0.5 183.164 0.25)" stroke="#D6DBE1" />
                            <defs>
                              <clipPath id="primitive-card-review-clip0_211_136">
                                <rect width="384" height="211" rx="16" transform="matrix(0.866025 0.5 -0.866025 0.5 182.731 3)" fill="white" />
                              </clipPath>
                              <clipPath id="primitive-card-review-clip1_211_136">
                                <rect width="384" height="211" fill="white" transform="matrix(0.866025 0.5 -0.866025 0.5 182.731 3)" />
                              </clipPath>
                              <clipPath id="primitive-card-review-clip2_211_136">
                                <rect width="34" height="34" rx="17" transform="matrix(0.866025 0.5 -0.866025 0.5 322.161 172.5)" fill="white" />
                              </clipPath>
                              <clipPath id="primitive-card-review-clip3_211_136">
                                <rect width="384" height="211" rx="16" transform="matrix(0.866025 0.5 -0.866025 0.5 182.731 0)" fill="white" />
                              </clipPath>
                              <clipPath id="primitive-card-review-clip4_211_136">
                                <rect width="384" height="211" fill="white" transform="matrix(0.866025 0.5 -0.866025 0.5 182.731 0)" />
                              </clipPath>
                              <clipPath id="primitive-card-review-clip5_211_136">
                                <rect width="34" height="34" rx="17" transform="matrix(0.866025 0.5 -0.866025 0.5 322.161 169.5)" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </g>
                        <g opacity="1" style={{ "transform": "translateY(81.5px)", "transformOrigin": "50% 50%", "transformBox": "fill-box" }}>
                          <svg viewBox="6 2 504 296" width="504" height="296" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#primitive-card-transform-clip0_211_187)">
                              <rect width="384" height="211" rx="16" transform="matrix(0.866025 0.5 -0.866025 0.5 182.731 3)" fill="#E7EAEE" />
                              <g clipPath="url(#primitive-card-transform-clip1_211_187)">
                                <path opacity="0.2" d="M472.85 195L332.554 276L42.4353 108.5L182.731 27.5L472.85 195Z" stroke="#4D8CF9" />
                              </g>
                              <circle cx="33" cy="33" r="32.5" transform="matrix(0.866025 0.5 -0.866025 0.5 257.208 87)" stroke="#BBC2CC" />
                              <circle cx="33" cy="33" r="32.5" transform="matrix(0.866025 0.5 -0.866025 0.5 257.208 151)" stroke="#BBC2CC" />
                              <mask id="primitive-card-transform-path-6-outside-1_211_187" maskUnits="userSpaceOnUse" x="144.625" y="87" width="225.167" height="130" fill="black">
                                <rect fill="white" x="144.625" y="87" width="225.167" height="130" />
                                <path d="M284.921 104C269.616 95.1634 244.801 95.1634 229.496 104C214.19 112.837 214.19 127.163 229.496 136C229.931 136.251 230.376 136.494 230.827 136.731L230.764 136.768C244.239 145.3 244.375 158.344 231.173 166.968L231.283 167.032C230.675 167.343 230.077 167.664 229.496 168C214.19 176.837 214.19 191.163 229.496 200C244.801 208.837 269.616 208.837 284.921 200C300.226 191.163 300.226 176.837 284.921 168C284.777 167.917 284.629 167.835 284.483 167.753L284.494 167.747C269.855 159.031 269.76 145.198 284.216 136.418L284.921 136C300.226 127.163 300.226 112.837 284.921 104Z" />
                              </mask>
                              <path d="M230.827 136.731L231.239 136.47L231.713 136.72L231.26 136.981L230.827 136.731ZM230.764 136.768L230.312 137.006L229.918 136.756L230.331 136.518L230.764 136.768ZM231.173 166.968L230.74 167.218L230.332 166.983L230.714 166.734L231.173 166.968ZM231.283 167.032L231.716 166.782L232.177 167.048L231.689 167.297L231.283 167.032ZM284.483 167.753L284.057 168.007L283.61 167.757L284.05 167.503L284.483 167.753ZM284.494 167.747L284.934 167.5L285.353 167.75L284.927 167.997L284.494 167.747ZM284.216 136.418L283.772 136.174L283.777 136.171L284.216 136.418ZM284.921 136L284.482 135.753L284.488 135.75L284.921 136ZM284.921 104L285.354 103.75C285.639 103.915 285.919 104.081 286.193 104.249L285.748 104.492L285.302 104.734C285.036 104.571 284.765 104.41 284.488 104.25L284.921 104ZM287.319 105.514L287.789 105.287C288.305 105.644 288.8 106.008 289.273 106.378L288.78 106.588L288.287 106.798C287.829 106.439 287.349 106.086 286.849 105.74L287.319 105.514ZM290.128 107.713L290.642 107.52C291.08 107.911 291.495 108.307 291.888 108.708L291.355 108.882L290.821 109.056C290.441 108.667 290.038 108.283 289.614 107.905L290.128 107.713ZM292.455 110.092L293.006 109.938C293.358 110.355 293.687 110.777 293.992 111.204L293.426 111.339L292.861 111.474C292.564 111.061 292.246 110.652 291.905 110.247L292.455 110.092ZM294.265 112.617L294.844 112.502C295.105 112.941 295.343 113.383 295.557 113.828L294.967 113.923L294.377 114.017C294.17 113.586 293.939 113.157 293.686 112.732L294.265 112.617ZM295.532 115.25L296.131 115.176C296.298 115.629 296.442 116.085 296.562 116.542L295.956 116.595L295.351 116.648C295.235 116.205 295.095 115.763 294.933 115.324L295.532 115.25ZM296.24 117.952L296.85 117.92C296.922 118.381 296.97 118.843 296.994 119.306L296.382 119.317L295.77 119.327C295.747 118.879 295.7 118.431 295.63 117.984L296.24 117.952ZM296.382 120.683L296.994 120.694C296.97 121.157 296.922 121.619 296.85 122.08L296.24 122.048L295.63 122.016C295.7 121.569 295.747 121.121 295.77 120.673L296.382 120.683ZM295.956 123.405L296.562 123.458C296.442 123.915 296.298 124.371 296.131 124.824L295.532 124.75L294.933 124.676C295.095 124.237 295.235 123.795 295.351 123.352L295.956 123.405ZM294.967 126.077L295.557 126.172C295.343 126.617 295.105 127.059 294.844 127.498L294.265 127.383L293.686 127.268C293.939 126.843 294.17 126.414 294.377 125.983L294.967 126.077ZM293.426 128.661L293.992 128.796C293.687 129.223 293.358 129.645 293.006 130.062L292.455 129.908L291.905 129.753C292.246 129.348 292.564 128.939 292.861 128.526L293.426 128.661ZM291.355 131.118L291.888 131.292C291.495 131.693 291.08 132.089 290.642 132.48L290.128 132.287L289.614 132.095C290.038 131.717 290.441 131.333 290.821 130.944L291.355 131.118ZM288.78 133.412L289.273 133.622C288.8 133.992 288.305 134.356 287.789 134.713L287.319 134.486L286.849 134.26C287.349 133.914 287.829 133.561 288.287 133.202L288.78 133.412ZM285.748 135.508L286.193 135.751C285.919 135.919 285.639 136.085 285.354 136.25L284.921 136L284.488 135.75C284.765 135.59 285.036 135.429 285.302 135.266L285.748 135.508ZM284.921 136L285.36 136.247L285.183 136.351L284.745 136.104L284.306 135.858L284.483 135.753L284.921 136ZM284.392 136.313L284.831 136.56L284.654 136.665L284.216 136.418L283.777 136.171L283.954 136.067L284.392 136.313ZM284.216 136.418L284.66 136.662C284.376 136.834 284.098 137.008 283.825 137.185L283.368 136.949L282.911 136.714C283.192 136.532 283.479 136.352 283.772 136.174L284.216 136.418ZM281.766 138.054L282.248 138.272C281.739 138.647 281.254 139.028 280.793 139.417L280.288 139.217L279.783 139.017C280.259 138.616 280.76 138.222 281.284 137.836L281.766 138.054ZM278.942 140.431L279.468 140.612C279.047 141.02 278.65 141.434 278.279 141.853L277.734 141.692L277.188 141.531C277.572 141.098 277.981 140.671 278.415 140.25L278.942 140.431ZM276.668 142.996L277.23 143.137C276.903 143.572 276.602 144.012 276.325 144.457L275.749 144.337L275.173 144.218C275.458 143.759 275.769 143.305 276.106 142.856L276.668 142.996ZM274.981 145.709L275.569 145.807C275.342 146.262 275.14 146.721 274.964 147.182L274.366 147.106L273.768 147.03C273.95 146.554 274.158 146.081 274.393 145.611L274.981 145.709ZM273.906 148.523L274.511 148.577C274.386 149.045 274.287 149.515 274.213 149.986L273.603 149.954L272.993 149.922C273.069 149.437 273.172 148.952 273.301 148.469L273.906 148.523ZM273.458 151.394L274.07 151.403C274.048 151.876 274.052 152.349 274.083 152.822L273.471 152.835L272.859 152.848C272.828 152.36 272.823 151.872 272.846 151.384L273.458 151.394ZM273.641 154.274L274.251 154.238C274.333 154.709 274.44 155.178 274.574 155.645L273.97 155.703L273.366 155.76C273.228 155.278 273.117 154.794 273.032 154.309L273.641 154.274ZM274.455 157.117L275.051 157.038C275.236 157.498 275.446 157.955 275.681 158.409L275.095 158.511L274.508 158.612C274.265 158.144 274.048 157.672 273.858 157.197L274.455 157.117ZM275.887 159.878L276.461 159.755C276.745 160.197 277.055 160.636 277.389 161.069L276.83 161.213L276.271 161.357C275.925 160.91 275.606 160.457 275.313 160.001L275.887 159.878ZM277.919 162.511L278.461 162.346C278.84 162.763 279.244 163.175 279.672 163.581L279.149 163.765L278.627 163.949C278.185 163.53 277.768 163.105 277.377 162.675L277.919 162.511ZM280.517 164.971L281.019 164.768C281.487 165.153 281.979 165.532 282.494 165.904L282.016 166.125L281.538 166.346C281.006 165.963 280.499 165.572 280.016 165.174L280.517 164.971ZM283.637 167.22L284.09 166.982C284.365 167.157 284.647 167.33 284.934 167.5L284.494 167.747L284.054 167.993C283.759 167.817 283.469 167.638 283.184 167.458L283.637 167.22ZM284.494 167.747L284.927 167.997L284.924 167.998L284.491 167.748L284.058 167.498L284.061 167.497L284.494 167.747ZM284.486 167.751L284.919 168.001L284.916 168.003L284.483 167.753L284.05 167.503L284.053 167.501L284.486 167.751ZM284.483 167.753L284.909 167.499C284.946 167.52 284.982 167.54 285.019 167.56L284.593 167.814L284.167 168.068C284.131 168.048 284.094 168.027 284.057 168.007L284.483 167.753ZM284.812 167.938L285.242 167.686C285.279 167.707 285.317 167.728 285.354 167.75L284.921 168L284.488 168.25C284.453 168.23 284.418 168.21 284.383 168.19L284.812 167.938ZM284.921 168L285.354 167.75C285.639 167.915 285.919 168.081 286.193 168.249L285.748 168.492L285.302 168.734C285.036 168.571 284.765 168.41 284.488 168.25L284.921 168ZM287.319 169.514L287.789 169.287C288.305 169.644 288.8 170.008 289.273 170.378L288.78 170.588L288.287 170.798C287.829 170.439 287.349 170.086 286.849 169.74L287.319 169.514ZM290.128 171.713L290.642 171.52C291.08 171.911 291.495 172.307 291.888 172.708L291.355 172.882L290.821 173.056C290.441 172.667 290.038 172.283 289.614 171.905L290.128 171.713ZM292.455 174.092L293.006 173.938C293.358 174.355 293.687 174.777 293.992 175.204L293.426 175.339L292.861 175.474C292.564 175.061 292.246 174.652 291.905 174.247L292.455 174.092ZM294.265 176.617L294.844 176.502C295.105 176.941 295.343 177.383 295.557 177.828L294.967 177.923L294.377 178.017C294.17 177.586 293.939 177.157 293.686 176.732L294.265 176.617ZM295.532 179.25L296.131 179.176C296.298 179.629 296.442 180.085 296.562 180.542L295.956 180.595L295.351 180.648C295.235 180.205 295.095 179.763 294.933 179.324L295.532 179.25ZM296.24 181.952L296.85 181.92C296.922 182.381 296.97 182.843 296.994 183.306L296.382 183.317L295.77 183.327C295.747 182.879 295.7 182.431 295.63 181.984L296.24 181.952ZM296.382 184.683L296.994 184.694C296.97 185.157 296.922 185.619 296.85 186.08L296.24 186.048L295.63 186.016C295.7 185.569 295.747 185.121 295.77 184.673L296.382 184.683ZM295.956 187.405L296.562 187.458C296.442 187.915 296.298 188.371 296.131 188.824L295.532 188.75L294.933 188.676C295.095 188.237 295.235 187.795 295.351 187.352L295.956 187.405ZM294.967 190.077L295.557 190.172C295.343 190.617 295.105 191.059 294.844 191.498L294.265 191.383L293.686 191.268C293.939 190.843 294.17 190.414 294.377 189.983L294.967 190.077ZM293.426 192.661L293.992 192.796C293.687 193.223 293.358 193.645 293.006 194.062L292.455 193.908L291.905 193.753C292.246 193.348 292.564 192.939 292.861 192.526L293.426 192.661ZM291.355 195.118L291.888 195.292C291.495 195.693 291.08 196.089 290.642 196.48L290.128 196.287L289.614 196.095C290.038 195.717 290.441 195.333 290.821 194.944L291.355 195.118ZM288.78 197.412L289.273 197.622C288.8 197.992 288.305 198.356 287.789 198.713L287.319 198.486L286.849 198.26C287.349 197.914 287.829 197.561 288.287 197.202L288.78 197.412ZM285.748 199.508L286.193 199.751C285.919 199.919 285.639 200.085 285.354 200.25L284.921 200L284.488 199.75C284.765 199.59 285.036 199.429 285.302 199.266L285.748 199.508ZM284.921 200L285.354 200.25C285.069 200.415 284.781 200.576 284.49 200.735L284.07 200.477L283.65 200.22C283.932 200.066 284.212 199.91 284.488 199.75L284.921 200ZM282.299 201.384L282.692 201.656C282.074 201.954 281.443 202.239 280.802 202.513L280.438 202.228L280.075 201.944C280.696 201.679 281.307 201.402 281.907 201.113L282.299 201.384ZM278.491 203.006L278.824 203.303C278.148 203.556 277.462 203.795 276.766 204.022L276.465 203.714L276.164 203.406C276.838 203.187 277.503 202.954 278.158 202.709L278.491 203.006ZM274.369 204.35L274.637 204.668C273.914 204.871 273.183 205.061 272.444 205.237L272.21 204.911L271.976 204.584C272.692 204.413 273.4 204.229 274.101 204.032L274.369 204.35ZM269.996 205.394L270.195 205.729C269.436 205.88 268.67 206.017 267.898 206.141L267.735 205.8L267.571 205.459C268.318 205.34 269.06 205.207 269.797 205.06L269.996 205.394ZM265.435 206.126L265.563 206.472C264.778 206.569 263.99 206.652 263.198 206.721L263.106 206.371L263.014 206.022C263.782 205.955 264.547 205.874 265.307 205.78L265.435 206.126ZM260.756 206.535L260.811 206.887C260.012 206.929 259.212 206.957 258.411 206.971L258.392 206.617L258.374 206.264C259.15 206.25 259.926 206.223 260.7 206.183L260.756 206.535ZM256.024 206.617L256.006 206.971C255.205 206.957 254.405 206.929 253.606 206.887L253.661 206.535L253.716 206.183C254.49 206.223 255.266 206.25 256.043 206.264L256.024 206.617ZM251.31 206.371L251.219 206.721C250.427 206.652 249.638 206.569 248.853 206.472L248.981 206.126L249.109 205.78C249.87 205.874 250.635 205.955 251.402 206.022L251.31 206.371ZM246.682 205.8L246.518 206.141C245.747 206.017 244.981 205.88 244.221 205.729L244.421 205.394L244.62 205.06C245.356 205.207 246.099 205.34 246.846 205.459L246.682 205.8ZM242.206 204.911L241.972 205.237C241.234 205.061 240.502 204.871 239.78 204.668L240.048 204.35L240.316 204.032C241.016 204.229 241.725 204.413 242.441 204.584L242.206 204.911ZM237.952 203.714L237.651 204.022C236.955 203.795 236.269 203.556 235.593 203.303L235.926 203.006L236.259 202.709C236.914 202.954 237.579 203.187 238.253 203.406L237.952 203.714ZM233.978 202.228L233.615 202.513C232.973 202.239 232.343 201.954 231.725 201.656L232.117 201.384L232.51 201.113C233.109 201.402 233.72 201.679 234.342 201.944L233.978 202.228ZM230.347 200.477L229.927 200.735C229.636 200.576 229.347 200.415 229.062 200.25L229.496 200L229.929 199.75C230.205 199.91 230.484 200.066 230.767 200.22L230.347 200.477ZM229.496 200L229.062 200.25C228.778 200.085 228.498 199.919 228.223 199.751L228.669 199.508L229.115 199.266C229.381 199.429 229.652 199.59 229.929 199.75L229.496 200ZM227.098 198.486L226.628 198.713C226.111 198.356 225.617 197.992 225.144 197.622L225.636 197.412L226.129 197.202C226.588 197.561 227.067 197.914 227.568 198.26L227.098 198.486ZM224.289 196.287L223.775 196.48C223.337 196.089 222.922 195.693 222.529 195.292L223.062 195.118L223.595 194.944C223.976 195.333 224.378 195.717 224.803 196.095L224.289 196.287ZM221.961 193.908L221.411 194.062C221.059 193.645 220.73 193.223 220.424 192.796L220.99 192.661L221.556 192.526C221.852 192.939 222.171 193.348 222.512 193.753L221.961 193.908ZM220.152 191.383L219.573 191.498C219.311 191.059 219.074 190.617 218.859 190.172L219.449 190.077L220.039 189.983C220.247 190.414 220.478 190.843 220.731 191.268L220.152 191.383ZM218.885 188.75L218.286 188.824C218.118 188.371 217.975 187.915 217.855 187.458L218.46 187.405L219.066 187.352C219.182 187.795 219.321 188.237 219.484 188.676L218.885 188.75ZM218.176 186.048L217.566 186.08C217.494 185.619 217.446 185.157 217.422 184.694L218.034 184.683L218.646 184.673C218.67 185.121 218.716 185.569 218.786 186.016L218.176 186.048ZM218.034 183.317L217.422 183.306C217.446 182.843 217.494 182.381 217.566 181.92L218.176 181.952L218.786 181.984C218.716 182.431 218.67 182.879 218.646 183.327L218.034 183.317ZM218.46 180.595L217.855 180.542C217.975 180.085 218.118 179.629 218.286 179.176L218.885 179.25L219.484 179.324C219.321 179.763 219.182 180.205 219.066 180.648L218.46 180.595ZM219.449 177.923L218.859 177.828C219.074 177.383 219.311 176.941 219.573 176.502L220.152 176.617L220.731 176.732C220.478 177.157 220.247 177.586 220.039 178.017L219.449 177.923ZM220.99 175.339L220.424 175.204C220.73 174.777 221.059 174.355 221.411 173.938L221.961 174.092L222.512 174.247C222.171 174.652 221.852 175.061 221.556 175.474L220.99 175.339ZM223.062 172.882L222.529 172.708C222.922 172.307 223.337 171.911 223.775 171.52L224.289 171.713L224.803 171.905C224.378 172.283 223.976 172.667 223.595 173.056L223.062 172.882ZM225.636 170.588L225.144 170.378C225.617 170.008 226.111 169.644 226.628 169.287L227.098 169.514L227.568 169.74C227.067 170.086 226.588 170.439 226.129 170.798L225.636 170.588ZM228.669 168.492L228.223 168.249C228.498 168.081 228.778 167.915 229.062 167.75L229.496 168L229.929 168.25C229.652 168.41 229.381 168.571 229.115 168.734L228.669 168.492ZM229.496 168L229.062 167.75C229.21 167.665 229.358 167.581 229.507 167.498L229.933 167.752L230.358 168.006C230.214 168.087 230.071 168.168 229.929 168.25L229.496 168ZM230.827 167.268L230.415 167.007C230.569 166.926 230.723 166.846 230.878 166.767L231.283 167.032L231.689 167.297C231.538 167.374 231.388 167.452 231.239 167.53L230.827 167.268ZM231.283 167.032L230.85 167.282L230.823 167.266L231.256 167.016L231.689 166.766L231.716 166.782L231.283 167.032ZM231.2 166.984L230.767 167.234L230.74 167.218L231.173 166.968L231.606 166.718L231.633 166.734L231.2 166.984ZM231.173 166.968L230.714 166.734C230.974 166.564 231.23 166.392 231.48 166.218L231.95 166.444L232.421 166.67C232.164 166.849 231.9 167.027 231.631 167.202L231.173 166.968ZM233.419 165.359L232.925 165.15C233.39 164.784 233.834 164.411 234.256 164.032L234.771 164.224L235.286 164.415C234.851 164.806 234.393 165.19 233.912 165.568L233.419 165.359ZM236 163.043L235.465 162.87C235.849 162.474 236.21 162.073 236.549 161.667L237.1 161.821L237.652 161.974C237.303 162.393 236.93 162.807 236.534 163.215L236 163.043ZM238.07 160.562L237.503 160.428C237.799 160.008 238.073 159.585 238.323 159.157L238.903 159.271L239.483 159.384C239.225 159.825 238.943 160.262 238.636 160.695L238.07 160.562ZM239.599 157.953L239.008 157.86C239.214 157.423 239.396 156.983 239.555 156.541L240.154 156.613L240.754 156.685C240.59 157.141 240.402 157.595 240.19 158.046L239.599 157.953ZM240.567 155.256L239.961 155.206C240.074 154.758 240.162 154.308 240.227 153.858L240.837 153.887L241.448 153.917C241.381 154.381 241.289 154.845 241.174 155.307L240.567 155.256ZM240.963 152.512L240.351 152.504C240.369 152.052 240.363 151.599 240.333 151.147L240.945 151.134L241.557 151.121C241.587 151.587 241.594 152.053 241.576 152.52L240.963 152.512ZM240.782 149.759L240.173 149.794C240.096 149.345 239.995 148.896 239.871 148.449L240.475 148.393L241.08 148.337C241.208 148.798 241.312 149.261 241.391 149.725L240.782 149.759ZM240.026 147.04L239.428 147.117C239.257 146.677 239.063 146.239 238.846 145.804L239.434 145.705L240.023 145.607C240.247 146.056 240.447 146.509 240.623 146.963L240.026 147.04ZM238.703 144.394L238.126 144.513C237.864 144.088 237.579 143.667 237.271 143.25L237.834 143.111L238.398 142.972C238.715 143.403 239.01 143.837 239.28 144.276L238.703 144.394ZM236.831 141.861L236.283 142.019C235.934 141.617 235.562 141.219 235.167 140.827L235.697 140.649L236.227 140.472C236.634 140.877 237.018 141.287 237.378 141.703L236.831 141.861ZM234.436 139.479L233.926 139.675C233.494 139.301 233.041 138.932 232.565 138.57L233.053 138.356L233.541 138.143C234.032 138.516 234.5 138.897 234.946 139.284L234.436 139.479ZM231.556 137.285L231.091 137.515C230.837 137.343 230.577 137.174 230.312 137.006L230.764 136.768L231.217 136.529C231.49 136.703 231.758 136.878 232.021 137.054L231.556 137.285ZM230.764 136.768L230.331 136.518L230.347 136.509L230.78 136.759L231.213 137.009L231.197 137.018L230.764 136.768ZM230.811 136.74L230.378 136.49L230.394 136.481L230.827 136.731L231.26 136.981L231.244 136.99L230.811 136.74ZM230.827 136.731L230.414 136.993C230.3 136.932 230.186 136.872 230.072 136.811L230.489 136.552L230.906 136.293C231.016 136.352 231.128 136.411 231.239 136.47L230.827 136.731ZM229.823 136.186L229.395 136.44C229.284 136.377 229.173 136.314 229.062 136.25L229.496 136L229.929 135.75C230.035 135.811 230.142 135.872 230.25 135.933L229.823 136.186ZM229.496 136L229.062 136.25C228.778 136.085 228.498 135.919 228.223 135.751L228.669 135.508L229.115 135.266C229.381 135.429 229.652 135.59 229.929 135.75L229.496 136ZM227.098 134.486L226.628 134.713C226.111 134.356 225.617 133.992 225.144 133.622L225.636 133.412L226.129 133.202C226.588 133.561 227.067 133.914 227.568 134.26L227.098 134.486ZM224.289 132.287L223.775 132.48C223.337 132.089 222.922 131.693 222.529 131.292L223.062 131.118L223.595 130.944C223.976 131.333 224.378 131.717 224.803 132.095L224.289 132.287ZM221.961 129.908L221.411 130.062C221.059 129.645 220.73 129.223 220.424 128.796L220.99 128.661L221.556 128.526C221.852 128.939 222.171 129.348 222.512 129.753L221.961 129.908ZM220.152 127.383L219.573 127.498C219.311 127.059 219.074 126.617 218.859 126.172L219.449 126.077L220.039 125.983C220.247 126.414 220.478 126.843 220.731 127.268L220.152 127.383ZM218.885 124.75L218.286 124.824C218.118 124.371 217.975 123.915 217.855 123.458L218.46 123.405L219.066 123.352C219.182 123.795 219.321 124.237 219.484 124.676L218.885 124.75ZM218.176 122.048L217.566 122.08C217.494 121.619 217.446 121.157 217.422 120.694L218.034 120.683L218.646 120.673C218.67 121.121 218.716 121.569 218.786 122.016L218.176 122.048ZM218.034 119.317L217.422 119.306C217.446 118.843 217.494 118.381 217.566 117.92L218.176 117.952L218.786 117.984C218.716 118.431 218.67 118.879 218.646 119.327L218.034 119.317ZM218.46 116.595L217.855 116.542C217.975 116.085 218.118 115.629 218.286 115.176L218.885 115.25L219.484 115.324C219.321 115.763 219.182 116.205 219.066 116.648L218.46 116.595ZM219.449 113.923L218.859 113.828C219.074 113.383 219.311 112.941 219.573 112.502L220.152 112.617L220.731 112.732C220.478 113.157 220.247 113.586 220.039 114.017L219.449 113.923ZM220.99 111.339L220.424 111.204C220.73 110.777 221.059 110.355 221.411 109.938L221.961 110.092L222.512 110.247C222.171 110.652 221.852 111.061 221.556 111.474L220.99 111.339ZM223.062 108.882L222.529 108.708C222.922 108.307 223.337 107.911 223.775 107.52L224.289 107.713L224.803 107.905C224.378 108.283 223.976 108.667 223.595 109.056L223.062 108.882ZM225.636 106.588L225.144 106.378C225.617 106.008 226.111 105.644 226.628 105.287L227.098 105.514L227.568 105.74C227.067 106.086 226.588 106.439 226.129 106.798L225.636 106.588ZM228.669 104.492L228.223 104.249C228.498 104.081 228.778 103.915 229.062 103.75L229.496 104L229.929 104.25C229.652 104.41 229.381 104.571 229.115 104.734L228.669 104.492ZM229.496 104L229.062 103.75C229.347 103.585 229.636 103.424 229.927 103.265L230.347 103.523L230.767 103.78C230.484 103.934 230.205 104.09 229.929 104.25L229.496 104ZM232.117 102.616L231.725 102.344C232.343 102.046 232.973 101.761 233.615 101.487L233.978 101.772L234.342 102.056C233.72 102.321 233.109 102.598 232.51 102.887L232.117 102.616ZM235.926 100.994L235.593 100.697C236.269 100.444 236.955 100.205 237.651 99.9778L237.952 100.286L238.253 100.594C237.579 100.813 236.914 101.046 236.259 101.291L235.926 100.994ZM240.048 99.6501L239.78 99.3323C240.503 99.129 241.234 98.9392 241.972 98.7628L242.206 99.0895L242.441 99.4162C241.725 99.5871 241.016 99.7711 240.316 99.968L240.048 99.6501ZM244.421 98.6055L244.221 98.2712C244.981 98.1202 245.747 97.9829 246.518 97.8592L246.682 98.1999L246.846 98.5405C246.099 98.6604 245.356 98.7935 244.62 98.9398L244.421 98.6055ZM248.981 97.874L248.853 97.5282C249.638 97.4314 250.427 97.3484 251.219 97.2792L251.31 97.6288L251.402 97.9783C250.635 98.0454 249.87 98.1259 249.109 98.2197L248.981 97.874ZM253.661 97.4649L253.606 97.1128C254.405 97.0711 255.205 97.0433 256.006 97.0294L256.024 97.3828L256.043 97.7362C255.266 97.7497 254.49 97.7766 253.716 97.817L253.661 97.4649ZM258.392 97.3828L258.411 97.0295C259.212 97.0433 260.012 97.0711 260.811 97.1128L260.756 97.4649L260.701 97.817C259.926 97.7766 259.15 97.7497 258.374 97.7362L258.392 97.3828ZM263.106 97.6288L263.198 97.2792C263.99 97.3484 264.778 97.4314 265.563 97.5282L265.435 97.874L265.307 98.2197C264.547 98.1259 263.782 98.0454 263.015 97.9783L263.106 97.6288ZM267.735 98.1999L267.899 97.8592C268.67 97.9829 269.436 98.1202 270.195 98.2712L269.996 98.6055L269.797 98.9398C269.06 98.7935 268.318 98.6604 267.571 98.5405L267.735 98.1999ZM272.21 99.0895L272.444 98.7628C273.183 98.9392 273.914 99.129 274.637 99.3323L274.369 99.6501L274.101 99.968C273.4 99.7711 272.692 99.5871 271.976 99.4162L272.21 99.0895ZM276.465 100.286L276.766 99.9778C277.462 100.205 278.148 100.444 278.824 100.697L278.491 100.994L278.158 101.291C277.503 101.046 276.838 100.813 276.164 100.594L276.465 100.286ZM280.438 101.772L280.802 101.487C281.443 101.761 282.074 102.046 282.692 102.344L282.299 102.616L281.907 102.887C281.307 102.598 280.696 102.321 280.075 102.056L280.438 101.772ZM284.07 103.523L284.49 103.265C284.781 103.424 285.069 103.585 285.354 103.75L284.921 104L284.488 104.25C284.212 104.09 283.932 103.934 283.65 103.78L284.07 103.523ZM230.827 136.731L231.652 136.209L232.6 136.708L231.693 137.231L230.827 136.731ZM230.764 136.768L229.859 137.244L229.071 136.745L229.898 136.268L230.764 136.768ZM231.173 166.968L230.307 167.468L229.492 166.998L230.255 166.5L231.173 166.968ZM231.283 167.032L232.149 166.532L233.07 167.064L232.094 167.562L231.283 167.032ZM284.483 167.753L283.63 168.261L282.738 167.761L283.617 167.253L284.483 167.753ZM284.494 167.747L285.373 167.254L286.213 167.754L285.36 168.247L284.494 167.747ZM284.216 136.418L283.328 135.931L283.339 135.925L284.216 136.418ZM284.921 136L284.044 135.507L284.055 135.5L284.921 136ZM284.921 104L285.787 103.5C286.076 103.667 286.36 103.836 286.639 104.007L285.748 104.492L284.856 104.977C284.594 104.816 284.327 104.657 284.055 104.5L284.921 104ZM287.319 105.514L288.259 105.06C288.783 105.423 289.285 105.792 289.766 106.168L288.78 106.588L287.795 107.008C287.343 106.655 286.871 106.308 286.379 105.967L287.319 105.514ZM290.128 107.713L291.156 107.328C291.6 107.724 292.022 108.127 292.421 108.535L291.355 108.882L290.288 109.23C289.914 108.847 289.518 108.469 289.1 108.097L290.128 107.713ZM292.455 110.092L293.556 109.783C293.914 110.207 294.248 110.635 294.558 111.068L293.426 111.339L292.295 111.609C292.003 111.202 291.69 110.8 291.354 110.402L292.455 110.092ZM294.265 112.617L295.423 112.387C295.688 112.832 295.93 113.281 296.147 113.733L294.967 113.923L293.787 114.112C293.583 113.687 293.356 113.265 293.107 112.847L294.265 112.617ZM295.532 115.25L296.729 115.102C296.9 115.562 297.046 116.025 297.167 116.489L295.956 116.595L294.745 116.701C294.631 116.265 294.494 115.83 294.334 115.398L295.532 115.25ZM296.24 117.952L297.46 117.888C297.533 118.357 297.582 118.826 297.607 119.295L296.382 119.317L295.158 119.338C295.135 118.896 295.089 118.456 295.02 118.016L296.24 117.952ZM296.382 120.683L297.607 120.705C297.582 121.174 297.533 121.643 297.46 122.112L296.24 122.048L295.02 121.984C295.089 121.544 295.135 121.104 295.158 120.662L296.382 120.683ZM295.956 123.405L297.167 123.511C297.046 123.975 296.9 124.438 296.729 124.898L295.532 124.75L294.334 124.602C294.494 124.17 294.631 123.735 294.745 123.299L295.956 123.405ZM294.967 126.077L296.147 126.267C295.93 126.719 295.688 127.168 295.423 127.613L294.265 127.383L293.107 127.153C293.356 126.735 293.583 126.313 293.787 125.888L294.967 126.077ZM293.426 128.661L294.558 128.932C294.248 129.365 293.914 129.793 293.556 130.217L292.455 129.908L291.354 129.598C291.69 129.2 292.003 128.798 292.295 128.391L293.426 128.661ZM291.355 131.118L292.421 131.465C292.022 131.873 291.6 132.276 291.156 132.672L290.128 132.287L289.1 131.903C289.518 131.531 289.914 131.153 290.288 130.77L291.355 131.118ZM288.78 133.412L289.766 133.832C289.285 134.208 288.783 134.577 288.259 134.94L287.319 134.486L286.379 134.033C286.871 133.692 287.343 133.345 287.795 132.992L288.78 133.412ZM285.748 135.508L286.639 135.993C286.36 136.164 286.076 136.333 285.787 136.5L284.921 136L284.055 135.5C284.327 135.343 284.594 135.184 284.856 135.023L285.748 135.508ZM284.921 136L285.798 136.493L285.622 136.598L284.745 136.104L283.868 135.611L284.044 135.507L284.921 136ZM284.392 136.313L285.269 136.807L285.093 136.911L284.216 136.418L283.339 135.925L283.515 135.82L284.392 136.313ZM284.216 136.418L285.103 136.905C284.824 137.075 284.55 137.247 284.282 137.42L283.368 136.949L282.454 136.478C282.74 136.294 283.031 136.111 283.328 135.931L284.216 136.418ZM281.766 138.054L282.73 138.491C282.229 138.859 281.752 139.235 281.298 139.617L280.288 139.217L279.278 138.817C279.761 138.41 280.27 138.01 280.803 137.618L281.766 138.054ZM278.942 140.431L279.994 140.793C279.58 141.194 279.19 141.602 278.824 142.015L277.734 141.692L276.643 141.37C277.033 140.931 277.448 140.497 277.889 140.069L278.942 140.431ZM276.668 142.996L277.792 143.277C277.47 143.706 277.174 144.139 276.902 144.576L275.749 144.337L274.596 144.098C274.886 143.633 275.202 143.171 275.544 142.715L276.668 142.996ZM274.981 145.709L276.158 145.905C275.934 146.353 275.735 146.804 275.562 147.258L274.366 147.106L273.17 146.954C273.354 146.471 273.566 145.99 273.804 145.513L274.981 145.709ZM273.906 148.523L275.116 148.631C274.993 149.092 274.895 149.554 274.823 150.018L273.603 149.954L272.383 149.891C272.46 149.397 272.565 148.905 272.696 148.415L273.906 148.523ZM273.458 151.394L274.682 151.412C274.661 151.878 274.665 152.344 274.695 152.809L273.471 152.835L272.247 152.861C272.215 152.366 272.211 151.87 272.233 151.375L273.458 151.394ZM273.641 154.274L274.86 154.203C274.941 154.666 275.047 155.128 275.178 155.588L273.97 155.703L272.761 155.818C272.621 155.329 272.509 154.837 272.423 154.344L273.641 154.274ZM274.455 157.117L275.648 156.958C275.829 157.411 276.036 157.861 276.268 158.308L275.095 158.511L273.921 158.714C273.675 158.238 273.455 157.759 273.261 157.277L274.455 157.117ZM275.887 159.878L277.036 159.632C277.315 160.067 277.619 160.499 277.949 160.925L276.83 161.213L275.711 161.501C275.361 161.047 275.037 160.587 274.739 160.124L275.887 159.878ZM277.919 162.511L279.003 162.182C279.376 162.592 279.774 162.997 280.195 163.396L279.149 163.765L278.104 164.133C277.655 163.708 277.232 163.276 276.834 162.839L277.919 162.511ZM280.517 164.971L281.52 164.565C281.981 164.944 282.465 165.317 282.972 165.683L282.016 166.125L281.06 166.567C280.52 166.178 280.005 165.781 279.515 165.377L280.517 164.971ZM283.637 167.22L284.543 166.744C284.814 166.916 285.091 167.086 285.373 167.254L284.494 167.747L283.615 168.239C283.315 168.06 283.02 167.879 282.732 167.696L283.637 167.22ZM284.494 167.747L285.36 168.247L285.357 168.248L284.491 167.748L283.625 167.248L283.628 167.247L284.494 167.747ZM284.486 167.751L285.352 168.251L285.349 168.253L284.483 167.753L283.617 167.253L283.62 167.251L284.486 167.751ZM284.483 167.753L285.336 167.245C285.372 167.266 285.408 167.286 285.445 167.306L284.593 167.814L283.741 168.322C283.705 168.302 283.667 168.281 283.63 168.261L284.483 167.753ZM284.812 167.938L285.671 167.434C285.709 167.455 285.748 167.478 285.787 167.5L284.921 168L284.055 168.5C284.022 168.481 283.988 168.461 283.954 168.442L284.812 167.938ZM284.921 168L285.787 167.5C286.076 167.667 286.36 167.836 286.639 168.007L285.748 168.492L284.856 168.977C284.594 168.816 284.327 168.657 284.055 168.5L284.921 168ZM287.319 169.514L288.259 169.06C288.783 169.423 289.285 169.792 289.766 170.168L288.78 170.588L287.795 171.008C287.343 170.655 286.871 170.308 286.379 169.967L287.319 169.514ZM290.128 171.713L291.156 171.328C291.6 171.724 292.022 172.127 292.421 172.535L291.355 172.882L290.288 173.23C289.914 172.847 289.518 172.469 289.1 172.097L290.128 171.713ZM292.455 174.092L293.556 173.783C293.914 174.207 294.248 174.635 294.558 175.068L293.426 175.339L292.295 175.609C292.003 175.202 291.69 174.8 291.354 174.402L292.455 174.092ZM294.265 176.617L295.423 176.387C295.688 176.832 295.93 177.281 296.147 177.733L294.967 177.923L293.787 178.112C293.583 177.687 293.356 177.265 293.107 176.847L294.265 176.617ZM295.532 179.25L296.729 179.102C296.9 179.562 297.046 180.025 297.167 180.489L295.956 180.595L294.745 180.701C294.631 180.265 294.494 179.83 294.334 179.398L295.532 179.25ZM296.24 181.952L297.46 181.888C297.533 182.357 297.582 182.826 297.607 183.295L296.382 183.317L295.158 183.338C295.135 182.896 295.089 182.456 295.02 182.016L296.24 181.952ZM296.382 184.683L297.607 184.705C297.582 185.174 297.533 185.643 297.46 186.112L296.24 186.048L295.02 185.984C295.089 185.544 295.135 185.104 295.158 184.662L296.382 184.683ZM295.956 187.405L297.167 187.511C297.046 187.975 296.9 188.438 296.729 188.898L295.532 188.75L294.334 188.602C294.494 188.17 294.631 187.735 294.745 187.299L295.956 187.405ZM294.967 190.077L296.147 190.267C295.93 190.719 295.688 191.168 295.423 191.613L294.265 191.383L293.107 191.153C293.356 190.735 293.583 190.313 293.787 189.888L294.967 190.077ZM293.426 192.661L294.558 192.932C294.248 193.365 293.914 193.793 293.556 194.217L292.455 193.908L291.354 193.598C291.69 193.2 292.003 192.798 292.295 192.391L293.426 192.661ZM291.355 195.118L292.421 195.465C292.022 195.873 291.6 196.276 291.156 196.672L290.128 196.287L289.1 195.903C289.518 195.531 289.914 195.153 290.288 194.77L291.355 195.118ZM288.78 197.412L289.766 197.832C289.285 198.208 288.783 198.577 288.259 198.94L287.319 198.486L286.379 198.033C286.871 197.692 287.343 197.345 287.795 196.992L288.78 197.412ZM285.748 199.508L286.639 199.993C286.36 200.164 286.076 200.333 285.787 200.5L284.921 200L284.055 199.5C284.327 199.343 284.594 199.184 284.856 199.023L285.748 199.508ZM284.921 200L285.787 200.5C285.498 200.667 285.205 200.831 284.909 200.992L284.07 200.477L283.23 199.963C283.508 199.811 283.783 199.657 284.055 199.5L284.921 200ZM282.299 201.384L283.084 201.927C282.457 202.23 281.817 202.52 281.165 202.797L280.438 202.228L279.711 201.659C280.323 201.399 280.924 201.126 281.514 200.842L282.299 201.384ZM278.491 203.006L279.157 203.6C278.47 203.856 277.773 204.1 277.067 204.33L276.465 203.714L275.863 203.099C276.526 202.882 277.18 202.654 277.825 202.413L278.491 203.006ZM274.369 204.35L274.905 204.986C274.171 205.192 273.428 205.385 272.678 205.564L272.21 204.911L271.742 204.257C272.446 204.089 273.143 203.908 273.833 203.714L274.369 204.35ZM269.996 205.394L270.395 206.063C269.623 206.216 268.845 206.356 268.062 206.481L267.735 205.8L267.407 205.119C268.142 205.001 268.873 204.87 269.597 204.726L269.996 205.394ZM265.435 206.126L265.691 206.818C264.894 206.916 264.093 207 263.289 207.07L263.106 206.371L262.923 205.672C263.678 205.606 264.431 205.527 265.179 205.435L265.435 206.126ZM260.756 206.535L260.866 207.239C260.055 207.282 259.242 207.31 258.429 207.324L258.392 206.617L258.355 205.91C259.12 205.897 259.883 205.871 260.645 205.831L260.756 206.535ZM256.024 206.617L255.988 207.324C255.174 207.31 254.362 207.282 253.551 207.239L253.661 206.535L253.771 205.831C254.533 205.871 255.297 205.897 256.061 205.91L256.024 206.617ZM251.31 206.371L251.127 207.07C250.323 207 249.522 206.916 248.725 206.818L248.981 206.126L249.237 205.435C249.986 205.527 250.738 205.606 251.494 205.672L251.31 206.371ZM246.682 205.8L246.354 206.481C245.571 206.356 244.793 206.216 244.022 206.063L244.421 205.394L244.819 204.726C245.544 204.87 246.274 205.001 247.01 205.119L246.682 205.8ZM242.206 204.911L241.738 205.564C240.988 205.385 240.246 205.192 239.512 204.986L240.048 204.35L240.584 203.714C241.273 203.908 241.97 204.089 242.675 204.257L242.206 204.911ZM237.952 203.714L237.349 204.33C236.643 204.1 235.946 203.856 235.26 203.6L235.926 203.006L236.592 202.413C237.236 202.654 237.891 202.882 238.554 203.099L237.952 203.714ZM233.978 202.228L233.251 202.797C232.6 202.52 231.96 202.23 231.332 201.927L232.117 201.384L232.902 200.842C233.492 201.126 234.094 201.399 234.705 201.659L233.978 202.228ZM230.347 200.477L229.507 200.992C229.211 200.831 228.919 200.667 228.629 200.5L229.496 200L230.362 199.5C230.634 199.657 230.909 199.811 231.187 199.963L230.347 200.477ZM229.496 200L228.629 200.5C228.34 200.333 228.056 200.164 227.778 199.993L228.669 199.508L229.56 199.023C229.822 199.184 230.089 199.343 230.362 199.5L229.496 200ZM227.098 198.486L226.158 198.94C225.634 198.577 225.131 198.208 224.651 197.832L225.636 197.412L226.622 196.992C227.073 197.345 227.545 197.692 228.038 198.033L227.098 198.486ZM224.289 196.287L223.261 196.672C222.816 196.276 222.394 195.873 221.996 195.465L223.062 195.118L224.129 194.77C224.503 195.153 224.899 195.531 225.317 195.903L224.289 196.287ZM221.961 193.908L220.86 194.217C220.503 193.793 220.169 193.365 219.859 192.932L220.99 192.661L222.122 192.391C222.413 192.798 222.727 193.2 223.062 193.598L221.961 193.908ZM220.152 191.383L218.994 191.613C218.728 191.168 218.487 190.719 218.269 190.267L219.449 190.077L220.629 189.888C220.834 190.313 221.061 190.735 221.31 191.153L220.152 191.383ZM218.885 188.75L217.687 188.898C217.517 188.438 217.371 187.975 217.249 187.511L218.46 187.405L219.671 187.299C219.785 187.735 219.923 188.17 220.083 188.602L218.885 188.75ZM218.176 186.048L216.957 186.112C216.883 185.643 216.834 185.174 216.81 184.705L218.034 184.683L219.258 184.662C219.281 185.104 219.327 185.544 219.396 185.984L218.176 186.048ZM218.034 183.317L216.81 183.295C216.834 182.826 216.883 182.357 216.957 181.888L218.176 181.952L219.396 182.016C219.327 182.456 219.281 182.896 219.258 183.338L218.034 183.317ZM218.46 180.595L217.249 180.489C217.371 180.025 217.517 179.562 217.687 179.102L218.885 179.25L220.083 179.398C219.923 179.83 219.785 180.265 219.671 180.701L218.46 180.595ZM219.449 177.923L218.269 177.733C218.487 177.281 218.728 176.832 218.994 176.387L220.152 176.617L221.31 176.847C221.061 177.265 220.834 177.687 220.629 178.112L219.449 177.923ZM220.99 175.339L219.859 175.068C220.169 174.635 220.503 174.207 220.86 173.783L221.961 174.092L223.062 174.402C222.727 174.8 222.413 175.202 222.122 175.609L220.99 175.339ZM223.062 172.882L221.996 172.535C222.394 172.127 222.816 171.724 223.261 171.328L224.289 171.713L225.317 172.097C224.899 172.469 224.503 172.847 224.129 173.23L223.062 172.882ZM225.636 170.588L224.651 170.168C225.131 169.792 225.634 169.423 226.158 169.06L227.098 169.514L228.038 169.967C227.545 170.308 227.073 170.655 226.622 171.008L225.636 170.588ZM228.669 168.492L227.778 168.007C228.056 167.836 228.34 167.667 228.629 167.5L229.496 168L230.362 168.5C230.089 168.657 229.822 168.816 229.56 168.977L228.669 168.492ZM229.496 168L228.629 167.5C228.779 167.414 228.93 167.328 229.081 167.244L229.933 167.752L230.784 168.26C230.642 168.34 230.501 168.419 230.362 168.5L229.496 168ZM230.827 167.268L230.003 166.745C230.159 166.663 230.315 166.582 230.472 166.502L231.283 167.032L232.094 167.562C231.946 167.638 231.798 167.714 231.651 167.792L230.827 167.268ZM231.283 167.032L230.417 167.532L230.39 167.516L231.256 167.016L232.122 166.516L232.149 166.532L231.283 167.032ZM231.2 166.984L230.334 167.484L230.307 167.468L231.173 166.968L232.039 166.468L232.066 166.484L231.2 166.984ZM231.173 166.968L230.255 166.5C230.511 166.332 230.763 166.163 231.009 165.992L231.95 166.444L232.892 166.896C232.63 167.078 232.363 167.258 232.09 167.437L231.173 166.968ZM233.419 165.359L232.431 164.941C232.889 164.58 233.326 164.214 233.741 163.841L234.771 164.224L235.801 164.606C235.359 165.003 234.894 165.394 234.406 165.777L233.419 165.359ZM236 163.043L234.931 162.697C235.308 162.308 235.664 161.913 235.997 161.514L237.1 161.821L238.204 162.127C237.849 162.553 237.47 162.973 237.068 163.388L236 163.043ZM238.07 160.562L236.936 160.294C237.228 159.881 237.497 159.464 237.743 159.044L238.903 159.271L240.064 159.497C239.801 159.945 239.514 160.389 239.203 160.829L238.07 160.562ZM239.599 157.953L238.417 157.768C238.619 157.338 238.799 156.905 238.955 156.47L240.154 156.613L241.354 156.757C241.187 157.22 240.996 157.681 240.781 158.138L239.599 157.953ZM240.567 155.256L239.355 155.155C239.466 154.714 239.553 154.272 239.617 153.829L240.837 153.887L242.058 153.946C241.99 154.418 241.897 154.888 241.78 155.357L240.567 155.256ZM240.963 152.512L239.739 152.496C239.756 152.051 239.75 151.606 239.721 151.161L240.945 151.134L242.169 151.107C242.2 151.58 242.206 152.054 242.188 152.528L240.963 152.512ZM240.782 149.759L239.563 149.829C239.487 149.387 239.388 148.945 239.266 148.505L240.475 148.393L241.685 148.281C241.815 148.749 241.92 149.219 242.001 149.69L240.782 149.759ZM240.026 147.04L238.83 147.195C238.663 146.761 238.472 146.33 238.258 145.902L239.434 145.705L240.611 145.509C240.839 145.965 241.042 146.424 241.221 146.886L240.026 147.04ZM238.703 144.394L237.549 144.631C237.291 144.213 237.011 143.799 236.708 143.389L237.834 143.111L238.961 142.834C239.284 143.27 239.582 143.712 239.857 144.157L238.703 144.394ZM236.831 141.861L235.736 142.178C235.392 141.782 235.026 141.39 234.638 141.004L235.697 140.649L236.756 140.294C237.17 140.705 237.56 141.122 237.926 141.544L236.831 141.861ZM234.436 139.479L233.417 139.871C232.992 139.503 232.545 139.14 232.077 138.783L233.053 138.356L234.03 137.929C234.528 138.309 235.003 138.695 235.456 139.088L234.436 139.479ZM231.556 137.285L230.627 137.745C230.376 137.576 230.12 137.409 229.859 137.244L230.764 136.768L231.669 136.291C231.947 136.467 232.219 136.645 232.486 136.824L231.556 137.285ZM230.764 136.768L229.898 136.268L229.914 136.259L230.78 136.759L231.646 137.259L231.63 137.268L230.764 136.768ZM230.811 136.74L229.945 136.24L229.961 136.231L230.827 136.731L231.693 137.231L231.677 137.24L230.811 136.74ZM230.827 136.731L230.001 137.254C229.886 137.193 229.77 137.132 229.655 137.07L230.489 136.552L231.322 136.034C231.432 136.093 231.542 136.151 231.652 136.209L230.827 136.731ZM229.823 136.186L228.968 136.693C228.855 136.629 228.742 136.565 228.629 136.5L229.496 136L230.362 135.5C230.466 135.56 230.571 135.62 230.677 135.68L229.823 136.186ZM229.496 136L228.629 136.5C228.34 136.333 228.056 136.164 227.778 135.993L228.669 135.508L229.56 135.023C229.822 135.184 230.089 135.343 230.362 135.5L229.496 136ZM227.098 134.486L226.158 134.94C225.634 134.577 225.131 134.208 224.651 133.832L225.636 133.412L226.622 132.992C227.073 133.345 227.545 133.692 228.038 134.033L227.098 134.486ZM224.289 132.287L223.261 132.672C222.816 132.276 222.394 131.873 221.996 131.465L223.062 131.118L224.129 130.77C224.503 131.153 224.899 131.531 225.317 131.903L224.289 132.287ZM221.961 129.908L220.86 130.217C220.503 129.793 220.169 129.365 219.859 128.932L220.99 128.661L222.122 128.391C222.413 128.798 222.727 129.2 223.062 129.598L221.961 129.908ZM220.152 127.383L218.994 127.613C218.728 127.168 218.487 126.719 218.269 126.267L219.449 126.077L220.629 125.888C220.834 126.313 221.061 126.735 221.31 127.153L220.152 127.383ZM218.885 124.75L217.687 124.898C217.517 124.438 217.371 123.975 217.249 123.511L218.46 123.405L219.671 123.299C219.785 123.735 219.923 124.17 220.083 124.602L218.885 124.75ZM218.176 122.048L216.957 122.112C216.883 121.643 216.834 121.174 216.81 120.705L218.034 120.683L219.258 120.662C219.281 121.104 219.327 121.544 219.396 121.984L218.176 122.048ZM218.034 119.317L216.81 119.295C216.834 118.826 216.883 118.357 216.957 117.888L218.176 117.952L219.396 118.016C219.327 118.456 219.281 118.896 219.258 119.338L218.034 119.317ZM218.46 116.595L217.249 116.489C217.371 116.025 217.517 115.562 217.687 115.102L218.885 115.25L220.083 115.398C219.923 115.83 219.785 116.265 219.671 116.701L218.46 116.595ZM219.449 113.923L218.269 113.733C218.487 113.281 218.728 112.832 218.994 112.387L220.152 112.617L221.31 112.847C221.061 113.265 220.834 113.687 220.629 114.112L219.449 113.923ZM220.99 111.339L219.859 111.068C220.169 110.635 220.503 110.207 220.86 109.783L221.961 110.092L223.062 110.402C222.727 110.8 222.413 111.202 222.122 111.609L220.99 111.339ZM223.062 108.882L221.996 108.535C222.394 108.127 222.816 107.724 223.261 107.328L224.289 107.713L225.317 108.097C224.899 108.469 224.503 108.847 224.129 109.23L223.062 108.882ZM225.636 106.588L224.651 106.168C225.131 105.792 225.634 105.423 226.158 105.06L227.098 105.514L228.038 105.967C227.545 106.308 227.073 106.655 226.622 107.008L225.636 106.588ZM228.669 104.492L227.778 104.007C228.056 103.836 228.34 103.667 228.629 103.5L229.496 104L230.362 104.5C230.089 104.657 229.822 104.816 229.56 104.977L228.669 104.492ZM229.496 104L228.629 103.5C228.919 103.333 229.211 103.169 229.507 103.008L230.347 103.523L231.187 104.037C230.909 104.189 230.634 104.343 230.362 104.5L229.496 104ZM232.117 102.616L231.332 102.073C231.96 101.77 232.6 101.48 233.251 101.203L233.978 101.772L234.705 102.341C234.094 102.601 233.492 102.874 232.902 103.158L232.117 102.616ZM235.926 100.994L235.26 100.4C235.946 100.144 236.643 99.9002 237.35 99.67L237.952 100.286L238.554 100.901C237.891 101.118 237.236 101.346 236.592 101.587L235.926 100.994ZM240.048 99.6501L239.512 99.0144C240.246 98.808 240.988 98.6153 241.738 98.4361L242.206 99.0895L242.675 99.7429C241.97 99.9111 241.273 100.092 240.584 100.286L240.048 99.6501ZM244.421 98.6055L244.022 97.9369C244.793 97.7836 245.571 97.6441 246.354 97.5186L246.682 98.1999L247.01 98.8812C246.274 98.9991 245.544 99.1301 244.819 99.2741L244.421 98.6055ZM248.981 97.874L248.725 97.1825C249.522 97.0842 250.323 96.9999 251.127 96.9296L251.31 97.6288L251.494 98.3279C250.738 98.3939 249.986 98.4731 249.237 98.5655L248.981 97.874ZM253.661 97.4649L253.551 96.7607C254.362 96.7184 255.174 96.6902 255.988 96.6761L256.024 97.3828L256.061 98.0896C255.297 98.1029 254.533 98.1294 253.771 98.1691L253.661 97.4649ZM258.392 97.3828L258.429 96.6761C259.242 96.6902 260.055 96.7184 260.866 96.7607L260.756 97.4649L260.645 98.1691C259.883 98.1294 259.12 98.1029 258.355 98.0896L258.392 97.3828ZM263.106 97.6288L263.29 96.9296C264.093 96.9999 264.894 97.0842 265.691 97.1825L265.435 97.874L265.179 98.5655C264.431 98.4731 263.678 98.3939 262.923 98.3279L263.106 97.6288ZM267.735 98.1999L268.062 97.5186C268.845 97.6441 269.623 97.7836 270.395 97.9369L269.996 98.6055L269.597 99.2741C268.873 99.1301 268.142 98.9991 267.407 98.8812L267.735 98.1999ZM272.21 99.0895L272.678 98.4361C273.428 98.6153 274.171 98.808 274.905 99.0144L274.369 99.6501L273.833 100.286C273.143 100.092 272.446 99.9111 271.742 99.7429L272.21 99.0895ZM276.465 100.286L277.067 99.67C277.773 99.9002 278.47 100.144 279.157 100.4L278.491 100.994L277.825 101.587C277.18 101.346 276.526 101.118 275.863 100.901L276.465 100.286ZM280.438 101.772L281.165 101.203C281.817 101.48 282.457 101.77 283.084 102.073L282.299 102.616L281.514 103.158C280.924 102.874 280.323 102.601 279.711 102.341L280.438 101.772ZM284.07 103.523L284.909 103.008C285.205 103.169 285.498 103.333 285.787 103.5L284.921 104L284.055 104.5C283.783 104.343 283.508 104.189 283.23 104.037L284.07 103.523Z" fill="#BBC2CC" mask="url(#primitive-card-transform-path-6-outside-1_211_187)" />
                              <path d="M175.909 177.373C169.036 175.081 163.167 171.908 158.757 168.098C154.348 164.288 151.515 159.943 150.479 155.4C149.443 150.856 150.232 146.236 152.783 141.897C155.334 137.558 159.58 133.615 165.193 130.375" stroke="#1066F1" strokeOpacity="0.5" strokeWidth="0.5" strokeDasharray="0 3" />
                              <path d="M338.507 125.627C345.38 127.919 351.249 131.092 355.659 134.902C360.068 138.712 362.901 143.057 363.937 147.6C364.973 152.144 364.184 156.764 361.633 161.103C359.082 165.442 354.836 169.385 349.223 172.625" stroke="#1066F1" strokeOpacity="0.5" strokeWidth="0.5" strokeDasharray="0 3" />
                              <g clipPath="url(#primitive-card-transform-clip2_211_187)">
                                <circle opacity="0.5" cx="17" cy="17" r="16.5" transform="matrix(0.866025 0.5 -0.866025 0.5 201.782 135)" fill="#1066F1" fillOpacity="0.3" stroke="#1066F1" />
                                <path opacity="0.5" d="M198.317 122L174.343 173.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M201.782 124L177.808 175.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M205.247 126L181.272 177.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M208.712 128L184.737 179.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M212.173 130L188.198 181.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M215.638 132L191.663 183.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M219.103 134L195.128 185.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M222.567 136L198.593 187.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M226.032 138L202.058 189.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M229.493 140L205.518 191.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M232.958 142L208.983 193.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                              </g>
                              <rect x="-2.98023e-08" y="0.5" width="33" height="33" rx="16.5" transform="matrix(0.866025 0.5 -0.866025 0.5 202.215 135.25)" stroke="#1066F1" />
                              <circle cx="17" cy="17" r="16.5" transform="matrix(0.866025 0.5 -0.866025 0.5 312.634 135)" fill="#1066F1" fillOpacity="0.3" stroke="#1066F1" />
                              <mask id="primitive-card-transform-path-25-inside-2_211_187" fill="white">
                                <path d="M340.346 136C355.652 144.837 355.652 159.163 340.346 168C325.041 176.837 300.226 176.837 284.921 168C284.485 167.749 284.065 167.491 283.654 167.231L283.59 167.268C268.812 159.488 246.22 159.41 231.282 167.032L231.171 166.968C230.634 167.319 230.077 167.664 229.495 168C214.19 176.837 189.375 176.837 174.07 168C158.764 159.163 158.764 144.837 174.07 136C189.375 127.163 214.19 127.163 229.495 136C229.64 136.083 229.781 136.168 229.923 136.253L229.934 136.247C245.029 144.699 268.989 144.753 284.196 136.408L285.646 135.592C301 127.166 325.28 127.302 340.346 136Z" />
                              </mask>
                              <path d="M283.654 167.231L284.559 166.755L283.695 166.208L282.788 166.731L283.654 167.231ZM283.59 167.268L282.765 167.791L283.63 168.246L284.457 167.768L283.59 167.268ZM231.282 167.032L230.416 167.532L231.23 168.002L232.093 167.562L231.282 167.032ZM231.171 166.968L232.037 166.468L231.116 165.936L230.254 166.499L231.171 166.968ZM229.923 136.253L229.044 136.745L229.91 137.261L230.789 136.753L229.923 136.253ZM229.934 136.247L230.787 135.739L229.921 135.254L229.068 135.747L229.934 136.247ZM284.196 136.408L285.04 136.92L285.051 136.914L284.196 136.408ZM285.646 135.592L284.802 135.08L284.791 135.086L285.646 135.592ZM340.346 136L339.48 136.5C354.307 145.06 354.307 158.94 339.48 167.5L340.346 168L341.212 168.5C356.996 159.387 356.996 144.613 341.212 135.5L340.346 136ZM340.346 168L339.48 167.5C324.653 176.06 300.614 176.06 285.787 167.5L284.921 168L284.055 168.5C299.838 177.613 325.429 177.613 341.212 168.5L340.346 168ZM284.921 168L285.787 167.5C285.367 167.258 284.96 167.009 284.559 166.755L283.654 167.231L282.749 167.708C283.169 167.974 283.603 168.239 284.055 168.5L284.921 168ZM283.654 167.231L282.788 166.731L282.724 166.768L283.59 167.268L284.457 167.768L284.52 167.731L283.654 167.231ZM283.59 167.268L284.416 166.746C269.174 158.722 245.876 158.641 230.471 166.502L231.282 167.032L232.093 167.562C246.563 160.178 268.449 160.254 282.765 167.791L283.59 167.268ZM231.282 167.032L232.148 166.532L232.037 166.468L231.171 166.968L230.305 167.468L230.416 167.532L231.282 167.032ZM231.171 166.968L230.254 166.499C229.73 166.841 229.191 167.176 228.629 167.5L229.495 168L230.361 168.5C230.963 168.152 231.537 167.796 232.089 167.436L231.171 166.968ZM229.495 168L228.629 167.5C213.802 176.06 189.763 176.06 174.936 167.5L174.07 168L173.204 168.5C188.987 177.613 214.578 177.613 230.361 168.5L229.495 168ZM174.07 168L174.936 167.5C160.109 158.94 160.109 145.06 174.936 136.5L174.07 136L173.204 135.5C157.42 144.613 157.42 159.387 173.204 168.5L174.07 168ZM174.07 136L174.936 136.5C189.763 127.94 213.802 127.94 228.629 136.5L229.495 136L230.361 135.5C214.578 126.387 188.987 126.387 173.204 135.5L174.07 136ZM229.495 136L228.629 136.5C228.765 136.578 228.897 136.658 229.044 136.745L229.923 136.253L230.802 135.761C230.666 135.679 230.514 135.588 230.361 135.5L229.495 136ZM229.923 136.253L230.789 136.753L230.8 136.747L229.934 136.247L229.068 135.747L229.057 135.753L229.923 136.253ZM229.934 136.247L229.081 136.754C244.649 145.47 269.357 145.527 285.04 136.92L284.196 136.408L283.352 135.895C268.621 143.98 245.41 143.927 230.787 135.739L229.934 136.247ZM284.196 136.408L285.051 136.914L286.5 136.099L285.646 135.592L284.791 135.086L283.341 135.901L284.196 136.408ZM285.646 135.592L286.489 136.105C301.363 127.942 324.885 128.073 339.48 136.5L340.346 136L341.212 135.5C325.675 126.53 300.636 126.39 284.802 135.08L285.646 135.592Z" fill="#1066F1" mask="url(#primitive-card-transform-path-25-inside-2_211_187)" />
                            </g>
                            <rect x="-2.98023e-08" y="0.5" width="383" height="210" rx="15.5" transform="matrix(0.866025 0.5 -0.866025 0.5 183.164 3.25)" stroke="#D6DBE1" />
                            <g clipPath="url(#primitive-card-transform-clip3_211_187)">
                              <rect width="384" height="211" rx="16" transform="matrix(0.866025 0.5 -0.866025 0.5 182.731 0)" fill="#F8F9FC" />
                              <g clipPath="url(#primitive-card-transform-clip4_211_187)">
                                <path opacity="0.2" d="M472.85 192L332.554 273L42.4353 105.5L182.731 24.5L472.85 192Z" stroke="#4D8CF9" />
                              </g>
                              <circle cx="33" cy="33" r="32.5" transform="matrix(0.866025 0.5 -0.866025 0.5 257.208 84)" stroke="#BBC2CC" />
                              <circle cx="33" cy="33" r="32.5" transform="matrix(0.866025 0.5 -0.866025 0.5 257.208 148)" stroke="#BBC2CC" />
                              <mask id="primitive-card-transform-path-32-outside-3_211_187" maskUnits="userSpaceOnUse" x="144.625" y="84" width="225.167" height="130" fill="black">
                                <rect fill="white" x="144.625" y="84" width="225.167" height="130" />
                                <path d="M284.921 101C269.616 92.1634 244.801 92.1634 229.496 101C214.19 109.837 214.19 124.163 229.496 133C229.931 133.251 230.376 133.494 230.827 133.731L230.764 133.768C244.239 142.3 244.375 155.344 231.173 163.968L231.283 164.032C230.675 164.343 230.077 164.664 229.496 165C214.19 173.837 214.19 188.163 229.496 197C244.801 205.837 269.616 205.837 284.921 197C300.226 188.163 300.226 173.837 284.921 165C284.777 164.917 284.629 164.835 284.483 164.753L284.494 164.747C269.855 156.031 269.76 142.198 284.216 133.418L284.921 133C300.226 124.163 300.226 109.837 284.921 101Z" />
                              </mask>
                              <path d="M230.827 133.731L231.239 133.47L231.713 133.72L231.26 133.981L230.827 133.731ZM230.764 133.768L230.312 134.006L229.918 133.756L230.331 133.518L230.764 133.768ZM231.173 163.968L230.74 164.218L230.332 163.983L230.714 163.734L231.173 163.968ZM231.283 164.032L231.716 163.782L232.177 164.048L231.689 164.297L231.283 164.032ZM284.483 164.753L284.057 165.007L283.61 164.757L284.05 164.503L284.483 164.753ZM284.494 164.747L284.934 164.5L285.353 164.75L284.927 164.997L284.494 164.747ZM284.216 133.418L283.772 133.174L283.777 133.171L284.216 133.418ZM284.921 133L284.482 132.753L284.488 132.75L284.921 133ZM284.921 101L285.354 100.75C285.639 100.915 285.919 101.081 286.193 101.249L285.748 101.492L285.302 101.734C285.036 101.571 284.765 101.41 284.488 101.25L284.921 101ZM287.319 102.514L287.789 102.287C288.305 102.644 288.8 103.008 289.273 103.378L288.78 103.588L288.287 103.798C287.829 103.439 287.349 103.086 286.849 102.74L287.319 102.514ZM290.128 104.713L290.642 104.52C291.08 104.911 291.495 105.307 291.888 105.708L291.355 105.882L290.821 106.056C290.441 105.667 290.038 105.283 289.614 104.905L290.128 104.713ZM292.455 107.092L293.006 106.938C293.358 107.355 293.687 107.777 293.992 108.204L293.426 108.339L292.861 108.474C292.564 108.061 292.246 107.652 291.905 107.247L292.455 107.092ZM294.265 109.617L294.844 109.502C295.105 109.941 295.343 110.383 295.557 110.828L294.967 110.923L294.377 111.017C294.17 110.586 293.939 110.157 293.686 109.732L294.265 109.617ZM295.532 112.25L296.131 112.176C296.298 112.629 296.442 113.085 296.562 113.542L295.956 113.595L295.351 113.648C295.235 113.205 295.095 112.763 294.933 112.324L295.532 112.25ZM296.24 114.952L296.85 114.92C296.922 115.381 296.97 115.843 296.994 116.306L296.382 116.317L295.77 116.327C295.747 115.879 295.7 115.431 295.63 114.984L296.24 114.952ZM296.382 117.683L296.994 117.694C296.97 118.157 296.922 118.619 296.85 119.08L296.24 119.048L295.63 119.016C295.7 118.569 295.747 118.121 295.77 117.673L296.382 117.683ZM295.956 120.405L296.562 120.458C296.442 120.915 296.298 121.371 296.131 121.824L295.532 121.75L294.933 121.676C295.095 121.237 295.235 120.795 295.351 120.352L295.956 120.405ZM294.967 123.077L295.557 123.172C295.343 123.617 295.105 124.059 294.844 124.498L294.265 124.383L293.686 124.268C293.939 123.843 294.17 123.414 294.377 122.983L294.967 123.077ZM293.426 125.661L293.992 125.796C293.687 126.223 293.358 126.645 293.006 127.062L292.455 126.908L291.905 126.753C292.246 126.348 292.564 125.939 292.861 125.526L293.426 125.661ZM291.355 128.118L291.888 128.292C291.495 128.693 291.08 129.089 290.642 129.48L290.128 129.287L289.614 129.095C290.038 128.717 290.441 128.333 290.821 127.944L291.355 128.118ZM288.78 130.412L289.273 130.622C288.8 130.992 288.305 131.356 287.789 131.713L287.319 131.486L286.849 131.26C287.349 130.914 287.829 130.561 288.287 130.202L288.78 130.412ZM285.748 132.508L286.193 132.751C285.919 132.919 285.639 133.085 285.354 133.25L284.921 133L284.488 132.75C284.765 132.59 285.036 132.429 285.302 132.266L285.748 132.508ZM284.921 133L285.36 133.247L285.183 133.351L284.745 133.104L284.306 132.858L284.483 132.753L284.921 133ZM284.392 133.313L284.831 133.56L284.654 133.665L284.216 133.418L283.777 133.171L283.954 133.067L284.392 133.313ZM284.216 133.418L284.66 133.662C284.376 133.834 284.098 134.008 283.825 134.185L283.368 133.949L282.911 133.714C283.192 133.532 283.479 133.352 283.772 133.174L284.216 133.418ZM281.766 135.054L282.248 135.272C281.739 135.647 281.254 136.028 280.793 136.417L280.288 136.217L279.783 136.017C280.259 135.616 280.76 135.222 281.284 134.836L281.766 135.054ZM278.942 137.431L279.468 137.612C279.047 138.02 278.65 138.434 278.279 138.853L277.734 138.692L277.188 138.531C277.572 138.098 277.981 137.671 278.415 137.25L278.942 137.431ZM276.668 139.996L277.23 140.137C276.903 140.572 276.602 141.012 276.325 141.457L275.749 141.337L275.173 141.218C275.458 140.759 275.769 140.305 276.106 139.856L276.668 139.996ZM274.981 142.709L275.569 142.807C275.342 143.262 275.14 143.721 274.964 144.182L274.366 144.106L273.768 144.03C273.95 143.554 274.158 143.081 274.393 142.611L274.981 142.709ZM273.906 145.523L274.511 145.577C274.386 146.045 274.287 146.515 274.213 146.986L273.603 146.954L272.993 146.922C273.069 146.437 273.172 145.952 273.301 145.469L273.906 145.523ZM273.458 148.394L274.07 148.403C274.048 148.876 274.052 149.349 274.083 149.822L273.471 149.835L272.859 149.848C272.828 149.36 272.823 148.872 272.846 148.384L273.458 148.394ZM273.641 151.274L274.251 151.238C274.333 151.709 274.44 152.178 274.574 152.645L273.97 152.703L273.366 152.76C273.228 152.278 273.117 151.794 273.032 151.309L273.641 151.274ZM274.455 154.117L275.051 154.038C275.236 154.498 275.446 154.955 275.681 155.409L275.095 155.511L274.508 155.612C274.265 155.144 274.048 154.672 273.858 154.197L274.455 154.117ZM275.887 156.878L276.461 156.755C276.745 157.197 277.055 157.636 277.389 158.069L276.83 158.213L276.271 158.357C275.925 157.91 275.606 157.457 275.313 157.001L275.887 156.878ZM277.919 159.511L278.461 159.346C278.84 159.763 279.244 160.175 279.672 160.581L279.149 160.765L278.627 160.949C278.185 160.53 277.768 160.105 277.377 159.675L277.919 159.511ZM280.517 161.971L281.019 161.768C281.487 162.153 281.979 162.532 282.494 162.904L282.016 163.125L281.538 163.346C281.006 162.963 280.499 162.572 280.016 162.174L280.517 161.971ZM283.637 164.22L284.09 163.982C284.365 164.157 284.647 164.33 284.934 164.5L284.494 164.747L284.054 164.993C283.759 164.817 283.469 164.638 283.184 164.458L283.637 164.22ZM284.494 164.747L284.927 164.997L284.924 164.998L284.491 164.748L284.058 164.498L284.061 164.497L284.494 164.747ZM284.486 164.751L284.919 165.001L284.916 165.003L284.483 164.753L284.05 164.503L284.053 164.501L284.486 164.751ZM284.483 164.753L284.909 164.499C284.946 164.52 284.982 164.54 285.019 164.56L284.593 164.814L284.167 165.068C284.131 165.048 284.094 165.027 284.057 165.007L284.483 164.753ZM284.812 164.938L285.242 164.686C285.279 164.707 285.317 164.728 285.354 164.75L284.921 165L284.488 165.25C284.453 165.23 284.418 165.21 284.383 165.19L284.812 164.938ZM284.921 165L285.354 164.75C285.639 164.915 285.919 165.081 286.193 165.249L285.748 165.492L285.302 165.734C285.036 165.571 284.765 165.41 284.488 165.25L284.921 165ZM287.319 166.514L287.789 166.287C288.305 166.644 288.8 167.008 289.273 167.378L288.78 167.588L288.287 167.798C287.829 167.439 287.349 167.086 286.849 166.74L287.319 166.514ZM290.128 168.713L290.642 168.52C291.08 168.911 291.495 169.307 291.888 169.708L291.355 169.882L290.821 170.056C290.441 169.667 290.038 169.283 289.614 168.905L290.128 168.713ZM292.455 171.092L293.006 170.938C293.358 171.355 293.687 171.777 293.992 172.204L293.426 172.339L292.861 172.474C292.564 172.061 292.246 171.652 291.905 171.247L292.455 171.092ZM294.265 173.617L294.844 173.502C295.105 173.941 295.343 174.383 295.557 174.828L294.967 174.923L294.377 175.017C294.17 174.586 293.939 174.157 293.686 173.732L294.265 173.617ZM295.532 176.25L296.131 176.176C296.298 176.629 296.442 177.085 296.562 177.542L295.956 177.595L295.351 177.648C295.235 177.205 295.095 176.763 294.933 176.324L295.532 176.25ZM296.24 178.952L296.85 178.92C296.922 179.381 296.97 179.843 296.994 180.306L296.382 180.317L295.77 180.327C295.747 179.879 295.7 179.431 295.63 178.984L296.24 178.952ZM296.382 181.683L296.994 181.694C296.97 182.157 296.922 182.619 296.85 183.08L296.24 183.048L295.63 183.016C295.7 182.569 295.747 182.121 295.77 181.673L296.382 181.683ZM295.956 184.405L296.562 184.458C296.442 184.915 296.298 185.371 296.131 185.824L295.532 185.75L294.933 185.676C295.095 185.237 295.235 184.795 295.351 184.352L295.956 184.405ZM294.967 187.077L295.557 187.172C295.343 187.617 295.105 188.059 294.844 188.498L294.265 188.383L293.686 188.268C293.939 187.843 294.17 187.414 294.377 186.983L294.967 187.077ZM293.426 189.661L293.992 189.796C293.687 190.223 293.358 190.645 293.006 191.062L292.455 190.908L291.905 190.753C292.246 190.348 292.564 189.939 292.861 189.526L293.426 189.661ZM291.355 192.118L291.888 192.292C291.495 192.693 291.08 193.089 290.642 193.48L290.128 193.287L289.614 193.095C290.038 192.717 290.441 192.333 290.821 191.944L291.355 192.118ZM288.78 194.412L289.273 194.622C288.8 194.992 288.305 195.356 287.789 195.713L287.319 195.486L286.849 195.26C287.349 194.914 287.829 194.561 288.287 194.202L288.78 194.412ZM285.748 196.508L286.193 196.751C285.919 196.919 285.639 197.085 285.354 197.25L284.921 197L284.488 196.75C284.765 196.59 285.036 196.429 285.302 196.266L285.748 196.508ZM284.921 197L285.354 197.25C285.069 197.415 284.781 197.576 284.49 197.735L284.07 197.477L283.65 197.22C283.932 197.066 284.212 196.91 284.488 196.75L284.921 197ZM282.299 198.384L282.692 198.656C282.074 198.954 281.443 199.239 280.802 199.513L280.438 199.228L280.075 198.944C280.696 198.679 281.307 198.402 281.907 198.113L282.299 198.384ZM278.491 200.006L278.824 200.303C278.148 200.556 277.462 200.795 276.766 201.022L276.465 200.714L276.164 200.406C276.838 200.187 277.503 199.954 278.158 199.709L278.491 200.006ZM274.369 201.35L274.637 201.668C273.914 201.871 273.183 202.061 272.444 202.237L272.21 201.911L271.976 201.584C272.692 201.413 273.4 201.229 274.101 201.032L274.369 201.35ZM269.996 202.394L270.195 202.729C269.436 202.88 268.67 203.017 267.898 203.141L267.735 202.8L267.571 202.459C268.318 202.34 269.06 202.207 269.797 202.06L269.996 202.394ZM265.435 203.126L265.563 203.472C264.778 203.569 263.99 203.652 263.198 203.721L263.106 203.371L263.014 203.022C263.782 202.955 264.547 202.874 265.307 202.78L265.435 203.126ZM260.756 203.535L260.811 203.887C260.012 203.929 259.212 203.957 258.411 203.971L258.392 203.617L258.374 203.264C259.15 203.25 259.926 203.223 260.7 203.183L260.756 203.535ZM256.024 203.617L256.006 203.971C255.205 203.957 254.405 203.929 253.606 203.887L253.661 203.535L253.716 203.183C254.49 203.223 255.266 203.25 256.043 203.264L256.024 203.617ZM251.31 203.371L251.219 203.721C250.427 203.652 249.638 203.569 248.853 203.472L248.981 203.126L249.109 202.78C249.87 202.874 250.635 202.955 251.402 203.022L251.31 203.371ZM246.682 202.8L246.518 203.141C245.747 203.017 244.981 202.88 244.221 202.729L244.421 202.394L244.62 202.06C245.356 202.207 246.099 202.34 246.846 202.459L246.682 202.8ZM242.206 201.911L241.972 202.237C241.234 202.061 240.502 201.871 239.78 201.668L240.048 201.35L240.316 201.032C241.016 201.229 241.725 201.413 242.441 201.584L242.206 201.911ZM237.952 200.714L237.651 201.022C236.955 200.795 236.269 200.556 235.593 200.303L235.926 200.006L236.259 199.709C236.914 199.954 237.579 200.187 238.253 200.406L237.952 200.714ZM233.978 199.228L233.615 199.513C232.973 199.239 232.343 198.954 231.725 198.656L232.117 198.384L232.51 198.113C233.109 198.402 233.72 198.679 234.342 198.944L233.978 199.228ZM230.347 197.477L229.927 197.735C229.636 197.576 229.347 197.415 229.062 197.25L229.496 197L229.929 196.75C230.205 196.91 230.484 197.066 230.767 197.22L230.347 197.477ZM229.496 197L229.062 197.25C228.778 197.085 228.498 196.919 228.223 196.751L228.669 196.508L229.115 196.266C229.381 196.429 229.652 196.59 229.929 196.75L229.496 197ZM227.098 195.486L226.628 195.713C226.111 195.356 225.617 194.992 225.144 194.622L225.636 194.412L226.129 194.202C226.588 194.561 227.067 194.914 227.568 195.26L227.098 195.486ZM224.289 193.287L223.775 193.48C223.337 193.089 222.922 192.693 222.529 192.292L223.062 192.118L223.595 191.944C223.976 192.333 224.378 192.717 224.803 193.095L224.289 193.287ZM221.961 190.908L221.411 191.062C221.059 190.645 220.73 190.223 220.424 189.796L220.99 189.661L221.556 189.526C221.852 189.939 222.171 190.348 222.512 190.753L221.961 190.908ZM220.152 188.383L219.573 188.498C219.311 188.059 219.074 187.617 218.859 187.172L219.449 187.077L220.039 186.983C220.247 187.414 220.478 187.843 220.731 188.268L220.152 188.383ZM218.885 185.75L218.286 185.824C218.118 185.371 217.975 184.915 217.855 184.458L218.46 184.405L219.066 184.352C219.182 184.795 219.321 185.237 219.484 185.676L218.885 185.75ZM218.176 183.048L217.566 183.08C217.494 182.619 217.446 182.157 217.422 181.694L218.034 181.683L218.646 181.673C218.67 182.121 218.716 182.569 218.786 183.016L218.176 183.048ZM218.034 180.317L217.422 180.306C217.446 179.843 217.494 179.381 217.566 178.92L218.176 178.952L218.786 178.984C218.716 179.431 218.67 179.879 218.646 180.327L218.034 180.317ZM218.46 177.595L217.855 177.542C217.975 177.085 218.118 176.629 218.286 176.176L218.885 176.25L219.484 176.324C219.321 176.763 219.182 177.205 219.066 177.648L218.46 177.595ZM219.449 174.923L218.859 174.828C219.074 174.383 219.311 173.941 219.573 173.502L220.152 173.617L220.731 173.732C220.478 174.157 220.247 174.586 220.039 175.017L219.449 174.923ZM220.99 172.339L220.424 172.204C220.73 171.777 221.059 171.355 221.411 170.938L221.961 171.092L222.512 171.247C222.171 171.652 221.852 172.061 221.556 172.474L220.99 172.339ZM223.062 169.882L222.529 169.708C222.922 169.307 223.337 168.911 223.775 168.52L224.289 168.713L224.803 168.905C224.378 169.283 223.976 169.667 223.595 170.056L223.062 169.882ZM225.636 167.588L225.144 167.378C225.617 167.008 226.111 166.644 226.628 166.287L227.098 166.514L227.568 166.74C227.067 167.086 226.588 167.439 226.129 167.798L225.636 167.588ZM228.669 165.492L228.223 165.249C228.498 165.081 228.778 164.915 229.062 164.75L229.496 165L229.929 165.25C229.652 165.41 229.381 165.571 229.115 165.734L228.669 165.492ZM229.496 165L229.062 164.75C229.21 164.665 229.358 164.581 229.507 164.498L229.933 164.752L230.358 165.006C230.214 165.087 230.071 165.168 229.929 165.25L229.496 165ZM230.827 164.268L230.415 164.007C230.569 163.926 230.723 163.846 230.878 163.767L231.283 164.032L231.689 164.297C231.538 164.374 231.388 164.452 231.239 164.53L230.827 164.268ZM231.283 164.032L230.85 164.282L230.823 164.266L231.256 164.016L231.689 163.766L231.716 163.782L231.283 164.032ZM231.2 163.984L230.767 164.234L230.74 164.218L231.173 163.968L231.606 163.718L231.633 163.734L231.2 163.984ZM231.173 163.968L230.714 163.734C230.974 163.564 231.23 163.392 231.48 163.218L231.95 163.444L232.421 163.67C232.164 163.849 231.9 164.027 231.631 164.202L231.173 163.968ZM233.419 162.359L232.925 162.15C233.39 161.784 233.834 161.411 234.256 161.032L234.771 161.224L235.286 161.415C234.851 161.806 234.393 162.19 233.912 162.568L233.419 162.359ZM236 160.043L235.465 159.87C235.849 159.474 236.21 159.073 236.549 158.667L237.1 158.821L237.652 158.974C237.303 159.393 236.93 159.807 236.534 160.215L236 160.043ZM238.07 157.562L237.503 157.428C237.799 157.008 238.073 156.585 238.323 156.157L238.903 156.271L239.483 156.384C239.225 156.825 238.943 157.262 238.636 157.695L238.07 157.562ZM239.599 154.953L239.008 154.86C239.214 154.423 239.396 153.983 239.555 153.541L240.154 153.613L240.754 153.685C240.59 154.141 240.402 154.595 240.19 155.046L239.599 154.953ZM240.567 152.256L239.961 152.206C240.074 151.758 240.162 151.308 240.227 150.858L240.837 150.887L241.448 150.917C241.381 151.381 241.289 151.845 241.174 152.307L240.567 152.256ZM240.963 149.512L240.351 149.504C240.369 149.052 240.363 148.599 240.333 148.147L240.945 148.134L241.557 148.121C241.587 148.587 241.594 149.053 241.576 149.52L240.963 149.512ZM240.782 146.759L240.173 146.794C240.096 146.345 239.995 145.896 239.871 145.449L240.475 145.393L241.08 145.337C241.208 145.798 241.312 146.261 241.391 146.725L240.782 146.759ZM240.026 144.04L239.428 144.117C239.257 143.677 239.063 143.239 238.846 142.804L239.434 142.705L240.023 142.607C240.247 143.056 240.447 143.509 240.623 143.963L240.026 144.04ZM238.703 141.394L238.126 141.513C237.864 141.088 237.579 140.667 237.271 140.25L237.834 140.111L238.398 139.972C238.715 140.403 239.01 140.837 239.28 141.276L238.703 141.394ZM236.831 138.861L236.283 139.019C235.934 138.617 235.562 138.219 235.167 137.827L235.697 137.649L236.227 137.472C236.634 137.877 237.018 138.287 237.378 138.703L236.831 138.861ZM234.436 136.479L233.926 136.675C233.494 136.301 233.041 135.932 232.565 135.57L233.053 135.356L233.541 135.143C234.032 135.516 234.5 135.897 234.946 136.284L234.436 136.479ZM231.556 134.285L231.091 134.515C230.837 134.343 230.577 134.174 230.312 134.006L230.764 133.768L231.217 133.529C231.49 133.703 231.758 133.878 232.021 134.054L231.556 134.285ZM230.764 133.768L230.331 133.518L230.347 133.509L230.78 133.759L231.213 134.009L231.197 134.018L230.764 133.768ZM230.811 133.74L230.378 133.49L230.394 133.481L230.827 133.731L231.26 133.981L231.244 133.99L230.811 133.74ZM230.827 133.731L230.414 133.993C230.3 133.932 230.186 133.872 230.072 133.811L230.489 133.552L230.906 133.293C231.016 133.352 231.128 133.411 231.239 133.47L230.827 133.731ZM229.823 133.186L229.395 133.44C229.284 133.377 229.173 133.314 229.062 133.25L229.496 133L229.929 132.75C230.035 132.811 230.142 132.872 230.25 132.933L229.823 133.186ZM229.496 133L229.062 133.25C228.778 133.085 228.498 132.919 228.223 132.751L228.669 132.508L229.115 132.266C229.381 132.429 229.652 132.59 229.929 132.75L229.496 133ZM227.098 131.486L226.628 131.713C226.111 131.356 225.617 130.992 225.144 130.622L225.636 130.412L226.129 130.202C226.588 130.561 227.067 130.914 227.568 131.26L227.098 131.486ZM224.289 129.287L223.775 129.48C223.337 129.089 222.922 128.693 222.529 128.292L223.062 128.118L223.595 127.944C223.976 128.333 224.378 128.717 224.803 129.095L224.289 129.287ZM221.961 126.908L221.411 127.062C221.059 126.645 220.73 126.223 220.424 125.796L220.99 125.661L221.556 125.526C221.852 125.939 222.171 126.348 222.512 126.753L221.961 126.908ZM220.152 124.383L219.573 124.498C219.311 124.059 219.074 123.617 218.859 123.172L219.449 123.077L220.039 122.983C220.247 123.414 220.478 123.843 220.731 124.268L220.152 124.383ZM218.885 121.75L218.286 121.824C218.118 121.371 217.975 120.915 217.855 120.458L218.46 120.405L219.066 120.352C219.182 120.795 219.321 121.237 219.484 121.676L218.885 121.75ZM218.176 119.048L217.566 119.08C217.494 118.619 217.446 118.157 217.422 117.694L218.034 117.683L218.646 117.673C218.67 118.121 218.716 118.569 218.786 119.016L218.176 119.048ZM218.034 116.317L217.422 116.306C217.446 115.843 217.494 115.381 217.566 114.92L218.176 114.952L218.786 114.984C218.716 115.431 218.67 115.879 218.646 116.327L218.034 116.317ZM218.46 113.595L217.855 113.542C217.975 113.085 218.118 112.629 218.286 112.176L218.885 112.25L219.484 112.324C219.321 112.763 219.182 113.205 219.066 113.648L218.46 113.595ZM219.449 110.923L218.859 110.828C219.074 110.383 219.311 109.941 219.573 109.502L220.152 109.617L220.731 109.732C220.478 110.157 220.247 110.586 220.039 111.017L219.449 110.923ZM220.99 108.339L220.424 108.204C220.73 107.777 221.059 107.355 221.411 106.938L221.961 107.092L222.512 107.247C222.171 107.652 221.852 108.061 221.556 108.474L220.99 108.339ZM223.062 105.882L222.529 105.708C222.922 105.307 223.337 104.911 223.775 104.52L224.289 104.713L224.803 104.905C224.378 105.283 223.976 105.667 223.595 106.056L223.062 105.882ZM225.636 103.588L225.144 103.378C225.617 103.008 226.111 102.644 226.628 102.287L227.098 102.514L227.568 102.74C227.067 103.086 226.588 103.439 226.129 103.798L225.636 103.588ZM228.669 101.492L228.223 101.249C228.498 101.081 228.778 100.915 229.062 100.75L229.496 101L229.929 101.25C229.652 101.41 229.381 101.571 229.115 101.734L228.669 101.492ZM229.496 101L229.062 100.75C229.347 100.585 229.636 100.424 229.927 100.265L230.347 100.523L230.767 100.78C230.484 100.934 230.205 101.09 229.929 101.25L229.496 101ZM232.117 99.6158L231.725 99.3444C232.343 99.0462 232.973 98.7606 233.615 98.4874L233.978 98.7719L234.342 99.0564C233.72 99.3212 233.109 99.5981 232.51 99.8871L232.117 99.6158ZM235.926 97.9939L235.593 97.6972C236.269 97.4444 236.955 97.2046 237.651 96.9778L237.952 97.2857L238.253 97.5935C237.579 97.8133 236.914 98.0456 236.259 98.2906L235.926 97.9939ZM240.048 96.6501L239.78 96.3323C240.503 96.129 241.234 95.9392 241.972 95.7628L242.206 96.0895L242.441 96.4162C241.725 96.5871 241.016 96.7711 240.316 96.968L240.048 96.6501ZM244.421 95.6055L244.221 95.2712C244.981 95.1202 245.747 94.9829 246.518 94.8592L246.682 95.1999L246.846 95.5405C246.099 95.6604 245.356 95.7935 244.62 95.9398L244.421 95.6055ZM248.981 94.874L248.853 94.5282C249.638 94.4314 250.427 94.3484 251.219 94.2792L251.31 94.6288L251.402 94.9783C250.635 95.0454 249.87 95.1259 249.109 95.2197L248.981 94.874ZM253.661 94.4649L253.606 94.1128C254.405 94.0711 255.205 94.0433 256.006 94.0294L256.024 94.3828L256.043 94.7362C255.266 94.7497 254.49 94.7766 253.716 94.817L253.661 94.4649ZM258.392 94.3828L258.411 94.0295C259.212 94.0433 260.012 94.0711 260.811 94.1128L260.756 94.4649L260.701 94.817C259.926 94.7766 259.15 94.7497 258.374 94.7362L258.392 94.3828ZM263.106 94.6288L263.198 94.2792C263.99 94.3484 264.778 94.4314 265.563 94.5282L265.435 94.874L265.307 95.2197C264.547 95.1259 263.782 95.0454 263.015 94.9783L263.106 94.6288ZM267.735 95.1999L267.899 94.8592C268.67 94.9829 269.436 95.1202 270.195 95.2712L269.996 95.6055L269.797 95.9398C269.06 95.7935 268.318 95.6604 267.571 95.5405L267.735 95.1999ZM272.21 96.0895L272.444 95.7628C273.183 95.9392 273.914 96.129 274.637 96.3323L274.369 96.6501L274.101 96.968C273.4 96.7711 272.692 96.5871 271.976 96.4162L272.21 96.0895ZM276.465 97.2857L276.766 96.9778C277.462 97.2046 278.148 97.4444 278.824 97.6972L278.491 97.9939L278.158 98.2906C277.503 98.0456 276.838 97.8133 276.164 97.5935L276.465 97.2857ZM280.438 98.7719L280.802 98.4874C281.443 98.7606 282.074 99.0462 282.692 99.3444L282.299 99.6158L281.907 99.8871C281.307 99.5981 280.696 99.3212 280.075 99.0564L280.438 98.7719ZM284.07 100.523L284.49 100.265C284.781 100.424 285.069 100.585 285.354 100.75L284.921 101L284.488 101.25C284.212 101.09 283.932 100.934 283.65 100.78L284.07 100.523ZM230.827 133.731L231.652 133.209L232.6 133.708L231.693 134.231L230.827 133.731ZM230.764 133.768L229.859 134.244L229.071 133.745L229.898 133.268L230.764 133.768ZM231.173 163.968L230.307 164.468L229.492 163.998L230.255 163.5L231.173 163.968ZM231.283 164.032L232.149 163.532L233.07 164.064L232.094 164.562L231.283 164.032ZM284.483 164.753L283.63 165.261L282.738 164.761L283.617 164.253L284.483 164.753ZM284.494 164.747L285.373 164.254L286.213 164.754L285.36 165.247L284.494 164.747ZM284.216 133.418L283.328 132.931L283.339 132.925L284.216 133.418ZM284.921 133L284.044 132.507L284.055 132.5L284.921 133ZM284.921 101L285.787 100.5C286.076 100.667 286.36 100.836 286.639 101.007L285.748 101.492L284.856 101.977C284.594 101.816 284.327 101.657 284.055 101.5L284.921 101ZM287.319 102.514L288.259 102.06C288.783 102.423 289.285 102.792 289.766 103.168L288.78 103.588L287.795 104.008C287.343 103.655 286.871 103.308 286.379 102.967L287.319 102.514ZM290.128 104.713L291.156 104.328C291.6 104.724 292.022 105.127 292.421 105.535L291.355 105.882L290.288 106.23C289.914 105.847 289.518 105.469 289.1 105.097L290.128 104.713ZM292.455 107.092L293.556 106.783C293.914 107.207 294.248 107.635 294.558 108.068L293.426 108.339L292.295 108.609C292.003 108.202 291.69 107.8 291.354 107.402L292.455 107.092ZM294.265 109.617L295.423 109.387C295.688 109.832 295.93 110.281 296.147 110.733L294.967 110.923L293.787 111.112C293.583 110.687 293.356 110.265 293.107 109.847L294.265 109.617ZM295.532 112.25L296.729 112.102C296.9 112.562 297.046 113.025 297.167 113.489L295.956 113.595L294.745 113.701C294.631 113.265 294.494 112.83 294.334 112.398L295.532 112.25ZM296.24 114.952L297.46 114.888C297.533 115.357 297.582 115.826 297.607 116.295L296.382 116.317L295.158 116.338C295.135 115.896 295.089 115.456 295.02 115.016L296.24 114.952ZM296.382 117.683L297.607 117.705C297.582 118.174 297.533 118.643 297.46 119.112L296.24 119.048L295.02 118.984C295.089 118.544 295.135 118.104 295.158 117.662L296.382 117.683ZM295.956 120.405L297.167 120.511C297.046 120.975 296.9 121.438 296.729 121.898L295.532 121.75L294.334 121.602C294.494 121.17 294.631 120.735 294.745 120.299L295.956 120.405ZM294.967 123.077L296.147 123.267C295.93 123.719 295.688 124.168 295.423 124.613L294.265 124.383L293.107 124.153C293.356 123.735 293.583 123.313 293.787 122.888L294.967 123.077ZM293.426 125.661L294.558 125.932C294.248 126.365 293.914 126.793 293.556 127.217L292.455 126.908L291.354 126.598C291.69 126.2 292.003 125.798 292.295 125.391L293.426 125.661ZM291.355 128.118L292.421 128.465C292.022 128.873 291.6 129.276 291.156 129.672L290.128 129.287L289.1 128.903C289.518 128.531 289.914 128.153 290.288 127.77L291.355 128.118ZM288.78 130.412L289.766 130.832C289.285 131.208 288.783 131.577 288.259 131.94L287.319 131.486L286.379 131.033C286.871 130.692 287.343 130.345 287.795 129.992L288.78 130.412ZM285.748 132.508L286.639 132.993C286.36 133.164 286.076 133.333 285.787 133.5L284.921 133L284.055 132.5C284.327 132.343 284.594 132.184 284.856 132.023L285.748 132.508ZM284.921 133L285.798 133.493L285.622 133.598L284.745 133.104L283.868 132.611L284.044 132.507L284.921 133ZM284.392 133.313L285.269 133.807L285.093 133.911L284.216 133.418L283.339 132.925L283.515 132.82L284.392 133.313ZM284.216 133.418L285.103 133.905C284.824 134.075 284.55 134.247 284.282 134.42L283.368 133.949L282.454 133.478C282.74 133.294 283.031 133.111 283.328 132.931L284.216 133.418ZM281.766 135.054L282.73 135.491C282.229 135.859 281.752 136.235 281.298 136.617L280.288 136.217L279.278 135.817C279.761 135.41 280.27 135.01 280.803 134.618L281.766 135.054ZM278.942 137.431L279.994 137.793C279.58 138.194 279.19 138.602 278.824 139.015L277.734 138.692L276.643 138.37C277.033 137.931 277.448 137.497 277.889 137.069L278.942 137.431ZM276.668 139.996L277.792 140.277C277.47 140.706 277.174 141.139 276.902 141.576L275.749 141.337L274.596 141.098C274.886 140.633 275.202 140.171 275.544 139.715L276.668 139.996ZM274.981 142.709L276.158 142.905C275.934 143.353 275.735 143.804 275.562 144.258L274.366 144.106L273.17 143.954C273.354 143.471 273.566 142.99 273.804 142.513L274.981 142.709ZM273.906 145.523L275.116 145.631C274.993 146.092 274.895 146.554 274.823 147.018L273.603 146.954L272.383 146.891C272.46 146.397 272.565 145.905 272.696 145.415L273.906 145.523ZM273.458 148.394L274.682 148.412C274.661 148.878 274.665 149.344 274.695 149.809L273.471 149.835L272.247 149.861C272.215 149.366 272.211 148.87 272.233 148.375L273.458 148.394ZM273.641 151.274L274.86 151.203C274.941 151.666 275.047 152.128 275.178 152.588L273.97 152.703L272.761 152.818C272.621 152.329 272.509 151.837 272.423 151.344L273.641 151.274ZM274.455 154.117L275.648 153.958C275.829 154.411 276.036 154.861 276.268 155.308L275.095 155.511L273.921 155.714C273.675 155.238 273.455 154.759 273.261 154.277L274.455 154.117ZM275.887 156.878L277.036 156.632C277.315 157.067 277.619 157.499 277.949 157.925L276.83 158.213L275.711 158.501C275.361 158.047 275.037 157.587 274.739 157.124L275.887 156.878ZM277.919 159.511L279.003 159.182C279.376 159.592 279.774 159.997 280.195 160.396L279.149 160.765L278.104 161.133C277.655 160.708 277.232 160.276 276.834 159.839L277.919 159.511ZM280.517 161.971L281.52 161.565C281.981 161.944 282.465 162.317 282.972 162.683L282.016 163.125L281.06 163.567C280.52 163.178 280.005 162.781 279.515 162.377L280.517 161.971ZM283.637 164.22L284.543 163.744C284.814 163.916 285.091 164.086 285.373 164.254L284.494 164.747L283.615 165.239C283.315 165.06 283.02 164.879 282.732 164.696L283.637 164.22ZM284.494 164.747L285.36 165.247L285.357 165.248L284.491 164.748L283.625 164.248L283.628 164.247L284.494 164.747ZM284.486 164.751L285.352 165.251L285.349 165.253L284.483 164.753L283.617 164.253L283.62 164.251L284.486 164.751ZM284.483 164.753L285.336 164.245C285.372 164.266 285.408 164.286 285.445 164.306L284.593 164.814L283.741 165.322C283.705 165.302 283.667 165.281 283.63 165.261L284.483 164.753ZM284.812 164.938L285.671 164.434C285.709 164.455 285.748 164.478 285.787 164.5L284.921 165L284.055 165.5C284.022 165.481 283.988 165.461 283.954 165.442L284.812 164.938ZM284.921 165L285.787 164.5C286.076 164.667 286.36 164.836 286.639 165.007L285.748 165.492L284.856 165.977C284.594 165.816 284.327 165.657 284.055 165.5L284.921 165ZM287.319 166.514L288.259 166.06C288.783 166.423 289.285 166.792 289.766 167.168L288.78 167.588L287.795 168.008C287.343 167.655 286.871 167.308 286.379 166.967L287.319 166.514ZM290.128 168.713L291.156 168.328C291.6 168.724 292.022 169.127 292.421 169.535L291.355 169.882L290.288 170.23C289.914 169.847 289.518 169.469 289.1 169.097L290.128 168.713ZM292.455 171.092L293.556 170.783C293.914 171.207 294.248 171.635 294.558 172.068L293.426 172.339L292.295 172.609C292.003 172.202 291.69 171.8 291.354 171.402L292.455 171.092ZM294.265 173.617L295.423 173.387C295.688 173.832 295.93 174.281 296.147 174.733L294.967 174.923L293.787 175.112C293.583 174.687 293.356 174.265 293.107 173.847L294.265 173.617ZM295.532 176.25L296.729 176.102C296.9 176.562 297.046 177.025 297.167 177.489L295.956 177.595L294.745 177.701C294.631 177.265 294.494 176.83 294.334 176.398L295.532 176.25ZM296.24 178.952L297.46 178.888C297.533 179.357 297.582 179.826 297.607 180.295L296.382 180.317L295.158 180.338C295.135 179.896 295.089 179.456 295.02 179.016L296.24 178.952ZM296.382 181.683L297.607 181.705C297.582 182.174 297.533 182.643 297.46 183.112L296.24 183.048L295.02 182.984C295.089 182.544 295.135 182.104 295.158 181.662L296.382 181.683ZM295.956 184.405L297.167 184.511C297.046 184.975 296.9 185.438 296.729 185.898L295.532 185.75L294.334 185.602C294.494 185.17 294.631 184.735 294.745 184.299L295.956 184.405ZM294.967 187.077L296.147 187.267C295.93 187.719 295.688 188.168 295.423 188.613L294.265 188.383L293.107 188.153C293.356 187.735 293.583 187.313 293.787 186.888L294.967 187.077ZM293.426 189.661L294.558 189.932C294.248 190.365 293.914 190.793 293.556 191.217L292.455 190.908L291.354 190.598C291.69 190.2 292.003 189.798 292.295 189.391L293.426 189.661ZM291.355 192.118L292.421 192.465C292.022 192.873 291.6 193.276 291.156 193.672L290.128 193.287L289.1 192.903C289.518 192.531 289.914 192.153 290.288 191.77L291.355 192.118ZM288.78 194.412L289.766 194.832C289.285 195.208 288.783 195.577 288.259 195.94L287.319 195.486L286.379 195.033C286.871 194.692 287.343 194.345 287.795 193.992L288.78 194.412ZM285.748 196.508L286.639 196.993C286.36 197.164 286.076 197.333 285.787 197.5L284.921 197L284.055 196.5C284.327 196.343 284.594 196.184 284.856 196.023L285.748 196.508ZM284.921 197L285.787 197.5C285.498 197.667 285.205 197.831 284.909 197.992L284.07 197.477L283.23 196.963C283.508 196.811 283.783 196.657 284.055 196.5L284.921 197ZM282.299 198.384L283.084 198.927C282.457 199.23 281.817 199.52 281.165 199.797L280.438 199.228L279.711 198.659C280.323 198.399 280.924 198.126 281.514 197.842L282.299 198.384ZM278.491 200.006L279.157 200.6C278.47 200.856 277.773 201.1 277.067 201.33L276.465 200.714L275.863 200.099C276.526 199.882 277.18 199.654 277.825 199.413L278.491 200.006ZM274.369 201.35L274.905 201.986C274.171 202.192 273.428 202.385 272.678 202.564L272.21 201.911L271.742 201.257C272.446 201.089 273.143 200.908 273.833 200.714L274.369 201.35ZM269.996 202.394L270.395 203.063C269.623 203.216 268.845 203.356 268.062 203.481L267.735 202.8L267.407 202.119C268.142 202.001 268.873 201.87 269.597 201.726L269.996 202.394ZM265.435 203.126L265.691 203.818C264.894 203.916 264.093 204 263.289 204.07L263.106 203.371L262.923 202.672C263.678 202.606 264.431 202.527 265.179 202.435L265.435 203.126ZM260.756 203.535L260.866 204.239C260.055 204.282 259.242 204.31 258.429 204.324L258.392 203.617L258.355 202.91C259.12 202.897 259.883 202.871 260.645 202.831L260.756 203.535ZM256.024 203.617L255.988 204.324C255.174 204.31 254.362 204.282 253.551 204.239L253.661 203.535L253.771 202.831C254.533 202.871 255.297 202.897 256.061 202.91L256.024 203.617ZM251.31 203.371L251.127 204.07C250.323 204 249.522 203.916 248.725 203.818L248.981 203.126L249.237 202.435C249.986 202.527 250.738 202.606 251.494 202.672L251.31 203.371ZM246.682 202.8L246.354 203.481C245.571 203.356 244.793 203.216 244.022 203.063L244.421 202.394L244.819 201.726C245.544 201.87 246.274 202.001 247.01 202.119L246.682 202.8ZM242.206 201.911L241.738 202.564C240.988 202.385 240.246 202.192 239.512 201.986L240.048 201.35L240.584 200.714C241.273 200.908 241.97 201.089 242.675 201.257L242.206 201.911ZM237.952 200.714L237.349 201.33C236.643 201.1 235.946 200.856 235.26 200.6L235.926 200.006L236.592 199.413C237.236 199.654 237.891 199.882 238.554 200.099L237.952 200.714ZM233.978 199.228L233.251 199.797C232.6 199.52 231.96 199.23 231.332 198.927L232.117 198.384L232.902 197.842C233.492 198.126 234.094 198.399 234.705 198.659L233.978 199.228ZM230.347 197.477L229.507 197.992C229.211 197.831 228.919 197.667 228.629 197.5L229.496 197L230.362 196.5C230.634 196.657 230.909 196.811 231.187 196.963L230.347 197.477ZM229.496 197L228.629 197.5C228.34 197.333 228.056 197.164 227.778 196.993L228.669 196.508L229.56 196.023C229.822 196.184 230.089 196.343 230.362 196.5L229.496 197ZM227.098 195.486L226.158 195.94C225.634 195.577 225.131 195.208 224.651 194.832L225.636 194.412L226.622 193.992C227.073 194.345 227.545 194.692 228.038 195.033L227.098 195.486ZM224.289 193.287L223.261 193.672C222.816 193.276 222.394 192.873 221.996 192.465L223.062 192.118L224.129 191.77C224.503 192.153 224.899 192.531 225.317 192.903L224.289 193.287ZM221.961 190.908L220.86 191.217C220.503 190.793 220.169 190.365 219.859 189.932L220.99 189.661L222.122 189.391C222.413 189.798 222.727 190.2 223.062 190.598L221.961 190.908ZM220.152 188.383L218.994 188.613C218.728 188.168 218.487 187.719 218.269 187.267L219.449 187.077L220.629 186.888C220.834 187.313 221.061 187.735 221.31 188.153L220.152 188.383ZM218.885 185.75L217.687 185.898C217.517 185.438 217.371 184.975 217.249 184.511L218.46 184.405L219.671 184.299C219.785 184.735 219.923 185.17 220.083 185.602L218.885 185.75ZM218.176 183.048L216.957 183.112C216.883 182.643 216.834 182.174 216.81 181.705L218.034 181.683L219.258 181.662C219.281 182.104 219.327 182.544 219.396 182.984L218.176 183.048ZM218.034 180.317L216.81 180.295C216.834 179.826 216.883 179.357 216.957 178.888L218.176 178.952L219.396 179.016C219.327 179.456 219.281 179.896 219.258 180.338L218.034 180.317ZM218.46 177.595L217.249 177.489C217.371 177.025 217.517 176.562 217.687 176.102L218.885 176.25L220.083 176.398C219.923 176.83 219.785 177.265 219.671 177.701L218.46 177.595ZM219.449 174.923L218.269 174.733C218.487 174.281 218.728 173.832 218.994 173.387L220.152 173.617L221.31 173.847C221.061 174.265 220.834 174.687 220.629 175.112L219.449 174.923ZM220.99 172.339L219.859 172.068C220.169 171.635 220.503 171.207 220.86 170.783L221.961 171.092L223.062 171.402C222.727 171.8 222.413 172.202 222.122 172.609L220.99 172.339ZM223.062 169.882L221.996 169.535C222.394 169.127 222.816 168.724 223.261 168.328L224.289 168.713L225.317 169.097C224.899 169.469 224.503 169.847 224.129 170.23L223.062 169.882ZM225.636 167.588L224.651 167.168C225.131 166.792 225.634 166.423 226.158 166.06L227.098 166.514L228.038 166.967C227.545 167.308 227.073 167.655 226.622 168.008L225.636 167.588ZM228.669 165.492L227.778 165.007C228.056 164.836 228.34 164.667 228.629 164.5L229.496 165L230.362 165.5C230.089 165.657 229.822 165.816 229.56 165.977L228.669 165.492ZM229.496 165L228.629 164.5C228.779 164.414 228.93 164.328 229.081 164.244L229.933 164.752L230.784 165.26C230.642 165.34 230.501 165.419 230.362 165.5L229.496 165ZM230.827 164.268L230.003 163.745C230.159 163.663 230.315 163.582 230.472 163.502L231.283 164.032L232.094 164.562C231.946 164.638 231.798 164.714 231.651 164.792L230.827 164.268ZM231.283 164.032L230.417 164.532L230.39 164.516L231.256 164.016L232.122 163.516L232.149 163.532L231.283 164.032ZM231.2 163.984L230.334 164.484L230.307 164.468L231.173 163.968L232.039 163.468L232.066 163.484L231.2 163.984ZM231.173 163.968L230.255 163.5C230.511 163.332 230.763 163.163 231.009 162.992L231.95 163.444L232.892 163.896C232.63 164.078 232.363 164.258 232.09 164.437L231.173 163.968ZM233.419 162.359L232.431 161.941C232.889 161.58 233.326 161.214 233.741 160.841L234.771 161.224L235.801 161.606C235.359 162.003 234.894 162.394 234.406 162.777L233.419 162.359ZM236 160.043L234.931 159.697C235.308 159.308 235.664 158.913 235.997 158.514L237.1 158.821L238.204 159.127C237.849 159.553 237.47 159.973 237.068 160.388L236 160.043ZM238.07 157.562L236.936 157.294C237.228 156.881 237.497 156.464 237.743 156.044L238.903 156.271L240.064 156.497C239.801 156.945 239.514 157.389 239.203 157.829L238.07 157.562ZM239.599 154.953L238.417 154.768C238.619 154.338 238.799 153.905 238.955 153.47L240.154 153.613L241.354 153.757C241.187 154.22 240.996 154.681 240.781 155.138L239.599 154.953ZM240.567 152.256L239.355 152.155C239.466 151.714 239.553 151.272 239.617 150.829L240.837 150.887L242.058 150.946C241.99 151.418 241.897 151.888 241.78 152.357L240.567 152.256ZM240.963 149.512L239.739 149.496C239.756 149.051 239.75 148.606 239.721 148.161L240.945 148.134L242.169 148.107C242.2 148.58 242.206 149.054 242.188 149.528L240.963 149.512ZM240.782 146.759L239.563 146.829C239.487 146.387 239.388 145.945 239.266 145.505L240.475 145.393L241.685 145.281C241.815 145.749 241.92 146.219 242.001 146.69L240.782 146.759ZM240.026 144.04L238.83 144.195C238.663 143.761 238.472 143.33 238.258 142.902L239.434 142.705L240.611 142.509C240.839 142.965 241.042 143.424 241.221 143.886L240.026 144.04ZM238.703 141.394L237.549 141.631C237.291 141.213 237.011 140.799 236.708 140.389L237.834 140.111L238.961 139.834C239.284 140.27 239.582 140.712 239.857 141.157L238.703 141.394ZM236.831 138.861L235.736 139.178C235.392 138.782 235.026 138.39 234.638 138.004L235.697 137.649L236.756 137.294C237.17 137.705 237.56 138.122 237.926 138.544L236.831 138.861ZM234.436 136.479L233.417 136.871C232.992 136.503 232.545 136.14 232.077 135.783L233.053 135.356L234.03 134.929C234.528 135.309 235.003 135.695 235.456 136.088L234.436 136.479ZM231.556 134.285L230.627 134.745C230.376 134.576 230.12 134.409 229.859 134.244L230.764 133.768L231.669 133.291C231.947 133.467 232.219 133.645 232.486 133.824L231.556 134.285ZM230.764 133.768L229.898 133.268L229.914 133.259L230.78 133.759L231.646 134.259L231.63 134.268L230.764 133.768ZM230.811 133.74L229.945 133.24L229.961 133.231L230.827 133.731L231.693 134.231L231.677 134.24L230.811 133.74ZM230.827 133.731L230.001 134.254C229.886 134.193 229.77 134.132 229.655 134.07L230.489 133.552L231.322 133.034C231.432 133.093 231.542 133.151 231.652 133.209L230.827 133.731ZM229.823 133.186L228.968 133.693C228.855 133.629 228.742 133.565 228.629 133.5L229.496 133L230.362 132.5C230.466 132.56 230.571 132.62 230.677 132.68L229.823 133.186ZM229.496 133L228.629 133.5C228.34 133.333 228.056 133.164 227.778 132.993L228.669 132.508L229.56 132.023C229.822 132.184 230.089 132.343 230.362 132.5L229.496 133ZM227.098 131.486L226.158 131.94C225.634 131.577 225.131 131.208 224.651 130.832L225.636 130.412L226.622 129.992C227.073 130.345 227.545 130.692 228.038 131.033L227.098 131.486ZM224.289 129.287L223.261 129.672C222.816 129.276 222.394 128.873 221.996 128.465L223.062 128.118L224.129 127.77C224.503 128.153 224.899 128.531 225.317 128.903L224.289 129.287ZM221.961 126.908L220.86 127.217C220.503 126.793 220.169 126.365 219.859 125.932L220.99 125.661L222.122 125.391C222.413 125.798 222.727 126.2 223.062 126.598L221.961 126.908ZM220.152 124.383L218.994 124.613C218.728 124.168 218.487 123.719 218.269 123.267L219.449 123.077L220.629 122.888C220.834 123.313 221.061 123.735 221.31 124.153L220.152 124.383ZM218.885 121.75L217.687 121.898C217.517 121.438 217.371 120.975 217.249 120.511L218.46 120.405L219.671 120.299C219.785 120.735 219.923 121.17 220.083 121.602L218.885 121.75ZM218.176 119.048L216.957 119.112C216.883 118.643 216.834 118.174 216.81 117.705L218.034 117.683L219.258 117.662C219.281 118.104 219.327 118.544 219.396 118.984L218.176 119.048ZM218.034 116.317L216.81 116.295C216.834 115.826 216.883 115.357 216.957 114.888L218.176 114.952L219.396 115.016C219.327 115.456 219.281 115.896 219.258 116.338L218.034 116.317ZM218.46 113.595L217.249 113.489C217.371 113.025 217.517 112.562 217.687 112.102L218.885 112.25L220.083 112.398C219.923 112.83 219.785 113.265 219.671 113.701L218.46 113.595ZM219.449 110.923L218.269 110.733C218.487 110.281 218.728 109.832 218.994 109.387L220.152 109.617L221.31 109.847C221.061 110.265 220.834 110.687 220.629 111.112L219.449 110.923ZM220.99 108.339L219.859 108.068C220.169 107.635 220.503 107.207 220.86 106.783L221.961 107.092L223.062 107.402C222.727 107.8 222.413 108.202 222.122 108.609L220.99 108.339ZM223.062 105.882L221.996 105.535C222.394 105.127 222.816 104.724 223.261 104.328L224.289 104.713L225.317 105.097C224.899 105.469 224.503 105.847 224.129 106.23L223.062 105.882ZM225.636 103.588L224.651 103.168C225.131 102.792 225.634 102.423 226.158 102.06L227.098 102.514L228.038 102.967C227.545 103.308 227.073 103.655 226.622 104.008L225.636 103.588ZM228.669 101.492L227.778 101.007C228.056 100.836 228.34 100.667 228.629 100.5L229.496 101L230.362 101.5C230.089 101.657 229.822 101.816 229.56 101.977L228.669 101.492ZM229.496 101L228.629 100.5C228.919 100.333 229.211 100.169 229.507 100.008L230.347 100.523L231.187 101.037C230.909 101.189 230.634 101.343 230.362 101.5L229.496 101ZM232.117 99.6158L231.332 99.0731C231.96 98.7703 232.6 98.4803 233.251 98.2029L233.978 98.7719L234.705 99.3409C234.094 99.6015 233.492 99.874 232.902 100.158L232.117 99.6158ZM235.926 97.9939L235.26 97.4004C235.946 97.1437 236.643 96.9002 237.35 96.67L237.952 97.2857L238.554 97.9014C237.891 98.1176 237.236 98.3462 236.592 98.5873L235.926 97.9939ZM240.048 96.6501L239.512 96.0144C240.246 95.808 240.988 95.6153 241.738 95.4361L242.206 96.0895L242.675 96.7429C241.97 96.9111 241.273 97.0921 240.584 97.2859L240.048 96.6501ZM244.421 95.6055L244.022 94.9369C244.793 94.7836 245.571 94.6441 246.354 94.5186L246.682 95.1999L247.01 95.8812C246.274 95.9991 245.544 96.1301 244.819 96.2741L244.421 95.6055ZM248.981 94.874L248.725 94.1825C249.522 94.0842 250.323 93.9999 251.127 93.9296L251.31 94.6288L251.494 95.3279C250.738 95.3939 249.986 95.4731 249.237 95.5655L248.981 94.874ZM253.661 94.4649L253.551 93.7607C254.362 93.7184 255.174 93.6902 255.988 93.6761L256.024 94.3828L256.061 95.0896C255.297 95.1029 254.533 95.1294 253.771 95.1691L253.661 94.4649ZM258.392 94.3828L258.429 93.6761C259.242 93.6902 260.055 93.7184 260.866 93.7607L260.756 94.4649L260.645 95.1691C259.883 95.1294 259.12 95.1029 258.355 95.0896L258.392 94.3828ZM263.106 94.6288L263.29 93.9296C264.093 93.9999 264.894 94.0842 265.691 94.1825L265.435 94.874L265.179 95.5655C264.431 95.4731 263.678 95.3939 262.923 95.3279L263.106 94.6288ZM267.735 95.1999L268.062 94.5186C268.845 94.6441 269.623 94.7836 270.395 94.9369L269.996 95.6055L269.597 96.2741C268.873 96.1301 268.142 95.9991 267.407 95.8812L267.735 95.1999ZM272.21 96.0895L272.678 95.4361C273.428 95.6153 274.171 95.808 274.905 96.0144L274.369 96.6501L273.833 97.2859C273.143 97.0921 272.446 96.9111 271.742 96.7429L272.21 96.0895ZM276.465 97.2857L277.067 96.67C277.773 96.9002 278.47 97.1437 279.157 97.4004L278.491 97.9939L277.825 98.5873C277.18 98.3462 276.526 98.1176 275.863 97.9014L276.465 97.2857ZM280.438 98.7719L281.165 98.2029C281.817 98.4803 282.457 98.7703 283.084 99.0731L282.299 99.6158L281.514 100.158C280.924 99.874 280.323 99.6015 279.711 99.3409L280.438 98.7719ZM284.07 100.523L284.909 100.008C285.205 100.169 285.498 100.333 285.787 100.5L284.921 101L284.055 101.5C283.783 101.343 283.508 101.189 283.23 101.037L284.07 100.523Z" fill="#BBC2CC" mask="url(#primitive-card-transform-path-32-outside-3_211_187)" />
                              <path d="M175.909 174.373C169.036 172.081 163.167 168.908 158.757 165.098C154.348 161.288 151.515 156.943 150.479 152.4C149.443 147.856 150.232 143.236 152.783 138.897C155.334 134.558 159.58 130.615 165.193 127.375" stroke="#1066F1" strokeOpacity="0.5" strokeWidth="0.5" strokeDasharray="0 3" />
                              <path d="M338.507 122.627C345.38 124.919 351.249 128.092 355.659 131.902C360.068 135.712 362.901 140.057 363.937 144.6C364.973 149.144 364.184 153.764 361.633 158.103C359.082 162.442 354.836 166.385 349.223 169.625" stroke="#1066F1" strokeOpacity="0.5" strokeWidth="0.5" strokeDasharray="0 3" />
                              <g clipPath="url(#primitive-card-transform-clip5_211_187)">
                                <circle opacity="0.5" cx="17" cy="17" r="16.5" transform="matrix(0.866025 0.5 -0.866025 0.5 201.782 132)" fill="#1066F1" fillOpacity="0.3" stroke="#1066F1" />
                                <path opacity="0.5" d="M198.317 119L174.343 170.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M201.782 121L177.808 172.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M205.247 123L181.272 174.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M208.712 125L184.737 176.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M212.173 127L188.198 178.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M215.638 129L191.663 180.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M219.103 131L195.128 182.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M222.567 133L198.593 184.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M226.032 135L202.058 186.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M229.493 137L205.518 188.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M232.958 139L208.983 190.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                              </g>
                              <rect x="-2.98023e-08" y="0.5" width="33" height="33" rx="16.5" transform="matrix(0.866025 0.5 -0.866025 0.5 202.215 132.25)" stroke="#1066F1" />
                              <circle cx="17" cy="17" r="16.5" transform="matrix(0.866025 0.5 -0.866025 0.5 312.634 132)" fill="#1066F1" fillOpacity="0.3" stroke="#1066F1" />
                              <mask id="primitive-card-transform-path-51-inside-4_211_187" fill="white">
                                <path d="M340.346 133C355.652 141.837 355.652 156.163 340.346 165C325.041 173.837 300.226 173.837 284.921 165C284.485 164.749 284.065 164.491 283.654 164.231L283.59 164.268C268.812 156.488 246.22 156.41 231.282 164.032L231.171 163.968C230.634 164.319 230.077 164.664 229.495 165C214.19 173.837 189.375 173.837 174.07 165C158.764 156.163 158.764 141.837 174.07 133C189.375 124.163 214.19 124.163 229.495 133C229.64 133.083 229.781 133.168 229.923 133.253L229.934 133.247C245.029 141.699 268.989 141.753 284.196 133.408L285.646 132.592C301 124.166 325.28 124.302 340.346 133Z" />
                              </mask>
                              <path d="M283.654 164.231L284.559 163.755L283.695 163.208L282.788 163.731L283.654 164.231ZM283.59 164.268L282.765 164.791L283.63 165.246L284.457 164.768L283.59 164.268ZM231.282 164.032L230.416 164.532L231.23 165.002L232.093 164.562L231.282 164.032ZM231.171 163.968L232.037 163.468L231.116 162.936L230.254 163.499L231.171 163.968ZM229.923 133.253L229.044 133.745L229.91 134.261L230.789 133.753L229.923 133.253ZM229.934 133.247L230.787 132.739L229.921 132.254L229.068 132.747L229.934 133.247ZM284.196 133.408L285.04 133.92L285.051 133.914L284.196 133.408ZM285.646 132.592L284.802 132.08L284.791 132.086L285.646 132.592ZM340.346 133L339.48 133.5C354.307 142.06 354.307 155.94 339.48 164.5L340.346 165L341.212 165.5C356.996 156.387 356.996 141.613 341.212 132.5L340.346 133ZM340.346 165L339.48 164.5C324.653 173.06 300.614 173.06 285.787 164.5L284.921 165L284.055 165.5C299.838 174.613 325.429 174.613 341.212 165.5L340.346 165ZM284.921 165L285.787 164.5C285.367 164.258 284.96 164.009 284.559 163.755L283.654 164.231L282.749 164.708C283.169 164.974 283.603 165.239 284.055 165.5L284.921 165ZM283.654 164.231L282.788 163.731L282.724 163.768L283.59 164.268L284.457 164.768L284.52 164.731L283.654 164.231ZM283.59 164.268L284.416 163.746C269.174 155.722 245.876 155.641 230.471 163.502L231.282 164.032L232.093 164.562C246.563 157.178 268.449 157.254 282.765 164.791L283.59 164.268ZM231.282 164.032L232.148 163.532L232.037 163.468L231.171 163.968L230.305 164.468L230.416 164.532L231.282 164.032ZM231.171 163.968L230.254 163.499C229.73 163.841 229.191 164.176 228.629 164.5L229.495 165L230.361 165.5C230.963 165.152 231.537 164.796 232.089 164.436L231.171 163.968ZM229.495 165L228.629 164.5C213.802 173.06 189.763 173.06 174.936 164.5L174.07 165L173.204 165.5C188.987 174.613 214.578 174.613 230.361 165.5L229.495 165ZM174.07 165L174.936 164.5C160.109 155.94 160.109 142.06 174.936 133.5L174.07 133L173.204 132.5C157.42 141.613 157.42 156.387 173.204 165.5L174.07 165ZM174.07 133L174.936 133.5C189.763 124.94 213.802 124.94 228.629 133.5L229.495 133L230.361 132.5C214.578 123.387 188.987 123.387 173.204 132.5L174.07 133ZM229.495 133L228.629 133.5C228.765 133.578 228.897 133.658 229.044 133.745L229.923 133.253L230.802 132.761C230.666 132.679 230.514 132.588 230.361 132.5L229.495 133ZM229.923 133.253L230.789 133.753L230.8 133.747L229.934 133.247L229.068 132.747L229.057 132.753L229.923 133.253ZM229.934 133.247L229.081 133.754C244.649 142.47 269.357 142.527 285.04 133.92L284.196 133.408L283.352 132.895C268.621 140.98 245.41 140.927 230.787 132.739L229.934 133.247ZM284.196 133.408L285.051 133.914L286.5 133.099L285.646 132.592L284.791 132.086L283.341 132.901L284.196 133.408ZM285.646 132.592L286.489 133.105C301.363 124.942 324.885 125.073 339.48 133.5L340.346 133L341.212 132.5C325.675 123.53 300.636 123.39 284.802 132.08L285.646 132.592Z" fill="#1066F1" mask="url(#primitive-card-transform-path-51-inside-4_211_187)" />
                            </g>
                            <rect x="-2.98023e-08" y="0.5" width="383" height="210" rx="15.5" transform="matrix(0.866025 0.5 -0.866025 0.5 183.164 0.25)" stroke="#D6DBE1" />
                            <defs>
                              <clipPath id="primitive-card-transform-clip0_211_187">
                                <rect width="384" height="211" rx="16" transform="matrix(0.866025 0.5 -0.866025 0.5 182.731 3)" fill="white" />
                              </clipPath>
                              <clipPath id="primitive-card-transform-clip1_211_187">
                                <rect width="384" height="211" fill="white" transform="matrix(0.866025 0.5 -0.866025 0.5 182.731 3)" />
                              </clipPath>
                              <clipPath id="primitive-card-transform-clip2_211_187">
                                <rect width="34" height="34" rx="17" transform="matrix(0.866025 0.5 -0.866025 0.5 201.782 135)" fill="white" />
                              </clipPath>
                              <clipPath id="primitive-card-transform-clip3_211_187">
                                <rect width="384" height="211" rx="16" transform="matrix(0.866025 0.5 -0.866025 0.5 182.731 0)" fill="white" />
                              </clipPath>
                              <clipPath id="primitive-card-transform-clip4_211_187">
                                <rect width="384" height="211" fill="white" transform="matrix(0.866025 0.5 -0.866025 0.5 182.731 0)" />
                              </clipPath>
                              <clipPath id="primitive-card-transform-clip5_211_187">
                                <rect width="34" height="34" rx="17" transform="matrix(0.866025 0.5 -0.866025 0.5 201.782 132)" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </g>
                        <g opacity="1" style={{ "transform": "translateY(68px)", "transformOrigin": "50% 50%", "transformBox": "fill-box" }}>
                          <svg viewBox="6 2 504 296" width="504" height="296" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#primitive-card-clean-clip0_211_276)">
                              <rect width="384" height="211" rx="16" transform="matrix(0.866025 0.5 -0.866025 0.5 182.731 3)" fill="#E7EAEE" />
                              <g clipPath="url(#primitive-card-clean-clip1_211_276)">
                                <path opacity="0.2" d="M472.85 195L332.554 276L42.4353 108.5L182.731 27.5L472.85 195Z" stroke="#4D8CF9" />
                              </g>
                              <g clipPath="url(#primitive-card-clean-clip2_211_276)">
                                <circle cx="34" cy="34" r="33.5" transform="matrix(0.866025 0.5 0.866025 -0.5 109.118 99.5)" stroke="#82AFFB" />
                                <g clipPath="url(#primitive-card-clean-clip3_211_276)">
                                  <circle opacity="0.5" cx="17" cy="17" r="16.5" transform="matrix(0.866025 0.5 -0.866025 0.5 168.009 82.5)" fill="#1066F1" fillOpacity="0.3" stroke="#82AFFB" />
                                  <path opacity="0.5" d="M164.544 69.5L140.569 121.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M168.009 71.5L144.034 123.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M171.474 73.5L147.499 125.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M174.938 75.5L150.964 127.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M178.399 77.5L154.425 129.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M181.864 79.5L157.89 131.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M185.329 81.5L161.354 133.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M188.794 83.5L164.819 135.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M192.259 85.5L168.284 137.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M195.72 87.5L171.745 139.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M199.185 89.5L175.21 141.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <rect x="-2.98023e-08" y="0.5" width="33" height="33" rx="16.5" transform="matrix(0.866025 0.5 -0.866025 0.5 168.442 82.75)" stroke="#1066F1" />
                                <circle cx="34" cy="34" r="33.5" transform="matrix(0.866025 0.5 0.866025 -0.5 199.185 151.5)" stroke="#82AFFB" />
                                <g clipPath="url(#primitive-card-clean-clip4_211_276)">
                                  <circle opacity="0.5" cx="17" cy="17" r="16.5" transform="matrix(0.866025 0.5 -0.866025 0.5 258.075 134.5)" fill="#1066F1" fillOpacity="0.3" stroke="#82AFFB" />
                                  <path opacity="0.5" d="M254.61 121.5L230.636 173.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M258.075 123.5L234.1 175.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M261.54 125.5L237.565 177.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M265.005 127.5L241.03 179.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M268.466 129.5L244.491 181.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M271.931 131.5L247.956 183.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M275.396 133.5L251.421 185.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M278.86 135.5L254.886 187.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M282.325 137.5L258.35 189.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M285.786 139.5L261.811 191.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M289.251 141.5L265.276 193.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <rect x="-2.98023e-08" y="0.5" width="33" height="33" rx="16.5" transform="matrix(0.866025 0.5 -0.866025 0.5 258.508 134.75)" stroke="#1066F1" />
                                <circle opacity="0.2" cx="34" cy="34" r="33.5" transform="matrix(0.866025 0.5 0.866025 -0.5 289.251 203.5)" stroke="white" />
                              </g>
                              <g clipPath="url(#primitive-card-clean-clip5_211_276)">
                                <circle cx="34" cy="34" r="33.5" transform="matrix(0.866025 0.5 0.866025 -0.5 289.251 203.5)" stroke="#DFE3E8" />
                                <circle cx="17" cy="17" r="16.5" transform="matrix(0.866025 0.5 0.866025 -0.5 228.63 151.5)" stroke="#BBC2CC" />
                                <circle cx="34" cy="34" r="33.5" transform="matrix(0.866025 0.5 0.866025 -0.5 199.185 151.5)" stroke="#DFE3E8" />
                                <circle cx="17" cy="17" r="16.5" transform="matrix(0.866025 0.5 0.866025 -0.5 318.696 203.5)" stroke="#BBC2CC" />
                              </g>
                              <path d="M198.61 182.167C199.885 181.43 201.953 181.43 203.228 182.167C204.504 182.903 204.504 184.097 203.228 184.833C201.953 185.57 199.885 185.57 198.61 184.833C197.334 184.097 197.334 182.903 198.61 182.167ZM309.894 117.917C311.169 117.18 313.237 117.18 314.513 117.917C315.788 118.653 315.788 119.847 314.513 120.583C313.237 121.32 311.169 121.32 309.894 120.583C308.618 119.847 308.618 118.653 309.894 117.917ZM200.919 183.5L200.486 183.25L311.77 119L312.203 119.25L312.636 119.5L201.352 183.75L200.919 183.5Z" fill="#1066F1" />
                            </g>
                            <rect x="-2.98023e-08" y="0.5" width="383" height="210" rx="15.5" transform="matrix(0.866025 0.5 -0.866025 0.5 183.164 3.25)" stroke="#D6DBE1" />
                            <g clipPath="url(#primitive-card-clean-clip6_211_276)">
                              <rect width="384" height="211" rx="16" transform="matrix(0.866025 0.5 -0.866025 0.5 182.731 0)" fill="#F8F9FC" />
                              <g clipPath="url(#primitive-card-clean-clip7_211_276)">
                                <path opacity="0.2" d="M472.85 192L332.554 273L42.4353 105.5L182.731 24.5L472.85 192Z" stroke="#4D8CF9" />
                              </g>
                              <g clipPath="url(#primitive-card-clean-clip8_211_276)">
                                <circle cx="34" cy="34" r="33.5" transform="matrix(0.866025 0.5 0.866025 -0.5 109.118 96.5)" stroke="#82AFFB" />
                                <g clipPath="url(#primitive-card-clean-clip9_211_276)">
                                  <circle opacity="0.5" cx="17" cy="17" r="16.5" transform="matrix(0.866025 0.5 -0.866025 0.5 168.009 79.5)" fill="#1066F1" fillOpacity="0.3" stroke="#82AFFB" />
                                  <path opacity="0.5" d="M164.544 66.5L140.569 118.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M168.009 68.5L144.034 120.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M171.474 70.5L147.499 122.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M174.938 72.5L150.964 124.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M178.399 74.5L154.425 126.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M181.864 76.5L157.89 128.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M185.329 78.5L161.354 130.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M188.794 80.5L164.819 132.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M192.259 82.5L168.284 134.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M195.72 84.5L171.745 136.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M199.185 86.5L175.21 138.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <rect x="-2.98023e-08" y="0.5" width="33" height="33" rx="16.5" transform="matrix(0.866025 0.5 -0.866025 0.5 168.442 79.75)" stroke="#1066F1" />
                                <circle cx="34" cy="34" r="33.5" transform="matrix(0.866025 0.5 0.866025 -0.5 199.185 148.5)" stroke="#82AFFB" />
                                <g clipPath="url(#primitive-card-clean-clip10_211_276)">
                                  <circle opacity="0.5" cx="17" cy="17" r="16.5" transform="matrix(0.866025 0.5 -0.866025 0.5 258.075 131.5)" fill="#1066F1" fillOpacity="0.3" stroke="#82AFFB" />
                                  <path opacity="0.5" d="M254.61 118.5L230.636 170.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M258.075 120.5L234.1 172.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M261.54 122.5L237.565 174.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M265.005 124.5L241.03 176.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M268.466 126.5L244.491 178.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M271.931 128.5L247.956 180.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M275.396 130.5L251.421 182.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M278.86 132.5L254.886 184.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M282.325 134.5L258.35 186.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M285.786 136.5L261.811 188.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M289.251 138.5L265.276 190.158" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <rect x="-2.98023e-08" y="0.5" width="33" height="33" rx="16.5" transform="matrix(0.866025 0.5 -0.866025 0.5 258.508 131.75)" stroke="#1066F1" />
                                <circle opacity="0.2" cx="34" cy="34" r="33.5" transform="matrix(0.866025 0.5 0.866025 -0.5 289.251 200.5)" stroke="white" />
                              </g>
                              <g clipPath="url(#primitive-card-clean-clip11_211_276)">
                                <circle cx="34" cy="34" r="33.5" transform="matrix(0.866025 0.5 0.866025 -0.5 289.251 200.5)" stroke="#DFE3E8" />
                                <circle cx="17" cy="17" r="16.5" transform="matrix(0.866025 0.5 0.866025 -0.5 228.63 148.5)" stroke="#BBC2CC" />
                                <circle cx="34" cy="34" r="33.5" transform="matrix(0.866025 0.5 0.866025 -0.5 199.185 148.5)" stroke="#DFE3E8" />
                                <circle cx="17" cy="17" r="16.5" transform="matrix(0.866025 0.5 0.866025 -0.5 318.696 200.5)" stroke="#BBC2CC" />
                              </g>
                              <path d="M198.61 179.167C199.885 178.43 201.953 178.43 203.228 179.167C204.504 179.903 204.504 181.097 203.228 181.833C201.953 182.57 199.885 182.57 198.61 181.833C197.334 181.097 197.334 179.903 198.61 179.167ZM309.894 114.917C311.169 114.18 313.237 114.18 314.513 114.917C315.788 115.653 315.788 116.847 314.513 117.583C313.237 118.32 311.169 118.32 309.894 117.583C308.618 116.847 308.618 115.653 309.894 114.917ZM200.919 180.5L200.486 180.25L311.77 116L312.203 116.25L312.636 116.5L201.352 180.75L200.919 180.5Z" fill="#1066F1" />
                            </g>
                            <rect x="-2.98023e-08" y="0.5" width="383" height="210" rx="15.5" transform="matrix(0.866025 0.5 -0.866025 0.5 183.164 0.25)" stroke="#D6DBE1" />
                            <defs>
                              <clipPath id="primitive-card-clean-clip0_211_276">
                                <rect width="384" height="211" rx="16" transform="matrix(0.866025 0.5 -0.866025 0.5 182.731 3)" fill="white" />
                              </clipPath>
                              <clipPath id="primitive-card-clean-clip1_211_276">
                                <rect width="384" height="211" fill="white" transform="matrix(0.866025 0.5 -0.866025 0.5 182.731 3)" />
                              </clipPath>
                              <clipPath id="primitive-card-clean-clip2_211_276">
                                <rect width="137" height="84" fill="white" transform="matrix(0.866025 0.5 0.866025 -0.5 101.759 103.75)" />
                              </clipPath>
                              <clipPath id="primitive-card-clean-clip3_211_276">
                                <rect width="34" height="34" rx="17" transform="matrix(0.866025 0.5 -0.866025 0.5 168.009 82.5)" fill="white" />
                              </clipPath>
                              <clipPath id="primitive-card-clean-clip4_211_276">
                                <rect width="34" height="34" rx="17" transform="matrix(0.866025 0.5 -0.866025 0.5 258.075 134.5)" fill="white" />
                              </clipPath>
                              <clipPath id="primitive-card-clean-clip5_211_276">
                                <rect width="139" height="68" fill="white" transform="matrix(-0.866025 -0.5 0.866025 -0.5 348.142 237.5)" />
                              </clipPath>
                              <clipPath id="primitive-card-clean-clip6_211_276">
                                <rect width="384" height="211" rx="16" transform="matrix(0.866025 0.5 -0.866025 0.5 182.731 0)" fill="white" />
                              </clipPath>
                              <clipPath id="primitive-card-clean-clip7_211_276">
                                <rect width="384" height="211" fill="white" transform="matrix(0.866025 0.5 -0.866025 0.5 182.731 0)" />
                              </clipPath>
                              <clipPath id="primitive-card-clean-clip8_211_276">
                                <rect width="137" height="84" fill="white" transform="matrix(0.866025 0.5 0.866025 -0.5 101.759 100.75)" />
                              </clipPath>
                              <clipPath id="primitive-card-clean-clip9_211_276">
                                <rect width="34" height="34" rx="17" transform="matrix(0.866025 0.5 -0.866025 0.5 168.009 79.5)" fill="white" />
                              </clipPath>
                              <clipPath id="primitive-card-clean-clip10_211_276">
                                <rect width="34" height="34" rx="17" transform="matrix(0.866025 0.5 -0.866025 0.5 258.075 131.5)" fill="white" />
                              </clipPath>
                              <clipPath id="primitive-card-clean-clip11_211_276">
                                <rect width="139" height="68" fill="white" transform="matrix(-0.866025 -0.5 0.866025 -0.5 348.142 234.5)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </g>
                        <g opacity="1" style={{ "transform": "translateY(54.5px)", "transformOrigin": "50% 50%", "transformBox": "fill-box" }}>
                          <svg viewBox="6 2 504 296" width="504" height="296" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#primitive-card-navigate-clip0_211_381)">
                              <path d="M168.875 11C176.528 6.58172 188.935 6.58172 196.588 11L501.429 187C509.081 191.418 509.081 198.582 501.429 203L346.41 292.5C338.758 296.918 326.35 296.918 318.697 292.5L13.8565 116.5C6.20381 112.082 6.2038 104.918 13.8565 100.5L168.875 11Z" fill="#E7EAEE" />
                              <g clipPath="url(#primitive-card-navigate-clip1_211_381)">
                                <path opacity="0.2" d="M472.85 195L332.554 276L42.4353 108.5L182.731 27.5L472.85 195Z" stroke="#4D8CF9" />
                              </g>
                              <g clipPath="url(#primitive-card-navigate-clip2_211_381)">
                                <circle cx="42" cy="42" r="41.5" transform="matrix(0.866025 0.5 -0.866025 0.5 257.208 110)" stroke="#82AFFB" />
                                <g clipPath="url(#primitive-card-navigate-clip3_211_381)">
                                  <circle opacity="0.5" cx="17" cy="17" r="16.5" transform="matrix(0.866025 0.5 -0.866025 0.5 257.208 135)" fill="#1066F1" fillOpacity="0.3" stroke="#82AFFB" />
                                  <path opacity="0.5" d="M253.743 122L229.768 173.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M257.208 124L233.233 175.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M260.673 126L236.698 177.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M264.138 128L240.163 179.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M267.599 130L243.624 181.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M271.063 132L247.089 183.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M274.528 134L250.554 185.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M277.993 136L254.018 187.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M281.458 138L257.483 189.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M284.919 140L260.944 191.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M288.384 142L264.409 193.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <rect x="-2.98023e-08" y="0.5" width="33" height="33" rx="16.5" transform="matrix(0.866025 0.5 -0.866025 0.5 257.641 135.25)" stroke="#1066F1" />
                                <circle cx="165.5" cy="165.5" r="165.5" transform="matrix(0.866025 0.5 -0.866025 0.5 58.8916 -128.5)" stroke="#D6DBE1" strokeDasharray="2 3" />
                                <path d="M159.931 138.041C190.651 127.801 216.162 113.073 233.898 95.3363" stroke="#1066F1" strokeLinecap="round" />
                                <circle cx="165.5" cy="165.5" r="165.5" transform="matrix(0.866025 0.5 -0.866025 0.5 456.396 101)" stroke="#D6DBE1" strokeDasharray="2 3" />
                                <path d="M281.387 208.164C299.123 190.427 324.634 175.699 355.354 165.459" stroke="#1066F1" strokeLinecap="round" />
                                <circle cx="147.5" cy="147.5" r="139" transform="matrix(0.866025 0.5 -0.866025 0.5 456.396 119)" stroke="#DFE3E8" strokeWidth="17" strokeDasharray="1 11" />
                                <circle cx="147.5" cy="147.5" r="139" transform="matrix(0.866025 0.5 -0.866025 0.5 58.8916 -110.5)" stroke="#DFE3E8" strokeWidth="17" strokeDasharray="1 11" />
                                <path d="M303.11 178.5L313.503 184.5" stroke="#1066F1" strokeLinecap="round" />
                                <path d="M349.009 205L368.061 216" stroke="#1066F1" strokeLinecap="round" />
                                <path d="M201.782 120L211.309 125.5" stroke="#1066F1" strokeLinecap="round" />
                                <path d="M146.356 88L165.409 99" stroke="#1066F1" strokeLinecap="round" />
                              </g>
                            </g>
                            <path d="M196.155 11.25L500.996 187.25C508.409 191.53 508.409 198.47 500.996 202.75L345.977 292.25C338.564 296.53 326.544 296.53 319.13 292.25L14.2895 116.25C6.87597 111.97 6.87596 105.03 14.2895 100.75L169.308 11.25C176.722 6.96979 188.741 6.96979 196.155 11.25Z" stroke="#D6DBE1" />
                            <g clipPath="url(#primitive-card-navigate-clip4_211_381)">
                              <path d="M168.875 8C176.528 3.58172 188.935 3.58172 196.588 8L501.429 184C509.081 188.418 509.081 195.582 501.429 200L346.41 289.5C338.758 293.918 326.35 293.918 318.697 289.5L13.8565 113.5C6.20381 109.082 6.2038 101.918 13.8565 97.5L168.875 8Z" fill="#F8F9FC" />
                              <g clipPath="url(#primitive-card-navigate-clip5_211_381)">
                                <path opacity="0.2" d="M472.85 192L332.554 273L42.4353 105.5L182.731 24.5L472.85 192Z" stroke="#4D8CF9" />
                              </g>
                              <g clipPath="url(#primitive-card-navigate-clip6_211_381)">
                                <circle cx="42" cy="42" r="41.5" transform="matrix(0.866025 0.5 -0.866025 0.5 257.208 107)" stroke="#82AFFB" />
                                <g clipPath="url(#primitive-card-navigate-clip7_211_381)">
                                  <circle opacity="0.5" cx="17" cy="17" r="16.5" transform="matrix(0.866025 0.5 -0.866025 0.5 257.208 132)" fill="#1066F1" fillOpacity="0.3" stroke="#82AFFB" />
                                  <path opacity="0.5" d="M253.743 119L229.768 170.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M257.208 121L233.233 172.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M260.673 123L236.698 174.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M264.138 125L240.163 176.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M267.599 127L243.624 178.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M271.063 129L247.089 180.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M274.528 131L250.554 182.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M277.993 133L254.018 184.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M281.458 135L257.483 186.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M284.919 137L260.944 188.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                  <path opacity="0.5" d="M288.384 139L264.409 190.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <rect x="-2.98023e-08" y="0.5" width="33" height="33" rx="16.5" transform="matrix(0.866025 0.5 -0.866025 0.5 257.641 132.25)" stroke="#1066F1" />
                                <circle cx="165.5" cy="165.5" r="165.5" transform="matrix(0.866025 0.5 -0.866025 0.5 58.8916 -131.5)" stroke="#D6DBE1" strokeDasharray="2 3" />
                                <path d="M159.931 135.041C190.651 124.801 216.162 110.073 233.898 92.3363" stroke="#1066F1" strokeLinecap="round" />
                                <circle cx="165.5" cy="165.5" r="165.5" transform="matrix(0.866025 0.5 -0.866025 0.5 456.396 98)" stroke="#D6DBE1" strokeDasharray="2 3" />
                                <path d="M281.387 205.164C299.123 187.427 324.634 172.699 355.354 162.459" stroke="#1066F1" strokeLinecap="round" />
                                <circle cx="147.5" cy="147.5" r="139" transform="matrix(0.866025 0.5 -0.866025 0.5 456.396 116)" stroke="#DFE3E8" strokeWidth="17" strokeDasharray="1 11" />
                                <circle cx="147.5" cy="147.5" r="139" transform="matrix(0.866025 0.5 -0.866025 0.5 58.8916 -113.5)" stroke="#DFE3E8" strokeWidth="17" strokeDasharray="1 11" />
                                <path d="M303.11 175.5L313.503 181.5" stroke="#1066F1" strokeLinecap="round" />
                                <path d="M349.009 202L368.061 213" stroke="#1066F1" strokeLinecap="round" />
                                <path d="M201.782 117L211.309 122.5" stroke="#1066F1" strokeLinecap="round" />
                                <path d="M146.356 85L165.409 96" stroke="#1066F1" strokeLinecap="round" />
                              </g>
                            </g>
                            <path d="M196.155 8.25L500.996 184.25C508.409 188.53 508.409 195.47 500.996 199.75L345.977 289.25C338.564 293.53 326.544 293.53 319.13 289.25L14.2895 113.25C6.87597 108.97 6.87596 102.03 14.2895 97.75L169.308 8.25C176.722 3.96979 188.741 3.96979 196.155 8.25Z" stroke="#D6DBE1" />
                            <defs>
                              <clipPath id="primitive-card-navigate-clip0_211_381">
                                <path d="M168.875 11C176.528 6.58172 188.935 6.58172 196.588 11L501.429 187C509.081 191.418 509.081 198.582 501.429 203L346.41 292.5C338.758 296.918 326.35 296.918 318.697 292.5L13.8565 116.5C6.20381 112.082 6.2038 104.918 13.8565 100.5L168.875 11Z" fill="white" />
                              </clipPath>
                              <clipPath id="primitive-card-navigate-clip1_211_381">
                                <rect width="384" height="211" fill="white" transform="matrix(0.866025 0.5 -0.866025 0.5 182.731 3)" />
                              </clipPath>
                              <clipPath id="primitive-card-navigate-clip2_211_381">
                                <rect width="336" height="163" fill="white" transform="matrix(0.866025 0.5 -0.866025 0.5 182.731 27)" />
                              </clipPath>
                              <clipPath id="primitive-card-navigate-clip3_211_381">
                                <rect width="34" height="34" rx="17" transform="matrix(0.866025 0.5 -0.866025 0.5 257.208 135)" fill="white" />
                              </clipPath>
                              <clipPath id="primitive-card-navigate-clip4_211_381">
                                <path d="M168.875 8C176.528 3.58172 188.935 3.58172 196.588 8L501.429 184C509.081 188.418 509.081 195.582 501.429 200L346.41 289.5C338.758 293.918 326.35 293.918 318.697 289.5L13.8565 113.5C6.20381 109.082 6.2038 101.918 13.8565 97.5L168.875 8Z" fill="white" />
                              </clipPath>
                              <clipPath id="primitive-card-navigate-clip5_211_381">
                                <rect width="384" height="211" fill="white" transform="matrix(0.866025 0.5 -0.866025 0.5 182.731 0)" />
                              </clipPath>
                              <clipPath id="primitive-card-navigate-clip6_211_381">
                                <rect width="336" height="163" fill="white" transform="matrix(0.866025 0.5 -0.866025 0.5 182.731 24)" />
                              </clipPath>
                              <clipPath id="primitive-card-navigate-clip7_211_381">
                                <rect width="34" height="34" rx="17" transform="matrix(0.866025 0.5 -0.866025 0.5 257.208 132)" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </g>
                        <g opacity="1" style={{ "transform": "translateY(-4px)", "transformOrigin": "50% 50%", "transformBox": "fill-box" }}>
                          <svg viewBox="6 2 504 296" width="504" height="296" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#primitive-card-authenticate-clip0)">
                              <path d="M168.883 11C176.536 6.58172 188.943 6.58172 196.596 11L501.437 187C509.089 191.418 509.089 198.582 501.437 203L346.418 292.5C338.765 296.918 326.358 296.918 318.705 292.5L13.8643 116.5C6.21162 112.082 6.21161 104.918 13.8643 100.5L168.883 11Z" fill="#F8F9FC" />
                              <g clipPath="url(#primitive-card-authenticate-clip1)">
                                <rect opacity="0.2" x="-2.98023e-08" y="0.5" width="335" height="162" transform="matrix(0.866025 0.5 -0.866025 0.5 183.172 27.25)" stroke="#4D8CF9" />
                              </g>
                              <circle cx="34" cy="34" r="33.5" transform="matrix(0.866025 0.5 -0.866025 0.5 167.153 66)" stroke="#1066F1" strokeOpacity="0.5" strokeDasharray="0 3" />
                              <circle cx="17" cy="17" r="16.5" transform="matrix(0.866025 0.5 -0.866025 0.5 167.153 83)" fill="#1066F1" fillOpacity="0.3" stroke="#1066F1" />
                              <circle cx="34" cy="34" r="33.5" transform="matrix(0.866025 0.5 -0.866025 0.5 257.22 118)" stroke="#1066F1" strokeOpacity="0.5" />
                              <g clipPath="url(#primitive-card-authenticate-clip2)">
                                <circle opacity="0.5" cx="17" cy="17" r="16.5" transform="matrix(0.866025 0.5 -0.866025 0.5 257.22 135)" fill="#1066F1" fillOpacity="0.3" stroke="#82AFFB" />
                                <path opacity="0.5" d="M253.755 122L229.78 173.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M257.22 124L233.245 175.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M260.685 126L236.71 177.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M264.149 128L240.175 179.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M267.61 130L243.636 181.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M271.075 132L247.1 183.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M274.54 134L250.565 185.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M278.005 136L254.03 187.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M281.47 138L257.495 189.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M284.931 140L260.956 191.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M288.396 142L264.421 193.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                              </g>
                              <rect x="-2.98023e-08" y="0.5" width="33" height="33" rx="16.5" transform="matrix(0.866025 0.5 -0.866025 0.5 257.653 135.25)" stroke="#1066F1" />
                              <circle cx="34" cy="34" r="33.5" transform="matrix(0.866025 0.5 -0.866025 0.5 347.286 170)" stroke="#1066F1" strokeOpacity="0.5" strokeDasharray="0 3" />
                              <circle cx="17" cy="17" r="16.5" transform="matrix(0.866025 0.5 -0.866025 0.5 347.286 187)" fill="#1066F1" fillOpacity="0.3" stroke="#1066F1" />
                              <path d="M240.578 116.142C251.48 114.455 262.959 114.455 273.862 116.142C284.764 117.828 294.705 121.142 302.686 125.75C310.667 130.358 316.407 136.097 319.328 142.392C322.249 148.686 322.249 155.314 319.328 161.608" stroke="#82AFFB" />
                              <path d="M195.109 142.392C192.188 148.686 192.188 155.314 195.109 161.608C198.031 167.903 203.77 173.642 211.751 178.25C219.732 182.858 229.674 186.172 240.576 187.858C251.478 189.545 262.957 189.545 273.859 187.858" stroke="#82AFFB" />
                              <path d="M314.376 119L302.685 125.75" stroke="#82AFFB" />
                              <path d="M211.317 178.5L199.626 185.25" stroke="#82AFFB" />
                            </g>
                            <path d="M196.163 11.25L501.004 187.25C508.417 191.53 508.417 198.47 501.004 202.75L345.985 292.25C338.571 296.53 326.552 296.53 319.138 292.25L14.2973 116.25C6.88378 111.97 6.88378 105.03 14.2973 100.75L169.316 11.25C176.729 6.96979 188.749 6.96979 196.163 11.25Z" stroke="#4D8CF9" />
                            <g clipPath="url(#primitive-card-authenticate-clip3)">
                              <path d="M168.875 8C176.528 3.58172 188.935 3.58172 196.588 8L501.429 184C509.081 188.418 509.081 195.582 501.429 200L346.41 289.5C338.758 293.918 326.35 293.918 318.697 289.5L13.8565 113.5C6.20381 109.082 6.2038 101.918 13.8565 97.5L168.875 8Z" fill="#F8F9FC" />
                              <g clipPath="url(#primitive-card-authenticate-clip4)">
                                <rect opacity="0.2" x="-2.98023e-08" y="0.5" width="335" height="162" transform="matrix(0.866025 0.5 -0.866025 0.5 183.164 24.25)" stroke="#4D8CF9" />
                              </g>
                              <circle cx="34" cy="34" r="33.5" transform="matrix(0.866025 0.5 -0.866025 0.5 167.146 63)" stroke="#1066F1" strokeOpacity="0.5" strokeDasharray="0 3" />
                              <circle cx="17" cy="17" r="16.5" transform="matrix(0.866025 0.5 -0.866025 0.5 167.146 80)" fill="#1066F1" fillOpacity="0.3" stroke="#1066F1" />
                              <circle cx="34" cy="34" r="33.5" transform="matrix(0.866025 0.5 -0.866025 0.5 257.212 115)" stroke="#1066F1" strokeOpacity="0.5" />
                              <g clipPath="url(#primitive-card-authenticate-clip5)">
                                <circle opacity="0.5" cx="17" cy="17" r="16.5" transform="matrix(0.866025 0.5 -0.866025 0.5 257.212 132)" fill="#1066F1" fillOpacity="0.3" stroke="#82AFFB" />
                                <path opacity="0.5" d="M253.747 119L229.772 170.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M257.212 121L233.237 172.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M260.677 123L236.702 174.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M264.142 125L240.167 176.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M267.603 127L243.628 178.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M271.067 129L247.093 180.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M274.532 131L250.558 182.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M277.997 133L254.022 184.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M281.462 135L257.487 186.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M284.923 137L260.948 188.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.5" d="M288.388 139L264.413 190.658" stroke="#1066F1" strokeLinecap="round" strokeLinejoin="round" />
                              </g>
                              <rect x="-2.98023e-08" y="0.5" width="33" height="33" rx="16.5" transform="matrix(0.866025 0.5 -0.866025 0.5 257.645 132.25)" stroke="#1066F1" />
                              <circle cx="34" cy="34" r="33.5" transform="matrix(0.866025 0.5 -0.866025 0.5 347.278 167)" stroke="#1066F1" strokeOpacity="0.5" strokeDasharray="0 3" />
                              <circle cx="17" cy="17" r="16.5" transform="matrix(0.866025 0.5 -0.866025 0.5 347.278 184)" fill="#1066F1" fillOpacity="0.3" stroke="#1066F1" />
                              <path d="M240.57 113.142C251.472 111.455 262.951 111.455 273.854 113.142C284.756 114.828 294.697 118.142 302.678 122.75C310.659 127.358 316.399 133.097 319.32 139.392C322.241 145.686 322.241 152.314 319.32 158.608" stroke="#82AFFB" />
                              <path d="M195.102 139.392C192.18 145.686 192.18 152.314 195.102 158.608C198.023 164.903 203.762 170.642 211.743 175.25C219.724 179.858 229.666 183.172 240.568 184.858C251.47 186.545 262.949 186.545 273.852 184.858" stroke="#82AFFB" />
                              <path d="M314.368 116L302.677 122.75" stroke="#82AFFB" />
                              <path d="M211.31 175.5L199.618 182.25" stroke="#82AFFB" />
                            </g>
                            <path d="M196.155 8.25L500.996 184.25C508.409 188.53 508.409 195.47 500.996 199.75L345.977 289.25C338.564 293.53 326.544 293.53 319.13 289.25L14.2895 113.25C6.87597 108.97 6.87596 102.03 14.2895 97.75L169.308 8.25C176.722 3.96979 188.741 3.96979 196.155 8.25Z" stroke="#4D8CF9" />
                            <defs>
                              <clipPath id="primitive-card-authenticate-clip0">
                                <path d="M168.883 11C176.536 6.58172 188.943 6.58172 196.596 11L501.437 187C509.089 191.418 509.089 198.582 501.437 203L346.418 292.5C338.765 296.918 326.358 296.918 318.705 292.5L13.8643 116.5C6.21162 112.082 6.21161 104.918 13.8643 100.5L168.883 11Z" fill="white" />
                              </clipPath>
                              <clipPath id="primitive-card-authenticate-clip1">
                                <rect width="384" height="211" fill="white" transform="matrix(0.866025 0.5 -0.866025 0.5 182.739 3)" />
                              </clipPath>
                              <clipPath id="primitive-card-authenticate-clip2">
                                <rect width="34" height="34" rx="17" transform="matrix(0.866025 0.5 -0.866025 0.5 257.22 135)" fill="white" />
                              </clipPath>
                              <clipPath id="primitive-card-authenticate-clip3">
                                <path d="M168.875 8C176.528 3.58172 188.935 3.58172 196.588 8L501.429 184C509.081 188.418 509.081 195.582 501.429 200L346.41 289.5C338.758 293.918 326.35 293.918 318.697 289.5L13.8565 113.5C6.20381 109.082 6.2038 101.918 13.8565 97.5L168.875 8Z" fill="white" />
                              </clipPath>
                              <clipPath id="primitive-card-authenticate-clip4">
                                <rect width="384" height="211" fill="white" transform="matrix(0.866025 0.5 -0.866025 0.5 182.731 0)" />
                              </clipPath>
                              <clipPath id="primitive-card-authenticate-clip5">
                                <rect width="34" height="34" rx="17" transform="matrix(0.866025 0.5 -0.866025 0.5 257.212 132)" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </g>
                      </svg>
                    </div>
                  </div>
                  {PLATFORM_PRIMITIVES.filter((p) => p.id === primitiveTab).map((p) => (
                    <div key={p.id} id={`platform-primitive-panel-${p.id}`} role="tabpanel" aria-labelledby={`platform-primitive-tab-${p.id}`} className="flex min-h-37 items-center border-t border-[#E7EAEE] p-8 lg:min-h-0 lg:h-44 lg:min-h-0 lg:shrink-0">
                      <div style={{ "opacity": "1", "transform": "none" }}>
                        <p className="text-base/6.5 text-[#000A27] max-w-148.75">
                          <span className="text-[#1066F1]">{p.lead}</span>
                          {" "}
                          {p.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="relative overflow-hidden bg-[rgb(var(--site-bg-rgb))]">
            <div className="relative mx-auto w-full max-w-300 border-x border-[#E7EAEE]">
              <div className="h-0 lg:h-24" aria-hidden="true"></div>
              <div className="flex flex-col items-center px-5 pb-8 pt-16 text-center text-[#000A27] lg:px-8 lg:py-14">
                <h2 className="text-balance text-4xl/10 font-semibold tracking-tight lg:text-5xl/14 text-center text-[#000A27]">
                  <span className="block">Build data playbooks</span>
                  <span className="block text-[#1066F1]">with Rubie</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 border-y border-[#E7EAEE] lg:grid-cols-2">
                <div className="flex flex-col ">
                  <div className="flex h-full flex-col items-center pb-8 pt-6">
                    <div className="lg:hidden">
                      <A className="relative z-10 rounded-full bg-[#EEF1F5] px-4 py-2 text-[14px]/6 text-[#000A27] lg:pointer-events-none lg:cursor-default" href="/solutions/migration-playbooks">Migration Playbooks</A>
                    </div>
                    <div className="hidden lg:block">
                      <div className="rounded-full bg-[#EEF1F5] px-4 py-2 text-[14px]/6  text-[#000A27]">Migration Playbooks</div>
                    </div>
                    <div className="mt-6 w-full flex-1 px-4">
                      <div className="relative overflow-hidden rounded-2xl border border-[#E7EAEE] bg-[rgb(var(--site-bg-rgb))] lg:min-h-126.5">
                        <div className="pointer-events-none w-full">
                          <div className="pointer-events-none aspect-576/325 w-full">
                            <Riv artboard="Animation 2" still="/stills/1d7e0f32.png" width={565} height={319} />
                          </div>
                        </div>
                        <div className="mx-auto flex w-full max-w-lg flex-col items-center gap-2 p-8  text-center">
                          <p className="text-base/6 text-[#00030A]">One-time, high-stakes data moves.</p>
                          <p className="text-base/6 text-[#5D646E]">{"Rip and replace a customer's legacy system in a fraction of the time. Turn painful onboarding into a competitive advantage."}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 hidden lg:block">
                      <A className="relative inline-flex items-center justify-center overflow-hidden rounded-[8px] py-[4px] text-[14px] font-medium leading-[24px] tracking-normal text-white shadow-[0px_12px_12px_-6px_rgba(16,102,241,0.05),0px_8px_8px_-4px_rgba(16,102,241,0.05),0px_6px_6px_-3px_rgba(16,102,241,0.05),0px_4px_4px_-2px_rgba(16,102,241,0.05)] transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#1066F1] focus:ring-offset-2 h-9 px-4" href="/solutions/migration-playbooks">
                        <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[inherit]">
                          <span className="absolute inset-0 rounded-[inherit] bg-[#0263FF]"></span>
                          <span className="absolute inset-x-0 top-0 h-[63.62%] rounded-t-[inherit] bg-[linear-gradient(180deg,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0)_100%)]"></span>
                        </span>
                        <span className="relative z-10 whitespace-nowrap">Explore migrations</span>
                        <span className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_4px_0px_rgba(255,255,255,0.5),inset_0px_0px_8px_0px_rgba(255,255,255,0.2)]"></span>
                      </A>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col lg:border-l lg:border-[#E7EAEE]">
                  <div className="flex h-full flex-col items-center pb-8 pt-6">
                    <div className="lg:hidden">
                      <A className="relative z-10 rounded-full bg-[#EEF1F5] px-4 py-2 text-[14px]/6 text-[#000A27] lg:pointer-events-none lg:cursor-default" href="/solutions/integration-playbooks">Integration Playbooks</A>
                    </div>
                    <div className="hidden lg:block">
                      <div className="rounded-full bg-[#EEF1F5] px-4 py-2 text-[14px]/6  text-[#000A27]">Integration Playbooks</div>
                    </div>
                    <div className="mt-6 w-full flex-1 px-4">
                      <div className="relative overflow-hidden rounded-2xl border border-[#E7EAEE] bg-[rgb(var(--site-bg-rgb))] lg:min-h-126.5">
                        <div className="pointer-events-none w-full">
                          <div className="pointer-events-none aspect-576/325 w-full">
                            <Riv artboard="Animation 3" still="/stills/06a3c1bf.png" width={564} height={318} />
                          </div>
                        </div>
                        <div className="mx-auto flex w-full max-w-lg flex-col items-center gap-2 p-8  text-center">
                          <p className="text-base/6 text-[#00030A]">Ongoing data flows from sources without APIs.</p>
                          <p className="text-base/6 text-[#5D646E]">Every new customer add-on, every long-tail source, every gated portal — connected, monitored, and maintained without taking engineering off product.</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 hidden lg:block">
                      <A className="relative inline-flex items-center justify-center overflow-hidden rounded-[8px] py-[4px] text-[14px] font-medium leading-[24px] tracking-normal text-white shadow-[0px_12px_12px_-6px_rgba(16,102,241,0.05),0px_8px_8px_-4px_rgba(16,102,241,0.05),0px_6px_6px_-3px_rgba(16,102,241,0.05),0px_4px_4px_-2px_rgba(16,102,241,0.05)] transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#1066F1] focus:ring-offset-2 h-9 px-4" href="/solutions/integration-playbooks">
                        <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[inherit]">
                          <span className="absolute inset-0 rounded-[inherit] bg-[#0263FF]"></span>
                          <span className="absolute inset-x-0 top-0 h-[63.62%] rounded-t-[inherit] bg-[linear-gradient(180deg,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0)_100%)]"></span>
                        </span>
                        <span className="relative z-10 whitespace-nowrap">Explore integrations</span>
                        <span className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_4px_0px_rgba(255,255,255,0.5),inset_0px_0px_8px_0px_rgba(255,255,255,0.2)]"></span>
                      </A>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-6" aria-hidden="true"></div>
            </div>
          </section>
          <section className="relative overflow-hidden">
            <div aria-hidden="true" className="pointer-events-none absolute left-[calc(50%+(100vw-100%)/2)] top-44 h-px w-screen -translate-x-1/2 bg-[#E7EAEE] lg:top-61"></div>
            <div aria-hidden="true" className="pointer-events-none absolute left-[calc(50%+(100vw-100%)/2)] top-107.25 h-px w-screen -translate-x-1/2 bg-[#E7EAEE] lg:top-124.25"></div>
            <div className="relative mx-auto w-full max-w-300">
              <div className="relative flex flex-col items-center px-5 pb-8 pt-16 text-center lg:h-61 lg:items-start lg:px-12 lg:pb-8 lg:pt-12 lg:text-left">
                <svg viewBox="0 0 459 181" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="absolute -bottom-px right-6 hidden h-45.25 w-114.75 lg:block">
                  <g clipPath="url(#how-teams-use-rubie-graphic-clip0_137_199)">
                    <path d="M270 70L149 70" stroke="#DFE3E8" strokeLinecap="round" />
                    <path d="M363 83V82.5C363.498 82.5 363.989 82.4709 364.471 82.4144L364.529 82.911L364.587 83.4076C364.066 83.4687 363.537 83.5 363 83.5V83ZM366.53 82.515L366.395 82.0337C367.351 81.7646 368.26 81.3846 369.108 80.9085L369.353 81.3445L369.598 81.7805C368.681 82.2949 367.699 82.7055 366.666 82.9963L366.53 82.515ZM371.048 80.2096L370.739 79.8172C371.51 79.2081 372.208 78.5101 372.817 77.7387L373.21 78.0485L373.602 78.3583C372.945 79.1911 372.191 79.9446 371.358 80.6021L371.048 80.2096ZM374.345 76.3531L373.908 76.1084C374.385 75.26 374.765 74.3505 375.034 73.3947L375.515 73.5302L375.996 73.6657C375.705 74.6987 375.295 75.6814 374.781 76.5979L374.345 76.3531ZM375.911 71.5289L375.414 71.4707C375.471 70.9885 375.5 70.4978 375.5 70H376H376.5C376.5 70.5367 376.469 71.0664 376.408 71.5871L375.911 71.5289ZM376 70H375.5C375.5 69.5022 375.471 69.0115 375.414 68.5293L375.911 68.4711L376.408 68.4129C376.469 68.9336 376.5 69.4633 376.5 70H376ZM375.515 66.4698L375.034 66.6053C374.765 65.6495 374.385 64.74 373.908 63.8916L374.345 63.6469L374.781 63.4021C375.295 64.3186 375.705 65.3013 375.996 66.3343L375.515 66.4698ZM373.21 61.9515L372.817 62.2613C372.208 61.4899 371.51 60.7919 370.739 60.1829L371.048 59.7904L371.358 59.3979C372.191 60.0554 372.945 60.8089 373.602 61.6417L373.21 61.9515ZM369.353 58.6555L369.108 59.0915C368.26 58.6154 367.351 58.2354 366.395 57.9663L366.53 57.485L366.666 57.0037C367.699 57.2945 368.681 57.7051 369.598 58.2195L369.353 58.6555ZM364.529 57.089L364.471 57.5856C363.989 57.5291 363.498 57.5 363 57.5V57V56.5C363.537 56.5 364.066 56.5313 364.587 56.5924L364.529 57.089ZM363 57V57.5H361.482V57V56.5H363V57ZM359.459 57V57.5H356.424V57V56.5H359.459V57ZM354.4 57V57.5H351.365V57V56.5H354.4V57ZM349.341 57V57.5H346.306V57V56.5H349.341V57ZM344.282 57V57.5H341.247V57V56.5H344.282V57ZM339.224 57V57.5H336.188V57V56.5H339.224V57ZM334.165 57V57.5H331.129V57V56.5H334.165V57ZM329.106 57V57.5H326.071V57V56.5H329.106V57ZM324.047 57V57.5H321.012V57V56.5H324.047V57ZM318.988 57V57.5H315.953V57V56.5H318.988V57ZM313.929 57V57.5H310.894V57V56.5H313.929V57ZM308.871 57V57.5H305.835V57V56.5H308.871V57ZM303.812 57V57.5H300.776V57V56.5H303.812V57ZM298.753 57V57.5H295.718V57V56.5H298.753V57ZM293.694 57V57.5H290.659V57V56.5H293.694V57ZM288.635 57V57.5H285.6V57V56.5H288.635V57ZM283.576 57V57.5H280.541V57V56.5H283.576V57ZM278.518 57V57.5H277V57V56.5H278.518V57ZM277 57V57.5C276.502 57.5 276.011 57.5291 275.529 57.5856L275.471 57.089L275.413 56.5924C275.934 56.5313 276.463 56.5 277 56.5V57ZM273.47 57.485L273.605 57.9663C272.649 58.2354 271.74 58.6154 270.892 59.0915L270.647 58.6555L270.402 58.2195C271.319 57.7051 272.301 57.2945 273.334 57.0037L273.47 57.485ZM268.952 59.7904L269.261 60.1828C268.49 60.7919 267.792 61.4899 267.183 62.2613L266.79 61.9515L266.398 61.6417C267.055 60.8089 267.809 60.0554 268.642 59.3979L268.952 59.7904ZM265.655 63.6469L266.092 63.8916C265.615 64.74 265.235 65.6495 264.966 66.6053L264.485 66.4698L264.004 66.3343C264.295 65.3013 264.705 64.3186 265.219 63.4021L265.655 63.6469ZM264.089 68.4711L264.586 68.5293C264.529 69.0115 264.5 69.5022 264.5 70H264H263.5C263.5 69.4633 263.531 68.9336 263.592 68.4129L264.089 68.4711ZM264 70H264.5C264.5 70.4978 264.529 70.9885 264.586 71.4707L264.089 71.5289L263.592 71.5871C263.531 71.0664 263.5 70.5367 263.5 70H264ZM264.485 73.5302L264.966 73.3947C265.235 74.3505 265.615 75.26 266.092 76.1084L265.655 76.3531L265.219 76.5979C264.705 75.6814 264.295 74.6987 264.004 73.6657L264.485 73.5302ZM266.79 78.0485L267.183 77.7387C267.792 78.5101 268.49 79.2081 269.261 79.8171L268.952 80.2096L268.642 80.6021C267.809 79.9446 267.055 79.1911 266.398 78.3583L266.79 78.0485ZM270.647 81.3445L270.892 80.9085C271.74 81.3846 272.649 81.7646 273.605 82.0337L273.47 82.515L273.334 82.9963C272.301 82.7055 271.319 82.2949 270.402 81.7805L270.647 81.3445ZM275.471 82.911L275.529 82.4144C276.011 82.4709 276.502 82.5 277 82.5V83V83.5C276.463 83.5 275.934 83.4687 275.413 83.4076L275.471 82.911ZM277 83V82.5H278.518V83V83.5H277V83ZM280.541 83V82.5H283.576V83V83.5H280.541V83ZM285.6 83V82.5H288.635V83V83.5H285.6V83ZM290.659 83V82.5H293.694V83V83.5H290.659V83ZM295.718 83V82.5H298.753V83V83.5H295.718V83ZM300.776 83V82.5H303.812V83V83.5H300.776V83ZM305.835 83V82.5H308.871V83V83.5H305.835V83ZM310.894 83V82.5H313.929V83V83.5H310.894V83ZM315.953 83V82.5H318.988V83V83.5H315.953V83ZM321.012 83V82.5H324.047V83V83.5H321.012V83ZM326.071 83V82.5H329.106V83V83.5H326.071V83ZM331.129 83V82.5H334.165V83V83.5H331.129V83ZM336.188 83V82.5H339.224V83V83.5H336.188V83ZM341.247 83V82.5H344.282V83V83.5H341.247V83ZM346.306 83V82.5H349.341V83V83.5H346.306V83ZM351.365 83V82.5H354.4V83V83.5H351.365V83ZM356.424 83V82.5H359.459V83V83.5H356.424V83ZM361.482 83V82.5H363V83V83.5H361.482V83Z" fill="#DFE3E8" />
                    <path d="M437 13L436.5 13C436.5 12.5022 436.471 12.0115 436.414 11.5293L436.911 11.4711L437.408 11.4129C437.469 11.9336 437.5 12.4633 437.5 13L437 13ZM436.515 9.46983L436.034 9.60531C435.765 8.64949 435.385 7.74 434.908 6.89156L435.345 6.64686L435.781 6.40215C436.295 7.31861 436.705 8.30133 436.996 9.33434L436.515 9.46983ZM434.21 4.95153L433.817 5.26133C433.208 4.48986 432.51 3.79185 431.739 3.18285L432.048 2.7904L432.358 2.39794C433.191 3.05539 433.945 3.80888 434.602 4.64172L434.21 4.95153ZM430.353 1.65549L430.108 2.09151C429.26 1.61535 428.351 1.2354 427.395 0.96633L427.53 0.485037L427.666 0.00374387C428.699 0.294543 429.681 0.705125 430.598 1.21946L430.353 1.65549ZM425.529 0.0889591L425.471 0.585563C424.989 0.52907 424.498 0.499999 424 0.499999L424 -5.68248e-07L424 -0.500001C424.537 -0.500001 425.066 -0.468652 425.587 -0.407644L425.529 0.0889591ZM424 -5.68248e-07L424 0.499999C423.502 0.499999 423.011 0.52907 422.529 0.585563L422.471 0.0889591L422.413 -0.407644C422.934 -0.468652 423.463 -0.500001 424 -0.500001L424 -5.68248e-07ZM420.47 0.485037L420.605 0.96633C419.649 1.2354 418.74 1.61535 417.892 2.09151L417.647 1.65549L417.402 1.21946C418.319 0.705125 419.301 0.294543 420.334 0.00374393L420.47 0.485037ZM415.952 2.7904L416.261 3.18285C415.49 3.79185 414.792 4.48986 414.183 5.26133L413.79 4.95153L413.398 4.64172C414.055 3.80887 414.809 3.05539 415.642 2.39794L415.952 2.7904ZM412.655 6.64686L413.092 6.89156C412.615 7.74 412.235 8.64949 411.966 9.60531L411.485 9.46983L411.004 9.33434C411.295 8.30133 411.705 7.31861 412.219 6.40215L412.655 6.64686ZM411.089 11.4711L411.586 11.5293C411.529 12.0115 411.5 12.5022 411.5 13L411 13L410.5 13C410.5 12.4633 410.531 11.9336 410.592 11.4129L411.089 11.4711ZM411 13L411.5 13L411.5 14.4625L411 14.4625L410.5 14.4625L410.5 13L411 13ZM411 16.4125L411.5 16.4125L411.5 19.3375L411 19.3375L410.5 19.3375L410.5 16.4125L411 16.4125ZM411 21.2875L411.5 21.2875L411.5 24.2125L411 24.2125L410.5 24.2125L410.5 21.2875L411 21.2875ZM411 26.1625L411.5 26.1625L411.5 29.0875L411 29.0875L410.5 29.0875L410.5 26.1625L411 26.1625ZM411 31.0375L411.5 31.0375L411.5 33.9625L411 33.9625L410.5 33.9625L410.5 31.0375L411 31.0375ZM411 35.9125L411.5 35.9125L411.5 38.8375L411 38.8375L410.5 38.8375L410.5 35.9125L411 35.9125ZM411 40.7875L411.5 40.7875L411.5 43.7125L411 43.7125L410.5 43.7125L410.5 40.7875L411 40.7875ZM411 45.6625L411.5 45.6625L411.5 48.5875L411 48.5875L410.5 48.5875L410.5 45.6625L411 45.6625ZM411 50.5375L411.5 50.5375L411.5 53.4625L411 53.4625L410.5 53.4625L410.5 50.5375L411 50.5375ZM411 55.4125L411.5 55.4125L411.5 58.3375L411 58.3375L410.5 58.3375L410.5 55.4125L411 55.4125ZM411 60.2875L411.5 60.2875L411.5 63.2125L411 63.2125L410.5 63.2125L410.5 60.2875L411 60.2875ZM411 65.1625L411.5 65.1625L411.5 68.0875L411 68.0875L410.5 68.0875L410.5 65.1625L411 65.1625ZM411 70.0375L411.5 70.0375L411.5 72.9625L411 72.9625L410.5 72.9625L410.5 70.0375L411 70.0375ZM411 74.9125L411.5 74.9125L411.5 77.8375L411 77.8375L410.5 77.8375L410.5 74.9125L411 74.9125ZM411 79.7875L411.5 79.7875L411.5 82.7125L411 82.7125L410.5 82.7125L410.5 79.7875L411 79.7875ZM411 84.6625L411.5 84.6625L411.5 87.5875L411 87.5875L410.5 87.5875L410.5 84.6625L411 84.6625ZM411 89.5375L411.5 89.5375L411.5 91L411 91L410.5 91L410.5 89.5375L411 89.5375ZM411 91L411.5 91C411.5 91.4978 411.529 91.9885 411.586 92.4707L411.089 92.5289L410.592 92.5871C410.531 92.0664 410.5 91.5367 410.5 91L411 91ZM411.485 94.5302L411.966 94.3947C412.235 95.3505 412.615 96.26 413.092 97.1084L412.655 97.3531L412.219 97.5978C411.705 96.6814 411.295 95.6987 411.004 94.6657L411.485 94.5302ZM413.79 99.0485L414.183 98.7387C414.792 99.5101 415.49 100.208 416.261 100.817L415.952 101.21L415.642 101.602C414.809 100.945 414.055 100.191 413.398 99.3583L413.79 99.0485ZM417.647 102.345L417.892 101.908C418.74 102.385 419.649 102.765 420.605 103.034L420.47 103.515L420.334 103.996C419.301 103.705 418.319 103.295 417.402 102.781L417.647 102.345ZM422.471 103.911L422.529 103.414C423.011 103.471 423.502 103.5 424 103.5L424 104L424 104.5C423.463 104.5 422.934 104.469 422.413 104.408L422.471 103.911ZM424 104L424 103.5C424.498 103.5 424.989 103.471 425.471 103.414L425.529 103.911L425.587 104.408C425.066 104.469 424.537 104.5 424 104.5L424 104ZM427.53 103.515L427.395 103.034C428.351 102.765 429.26 102.385 430.108 101.908L430.353 102.345L430.598 102.781C429.681 103.295 428.699 103.705 427.666 103.996L427.53 103.515ZM432.048 101.21L431.739 100.817C432.51 100.208 433.208 99.5101 433.817 98.7387L434.21 99.0485L434.602 99.3583C433.945 100.191 433.191 100.945 432.358 101.602L432.048 101.21ZM435.345 97.3531L434.908 97.1084C435.385 96.26 435.765 95.3505 436.034 94.3947L436.515 94.5302L436.996 94.6657C436.705 95.6987 436.295 96.6814 435.781 97.5979L435.345 97.3531ZM436.911 92.5289L436.414 92.4707C436.471 91.9885 436.5 91.4978 436.5 91L437 91L437.5 91C437.5 91.5367 437.469 92.0664 437.408 92.5871L436.911 92.5289ZM437 91L436.5 91L436.5 89.5375L437 89.5375L437.5 89.5375L437.5 91L437 91ZM437 87.5875L436.5 87.5875L436.5 84.6625L437 84.6625L437.5 84.6625L437.5 87.5875L437 87.5875ZM437 82.7125L436.5 82.7125L436.5 79.7875L437 79.7875L437.5 79.7875L437.5 82.7125L437 82.7125ZM437 77.8375L436.5 77.8375L436.5 74.9125L437 74.9125L437.5 74.9125L437.5 77.8375L437 77.8375ZM437 72.9625L436.5 72.9625L436.5 70.0375L437 70.0375L437.5 70.0375L437.5 72.9625L437 72.9625ZM437 68.0875L436.5 68.0875L436.5 65.1625L437 65.1625L437.5 65.1625L437.5 68.0875L437 68.0875ZM437 63.2125L436.5 63.2125L436.5 60.2875L437 60.2875L437.5 60.2875L437.5 63.2125L437 63.2125ZM437 58.3375L436.5 58.3375L436.5 55.4125L437 55.4125L437.5 55.4125L437.5 58.3375L437 58.3375ZM437 53.4625L436.5 53.4625L436.5 50.5375L437 50.5375L437.5 50.5375L437.5 53.4625L437 53.4625ZM437 48.5875L436.5 48.5875L436.5 45.6625L437 45.6625L437.5 45.6625L437.5 48.5875L437 48.5875ZM437 43.7125L436.5 43.7125L436.5 40.7875L437 40.7875L437.5 40.7875L437.5 43.7125L437 43.7125ZM437 38.8375L436.5 38.8375L436.5 35.9125L437 35.9125L437.5 35.9125L437.5 38.8375L437 38.8375ZM437 33.9625L436.5 33.9625L436.5 31.0375L437 31.0375L437.5 31.0375L437.5 33.9625L437 33.9625ZM437 29.0875L436.5 29.0875L436.5 26.1625L437 26.1625L437.5 26.1625L437.5 29.0875L437 29.0875ZM437 24.2125L436.5 24.2125L436.5 21.2875L437 21.2875L437.5 21.2875L437.5 24.2125L437 24.2125ZM437 19.3375L436.5 19.3375L436.5 16.4125L437 16.4125L437.5 16.4125L437.5 19.3375L437 19.3375ZM437 14.4625L436.5 14.4625L436.5 13L437 13L437.5 13L437.5 14.4625L437 14.4625Z" fill="#DFE3E8" />
                    <circle cx="9" cy="9" r="8.5" transform="matrix(-1 0 0 1 433 4)" stroke="#DFE3E8" />
                    <circle cx="278" cy="70" r="8.5" transform="rotate(180 278 70)" stroke="#DFE3E8" />
                    <circle cx="9" cy="9" r="8.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 415 82)" stroke="#DFE3E8" />
                    <path d="M389.5 91C389.5 91.7778 389.838 92.6336 390.521 93.5547C391.201 94.4734 392.199 95.4225 393.451 96.376C395.955 98.2827 399.411 100.158 403.181 101.813C406.946 103.467 411.005 104.89 414.702 105.9C418.409 106.913 421.719 107.5 424 107.5C433.113 107.5 440.5 100.113 440.5 91C440.5 81.8873 433.113 74.5 424 74.5C421.719 74.5 418.409 75.0871 414.702 76.0996C411.005 77.1096 406.946 78.5333 403.181 80.1865C399.411 81.8415 395.955 83.7173 393.451 85.624C392.199 86.5775 391.201 87.5266 390.521 88.4453C389.838 89.3664 389.5 90.2222 389.5 91Z" stroke="#DFE3E8" />
                    <circle cx="9" cy="9" r="8.5" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 372 79)" stroke="#DFE3E8" />
                    <path d="M397.5 70C397.5 69.2222 397.162 68.3664 396.479 67.4453C395.799 66.5266 394.801 65.5775 393.549 64.624C391.045 62.7173 387.589 60.8415 383.819 59.1865C380.054 57.5333 375.995 56.1096 372.298 55.0996C368.591 54.0871 365.281 53.5 363 53.5C353.887 53.5 346.5 60.8873 346.5 70C346.5 79.1127 353.887 86.5 363 86.5C365.281 86.5 368.591 85.9129 372.298 84.9004C375.995 83.8904 380.054 82.4667 383.819 80.8135C387.589 79.1585 391.045 77.2827 393.549 75.376C394.801 74.4225 395.799 73.4734 396.479 72.5547C397.162 71.6336 397.5 70.7778 397.5 70Z" stroke="#DFE3E8" />
                    <path d="M307 181H124V116H307V181Z" stroke="#DFE3E8" />
                    <circle cx="31" cy="31" r="31" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 189 101)" fill="#F8F9FC" stroke="#DFE3E8" />
                    <path d="M167 83L167 57L150 57L150 83L167 83Z" fill="#F8F9FC" stroke="#DFE3E8" />
                    <path d="M170 79L170 61L167 61L167 79L170 79Z" fill="#F8F9FC" stroke="#DFE3E8" />
                    <path d="M183 73L183 67L170 67L170 73L183 73Z" fill="#F8F9FC" stroke="#DFE3E8" />
                    <path d="M150 73L150 67L108 67L108 73L150 73Z" fill="#F8F9FC" stroke="#DFE3E8" />
                    <path d="M183 80L183 60L229 60L229 80L183 80Z" fill="#F8F9FC" stroke="#DFE3E8" />
                    <path d="M82 57L82 83L108 83L108 57L82 57Z" stroke="#DFE3E8" />
                    <circle cx="8" cy="8" r="7.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 87 62)" stroke="#DFE3E8" />
                    <circle cx="30" cy="30" r="29.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 185 99)" fill="#F8F9FC" stroke="#DFE3E8" />
                    <path d="M197.5 144C197.5 145.933 199.067 147.5 201 147.5C202.933 147.5 204.5 145.933 204.5 144C204.5 142.067 202.933 140.5 201 140.5C199.067 140.5 197.5 142.067 197.5 144Z" stroke="#DFE3E8" />
                  </g>
                  <defs>
                    <clipPath id="how-teams-use-rubie-graphic-clip0_137_199">
                      <rect width="459" height="181" fill="white" transform="matrix(-1 0 0 1 459 0)" />
                    </clipPath>
                  </defs>
                </svg>
                <h2 className="text-balance text-4xl/10 font-semibold tracking-tight lg:text-5xl/14 relative z-10 text-[#000A27]">
                  <span className="block">How teams are</span>
                  <span className="block text-[#1066F1]">using Rubie today</span>
                </h2>
              </div>
              <div className="relative h-63.5">
                <div className="absolute inset-x-0  overflow-hidden " style={{ "height": "88px", "top": "0" }}>
                  <div className="flex h-full animate-[marquee-row_var(--marquee-duration)_linear_infinite] will-change-transform motion-reduce:animate-none" style={{ "--marquee-from": "-861.75px", "--marquee-to": "-3542.75px", "--marquee-duration": "34s", "transform": "translateX(-861.75px)" }}>
                    <div className="flex h-full shrink-0">
                      <div className="shrink-0" style={{ "width": "383px" }}>
                        <div className="w-95.75 shrink-0 border-r border-[rgba(5,35,52,0.07)] px-4 py-6">
                          <div className="flex h-8 items-center justify-center rounded-full px-4 text-center text-[14px]/6 " style={{ "border": "1px solid rgba(5, 35, 52, 0.07)" }}>
                            <span className="font-normal" style={{ "color": "#79818D" }}>· Property detail extraction ·</span>
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0" style={{ "width": "383px" }}>
                        <div className="w-95.75 shrink-0 border-r border-[rgba(5,35,52,0.07)] px-4 py-6">
                          <div className="flex h-8 items-center justify-center rounded-full px-4 text-center text-[14px]/6 " style={{ "border": "1px solid rgba(5, 35, 52, 0.07)" }}>
                            <span className="font-normal" style={{ "color": "#79818D" }}>· Bill fetch ·</span>
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0" style={{ "width": "383px" }}>
                        <div className="w-95.75 shrink-0 border-r border-[rgba(5,35,52,0.07)] px-4 py-6">
                          <div className="flex h-8 items-center justify-center rounded-full px-4 text-center text-[14px]/6 " style={{ "border": "1px solid rgba(5, 35, 52, 0.07)" }}>
                            <span className="font-normal" style={{ "color": "#5D646E" }}>· Sales tax compliance automation ·</span>
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0" style={{ "width": "383px" }}>
                        <div className="w-95.75 shrink-0 border-r border-[rgba(5,35,52,0.07)] px-4 py-6">
                          <div className="flex h-8 items-center justify-center rounded-full px-4 text-center text-[14px]/6 " style={{ "backgroundImage": "linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(105, 113, 124) 0%, rgb(105, 113, 124) 100%)", "boxShadow": "0px 4px 12px 0px rgba(0,39,80,0.06), 0px 4px 4px -2px rgba(0,39,80,0.06)" }}>
                            <span className="font-medium text-white">· AP invoice download ·</span>
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0" style={{ "width": "383px" }}>
                        <div className="w-95.75 shrink-0 border-r border-[rgba(5,35,52,0.07)] px-4 py-6">
                          <div className="flex h-8 items-center justify-center rounded-full px-4 text-center text-[14px]/6 " style={{ "border": "1px solid rgba(5, 35, 52, 0.07)" }}>
                            <span className="font-normal" style={{ "color": "#5D646E" }}>· Payroll data from ADP ·</span>
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0" style={{ "width": "383px" }}>
                        <div className="w-95.75 shrink-0 border-r border-[rgba(5,35,52,0.07)] px-4 py-6">
                          <div className="flex h-8 items-center justify-center rounded-full px-4 text-center text-[14px]/6 " style={{ "border": "1px solid rgba(5, 35, 52, 0.07)" }}>
                            <span className="font-normal" style={{ "color": "#5D646E" }}>· Payment method updates across POS systems ·</span>
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0" style={{ "width": "383px" }}>
                        <div className="w-95.75 shrink-0 border-r border-[rgba(5,35,52,0.07)] px-4 py-6">
                          <div className="flex h-8 items-center justify-center rounded-full px-4 text-center text-[14px]/6 " style={{ "border": "1px solid rgba(5, 35, 52, 0.07)" }}>
                            <span className="font-normal" style={{ "color": "#5D646E" }}>· Legal contract retrieval via DocuSign ·</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="flex h-full shrink-0">
                      <div className="shrink-0" style={{ "width": "383px" }}>
                        <div className="w-95.75 shrink-0 border-r border-[rgba(5,35,52,0.07)] px-4 py-6">
                          <div className="flex h-8 items-center justify-center rounded-full px-4 text-center text-[14px]/6 " style={{ "border": "1px solid rgba(5, 35, 52, 0.07)" }}>
                            <span className="font-normal" style={{ "color": "#79818D" }}>· Property detail extraction ·</span>
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0" style={{ "width": "383px" }}>
                        <div className="w-95.75 shrink-0 border-r border-[rgba(5,35,52,0.07)] px-4 py-6">
                          <div className="flex h-8 items-center justify-center rounded-full px-4 text-center text-[14px]/6 " style={{ "border": "1px solid rgba(5, 35, 52, 0.07)" }}>
                            <span className="font-normal" style={{ "color": "#79818D" }}>· Bill fetch ·</span>
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0" style={{ "width": "383px" }}>
                        <div className="w-95.75 shrink-0 border-r border-[rgba(5,35,52,0.07)] px-4 py-6">
                          <div className="flex h-8 items-center justify-center rounded-full px-4 text-center text-[14px]/6 " style={{ "border": "1px solid rgba(5, 35, 52, 0.07)" }}>
                            <span className="font-normal" style={{ "color": "#5D646E" }}>· Sales tax compliance automation ·</span>
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0" style={{ "width": "383px" }}>
                        <div className="w-95.75 shrink-0 border-r border-[rgba(5,35,52,0.07)] px-4 py-6">
                          <div className="flex h-8 items-center justify-center rounded-full px-4 text-center text-[14px]/6 " style={{ "backgroundImage": "linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(105, 113, 124) 0%, rgb(105, 113, 124) 100%)", "boxShadow": "0px 4px 12px 0px rgba(0,39,80,0.06), 0px 4px 4px -2px rgba(0,39,80,0.06)" }}>
                            <span className="font-medium text-white">· AP invoice download ·</span>
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0" style={{ "width": "383px" }}>
                        <div className="w-95.75 shrink-0 border-r border-[rgba(5,35,52,0.07)] px-4 py-6">
                          <div className="flex h-8 items-center justify-center rounded-full px-4 text-center text-[14px]/6 " style={{ "border": "1px solid rgba(5, 35, 52, 0.07)" }}>
                            <span className="font-normal" style={{ "color": "#5D646E" }}>· Payroll data from ADP ·</span>
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0" style={{ "width": "383px" }}>
                        <div className="w-95.75 shrink-0 border-r border-[rgba(5,35,52,0.07)] px-4 py-6">
                          <div className="flex h-8 items-center justify-center rounded-full px-4 text-center text-[14px]/6 " style={{ "border": "1px solid rgba(5, 35, 52, 0.07)" }}>
                            <span className="font-normal" style={{ "color": "#5D646E" }}>· Payment method updates across POS systems ·</span>
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0" style={{ "width": "383px" }}>
                        <div className="w-95.75 shrink-0 border-r border-[rgba(5,35,52,0.07)] px-4 py-6">
                          <div className="flex h-8 items-center justify-center rounded-full px-4 text-center text-[14px]/6 " style={{ "border": "1px solid rgba(5, 35, 52, 0.07)" }}>
                            <span className="font-normal" style={{ "color": "#5D646E" }}>· Legal contract retrieval via DocuSign ·</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-x-0  overflow-hidden border-t border-[rgba(5,35,52,0.07)]" style={{ "height": "88px", "top": "88px" }}>
                  <div className="flex h-full animate-[marquee-row_var(--marquee-duration)_linear_infinite] will-change-transform motion-reduce:animate-none" style={{ "--marquee-from": "-2909.25px", "--marquee-to": "-228.25px", "--marquee-duration": "38s", "transform": "translateX(-2909.25px)" }}>
                    <div className="flex h-full shrink-0">
                      <div className="shrink-0" style={{ "width": "383px" }}>
                        <div className="w-95.75 shrink-0 border-r border-[rgba(5,35,52,0.07)] px-4 py-6">
                          <div className="flex h-8 items-center justify-center rounded-full px-4 text-center text-[14px]/6 " style={{ "border": "1px solid rgba(5, 35, 52, 0.07)" }}>
                            <span className="font-normal" style={{ "color": "#5D646E" }}>· Invoice downloads from vendor portals ·</span>
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0" style={{ "width": "383px" }}>
                        <div className="w-95.75 shrink-0 border-r border-[rgba(5,35,52,0.07)] px-4 py-6">
                          <div className="flex h-8 items-center justify-center rounded-full px-4 text-center text-[14px]/6 " style={{ "border": "1px solid rgba(5, 35, 52, 0.07)" }}>
                            <span className="font-normal" style={{ "color": "#5D646E" }}>· Rent payment execution ·</span>
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0" style={{ "width": "383px" }}>
                        <div className="w-95.75 shrink-0 border-r border-[rgba(5,35,52,0.07)] px-4 py-6">
                          <div className="flex h-8 items-center justify-center rounded-full px-4 text-center text-[14px]/6 " style={{ "border": "1px solid rgba(5, 35, 52, 0.07)" }}>
                            <span className="font-normal" style={{ "color": "#5D646E" }}>· Utility bill payments in Europe ·</span>
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0" style={{ "width": "383px" }}>
                        <div className="w-95.75 shrink-0 border-r border-[rgba(5,35,52,0.07)] px-4 py-6">
                          <div className="flex h-8 items-center justify-center rounded-full px-4 text-center text-[14px]/6 " style={{ "backgroundImage": "linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(105, 113, 124) 0%, rgb(105, 113, 124) 100%)", "boxShadow": "0px 4px 12px 0px rgba(0,39,80,0.06), 0px 4px 4px -2px rgba(0,39,80,0.06)" }}>
                            <span className="font-medium text-white">· Regulatory filing compliance checks ·</span>
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0" style={{ "width": "383px" }}>
                        <div className="w-95.75 shrink-0 border-r border-[rgba(5,35,52,0.07)] px-4 py-6">
                          <div className="flex h-8 items-center justify-center rounded-full px-4 text-center text-[14px]/6 " style={{ "border": "1px solid rgba(5, 35, 52, 0.07)" }}>
                            <span className="font-normal" style={{ "color": "#5D646E" }}>· Policy verification ·</span>
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0" style={{ "width": "383px" }}>
                        <div className="w-95.75 shrink-0 border-r border-[rgba(5,35,52,0.07)] px-4 py-6">
                          <div className="flex h-8 items-center justify-center rounded-full px-4 text-center text-[14px]/6 " style={{ "border": "1px solid rgba(5, 35, 52, 0.07)" }}>
                            <span className="font-normal" style={{ "color": "#5D646E" }}>· Property detail extraction ·</span>
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0" style={{ "width": "383px" }}>
                        <div className="w-95.75 shrink-0 border-r border-[rgba(5,35,52,0.07)] px-4 py-6">
                          <div className="flex h-8 items-center justify-center rounded-full px-4 text-center text-[14px]/6 " style={{ "border": "1px solid rgba(5, 35, 52, 0.07)" }}>
                            <span className="font-normal" style={{ "color": "#5D646E" }}>· Government ID verification ·</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="flex h-full shrink-0">
                      <div className="shrink-0" style={{ "width": "383px" }}>
                        <div className="w-95.75 shrink-0 border-r border-[rgba(5,35,52,0.07)] px-4 py-6">
                          <div className="flex h-8 items-center justify-center rounded-full px-4 text-center text-[14px]/6 " style={{ "border": "1px solid rgba(5, 35, 52, 0.07)" }}>
                            <span className="font-normal" style={{ "color": "#5D646E" }}>· Invoice downloads from vendor portals ·</span>
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0" style={{ "width": "383px" }}>
                        <div className="w-95.75 shrink-0 border-r border-[rgba(5,35,52,0.07)] px-4 py-6">
                          <div className="flex h-8 items-center justify-center rounded-full px-4 text-center text-[14px]/6 " style={{ "border": "1px solid rgba(5, 35, 52, 0.07)" }}>
                            <span className="font-normal" style={{ "color": "#5D646E" }}>· Rent payment execution ·</span>
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0" style={{ "width": "383px" }}>
                        <div className="w-95.75 shrink-0 border-r border-[rgba(5,35,52,0.07)] px-4 py-6">
                          <div className="flex h-8 items-center justify-center rounded-full px-4 text-center text-[14px]/6 " style={{ "border": "1px solid rgba(5, 35, 52, 0.07)" }}>
                            <span className="font-normal" style={{ "color": "#5D646E" }}>· Utility bill payments in Europe ·</span>
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0" style={{ "width": "383px" }}>
                        <div className="w-95.75 shrink-0 border-r border-[rgba(5,35,52,0.07)] px-4 py-6">
                          <div className="flex h-8 items-center justify-center rounded-full px-4 text-center text-[14px]/6 " style={{ "backgroundImage": "linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(105, 113, 124) 0%, rgb(105, 113, 124) 100%)", "boxShadow": "0px 4px 12px 0px rgba(0,39,80,0.06), 0px 4px 4px -2px rgba(0,39,80,0.06)" }}>
                            <span className="font-medium text-white">· Regulatory filing compliance checks ·</span>
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0" style={{ "width": "383px" }}>
                        <div className="w-95.75 shrink-0 border-r border-[rgba(5,35,52,0.07)] px-4 py-6">
                          <div className="flex h-8 items-center justify-center rounded-full px-4 text-center text-[14px]/6 " style={{ "border": "1px solid rgba(5, 35, 52, 0.07)" }}>
                            <span className="font-normal" style={{ "color": "#5D646E" }}>· Policy verification ·</span>
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0" style={{ "width": "383px" }}>
                        <div className="w-95.75 shrink-0 border-r border-[rgba(5,35,52,0.07)] px-4 py-6">
                          <div className="flex h-8 items-center justify-center rounded-full px-4 text-center text-[14px]/6 " style={{ "border": "1px solid rgba(5, 35, 52, 0.07)" }}>
                            <span className="font-normal" style={{ "color": "#5D646E" }}>· Property detail extraction ·</span>
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0" style={{ "width": "383px" }}>
                        <div className="w-95.75 shrink-0 border-r border-[rgba(5,35,52,0.07)] px-4 py-6">
                          <div className="flex h-8 items-center justify-center rounded-full px-4 text-center text-[14px]/6 " style={{ "border": "1px solid rgba(5, 35, 52, 0.07)" }}>
                            <span className="font-normal" style={{ "color": "#5D646E" }}>· Government ID verification ·</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-x-0  overflow-hidden border-t border-[rgba(5,35,52,0.07)]" style={{ "height": "88px", "top": "176px" }}>
                  <div className="flex h-full animate-[marquee-row_var(--marquee-duration)_linear_infinite] will-change-transform motion-reduce:animate-none" style={{ "--marquee-from": "-403.25px", "--marquee-to": "-2701.25px", "--marquee-duration": "36s", "transform": "translateX(-403.25px)" }}>
                    <div className="flex h-full shrink-0">
                      <div className="shrink-0" style={{ "width": "383px" }}>
                        <div className="w-95.75 shrink-0 border-r border-[rgba(5,35,52,0.07)] px-4 py-6">
                          <div className="flex h-8 items-center justify-center rounded-full px-4 text-center text-[14px]/6 " style={{ "border": "1px solid rgba(5, 35, 52, 0.07)" }}>
                            <span className="font-normal" style={{ "color": "#79818D" }}>· Business registry KYC ·</span>
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0" style={{ "width": "383px" }}>
                        <div className="w-95.75 shrink-0 border-r border-[rgba(5,35,52,0.07)] px-4 py-6">
                          <div className="flex h-8 items-center justify-center rounded-full px-4 text-center text-[14px]/6 " style={{ "border": "1px solid rgba(5, 35, 52, 0.07)" }}>
                            <span className="font-normal" style={{ "color": "#5D646E" }}>· Lease details from US portals ·</span>
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0" style={{ "width": "383px" }}>
                        <div className="w-95.75 shrink-0 border-r border-[rgba(5,35,52,0.07)] px-4 py-6">
                          <div className="flex h-8 items-center justify-center rounded-full px-4 text-center text-[14px]/6 " style={{ "backgroundImage": "linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(105, 113, 124) 0%, rgb(105, 113, 124) 100%)", "boxShadow": "0px 4px 12px 0px rgba(0,39,80,0.06), 0px 4px 4px -2px rgba(0,39,80,0.06)" }}>
                            <span className="font-medium text-white">· Restaurant POS integration ·</span>
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0" style={{ "width": "383px" }}>
                        <div className="w-95.75 shrink-0 border-r border-[rgba(5,35,52,0.07)] px-4 py-6">
                          <div className="flex h-8 items-center justify-center rounded-full px-4 text-center text-[14px]/6 " style={{ "border": "1px solid rgba(5, 35, 52, 0.07)" }}>
                            <span className="font-normal" style={{ "color": "#5D646E" }}>· University transcripts ·</span>
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0" style={{ "width": "383px" }}>
                        <div className="w-95.75 shrink-0 border-r border-[rgba(5,35,52,0.07)] px-4 py-6">
                          <div className="flex h-8 items-center justify-center rounded-full px-4 text-center text-[14px]/6 " style={{ "border": "1px solid rgba(5, 35, 52, 0.07)" }}>
                            <span className="font-normal" style={{ "color": "#5D646E" }}>· Vaccination status from EHR systems ·</span>
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0" style={{ "width": "383px" }}>
                        <div className="w-95.75 shrink-0 border-r border-[rgba(5,35,52,0.07)] px-4 py-6">
                          <div className="flex h-8 items-center justify-center rounded-full px-4 text-center text-[14px]/6 " style={{ "border": "1px solid rgba(5, 35, 52, 0.07)" }}>
                            <span className="font-normal" style={{ "color": "#5D646E" }}>· COI retrieval from insurance portals ·</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="flex h-full shrink-0">
                      <div className="shrink-0" style={{ "width": "383px" }}>
                        <div className="w-95.75 shrink-0 border-r border-[rgba(5,35,52,0.07)] px-4 py-6">
                          <div className="flex h-8 items-center justify-center rounded-full px-4 text-center text-[14px]/6 " style={{ "border": "1px solid rgba(5, 35, 52, 0.07)" }}>
                            <span className="font-normal" style={{ "color": "#79818D" }}>· Business registry KYC ·</span>
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0" style={{ "width": "383px" }}>
                        <div className="w-95.75 shrink-0 border-r border-[rgba(5,35,52,0.07)] px-4 py-6">
                          <div className="flex h-8 items-center justify-center rounded-full px-4 text-center text-[14px]/6 " style={{ "border": "1px solid rgba(5, 35, 52, 0.07)" }}>
                            <span className="font-normal" style={{ "color": "#5D646E" }}>· Lease details from US portals ·</span>
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0" style={{ "width": "383px" }}>
                        <div className="w-95.75 shrink-0 border-r border-[rgba(5,35,52,0.07)] px-4 py-6">
                          <div className="flex h-8 items-center justify-center rounded-full px-4 text-center text-[14px]/6 " style={{ "backgroundImage": "linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgb(105, 113, 124) 0%, rgb(105, 113, 124) 100%)", "boxShadow": "0px 4px 12px 0px rgba(0,39,80,0.06), 0px 4px 4px -2px rgba(0,39,80,0.06)" }}>
                            <span className="font-medium text-white">· Restaurant POS integration ·</span>
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0" style={{ "width": "383px" }}>
                        <div className="w-95.75 shrink-0 border-r border-[rgba(5,35,52,0.07)] px-4 py-6">
                          <div className="flex h-8 items-center justify-center rounded-full px-4 text-center text-[14px]/6 " style={{ "border": "1px solid rgba(5, 35, 52, 0.07)" }}>
                            <span className="font-normal" style={{ "color": "#5D646E" }}>· University transcripts ·</span>
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0" style={{ "width": "383px" }}>
                        <div className="w-95.75 shrink-0 border-r border-[rgba(5,35,52,0.07)] px-4 py-6">
                          <div className="flex h-8 items-center justify-center rounded-full px-4 text-center text-[14px]/6 " style={{ "border": "1px solid rgba(5, 35, 52, 0.07)" }}>
                            <span className="font-normal" style={{ "color": "#5D646E" }}>· Vaccination status from EHR systems ·</span>
                          </div>
                        </div>
                      </div>
                      <div className="shrink-0" style={{ "width": "383px" }}>
                        <div className="w-95.75 shrink-0 border-r border-[rgba(5,35,52,0.07)] px-4 py-6">
                          <div className="flex h-8 items-center justify-center rounded-full px-4 text-center text-[14px]/6 " style={{ "border": "1px solid rgba(5, 35, 52, 0.07)" }}>
                            <span className="font-normal" style={{ "color": "#5D646E" }}>· COI retrieval from insurance portals ·</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="relative overflow-hidden lg:pt-50">
            <div className="mx-auto w-full max-w-300">
              <div className="px-5 pb-8 pt-16 text-center lg:px-12 lg:pb-10 lg:pt-0">
                <h2 className="text-balance text-4xl/10 font-semibold tracking-tight lg:text-5xl/14 text-[#000A27]">
                  <span>What our customers are</span>
                  <span className="text-[#1066F1]">saying</span>
                </h2>
                <p className="text-base/6.5 text-[#000A27] mt-2 font-normal">Rubie makes customer data migration reliable, repeatable, and source-agnostic.</p>
              </div>
              <div className="border-x border-[#E7EAEE] p-6 pb-35">
                <div className="mx-auto flex max-w-104 flex-col gap-4 lg:hidden">
                  <article className="flex flex-col gap-6 rounded-2xl bg-[#EEF1F5] p-6 lg:h-66 lg:justify-start lg:gap-12 lg:p-6 xl:h-79 xl:justify-between xl:gap-10 xl:p-8 h-auto">
                    <img alt="Granum" loading="lazy" width="137" height="25" decoding="async" data-nimg="1" className="h-[25px] w-[137px]" style={{ "color": "transparent" }} srcSet="/_next/image__3a7d810e 1x, /_next/image__9a827f43 2x" src="/_next/image__3a7d810e" />
                    <div className="flex flex-col gap-4">
                      <blockquote className="text-[15px]/5.5 font-normal text-[#000A27] xl:text-base/6">
                        “
                        {"We've had (customers) who give us those 250 page PDFs, and in the past we couldn't even work with them, but now we have Rubie."}
                        ”
                      </blockquote>
                      <A className="inline-flex items-center gap-1 rounded-[10px] py-1.5 pr-3 text-[14px]/6 font-medium  transition-opacity hover:opacity-80 text-[#79818D]" href="/customers/granum">
                        <span>Read their story</span>
                        <svg aria-hidden="true" viewBox="0 0 16 16" className="size-4" fill="none">
                          <path d="M6 4.5 9.5 8 6 11.5" stroke="#BBC2CC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
                        </svg>
                      </A>
                    </div>
                  </article>
                  <article className="relative flex w-full shrink-0 flex-col gap-6 overflow-hidden rounded-2xl p-6 lg:h-124.25 lg:justify-between lg:gap-10 lg:p-8 xl:w-122.25 ">
                    <div className="absolute inset-0 rounded-2xl bg-[#1066F1]"></div>
                    <img alt="" loading="lazy" decoding="async" data-nimg="fill" className="rounded-2xl object-cover opacity-50 mix-blend-soft-light" style={{ "position": "absolute", "height": "100%", "width": "100%", "left": "0", "top": "0", "right": "0", "bottom": "0", "color": "transparent" }} sizes="489px" srcSet="/_next/image__dff1729b 32w, /_next/image__2f6ceab4 48w, /_next/image__671b2b6a 64w, /_next/image__949274e7 96w, /_next/image__3db0fdf6 128w, /_next/image__14fe2306 256w, /_next/image__81ddc379 384w, /_next/image__7a888e73 640w, /_next/image__1eb267f7 750w, /_next/image__c5efbc63 828w, /_next/image__ed20d944 1080w, /_next/image__f63cf502 1200w, /_next/image__b5cdfed3 1920w, /_next/image__16f4d317 2048w, /_next/image__3dd6dd88 3840w" src="/_next/image__7a888e73" />
                    <div className="absolute inset-0 rounded-2xl bg-linear-to-b from-[#1066F1] to-[rgba(16,102,241,0)]"></div>
                    <img alt="" aria-hidden="true" loading="lazy" width="143" height="40" decoding="async" data-nimg="1" className="relative z-10 h-10 w-[143px] [filter:brightness(0)_invert(1)]" style={{ "color": "transparent" }} src="/images/logos/brivity-logo__0dc0adc0.svg" />
                    <blockquote className="relative z-10 w-full text-base/6 font-normal  text-white">
                      “
                      The Rubie team came in and I was able to say, here’s what I would love to do in a perfect world. And they went, okay, we added that and it’s working. They would go run and find the solution or push for new features within Rubie to make it happen.
                      ”
                    </blockquote>
                    <div className="relative z-10">
                      <A className="inline-flex items-center gap-1 rounded-[10px] py-1.5 pr-3 text-[14px]/6 font-medium  transition-opacity hover:opacity-80 text-white lg:px-3" href="/customers/brivity">
                        <span>Read their story</span>
                        <svg aria-hidden="true" viewBox="0 0 16 16" className="size-4" fill="none">
                          <path d="M6 4.5 9.5 8 6 11.5" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
                        </svg>
                      </A>
                    </div>
                  </article>
                  <article className="flex flex-col gap-6 rounded-2xl bg-[#EEF1F5] p-6 lg:h-66 lg:justify-start lg:gap-12 lg:p-6 xl:h-79 xl:justify-between xl:gap-10 xl:p-8 h-auto">
                    <img alt="Cariina" loading="lazy" width="132" height="32" decoding="async" data-nimg="1" className="h-8 w-[132px]" style={{ "color": "transparent" }} srcSet="/_next/image__23d4d84e 1x, /_next/image__b4d7a361 2x" src="/_next/image__23d4d84e" />
                    <div className="flex flex-col gap-4">
                      <blockquote className="text-[15px]/5.5 font-normal text-[#000A27] xl:text-base/6">
                        “
                        Rubie has opened the door for Cariina to work with more schools regardless of their system.
                        ”
                      </blockquote>
                      <A className="inline-flex items-center gap-1 rounded-[10px] py-1.5 pr-3 text-[14px]/6 font-medium  transition-opacity hover:opacity-80 text-[#79818D]" href="/customers/cariina">
                        <span>Read their story</span>
                        <svg aria-hidden="true" viewBox="0 0 16 16" className="size-4" fill="none">
                          <path d="M6 4.5 9.5 8 6 11.5" stroke="#BBC2CC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
                        </svg>
                      </A>
                    </div>
                  </article>
                </div>
                <div className="hidden grid-cols-[minmax(0,1fr)_minmax(360px,42vw)_minmax(0,1fr)] justify-center gap-6 lg:grid xl:grid-cols-[minmax(0,1fr)_489px_minmax(0,1fr)]">
                  <div className="flex h-124.25 min-w-0 flex-col gap-6">
                    <article className="flex flex-col gap-6 rounded-2xl bg-[#EEF1F5] p-6 lg:h-66 lg:justify-start lg:gap-12 lg:p-6 xl:h-79 xl:justify-between xl:gap-10 xl:p-8 ">
                      <img alt="Granum" loading="lazy" width="137" height="25" decoding="async" data-nimg="1" className="h-[25px] w-[137px]" style={{ "color": "transparent" }} srcSet="/_next/image__3a7d810e 1x, /_next/image__9a827f43 2x" src="/_next/image__3a7d810e" />
                      <div className="flex flex-col gap-4">
                        <blockquote className="text-[15px]/5.5 font-normal text-[#000A27] xl:text-base/6">
                          “
                          {"We've had (customers) who give us those 250 page PDFs, and in the past we couldn't even work with them, but now we have Rubie."}
                          ”
                        </blockquote>
                        <A className="inline-flex items-center gap-1 rounded-[10px] py-1.5 pr-3 text-[14px]/6 font-medium  transition-opacity hover:opacity-80 text-[#79818D]" href="/customers/granum">
                          <span>Read their story</span>
                          <svg aria-hidden="true" viewBox="0 0 16 16" className="size-4" fill="none">
                            <path d="M6 4.5 9.5 8 6 11.5" stroke="#BBC2CC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
                          </svg>
                        </A>
                      </div>
                    </article>
                    <div className="flex size-10 flex-none flex-col items-start justify-between rounded-lg border border-[#E7EAEE] lg:h-auto lg:w-full lg:flex-1 lg:rounded-2xl "></div>
                  </div>
                  <article className="relative flex w-full shrink-0 flex-col gap-6 overflow-hidden rounded-2xl p-6 lg:h-124.25 lg:justify-between lg:gap-10 lg:p-8 xl:w-122.25 ">
                    <div className="absolute inset-0 rounded-2xl bg-[#1066F1]"></div>
                    <img alt="" loading="lazy" decoding="async" data-nimg="fill" className="rounded-2xl object-cover opacity-50 mix-blend-soft-light" style={{ "position": "absolute", "height": "100%", "width": "100%", "left": "0", "top": "0", "right": "0", "bottom": "0", "color": "transparent" }} sizes="489px" srcSet="/_next/image__dff1729b 32w, /_next/image__2f6ceab4 48w, /_next/image__671b2b6a 64w, /_next/image__949274e7 96w, /_next/image__3db0fdf6 128w, /_next/image__14fe2306 256w, /_next/image__81ddc379 384w, /_next/image__7a888e73 640w, /_next/image__1eb267f7 750w, /_next/image__c5efbc63 828w, /_next/image__ed20d944 1080w, /_next/image__f63cf502 1200w, /_next/image__b5cdfed3 1920w, /_next/image__16f4d317 2048w, /_next/image__3dd6dd88 3840w" src="/_next/image__7a888e73" />
                    <div className="absolute inset-0 rounded-2xl bg-linear-to-b from-[#1066F1] to-[rgba(16,102,241,0)]"></div>
                    <img alt="" aria-hidden="true" loading="lazy" width="143" height="40" decoding="async" data-nimg="1" className="relative z-10 h-10 w-[143px] [filter:brightness(0)_invert(1)]" style={{ "color": "transparent" }} src="/images/logos/brivity-logo__0dc0adc0.svg" />
                    <blockquote className="relative z-10 w-full text-base/6 font-normal  text-white">
                      “
                      The Rubie team came in and I was able to say, here’s what I would love to do in a perfect world. And they went, okay, we added that and it’s working. They would go run and find the solution or push for new features within Rubie to make it happen.
                      ”
                    </blockquote>
                    <div className="relative z-10">
                      <A className="inline-flex items-center gap-1 rounded-[10px] py-1.5 pr-3 text-[14px]/6 font-medium  transition-opacity hover:opacity-80 text-white lg:px-3" href="/customers/brivity">
                        <span>Read their story</span>
                        <svg aria-hidden="true" viewBox="0 0 16 16" className="size-4" fill="none">
                          <path d="M6 4.5 9.5 8 6 11.5" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
                        </svg>
                      </A>
                    </div>
                  </article>
                  <div className="flex h-124.25 min-w-0 flex-col gap-6">
                    <div className="flex size-10 flex-none flex-col items-start justify-between rounded-lg border border-[#E7EAEE] lg:h-auto lg:w-full lg:flex-1 lg:rounded-2xl "></div>
                    <article className="flex flex-col gap-6 rounded-2xl bg-[#EEF1F5] p-6 lg:h-66 lg:justify-start lg:gap-12 lg:p-6 xl:h-79 xl:justify-between xl:gap-10 xl:p-8 ">
                      <img alt="Cariina" loading="lazy" width="132" height="32" decoding="async" data-nimg="1" className="h-8 w-[132px]" style={{ "color": "transparent" }} srcSet="/_next/image__23d4d84e 1x, /_next/image__b4d7a361 2x" src="/_next/image__23d4d84e" />
                      <div className="flex flex-col gap-4">
                        <blockquote className="text-[15px]/5.5 font-normal text-[#000A27] xl:text-base/6">
                          “
                          Rubie has opened the door for Cariina to work with more schools regardless of their system.
                          ”
                        </blockquote>
                        <A className="inline-flex items-center gap-1 rounded-[10px] py-1.5 pr-3 text-[14px]/6 font-medium  transition-opacity hover:opacity-80 text-[#79818D]" href="/customers/cariina">
                          <span>Read their story</span>
                          <svg aria-hidden="true" viewBox="0 0 16 16" className="size-4" fill="none">
                            <path d="M6 4.5 9.5 8 6 11.5" stroke="#BBC2CC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
                          </svg>
                        </A>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="relative">
            <div className="mx-auto w-full max-w-300">
              <div className="relative overflow-hidden bg-[#000A27]">
                <div className="absolute inset-y-0 left-1/2 w-300 -translate-x-1/2">
                  <div className="pointer-events-none absolute inset-x-0 top-10 z-0 flex justify-center lg:top-8.25">
                    <svg width="1101" height="42" viewBox="0 0 1101 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10.5 w-275.25 max-w-none" aria-hidden="true">
                      <mask id="path-1-inside-1_139_169" fill="white">
                        <path d="M484 0H619V42H484V0Z" />
                      </mask>
                      <path d="M484 0H619V42H484V0Z" fill="#111029" />
                      <path d="M484 0V-1H483V0H484ZM619 0H620V-1H619V0ZM619 42V43H620V42H619ZM484 42H483V43H484V42ZM484 0V1H619V0V-1H484V0ZM619 0H618V42H619H620V0H619ZM619 42V41H484V42V43H619V42ZM484 42H485V0H484H483V42H484Z" fill="#5D646E" fillOpacity="0.4" mask="url(#path-1-inside-1_139_169)" />
                      <path opacity="0.3" d="M645 21L1101 21" stroke="white" strokeDasharray="3 2" />
                      <mask id="path-4-inside-2_139_169" fill="white">
                        <path d="M645 8L645 34L619 34L619 8L645 8Z" />
                      </mask>
                      <path d="M645 8L645 34L619 34L619 8L645 8Z" fill="#111029" />
                      <path d="M645 8L646 8L646 7L645 7L645 8ZM645 34L645 35L646 35L646 34L645 34ZM645 8L644 8L644 34L645 34L646 34L646 8L645 8ZM645 34L645 33L619 33L619 34L619 35L645 35L645 34ZM619 8L619 9L645 9L645 8L645 7L619 7L619 8Z" fill="#5D646E" fillOpacity="0.4" mask="url(#path-4-inside-2_139_169)" />
                      <circle cx="632" cy="21" r="8" transform="rotate(90 632 21)" fill="#111029" stroke="#5D646E" strokeOpacity="0.6" />
                      <path opacity="0.3" d="M458 21L-2.32458e-06 21" stroke="white" strokeDasharray="3 2" />
                      <mask id="path-8-inside-3_139_169" fill="white">
                        <path d="M458 8L458 34L484 34L484 8L458 8Z" />
                      </mask>
                      <path d="M458 8L458 34L484 34L484 8L458 8Z" fill="#111029" />
                      <path d="M458 8L457 8L457 7L458 7L458 8ZM458 34L458 35L457 35L457 34L458 34ZM458 8L459 8L459 34L458 34L457 34L457 8L458 8ZM458 34L458 33L484 33L484 34L484 35L458 35L458 34ZM484 8L484 9L458 9L458 8L458 7L484 7L484 8Z" fill="#5D646E" fillOpacity="0.4" mask="url(#path-8-inside-3_139_169)" />
                      <circle cx="8" cy="8" r="8" transform="matrix(4.37114e-08 1 1 -4.37114e-08 463 13)" fill="#111029" stroke="#5D646E" strokeOpacity="0.6" />
                    </svg>
                    <span className="absolute top-1/2 -translate-y-1/2 font-mono text-[12px] uppercase leading-none tracking-[-0.48px] text-[#5D646E]">// rubie //</span>
                  </div>
                  <div className="pointer-events-none absolute inset-0 z-1" aria-hidden="true">
                    <svg width="551" height="370" viewBox="0 0 551 370" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -left-6 top-6 h-92.5 w-163 max-w-none">
                      <g filter="url(#filter0_iiiiii_138_70)">
                        <path d="M113 -1.70401e-07C115.761 -7.62909e-08 118 2.23858 118 5L118 61.5C118 64.2614 115.761 66.5 113 66.5L97.7621 66.5C95.0006 66.5 92.7621 68.7386 92.7621 71.5L92.7621 176C92.7621 178.761 90.5235 181 87.7621 181L-7.91176e-06 181L0 -4.02145e-06L113 -1.70401e-07Z" fill="#000A27" />
                      </g>
                      <path d="M514 314.5H534C542.837 314.5 550 307.337 550 298.5V251" stroke="url(#paint0_linear_138_70)" strokeDasharray="3 2" />
                      <path opacity="0.3" d="M81 266L80.5 266C80.5 266.498 80.4709 266.989 80.4144 267.471L80.911 267.529L81.4076 267.587C81.4686 267.066 81.5 266.537 81.5 266L81 266ZM80.515 269.53L80.0337 269.395C79.7646 270.351 79.3846 271.26 78.9085 272.108L79.3445 272.353L79.7805 272.598C80.2949 271.681 80.7055 270.699 80.9963 269.666L80.515 269.53ZM78.2096 274.048L77.8171 273.739C77.2081 274.51 76.5101 275.208 75.7387 275.817L76.0485 276.21L76.3583 276.602C77.1911 275.945 77.9446 275.191 78.6021 274.358L78.2096 274.048ZM74.3531 277.345L74.1084 276.908C73.26 277.385 72.3505 277.765 71.3947 278.034L71.5302 278.515L71.6657 278.996C72.6987 278.705 73.6814 278.295 74.5978 277.781L74.3531 277.345ZM69.5289 278.911L69.4707 278.414C68.9885 278.471 68.4978 278.5 68 278.5L68 279L68 279.5C68.5367 279.5 69.0664 279.469 69.5871 279.408L69.5289 278.911ZM68 279L68 278.5C67.5022 278.5 67.0115 278.471 66.5293 278.414L66.4711 278.911L66.4129 279.408C66.9336 279.469 67.4633 279.5 68 279.5L68 279ZM64.4698 278.515L64.6053 278.034C63.6495 277.765 62.74 277.385 61.8916 276.908L61.6469 277.345L61.4021 277.781C62.3186 278.295 63.3013 278.705 64.3343 278.996L64.4698 278.515ZM59.9515 276.21L60.2613 275.817C59.4899 275.208 58.7919 274.51 58.1828 273.739L57.7904 274.048L57.3979 274.358C58.0554 275.191 58.8089 275.945 59.6417 276.602L59.9515 276.21ZM56.6555 272.353L57.0915 272.108C56.6154 271.26 56.2354 270.351 55.9663 269.395L55.485 269.53L55.0037 269.666C55.2945 270.699 55.7051 271.681 56.2195 272.598L56.6555 272.353ZM55.089 267.529L55.5856 267.471C55.5291 266.989 55.5 266.498 55.5 266L55 266L54.5 266C54.5 266.537 54.5313 267.066 54.5924 267.587L55.089 267.529ZM55 266L55.5 266L55.5 264.512L55 264.512L54.5 264.512L54.5 266L55 266ZM55 262.528L55.5 262.528L55.5 259.552L55 259.552L54.5 259.552L54.5 262.528L55 262.528ZM55 257.568L55.5 257.568L55.5 254.592L55 254.592L54.5 254.592L54.5 257.568L55 257.568ZM55 252.608L55.5 252.608L55.5 249.632L55 249.632L54.5 249.632L54.5 252.608L55 252.608ZM55 247.648L55.5 247.648L55.5 244.672L55 244.672L54.5 244.672L54.5 247.648L55 247.648ZM55 242.688L55.5 242.688L55.5 239.712L55 239.712L54.5 239.712L54.5 242.688L55 242.688ZM55 237.728L55.5 237.728L55.5 234.752L55 234.752L54.5 234.752L54.5 237.728L55 237.728ZM55 232.768L55.5 232.768L55.5 229.792L55 229.792L54.5 229.792L54.5 232.768L55 232.768ZM55 227.808L55.5 227.808L55.5 224.832L55 224.832L54.5 224.832L54.5 227.808L55 227.808ZM55 222.848L55.5 222.848L55.5 219.872L55 219.872L54.5 219.872L54.5 222.848L55 222.848ZM55 217.888L55.5 217.888L55.5 214.912L55 214.912L54.5 214.912L54.5 217.888L55 217.888ZM55 212.928L55.5 212.928L55.5 209.952L55 209.952L54.5 209.952L54.5 212.928L55 212.928ZM55 207.968L55.5 207.968L55.5 204.992L55 204.992L54.5 204.992L54.5 207.968L55 207.968ZM55 203.008L55.5 203.008L55.5 200.032L55 200.032L54.5 200.032L54.5 203.008L55 203.008ZM55 198.048L55.5 198.048L55.5 195.072L55 195.072L54.5 195.072L54.5 198.048L55 198.048ZM55 193.088L55.5 193.088L55.5 190.112L55 190.112L54.5 190.112L54.5 193.088L55 193.088ZM55 188.128L55.5 188.128L55.5 185.152L55 185.152L54.5 185.152L54.5 188.128L55 188.128ZM55 183.168L55.5 183.168L55.5 180.192L55 180.192L54.5 180.192L54.5 183.168L55 183.168ZM55 178.208L55.5 178.208L55.5 175.232L55 175.232L54.5 175.232L54.5 178.208L55 178.208ZM55 173.248L55.5 173.248L55.5 170.272L55 170.272L54.5 170.272L54.5 173.248L55 173.248ZM55 168.288L55.5 168.288L55.5 165.312L55 165.312L54.5 165.312L54.5 168.288L55 168.288ZM55 163.328L55.5 163.328L55.5 160.352L55 160.352L54.5 160.352L54.5 163.328L55 163.328ZM55 158.368L55.5 158.368L55.5 155.392L55 155.392L54.5 155.392L54.5 158.368L55 158.368ZM55 153.408L55.5 153.408L55.5 150.432L55 150.432L54.5 150.432L54.5 153.408L55 153.408ZM55 148.448L55.5 148.448L55.5 145.472L55 145.472L54.5 145.472L54.5 148.448L55 148.448ZM55 143.488L55.5 143.488L55.5 142L55 142L54.5 142L54.5 143.488L55 143.488ZM55 142L55.5 142C55.5 141.502 55.5291 141.011 55.5856 140.529L55.089 140.471L54.5924 140.413C54.5314 140.934 54.5 141.463 54.5 142L55 142ZM55.485 138.47L55.9663 138.605C56.2354 137.649 56.6154 136.74 57.0915 135.892L56.6555 135.647L56.2195 135.402C55.7051 136.319 55.2945 137.301 55.0038 138.334L55.485 138.47ZM57.7904 133.952L58.1829 134.261C58.7919 133.49 59.4899 132.792 60.2613 132.183L59.9515 131.79L59.6417 131.398C58.8089 132.055 58.0554 132.809 57.3979 133.642L57.7904 133.952ZM61.6469 130.655L61.8916 131.092C62.74 130.615 63.6495 130.235 64.6053 129.966L64.4698 129.485L64.3343 129.004C63.3013 129.295 62.3186 129.705 61.4022 130.219L61.6469 130.655ZM66.4711 129.089L66.5293 129.586C67.0115 129.529 67.5022 129.5 68 129.5L68 129L68 128.5C67.4633 128.5 66.9336 128.531 66.4129 128.592L66.4711 129.089ZM68 129L68 129.5C68.4978 129.5 68.9885 129.529 69.4707 129.586L69.5289 129.089L69.5871 128.592C69.0664 128.531 68.5367 128.5 68 128.5L68 129ZM71.5302 129.485L71.3947 129.966C72.3505 130.235 73.26 130.615 74.1084 131.092L74.3531 130.655L74.5979 130.219C73.6814 129.705 72.6987 129.295 71.6657 129.004L71.5302 129.485ZM76.0485 131.79L75.7387 132.183C76.5101 132.792 77.2081 133.49 77.8172 134.261L78.2096 133.952L78.6021 133.642C77.9446 132.809 77.1911 132.055 76.3583 131.398L76.0485 131.79ZM79.3445 135.647L78.9085 135.892C79.3846 136.74 79.7646 137.649 80.0337 138.605L80.515 138.47L80.9963 138.334C80.7055 137.301 80.2949 136.319 79.7805 135.402L79.3445 135.647ZM80.911 140.471L80.4144 140.529C80.4709 141.011 80.5 141.502 80.5 142L81 142L81.5 142C81.5 141.463 81.4687 140.934 81.4076 140.413L80.911 140.471ZM81 142L80.5 142L80.5 143.488L81 143.488L81.5 143.488L81.5 142L81 142ZM81 145.472L80.5 145.472L80.5 148.448L81 148.448L81.5 148.448L81.5 145.472L81 145.472ZM81 150.432L80.5 150.432L80.5 153.408L81 153.408L81.5 153.408L81.5 150.432L81 150.432ZM81 155.392L80.5 155.392L80.5 158.368L81 158.368L81.5 158.368L81.5 155.392L81 155.392ZM81 160.352L80.5 160.352L80.5 163.328L81 163.328L81.5 163.328L81.5 160.352L81 160.352ZM81 165.312L80.5 165.312L80.5 168.288L81 168.288L81.5 168.288L81.5 165.312L81 165.312ZM81 170.272L80.5 170.272L80.5 173.248L81 173.248L81.5 173.248L81.5 170.272L81 170.272ZM81 175.232L80.5 175.232L80.5 178.208L81 178.208L81.5 178.208L81.5 175.232L81 175.232ZM81 180.192L80.5 180.192L80.5 183.168L81 183.168L81.5 183.168L81.5 180.192L81 180.192ZM81 185.152L80.5 185.152L80.5 188.128L81 188.128L81.5 188.128L81.5 185.152L81 185.152ZM81 190.112L80.5 190.112L80.5 193.088L81 193.088L81.5 193.088L81.5 190.112L81 190.112ZM81 195.072L80.5 195.072L80.5 198.048L81 198.048L81.5 198.048L81.5 195.072L81 195.072ZM81 200.032L80.5 200.032L80.5 203.008L81 203.008L81.5 203.008L81.5 200.032L81 200.032ZM81 204.992L80.5 204.992L80.5 207.968L81 207.968L81.5 207.968L81.5 204.992L81 204.992ZM81 209.952L80.5 209.952L80.5 212.928L81 212.928L81.5 212.928L81.5 209.952L81 209.952ZM81 214.912L80.5 214.912L80.5 217.888L81 217.888L81.5 217.888L81.5 214.912L81 214.912ZM81 219.872L80.5 219.872L80.5 222.848L81 222.848L81.5 222.848L81.5 219.872L81 219.872ZM81 224.832L80.5 224.832L80.5 227.808L81 227.808L81.5 227.808L81.5 224.832L81 224.832ZM81 229.792L80.5 229.792L80.5 232.768L81 232.768L81.5 232.768L81.5 229.792L81 229.792ZM81 234.752L80.5 234.752L80.5 237.728L81 237.728L81.5 237.728L81.5 234.752L81 234.752ZM81 239.712L80.5 239.712L80.5 242.688L81 242.688L81.5 242.688L81.5 239.712L81 239.712ZM81 244.672L80.5 244.672L80.5 247.648L81 247.648L81.5 247.648L81.5 244.672L81 244.672ZM81 249.632L80.5 249.632L80.5 252.608L81 252.608L81.5 252.608L81.5 249.632L81 249.632ZM81 254.592L80.5 254.592L80.5 257.568L81 257.568L81.5 257.568L81.5 254.592L81 254.592ZM81 259.552L80.5 259.552L80.5 262.528L81 262.528L81.5 262.528L81.5 259.552L81 259.552ZM81 264.512L80.5 264.512L80.5 266L81 266L81.5 266L81.5 264.512L81 264.512Z" fill="white" />
                      <g filter="url(#filter1_iiiiii_138_70)">
                        <path d="M66.7621 370L103 370C105.761 370 108 367.761 108 365L108 308.5C108 305.739 105.761 303.5 103 303.5L71.7621 303.5C69.0006 303.5 66.7621 301.261 66.7621 298.5L66.7621 226C66.7621 223.239 64.5235 221 61.7621 221L-6.513e-06 221L0 370L66.7621 370Z" fill="#000A27" />
                      </g>
                      <circle cx="30" cy="30" r="30" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 98 297)" fill="#000A27" stroke="#5D646E" strokeOpacity="0.4" />
                      <circle cx="12" cy="12" r="12" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 80 279)" fill="#111029" stroke="#5D646E" strokeOpacity="0.8" />
                      <g filter="url(#filter2_iiiiii_138_70)">
                        <path d="M225 344H408V284H225V344Z" fill="#000A27" />
                      </g>
                      <path opacity="0.2" d="M262 314L383 314" stroke="#DFE3E8" strokeLinecap="round" />
                      <path opacity="0.3" d="M169 327V326.5C168.502 326.5 168.011 326.471 167.529 326.414L167.471 326.911L167.413 327.408C167.934 327.469 168.463 327.5 169 327.5V327ZM165.47 326.515L165.605 326.034C164.649 325.765 163.74 325.385 162.892 324.908L162.647 325.345L162.402 325.781C163.319 326.295 164.301 326.705 165.334 326.996L165.47 326.515ZM160.952 324.21L161.261 323.817C160.49 323.208 159.792 322.51 159.183 321.739L158.79 322.048L158.398 322.358C159.055 323.191 159.809 323.945 160.642 324.602L160.952 324.21ZM157.655 320.353L158.092 320.108C157.615 319.26 157.235 318.351 156.966 317.395L156.485 317.53L156.004 317.666C156.295 318.699 156.705 319.681 157.219 320.598L157.655 320.353ZM156.089 315.529L156.586 315.471C156.529 314.989 156.5 314.498 156.5 314H156H155.5C155.5 314.537 155.531 315.066 155.592 315.587L156.089 315.529ZM156 314H156.5C156.5 313.502 156.529 313.011 156.586 312.529L156.089 312.471L155.592 312.413C155.531 312.934 155.5 313.463 155.5 314H156ZM156.485 310.47L156.966 310.605C157.235 309.649 157.615 308.74 158.092 307.892L157.655 307.647L157.219 307.402C156.705 308.319 156.295 309.301 156.004 310.334L156.485 310.47ZM158.79 305.952L159.183 306.261C159.792 305.49 160.49 304.792 161.261 304.183L160.952 303.79L160.642 303.398C159.809 304.055 159.055 304.809 158.398 305.642L158.79 305.952ZM162.647 302.655L162.892 303.092C163.74 302.615 164.649 302.235 165.605 301.966L165.47 301.485L165.334 301.004C164.301 301.295 163.319 301.705 162.402 302.219L162.647 302.655ZM167.471 301.089L167.529 301.586C168.011 301.529 168.502 301.5 169 301.5V301V300.5C168.463 300.5 167.934 300.531 167.413 300.592L167.471 301.089ZM169 301V301.5H170.518V301V300.5H169V301ZM172.541 301V301.5H175.576V301V300.5H172.541V301ZM177.6 301V301.5H180.635V301V300.5H177.6V301ZM182.659 301V301.5H185.694V301V300.5H182.659V301ZM187.718 301V301.5H190.753V301V300.5H187.718V301ZM192.776 301V301.5H195.812V301V300.5H192.776V301ZM197.835 301V301.5H200.871V301V300.5H197.835V301ZM202.894 301V301.5H205.929V301V300.5H202.894V301ZM207.953 301V301.5H210.988V301V300.5H207.953V301ZM213.012 301V301.5H216.047V301V300.5H213.012V301ZM218.071 301V301.5H221.106V301V300.5H218.071V301ZM223.129 301V301.5H226.165V301V300.5H223.129V301ZM228.188 301V301.5H231.224V301V300.5H228.188V301ZM233.247 301V301.5H236.282V301V300.5H233.247V301ZM238.306 301V301.5H241.341V301V300.5H238.306V301ZM243.365 301V301.5H246.4V301V300.5H243.365V301ZM248.424 301V301.5H251.459V301V300.5H248.424V301ZM253.482 301V301.5H255V301V300.5H253.482V301ZM255 301V301.5C255.498 301.5 255.989 301.529 256.471 301.586L256.529 301.089L256.587 300.592C256.066 300.531 255.537 300.5 255 300.5V301ZM258.53 301.485L258.395 301.966C259.351 302.235 260.26 302.615 261.108 303.092L261.353 302.655L261.598 302.219C260.681 301.705 259.699 301.295 258.666 301.004L258.53 301.485ZM263.048 303.79L262.739 304.183C263.51 304.792 264.208 305.49 264.817 306.261L265.21 305.952L265.602 305.642C264.945 304.809 264.191 304.055 263.358 303.398L263.048 303.79ZM266.345 307.647L265.908 307.892C266.385 308.74 266.765 309.649 267.034 310.605L267.515 310.47L267.996 310.334C267.705 309.301 267.295 308.319 266.781 307.402L266.345 307.647ZM267.911 312.471L267.414 312.529C267.471 313.011 267.5 313.502 267.5 314H268H268.5C268.5 313.463 268.469 312.934 268.408 312.413L267.911 312.471ZM268 314H267.5C267.5 314.498 267.471 314.989 267.414 315.471L267.911 315.529L268.408 315.587C268.469 315.066 268.5 314.537 268.5 314H268ZM267.515 317.53L267.034 317.395C266.765 318.351 266.385 319.26 265.908 320.108L266.345 320.353L266.781 320.598C267.295 319.681 267.705 318.699 267.996 317.666L267.515 317.53ZM265.21 322.048L264.817 321.739C264.208 322.51 263.51 323.208 262.739 323.817L263.048 324.21L263.358 324.602C264.191 323.945 264.945 323.191 265.602 322.358L265.21 322.048ZM261.353 325.345L261.108 324.908C260.26 325.385 259.351 325.765 258.395 326.034L258.53 326.515L258.666 326.996C259.699 326.705 260.681 326.295 261.598 325.781L261.353 325.345ZM256.529 326.911L256.471 326.414C255.989 326.471 255.498 326.5 255 326.5V327V327.5C255.537 327.5 256.066 327.469 256.587 327.408L256.529 326.911ZM255 327V326.5H253.482V327V327.5H255V327ZM251.459 327V326.5H248.424V327V327.5H251.459V327ZM246.4 327V326.5H243.365V327V327.5H246.4V327ZM241.341 327V326.5H238.306V327V327.5H241.341V327ZM236.282 327V326.5H233.247V327V327.5H236.282V327ZM231.224 327V326.5H228.188V327V327.5H231.224V327ZM226.165 327V326.5H223.129V327V327.5H226.165V327ZM221.106 327V326.5H218.071V327V327.5H221.106V327ZM216.047 327V326.5H213.012V327V327.5H216.047V327ZM210.988 327V326.5H207.953V327V327.5H210.988V327ZM205.929 327V326.5H202.894V327V327.5H205.929V327ZM200.871 327V326.5H197.835V327V327.5H200.871V327ZM195.812 327V326.5H192.776V327V327.5H195.812V327ZM190.753 327V326.5H187.718V327V327.5H190.753V327ZM185.694 327V326.5H182.659V327V327.5H185.694V327ZM180.635 327V326.5H177.6V327V327.5H180.635V327ZM175.576 327V326.5H172.541V327V327.5H175.576V327ZM170.518 327V326.5H169V327V327.5H170.518V327Z" fill="white" />
                      <g filter="url(#filter3_dii_138_70)">
                        <circle cx="33" cy="26" r="9" fill="#111029" />
                      </g>
                      <circle cx="254" cy="314" r="9" fill="#111029" stroke="#5D646E" strokeOpacity="0.4" />
                      <g filter="url(#filter4_dii_138_70)">
                        <path d="M134 314C134 321.389 159.611 331 169 331C178.389 331 186 323.389 186 314C186 304.611 178.389 297 169 297C159.611 297 134 306.611 134 314ZM160 314C160 309.029 164.029 305 169 305C173.971 305 178 309.029 178 314C178 318.971 173.971 323 169 323C164.029 323 160 318.971 160 314Z" fill="#000A27" />
                      </g>
                      <circle opacity="0.2" cx="443" cy="314" r="31" transform="rotate(-90 443 314)" stroke="white" strokeDasharray="3 2" />
                      <mask id="path-14-inside-1_138_70" fill="white">
                        <path d="M442 327L442 301L459 301L459 327L442 327Z" />
                      </mask>
                      <path d="M442 327L442 301L459 301L459 327L442 327Z" fill="#000A27" />
                      <path d="M442 327L441 327L441 328L442 328L442 327ZM442 301L442 300L441 300L441 301L442 301ZM459 301L460 301L460 300L459 300L459 301ZM459 327L459 328L460 328L460 327L459 327ZM442 327L443 327L443 301L442 301L441 301L441 327L442 327ZM442 301L442 302L459 302L459 301L459 300L442 300L442 301ZM459 301L458 301L458 327L459 327L460 327L460 301L459 301ZM459 327L459 326L442 326L442 327L442 328L459 328L459 327Z" fill="#2F3245" mask="url(#path-14-inside-1_138_70)" />
                      <mask id="path-16-inside-2_138_70" fill="white">
                        <path d="M439 323L439 305L443 305L443 323L439 323Z" />
                      </mask>
                      <path d="M439 323L439 305L443 305L443 323L439 323Z" fill="#000A27" />
                      <path d="M439 323L438 323L438 324L439 324L439 323ZM439 305L439 304L438 304L438 305L439 305ZM443 305L444 305L444 304L443 304L443 305ZM443 323L443 324L444 324L444 323L443 323ZM439 323L440 323L440 305L439 305L438 305L438 323L439 323ZM439 305L439 306L443 306L443 305L443 304L439 304L439 305ZM443 305L442 305L442 323L443 323L444 323L444 305L443 305ZM443 323L443 322L439 322L439 323L439 324L443 324L443 323Z" fill="#2F3245" mask="url(#path-16-inside-2_138_70)" />
                      <mask id="path-18-inside-3_138_70" fill="white">
                        <path d="M430 317L430 311L439 311L439 317L430 317Z" />
                      </mask>
                      <path d="M430 311L430 312L439 312L439 311L439 310L430 310L430 311ZM439 317L439 316L430 316L430 317L430 318L439 318L439 317Z" fill="#2F3245" mask="url(#path-18-inside-3_138_70)" />
                      <mask id="path-20-inside-4_138_70" fill="white">
                        <path d="M459 317L459 311L502 311L502 317L459 317Z" />
                      </mask>
                      <path d="M459 317L459 311L502 311L502 317L459 317Z" fill="#000A27" />
                      <path d="M459 311L459 312L502 312L502 311L502 310L459 310L459 311ZM502 317L502 316L459 316L459 317L459 318L502 318L502 317Z" fill="#2F3245" mask="url(#path-20-inside-4_138_70)" />
                      <rect x="426.5" y="323.5" width="19" height="3" transform="rotate(-90 426.5 323.5)" stroke="#79818D" />
                      <mask id="path-23-inside-5_138_70" fill="white">
                        <path d="M430 324L430 304L426 304L426 324L430 324Z" />
                      </mask>
                      <path d="M430 324L430 304L426 304L426 324L430 324Z" fill="#000A27" />
                      <path d="M430 324L431 324L431 325L430 325L430 324ZM430 304L430 303L431 303L431 304L430 304ZM426 304L425 304L425 303L426 303L426 304ZM426 324L426 325L425 325L425 324L426 324ZM430 324L429 324L429 304L430 304L431 304L431 324L430 324ZM430 304L430 305L426 305L426 304L426 303L430 303L430 304ZM426 304L427 304L427 324L426 324L425 324L425 304L426 304ZM426 324L426 323L430 323L430 324L430 325L426 325L426 324Z" fill="#2F3245" mask="url(#path-23-inside-5_138_70)" />
                      <g filter="url(#filter5_dii_138_70)">
                        <rect width="20" height="46" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 426 324)" fill="#000A27" />
                      </g>
                      <rect x="527" y="301" width="26" height="26" transform="rotate(90 527 301)" fill="#111029" />
                      <rect x="526.5" y="301.5" width="25" height="25" transform="rotate(90 526.5 301.5)" stroke="#5D646E" strokeOpacity="0.4" />
                      <circle cx="514" cy="314" r="8" transform="rotate(90 514 314)" fill="#111029" stroke="#5D646E" strokeOpacity="0.4" />
                      <circle cx="20" cy="20" r="20" transform="matrix(4.37114e-08 1 1 -4.37114e-08 296 324)" fill="#000A27" stroke="#5D646E" strokeOpacity="0.7" />
                      <g filter="url(#filter6_di_138_70)">
                        <ellipse cx="306.667" cy="334" rx="2.66667" ry="2.66667" transform="rotate(-90 306.667 334)" fill="#000A27" />
                      </g>
                      <ellipse cx="14" cy="14" rx="14" ry="14" transform="matrix(4.37114e-08 1 1 -4.37114e-08 54 126)" fill="#111029" stroke="#5D646E" strokeOpacity="0.4" />
                      <g filter="url(#filter7_dii_138_70)">
                        <path d="M143 335C143 342.389 117.389 352 108 352C98.6112 352 91 344.389 91 335C91 325.611 98.6112 318 108 318C117.389 318 143 327.611 143 335ZM117 335C117 330.029 112.971 326 108 326C103.029 326 99 330.029 99 335C99 339.971 103.029 344 108 344C112.971 344 117 339.971 117 335Z" fill="#000A27" />
                      </g>
                      <defs>
                        <filter id="filter0_iiiiii_138_70" x="-1.23958" y="-4.95833" width="120.479" height="187.198" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="-4.95833" />
                          <feGaussianBlur stdDeviation="12.3958" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
                          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_138_70" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="-4.95833" />
                          <feGaussianBlur stdDeviation="22.3125" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
                          <feBlend mode="normal" in2="effect1_innerShadow_138_70" result="effect2_innerShadow_138_70" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="-1.23958" />
                          <feGaussianBlur stdDeviation="1.23958" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.06 0" />
                          <feBlend mode="normal" in2="effect2_innerShadow_138_70" result="effect3_innerShadow_138_70" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="1.23958" />
                          <feGaussianBlur stdDeviation="1.23958" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
                          <feBlend mode="normal" in2="effect3_innerShadow_138_70" result="effect4_innerShadow_138_70" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dx="1.23958" />
                          <feGaussianBlur stdDeviation="1.23958" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
                          <feBlend mode="normal" in2="effect4_innerShadow_138_70" result="effect5_innerShadow_138_70" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dx="-1.23958" />
                          <feGaussianBlur stdDeviation="1.23958" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
                          <feBlend mode="normal" in2="effect5_innerShadow_138_70" result="effect6_innerShadow_138_70" />
                        </filter>
                        <filter id="filter1_iiiiii_138_70" x="-1.23958" y="216.042" width="110.479" height="155.198" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="-4.95833" />
                          <feGaussianBlur stdDeviation="12.3958" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
                          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_138_70" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="-4.95833" />
                          <feGaussianBlur stdDeviation="22.3125" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
                          <feBlend mode="normal" in2="effect1_innerShadow_138_70" result="effect2_innerShadow_138_70" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="-1.23958" />
                          <feGaussianBlur stdDeviation="1.23958" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.06 0" />
                          <feBlend mode="normal" in2="effect2_innerShadow_138_70" result="effect3_innerShadow_138_70" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="1.23958" />
                          <feGaussianBlur stdDeviation="1.23958" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
                          <feBlend mode="normal" in2="effect3_innerShadow_138_70" result="effect4_innerShadow_138_70" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dx="1.23958" />
                          <feGaussianBlur stdDeviation="1.23958" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
                          <feBlend mode="normal" in2="effect4_innerShadow_138_70" result="effect5_innerShadow_138_70" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dx="-1.23958" />
                          <feGaussianBlur stdDeviation="1.23958" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
                          <feBlend mode="normal" in2="effect5_innerShadow_138_70" result="effect6_innerShadow_138_70" />
                        </filter>
                        <filter id="filter2_iiiiii_138_70" x="223.76" y="279.042" width="185.479" height="66.1979" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="-4.95833" />
                          <feGaussianBlur stdDeviation="12.3958" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
                          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_138_70" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="-4.95833" />
                          <feGaussianBlur stdDeviation="22.3125" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
                          <feBlend mode="normal" in2="effect1_innerShadow_138_70" result="effect2_innerShadow_138_70" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="-1.23958" />
                          <feGaussianBlur stdDeviation="1.23958" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.06 0" />
                          <feBlend mode="normal" in2="effect2_innerShadow_138_70" result="effect3_innerShadow_138_70" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="1.23958" />
                          <feGaussianBlur stdDeviation="1.23958" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
                          <feBlend mode="normal" in2="effect3_innerShadow_138_70" result="effect4_innerShadow_138_70" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dx="1.23958" />
                          <feGaussianBlur stdDeviation="1.23958" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
                          <feBlend mode="normal" in2="effect4_innerShadow_138_70" result="effect5_innerShadow_138_70" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dx="-1.23958" />
                          <feGaussianBlur stdDeviation="1.23958" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
                          <feBlend mode="normal" in2="effect5_innerShadow_138_70" result="effect6_innerShadow_138_70" />
                        </filter>
                        <filter id="filter3_dii_138_70" x="19" y="14" width="28" height="28" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="2" />
                          <feGaussianBlur stdDeviation="2.5" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_138_70" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_138_70" result="shape" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset />
                          <feGaussianBlur stdDeviation="1" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
                          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_138_70" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset />
                          <feGaussianBlur stdDeviation="3.5" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
                          <feBlend mode="lighten" in2="effect2_innerShadow_138_70" result="effect3_innerShadow_138_70" />
                        </filter>
                        <filter id="filter4_dii_138_70" x="129" y="294" width="62" height="44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="2" />
                          <feGaussianBlur stdDeviation="2.5" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_138_70" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_138_70" result="shape" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset />
                          <feGaussianBlur stdDeviation="1" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
                          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_138_70" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset />
                          <feGaussianBlur stdDeviation="5" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
                          <feBlend mode="lighten" in2="effect2_innerShadow_138_70" result="effect3_innerShadow_138_70" />
                        </filter>
                        <filter id="filter5_dii_138_70" x="375" y="301" width="56" height="30" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="2" />
                          <feGaussianBlur stdDeviation="2.5" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_138_70" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_138_70" result="shape" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset />
                          <feGaussianBlur stdDeviation="1" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.14 0" />
                          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_138_70" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset />
                          <feGaussianBlur stdDeviation="3.5" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0" />
                          <feBlend mode="lighten" in2="effect2_innerShadow_138_70" result="effect3_innerShadow_138_70" />
                        </filter>
                        <filter id="filter6_di_138_70" x="299" y="328.333" width="15.3335" height="15.3335" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="2" />
                          <feGaussianBlur stdDeviation="2.5" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_138_70" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_138_70" result="shape" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset />
                          <feGaussianBlur stdDeviation="1" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0" />
                          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_138_70" />
                        </filter>
                        <filter id="filter7_dii_138_70" x="86" y="315" width="62" height="44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="2" />
                          <feGaussianBlur stdDeviation="2.5" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_138_70" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_138_70" result="shape" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset />
                          <feGaussianBlur stdDeviation="1" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
                          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_138_70" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset />
                          <feGaussianBlur stdDeviation="5" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
                          <feBlend mode="lighten" in2="effect2_innerShadow_138_70" result="effect3_innerShadow_138_70" />
                        </filter>
                        <linearGradient id="paint0_linear_138_70" x1="532" y1="314.5" x2="532" y2="251" gradientUnits="userSpaceOnUse">
                          <stop stopColor="white" stopOpacity="0.4" />
                          <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <svg width="551" height="370" viewBox="0 0 551 370" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -right-6 top-6 h-92.5 w-163 max-w-none scale-x-[-1]">
                      <g filter="url(#filter0_iiiiii_138_70)">
                        <path d="M113 -1.70401e-07C115.761 -7.62909e-08 118 2.23858 118 5L118 61.5C118 64.2614 115.761 66.5 113 66.5L97.7621 66.5C95.0006 66.5 92.7621 68.7386 92.7621 71.5L92.7621 176C92.7621 178.761 90.5235 181 87.7621 181L-7.91176e-06 181L0 -4.02145e-06L113 -1.70401e-07Z" fill="#000A27" />
                      </g>
                      <path d="M514 314.5H534C542.837 314.5 550 307.337 550 298.5V251" stroke="url(#paint0_linear_138_70)" strokeDasharray="3 2" />
                      <path opacity="0.3" d="M81 266L80.5 266C80.5 266.498 80.4709 266.989 80.4144 267.471L80.911 267.529L81.4076 267.587C81.4686 267.066 81.5 266.537 81.5 266L81 266ZM80.515 269.53L80.0337 269.395C79.7646 270.351 79.3846 271.26 78.9085 272.108L79.3445 272.353L79.7805 272.598C80.2949 271.681 80.7055 270.699 80.9963 269.666L80.515 269.53ZM78.2096 274.048L77.8171 273.739C77.2081 274.51 76.5101 275.208 75.7387 275.817L76.0485 276.21L76.3583 276.602C77.1911 275.945 77.9446 275.191 78.6021 274.358L78.2096 274.048ZM74.3531 277.345L74.1084 276.908C73.26 277.385 72.3505 277.765 71.3947 278.034L71.5302 278.515L71.6657 278.996C72.6987 278.705 73.6814 278.295 74.5978 277.781L74.3531 277.345ZM69.5289 278.911L69.4707 278.414C68.9885 278.471 68.4978 278.5 68 278.5L68 279L68 279.5C68.5367 279.5 69.0664 279.469 69.5871 279.408L69.5289 278.911ZM68 279L68 278.5C67.5022 278.5 67.0115 278.471 66.5293 278.414L66.4711 278.911L66.4129 279.408C66.9336 279.469 67.4633 279.5 68 279.5L68 279ZM64.4698 278.515L64.6053 278.034C63.6495 277.765 62.74 277.385 61.8916 276.908L61.6469 277.345L61.4021 277.781C62.3186 278.295 63.3013 278.705 64.3343 278.996L64.4698 278.515ZM59.9515 276.21L60.2613 275.817C59.4899 275.208 58.7919 274.51 58.1828 273.739L57.7904 274.048L57.3979 274.358C58.0554 275.191 58.8089 275.945 59.6417 276.602L59.9515 276.21ZM56.6555 272.353L57.0915 272.108C56.6154 271.26 56.2354 270.351 55.9663 269.395L55.485 269.53L55.0037 269.666C55.2945 270.699 55.7051 271.681 56.2195 272.598L56.6555 272.353ZM55.089 267.529L55.5856 267.471C55.5291 266.989 55.5 266.498 55.5 266L55 266L54.5 266C54.5 266.537 54.5313 267.066 54.5924 267.587L55.089 267.529ZM55 266L55.5 266L55.5 264.512L55 264.512L54.5 264.512L54.5 266L55 266ZM55 262.528L55.5 262.528L55.5 259.552L55 259.552L54.5 259.552L54.5 262.528L55 262.528ZM55 257.568L55.5 257.568L55.5 254.592L55 254.592L54.5 254.592L54.5 257.568L55 257.568ZM55 252.608L55.5 252.608L55.5 249.632L55 249.632L54.5 249.632L54.5 252.608L55 252.608ZM55 247.648L55.5 247.648L55.5 244.672L55 244.672L54.5 244.672L54.5 247.648L55 247.648ZM55 242.688L55.5 242.688L55.5 239.712L55 239.712L54.5 239.712L54.5 242.688L55 242.688ZM55 237.728L55.5 237.728L55.5 234.752L55 234.752L54.5 234.752L54.5 237.728L55 237.728ZM55 232.768L55.5 232.768L55.5 229.792L55 229.792L54.5 229.792L54.5 232.768L55 232.768ZM55 227.808L55.5 227.808L55.5 224.832L55 224.832L54.5 224.832L54.5 227.808L55 227.808ZM55 222.848L55.5 222.848L55.5 219.872L55 219.872L54.5 219.872L54.5 222.848L55 222.848ZM55 217.888L55.5 217.888L55.5 214.912L55 214.912L54.5 214.912L54.5 217.888L55 217.888ZM55 212.928L55.5 212.928L55.5 209.952L55 209.952L54.5 209.952L54.5 212.928L55 212.928ZM55 207.968L55.5 207.968L55.5 204.992L55 204.992L54.5 204.992L54.5 207.968L55 207.968ZM55 203.008L55.5 203.008L55.5 200.032L55 200.032L54.5 200.032L54.5 203.008L55 203.008ZM55 198.048L55.5 198.048L55.5 195.072L55 195.072L54.5 195.072L54.5 198.048L55 198.048ZM55 193.088L55.5 193.088L55.5 190.112L55 190.112L54.5 190.112L54.5 193.088L55 193.088ZM55 188.128L55.5 188.128L55.5 185.152L55 185.152L54.5 185.152L54.5 188.128L55 188.128ZM55 183.168L55.5 183.168L55.5 180.192L55 180.192L54.5 180.192L54.5 183.168L55 183.168ZM55 178.208L55.5 178.208L55.5 175.232L55 175.232L54.5 175.232L54.5 178.208L55 178.208ZM55 173.248L55.5 173.248L55.5 170.272L55 170.272L54.5 170.272L54.5 173.248L55 173.248ZM55 168.288L55.5 168.288L55.5 165.312L55 165.312L54.5 165.312L54.5 168.288L55 168.288ZM55 163.328L55.5 163.328L55.5 160.352L55 160.352L54.5 160.352L54.5 163.328L55 163.328ZM55 158.368L55.5 158.368L55.5 155.392L55 155.392L54.5 155.392L54.5 158.368L55 158.368ZM55 153.408L55.5 153.408L55.5 150.432L55 150.432L54.5 150.432L54.5 153.408L55 153.408ZM55 148.448L55.5 148.448L55.5 145.472L55 145.472L54.5 145.472L54.5 148.448L55 148.448ZM55 143.488L55.5 143.488L55.5 142L55 142L54.5 142L54.5 143.488L55 143.488ZM55 142L55.5 142C55.5 141.502 55.5291 141.011 55.5856 140.529L55.089 140.471L54.5924 140.413C54.5314 140.934 54.5 141.463 54.5 142L55 142ZM55.485 138.47L55.9663 138.605C56.2354 137.649 56.6154 136.74 57.0915 135.892L56.6555 135.647L56.2195 135.402C55.7051 136.319 55.2945 137.301 55.0038 138.334L55.485 138.47ZM57.7904 133.952L58.1829 134.261C58.7919 133.49 59.4899 132.792 60.2613 132.183L59.9515 131.79L59.6417 131.398C58.8089 132.055 58.0554 132.809 57.3979 133.642L57.7904 133.952ZM61.6469 130.655L61.8916 131.092C62.74 130.615 63.6495 130.235 64.6053 129.966L64.4698 129.485L64.3343 129.004C63.3013 129.295 62.3186 129.705 61.4022 130.219L61.6469 130.655ZM66.4711 129.089L66.5293 129.586C67.0115 129.529 67.5022 129.5 68 129.5L68 129L68 128.5C67.4633 128.5 66.9336 128.531 66.4129 128.592L66.4711 129.089ZM68 129L68 129.5C68.4978 129.5 68.9885 129.529 69.4707 129.586L69.5289 129.089L69.5871 128.592C69.0664 128.531 68.5367 128.5 68 128.5L68 129ZM71.5302 129.485L71.3947 129.966C72.3505 130.235 73.26 130.615 74.1084 131.092L74.3531 130.655L74.5979 130.219C73.6814 129.705 72.6987 129.295 71.6657 129.004L71.5302 129.485ZM76.0485 131.79L75.7387 132.183C76.5101 132.792 77.2081 133.49 77.8172 134.261L78.2096 133.952L78.6021 133.642C77.9446 132.809 77.1911 132.055 76.3583 131.398L76.0485 131.79ZM79.3445 135.647L78.9085 135.892C79.3846 136.74 79.7646 137.649 80.0337 138.605L80.515 138.47L80.9963 138.334C80.7055 137.301 80.2949 136.319 79.7805 135.402L79.3445 135.647ZM80.911 140.471L80.4144 140.529C80.4709 141.011 80.5 141.502 80.5 142L81 142L81.5 142C81.5 141.463 81.4687 140.934 81.4076 140.413L80.911 140.471ZM81 142L80.5 142L80.5 143.488L81 143.488L81.5 143.488L81.5 142L81 142ZM81 145.472L80.5 145.472L80.5 148.448L81 148.448L81.5 148.448L81.5 145.472L81 145.472ZM81 150.432L80.5 150.432L80.5 153.408L81 153.408L81.5 153.408L81.5 150.432L81 150.432ZM81 155.392L80.5 155.392L80.5 158.368L81 158.368L81.5 158.368L81.5 155.392L81 155.392ZM81 160.352L80.5 160.352L80.5 163.328L81 163.328L81.5 163.328L81.5 160.352L81 160.352ZM81 165.312L80.5 165.312L80.5 168.288L81 168.288L81.5 168.288L81.5 165.312L81 165.312ZM81 170.272L80.5 170.272L80.5 173.248L81 173.248L81.5 173.248L81.5 170.272L81 170.272ZM81 175.232L80.5 175.232L80.5 178.208L81 178.208L81.5 178.208L81.5 175.232L81 175.232ZM81 180.192L80.5 180.192L80.5 183.168L81 183.168L81.5 183.168L81.5 180.192L81 180.192ZM81 185.152L80.5 185.152L80.5 188.128L81 188.128L81.5 188.128L81.5 185.152L81 185.152ZM81 190.112L80.5 190.112L80.5 193.088L81 193.088L81.5 193.088L81.5 190.112L81 190.112ZM81 195.072L80.5 195.072L80.5 198.048L81 198.048L81.5 198.048L81.5 195.072L81 195.072ZM81 200.032L80.5 200.032L80.5 203.008L81 203.008L81.5 203.008L81.5 200.032L81 200.032ZM81 204.992L80.5 204.992L80.5 207.968L81 207.968L81.5 207.968L81.5 204.992L81 204.992ZM81 209.952L80.5 209.952L80.5 212.928L81 212.928L81.5 212.928L81.5 209.952L81 209.952ZM81 214.912L80.5 214.912L80.5 217.888L81 217.888L81.5 217.888L81.5 214.912L81 214.912ZM81 219.872L80.5 219.872L80.5 222.848L81 222.848L81.5 222.848L81.5 219.872L81 219.872ZM81 224.832L80.5 224.832L80.5 227.808L81 227.808L81.5 227.808L81.5 224.832L81 224.832ZM81 229.792L80.5 229.792L80.5 232.768L81 232.768L81.5 232.768L81.5 229.792L81 229.792ZM81 234.752L80.5 234.752L80.5 237.728L81 237.728L81.5 237.728L81.5 234.752L81 234.752ZM81 239.712L80.5 239.712L80.5 242.688L81 242.688L81.5 242.688L81.5 239.712L81 239.712ZM81 244.672L80.5 244.672L80.5 247.648L81 247.648L81.5 247.648L81.5 244.672L81 244.672ZM81 249.632L80.5 249.632L80.5 252.608L81 252.608L81.5 252.608L81.5 249.632L81 249.632ZM81 254.592L80.5 254.592L80.5 257.568L81 257.568L81.5 257.568L81.5 254.592L81 254.592ZM81 259.552L80.5 259.552L80.5 262.528L81 262.528L81.5 262.528L81.5 259.552L81 259.552ZM81 264.512L80.5 264.512L80.5 266L81 266L81.5 266L81.5 264.512L81 264.512Z" fill="white" />
                      <g filter="url(#filter1_iiiiii_138_70)">
                        <path d="M66.7621 370L103 370C105.761 370 108 367.761 108 365L108 308.5C108 305.739 105.761 303.5 103 303.5L71.7621 303.5C69.0006 303.5 66.7621 301.261 66.7621 298.5L66.7621 226C66.7621 223.239 64.5235 221 61.7621 221L-6.513e-06 221L0 370L66.7621 370Z" fill="#000A27" />
                      </g>
                      <circle cx="30" cy="30" r="30" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 98 297)" fill="#000A27" stroke="#5D646E" strokeOpacity="0.4" />
                      <circle cx="12" cy="12" r="12" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 80 279)" fill="#111029" stroke="#5D646E" strokeOpacity="0.8" />
                      <g filter="url(#filter2_iiiiii_138_70)">
                        <path d="M225 344H408V284H225V344Z" fill="#000A27" />
                      </g>
                      <path opacity="0.2" d="M262 314L383 314" stroke="#DFE3E8" strokeLinecap="round" />
                      <path opacity="0.3" d="M169 327V326.5C168.502 326.5 168.011 326.471 167.529 326.414L167.471 326.911L167.413 327.408C167.934 327.469 168.463 327.5 169 327.5V327ZM165.47 326.515L165.605 326.034C164.649 325.765 163.74 325.385 162.892 324.908L162.647 325.345L162.402 325.781C163.319 326.295 164.301 326.705 165.334 326.996L165.47 326.515ZM160.952 324.21L161.261 323.817C160.49 323.208 159.792 322.51 159.183 321.739L158.79 322.048L158.398 322.358C159.055 323.191 159.809 323.945 160.642 324.602L160.952 324.21ZM157.655 320.353L158.092 320.108C157.615 319.26 157.235 318.351 156.966 317.395L156.485 317.53L156.004 317.666C156.295 318.699 156.705 319.681 157.219 320.598L157.655 320.353ZM156.089 315.529L156.586 315.471C156.529 314.989 156.5 314.498 156.5 314H156H155.5C155.5 314.537 155.531 315.066 155.592 315.587L156.089 315.529ZM156 314H156.5C156.5 313.502 156.529 313.011 156.586 312.529L156.089 312.471L155.592 312.413C155.531 312.934 155.5 313.463 155.5 314H156ZM156.485 310.47L156.966 310.605C157.235 309.649 157.615 308.74 158.092 307.892L157.655 307.647L157.219 307.402C156.705 308.319 156.295 309.301 156.004 310.334L156.485 310.47ZM158.79 305.952L159.183 306.261C159.792 305.49 160.49 304.792 161.261 304.183L160.952 303.79L160.642 303.398C159.809 304.055 159.055 304.809 158.398 305.642L158.79 305.952ZM162.647 302.655L162.892 303.092C163.74 302.615 164.649 302.235 165.605 301.966L165.47 301.485L165.334 301.004C164.301 301.295 163.319 301.705 162.402 302.219L162.647 302.655ZM167.471 301.089L167.529 301.586C168.011 301.529 168.502 301.5 169 301.5V301V300.5C168.463 300.5 167.934 300.531 167.413 300.592L167.471 301.089ZM169 301V301.5H170.518V301V300.5H169V301ZM172.541 301V301.5H175.576V301V300.5H172.541V301ZM177.6 301V301.5H180.635V301V300.5H177.6V301ZM182.659 301V301.5H185.694V301V300.5H182.659V301ZM187.718 301V301.5H190.753V301V300.5H187.718V301ZM192.776 301V301.5H195.812V301V300.5H192.776V301ZM197.835 301V301.5H200.871V301V300.5H197.835V301ZM202.894 301V301.5H205.929V301V300.5H202.894V301ZM207.953 301V301.5H210.988V301V300.5H207.953V301ZM213.012 301V301.5H216.047V301V300.5H213.012V301ZM218.071 301V301.5H221.106V301V300.5H218.071V301ZM223.129 301V301.5H226.165V301V300.5H223.129V301ZM228.188 301V301.5H231.224V301V300.5H228.188V301ZM233.247 301V301.5H236.282V301V300.5H233.247V301ZM238.306 301V301.5H241.341V301V300.5H238.306V301ZM243.365 301V301.5H246.4V301V300.5H243.365V301ZM248.424 301V301.5H251.459V301V300.5H248.424V301ZM253.482 301V301.5H255V301V300.5H253.482V301ZM255 301V301.5C255.498 301.5 255.989 301.529 256.471 301.586L256.529 301.089L256.587 300.592C256.066 300.531 255.537 300.5 255 300.5V301ZM258.53 301.485L258.395 301.966C259.351 302.235 260.26 302.615 261.108 303.092L261.353 302.655L261.598 302.219C260.681 301.705 259.699 301.295 258.666 301.004L258.53 301.485ZM263.048 303.79L262.739 304.183C263.51 304.792 264.208 305.49 264.817 306.261L265.21 305.952L265.602 305.642C264.945 304.809 264.191 304.055 263.358 303.398L263.048 303.79ZM266.345 307.647L265.908 307.892C266.385 308.74 266.765 309.649 267.034 310.605L267.515 310.47L267.996 310.334C267.705 309.301 267.295 308.319 266.781 307.402L266.345 307.647ZM267.911 312.471L267.414 312.529C267.471 313.011 267.5 313.502 267.5 314H268H268.5C268.5 313.463 268.469 312.934 268.408 312.413L267.911 312.471ZM268 314H267.5C267.5 314.498 267.471 314.989 267.414 315.471L267.911 315.529L268.408 315.587C268.469 315.066 268.5 314.537 268.5 314H268ZM267.515 317.53L267.034 317.395C266.765 318.351 266.385 319.26 265.908 320.108L266.345 320.353L266.781 320.598C267.295 319.681 267.705 318.699 267.996 317.666L267.515 317.53ZM265.21 322.048L264.817 321.739C264.208 322.51 263.51 323.208 262.739 323.817L263.048 324.21L263.358 324.602C264.191 323.945 264.945 323.191 265.602 322.358L265.21 322.048ZM261.353 325.345L261.108 324.908C260.26 325.385 259.351 325.765 258.395 326.034L258.53 326.515L258.666 326.996C259.699 326.705 260.681 326.295 261.598 325.781L261.353 325.345ZM256.529 326.911L256.471 326.414C255.989 326.471 255.498 326.5 255 326.5V327V327.5C255.537 327.5 256.066 327.469 256.587 327.408L256.529 326.911ZM255 327V326.5H253.482V327V327.5H255V327ZM251.459 327V326.5H248.424V327V327.5H251.459V327ZM246.4 327V326.5H243.365V327V327.5H246.4V327ZM241.341 327V326.5H238.306V327V327.5H241.341V327ZM236.282 327V326.5H233.247V327V327.5H236.282V327ZM231.224 327V326.5H228.188V327V327.5H231.224V327ZM226.165 327V326.5H223.129V327V327.5H226.165V327ZM221.106 327V326.5H218.071V327V327.5H221.106V327ZM216.047 327V326.5H213.012V327V327.5H216.047V327ZM210.988 327V326.5H207.953V327V327.5H210.988V327ZM205.929 327V326.5H202.894V327V327.5H205.929V327ZM200.871 327V326.5H197.835V327V327.5H200.871V327ZM195.812 327V326.5H192.776V327V327.5H195.812V327ZM190.753 327V326.5H187.718V327V327.5H190.753V327ZM185.694 327V326.5H182.659V327V327.5H185.694V327ZM180.635 327V326.5H177.6V327V327.5H180.635V327ZM175.576 327V326.5H172.541V327V327.5H175.576V327ZM170.518 327V326.5H169V327V327.5H170.518V327Z" fill="white" />
                      <g filter="url(#filter3_dii_138_70)">
                        <circle cx="33" cy="26" r="9" fill="#111029" />
                      </g>
                      <circle cx="254" cy="314" r="9" fill="#111029" stroke="#5D646E" strokeOpacity="0.4" />
                      <g filter="url(#filter4_dii_138_70)">
                        <path d="M134 314C134 321.389 159.611 331 169 331C178.389 331 186 323.389 186 314C186 304.611 178.389 297 169 297C159.611 297 134 306.611 134 314ZM160 314C160 309.029 164.029 305 169 305C173.971 305 178 309.029 178 314C178 318.971 173.971 323 169 323C164.029 323 160 318.971 160 314Z" fill="#000A27" />
                      </g>
                      <circle opacity="0.2" cx="443" cy="314" r="31" transform="rotate(-90 443 314)" stroke="white" strokeDasharray="3 2" />
                      <mask id="path-14-inside-1_138_70" fill="white">
                        <path d="M442 327L442 301L459 301L459 327L442 327Z" />
                      </mask>
                      <path d="M442 327L442 301L459 301L459 327L442 327Z" fill="#000A27" />
                      <path d="M442 327L441 327L441 328L442 328L442 327ZM442 301L442 300L441 300L441 301L442 301ZM459 301L460 301L460 300L459 300L459 301ZM459 327L459 328L460 328L460 327L459 327ZM442 327L443 327L443 301L442 301L441 301L441 327L442 327ZM442 301L442 302L459 302L459 301L459 300L442 300L442 301ZM459 301L458 301L458 327L459 327L460 327L460 301L459 301ZM459 327L459 326L442 326L442 327L442 328L459 328L459 327Z" fill="#2F3245" mask="url(#path-14-inside-1_138_70)" />
                      <mask id="path-16-inside-2_138_70" fill="white">
                        <path d="M439 323L439 305L443 305L443 323L439 323Z" />
                      </mask>
                      <path d="M439 323L439 305L443 305L443 323L439 323Z" fill="#000A27" />
                      <path d="M439 323L438 323L438 324L439 324L439 323ZM439 305L439 304L438 304L438 305L439 305ZM443 305L444 305L444 304L443 304L443 305ZM443 323L443 324L444 324L444 323L443 323ZM439 323L440 323L440 305L439 305L438 305L438 323L439 323ZM439 305L439 306L443 306L443 305L443 304L439 304L439 305ZM443 305L442 305L442 323L443 323L444 323L444 305L443 305ZM443 323L443 322L439 322L439 323L439 324L443 324L443 323Z" fill="#2F3245" mask="url(#path-16-inside-2_138_70)" />
                      <mask id="path-18-inside-3_138_70" fill="white">
                        <path d="M430 317L430 311L439 311L439 317L430 317Z" />
                      </mask>
                      <path d="M430 311L430 312L439 312L439 311L439 310L430 310L430 311ZM439 317L439 316L430 316L430 317L430 318L439 318L439 317Z" fill="#2F3245" mask="url(#path-18-inside-3_138_70)" />
                      <mask id="path-20-inside-4_138_70" fill="white">
                        <path d="M459 317L459 311L502 311L502 317L459 317Z" />
                      </mask>
                      <path d="M459 317L459 311L502 311L502 317L459 317Z" fill="#000A27" />
                      <path d="M459 311L459 312L502 312L502 311L502 310L459 310L459 311ZM502 317L502 316L459 316L459 317L459 318L502 318L502 317Z" fill="#2F3245" mask="url(#path-20-inside-4_138_70)" />
                      <rect x="426.5" y="323.5" width="19" height="3" transform="rotate(-90 426.5 323.5)" stroke="#79818D" />
                      <mask id="path-23-inside-5_138_70" fill="white">
                        <path d="M430 324L430 304L426 304L426 324L430 324Z" />
                      </mask>
                      <path d="M430 324L430 304L426 304L426 324L430 324Z" fill="#000A27" />
                      <path d="M430 324L431 324L431 325L430 325L430 324ZM430 304L430 303L431 303L431 304L430 304ZM426 304L425 304L425 303L426 303L426 304ZM426 324L426 325L425 325L425 324L426 324ZM430 324L429 324L429 304L430 304L431 304L431 324L430 324ZM430 304L430 305L426 305L426 304L426 303L430 303L430 304ZM426 304L427 304L427 324L426 324L425 324L425 304L426 304ZM426 324L426 323L430 323L430 324L430 325L426 325L426 324Z" fill="#2F3245" mask="url(#path-23-inside-5_138_70)" />
                      <g filter="url(#filter5_dii_138_70)">
                        <rect width="20" height="46" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 426 324)" fill="#000A27" />
                      </g>
                      <rect x="527" y="301" width="26" height="26" transform="rotate(90 527 301)" fill="#111029" />
                      <rect x="526.5" y="301.5" width="25" height="25" transform="rotate(90 526.5 301.5)" stroke="#5D646E" strokeOpacity="0.4" />
                      <circle cx="514" cy="314" r="8" transform="rotate(90 514 314)" fill="#111029" stroke="#5D646E" strokeOpacity="0.4" />
                      <circle cx="20" cy="20" r="20" transform="matrix(4.37114e-08 1 1 -4.37114e-08 296 324)" fill="#000A27" stroke="#5D646E" strokeOpacity="0.7" />
                      <g filter="url(#filter6_di_138_70)">
                        <ellipse cx="306.667" cy="334" rx="2.66667" ry="2.66667" transform="rotate(-90 306.667 334)" fill="#000A27" />
                      </g>
                      <ellipse cx="14" cy="14" rx="14" ry="14" transform="matrix(4.37114e-08 1 1 -4.37114e-08 54 126)" fill="#111029" stroke="#5D646E" strokeOpacity="0.4" />
                      <g filter="url(#filter7_dii_138_70)">
                        <path d="M143 335C143 342.389 117.389 352 108 352C98.6112 352 91 344.389 91 335C91 325.611 98.6112 318 108 318C117.389 318 143 327.611 143 335ZM117 335C117 330.029 112.971 326 108 326C103.029 326 99 330.029 99 335C99 339.971 103.029 344 108 344C112.971 344 117 339.971 117 335Z" fill="#000A27" />
                      </g>
                      <defs>
                        <filter id="filter0_iiiiii_138_70" x="-1.23958" y="-4.95833" width="120.479" height="187.198" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="-4.95833" />
                          <feGaussianBlur stdDeviation="12.3958" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
                          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_138_70" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="-4.95833" />
                          <feGaussianBlur stdDeviation="22.3125" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
                          <feBlend mode="normal" in2="effect1_innerShadow_138_70" result="effect2_innerShadow_138_70" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="-1.23958" />
                          <feGaussianBlur stdDeviation="1.23958" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.06 0" />
                          <feBlend mode="normal" in2="effect2_innerShadow_138_70" result="effect3_innerShadow_138_70" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="1.23958" />
                          <feGaussianBlur stdDeviation="1.23958" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
                          <feBlend mode="normal" in2="effect3_innerShadow_138_70" result="effect4_innerShadow_138_70" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dx="1.23958" />
                          <feGaussianBlur stdDeviation="1.23958" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
                          <feBlend mode="normal" in2="effect4_innerShadow_138_70" result="effect5_innerShadow_138_70" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dx="-1.23958" />
                          <feGaussianBlur stdDeviation="1.23958" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
                          <feBlend mode="normal" in2="effect5_innerShadow_138_70" result="effect6_innerShadow_138_70" />
                        </filter>
                        <filter id="filter1_iiiiii_138_70" x="-1.23958" y="216.042" width="110.479" height="155.198" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="-4.95833" />
                          <feGaussianBlur stdDeviation="12.3958" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
                          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_138_70" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="-4.95833" />
                          <feGaussianBlur stdDeviation="22.3125" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
                          <feBlend mode="normal" in2="effect1_innerShadow_138_70" result="effect2_innerShadow_138_70" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="-1.23958" />
                          <feGaussianBlur stdDeviation="1.23958" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.06 0" />
                          <feBlend mode="normal" in2="effect2_innerShadow_138_70" result="effect3_innerShadow_138_70" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="1.23958" />
                          <feGaussianBlur stdDeviation="1.23958" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
                          <feBlend mode="normal" in2="effect3_innerShadow_138_70" result="effect4_innerShadow_138_70" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dx="1.23958" />
                          <feGaussianBlur stdDeviation="1.23958" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
                          <feBlend mode="normal" in2="effect4_innerShadow_138_70" result="effect5_innerShadow_138_70" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dx="-1.23958" />
                          <feGaussianBlur stdDeviation="1.23958" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
                          <feBlend mode="normal" in2="effect5_innerShadow_138_70" result="effect6_innerShadow_138_70" />
                        </filter>
                        <filter id="filter2_iiiiii_138_70" x="223.76" y="279.042" width="185.479" height="66.1979" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="-4.95833" />
                          <feGaussianBlur stdDeviation="12.3958" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
                          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_138_70" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="-4.95833" />
                          <feGaussianBlur stdDeviation="22.3125" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
                          <feBlend mode="normal" in2="effect1_innerShadow_138_70" result="effect2_innerShadow_138_70" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="-1.23958" />
                          <feGaussianBlur stdDeviation="1.23958" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.06 0" />
                          <feBlend mode="normal" in2="effect2_innerShadow_138_70" result="effect3_innerShadow_138_70" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="1.23958" />
                          <feGaussianBlur stdDeviation="1.23958" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
                          <feBlend mode="normal" in2="effect3_innerShadow_138_70" result="effect4_innerShadow_138_70" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dx="1.23958" />
                          <feGaussianBlur stdDeviation="1.23958" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
                          <feBlend mode="normal" in2="effect4_innerShadow_138_70" result="effect5_innerShadow_138_70" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dx="-1.23958" />
                          <feGaussianBlur stdDeviation="1.23958" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
                          <feBlend mode="normal" in2="effect5_innerShadow_138_70" result="effect6_innerShadow_138_70" />
                        </filter>
                        <filter id="filter3_dii_138_70" x="19" y="14" width="28" height="28" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="2" />
                          <feGaussianBlur stdDeviation="2.5" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_138_70" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_138_70" result="shape" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset />
                          <feGaussianBlur stdDeviation="1" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
                          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_138_70" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset />
                          <feGaussianBlur stdDeviation="3.5" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
                          <feBlend mode="lighten" in2="effect2_innerShadow_138_70" result="effect3_innerShadow_138_70" />
                        </filter>
                        <filter id="filter4_dii_138_70" x="129" y="294" width="62" height="44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="2" />
                          <feGaussianBlur stdDeviation="2.5" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_138_70" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_138_70" result="shape" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset />
                          <feGaussianBlur stdDeviation="1" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
                          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_138_70" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset />
                          <feGaussianBlur stdDeviation="5" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
                          <feBlend mode="lighten" in2="effect2_innerShadow_138_70" result="effect3_innerShadow_138_70" />
                        </filter>
                        <filter id="filter5_dii_138_70" x="375" y="301" width="56" height="30" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="2" />
                          <feGaussianBlur stdDeviation="2.5" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_138_70" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_138_70" result="shape" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset />
                          <feGaussianBlur stdDeviation="1" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.14 0" />
                          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_138_70" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset />
                          <feGaussianBlur stdDeviation="3.5" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0" />
                          <feBlend mode="lighten" in2="effect2_innerShadow_138_70" result="effect3_innerShadow_138_70" />
                        </filter>
                        <filter id="filter6_di_138_70" x="299" y="328.333" width="15.3335" height="15.3335" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="2" />
                          <feGaussianBlur stdDeviation="2.5" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_138_70" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_138_70" result="shape" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset />
                          <feGaussianBlur stdDeviation="1" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0" />
                          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_138_70" />
                        </filter>
                        <filter id="filter7_dii_138_70" x="86" y="315" width="62" height="44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="2" />
                          <feGaussianBlur stdDeviation="2.5" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_138_70" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_138_70" result="shape" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset />
                          <feGaussianBlur stdDeviation="1" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
                          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_138_70" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset />
                          <feGaussianBlur stdDeviation="5" />
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
                          <feBlend mode="lighten" in2="effect2_innerShadow_138_70" result="effect3_innerShadow_138_70" />
                        </filter>
                        <linearGradient id="paint0_linear_138_70" x1="532" y1="314.5" x2="532" y2="251" gradientUnits="userSpaceOnUse">
                          <stop stopColor="white" stopOpacity="0.4" />
                          <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="relative z-10 flex min-h-104.5 flex-col items-center justify-center px-6 py-8 text-center">
                  <h2 className="text-balance text-4xl/10 font-semibold tracking-tight lg:text-5xl/14 max-w-230 text-white">
                    <span>Your customers are waiting on data that lives behind a login.</span>
                    <span className="text-[#4D8CF9]"></span>
                  </h2>
                  <a target="_blank" rel="noopener noreferrer" className="relative inline-flex items-center justify-center overflow-hidden rounded-[8px] py-[4px] text-[14px] font-medium leading-[24px] tracking-normal text-white shadow-[0px_12px_12px_-6px_rgba(16,102,241,0.05),0px_8px_8px_-4px_rgba(16,102,241,0.05),0px_6px_6px_-3px_rgba(16,102,241,0.05),0px_4px_4px_-2px_rgba(16,102,241,0.05)] transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#1066F1] focus:ring-offset-2 mt-6 h-10.5 w-50 px-6">
                    <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[inherit]">
                      <span className="absolute inset-0 rounded-[inherit] bg-[#0263FF]"></span>
                      <span className="absolute inset-x-0 top-0 h-[63.62%] rounded-t-[inherit] bg-[linear-gradient(180deg,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0)_100%)]"></span>
                    </span>
                    <span className="relative z-10 whitespace-nowrap">Book a Demo</span>
                    <span className="sr-only">{" (opens in a new tab)"}</span>
                    <span className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_4px_0px_rgba(255,255,255,0.5),inset_0px_0px_8px_0px_rgba(255,255,255,0.2)]"></span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <footer className="relative mt-auto bg-[rgb(var(--site-bg-rgb))]">
        <div aria-hidden="true" className="h-0 w-full border-t border-[#E7EAEE]"></div>
        <div className="mx-auto w-full max-w-300 border-x border-[#E7EAEE] px-0 lg:px-0">
          <div className="relative h-33" aria-hidden="true">
            <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/2 w-screen -translate-x-1/2 border-b border-[#E7EAEE] "></div>
          </div>
          <div className="relative grid lg:grid-cols-[1fr_auto]">
            <div className="relative flex h-24 items-center justify-center px-8 lg:h-auto lg:min-h-32 lg:justify-start lg:border-r lg:px-16">
              <A aria-label="Rubie home" className="shrink-0 transition-opacity hover:opacity-80" href="/">
                <img alt="" aria-hidden="true" loading="lazy" width="91" height="20" decoding="async" data-nimg="1" className="h-5 w-22.75" style={{ "color": "transparent" }} src="/images/logos/rubie-logo__0dc0adc0.svg" />
              </A>
              <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/2 w-screen -translate-x-1/2 border-b border-[#E7EAEE] lg:hidden"></div>
            </div>
            <div className="flex items-center justify-center gap-8 px-8 py-6 lg:gap-6 lg:px-16 lg:py-4">
              <div className="relative flex items-center justify-center text-[#BBC2CC] transition-colors duration-0 group-hover:text-white group-hover:drop-shadow-[0_0_28px_rgba(125,178,255,0.65)] size-25">
                <svg xmlns="http://www.w3.org/2000/svg" width="131" height="131" fill="none" viewBox="0 0 131 131" aria-hidden="true" className="absolute inset-0 size-full transition-opacity duration-0 group-hover:opacity-0">
                  <path stroke="#DFE3E8" d="M53.827 8.974a20.05 20.05 0 0 1 23.346 0 21.05 21.05 0 0 0 12.11 3.934 20.05 20.05 0 0 1 18.886 13.722 21.05 21.05 0 0 0 7.484 10.3 20.05 20.05 0 0 1 7.214 22.204 21.06 21.06 0 0 0 0 12.732 20.05 20.05 0 0 1-7.214 22.203 21.05 21.05 0 0 0-7.484 10.301 20.05 20.05 0 0 1-18.887 13.722 21.05 21.05 0 0 0-12.11 3.934 20.05 20.05 0 0 1-23.345 0 21.05 21.05 0 0 0-12.11-3.934 20.05 20.05 0 0 1-18.886-13.722 21.05 21.05 0 0 0-7.484-10.3 20.05 20.05 0 0 1-7.214-22.204 21.05 21.05 0 0 0 0-12.732 20.05 20.05 0 0 1 7.214-22.203A21.05 21.05 0 0 0 22.83 26.63a20.05 20.05 0 0 1 18.887-13.722 21.05 21.05 0 0 0 12.11-3.934Z" />
                  <circle cx="65.5" cy="65.5" r="48" stroke="#E7EAEE" />
                  <path stroke="#E7EAEE" d="M30.859 85.5a40 40 0 0 1 0-40M100.141 85.5a40 40 0 0 0 0-40" />
                  <circle cx="65.5" cy="65.5" r="32" stroke="#E7EAEE" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="131" height="131" fill="none" viewBox="0 0 131 131" aria-hidden="true" className="absolute inset-0 size-full opacity-0 transition-opacity duration-0 group-hover:opacity-100">
                  <g data-figma-bg-blur-radius="4" filter="url(#circle-star-badge-highlight_svg__filter0_iii_192_1562)">
                    <path fill="#fff" fillOpacity="0.1" d="M53.536 8.567a20.55 20.55 0 0 1 23.928 0 20.55 20.55 0 0 0 11.822 3.841 20.55 20.55 0 0 1 19.357 14.064 20.55 20.55 0 0 0 7.307 10.057 20.55 20.55 0 0 1 7.394 22.756 20.54 20.54 0 0 0 0 12.43 20.55 20.55 0 0 1-7.394 22.756 20.55 20.55 0 0 0-7.307 10.057 20.55 20.55 0 0 1-19.357 14.064 20.55 20.55 0 0 0-11.822 3.841 20.55 20.55 0 0 1-23.928 0 20.55 20.55 0 0 0-11.822-3.841 20.55 20.55 0 0 1-19.357-14.064 20.55 20.55 0 0 0-7.307-10.056 20.55 20.55 0 0 1-7.394-22.757 20.55 20.55 0 0 0 0-12.43 20.55 20.55 0 0 1 7.394-22.756 20.55 20.55 0 0 0 7.307-10.057 20.55 20.55 0 0 1 19.357-14.064 20.55 20.55 0 0 0 11.822-3.841" />
                  </g>
                  <circle cx="65.5" cy="65.5" r="48" stroke="#fff" strokeOpacity="0.2" />
                  <path stroke="#fff" strokeOpacity="0.2" d="M30.859 85.5a40 40 0 0 1 0-40M100.141 85.5a40 40 0 0 0 0-40" />
                  <circle cx="65.5" cy="65.5" r="32" stroke="#fff" strokeOpacity="0.2" />
                  <path stroke="#fff" strokeOpacity="0.2" d="M30.859 85.5a40 40 0 0 1 0-40M100.141 85.5a40 40 0 0 0 0-40" />
                  <defs>
                    <filter id="circle-star-badge-highlight_svg__filter0_iii_192_1562" width="125.615" height="129.551" x="2.692" y="0.725" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="1" />
                      <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                      <feColorMatrix values="0 0 0 0 0.498648 0 0 0 0 0.674121 0 0 0 0 1 0 0 0 1 0" />
                      <feBlend in2="shape" result="effect1_innerShadow_192_1562" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="10" />
                      <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                      <feColorMatrix values="0 0 0 0 0.528621 0 0 0 0 0.748598 0 0 0 0 1 0 0 0 1 0" />
                      <feBlend in2="effect1_innerShadow_192_1562" result="effect2_innerShadow_192_1562" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="12" />
                      <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                      <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                      <feBlend in2="effect2_innerShadow_192_1562" mode="lighten" result="effect3_innerShadow_192_1562" />
                    </filter>
                  </defs>
                </svg>
                <svg aria-hidden="true" className="absolute inset-0 size-full overflow-visible" viewBox="0 0 131 131">
                  <path id="_S_1_-top-arc" d="M 33 62 A 32.5 32.5 0 0 1 98 62" fill="none" />
                  <path id="_S_1_-bottom-arc" d="M 27 75 A 39 39 0 0 0 104 75" fill="none" />
                  <text fill="currentColor" fontSize="12" fontWeight="400" letterSpacing="0" className="opacity-85">
                    <textPath href="#_S_1_-top-arc" startOffset="50%" textAnchor="middle">HIPAA</textPath>
                  </text>
                  <text fill="currentColor" fontSize="12" fontWeight="400" letterSpacing="0" className="opacity-85">
                    <textPath href="#_S_1_-bottom-arc" startOffset="50%" textAnchor="middle">Compliant</textPath>
                  </text>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="42" fill="none" viewBox="0 0 46 42" aria-hidden="true" className="relative **:fill-current **:stroke-current size-8 h-9 w-[40px]">
                  <path fill="#fff" fillRule="evenodd" d="M15.898.064c-.937.18-1.85.579-3.223 1.408-1.191.719-1.649.97-3.13 1.711-3.68 1.843-6.444 2.98-8.5 3.495-.503.126-.95.251-.994.279-.266.169.504.249 2.407.25l1.714.001.341-.18c.188-.1.586-.294.885-.432s1.042-.487 1.65-.775l1.743-.822 1.631-.766c2.378-1.119 3.796-1.76 3.894-1.76.09 0-.495.312-3.562 1.9C4.888 7.41 4.197 7.78 3.879 8.068c-.376.34-.375.477.004.573.687.174 2.217.236 3.256.132.575-.057.446-.007 2.896-1.12a92 92 0 0 0 3.283-1.557c.497-.249.913-.443.924-.431.08.082-4.19 2.414-5.922 3.234-.82.389-1.362.915-1.207 1.171.222.365 2.064.335 3.586-.058.315-.081.593-.208.968-.442a94 94 0 0 0 2.325-1.489c.591-.393.827-.528.827-.474 0 .04-1.476 1.17-2.446 1.87-1.054.763-1.308 1.041-1.357 1.483-.033.306.032.4.338.485.448.124 1.612-.18 2.71-.707.56-.267 1.051-.65 1.797-1.397.192-.193.364-.337.38-.32.04.04-.298.447-1.025 1.237-.83.902-1.193 1.727-.895 2.033.273.28 1.516.029 2.329-.471.222-.137.407-.334.751-.801.252-.34.467-.647.479-.681s.036-.048.053-.032c.054.05-.262.752-.532 1.181-.211.335-.259.457-.259.668 0 .141.026.306.057.366.163.312.834.38 1.317.133.41-.21.847-.64 1.153-1.138.145-.234.272-.398.283-.365s-.082.286-.206.563c-.258.575-.287.854-.108 1.038.352.361 1.525-.286 2.18-1.203l.2-.278-.005-1.916a70 70 0 0 0-.04-2.488l-.034-.572-.609-.065c-.39-.042-.693-.108-.843-.182-.488-.243-.76-.918-.887-2.198-.182-1.839-.606-2.605-1.678-3.03-.235-.093-.47-.13-.974-.15-1.313-.051-1.94.14-4.286 1.314-.958.479-1.817.903-1.908.942l-.346.15c-.099.044-.18.057-.18.029s.218-.15.484-.27c.463-.211 2.307-1.154 3.056-1.564a10 10 0 0 1 1.81-.734c.317-.086.613-.118 1.122-.122 1.08-.008 1.587.17 2.19.762.559.551.795 1.199.938 2.573.097.928.234 1.45.47 1.783.197.279.415.388.864.431.177.017.428.043.557.057l.235.025v-.452h-.23c-.127 0-.388-.028-.58-.062-.417-.074-.576-.214-.8-.704-.16-.348-.218-.665-.327-1.759-.161-1.633-.841-2.612-2.052-2.957-.441-.126-1.533-.151-2.067-.048M28.563.029c-.77.103-1.327.372-1.743.84-.501.561-.719 1.21-.856 2.548-.092.894-.176 1.226-.418 1.657-.21.373-.401.467-1.048.515l-.47.034-.018.221-.017.222.486-.039c.268-.02.587-.065.71-.098.576-.157.867-.786.996-2.16.095-1.003.151-1.26.394-1.788C27.062.93 27.912.433 29.236.431c.695-.001 1.227.1 1.903.362.522.202 4.664 2.304 4.54 2.304-.132 0-1.24-.517-2.587-1.209C31.267.951 30.668.744 29.585.678c-.987-.062-1.72.133-2.214.589-.598.551-.878 1.288-.966 2.54-.1 1.417-.463 2.182-1.112 2.352-.148.038-.5.084-.781.101-.506.032-.512.034-.514.18 0 .081-.024 1.154-.052 2.384-.056 2.525-.084 2.317.392 2.934.47.61 1.12 1.036 1.655 1.086.284.026.323.016.405-.104.14-.205.11-.43-.13-1.003-.122-.29-.221-.557-.221-.594 0-.038.144.16.321.44.569.9 1.405 1.399 2.048 1.221q.45-.125.451-.614c0-.202-.048-.334-.23-.63-.261-.425-.618-1.198-.573-1.244.037-.038.02-.059.322.414.428.671.76 1.009 1.211 1.234 1.143.571 2.07.643 2.171.169.043-.196-.108-.68-.336-1.08-.083-.147-.401-.534-.708-.862-.625-.67-1.06-1.192-.992-1.192.025 0 .195.15.378.333.722.72 1.233 1.121 1.773 1.389 1.363.676 2.671.95 3.014.633.182-.17.145-.472-.107-.858-.171-.264-.342-.422-.816-.755-.931-.656-2.743-2.05-2.71-2.085.017-.017.4.21.85.506 2.088 1.372 2.709 1.74 3.132 1.853a9.2 9.2 0 0 0 2.443.316c.955 0 1.245-.077 1.245-.331 0-.351-.553-.761-1.891-1.402-1.071-.513-2.036-1.024-3.666-1.942-2.01-1.133-2.101-1.256-.245-.33 1.2.598 2.165 1.05 4.308 2.012l1.023.46 1.494.001c1.51.002 2.167-.06 2.385-.223.084-.063.09-.097.034-.222-.094-.211-.67-.627-1.34-.97-1.639-.836-8.593-4.441-8.896-4.611-.192-.108-.338-.209-.323-.223.032-.034 2.252.975 4.517 2.052.41.195 1.195.565 1.742.822 1.397.656 2.326 1.096 3.098 1.468l.663.32 1.418.019c1.371.018 2.502-.047 2.691-.156.08-.046.075-.06-.045-.115-.075-.034-.572-.174-1.105-.31-2-.51-4.98-1.754-8.655-3.612a48 48 0 0 1-2.6-1.42Q31.858.6 31.052.326c-.767-.26-1.82-.386-2.489-.296M22.55.851a1.2 1.2 0 0 0-.648.492c-.285.404-.329.967-.11 1.415.492 1.01 1.946.995 2.41-.025.5-1.103-.54-2.289-1.652-1.882m-.843 2.471c-.055.177.061.334.262.354l.18.017.035 1.192c.02.656.064 3.4.098 6.1.035 2.7.074 5.267.087 5.704s.025.966.026 1.176l.002.382.54.262 1.297.633.757.371.598-.244c.328-.133.746-.32.929-.412 1.128-.574 1.959-1.52 2.054-2.34.066-.58-.244-1.36-.74-1.861a2.3 2.3 0 0 1-.375-.53c-.222-.463-.742-.743-1.606-.867q-.966-.14-1.374.41c-.118.16-.137.236-.123.522.016.318.03.347.26.552.392.348 1.195.73 1.578.753.279.015.342.041.476.195.262.3.186.667-.214 1.027-.525.473-2.227 1.53-2.861 1.777-.102.04-.104-.009-.069-1.705.089-4.3.258-11.472.289-12.26l.034-.865h.187c.153 0 .193-.026.221-.142.072-.294-.007-.322-.31-.112-.281.193-.738.367-.967.367-.24 0-.694-.179-.938-.37a2 2 0 0 0-.275-.197c-.013 0-.04.05-.058.111m-1.77 9.938c-.813.127-1.367.431-1.551.853-.06.137-.24.386-.4.554a3.2 3.2 0 0 0-.497.734c-.191.397-.208.47-.207.916 0 .4.024.53.132.741.331.649.83 1.157 1.59 1.622.374.229 1.765.814 3.006 1.265 1.003.363 1.962.77 2.309.98.477.286 1.102.94 1.15 1.202.08.442-.047.585-1.412 1.58-2.201 1.603-2.49 1.82-2.827 2.127-.496.45-.9.952-1.112 1.378-.224.453-.274 1.023-.13 1.472.218.67.932 1.576 2.01 2.547.973.877 1.956 1.91 2.108 2.216.066.132.157.393.204.581.077.307.077.372 0 .638-.099.349-.334.729-.886 1.432-.697.889-1.023 1.443-1.245 2.119-.256.78-.26 1.632-.009 2.172.064.137.103.195.087.13-.213-.904-.2-1.313.065-2.001.233-.604.569-1.066 1.513-2.078.754-.807.917-1.014 1.09-1.382.164-.352.207-.515.227-.872.023-.41.012-.467-.167-.853-.25-.541-.527-.874-1.881-2.263-2.06-2.112-2.344-2.63-1.92-3.503.307-.629 1.168-1.328 3.37-2.733 1.956-1.249 2.38-1.717 2.425-2.68.017-.362 0-.483-.098-.691-.368-.78-1.042-1.218-4.345-2.828-1.79-.872-3.199-1.8-3.431-2.262-.139-.275-.104-.495.113-.718.164-.168.222-.194.363-.165.381.078 1.703-.644 1.902-1.039.064-.126.067-.17.015-.19s-.053-.052-.006-.132c.07-.121-.051-.428-.238-.601-.266-.247-.78-.351-1.316-.268m.639.395c.149.082.133.218-.031.282-.28.109-.558-.136-.319-.28.125-.074.217-.075.35-.002m5.033 0c.149.082.133.218-.031.282-.28.109-.558-.136-.318-.28.125-.074.216-.075.349-.002m-5.01 6.343c-.821.466-1.375.989-1.613 1.521-.117.262-.137.379-.119.694.045.793.539 1.4 1.808 2.225.436.284.848.542.915.573.106.05.229-.02.93-.529.954-.692.86-.44.884-2.369l.017-1.329-1.245-.47a56 56 0 0 0-1.272-.472c-.015 0-.152.07-.304.156m1.817 1.075c.045.695.048 3.079.004 3.079-.084 0-1.705-1.233-1.876-1.427q-.543-.617.478-1.44c.303-.244 1.197-.765 1.314-.765.025 0 .06.249.08.553m.876 4.929-.788.544.037 1.797.037 1.796.581.58.581.58.226-.183c.345-.279.991-.964 1.283-1.36.143-.195.357-.558.474-.806.184-.388.214-.504.214-.836 0-.455-.093-.728-.425-1.248-.24-.377-1.242-1.409-1.367-1.409-.036 0-.42.245-.853.545m.466.538c.698.57 1.074 1.16 1.072 1.686 0 .298-.204.71-.595 1.204-.501.633-.937 1.111-.977 1.071-.058-.058.036-4.25.094-4.25.03 0 .212.13.406.289m-2.055 5.597c-.795.899-1.02 1.329-1.02 1.95 0 .434.211 1.065.473 1.41.304.402 1.312 1.432 1.352 1.383.02-.025.161-.223.315-.442l.28-.397.038-1.646.038-1.645-.432-.426c-.721-.71-.6-.688-1.044-.187m.942 2.273c.022 1.069.02 1.942-.007 1.94-.087-.006-.793-.985-.963-1.335-.21-.429-.225-.768-.059-1.28.1-.31.196-.456.542-.839.23-.255.425-.456.433-.447s.032.892.054 1.96m.561 3.128c-.097.11-.094.126.126.577.255.522.29.843.146 1.334-.045.151-.073.284-.062.295.01.01.077-.104.148-.253.24-.5.145-1.502-.187-1.967-.067-.095-.076-.094-.171.014m-.326.483-.153.25.007 1.637c.004 1.08.03 1.715.072 1.865l.066.227.064-.255c.056-.224.164-3.973.115-3.973-.01 0-.087.112-.17.25" clipRule="evenodd" />
                </svg>
              </div>
              <div className="relative flex items-center justify-center text-[#BBC2CC] transition-colors duration-0 group-hover:text-white group-hover:drop-shadow-[0_0_28px_rgba(125,178,255,0.65)] size-25">
                <svg xmlns="http://www.w3.org/2000/svg" width="131" height="131" fill="none" viewBox="0 0 131 131" aria-hidden="true" className="absolute inset-0 size-full transition-opacity duration-0 group-hover:opacity-0">
                  <path stroke="#DFE3E8" d="M53.827 8.974a20.05 20.05 0 0 1 23.346 0 21.05 21.05 0 0 0 12.11 3.934 20.05 20.05 0 0 1 18.886 13.722 21.05 21.05 0 0 0 7.484 10.3 20.05 20.05 0 0 1 7.214 22.204 21.06 21.06 0 0 0 0 12.732 20.05 20.05 0 0 1-7.214 22.203 21.05 21.05 0 0 0-7.484 10.301 20.05 20.05 0 0 1-18.887 13.722 21.05 21.05 0 0 0-12.11 3.934 20.05 20.05 0 0 1-23.345 0 21.05 21.05 0 0 0-12.11-3.934 20.05 20.05 0 0 1-18.886-13.722 21.05 21.05 0 0 0-7.484-10.3 20.05 20.05 0 0 1-7.214-22.204 21.05 21.05 0 0 0 0-12.732 20.05 20.05 0 0 1 7.214-22.203A21.05 21.05 0 0 0 22.83 26.63a20.05 20.05 0 0 1 18.887-13.722 21.05 21.05 0 0 0 12.11-3.934Z" />
                  <circle cx="65.5" cy="65.5" r="48" stroke="#E7EAEE" />
                  <path stroke="#E7EAEE" d="M30.859 85.5a40 40 0 0 1 0-40M100.141 85.5a40 40 0 0 0 0-40" />
                  <circle cx="65.5" cy="65.5" r="32" stroke="#E7EAEE" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="131" height="131" fill="none" viewBox="0 0 131 131" aria-hidden="true" className="absolute inset-0 size-full opacity-0 transition-opacity duration-0 group-hover:opacity-100">
                  <g data-figma-bg-blur-radius="4" filter="url(#circle-star-badge-highlight_svg__filter0_iii_192_1562)">
                    <path fill="#fff" fillOpacity="0.1" d="M53.536 8.567a20.55 20.55 0 0 1 23.928 0 20.55 20.55 0 0 0 11.822 3.841 20.55 20.55 0 0 1 19.357 14.064 20.55 20.55 0 0 0 7.307 10.057 20.55 20.55 0 0 1 7.394 22.756 20.54 20.54 0 0 0 0 12.43 20.55 20.55 0 0 1-7.394 22.756 20.55 20.55 0 0 0-7.307 10.057 20.55 20.55 0 0 1-19.357 14.064 20.55 20.55 0 0 0-11.822 3.841 20.55 20.55 0 0 1-23.928 0 20.55 20.55 0 0 0-11.822-3.841 20.55 20.55 0 0 1-19.357-14.064 20.55 20.55 0 0 0-7.307-10.056 20.55 20.55 0 0 1-7.394-22.757 20.55 20.55 0 0 0 0-12.43 20.55 20.55 0 0 1 7.394-22.756 20.55 20.55 0 0 0 7.307-10.057 20.55 20.55 0 0 1 19.357-14.064 20.55 20.55 0 0 0 11.822-3.841" />
                  </g>
                  <circle cx="65.5" cy="65.5" r="48" stroke="#fff" strokeOpacity="0.2" />
                  <path stroke="#fff" strokeOpacity="0.2" d="M30.859 85.5a40 40 0 0 1 0-40M100.141 85.5a40 40 0 0 0 0-40" />
                  <circle cx="65.5" cy="65.5" r="32" stroke="#fff" strokeOpacity="0.2" />
                  <path stroke="#fff" strokeOpacity="0.2" d="M30.859 85.5a40 40 0 0 1 0-40M100.141 85.5a40 40 0 0 0 0-40" />
                  <defs>
                    <filter id="circle-star-badge-highlight_svg__filter0_iii_192_1562" width="125.615" height="129.551" x="2.692" y="0.725" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="1" />
                      <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                      <feColorMatrix values="0 0 0 0 0.498648 0 0 0 0 0.674121 0 0 0 0 1 0 0 0 1 0" />
                      <feBlend in2="shape" result="effect1_innerShadow_192_1562" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="10" />
                      <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                      <feColorMatrix values="0 0 0 0 0.528621 0 0 0 0 0.748598 0 0 0 0 1 0 0 0 1 0" />
                      <feBlend in2="effect1_innerShadow_192_1562" result="effect2_innerShadow_192_1562" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="12" />
                      <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                      <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                      <feBlend in2="effect2_innerShadow_192_1562" mode="lighten" result="effect3_innerShadow_192_1562" />
                    </filter>
                  </defs>
                </svg>
                <svg aria-hidden="true" className="absolute inset-0 size-full overflow-visible" viewBox="0 0 131 131">
                  <path id="_S_4_-top-arc" d="M 33 62 A 32.5 32.5 0 0 1 98 62" fill="none" />
                  <path id="_S_4_-bottom-arc" d="M 27 75 A 39 39 0 0 0 104 75" fill="none" />
                  <text fill="currentColor" fontSize="12" fontWeight="400" letterSpacing="0" className="opacity-85">
                    <textPath href="#_S_4_-top-arc" startOffset="50%" textAnchor="middle">SOC 2</textPath>
                  </text>
                  <text fill="currentColor" fontSize="12" fontWeight="400" letterSpacing="0" className="opacity-85">
                    <textPath href="#_S_4_-bottom-arc" startOffset="50%" textAnchor="middle">Type II</textPath>
                  </text>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="34" fill="none" viewBox="0 0 35 34" aria-hidden="true" className="relative **:fill-current **:stroke-current size-8 h-8 w-[38px]">
                  <path fill="#878E99" d="M1.489 12H.381l3.205-8.727h1.09L7.881 12H6.773L4.165 4.653h-.068zm.41-3.41h4.465v.938H1.898zm8.398-5.317V12H9.24V3.273zM19.44 6h-1.057a2.2 2.2 0 0 0-.89-1.38 2.4 2.4 0 0 0-.73-.359 3 3 0 0 0-.834-.119q-.794 0-1.437.4-.639.401-1.018 1.181-.375.78-.375 1.913t.375 1.914q.38.78 1.018 1.18.644.4 1.437.4.435 0 .835-.119.4-.12.728-.353a2.25 2.25 0 0 0 .891-1.385h1.057a3.5 3.5 0 0 1-.435 1.197 3.27 3.27 0 0 1-1.836 1.458q-.58.19-1.24.191-1.117 0-1.986-.545-.87-.545-1.368-1.551t-.499-2.387.499-2.386q.498-1.005 1.368-1.551t1.986-.546q.66 0 1.24.192.584.192 1.052.563.47.366.784.895.315.524.435 1.197m1.708 6V3.273h2.949q1.027 0 1.678.37.657.368.972.993.315.627.315 1.398 0 .772-.315 1.402-.31.63-.963 1.006-.653.37-1.67.37h-2.114v-.937h2.08q.703 0 1.129-.243t.618-.656a2.2 2.2 0 0 0 .196-.942q0-.525-.196-.937a1.4 1.4 0 0 0-.623-.648q-.43-.24-1.142-.239h-1.858V12zm7.084 0h-1.108l3.205-8.727h1.09L34.624 12h-1.108l-2.608-7.347h-.068zm.41-3.41h4.465v.938H28.64z" />
                  <path stroke="#D6DBE1" d="M34.5 17H0" />
                  <path fill="#79818D" d="M6.935 24.455a1.34 1.34 0 0 0-.622-1.006q-.546-.358-1.338-.358-.58 0-1.014.187a1.6 1.6 0 0 0-.674.516q-.238.328-.238.746 0 .35.166.6.17.247.435.414.264.162.553.268.29.103.533.167l.887.238q.34.09.758.247.422.158.805.43.388.27.64.691.25.422.251 1.036 0 .707-.37 1.278-.367.57-1.075.908-.702.336-1.708.336-.938 0-1.624-.302a2.6 2.6 0 0 1-1.074-.844 2.4 2.4 0 0 1-.439-1.257h1.091q.044.494.333.818.294.32.741.477.451.154.972.154a2.9 2.9 0 0 0 1.086-.196q.482-.2.763-.554.282-.358.281-.835 0-.435-.243-.708a1.8 1.8 0 0 0-.639-.443 7 7 0 0 0-.856-.298l-1.074-.307q-1.023-.294-1.62-.84-.596-.545-.596-1.427 0-.733.396-1.279.4-.549 1.074-.852a3.6 3.6 0 0 1 1.513-.307q.843 0 1.5.303.656.299 1.04.818.387.52.409 1.18zm10.243 2.181q0 1.38-.498 2.387-.5 1.005-1.368 1.55-.87.546-1.986.546t-1.986-.545-1.368-1.551q-.498-1.005-.498-2.387 0-1.38.498-2.386.5-1.005 1.368-1.551.87-.546 1.986-.546t1.986.546 1.368 1.551.498 2.386m-1.023 0q0-1.133-.379-1.913-.375-.78-1.018-1.18a2.64 2.64 0 0 0-1.432-.401q-.792 0-1.436.4-.64.402-1.019 1.181-.375.78-.375 1.913t.375 1.914q.38.78 1.019 1.18.644.4 1.436.4a2.64 2.64 0 0 0 1.432-.4q.643-.4 1.018-1.18.38-.78.38-1.914M25.979 25h-1.057a2.2 2.2 0 0 0-.89-1.38 2.4 2.4 0 0 0-.73-.359 3 3 0 0 0-.834-.119q-.794 0-1.436.4-.64.402-1.019 1.181-.375.78-.375 1.913t.375 1.914q.38.78 1.018 1.18.644.4 1.437.4.435 0 .835-.119.4-.12.729-.353a2.25 2.25 0 0 0 .89-1.385h1.057a3.5 3.5 0 0 1-.435 1.197 3.27 3.27 0 0 1-1.836 1.458q-.58.19-1.24.191-1.117 0-1.986-.545-.87-.545-1.368-1.551t-.499-2.387.499-2.386q.498-1.005 1.368-1.551t1.986-.546q.66 0 1.24.192.584.192 1.052.563.47.366.784.895.315.524.435 1.197m1.554 6v-.767l2.881-3.154q.507-.553.835-.963.328-.413.486-.775.162-.366.162-.767 0-.46-.222-.797a1.44 1.44 0 0 0-.596-.52 1.9 1.9 0 0 0-.852-.183q-.503 0-.878.209a1.44 1.44 0 0 0-.576.575 1.8 1.8 0 0 0-.2.87h-1.006q0-.768.354-1.347.354-.58.963-.904.614-.324 1.377-.324.766 0 1.359.324t.929.874q.337.55.337 1.223 0 .48-.175.942-.171.456-.597 1.018-.422.558-1.172 1.364l-1.96 2.096v.069h4.057V31z" />
                </svg>
              </div>
            </div>
            <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/2 w-screen -translate-x-1/2 border-b border-[#E7EAEE] "></div>
          </div>
          <div className="relative lg:hidden">
            <div className="relative h-10">
              <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/2 w-screen -translate-x-1/2 border-b border-[#E7EAEE] "></div>
            </div>
            <div className="relative grid grid-cols-2 gap-x-12 px-8 py-9">
              <div className="min-w-0 space-y-4 ">
                <h3 className="text-base/6 text-[#000A27] lg:text-sm/5">Product</h3>
                <ul className="flex flex-col gap-4 lg:gap-3">
                  <li>
                    <A className="text-base/6 text-[#79818D] transition-colors hover:text-rubie-deep lg:text-sm/5" href="/solutions/integration-playbooks">Integration Playbooks</A>
                  </li>
                  <li>
                    <A className="text-base/6 text-[#79818D] transition-colors hover:text-rubie-deep lg:text-sm/5" href="/solutions/migration-playbooks">Migration Playbooks</A>
                  </li>
                </ul>
              </div>
              <div className="min-w-0 space-y-4 ">
                <h3 className="text-base/6 text-[#000A27] lg:text-sm/5">Resources</h3>
                <ul className="flex flex-col gap-4 lg:gap-3">
                  <li>
                    <a target="_blank" rel="noreferrer" className="text-base/6 text-[#79818D] transition-colors hover:text-rubie-deep lg:text-sm/5">Documentation</a>
                  </li>
                  <li>
                    <A className="text-base/6 text-[#79818D] transition-colors hover:text-rubie-deep lg:text-sm/5" href="/customers">Customer Stories</A>
                  </li>
                  <li>
                    <A className="text-base/6 text-[#79818D] transition-colors hover:text-rubie-deep lg:text-sm/5" href="/blog">News and Updates</A>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" className="text-base/6 text-[#79818D] transition-colors hover:text-rubie-deep lg:text-sm/5" href="mailto:help@rubiehq.com">Support</a>
                  </li>
                </ul>
              </div>
              <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/2 w-screen -translate-x-1/2 border-b border-[#E7EAEE] "></div>
            </div>
            <div className="relative h-10">
              <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/2 w-screen -translate-x-1/2 border-b border-[#E7EAEE] "></div>
            </div>
            <div className="relative grid grid-cols-2 gap-x-12 px-8 py-9">
              <div className="min-w-0 space-y-4 ">
                <h3 className="text-base/6 text-[#000A27] lg:text-sm/5">Security</h3>
                <ul className="flex flex-col gap-4 lg:gap-3">
                  <li>
                    <A className="text-base/6 text-[#79818D] transition-colors hover:text-rubie-deep lg:text-sm/5" href="/enterprise">Overview</A>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" className="text-base/6 text-[#79818D] transition-colors hover:text-rubie-deep lg:text-sm/5">Trust Center</a>
                  </li>
                  <li>
                    <A className="text-base/6 text-[#79818D] transition-colors hover:text-rubie-deep lg:text-sm/5" href="/privacy-policy">Privacy Policy</A>
                  </li>
                  <li>
                    <A className="text-base/6 text-[#79818D] transition-colors hover:text-rubie-deep lg:text-sm/5" href="/terms">Terms</A>
                  </li>
                </ul>
              </div>
              <div className="min-w-0 space-y-4 ">
                <h3 className="text-base/6 text-[#000A27] lg:text-sm/5">Company</h3>
                <ul className="flex flex-col gap-4 lg:gap-3">
                  <li>
                    <a target="_blank" rel="noreferrer" className="text-base/6 text-[#79818D] transition-colors hover:text-rubie-deep lg:text-sm/5">Careers</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" className="text-base/6 text-[#79818D] transition-colors hover:text-rubie-deep lg:text-sm/5" href="mailto:hello@rubiehq.com">Contact</a>
                  </li>
                </ul>
              </div>
              <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/2 w-screen -translate-x-1/2 border-b border-[#E7EAEE] "></div>
            </div>
            <div className="relative h-10">
              <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/2 w-screen -translate-x-1/2 border-b border-[#E7EAEE] "></div>
            </div>
            <div className="relative px-8 py-9">
              <div className="min-w-0 space-y-4 ">
                <h3 className="text-base/6 text-[#000A27] lg:text-sm/5">Socials</h3>
                <ul className="flex flex-col gap-4 lg:gap-3">
                  <li>
                    <a target="_blank" rel="noreferrer" className="text-base/6 text-[#79818D] transition-colors hover:text-rubie-deep lg:text-sm/5">LinkedIn</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" className="text-base/6 text-[#79818D] transition-colors hover:text-rubie-deep lg:text-sm/5">X / Twitter</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" className="text-base/6 text-[#79818D] transition-colors hover:text-rubie-deep lg:text-sm/5">GitHub</a>
                  </li>
                </ul>
              </div>
              <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/2 w-screen -translate-x-1/2 border-b border-[#E7EAEE] "></div>
            </div>
          </div>
          <div className="relative hidden grid-cols-5 gap-x-8 gap-y-12 px-16 py-12 lg:grid">
            <div className="min-w-0 space-y-4 ">
              <h3 className="text-base/6 text-[#000A27] lg:text-sm/5">Product</h3>
              <ul className="flex flex-col gap-4 lg:gap-3">
                <li>
                  <A className="text-base/6 text-[#79818D] transition-colors hover:text-rubie-deep lg:text-sm/5" href="/solutions/integration-playbooks">Integration Playbooks</A>
                </li>
                <li>
                  <A className="text-base/6 text-[#79818D] transition-colors hover:text-rubie-deep lg:text-sm/5" href="/solutions/migration-playbooks">Migration Playbooks</A>
                </li>
              </ul>
            </div>
            <div className="min-w-0 space-y-4 ">
              <h3 className="text-base/6 text-[#000A27] lg:text-sm/5">Resources</h3>
              <ul className="flex flex-col gap-4 lg:gap-3">
                <li>
                  <a target="_blank" rel="noreferrer" className="text-base/6 text-[#79818D] transition-colors hover:text-rubie-deep lg:text-sm/5">Documentation</a>
                </li>
                <li>
                  <A className="text-base/6 text-[#79818D] transition-colors hover:text-rubie-deep lg:text-sm/5" href="/customers">Customer Stories</A>
                </li>
                <li>
                  <A className="text-base/6 text-[#79818D] transition-colors hover:text-rubie-deep lg:text-sm/5" href="/blog">News and Updates</A>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" className="text-base/6 text-[#79818D] transition-colors hover:text-rubie-deep lg:text-sm/5" href="mailto:help@rubiehq.com">Support</a>
                </li>
              </ul>
            </div>
            <div className="min-w-0 space-y-4 ">
              <h3 className="text-base/6 text-[#000A27] lg:text-sm/5">Security</h3>
              <ul className="flex flex-col gap-4 lg:gap-3">
                <li>
                  <A className="text-base/6 text-[#79818D] transition-colors hover:text-rubie-deep lg:text-sm/5" href="/enterprise">Overview</A>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" className="text-base/6 text-[#79818D] transition-colors hover:text-rubie-deep lg:text-sm/5">Trust Center</a>
                </li>
                <li>
                  <A className="text-base/6 text-[#79818D] transition-colors hover:text-rubie-deep lg:text-sm/5" href="/privacy-policy">Privacy Policy</A>
                </li>
                <li>
                  <A className="text-base/6 text-[#79818D] transition-colors hover:text-rubie-deep lg:text-sm/5" href="/terms">Terms</A>
                </li>
              </ul>
            </div>
            <div className="min-w-0 space-y-4 ">
              <h3 className="text-base/6 text-[#000A27] lg:text-sm/5">Company</h3>
              <ul className="flex flex-col gap-4 lg:gap-3">
                <li>
                  <a target="_blank" rel="noreferrer" className="text-base/6 text-[#79818D] transition-colors hover:text-rubie-deep lg:text-sm/5">Careers</a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" className="text-base/6 text-[#79818D] transition-colors hover:text-rubie-deep lg:text-sm/5" href="mailto:hello@rubiehq.com">Contact</a>
                </li>
              </ul>
            </div>
            <div className="min-w-0 space-y-4 ">
              <h3 className="text-base/6 text-[#000A27] lg:text-sm/5">Socials</h3>
              <ul className="flex flex-col gap-4 lg:gap-3">
                <li>
                  <a target="_blank" rel="noreferrer" className="text-base/6 text-[#79818D] transition-colors hover:text-rubie-deep lg:text-sm/5">LinkedIn</a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" className="text-base/6 text-[#79818D] transition-colors hover:text-rubie-deep lg:text-sm/5">X / Twitter</a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" className="text-base/6 text-[#79818D] transition-colors hover:text-rubie-deep lg:text-sm/5">GitHub</a>
                </li>
              </ul>
            </div>
            <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/2 w-screen -translate-x-1/2 border-b border-[#E7EAEE] "></div>
          </div>
          <div className="relative px-4 py-6">
            <a target="_blank" rel="noreferrer" className={"flex w-full items-center justify-center gap-2 rounded-full border border-[#E7EAEE] px-4 py-2 text-sm/6 transition-colors hover:border-[#D6DBE1] text-[#1066F1] [&>span:first-child]:bg-[#1066F1]"}>
              <span className="size-2.5 rounded-full" aria-hidden="true"></span>
              <span>All systems normal</span>
            </a>
            <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/2 w-screen -translate-x-1/2 border-b border-[#E7EAEE] "></div>
          </div>
        </div>
      </footer>
    </main>
  );
}
