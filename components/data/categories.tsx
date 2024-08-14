import {
  Apple,
  AppWindow,
  Brush,
  GraduationCap,
  Ham,
  Rows,
} from "lucide-react";
import Copiable from "../ui/copi-able";

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
    id: "greensea-portfolio",
    name: "GreenSea portfolio",
    category: ["Developpment", "Design"],
    client: "Greensea©",
    date: "Jul 8, 2024",
    desc: (
      <>
        <div>
          <h2>
            <strong>Greensea: A Modern Open-Source Landing Page</strong>
          </h2>
          <p>
            Bounader Med Rafik and Aymen Melouah collaborated to conceptualize,
            design, and develop a cutting-edge landing page for the Greensea
            team. This project showcases our proficiency in web design,
            development, and open-source collaboration.
          </p>
          <p>
            The Greensea landing page is a visually striking and user-centric
            platform that effectively communicates the team&#39;s identity and
            mission. We employed the latest design trends and technologies to
            create a modern and engaging user experience.{" "}
          </p>
          <p>
            By making the entire project open-source on GitHub, we demonstrate
            our commitment to transparency, collaboration, and contributing to
            the developer community.
          </p>
          <p>
            <em>Key highlights:</em>
          </p>
          <ul>
            <li>Modern and responsive design</li>
            <li>Effective communication of the Greensea brand</li>
            <li>Open-source development and collaboration</li>
            <li>
              Proficient use of <em>Tailwind CSS</em>, <em>Next.js 14</em>,{" "}
              <em>Framer Motion</em>, and <em>Shadcn/ui</em>
            </li>
          </ul>
          <p>
            This project serves as a testament to our ability to deliver
            high-quality web solutions that align with client objectives and
            contribute to the open-source ecosystem.
          </p>

          <h3>Clone the project</h3>
          <p>
            Want to explore the codebase and learn from our implementation? Feel
            free to clone the Greensea project repository and contribute to its
            development. We encourage feedback and contributions from the
            open-source community.
          </p>

          <Copiable text="git clone https://github.com/BounaderMedRafik/greensea.git" />
        </div>
      </>
    ),
    websiteURL: "https://greensea.vercel.app/",
    roles: "webdev",
    images: [
      "https://bmed.vercel.app/greensea/1.jpeg",
      "https://bmed.vercel.app/greensea/2.jpeg",
      "https://bmed.vercel.app/greensea/3.jpeg",
      "https://bmed.vercel.app/greensea/4.jpeg",
    ],
    isOpenSource: true,
    codesource: "https://github.com/BounaderMedRafik/greensea",
  },
  {
    id: "fat-pro",
    name: "Fast Pro 2024",
    category: ["Developpment", "Design"],
    client: "Greensea©",
    date: "Jul 8, 2024",
    desc: (
      <>
        <div>
          <h2>
            <strong>Greensea: A Modern Open-Source Landing Page</strong>
          </h2>
          <p>
            Bounader Med Rafik and Aymen Melouah collaborated to conceptualize,
            design, and develop a cutting-edge landing page for the Greensea
            team. This project showcases our proficiency in web design,
            development, and open-source collaboration.
          </p>
          <p>
            The Greensea landing page is a visually striking and user-centric
            platform that effectively communicates the team&#39;s identity and
            mission. We employed the latest design trends and technologies to
            create a modern and engaging user experience.{" "}
          </p>
          <p>
            By making the entire project open-source on GitHub, we demonstrate
            our commitment to transparency, collaboration, and contributing to
            the developer community.
          </p>
          <p>
            <em>Key highlights:</em>
          </p>
          <ul>
            <li>Modern and responsive design</li>
            <li>Effective communication of the Greensea brand</li>
            <li>Open-source development and collaboration</li>
            <li>
              Proficient use of <em>Tailwind CSS</em>, <em>Next.js 14</em>,{" "}
              <em>Framer Motion</em>, and <em>Shadcn/ui</em>
            </li>
          </ul>
          <p>
            This project serves as a testament to our ability to deliver
            high-quality web solutions that align with client objectives and
            contribute to the open-source ecosystem.
          </p>

          <h3>Clone the project</h3>
          <p>
            Want to explore the codebase and learn from our implementation? Feel
            free to clone the Greensea project repository and contribute to its
            development. We encourage feedback and contributions from the
            open-source community.
          </p>

          <Copiable text="git clone https://github.com/BounaderMedRafik/greensea.git" />
        </div>
      </>
    ),
    websiteURL: "https://greensea.vercel.app/",
    roles: "uvsearches",
    images: [
      "https://bmed.vercel.app/greensea/1.jpeg",
      "https://bmed.vercel.app/greensea/2.jpeg",
      "https://bmed.vercel.app/greensea/3.jpeg",
      "https://bmed.vercel.app/greensea/4.jpeg",
    ],
    isOpenSource: true,
    codesource: "https://github.com/BounaderMedRafik/greensea",
  },
];
