"use client";
import React, { useState } from "react";
import { MyProjects, Workies } from "../data/categories";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
      <div className="mt-10">
        <WorksGallery category={paramsId} />
      </div>
    </div>
  );
};

const WorksGallery = ({ category }: { category: string | string[] }) => {
  return (
    <div className=" divide-y divide-foreground/25">
      {MyProjects.map((item, i) => (
        <div key={i}>
          <div className="py-4 px-2">{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
