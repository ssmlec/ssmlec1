import { Link, useParams } from "react-router-dom";
import { PageHero } from "@/components/page-hero";
import { galleryData } from "@/data/galleryData";

export default function CompanyPage() {
  const { category, company } = useParams();

  const categoryData = galleryData[category];

  if (!categoryData) {
    return <h1 className="text-center py-20">Category Not Found</h1>;
  }

  const entity = categoryData.entities.find(
    (item) => item.id === company
  );

  if (!entity) {
    return <h1 className="text-center py-20">Company Not Found</h1>;
  }

  // Latest first
  const trainings = [...entity.trainings].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <>
      <PageHero
        title={entity.name}
        subtitle={`${entity.totalTrainings} Trainings Conducted`}
        crumbs={[
          {
            label: "Gallery",
            href: "/gallery",
          },
          {
            label: categoryData.title,
            href: `/gallery/${category}`,
          },
          {
            label: entity.name,
          },
        ]}
      />

      <section className="py-20 bg-gray-50">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8">

            {trainings.map((training) => (

              <Link
                key={training.id}
                to={`/gallery/${category}/${company}/${training.id}`}
              >

                <div className="group rounded-3xl bg-white shadow-lg overflow-hidden hover:shadow-2xl transition">

                  <div className="grid md:grid-cols-3">

                    <img
                      src={training.images[0]}
                      alt={training.title}
                      className="h-72 w-full object-cover"
                    />

                    <div className="md:col-span-2 p-8">

                      <h2 className="text-3xl font-bold">
                        {training.title}
                      </h2>

                      <p className="mt-3 text-gray-500">
                        {training.date}
                      </p>

                      <p className="mt-5 text-gray-700">
                        {training.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-3">

                        <span className="rounded-full bg-blue-100 px-4 py-2 text-blue-700">
                          📍 {training.location}
                        </span>

                        <span className="rounded-full bg-green-100 px-4 py-2 text-green-700">
                          👥 {training.participants} Participants
                        </span>

                        <span className="rounded-full bg-yellow-100 px-4 py-2 text-yellow-700">
                          📅 {training.duration}
                        </span>

                      </div>

                      <button className="mt-8 rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition">

                        View Gallery →

                      </button>

                    </div>

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