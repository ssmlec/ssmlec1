import { useParams } from "react-router-dom";
import { PageHero } from "@/components/page-hero";
import { galleryData } from "@/data/galleryData";

export default function TrainingPage() {

    const { category, company, training } = useParams();

    const categoryData = galleryData[category];

    const entity = categoryData?.entities.find(
        item => item.id === company
    );

    const trainingData = entity?.trainings.find(
        item => item.id === training
    );

    if (!trainingData) {
        return (
            <div className="py-24 text-center">
                Training Not Found
            </div>
        );
    }

    return (
        <>

            <PageHero
                title={trainingData.title}
                subtitle={entity.name}
                crumbs={[
                    { label: "Gallery", href: "/gallery" },
                    {
                        label: categoryData.title,
                        href: `/gallery/${category}`
                    },
                    {
                        label: entity.name,
                        href: `/gallery/${category}/${company}`
                    },
                    {
                        label: trainingData.title
                    }
                ]}
            />

            <section className="py-20">

                <div className="mx-auto max-w-7xl px-6">

                    <img
                        src={trainingData.images[0]}
                        className="h-[500px] w-full rounded-3xl object-cover"
                    />

                    <div className="mt-12 grid gap-8 lg:grid-cols-3">

                        <div className="lg:col-span-2">

                            <h2 className="text-4xl font-bold">

                                About Training

                            </h2>

                            <p className="mt-6 text-lg leading-8 text-gray-600">

                                {trainingData.description}

                            </p>

                        </div>

                        <div className="rounded-3xl bg-gray-100 p-8">

                            <h3 className="text-2xl font-bold">

                                Training Details

                            </h3>

                            <div className="mt-6 space-y-4">

                                <p>
                                    <strong>Company:</strong>
                                    {" "}
                                    {entity.name}
                                </p>

                                <p>
                                    <strong>Date:</strong>
                                    {" "}
                                    {trainingData.date}
                                </p>

                                <p>
                                    <strong>Duration:</strong>
                                    {" "}
                                    {trainingData.duration}
                                </p>

                                <p>
                                    <strong>Location:</strong>
                                    {" "}
                                    {trainingData.location}
                                </p>

                                <p>
                                    <strong>Trainer:</strong>
                                    {" "}
                                    {trainingData.trainer}
                                </p>

                                <p>
                                    <strong>Participants:</strong>
                                    {" "}
                                    {trainingData.participants}
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="mt-20">

                        <h2 className="text-4xl font-bold">

                            Technologies Covered

                        </h2>

                        <div className="mt-8 flex flex-wrap gap-4">

                            {trainingData.technologies.map((tech) => (

                                <span
                                    key={tech}
                                    className="rounded-full bg-blue-100 px-5 py-3 text-blue-700"
                                >

                                    {tech}

                                </span>

                            ))}

                        </div>

                    </div>

                    <div className="mt-20">

                        <h2 className="text-4xl font-bold">

                            Gallery

                        </h2>

                        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                            {trainingData.images.map((img, index) => (

                                <img
                                    key={index}
                                    src={img}
                                    className="h-80 w-full rounded-2xl object-cover transition hover:scale-105"
                                />

                            ))}

                        </div>

                    </div>

                </div>

            </section>

        </>
    );

}