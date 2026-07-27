import avevaworktask from "../assets/aveva/worktask.jpg"



// ===== Corporate Images =====
import relianceCover from "../assets/maquee _logos/ril.png";
import r1 from "@/assets/gallery/corporate/reliance/1.png";
import r2 from "@/assets/gallery/corporate/reliance/2.png";
import r3 from "@/assets/gallery/corporate/reliance/3.png";

import morimatsuCover from "../assets/maquee _logos/tcs.png";
import mor1 from "@/assets/gallery/corporate/reliance/1.png";
import mor2 from "@/assets/gallery/corporate/reliance/1.png";
import mor3 from "@/assets/gallery/corporate/reliance/1.png";

import hitachiCover from "../assets/maquee _logos/tcs.png";
import hitachi1 from "@/assets/gallery/corporate/reliance/1.png";
import hitachi2 from "@/assets/gallery/corporate/reliance/1.png";
import hitachi3 from "@/assets/gallery/corporate/reliance/1.png";

import optimaCover from "../assets/gallery/corporate/optima/cover.png";
import optima1 from "@/assets/gallery/corporate/optima/1.png";
import optima2 from "@/assets/gallery/corporate/optima/2.png";
import optima3 from "@/assets/gallery/corporate/optima/3.png";


import tcsCover from "../assets/gallery/corporate/tcs/cover.png";
import tcs1 from "@/assets/gallery/corporate/tcs/1.png";
import tcs2 from "@/assets/gallery/corporate/tcs/2.png";
import tcs3 from "@/assets/gallery/corporate/tcs/3.png";

import schneiderCover from "../assets/gallery/corporate/schneider/1.png";
import schneider1 from "@/assets/gallery/corporate/schneider/1.png";
import schneider2 from "@/assets/gallery/corporate/schneider/2.png";
import schneider3 from "@/assets/gallery/corporate/schneider/3.png";

import ltimindtreeCover from "../assets/gallery/corporate/lnt/cover.png";
import ltimindtree1 from "@/assets/gallery/corporate/lnt/1.png";
import ltimindtree2 from "@/assets/gallery/corporate/lnt/2.png";
import ltimindtree3 from "@/assets/gallery/corporate/lnt/3.png";



// import reliance1Cover from "../assets/maquee _logos/ril.png";
import reliance1 from "@/assets/gallery/corporate/reliance/1.png";
import reliance2 from "@/assets/gallery/corporate/reliance/2.png";
import reliance3 from "@/assets/gallery/corporate/reliance/3.png";

import safetronicsCover from "../assets/maquee _logos/safe_tronics.png";
import safetronics1 from "@/assets/gallery/corporate/safe_tronics/1.png";
import safetronics2 from "@/assets/gallery/corporate/safe_tronics/2.png";
import safetronics3 from "@/assets/gallery/corporate/safe_tronics/3.png";

import merckCover from "../assets/maquee _logos/Merck.webp";
import merck1 from "@/assets/gallery/corporate/merck/1.png";
import merck2 from "@/assets/gallery/corporate/merck/2.png";
import merck3 from "@/assets/gallery/corporate/merck/3.png";

import aztecCover from "../assets/maquee _logos/aztech.jpg";
import aztec1 from "@/assets/gallery/corporate/aztec/1.png";
import aztec2 from "@/assets/gallery/corporate/aztec/2.png";
import aztec3 from "@/assets/gallery/corporate/aztec/3.png";

import mbControlCover from "../assets/maquee _logos/mb.jpg";
import mbcontrol1 from "@/assets/gallery/corporate/mb_control/1.png";
import mbcontrol2 from "@/assets/gallery/corporate/mb_control/2.png";
import mbcontrol3 from "@/assets/gallery/corporate/mb_control/3.png";



// ===== Student Images =====
import svnitCover from "@/assets/gallery/students/svnit/cover.png";
import svnit1 from "@/assets/gallery/students/svnit/1.png";
import svnit2 from "@/assets/gallery/students/svnit/2.png";
import svnit3 from "@/assets/gallery/students/svnit/2.png";

import pdeu1  from "@/assets/gallery/students/svnit/cover.png";
import pdeu2 from "@/assets/gallery/students/svnit/1.png";
import pdeu3 from "@/assets/gallery/students/svnit/2.png";

import nirma1  from "@/assets/gallery/students/svnit/cover.png";
import nirma2 from "@/assets/gallery/students/svnit/1.png";
import nirma3 from "@/assets/gallery/students/svnit/2.png";

import charusat1   from "@/assets/gallery/students/svnit/cover.png";
import charusat2  from "@/assets/gallery/students/svnit/1.png";
import charusat3  from "@/assets/gallery/students/svnit/2.png";

import ddu1   from "@/assets/gallery/students/svnit/cover.png";
import ddu2 from "@/assets/gallery/students/svnit/1.png";
import ddu3  from "@/assets/gallery/students/svnit/2.png";

import ganpat1   from "@/assets/gallery/students/svnit/cover.png";
import ganpat2 from "@/assets/gallery/students/svnit/1.png";
import ganpat3  from "@/assets/gallery/students/svnit/2.png";



// ===== Event Images =====
import eventCover from "@/assets/gallery/events/techfest2026/cover.png";
import e1 from "@/assets/gallery/events/techfest2026/1.png";
import e2 from "@/assets/gallery/events/techfest2026/2.png";

export const galleryData = {
    "corporate-training": {
        title: "Corporate Training",

        entities: [
            {
                id: "reliance-corporate-park",

                name: "Reliance Corporate Park",

                cover: relianceCover,

                city: "Navi Mumbai",

                industry: "Corporate",

                totalTrainings: 6,

                totalParticipants: 310,

                trainings: [
                    {
                        id: "AVEVA InTouch HMI 2023",

                        title: "AVEVA InTouch HMI 2023",

                        coverImage: r1,

                        date: "12 February 2026",

                        year: 2026,

                        duration: "2 Days",

                        location: "Navi Mumbai",

                        trainer: "SSM LEC",

                        participants: 35,

                        technologies: [
                            "AVEVA InTouch HMI 2023",
                        ],

                        description:
                            "Advanced Power BI reporting and dashboard development for enterprise analytics.",

                        images: [r1, r2, r3],

                        videos: [],

                        certificates: [],

                        feedback: [],
                    },

                ],
            },
            {
  id: "morimatsu",

  name: "Morimatsu",

  cover: morimatsuCover,

  city: "Vadodara",

  industry: "Process Equipment Manufacturing",

  totalTrainings: 2,

  totalParticipants: 38,

  trainings: [
    {
      id: "aveva-batch-management 23",

      title: "AVEVA Batch Management 2023",

      coverImage: mor1,

      date: "2024",

      year: 2024,

      duration: "2 Days",

      location: "Vadodara",

      trainer: "SSM LEC",

      participants: 18,

      technologies: [
        "AVEVA Batch Management 2023"
      ],

      description:
        "Industrial training on AVEVA Batch Management covering recipe management, batch execution and production monitoring.",

      images: [
        mor1,
                mor2,
,
                mor3,

      ],

      videos: [],
      certificates: [],
      feedback: []
    },

    {
      id: "aveva-system-platform",

      title: "AVEVA System Platform 2023",

      coverImage: mor2,

      date: "2024",

      year: 2024,

      duration: "2 Days",

      location: "Vadodara",

      trainer: "SSM LEC",

      participants: 20,

      technologies: [
        "AVEVA System Platform 2023"
      ],

      description:
        "Hands-on training covering Galaxy development, deployment, alarms, graphics and industrial application development.",

      images: [
        mor1,
        mor2,
        mor3
      ],

      videos: [],
      certificates: [],
      feedback: []
    }
  ]
},

{
  id: "hitachi-energy",

  name: "Hitachi Energy",

  cover: hitachiCover,

  city: "Vadodara",

  industry: "Power & Energy",

  totalTrainings: 1,

  totalParticipants: 24,

  trainings: [
    {
      id: "aveva-omi",

      title: "AVEVA OMI 2023",

      coverImage: hitachi1,

      date: "2024",

      year: 2024,

      duration: "2 Days",

      location: "Vadodara",

      trainer: "SSM LEC",

      participants: 24,

      technologies: [
        "AVEVA OMI 2023"
      ],

      description:
        "Industrial training covering AVEVA Operations Management Interface (OMI), visualization, navigation, symbols, layouts and runtime application development.",

      images: [
        hitachi1,
        hitachi2,
        hitachi3
      ],

      videos: [],
      certificates: [],
      feedback: []
    }
  ]
},
{
  id: "optima-india",

  name: "Optima India",

  cover: optimaCover,

  city: "Pune",

  industry: "Industrial Automation",

  totalTrainings: 1,

  totalParticipants: 22,

  trainings: [
    {
      id: "aveva-system-platform-2023",

      title: "AVEVA System Platform 2023",

      coverImage: optima1,

      date: "",

      year: 2023,

      duration: "",

      location: "Pune",

      trainer: "SSM LEC",

      participants: 22,

      technologies: [
        "AVEVA System Platform 2023"
      ],

      description:
        "Corporate training on AVEVA System Platform 2023.",

      images: [
        optima1,
        optima2,
        optima3
      ],

      videos: [],

      certificates: [],

      feedback: []
    }
  ]
},
        {
  id: "tcs",

  name: "Tata Consultancy Services (TCS)",

  cover: tcsCover,

  city: "Multiple Locations",

  industry: "Information Technology",

  totalTrainings: 3,

  totalParticipants: 85,

  trainings: [
    {
      id: "aveva-system-platform-2023",

      title: "AVEVA System Platform 2023",

      coverImage: tcs1,

      date: "",

      year: 2023,

      duration: "",

      location: "",

      trainer: "SSM LEC",

      participants: 20,

      technologies: [
        "AVEVA System Platform 2023"
      ],

      description: "Corporate training on AVEVA System Platform 2023.",

      images: [tcs1, tcs2, tcs3],

      videos: [],

      certificates: [],

      feedback: []
    },

    {
      id: "aveva-mes-2023",

      title: "AVEVA MES 2023",

      coverImage: tcs2,

      date: "",

      year: 2023,

      duration: "",

      location: "",

      trainer: "SSM LEC",

      participants: 22,

      technologies: [
        "AVEVA MES 2023"
      ],

      description: "Corporate training on AVEVA MES 2023.",

      images: [tcs1, tcs2, tcs3],

      videos: [],

      certificates: [],

      feedback: []
    },

    {
      id: "aveva-model-driven-mes-2023",

      title: "AVEVA Model-Driven MES 2023",

      coverImage: tcs3,

      date: "",

      year: 2023,

      duration: "",

      location: "",

      trainer: "SSM LEC",

      participants: 21,

      technologies: [
        "AVEVA Model-Driven MES 2023"
      ],

      description: "Corporate training on AVEVA Model-Driven MES 2023.",

      images: [tcs1, tcs2, tcs3],

      videos: [],

      certificates: [],

      feedback: []
    },

    {
      id: "aveva-work-tasks-2023",

      title: "AVEVA Work Tasks 2023",

      coverImage: tcs1,

      date: "",

      year: 2023,

      duration: "",

      location: "",

      trainer: "SSM LEC",

      participants: 22,

      technologies: [
        "AVEVA Work Tasks 2023"
      ],

      description: "Corporate training on AVEVA Work Tasks 2023.",

      images: [tcs1, tcs2, tcs3],

      videos: [],

      certificates: [],

      feedback: []
    }
  ]
},
{
  id: "schneider-electric",

  name: "Schneider Electric",

  cover: schneiderCover,

  city: "Bangalore",

  industry: "Industrial Automation",

  totalTrainings: 4,

  totalParticipants: 80,

  trainings: [
    {
      id: "aveva-system-platform-2023",

      title: "AVEVA System Platform 2023",

      coverImage: schneider1,

      date: "",

      year: 2023,

      duration: "",

      location: "",

      trainer: "SSM LEC",

      participants: 20,

      technologies: [
        "AVEVA System Platform 2023"
      ],

      description:
        "Corporate training on AVEVA System Platform 2023.",

      images: [
        schneider1,
        schneider2,
        schneider3
      ],

      videos: [],

      certificates: [],

      feedback: []
    },

    {
      id: "aveva-historian-2023",

      title: "AVEVA Historian 2023",

      coverImage: schneider2,

      date: "",

      year: 2023,

      duration: "",

      location: "",

      trainer: "SSM LEC",

      participants: 20,

      technologies: [
        "AVEVA Historian 2023"
      ],

      description:
        "Corporate training on AVEVA Historian 2023.",

      images: [
        schneider1,
        schneider2,
        schneider3
      ],

      videos: [],

      certificates: [],

      feedback: []
    },

    {
      id: "aveva-gisize-2023",

      title: "AVEVA GISIZE 2023",

      coverImage: schneider3,

      date: "",

      year: 2023,

      duration: "",

      location: "",

      trainer: "SSM LEC",

      participants: 20,

      technologies: [
        "AVEVA GISIZE 2023"
      ],

      description:
        "Corporate training on AVEVA GISIZE 2023.",

      images: [
        schneider1,
        schneider2,
        schneider3
      ],

      videos: [],

      certificates: [],

      feedback: []
    },

    {
      id: "aveva-reports-for-operation-2023",

      title: "AVEVA Reports for Operation 2023",

      coverImage: schneider1,

      date: "",

      year: 2023,

      duration: "",

      location: "",

      trainer: "SSM LEC",

      participants: 20,

      technologies: [
        "AVEVA Reports for Operation 2023"
      ],

      description:
        "Corporate training on AVEVA Reports for Operation 2023.",

      images: [
        schneider1,
        schneider2,
        schneider3
      ],

      videos: [],

      certificates: [],

      feedback: []
    }
  ]
},
{
  id: "ltimindtree",

  name: "LTIMindtree",

  cover: ltimindtreeCover,

  city: "Mumbai",

  industry: "Information Technology",

  totalTrainings: 4,

  totalParticipants: 80,

  trainings: [
    {
      id: "aveva-system-platform-2023",

      title: "AVEVA System Platform 2023",

      coverImage: ltimindtree1,

      date: "",

      year: 2023,

      duration: "",

      location: "",

      trainer: "SSM LEC",

      participants: 20,

      technologies: [
        "AVEVA System Platform 2023"
      ],

      description:
        "Corporate training on AVEVA System Platform 2023.",

      images: [
        ltimindtree1,
        ltimindtree2,
        ltimindtree3
      ],

      videos: [],

      certificates: [],

      feedback: []
    },

    {
      id: "aveva-mes-2023",

      title: "AVEVA MES 2023",

      coverImage: ltimindtree2,

      date: "",

      year: 2023,

      duration: "",

      location: "",

      trainer: "SSM LEC",

      participants: 20,

      technologies: [
        "AVEVA MES 2023"
      ],

      description:
        "Corporate training on AVEVA MES 2023.",

      images: [
        ltimindtree1,
        ltimindtree2,
        ltimindtree3
      ],

      videos: [],

      certificates: [],

      feedback: []
    },

    {
      id: "aveva-model-driven-mes-2023",

      title: "AVEVA Model-Driven MES 2023",

      coverImage: ltimindtree3,

      date: "",

      year: 2023,

      duration: "",

      location: "",

      trainer: "SSM LEC",

      participants: 20,

      technologies: [
        "AVEVA Model-Driven MES 2023"
      ],

      description:
        "Corporate training on AVEVA Model-Driven MES 2023.",

      images: [
        ltimindtree1,
        ltimindtree2,
        ltimindtree3
      ],

      videos: [],

      certificates: [],

      feedback: []
    },

    {
      id: "aveva-work-tasks-2023",

      title: "AVEVA Work Tasks 2023",

      coverImage: ltimindtree1,

      date: "",

      year: 2023,

      duration: "",

      location: "",

      trainer: "SSM LEC",

      participants: 20,

      technologies: [
        "AVEVA Work Tasks 2023"
      ],

      description:
        "Corporate training on AVEVA Work Tasks 2023.",

      images: [
        ltimindtree1,
        ltimindtree2,
        ltimindtree3
      ],

      videos: [],

      certificates: [],

      feedback: []
    }
  ]
},
{
  id: "reliance",

  name: "Reliance Industries Limited",

  cover: relianceCover,

  city: "Jamnagar",

  industry: "Oil & Gas",

  totalTrainings: 1,

  totalParticipants: 25,

  trainings: [
    {
      id: "aveva-intouch-hmi-2023",

      title: "AVEVA InTouch HMI 2023",

      coverImage: reliance1,

      date: "",

      year: 2023,

      duration: "",

      location: "",

      trainer: "SSM LEC",

      participants: 25,

      technologies: [
        "AVEVA InTouch HMI 2023"
      ],

      description:
        "Corporate training on AVEVA InTouch HMI 2023.",

      images: [
        reliance1,
        reliance2,
        reliance3
      ],

      videos: [],

      certificates: [],

      feedback: []
    }
  ]
},
{
  id: "safe-tronics",

  name: "Safe-Tronics Automation Pvt. Ltd.",

  cover: safetronicsCover,

  city: "Vadodara",

  industry: "Industrial Automation",

  totalTrainings: 1,

  totalParticipants: 25,

  trainings: [
    {
      id: "aveva-intouch-hmi-2023",

      title: "AVEVA InTouch HMI 2023",

      coverImage: safetronics1,

      date: "",

      year: 2023,

      duration: "",

      location: "",

      trainer: "SSM LEC",

      participants: 25,

      technologies: [
        "AVEVA InTouch HMI 2023"
      ],

      description:
        "Corporate training on AVEVA InTouch HMI 2023.",

      images: [
        safetronics1,
        safetronics2,
        safetronics3
      ],

      videos: [],

      certificates: [],

      feedback: []
    }
  ]
},
{
  id: "merck-life-science",

  name: "Merck Life Science Pvt. Ltd.",

  cover: merckCover,

  city: "Bengaluru",

  industry: "Life Sciences",

  totalTrainings: 2,

  totalParticipants: 40,

  trainings: [
    {
      id: "aveva-batch-management-2023",

      title: "AVEVA Batch Management 2023",

      coverImage: merck1,

      date: "",

      year: 2023,

      duration: "",

      location: "",

      trainer: "SSM LEC",

      participants: 20,

      technologies: [
        "AVEVA Batch Management 2023"
      ],

      description:
        "Corporate training on AVEVA Batch Management 2023.",

      images: [
        merck1,
        merck2,
        merck3
      ],

      videos: [],

      certificates: [],

      feedback: []
    },

    {
      id: "aveva-system-platform-2023",

      title: "AVEVA System Platform 2023",

      coverImage: merck2,

      date: "",

      year: 2023,

      duration: "",

      location: "",

      trainer: "SSM LEC",

      participants: 20,

      technologies: [
        "AVEVA System Platform 2023"
      ],

      description:
        "Corporate training on AVEVA System Platform 2023.",

      images: [
        merck1,
        merck2,
        merck3
      ],

      videos: [],

      certificates: [],

      feedback: []
    }
  ]
},
{
  id: "aztec-consulting",

  name: "Aztec Consulting Engineers India Pvt. Ltd.",

  cover: aztecCover,

  city: "Vadodara",

  industry: "Engineering Consultancy",

  totalTrainings: 1,

  totalParticipants: 22,

  trainings: [
    {
      id: "aveva-batch-management-2023",

      title: "AVEVA Batch Management 2023",

      coverImage: aztec1,

      date: "",

      year: 2023,

      duration: "",

      location: "",

      trainer: "SSM LEC",

      participants: 22,

      technologies: [
        "AVEVA Batch Management 2023"
      ],

      description:
        "Corporate training on AVEVA Batch Management 2023.",

      images: [
        aztec1,
        aztec2,
        aztec3
      ],

      videos: [],

      certificates: [],

      feedback: []
    },
    {
      id: "AVEVA System Platform 2023",

      title: "AVEVA System Platform 2023",

      coverImage: aztec1,

      date: "",

      year: 2023,

      duration: "",

      location: "",

      trainer: "SSM LEC",

      participants: 22,

      technologies: [
        "AVEVA System Platform 2023"
      ],

      description:
        "Corporate training on AVEVA Batch Management 2023.",

      images: [
        aztec1,
        aztec2,
        aztec3
      ],

      videos: [],

      certificates: [],

      feedback: []
    }
  ]
},
{
  id: "mb-control-systems",

  name: "M.B. Control & Systems Pvt. Ltd.",

  cover: mbControlCover,

  city: "Kolkata",

  industry: "Industrial Automation",

  totalTrainings: 1,

  totalParticipants: 22,

  trainings: [
    {
      id: "aveva-batch-management-2023",

      title: "AVEVA Batch Management 2023",

      coverImage: mbcontrol1,

      date: "",

      year: 2023,

      duration: "",

      location: "",

      trainer: "SSM LEC",

      participants: 22,

      technologies: [
        "AVEVA Batch Management 2023"
      ],

      description:
        "Corporate training on AVEVA Batch Management 2023.",

      images: [
        mbcontrol1,
        mbcontrol2,
        mbcontrol3
      ],

      videos: [],

      certificates: [],

      feedback: []
    }
  ]
},

        ]
    },

//     "students-training": {
//         title: "Students Training",

//         entities: [
//             {
//                 id: "svnit",

//                 name: "Sardar Vallabhbhai National Institute of Technology (SVNIT)",

//                 cover: svnitCover,

//                 city: "Surat",

//                 state: "Gujarat",

//                 type: "Institute of National Importance",

//                 totalTrainings: 12,

//                 totalParticipants: 1350,

//                 trainings: [
//                     {
//                         id: "python-ai",

//                         title: "Python Programming & Artificial Intelligence",

//                         coverImage: svnit1,

//                         date: "18 January 2026",

//                         year: 2026,

//                         duration: "3 Days",

//                         location: "SVNIT Campus",

//                         trainer: "SSM LEC",

//                         participants: 220,

//                         technologies: [
//                             "Python",
//                             "NumPy",
//                             "Pandas",
//                             "Machine Learning"
//                         ],

//                         description:
//                             "Hands-on workshop covering Python fundamentals, data analysis and introductory Machine Learning concepts with practical implementation.",

//                         images: [
//                             svnit1,
//                             svnit2,
//                             svnit3
//                         ],

//                         videos: [],

//                         certificates: [],

//                         feedback: [
//                             {
//                                 name: "Rahul Patel",
//                                 designation: "Final Year Student",
//                                 comment:
//                                     "Excellent practical workshop with industry-oriented examples."
//                             }
//                         ]
//                     },

//                     {
//                         id: "power-bi",

//                         title: "Power BI & Business Analytics",

//                         coverImage: svnit2,

//                         date: "22 August 2026",

//                         year: 2026,

//                         duration: "2 Days",

//                         location: "SVNIT Campus",

//                         trainer: "SSM LEC",

//                         participants: 180,

//                         technologies: [
//                             "Power BI",
//                             "Power Query",
//                             "DAX",
//                             "Dashboard Design"
//                         ],

//                         description:
//                             "Interactive workshop on creating professional dashboards using Power BI and real business datasets.",

//                         images: [
//                             svnit1,
//                             svnit2,
//                             svnit3
//                         ],

//                         videos: [],

//                         certificates: [],

//                         feedback: []
//                     },

//                     {
//                         id: "mern-stack",

//                         title: "MERN Stack Development",

//                         coverImage: svnit3,

//                         date: "10 November 2026",

//                         year: 2026,

//                         duration: "4 Days",

//                         location: "SVNIT Campus",

//                         trainer: "SSM LEC",

//                         participants: 160,

//                         technologies: [
//                             "MongoDB",
//                             "Express.js",
//                             "React",
//                             "Node.js"
//                         ],

//                         description:
//                             "Complete Full Stack Development workshop with live project development using the MERN Stack.",

//                         images: [
//                             svnit1,
//                             svnit2,
//                             svnit3
//                         ],

//                         videos: [],

//                         certificates: [],

//                         feedback: []
//                     }
//                 ]
//             },
//             {
//   id: "pdeu",

//   name: "Pandit Deendayal Energy University (PDEU)",

//   cover: pdeuCover,

//   city: "Gandhinagar",

//   state: "Gujarat",

//   type: "Private University",

//   totalTrainings: 10,

//   totalParticipants: 1180,

//   trainings: [
//     {
//       id: "artificial-intelligence",

//       title: "Artificial Intelligence & Machine Learning",

//       coverImage: pdeu1,

//       date: "12 February 2026",

//       year: 2026,

//       duration: "3 Days",

//       location: "PDEU Campus",

//       trainer: "SSM LEC",

//       participants: 210,

//       technologies: [
//         "Python",
//         "Machine Learning",
//         "Deep Learning",
//         "TensorFlow"
//       ],

//       description:
//         "Comprehensive AI & Machine Learning workshop covering supervised learning, deep learning fundamentals and real-world industrial applications.",

//       images: [
//         pdeu1,
//         pdeu2,
//         pdeu3
//       ],

//       videos: [],

//       certificates: [],

//       feedback: [
//         {
//           name: "Harsh Patel",
//           designation: "Computer Engineering Student",
//           comment:
//             "One of the best AI workshops with practical implementation."
//         }
//       ]
//     },

//     {
//       id: "data-science",

//       title: "Data Science using Python",

//       coverImage: pdeu2,

//       date: "20 July 2026",

//       year: 2026,

//       duration: "2 Days",

//       location: "PDEU Campus",

//       trainer: "SSM LEC",

//       participants: 175,

//       technologies: [
//         "Python",
//         "Pandas",
//         "NumPy",
//         "Matplotlib"
//       ],

//       description:
//         "Hands-on Data Science workshop focusing on data cleaning, visualization and exploratory data analysis.",

//       images: [
//         pdeu1,
//         pdeu2,
//         pdeu3
//       ],

//       videos: [],

//       certificates: [],

//       feedback: []
//     },

//     {
//       id: "power-bi",

//       title: "Power BI & Business Intelligence",

//       coverImage: pdeu3,

//       date: "18 October 2026",

//       year: 2026,

//       duration: "2 Days",

//       location: "PDEU Campus",

//       trainer: "SSM LEC",

//       participants: 190,

//       technologies: [
//         "Power BI",
//         "Power Query",
//         "DAX",
//         "Dashboard Development"
//       ],

//       description:
//         "Professional Power BI training covering dashboard creation, DAX functions and business reporting.",

//       images: [
//         pdeu1,
//         pdeu2,
//         pdeu3
//       ],

//       videos: [],

//       certificates: [],

//       feedback: []
//     }
//   ]
// },
// {
//   id: "nirma",

//   name: "Nirma University",

//   cover: nirmaCover,

//   city: "Ahmedabad",

//   state: "Gujarat",

//   type: "Private University",

//   totalTrainings: 11,

//   totalParticipants: 1260,

//   trainings: [
//     {
//       id: "mern-stack",

//       title: "MERN Stack Development",

//       coverImage: nirma1,

//       date: "18 January 2026",

//       year: 2026,

//       duration: "4 Days",

//       location: "Nirma University",

//       trainer: "SSM LEC",

//       participants: 210,

//       technologies: [
//         "MongoDB",
//         "Express.js",
//         "React",
//         "Node.js"
//       ],

//       description:
//         "Intensive Full Stack Development workshop covering frontend, backend APIs, database integration and deployment using the MERN Stack.",

//       images: [
//         nirma1,
//         nirma2,
//         nirma3
//       ],

//       videos: [],

//       certificates: [],

//       feedback: [
//         {
//           name: "Yash Shah",
//           designation: "Computer Engineering Student",
//           comment:
//             "Excellent industry-oriented workshop with hands-on project development."
//         }
//       ]
//     },

//     {
//       id: "gen-ai",

//       title: "Generative AI & Prompt Engineering",

//       coverImage: nirma2,

//       date: "22 August 2026",

//       year: 2026,

//       duration: "2 Days",

//       location: "Nirma University",

//       trainer: "SSM LEC",

//       participants: 240,

//       technologies: [
//         "ChatGPT",
//         "Gemini",
//         "Microsoft Copilot",
//         "Prompt Engineering"
//       ],

//       description:
//         "Practical workshop on Generative AI tools, prompt engineering techniques and AI productivity for students.",

//       images: [
//         nirma1,
//         nirma2,
//         nirma3
//       ],

//       videos: [],

//       certificates: [],

//       feedback: []
//     },

//     {
//       id: "power-bi",

//       title: "Power BI & Business Analytics",

//       coverImage: nirma3,

//       date: "10 November 2026",

//       year: 2026,

//       duration: "2 Days",

//       location: "Nirma University",

//       trainer: "SSM LEC",

//       participants: 185,

//       technologies: [
//         "Power BI",
//         "Power Query",
//         "DAX",
//         "Data Visualization"
//       ],

//       description:
//         "Business Intelligence workshop covering dashboard creation, DAX calculations, Power Query and interactive reporting.",

//       images: [
//         nirma1,
//         nirma2,
//         nirma3
//       ],

//       videos: [],

//       certificates: [],

//       feedback: []
//     }
//   ]
// },
// {
//   id: "charusat",

//   name: "CHARUSAT University",

//   cover: charusatCover,

//   city: "Anand",

//   state: "Gujarat",

//   type: "Private University",

//   totalTrainings: 9,

//   totalParticipants: 980,

//   trainings: [
//     {
//       id: "python-data-science",

//       title: "Python & Data Science Bootcamp",

//       coverImage: charusat1,

//       date: "16 February 2026",

//       year: 2026,

//       duration: "3 Days",

//       location: "CHARUSAT Campus",

//       trainer: "SSM LEC",

//       participants: 180,

//       technologies: [
//         "Python",
//         "NumPy",
//         "Pandas",
//         "Matplotlib",
//         "Scikit-Learn"
//       ],

//       description:
//         "Hands-on Python and Data Science workshop covering data preprocessing, visualization and introductory Machine Learning using real datasets.",

//       images: [
//         charusat1,
//         charusat2,
//         charusat3
//       ],

//       videos: [],

//       certificates: [],

//       feedback: [
//         {
//           name: "Meet Patel",
//           designation: "B.Tech Student",
//           comment:
//             "Excellent practical sessions with industry-focused projects."
//         }
//       ]
//     },

//     {
//       id: "power-bi-analytics",

//       title: "Power BI & Data Analytics",

//       coverImage: charusat2,

//       date: "20 July 2026",

//       year: 2026,

//       duration: "2 Days",

//       location: "CHARUSAT Campus",

//       trainer: "SSM LEC",

//       participants: 160,

//       technologies: [
//         "Power BI",
//         "Power Query",
//         "DAX",
//         "Dashboard Design"
//       ],

//       description:
//         "Workshop on Business Intelligence, interactive dashboards, data modeling and KPI reporting using Microsoft Power BI.",

//       images: [
//         charusat1,
//         charusat2,
//         charusat3
//       ],

//       videos: [],

//       certificates: [],

//       feedback: []
//     },

//     {
//       id: "gen-ai",

//       title: "Generative AI & Prompt Engineering",

//       coverImage: charusat3,

//       date: "11 November 2026",

//       year: 2026,

//       duration: "2 Days",

//       location: "CHARUSAT Campus",

//       trainer: "SSM LEC",

//       participants: 220,

//       technologies: [
//         "ChatGPT",
//         "Gemini",
//         "Microsoft Copilot",
//         "Prompt Engineering"
//       ],

//       description:
//         "Interactive workshop introducing students to Generative AI tools, prompt engineering and AI-powered productivity for academics and industry.",

//       images: [
//         charusat1,
//         charusat2,
//         charusat3
//       ],

//       videos: [],

//       certificates: [],

//       feedback: []
//     }
//   ]
// },
// {
//   id: "ddu",

//   name: "Dharmsinh Desai University (DDU)",

//   cover: dduCover,

//   city: "Nadiad",

//   state: "Gujarat",

//   type: "State University",

//   totalTrainings: 10,

//   totalParticipants: 1120,

//   trainings: [
//     {
//       id: "data-science",

//       title: "Data Science with Python",

//       coverImage: ddu1,

//       date: "12 February 2026",

//       year: 2026,

//       duration: "3 Days",

//       location: "DDU Campus",

//       trainer: "SSM LEC",

//       participants: 195,

//       technologies: [
//         "Python",
//         "Pandas",
//         "NumPy",
//         "Matplotlib",
//         "Scikit-Learn"
//       ],

//       description:
//         "Comprehensive Data Science workshop covering Python programming, data preprocessing, visualization and introductory Machine Learning.",

//       images: [
//         ddu1,
//         ddu2,
//         ddu3
//       ],

//       videos: [],

//       certificates: [],

//       feedback: [
//         {
//           name: "Priyansh Patel",
//           designation: "Computer Engineering Student",
//           comment:
//             "Excellent hands-on sessions with real industrial datasets."
//         }
//       ]
//     },

//     {
//       id: "power-bi",

//       title: "Power BI & Business Intelligence",

//       coverImage: ddu2,

//       date: "18 August 2026",

//       year: 2026,

//       duration: "2 Days",

//       location: "DDU Campus",

//       trainer: "SSM LEC",

//       participants: 170,

//       technologies: [
//         "Power BI",
//         "Power Query",
//         "DAX",
//         "Dashboard Design"
//       ],

//       description:
//         "Professional workshop on Business Intelligence, interactive dashboards and business reporting using Microsoft Power BI.",

//       images: [
//         ddu1,
//         ddu2,
//         ddu3
//       ],

//       videos: [],

//       certificates: [],

//       feedback: []
//     },

//     {
//       id: "industrial-ai",

//       title: "Industrial AI & Computer Vision",

//       coverImage: ddu3,

//       date: "10 November 2026",

//       year: 2026,

//       duration: "3 Days",

//       location: "DDU Campus",

//       trainer: "SSM LEC",

//       participants: 155,

//       technologies: [
//         "Artificial Intelligence",
//         "Computer Vision",
//         "OpenCV",
//         "Deep Learning"
//       ],

//       description:
//         "Advanced workshop introducing Artificial Intelligence, Computer Vision and Deep Learning applications in manufacturing and automation industries.",

//       images: [
//         ddu1,
//         ddu2,
//         ddu3
//       ],

//       videos: [],

//       certificates: [],

//       feedback: []
//     }
//   ]
// },
// {
//   id: "ganpat",

//   name: "Ganpat University",

//   cover: ganpatCover,

//   city: "Mehsana",

//   state: "Gujarat",

//   type: "Private University",

//   totalTrainings: 11,

//   totalParticipants: 1240,

//   trainings: [
//     {
//       id: "industrial-ai",

//       title: "Industrial AI & Machine Learning",

//       coverImage: ganpat1,

//       date: "15 January 2026",

//       year: 2026,

//       duration: "3 Days",

//       location: "Ganpat University",

//       trainer: "SSM LEC",

//       participants: 210,

//       technologies: [
//         "Python",
//         "Machine Learning",
//         "Deep Learning",
//         "Computer Vision"
//       ],

//       description:
//         "Industry-oriented Artificial Intelligence and Machine Learning workshop with practical projects, computer vision and predictive analytics.",

//       images: [
//         ganpat1,
//         ganpat2,
//         ganpat3
//       ],

//       videos: [],

//       certificates: [],

//       feedback: [
//         {
//           name: "Jay Patel",
//           designation: "B.Tech Student",
//           comment:
//             "Very informative workshop with excellent practical implementation."
//         }
//       ]
//     },

//     {
//       id: "power-bi",

//       title: "Power BI & Business Analytics",

//       coverImage: ganpat2,

//       date: "22 July 2026",

//       year: 2026,

//       duration: "2 Days",

//       location: "Ganpat University",

//       trainer: "SSM LEC",

//       participants: 175,

//       technologies: [
//         "Power BI",
//         "Power Query",
//         "DAX",
//         "Business Intelligence"
//       ],

//       description:
//         "Hands-on Business Intelligence workshop covering dashboard creation, KPI reporting and DAX functions using Microsoft Power BI.",

//       images: [
//         ganpat1,
//         ganpat2,
//         ganpat3
//       ],

//       videos: [],

//       certificates: [],

//       feedback: []
//     },

//     {
//       id: "mern-stack",

//       title: "Full Stack MERN Development",

//       coverImage: ganpat3,

//       date: "18 November 2026",

//       year: 2026,

//       duration: "4 Days",

//       location: "Ganpat University",

//       trainer: "SSM LEC",

//       participants: 190,

//       technologies: [
//         "MongoDB",
//         "Express.js",
//         "React",
//         "Node.js"
//       ],

//       description:
//         "Complete Full Stack Development program with React, Node.js, MongoDB and REST API development through live projects.",

//       images: [
//         ganpat1,
//         ganpat2,
//         ganpat3
//       ],

//       videos: [],

//       certificates: [],

//       feedback: []
//     }
//   ]
// },

//         ],
//     },
};

