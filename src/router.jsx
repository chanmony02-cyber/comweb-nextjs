// src/router.jsx
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import { ROUTES } from "@/config/routes";

const Home = lazy(() => import("@/pages/Home"));
const AboutPage = lazy(() => import("@/pages/About"));
const OurProductsPage = lazy(() => import("@/pages/OurProducts"));
const SoftwareApplicationPage = lazy(
  () => import("@/pages/SoftwareApplication"),
);
const ProductDetail = lazy(() => import("@/pages/ProductDetail"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const ContactPage = lazy(() => import("@/pages/Contact"));
const AllProjectsPage = lazy(() => import("@/pages/AllProjects"));
const ProjectDetailPage = lazy(() => import("@/pages/ProjectDetail"));
const DistributionGridPage = lazy(
  () => import("@/pages/Industries/DistributionGrid"),
);
const CityInfrastructurePage = lazy(
  () => import("@/pages/Industries/CityInfrastructure"),
);
const AgriculturePage = lazy(() => import("@/pages/Industries/Agriculture"));
const ServicesPage = lazy(() => import("@/pages/Services"));
const ConsultantsPage = lazy(() =>
  import("@/pages/ServiceDetail").then((m) => ({ default: m.ConsultantsPage })),
);
const MaintenancePage = lazy(() =>
  import("@/pages/ServiceDetail").then((m) => ({ default: m.MaintenancePage })),
);
const InspectionsPage = lazy(() =>
  import("@/pages/ServiceDetail").then((m) => ({ default: m.InspectionsPage })),
);
const NewsEventsPage = lazy(() =>
  import("@/pages/NewsEvents").then((m) => ({ default: m.NewsEventsPage })),
);
const NewsDetailPage = lazy(() =>
  import("@/pages/NewsEvents").then((m) => ({ default: m.NewsDetailPage })),
);
const CareerPage = lazy(() => import("@/pages/Career"));
const CareerDetailPage = lazy(() => import("@/pages/CareerDetail"));

const withMainLayout = (page) => <MainLayout>{page}</MainLayout>;

const AppRouter = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path={ROUTES.HOME} element={withMainLayout(<Home />)} />
        <Route path={ROUTES.HOMEPAGE} element={withMainLayout(<Home />)} />
        <Route path={ROUTES.ABOUT} element={withMainLayout(<AboutPage />)} />
        <Route
          path={ROUTES.OUR_PRODUCTS}
          element={withMainLayout(<OurProductsPage />)}
        />
        <Route
          path={ROUTES.SOFTWARE_APPLICATION}
          element={withMainLayout(<SoftwareApplicationPage />)}
        />
        <Route
          path={ROUTES.PRODUCT_DETAIL}
          element={withMainLayout(<ProductDetail />)}
        />
        <Route
          path={ROUTES.ALL_PROJECTS}
          element={withMainLayout(<AllProjectsPage />)}
        />
        <Route
          path={ROUTES.PROJECT_DETAIL}
          element={withMainLayout(<ProjectDetailPage />)}
        />
        <Route path={ROUTES.CONTACT} element={withMainLayout(<ContactPage />)} />
        <Route
          path={ROUTES.DISTRIBUTION_GRID}
          element={withMainLayout(<DistributionGridPage />)}
        />
        <Route
          path={ROUTES.CITY_INFRASTRUCTURE}
          element={withMainLayout(<CityInfrastructurePage />)}
        />
        <Route
          path={ROUTES.AGRICULTURE}
          element={withMainLayout(<AgriculturePage />)}
        />
        <Route path={ROUTES.SERVICES} element={withMainLayout(<ServicesPage />)} />
        <Route
          path={ROUTES.CONSULTANTS}
          element={withMainLayout(<ConsultantsPage />)}
        />
        <Route
          path={ROUTES.MAINTENANCE}
          element={withMainLayout(<MaintenancePage />)}
        />
        <Route
          path={ROUTES.INSPECTIONS}
          element={withMainLayout(<InspectionsPage />)}
        />
        <Route path={ROUTES.NEWS} element={withMainLayout(<NewsEventsPage />)} />
        <Route
          path={ROUTES.NEWS_DETAIL}
          element={withMainLayout(<NewsDetailPage />)}
        />
        <Route path={ROUTES.CAREER} element={withMainLayout(<CareerPage />)} />
        <Route
          path={ROUTES.CAREER_DETAIL}
          element={withMainLayout(<CareerDetailPage />)}
        />
        <Route path={ROUTES.NOT_FOUND} element={withMainLayout(<NotFound />)} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
