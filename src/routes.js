import { lazy } from "react";

// One entry per captured page. Add a page by adding its component here.
export const routes = [
  { path: "/", title: "Rubie | Rip and Replace Your Competition", Page: lazy(() => import("./pages/HomePage.jsx")) },
  { path: "/product", title: "Product | Rubie", Page: lazy(() => import("./pages/Product.jsx")) },
  { path: "/enterprise", title: "Enterprise | Rubie", Page: lazy(() => import("./pages/Enterprise.jsx")) },
  { path: "/customers", title: "Customer Stories | Rubie", Page: lazy(() => import("./pages/Customers.jsx")) },
  { path: "/blog", title: "Blog | Rubie", Page: lazy(() => import("./pages/Blog.jsx")) },
  { path: "/privacy-policy", title: "Privacy Policy | Rubie", Page: lazy(() => import("./pages/PrivacyPolicy.jsx")) },
  { path: "/terms", title: "Terms of Use | Rubie", Page: lazy(() => import("./pages/Terms.jsx")) },
  { path: "/solutions/migration-playbooks", title: "Migration Playbooks | Rubie", Page: lazy(() => import("./pages/SolutionsMigrationPlaybooks.jsx")) },
  { path: "/solutions/integration-playbooks", title: "Integration Playbooks | Rubie", Page: lazy(() => import("./pages/SolutionsIntegrationPlaybooks.jsx")) },
  { path: "/customers/granum", title: "Granum Customer Story | Rubie", Page: lazy(() => import("./pages/CustomersGranum.jsx")) },
  { path: "/customers/brivity", title: "Brivity Customer Story | Rubie", Page: lazy(() => import("./pages/CustomersBrivity.jsx")) },
  { path: "/customers/cariina", title: "Cariina Customer Story | Rubie", Page: lazy(() => import("./pages/CustomersCariina.jsx")) },
  { path: "/use-cases/sales", title: "Sales Teams | Rubie", Page: lazy(() => import("./pages/UseCasesSales.jsx")) },
  { path: "/use-cases/customer-success", title: "Customer Success Teams | Rubie", Page: lazy(() => import("./pages/UseCasesCustomerSuccess.jsx")) },
  { path: "/use-cases/product", title: "Product Teams | Rubie", Page: lazy(() => import("./pages/UseCasesProduct.jsx")) },
  { path: "/use-cases/healthcare", title: "Healthcare | Rubie", Page: lazy(() => import("./pages/UseCasesHealthcare.jsx")) },
  { path: "/use-cases/financial-services", title: "Financial Services | Rubie", Page: lazy(() => import("./pages/UseCasesFinancialServices.jsx")) },
  { path: "/use-cases/education", title: "Education | Rubie", Page: lazy(() => import("./pages/UseCasesEducation.jsx")) },
  { path: "/customers/curbwaste", title: "Curbwaste Customer Story | Rubie", Page: lazy(() => import("./pages/CustomersCurbwaste.jsx")) },
  { path: "/customers/bound", title: "Bound Customer Story | Rubie", Page: lazy(() => import("./pages/CustomersBound.jsx")) },
  { path: "/blog/migration-revenue-killer", title: "Why Data Migration Is Sabotaging SaaS Growth | Rubie", Page: lazy(() => import("./pages/BlogMigrationRevenueKiller.jsx")) },
];
export const ROUTE_SET = new Set(routes.map((r) => r.path));
