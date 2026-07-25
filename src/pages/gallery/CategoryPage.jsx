import { Link, useParams } from "react-router-dom";
import { PageHero } from "@/components/page-hero";
import { galleryData } from "@/data/galleryData";

export default function CategoryPage() {
  const { category } = useParams();

  const data = galleryData[category];

  if (!data) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <h1 className="text-4xl font-bold">Category Not Found</h1>
      </div>
    );
  }

  return (
    <>
      {/* <PageHero
        title={data.title}
        subtitle={`Explore our ${data.title}`}
        crumbs={[
          { label: "Gallery", href: "/gallery" },
          { label: data.title },
        ]}
      /> */}

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">

         

          {/* Logo Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {data.entities.map((entity) => (
              <Link
                key={entity.id}
                to={`/gallery/${category}/${entity.id}`}
                className="group"
              >
                <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                  {/* Logo */}
                  <div className="flex h-36 items-center justify-center">

                    <img
                      src={entity.logo || entity.cover}
                      alt={entity.name}
                      className="max-h-24 max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />

                  </div>

                  {/* Divider */}
                  <div className="my-6 border-t"></div>

                  {/* Name */}
                  <h3 className="text-center text-xl font-bold text-gray-800">
                    {entity.name}
                  </h3>

                  {/* Training Count */}
                  {/* <p className="mt-2 text-center text-gray-500">
                    {entity.totalTrainings}{" "}
                    {entity.totalTrainings === 1
                      ? "Training"
                      : "Trainings"}
                  </p> */}

                  {/* Button */}
                  <div className="mt-8 flex justify-center">

                    <span className="rounded-full bg-blue-600 px-6 py-2 text-sm font-semibold text-white transition-all duration-300 group-hover:bg-blue-700">
                      View Gallery →
                    </span>

                  </div>

                  {/* Hover Border */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>
    </>
  );
}