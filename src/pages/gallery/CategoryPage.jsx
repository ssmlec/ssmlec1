import { Link, useParams } from "react-router-dom";
import { galleryData } from "@/data/galleryData";
import { getTechnologiesForCategory, techToSlug } from "@/data/galleryHelpers";

export default function CategoryPage() {
  const { category } = useParams();
  const data = galleryData[category];
  const technologies = getTechnologiesForCategory(category);

  if (!data) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <h1 className="text-4xl font-bold">Category Not Found</h1>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">{data.title}</h1>
          <p className="mt-2 text-gray-500">Choose a technology to see where we've delivered training</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {technologies.map((tech) => (
            <Link
              key={tech.name}
              to={`/gallery/${category}/${techToSlug(tech.name)}`}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="flex h-36 items-center justify-center">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="max-h-24 rounded max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="my-6 border-t"></div>

                <h3 className="text-center text-xl font-bold text-gray-800">{tech.name}</h3>
                {/* <p className="mt-2 text-center text-gray-500">
                  {tech.count} {tech.count === 1 ? "Training" : "Trainings"}
                </p> */}
{/* 
                <div className="mt-8 flex justify-center">
                  <span className="rounded-full bg-blue-600 px-6 py-2 text-sm font-semibold text-white transition-all duration-300 group-hover:bg-blue-700">
                    View Trainings →
                  </span>
                </div> */}

                <div className="absolute inset-0 rounded-3xl border-2 border-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}