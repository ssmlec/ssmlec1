import { useParams } from "react-router-dom";
import { PageHero } from "@/components/page-hero";
import { galleryData } from "../data/galleryData.js";

export default function GalleryCategory() {
  const { category } = useParams();

  const gallery = galleryData[category];

  if (!gallery) {
    return (
      <div className="py-24 text-center text-4xl font-bold">
        Gallery Not Found
      </div>
    );
  }

  return (
    <>
      <PageHero
        title={gallery.title}
        subtitle={gallery.description}
        crumbs={[
          { label: "Gallery", href: "/gallery" },
          { label: gallery.title },
        ]}
      />

      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {gallery.images.map((item) => (

              <div
                key={item.id}
                className="group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition duration-300"
              >

                <div className="overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                </div>

                <div className="p-5">

                  <h2 className="text-xl font-bold">
                    {item.title}
                  </h2>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>
    </>
  );
}