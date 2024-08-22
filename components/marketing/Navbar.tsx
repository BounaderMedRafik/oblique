"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Apple,
  AppWindow,
  ArrowUpRight,
  Brush,
  ChevronDown,
  GraduationCap,
  Minus,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { buttonVariants } from "../ui/button";
import { ModeToggle } from "../ui/ModeToggle";
import Logo from "./Logo";

const dropdownItems = [
  {
    name: "What do we do ?",
    items: [
      {
        title: "Web developpment",
        href: "/works/webdev",
        icon: <AppWindow size={15} />,
      },
      {
        title: "App developpment",
        href: "/works/appdev",
        icon: <Apple size={15} />,
      },
      {
        title: "University research",
        href: "/works/uvsearches",
        icon: <GraduationCap size={15} />,
      },
      {
        title: "Design",
        href: "/works/design",
        icon: <Brush size={15} />,
      },
    ],
  },
  // {
  //   name: "Who we target ?",
  //   items: [
  //     {
  //       title: "University students",
  //       href: "/target/uvstudents",
  //       icon: <University size={15} />,
  //     },
  //     {
  //       title: "organization & start-ups",
  //       href: "/target/startups",
  //       icon: <BriefcaseBusiness size={15} />,
  //     },
  //   ],
  // },
];

const normalItems = [
  {
    name: "Why Oblqiue ?",
    href: "/#why",
  },
  {
    name: "Who we are ?",
    href: "/#who-we-are",
  },
];

const Navbar = () => {
  const [tab, setTab] = useState("none");
  return (
    <>
      <div className=" fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur">
        <div className=" border-b border-b-foreground/10">
          <div className="flex items-center wrapper justify-between">
            <div className="flex items-center gap-5">
              <div>
                <Logo />
              </div>
              <div className="flex items-center ">
                {dropdownItems.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setTab(item.name);
                    }}
                    className={cn(
                      " cursor-pointer opacity-75 hover:opacity-100 text-xs px-3 py-2 flex items-center gap-2",
                      tab == item.name ? "bg-foreground/10 opacity-100" : null
                    )}
                  >
                    <div>{item.name}</div>
                    <div
                      className={cn(
                        " transition-all",
                        tab == item.name ? "rotate-180" : null
                      )}
                    >
                      <ChevronDown size={13} />
                    </div>
                  </div>
                ))}
                {normalItems.map((item, i) => (
                  <div key={i}>
                    <a
                      className=" cursor-pointer opacity-75 hover:opacity-100 text-xs px-3 py-2 flex items-center gap-2"
                      href={item.href}
                    >
                      <div className="flex items-center gap-2">
                        <div>{item.name}</div>
                        <div>
                          <ArrowUpRight size={15} />
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-0.5">
              {/* <Link
                className={buttonVariants({
                  variant: "default",
                  size: "sm",
                })}
                href={"/booking-with-us"}
              >
                <div className="flex items-center gap-2">
                  <div>Book With Us</div>
                  <div>
                    <Minus size={15} />
                  </div>
                  <div>For Free</div>
                </div>
              </Link> */}
              <div>
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
        {tab == "none" ? null : (
          <div className="border-b border-b-foreground/10">
            <div className="wrapper">
              {dropdownItems.map((item, i) => (
                <div key={i}>
                  {item.name == tab ? (
                    <div className="flex items-center justify-between ">
                      <motion.div
                        initial={{
                          opacity: 0,
                        }}
                        animate={{
                          opacity: 1,
                        }}
                        className="flex items-center gap-3"
                      >
                        {item.items.map((subItem, i) => (
                          <motion.div
                            initial={{
                              opacity: 0,
                              y: 4,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            transition={{ duration: 0.5 * i }}
                            key={i}
                          >
                            <Link href={subItem.href}>
                              <div className=" flex items-center gap-2 px-4 text-xs opacity-75 hover:opacity-100 transition-all">
                                <div>{subItem.icon}</div>
                                <div>{subItem.title}</div>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                      <div
                        onClick={() => {
                          setTab("none");
                        }}
                        className="opacity-75  bg-transparent hover:bg-foreground/10 p-2  cursor-pointer hover:opacity-100 transition-all"
                      >
                        <div>
                          <X size={15} />
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
