// ===== Corporate Images =====
import relianceCover from "@/assets/gallery/corporate/reliance/cover.jpg";
import r1 from "@/assets/gallery/corporate/reliance/1.jpg";
import r2 from "@/assets/gallery/corporate/reliance/2.jpg";
import r3 from "@/assets/gallery/corporate/reliance/3.jpg";

import tataCover from "@/assets/gallery/corporate/tata/cover.jpg";
import t1 from "@/assets/gallery/corporate/tata/1.jpg";
import t2 from "@/assets/gallery/corporate/tata/2.jpg";


// ===== Student Images =====
import svnitCover from "@/assets/gallery/students/svnit/cover.jpg";
import s1 from "@/assets/gallery/students/svnit/1.jpg";
import s2 from "@/assets/gallery/students/svnit/2.jpg";


// ===== Event Images =====
import eventCover from "@/assets/gallery/events/techfest2026/cover.jpg";
import e1 from "@/assets/gallery/events/techfest2026/1.jpg";
import e2 from "@/assets/gallery/events/techfest2026/2.jpg";

export const galleryData = {
  "corporate-training": {
    title: "Corporate Training",

    entities: [
      {
        id: "reliance",

        name: "Reliance Industries",

        cover: relianceCover,

        totalTrainings: 8,

        trainings: [
          {
            id: "ai-manufacturing",

            title: "AI for Manufacturing",

            date: "15 July 2026",

            duration: "3 Days",

            location: "Surat",

            trainer: "SSM LEC",

            participants: 42,

            description:
              "Advanced AI training conducted for Reliance engineers covering Machine Learning, Computer Vision and Industrial AI.",

            images: [
              r1,
              r2,
              r3,
            ],
          },

          {
            id: "power-bi",

            title: "Power BI Advanced",

            date: "12 March 2026",

            duration: "2 Days",

            location: "Jamnagar",

            trainer: "SSM LEC",

            participants: 30,

            description:
              "Power BI dashboard development and DAX training.",

            images: [
              r1,
              r2,
            ],
          },
        ],
      },

      {
        id: "tata",

        name: "Tata Motors",

        cover: tataCover,

        totalTrainings: 5,

        trainings: [
          {
            id: "autocad",

            title: "AutoCAD Electrical",

            date: "10 January 2026",

            duration: "5 Days",

            location: "Pune",

            trainer: "SSM LEC",

            participants: 50,

            description:
              "Electrical drafting and panel design training.",

            images: [
              t1,
              t2,
            ],
          },
        ],
      },
    ],
  },

  "students-training": {
    title: "Students Training",

    entities: [
      {
        id: "svnit",

        name: "SVNIT Surat",

        cover: svnitCover,

        totalTrainings: 4,

        trainings: [
          {
            id: "python-workshop",

            title: "Python Workshop",

            date: "20 June 2026",

            duration: "2 Days",

            trainer: "SSM LEC",

            participants: 120,

            location: "SVNIT",

            description:
              "Hands-on Python programming workshop for engineering students.",

            images: [
              s1,
              s2,
            ],
          },
        ],
      },
    ],
  },

  events: {
    title: "Events",

    entities: [
      {
        id: "techfest-2026",

        name: "Tech Fest 2026",

        cover: eventCover,

        totalTrainings: 1,

        trainings: [
          {
            id: "main-event",

            title: "Annual Tech Fest",

            date: "10 August 2026",

            duration: "1 Day",

            trainer: "SSM LEC",

            participants: 500,

            location: "Surat",

            description:
              "Technology exhibition, coding competition and robotics showcase.",

            images: [
              e1,
              e2,
            ],
          },
        ],
      },
    ],
  },
};