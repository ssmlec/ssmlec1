import { Routes, Route } from "react-router-dom";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { ErrorBoundary } from "@/components/error-boundary";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Courses from "@/pages/Courses";
import CourseDetail from "@/pages/CourseDetail";
import Placements from "@/pages/Placements";
import Blog from "@/pages/Blog";
import Faqs from "@/pages/Faqs";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import NotFound from "@/pages/NotFound";
import Success_Stories from "./pages/Success_Stories";

import CategoryPage from "./pages/gallery/CategoryPage.jsx";
import TechnologyPage from "./pages/gallery/TechnologyPage.jsx";
import TrainingPage from "./pages/gallery/TrainingPage.jsx";

import ScrollToTop from "./ScrollToTop.jsx";

export default function App() {
  return (
   <ErrorBoundary>
  <ScrollToTop />

  <div className="flex min-h-screen flex-col">
    <Navbar />

    <main className="flex-1">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:slug" element={<CourseDetail />} />
        <Route path="/placements" element={<Placements />} />

        <Route path="/gallery/:category" element={<CategoryPage />} />
        <Route path="/gallery/:category/:technology" element={<TechnologyPage />} />
        <Route
          path="/gallery/:category/:technology/:entityId/:trainingId"
          element={<TrainingPage />}
        />

        <Route path="/blog" element={<Blog />} />
        <Route path="/Success_Stories" element={<Success_Stories />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>

    <Footer />
  </div>

  <Toaster position="top-center" richColors />
</ErrorBoundary>  );
}