import { Link, useParams } from "react-router-dom";
import { PageHero } from "@/components/page-hero";
import { galleryData } from "@/data/galleryData";

export default function CategoryPage() {
  const { category } = useParams();

  const data = galleryData[category];

  if (!data) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-4xl font-bold">Category Not Found</h1>
      </div>
    );
  }

  return (
    <>
      <PageHero
        title={data.title}
        subtitle={`Explore all ${data.title}`}
        crumbs={[
          { label: "Gallery", href: "/gallery" },
          { label: data.title },
        ]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {data.entities.map((entity) => (

              <Link
                key={entity.id}
                to={`/gallery/${category}/${entity.id}`}
              >
                <div className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                  <div className="overflow-hidden">

                    <img
                      src={entity.cover}
                      alt={entity.name}
                      className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                    />

                  </div>

                  <div className="p-6">

                    <h2 className="text-2xl font-bold">
                      {entity.name}
                    </h2>

                    <p className="mt-2 text-gray-500">
                      {entity.totalTrainings} Trainings
                    </p>

                    <button className="mt-6 rounded-xl bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
                      View Trainings →
                    </button>

                  </div>

                </div>
              </Link>

            ))}

          </div>

        </div>
      </section>
    </>
  );
}