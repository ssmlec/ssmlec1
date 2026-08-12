import { useEffect, useMemo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Search,
  Building2,
  GraduationCap,
  CalendarDays,
  LayoutGrid,
} from "lucide-react";
import { cn } from "@/lib/utils";

import malibavisit from "../../assets/event/malibavisit.jpg"
import ppaiml from "../../assets/event/ppaiml.jpg"
import ppdevops from "../../assets/event/ppdevops.jpg"

/**
 * ---------------------------------------------------------------------------
 * GALLERY DATA
 * Replace `src` with real asset paths (e.g. "/images/gallery/corp-01.jpg").
 * `span` controls the masonry rhythm — "tall" images get more vertical room.
 * ---------------------------------------------------------------------------
 */
type GalleryCategory = "corporate-training" | "students-training" | "events" | "placement-drive";

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: GalleryCategory;
  span: "short" | "medium" | "tall";
}

const categoryMeta: Record< GalleryCategory,{ label: string; icon: typeof Building2 }> = {
  "corporate-training": { label: "Corporate Training", icon: Building2 },
  "students-training": { label: "Students Training", icon: GraduationCap },
  "events": { label: "Events", icon: CalendarDays },
  "placement-drive": { label: "Placement Drive", icon: CalendarDays },
};

import st1 from "../../assets/event/s1.png"
import ct1 from "../../assets/event/e1.jpg"
import ct2 from "../../assets/event/e2.jpg"

import ct3 from "../../assets/event/e4.jpg"

// Placeholder images — swap `src` for real photography before shipping.
const galleryImages: GalleryImage[] = [
  { id: "ct-01", src: "https://static.wixstatic.com/media/cdb4cb_2161f5ad1be3418493d8000cfced146b~mv2.jpg/v1/fill/w_442,h_334,al_c,q_80,enc_avif,quality_auto/Image-place-holder.jpg", title: "Reliance Training at SSM LEC", category: "corporate-training", span: "tall" },
  { id: "ct-02", src: "https://static.wixstatic.com/media/cdb4cb_e88f805236f64f28be4c1e83e6cd08ad~mv2.jpg/v1/fill/w_442,h_334,al_c,q_80,enc_avif,quality_auto/Image-place-holder.jpg", title: "OMI Training at Schneider Electric, Navi Mumbai", category: "corporate-training", span: "short" },
  { id: "ct-03", src: ct1, title: "Onsite Training of AVEVA Batch Management at MORIMATSU, Navi Mumbai", category: "corporate-training", span: "tall" },
  { id: "ct-04", src:ct2, title: "Onsite Training of AVEVA System Platform at Reliance JioBP Pvt.Ltd. , Navi Mumbai", category: "corporate-training", span: "short" },
  { id: "ct-05", src:"https://static.wixstatic.com/media/cdb4cb_55d6a37c562c453ba47fa6c4ccea2060~mv2.jpg/v1/fill/w_1280,h_758,al_c,q_85,enc_avif,quality_auto/cdb4cb_55d6a37c562c453ba47fa6c4ccea2060~mv2.jpg", title: "Onsite Training of AVEVA System Platform at BridgeStone India Pvt. Ltd., Pune", category: "corporate-training", span: "short" },
  { id: "ct-06", src:ct3, title: "Training of AVEVA System Platform to Mahanagar Gas Limited(MGL), Mumbai", category: "corporate-training", span: "short" },

  // { id: "ct-05", src: "https://picsum.photos/seed/corp05/800/1000", title: "Executive Coaching", category: "placement-drive", span: "tall" },
  { id: "st-01", src: "https://static.wixstatic.com/media/cdb4cb_88df014a6eee4872adb2929a22afdaf9~mv2.jpg/v1/fill/w_442,h_334,al_c,q_80,enc_avif,quality_auto/Image-place-holder.jpg", title: "Workshop on Coding Skills and Programming Logic at P P Savani University", category: "students-training", span: "tall" },
  { id: "st-02", src: "https://static.wixstatic.com/media/cdb4cb_29406d7b8fa4474aba048803caa7cdc6~mv2.jpg/v1/fill/w_442,h_334,al_c,q_80,enc_avif,quality_auto/Image-place-holder.jpg", title: "Workshop on AutoCAD: Hands on Workshop at GEC, Surat", category: "students-training", span: "short" },
  { id: "st-03", src: "https://static.wixstatic.com/media/cdb4cb_8bc3386a64bc49e18206b56683066498~mv2.png/v1/fill/w_442,h_334,al_c,q_85,enc_avif,quality_auto/Image-place-holder.png", title: "Configuration of Hadoop and Execution of MapReduce Programming at R. N. G Patel", category: "students-training", span: "medium" },
  { id: "st-06", src: "https://static.wixstatic.com/media/cdb4cb_8d3a67e0e8624dd3b72d55282e17db95~mv2.jpg/v1/fill/w_442,h_334,al_c,q_80,enc_avif,quality_auto/Image-place-holder.jpg", title: "Workshop on IoT: Hands on Workshop at GEC, Surat", category: "students-training", span: "short" },
  { id: "ev-11", src: "https://static.wixstatic.com/media/cdb4cb_7e6bcbb2a64c44179db4890a41432eca~mv2.jpg/v1/fill/w_442,h_334,al_c,q_80,enc_avif,quality_auto/Image-place-holder.jpg", title: "MOU signed with C.K Pithawalla College of Engineering & Technology", category: "events", span: "tall" },
  { id: "st-07", src: st1, title: "Summer Internship on Automation: Hands on Workshop at ngpatel", category: "students-training", span: "short" },
    { id: "st-08", src: ppaiml, title: "Workshop Conducted at PPSavani on AI & ML", category: "events", span: "medium" },
  { id: "st-09", src: ppdevops, title: "Workshop Conducted at PPSavani on Devops and Agile Methodology", category: "events", span: "tall" },



  { id: "st-04", src: "https://www.ssmlec.com/assets/about-page-4XwIqAgf.jpeg", title: "Expert Lecture", category: "students-training", span: "medium" },
  { id: "st-05", src: "https://static.wixstatic.com/media/cdb4cb_1958537dcded4c19b55bc0eddcbbd76b~mv2.png/v1/fill/w_442,h_334,al_c,q_85,enc_avif,quality_auto/Image-place-holder.png", title: "3 Months in campus final year project training on PHP at Bilimora ITI", category: "students-training", span: "short" },
  { id: "ev-01", src: "https://static.wixstatic.com/media/cdb4cb_39b18f3dee184913900ebc820ce49360~mv2.jpg/v1/fill/w_442,h_334,al_c,q_80,enc_avif,quality_auto/Image-place-holder.jpg", title: "Valedictory Ceremony of SSM LEC - Batch 2024-25", category: "events", span: "tall" },
  { id: "ev-02", src: "https://static.wixstatic.com/media/cdb4cb_8fbe365100cf437ea9a5330752e27faa~mv2.jpg/v1/fill/w_442,h_334,al_c,q_80,enc_avif,quality_auto/Image-place-holder.jpg", title: "MOU signed with NG Patel Polytechnic, Bardoli", category: "events", span: "medium" },
  { id: "ev-03", src: "https://static.wixstatic.com/media/cdb4cb_a933d49adb454a528e18b343c53620af~mv2.jpg/v1/fill/w_442,h_334,al_c,q_80,enc_avif,quality_auto/Image-place-holder.jpg", title: "Invited at PP Savani University to attend inauguration of Career & Professional Development Centre as a Guest.", category: "events", span: "short" },
  { id: "ev-04", src: "https://static.wixstatic.com/media/cdb4cb_62833875558944168211a77189562768~mv2.png/v1/fill/w_442,h_334,al_c,q_85,enc_avif,quality_auto/Image-place-holder.png", title: "MOU signed with Kaushalya The skill University", category: "events", span: "medium" },
  { id: "ev-05", src: "https://static.wixstatic.com/media/cdb4cb_cf593f8802174dc3a66cad59bcfc6b6c~mv2.jpg/v1/fill/w_442,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-place-holder.jpg", title: "MOU signed with P P Savani University", category: "events", span: "medium" },
  { id: "ev-06", src: "https://static.wixstatic.com/media/cdb4cb_9550f7ef47f440f4a21d404ce04c0cbb~mv2.jpg/v1/fill/w_442,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-place-holder.jpg", title: "MOU signed with Bhagwan Mahavir Polytechnic, Bhagwan Mahavir University", category: "events", span: "medium" },
    { id: "ev-07", src: "https://static.wixstatic.com/media/cdb4cb_b4cdd0fba5ab4cac800b182958cd5a53~mv2.png/v1/fill/w_442,h_334,al_c,q_85,enc_avif,quality_auto/Image-place-holder.png", title: "Placement Drive at VNSGU", category: "events", span: "medium" },
  { id: "ev-08", src: "https://static.wixstatic.com/media/cdb4cb_50ce27873d6f40c69c2f0deb06892d56~mv2.jpg/v1/fill/w_442,h_334,al_c,q_80,enc_avif,quality_auto/Image-place-holder.jpg", title: "Placement Drive at P P Savani University", category: "events", span: "tall" },
  { id: "ev-09", src: "https://static.wixstatic.com/media/cdb4cb_ef8107984d834900b50dad471a5c7bde~mv2.png/v1/fill/w_442,h_334,al_c,q_85,enc_avif,quality_auto/Image-place-holder.png", title: "Placement Drive at Vidyadeep University", category: "events", span: "short" },
  { id: "ev-10", src: "https://static.wixstatic.com/media/cdb4cb_b94df3c566c64d3c9eced02b7ea25243~mv2.jpg/v1/fill/w_442,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-place-holder.jpg", title: "MOU signed with Uka Tarsadia University(UTU)", category: "events", span: "tall" },
  { id: "ev-12", src: malibavisit, title: "Industrial Visit Conducted at SSM LEC for Computer Science Students from Diwaliba Polytechnic College, Mahuva", category: "events", span: "short" },

];

const spanClass: Record<GalleryImage["span"], string> = {
  short: "row-span-3",
  medium: "row-span-4",
  tall: "row-span-5",
};

type FilterKey = "all" | GalleryCategory;

export function GalleryPage() {
  const [filter, setFilter] = useState<FilterKey>("all");
  const [query, setQuery] = useState("");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    return galleryImages.filter((img) => {
      const matchesCategory = filter === "all" || img.category === filter;
      const matchesQuery =
        query.trim() === "" ||
        img.title.toLowerCase().includes(query.trim().toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [filter, query]);

  const openLightbox = useCallback((id: string) => {
    const idx = filtered.findIndex((img) => img.id === id);
    if (idx !== -1) setLightboxIndex(idx);
  }, [filtered]);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % filtered.length
    );
  }, [filtered.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + filtered.length) % filtered.length
    );
  }, [filtered.length]);

  // Keyboard navigation for the lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  const activeImage = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  const filterOptions: { key: FilterKey; label: string; icon: typeof LayoutGrid }[] = [
    { key: "all", label: "All", icon: LayoutGrid },
    { key: "corporate-training", label: categoryMeta["corporate-training"].label, icon: categoryMeta["corporate-training"].icon },
    { key: "students-training", label: categoryMeta["students-training"].label, icon: categoryMeta["students-training"].icon },
    { key: "events", label: categoryMeta.events.label, icon: categoryMeta.events.icon },
  ];

  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-blue-600">
            Moments Worth Remembering
          </p>
          <h1 className="text-3xl font-extrabold text-blue-900 sm:text-4xl">
            Gallery
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-gray-600 sm:text-base">
            A look inside our corporate training sessions, student programs, and events.
          </p>
        </div>

        {/* Controls: search + filter pills */}
        <div className="mb-8 flex flex-col items-center gap-4">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title..."
              className="w-full rounded-full border border-blue-100 bg-blue-50/50 py-2.5 pl-10 pr-4 text-sm text-blue-900 placeholder:text-gray-400 outline-none transition-colors focus:border-blue-300 focus:bg-white"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {filterOptions.map(({ key, label, icon: Icon }) => {
              const isActive = filter === key;
              return (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={cn(
                    "flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
                    isActive
                      ? "bg-blue-900 text-white shadow-md"
                      : "bg-blue-50 text-blue-900 hover:bg-blue-100"
                  )}
                >
                  <Icon className="size-3.5" />
                  {label}
                </button>
              );
            })}
          </div>

          <p className="text-xs text-gray-400">
            {filtered.length} {filtered.length === 1 ? "photo" : "photos"}
          </p>
        </div>

        {/* Masonry grid */}
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-2 [grid-auto-rows:60px] gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
            >
              {filtered.map((img, idx) => {
                const Icon = categoryMeta[img.category].icon;
                return (
                  <motion.button
                    layout
                    key={img.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.25, delay: idx * 0.02 }}
                    onClick={() => openLightbox(img.id)}
                    className={cn(
                      "group relative overflow-hidden rounded-2xl bg-blue-50 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
                      spanClass[img.span]
                    )}
                  >
                    <img
                      src={img.src}
                      alt={img.title}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/0 to-black/0 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-blue-200">
                        <Icon className="size-3" />
                        {categoryMeta[img.category].label}
                      </span>
                      <span className="text-sm font-semibold text-white">
                        {img.title}
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center text-sm text-gray-400"
            >
              No photos match "{query}". Try a different search or filter.
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            >
              <X className="size-5" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 sm:left-6"
            >
              <ChevronLeft className="size-6" />
            </button>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 sm:right-6"
            >
              <ChevronRight className="size-6" />
            </button>

            {/* Image */}
            <motion.div
              key={activeImage.id}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="flex max-h-[85vh] max-w-3xl flex-col items-center"
            >
              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="max-h-[70vh] rounded-xl object-contain shadow-2xl"
              />
              <div className="mt-4 flex flex-col items-center gap-1 text-center">
                <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-blue-300">
                  {(() => {
                    const Icon = categoryMeta[activeImage.category].icon;
                    return <Icon className="size-3.5" />;
                  })()}
                  {categoryMeta[activeImage.category].label}
                </span>
                <span className="text-base font-semibold text-white">
                  {activeImage.title}
                </span>
                <span className="text-xs text-white/50">
                  {(lightboxIndex ?? 0) + 1} / {filtered.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default GalleryPage;
