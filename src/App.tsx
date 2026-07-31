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
import Success_Stories from "./pages/Success_Stories.tsx";

import CategoryPage from "./pages/training/CategoryPage.jsx";
import TechnologyPage from "./pages/training/TechnologyPage.jsx";
import TrainingPage from "./pages/training/TrainingPage.jsx";

import ScrollToTop from "./ScrollToTop.jsx";
import GalleryCategory from "./pages/GalleryCategory.js";

import Gallery from "./pages/gallery/Gallery.js";
import EventsPage from "./pages/gallery/Events.jsx"
import SSMLECChatbot from "./components/SSMLECChatbot.tsx"


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

        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<EventsPage/>} />
        <Route path="/training/:category" element={<CategoryPage />} />
        {/* <Route path="/gallery" element={<GalleryCategory />} /> */}
        <Route path="/training/:category/:technology" element={<TechnologyPage />} />
        <Route
          path="/training/:category/:technology/:entityId/:trainingId"
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
      <SSMLECChatbot />
    </main>

    <Footer />
  </div>

  <Toaster position="top-center" richColors />
</ErrorBoundary>  );
}