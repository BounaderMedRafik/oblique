"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

const pics = [
  {
    name: "Conference With I-Tech",
    src: "https://www.developer-week.de/app/uploads/2021/03/DWX_Vortragsformate_Talks.jpg",
    date: "16 Jan 2023",
  },
  {
    name: "Apple Design Awards",
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDE2fHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE2NTk1MTM5Mzc&ixlib=rb-1.2.1&q=80&w=1200",
    date: "19 august 2023",
  },
  {
    name: "Fast Pro Phase",
    src: "https://media.licdn.com/dms/image/D4D12AQFQ-4cvW_fztw/article-cover_image-shrink_720_1280/0/1664825701279?e=2147483647&v=beta&t=VKKwlhrEJvmyhNkdDzo4OyIi7Yps5LdIk9m685n7hAI",
    date: "19 Jan 2024",
  },
  {
    name: "University Awards",
    src: "https://assets-global.website-files.com/5e9996a6531fea7d1003b18e/64c3c7a6bb6faf563c832ce4__DSC2277-p-2000.jpg",
    date: "19 march 2024",
  },
];
const teamData = [
  {
    name: "Bounader Med Rafik",
    role: "Web Developper",
    skills: "Full stack Web developpment, UI/UX designer",
    image:
      "https://scontent.faae2-3.fna.fbcdn.net/v/t39.30808-6/384127784_228716010195930_2630131328113587474_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=ZhODsj2kWewQ7kNvgGoEdP5&_nc_ht=scontent.faae2-3.fna&oh=00_AYAMPlixMx7yeLizGpa8uTX2q9KCRmszAVOvYQLWP4eroA&oe=66B73762",
  },
  {
    name: "Bazid Iheb",
    role: "IT specialist",
    skills: "IT services specialist, Office talents, Prototyper",
    image:
      "https://i.pinimg.com/736x/45/5c/8a/455c8af05f84c3a8bb47f177bd199942.jpg",
  },
  {
    name: "Ramzi Bouhadjar",
    role: "App developer",
    skills: "Fullstack App developer, Flutter Master",
    image:
      "https://scontent.faae2-2.fna.fbcdn.net/v/t39.30808-6/449458948_3829604350600785_9041524416839856112_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=TEwbjWO9TccQ7kNvgE217WB&_nc_ht=scontent.faae2-2.fna&oh=00_AYA_asrSOdB2ff1YkOsk6Yx7mkLgt2DuBDt9-jaCT2kYcg&oe=66B73BEE",
  },
  {
    name: "Aymen Melouah",
    role: "UI/UX designer",
    skills: "UI/UX designer, front-end developer, Figma Specialist",
    image:
      "https://scontent.faae2-3.fna.fbcdn.net/v/t39.30808-6/438092609_3685531365037369_3090009362209181785_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=umy4zu9qfksQ7kNvgGLu93P&_nc_ht=scontent.faae2-3.fna&oh=00_AYBHqij7JeaVZKe2BASdlntqpyTvF_LrON5Q4ZIs0yYV8Q&oe=66B762A9",
  },
  {
    name: "Lamri Siradj",
    role: "Designer",
    skills: "Designer, Adobe Expert",
    image:
      "https://scontent.faae2-2.fna.fbcdn.net/v/t39.30808-6/445821832_3772257159762104_7929028083324465952_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=4WtrgFUoOWkQ7kNvgFcUi--&_nc_ht=scontent.faae2-2.fna&oh=00_AYA9JtN3UI70zUpiIJJrAD_t3FbvYWoiUL8tSRBc_K3mtA&oe=66B74AE7",
  },
  {
    name: "Lokman Touil",
    role: "Backend developer",
    skills: "Backend developer, AI developer & much more:)",
    image:
      "https://scontent.faae2-4.fna.fbcdn.net/v/t39.30808-6/435787613_746697650934539_958445253649492783_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Uinm7jL0oWAQ7kNvgE4RU0S&_nc_ht=scontent.faae2-4.fna&oh=00_AYDiAOxyIgaNQMIYJGK0vdYLngU8b4HLMQvL-Vqnyc7kEQ&oe=66B7528C",
  },
];

const WhoOblique = () => {
  return (
    <div className=" min-h-[40vh] wrapper pt-64">
      <div className="font-Climate text-5xl">
        Who Are <span className="text-primary uppercase ">Oblique</span> ?
      </div>
      <div className="text-sm  opacity-75 mt-2 max-w-md">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, quod!
        Magnam placeat explicabo animi reprehenderit!
      </div>
      <div>
        <CarouselifyBaby />
      </div>
      <div>
        <OurBio />
      </div>
    </div>
  );
};

const CarouselifyBaby = () => {
  return (
    <div className="mt-10">
      <Carousel>
        <CarouselContent>
          {pics.map((item, i) => (
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 0.5 * i }}
              key={i}
            >
              <CarouselItem className="h-96 w-96 relative group">
                <img
                  className=" w-full h-full object-cover  rounded-lg "
                  src={item.src}
                  alt={item.name}
                />
                <div className=" absolute h-full w-full flex items-end p-10 group-hover:pb-20 transition-all opacity-0 group-hover:opacity-100 justify-center top-0 left-0 z-20">
                  <div>
                    <div className="text-2xl font-bold">{item.name}</div>
                    <div className="flex items-center gap-2 opacity-75">
                      <div>
                        <Calendar size={13} />
                      </div>
                      <div className="text-sm">{item.date}</div>
                    </div>
                  </div>
                </div>
                <div className=" bg-background/90 h-full w-full top-0 left-0 absolute opacity-0 group-hover:opacity-100 transition-all" />
              </CarouselItem>
            </motion.div>
          ))}
        </CarouselContent>

        <div className="mt-5">
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            className="flex items-center gap-1"
          >
            <CarouselPrevious />
            <CarouselNext />
          </motion.div>
        </div>
      </Carousel>
    </div>
  );
};

const OurBio = () => {
  return (
    <div className="w-full wrapper flex mt-10">
      <div className="w-[75%]">
        <div>
          <div className="text-2xl">
            <span className="text-primary font-bold italic">Oblique:</span>{" "}
            Pioneering Digital Solutions in Algeria
          </div>
        </div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 0.75,
          }}
          className=" p-5 opacity-75"
        >
          <div>
            ━ Oblique is a newly established digital agency based in{" "}
            <span className="text-green-400 underline">Algeria </span>,
            dedicated to propelling businesses into the digital age. With a
            strong focus on web and app development, design, and comprehensive
            IT services, we are committed to delivering exceptional digital
            solutions tailored to our clients&apos; unique needs.
          </div>
          <div className="mt-2">
            ━ Our <span className="text-green-400">mission</span> is to empower
            businesses to thrive in the digital world by crafting innovative and
            impactful online platforms. We believe in creating a seamless client
            experience built on <span className=" underline">trust</span>,{" "}
            <span className="underline">excellence</span>, and a touch of{" "}
            <span className="underline">fun</span>. As one of the first digital
            agencies in Algeria, we are excited to shape the digital landscape
            and drive positive change.
          </div>
          <div className="mt-2">
            ━ Our team comprises skilled <span className=" underline">web</span>{" "}
            and <span className=" underline">mobile</span>{" "}
            <span className="text-green-400">developers</span>, talented
            <span className="text-green-400">designers</span>, and IT
            specialists who are passionate about their craft. We offer a diverse
            range of services, including web and app development, design, and
            comprehensive IT support. Our goal is to be a trusted partner to
            businesses of all sizes, helping them achieve their digital
            aspirations.
          </div>
          <div className="mt-2">
            ━ While we are a young agency, we are eager to make a significant
            impact on the Algerian digital market. Our commitment to quality,
            innovation, and client satisfaction sets us apart.
          </div>
          <div className="my-5  h-px bg-foreground/25" />
          <div>
            <Team />
          </div>
        </motion.div>
      </div>
      <div className="w-[25%] h-auto overflow-auto rounded-2xl">
        <img
          className=" h-full w-full object-cover"
          src="https://cdn.dribbble.com/userupload/13002800/file/original-8e91c7fb9931b217069d324d084c9846.png?resize=1024x1024"
          alt=""
        />
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-foreground/10">
          <thead>
            <tr>
              <th
                className="px-6 py-3 bg-foreground text-left   
 text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th className="px-6 py-3 bg-foreground text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>{" "}
              <th className="px-6 py-3 bg-foreground text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Skills
              </th>{" "}
            </tr>
          </thead>
          <tbody className="divide-y divide-foreground/50">
            {teamData.map((member) => (
              <tr key={member.name}>
                <td className="px-6 py-4 whitespace-nowrap flex items-center gap-2">
                  <div className="h-10 w-10">
                    <img
                      className=" w-full h-full object-cover rounded-full"
                      src={member.image}
                      alt={member.name}
                    />
                  </div>
                  <div className="text-sm italic">{member.name}</div>
                </td>
                <td className="px-6 py-4 text-sm ">{member.role}</td>
                <td className="px-6 py-4  text-sm">{member.skills}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WhoOblique;
