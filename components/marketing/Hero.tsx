"use client";
import React, { useRef } from "react";
import { FlipWords } from "../ui/flip-words";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowUpRight, Minus } from "lucide-react";

const words = [
  "digital•life",
  "vie•numérique",
  "vida•digital",
  "デジタルライフ",
];
const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const rotation = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scaling = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <>
      <div className="relative  overflow-hidden" ref={ref}>
        <motion.div
          className="w-[800px] h-[500px] absolute z-10  left-1/2  -translate-x-1/2
         -top-64 bg-primary/35 rounded-full  blur-3xl"
        />
        <div className="flex flex-col items-center justify-center  min-h-[80vh] wrapper">
          <div className="text-5xl font uppercase max-w-6xl text-center mx-auto  font-Climate pb-4 border-b border-foreground/25">
            <div>Your business & ideas</div>
            <motion.div layout>
              <span>━</span> into the{" "}
              <span className=" text-primary">
                <FlipWords words={words} />
              </span>
            </motion.div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <Button>
              <div className="flex items-center gap-2">
                <div>Contact Us</div>
                <div>
                  <Minus size={15} />
                </div>
              </div>
            </Button>
            <Button variant={"link"}>
              <div className="flex items-center gap-2">
                <div>See What We Do</div>
                <div>
                  <ArrowUpRight size={15} />
                </div>
              </div>
            </Button>
          </div>
        </div>
        <motion.div
          style={{
            transformOrigin: "center",
            rotateZ: rotation,
            scale: scaling,
            opacity: opacity,
          }}
          className=" wrapper relative "
        >
          <div className=" w-full h-full absolute top-0 left-0 bg-gradient-to-t from-background from-10% to-80% to-transparent z-20" />
          <img
            className=" h-full w-full rounded-3xl dark:hidden "
            src="/marketing/heroscreen.png"
            alt=""
          />
          <img
            className=" h-full w-full rounded-3xl hidden dark:block"
            src="/marketing/heroscreenDark.png"
            alt=""
          />
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
