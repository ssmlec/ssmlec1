import { Link, useParams } from "react-router-dom";
import { galleryData } from "@/data/galleryData";
import { findTechBySlug, getTrainingsForTechnology } from "@/data/galleryHelpers";

export default function TechnologyPage() {
  const { category, technology } = useParams();
  const data = galleryData[category];
  const techName = findTechBySlug(category, technology);

  if (!data || !techName) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <h1 className="text-4xl font-bold">Technology Not Found</h1>
      </div>
    );
  }

  const trainings = getTrainingsForTechnology(category, techName);
  const isStudents = category === "students-training";
  const entityLabel = isStudents ? "college" : "company";

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">{techName}</h1>
          {/* <p className="mt-2 text-gray-500">
            {trainings.length} {entityLabel}
            {trainings.length === 1 ? "" : "s"} {isStudents ? "have" : "has"} trained on {techName}
          </p> */}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {trainings.map((t) => (
            // <Link
            //   key={`${t.entityId}-${t.trainingId}`}
            //   to={`/gallery/${category}/${technology}/${t.entityId}/${t.trainingId}`}
            //   className="group"
            // >
              <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="flex h-24 items-center justify-center">
                  <img
                    src={t.entityLogo}
                    alt={t.entityName}
                    className="max-h-20 max-w-full object-contain"
                  />
                </div>

                <div className="my-4 border-t"></div>

                <h3 className="text-center text-lg font-bold text-gray-800">{t.entityName}</h3>
                {/* <p className="mt-1 text-center text-sm text-gray-500">{t.trainingTitle}</p> */}

                {/* <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-600">
                  <span>📅 {t.date}</span>
                </div>
                {t.location && (
                  <p className="mt-1 text-center text-xs text-gray-400">{t.location}</p>
                )} */}

                {/* <div className="mt-6 flex justify-center">
                  <span className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition-all duration-300 group-hover:bg-blue-700">
                    View Gallery →
                  </span>
                </div> */}

                <div className="absolute inset-0 rounded-3xl border-2 border-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
            // </Link>
          ))}
        </div>
      </div>
    </section>
  );
}