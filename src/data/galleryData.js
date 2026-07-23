// ===== Corporate Images =====
import relianceCover from "@/assets/gallery/corporate/reliance/cover.png";
import r1 from "@/assets/gallery/corporate/reliance/1.png";
import r2 from "@/assets/gallery/corporate/reliance/2.png";
import r3 from "@/assets/gallery/corporate/reliance/3.png";

import tataCover from "@/assets/gallery/corporate/tata/cover.png";
import t1 from "@/assets/gallery/corporate/tata/1.png";
import t2 from "@/assets/gallery/corporate/tata/2.png";

// ===== Student Images =====
import svnitCover from "@/assets/gallery/students/svnit/cover.png";
import s1 from "@/assets/gallery/students/svnit/1.png";
import s2 from "@/assets/gallery/students/svnit/2.png";

// ===== Event Images =====
import eventCover from "@/assets/gallery/events/techfest2026/cover.png";
import e1 from "@/assets/gallery/events/techfest2026/1.png";
import e2 from "@/assets/gallery/events/techfest2026/2.png";

export const galleryData = {
  "corporate-training": {
    title: "Corporate Training",

    entities: [
      {
        id: "reliance",
        name: "Reliance Industries",
        cover: relianceCover,

        city: "Surat",
        industry: "Manufacturing",
        totalTrainings: 8,
        totalParticipants: 420,

        trainings: [
          {
            id: "ai-manufacturing",

            title: "AI for Manufacturing",

            coverImage: r1,

            date: "15 July 2026",

            year: 2026,

            duration: "3 Days",

            location: "Surat",

            trainer: "SSM LEC",

            participants: 42,

            technologies: [
              "Artificial Intelligence",
              "Machine Learning",
              "Computer Vision",
              "Predictive Maintenance",
            ],

            description:
              "Advanced AI training conducted for Reliance engineers covering Machine Learning, Computer Vision, Predictive Maintenance and Industrial AI applications.",

            images: [
              r1,
              r2,
              r3,
            ],

            videos: [],

            certificates: [],

            feedback: [
              {
                name: "Rahul Patel",
                designation: "Production Engineer",
                comment:
                  "Excellent practical training with industrial examples.",
              },
            ],
          },

          {
            id: "power-bi",

            title: "Power BI Advanced",

            coverImage: r1,

            date: "12 March 2026",

            year: 2026,

            duration: "2 Days",

            location: "Jamnagar",

            trainer: "SSM LEC",

            participants: 30,

            technologies: [
              "Power BI",
              "Power Query",
              "DAX",
              "Dashboard Design",
            ],

            description:
              "Power BI dashboard development, Power Query, DAX functions and report publishing.",

            images: [
              r1,
              r2,
            ],

            videos: [],

            certificates: [],

            feedback: [],
          },
        ],
      },

      {
        id: "tata",

        name: "Tata Motors",

        cover: tataCover,

        city: "Pune",

        industry: "Automobile",

        totalTrainings: 5,

        totalParticipants: 260,

        trainings: [
          {
            id: "autocad",

            title: "AutoCAD Electrical",

            coverImage: t1,

            date: "10 January 2026",

            year: 2026,

            duration: "5 Days",

            location: "Pune",

            trainer: "SSM LEC",

            participants: 50,

            technologies: [
              "AutoCAD",
              "Electrical Drawing",
              "Panel Design",
              "Single Line Diagram",
            ],

            description:
              "Industrial AutoCAD Electrical training for design engineers.",

            images: [
              t1,
              t2,
            ],

            videos: [],

            certificates: [],

            feedback: [],
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

        city: "Surat",

        totalTrainings: 4,

        totalParticipants: 500,

        trainings: [
          {
            id: "python-workshop",

            title: "Python Workshop",

            coverImage: s1,

            date: "20 June 2026",

            year: 2026,

            duration: "2 Days",

            trainer: "SSM LEC",

            participants: 120,

            location: "SVNIT",

            technologies: [
              "Python",
              "NumPy",
              "Pandas",
              "Matplotlib",
            ],

            description:
              "Hands-on Python programming workshop covering programming fundamentals and data analysis.",

            images: [
              s1,
              s2,
            ],

            videos: [],

            certificates: [],

            feedback: [],
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

            coverImage: e1,

            date: "10 August 2026",

            year: 2026,

            duration: "1 Day",

            trainer: "SSM LEC",

            participants: 500,

            location: "Surat",

            technologies: [
              "AI",
              "Robotics",
              "Coding",
              "Automation",
            ],

            description:
              "Technology exhibition, coding competition, robotics showcase and technical seminars.",

            images: [
              e1,
              e2,
            ],

            videos: [],

            certificates: [],

            feedback: [],
          },
        ],
      },
    ],
  },
};