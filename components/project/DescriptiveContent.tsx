"use client";
import React from "react";
import { MyProjects } from "../data/categories";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const DescriptiveContent = ({ id }: { id: string }) => {
  const TheLilProject = MyProjects.filter((item) => item.id == id);
  return (
    <div className="mt-24 wrapper">
      <div>
        {TheLilProject.map((item, i) => (
          <div key={i}>
            <div className="text-6xl flex items-center justify-between ">
              <div>{item.name} </div>
              <div className="text-xl flex items-center gap-2">
                <div>
                  <Calendar size={15} />
                </div>
                <div>{item.date} ━</div>
              </div>
            </div>
            <div className="mt-2 opacity-75">
              wrapped in <span className="underline">gold</span> and{" "}
              <span className="underline">joy</span> to our precious client{" "}
              <span className=" italic">{item.client}</span>
            </div>
            <div className="mt-10">
              <Carousel>
                <CarouselContent>
                  {item.images.map((pic, i) => (
                    <CarouselItem key={i}>
                      <img
                        className=" h-full rounded-3xl w-full object-cover"
                        src={pic}
                        alt={item.name}
                      />
                    </CarouselItem>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default DescriptiveContent;
