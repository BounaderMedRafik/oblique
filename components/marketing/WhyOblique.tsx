"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const whyChooseUs = [
  {
    title: "Expert Web App Development",
    reasons: [
      {
        subTitle: "Tailored Solutions",
        desc: "We create custom web applications that meet your specific business needs.",
      },
      {
        subTitle: "User-Centric Design",
        desc: "Our web apps are designed with the user experience in mind.",
      },
    ],
    image:
      "https://cdn.dribbble.com/userupload/15500755/file/original-c8f7c709ed1e4410caea091a1f434b04.jpg?resize=752x",
    imageRef: "Ray Dak Lam",
  },
  {
    title: "Innovative Mobile App Development",
    reasons: [
      {
        subTitle: "Cross-Platform Compatibility",
        desc: "Our apps work seamlessly on iOS and Android devices.",
      },
      {
        subTitle: "Engaging User Interfaces",
        desc: "We build visually appealing and intuitive mobile apps.",
      },
    ],
    image:
      "https://cdn.dribbble.com/userupload/12866274/file/original-3fe52c0b5e55869c6c7c9207c5e9ceb6.jpg?resize=752x",
    imageRef: "Pavlov Visuals",
  },
  {
    title: "Comprehensive IT Services",
    reasons: [
      {
        subTitle: "IT Support and Maintenance",
        desc: "We provide ongoing IT support to keep your systems running smoothly.",
      },
      {
        subTitle: "Cybersecurity Solutions",
        desc: "Protect your data with our robust cybersecurity measures.",
      },
    ],
    image:
      "https://cdn.dribbble.com/userupload/8798437/file/original-72310a4c9684e812b762fbaad36e0767.jpg?resize=1024x1024",
    imageRef: "Kemal Sanli",
  },
  {
    title: "Focused on Education",
    reasons: [
      {
        subTitle: "Student-Friendly Solutions",
        desc: "We develop tools to enhance the learning experience for students.",
      },
      {
        subTitle: "Collaboration with Universities",
        desc: "We partner with universities to create innovative educational solutions.",
      },
    ],
    image:
      "https://cdn.dribbble.com/userupload/14588183/file/original-838743405e8f2bfa8bdb77b2c3f37818.jpg?resize=1024x1379",
    imageRef: "Sasha LSRBLST",
  },
  {
    title: "Proven Track Record",
    reasons: [
      {
        subTitle: "Successful Projects",
        desc: "We have a history of delivering successful projects for our clients.",
      },
      {
        subTitle: "Client Satisfaction",
        desc: "Our clients are our top priority, and we strive for their satisfaction.",
      },
    ],
    image:
      "https://cdn.dribbble.com/userupload/14064367/file/original-828022b40f6f392518395f8ffecb9042.jpg?resize=1024x991",
    imageRef: "Alexandra Zutto",
  },
];

const WhyOblique = () => {
  const [tab, setTab] = useState("none");

  return (
    <div id="why" className="pt-64 wrapper">
      <div className="text-5xl font-Climate">
        Why <span className="text-primary uppercase">Oblique</span> ?
      </div>
      <div className="text-sm  opacity-75 mt-2 max-w-md">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, quod!
        Magnam placeat explicabo animi reprehenderit!
      </div>
      <motion.div className=" divide-y  divide-foreground/40 mt-5">
        {whyChooseUs.map((item, i) => (
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{ duration: 0.5 * i }}
            key={i}
          >
            <div
              onClick={() => {
                if (tab != item.title) {
                  setTab(item.title);
                } else {
                  setTab("none");
                }
              }}
              className={cn(
                "flex items-center justify-between opacity-75 hover:opacity-100 transition-all cursor-pointer",
                tab === item.title
                  ? "text-primary opacity-100"
                  : "text-foreground/50 "
              )}
            >
              <div className="text-xl font-semibold py-4">{item.title}</div>
              <div>
                <Plus
                  className={cn(
                    "transition-all ",
                    item.title == tab ? "rotate-45" : null
                  )}
                  size={15}
                />
              </div>
            </div>
            {tab == item.title ? (
              <div className="px-5 pb-3 flex items-center">
                <div>
                  {item.reasons.map((subItem, i) => (
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{ delay: 0.3 * i }}
                      key={i}
                    >
                      <div className="flex items-center gap-2 font-semibold mt-2">
                        <div>
                          <Minus size={13} />
                        </div>
                        <div>{subItem.subTitle}</div>
                      </div>
                      <div className="flex items-center">
                        <div className="text-sm opacity-75  p-4 py-0.5">
                          <div>{subItem.desc}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{ delay: 0.3 * item.reasons.length }}
                  className=" h-32 w-full relative"
                >
                  <img
                    className="w-full h-full object-cover"
                    src={item.image}
                  />
                  <div className=" absolute bottom-3 right-3 text-xs bg-background px-4 py-0.5 flex items-center">
                    <div>@{item.imageRef}</div>
                    <div>
                      <Minus size={13} />
                    </div>
                    <div>Dribbble</div>
                  </div>
                </motion.div>
              </div>
            ) : null}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default WhyOblique;
