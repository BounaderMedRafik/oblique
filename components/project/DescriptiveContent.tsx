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

const DescriptiveContent = ({ id }: { id: string }) => {
  const TheLilProject = MyProjects.filter((item) => item.id == id);
  return (
    <div className="mt-24 wrapper">
      <div>
        {TheLilProject.map((item, i) => (
          <div key={i}>
            <div className="text-4xl font-Climate">{item.name} ━ </div>
            <div className="mt-2 opacity-75">
              wrapped in <span className="underline">gold</span> and{" "}
              <span className="underline">joy</span> to our precious client{" "}
              <span className="text-primary">{item.client}</span>
            </div>
            <div>
              <Carousel>
                <CarouselContent>
                  {item.images.map((pic, i) => (
                    <div key={i}>
                      <CarouselItem>
                        <img src={pic} alt={item.name} />
                      </CarouselItem>
                    </div>
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
