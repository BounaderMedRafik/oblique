import {
  Apple,
  AppWindow,
  Brush,
  GraduationCap,
  Ham,
  Rows,
} from "lucide-react";

export const Workies = [
  {
    id: "all",
    name: "All",
    icon: <Rows size={15} />,
  },
  {
    id: "webdev",
    name: "Web developpment",
    icon: <AppWindow size={15} />,
  },
  {
    id: "appdev",
    name: "App developpment",
    icon: <Apple size={15} />,
  },
  {
    id: "uvsearches",
    name: "University researches",
    icon: <GraduationCap size={15} />,
  },
  {
    id: "design",
    name: "Design",
    icon: <Brush size={15} />,
  },
];

export const MyProjects = [
  {
    name: "GreenSea portfolio",
    category: "Landing Page",
    client: "Greensea©",
    date: "Jul 8, 2024",
    desc: (
      <>
        <div>hello</div>
      </>
    ),
    websiteURL: "https://greensea.vercel.app/",
    roles: ["webdev"],
    images: [
      "https://bmed.vercel.app/greensea/1.jpeg",
      "https://bmed.vercel.app/greensea/2.jpeg",
      "https://bmed.vercel.app/greensea/3.jpeg",
      "https://bmed.vercel.app/greensea/4.jpeg",
    ],
  },
  {
    name: "Easy Doc",
    category: "Application",
    client: "Fast Pro",
    date: "Jul 13, 2024",
    desc: "I developed an application called Easy Doc that simplifies document archiving. It empowers you to easily search and filter your documents through various views, making information retrieval a breeze. I thoroughly enjoyed building this project!",
    websiteURL: "https://doc-easy-blue.vercel.app/",
    roles: ["webdev", "design"],
    images: [],
  },
];
