import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import cryptoCrowdImg from "@/public/cryptocrowd2.png";

import rentalsimg from "@/public/rentals-pic.png";
import kitchenpic from "@/public/kitchen-pic.png";
import gifthealth from "@/public/gifthealth.png";

import ozdevsImg from "@/public/ozdevs-two.png";
import assetTradingImg from "@/public/asset-trading.jpg";
import euphorusImg from "@/public/euphorus-two.png";
import euphorusBackendImg from "@/public/euphorus-backend.png";
import techprowlImg from "@/public/techprowl-two.png";
import taskManagerImg from "@/public/task-manager.png";
import familyTreeImg from "@/public/bfsproject.jpg";
import binaryGameImg from "@/public//binary-game.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Developer",
    location: "Freelance",
    description:
      "Full-Stack Software Development for businesses and clients including website and app development as well as mainteanance and upgrades/updates.",
    icon: React.createElement(CgWorkAlt),
    date: "September 2021 - February 2022",
  },
  {
    title: "Junior Developer",
    location: "YouPay",
    description:
      "Developed new features using Laravel, Vue.js, PHP, JavaScript, Tailwind CSS, MySQL and REST APIs. Created an email notification system for mechants to receive weekly/monthly summaries of YouPay carts created, paid and cancelled. I also integrated YouPay into dozens of stores.",
    icon: React.createElement(CgWorkAlt),
    date: "February 2022 - November 2022",
  },
  {
    title: "Software Engineer",
    location: "The University of Queensland",
    description:
      "Full-stack software engineer in the Application Development and Support team. Worked on web applications such as CAHP (Casual Academic Hire and Payment), UQ Maps, UQ Donations, and Programs and Courses.",
    icon: React.createElement(CgWorkAlt),
    date: "November 2022 - January 2024",
  },
  {
    title: "Software Engineer",
    location: "Humanforce",
    description:
      "Software engineer in the intelliHR platform team. We are a feature enablement team dedicated to developing features for developers, ensuring they are easier to create. We also look after issues of scale and technical debt for developers and the platform.",
    icon: React.createElement(CgWorkAlt),
    date: "January 2024 - Present",
  },
] as const;



// projects
export const projectsData = [
  {
    title: "Rentals App",
    description:
      "A user-friendly app that simplifies event equipment rentals for any occasion, including weddings, parties, and corporate events. Users can browse an extensive catalog of items like catering supplies, sound systems, lighting, and decor. The app offers advanced search and filtering options to quickly find what they need. Users can receive instant quotes and check availability, choose from curated rental packages, and read reviews from other customers.",
    tags: ["JavaScript", "React", "Express.js", "AWS"],
    icons: [
      "logos:laravel",
      "logos:javascript",
      "logos:react",
      "logos:bootstrap",
      "logos:express",
    ],
    imageUrl: rentalsimg,
    githubLink: "https://github.com/ToshTony/RentalApp",
    demoLink: "https://toshtony.github.io/RentalApp/",
    urlLink: "https://toshtony.github.io/RentalApp/",
  },
  {
    title: "Catering Website",
    description:
      "Catering Company website designed for seamless event planning and catering services. It includes a stunning portfolio of past events, interactive menu to create customized dining options, with prices.It inlcudes a booking system that simplifies securing your date, while 24/7 customer support to ensure you have assistance whenever needed.",
    tags: ["PHP", "Laravel", "JavaScript", "Tailwind", "MySQL"],
    icons: [
      "logos:laravel",
      "logos:php",
      "logos:javascript",
      "devicon:tailwindcss",
      "logos:mysql",
    ],
    imageUrl: kitchenpic,
    urlLink: "https://toshtony.github.io/Wangecis-Kitchen/",
    demoLink: "https://toshtony.github.io/Wangecis-Kitchen/",
    githubLink: "https://github.com/ToshTony/Wangecis-Kitchen",
  },
  {
    title: "HealthCare Services Website",
    description:
      "A cutting-edge platform designed to transform patient access to healthcare. With an intuitive interface, users can easily navigate a comprehensive range of services and book appointments online with instant confirmation. The secure patient portal offers access to medical records, lab results, and personalized health resources, empowering users to manage their health effectively.",
    tags: ["Java", "MariaDB", "Swing"],
    icons: [
      "logos:java",
      "logos:mariadb-icon"
    ],
    imageUrl: gifthealth,
    urlLink: "https://gifthealthcareservices.com/",
  },
  // {
  //   title: "Euphorus",
  //   description:
  //     "React application for viewing country happiness data collected from the World Happiness Report initiative. Users can filter by year, country and search limit. AG Grid and Chart.js were used to present the data.",
  //   tags: ["JavaScript", "React", "Bootstrap"],
  //   icons: ["logos:javascript", "logos:react", "logos:bootstrap"],
  //   imageUrl: euphorusImg,
  //   githubLink: "https://github.com/ben04rogers/cab230assignment1",
  // },
  // {
  //   title: "Country Happiness API",
  //   description:
  //     "Developed and deployed an Express API to support the front-end of the Euphorus Happiness Data web application. Routes support query parameters and authorization using JWT. Includes endpoints for countries, rankings, factors, registration, login, and profile. Tested software extensively with Jest and created Swagger documentation for the API as well.      ",
  //   tags: ["JavaScript", "Node.js", "Express.js", "Swagger", "MySQL"],
  //   icons: ["logos:javascript", "logos:express", "logos:swagger", "cib:mysql"],
  //   imageUrl: euphorusBackendImg,
  //   githubLink: "https://github.com/ben04rogers/cab230assignment2",
  // },
  {
    title: "Techprowl Computer Auction",
    description:
      "Computer auction application built with Flask. The site allows users to register, bid on items, leave reviews, post new listings, manage listings, search by keyword, and keep a watch list. ",
    tags: ["Python", "Flask", "Bootstrap", "SQLite"],
    icons: ["logos:python", "logos:bootstrap", "logos:sqlite"],
    imageUrl: techprowlImg,
    githubLink: "https://github.com/ben04rogers/computer-auction",
    urlLink: "https://techprowl.herokuapp.com",
  },
  {
    title: "Task Manager Console App",
    description:
      "Console app that manages tasks in a project. Users can load projects from a file and generate a seqeuence to complete them in, based on each task's dependencies. Users can also find earliest possible commencement time of each task, add new tasks, update tasks, remove tasks, and save the results to a text file.",
    tags: ["C#"],
    icons: ["devicon:csharp"],
    imageUrl: taskManagerImg,
    githubLink: "https://github.com/ben04rogers/task-manager",
  },
  {
    title: "Family Tree Shortest Path",
    description:
      "Python program that implements a breadth-first search algorithm to generate a minimal spanning tree. Problem was to calculate a shortest path from a starting vertex in a graph to each other vertex. The vertices represent people and each person is related to every other person through parent-child relationships. A person can see how they are related to each other person in the tree",
    tags: ["Python"],
    icons: ["logos:python"],
    imageUrl: familyTreeImg,
    githubLink: "https://github.com/ben04rogers/breadth-first-search",
    demoLink: "https://www.youtube.com/watch?v=VXCZKsqupxA",
  },
  {
    title: "Arduino Binary Game",
    description:
      "Binary game written in C that runs on an Arduino Uno using Tinkercad. The game aims to help users learn binary by challenging them to input different integers in their binary form within a time limit.",
    tags: ["C"],
    icons: ["devicon:c"],
    imageUrl: binaryGameImg,
    githubLink: "https://github.com/ben04rogers/binary-game-microcontroller",
    demoLink: "https://www.youtube.com/watch?v=A6n6XDk4Unw&feature=youtu.be",
  },
] as const;

export const skillsData = [
  {
    name: "JavaScript",
    icon: "logos:javascript",
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
  },
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "NextJs",
    icon: "logos:nextjs-icon",
  },
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
  },
  {
    name: "PHP",
    icon: "logos:php",
  },
  {
    name: "Laravel",
    icon: "logos:laravel",
  },
  {
    name: "Symfony",
    icon: "logos:symfony",
  },
  {
    name: "Python",
    icon: "logos:python",
  },
  {
    name: "Django",
    icon: "logos:django-icon",
  },
  {
    name: "Java",
    icon: "logos:java",
  },
  {
    name: "HTML",
    icon: "vscode-icons:file-type-html",
  },
  {
    name: "CSS",
    icon: "vscode-icons:file-type-css",
  },
  {
    name: "SCSS",
    icon: "logos:sass",
  },
  {
    name: "Bootstrap",
    icon: "logos:bootstrap",
  },
  {
    name: "Git",
    icon: "logos:git-icon",
  },
  {
    name: "MySQL",
    icon: "logos:mysql",
  },
  {
    name: "PostgreSQL",
    icon: "logos:postgresql",
  },
  {
    name: "Sqlite",
    icon: "logos:sqlite",
  },
  {
    name: "Microsoft SQL Server",
    icon: "devicon-plain:microsoftsqlserver-wordmark",
  },
  {
    name: "Linux",
    icon: "flat-color-icons:linux",
  },
  {
    name: "AWS",
    icon: "logos:aws",
  },
  {
    name: "GCP",
    icon: "logos:google-cloud",
  },
  {
    name: "Docker",
    icon: "logos:docker-icon",
  },
  {
    name: "Jenkins",
    icon: "devicon:jenkins",
  },
  {
    name: "Shopify",
    icon: "logos:shopify",
  },
  {
    name: "CodeIgniter",
    icon: "logos:codeigniter-icon",
  },
  {
    name: "Blender",
    icon: "logos:blender",
  },

] as const;
