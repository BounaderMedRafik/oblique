"use client";
import React, { useState } from "react";
import { MyProjects, Workies } from "../data/categories";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Domain } from "../data/idontknowhattonamethis";

const Gallery = ({ paramsId }: { paramsId: string | string[] }) => {
  const [cat, setCat] = useState(paramsId);

  return (
    <div className="wrapper">
      <div className="flex items-center">
        {Workies.map((item, i) => (
          <motion.div
            initial={{
              y: 10,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{ duration: 0.5 * i }}
            onClick={() => {
              setCat(item.id);
            }}
            className=" cursor-pointer"
            key={i}
          >
            <div
              className={cn(
                "text-sm px-3 flex items-center gap-2 py-0.5 rounded-full bg-transparent opacity-75 transition-all hover:opacity-100",
                cat === item.id ? "bg-primary text-white opacity-100" : null
              )}
            >
              <div>{item.name}</div>
              <div>{item.icon}</div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="pt-10 ">
        {MyProjects.filter((item) => item.roles == cat || "all").map(
          (item, i) => (
            <div key={i}>
              {item.roles == cat ? (
                <AnimatePresence mode="wait">
                  <Link href={`${Domain}works/project/${item.id}`}>
                    <motion.div
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      exit={{
                        opacity: 0,
                      }}
                      transition={{ duration: 0.5 * i, ease: "easeOut" }}
                      className=" px-4 dark:px-0 group flex items-center justify-between py-3 hover:bg-primary/10 transition-all cursor-pointer"
                    >
                      <div className="opacity-75 group-hover:opacity-100 transition-all">
                        {item.name} ── {item.client}
                      </div>
                      <div className="text-xs opacity-75 flex items-center gap-2">
                        <div>{item.date}</div>
                        <div>
                          <ArrowUpRight size={15} />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </AnimatePresence>
              ) : cat == "all" ? (
                <AnimatePresence mode="wait">
                  <Link href={`${Domain}works/project/${item.id}`}>
                    <motion.div
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      exit={{
                        opacity: 0,
                      }}
                      transition={{ duration: 0.5 * i, ease: "easeOut" }}
                      className=" px-4 dark:px-0 group flex items-center justify-between py-3 hover:bg-primary/10 transition-all cursor-pointer"
                    >
                      <div className="opacity-75 group-hover:opacity-100 transition-all">
                        {item.name} ── {item.client}
                      </div>
                      <div className="text-xs opacity-75 flex items-center gap-2">
                        <div>{item.date}</div>
                        <div>
                          <ArrowUpRight size={15} />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </AnimatePresence>
              ) : null}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Gallery;
