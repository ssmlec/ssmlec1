import { galleryData } from "@/data/galleryData";

// Unique technologies within a category, each with a representative image + count.
export function getTechnologiesForCategory(category) {
  const data = galleryData[category];
  if (!data) return [];

  const map = new Map();

  data.entities.forEach((entity) => {
    entity.trainings.forEach((training) => {
      (training.technologies || []).forEach((tech) => {
        if (!map.has(tech)) {
          map.set(tech, {
            name: tech,
            image: training.coverImage || entity.cover,
            count: 0,
          });
        }
        map.get(tech).count += 1;
      });
    });
  });

  return Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name));
}

export function techToSlug(tech) {
  return tech.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function findTechBySlug(category, slug) {
  const techs = getTechnologiesForCategory(category);
  return techs.find((t) => techToSlug(t.name) === slug)?.name || null;
}

// Every entity (company/college) + training combo that used a given technology.
export function getTrainingsForTechnology(category, techName) {
  const data = galleryData[category];
  if (!data) return [];

  const results = [];

  data.entities.forEach((entity) => {
    entity.trainings.forEach((training) => {
      if ((training.technologies || []).includes(techName)) {
        results.push({
          entityId: entity.id,
          entityName: entity.name,
          entityLogo: entity.cover,
          city: entity.city,
          trainingId: training.id,
          trainingTitle: training.title,
          date: training.date,
          duration: training.duration,
          location: training.location,
          participants: training.participants,
          coverImage: training.coverImage,
        });
      }
    });
  });

  return results.sort((a, b) => new Date(b.date) - new Date(a.date));
}