"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Github, Lock } from "lucide-react";
import { MyProjects } from "../data/categories";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Link from "next/link";
import { Domain } from "../data/idontknowhattonamethis";

const DescriptiveContent = ({ id }: { id: string }) => {
  const TheLilProject = MyProjects.filter((item) => item.id == id);
  const Suggestions = MyProjects.filter(
    (project) => TheLilProject[0].roles == project.roles && project.id != id
  );
  return (
    <div className="mt-24 wrapper">
      <div>
        {TheLilProject.map((item, i) => (
          <div key={i}>
            <div className="flex items-center gap-1">
              {item.category.map((subItem, i) => (
                <div
                  className="bg-primary/25 border border-primary/50 px-3 py-0.5 text-foreground text-sm rounded-full"
                  key={i}
                >
                  {subItem}
                </div>
              ))}
            </div>
            <div className="text-6xl mt-2 flex items-center justify-between ">
              <div>{item.name} </div>
              <div className="text-xl flex items-center gap-2">
                <div>
                  <Calendar size={15} />
                </div>
                <div>{item.date} ━</div>
              </div>
            </div>
            <div className="mt-2 opacity-75 flex items-center justify-between">
              <div>
                {" "}
                wrapped in <span className="underline">gold</span> and{" "}
                <span className="underline">joy</span> to our precious client{" "}
                <span className=" italic">{item.client}</span>
              </div>
              <div>
                {item.isOpenSource ? (
                  <a href={item.codesource} target="_blank">
                    <div className="flex items-center gap-3 bg-primary/25 hover:bg-primary/35 border border-primary/25 px-4 py-0.5 rounded-full">
                      <div className="text-sm">Open Source</div>
                      <div>
                        <Github size={13} />
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="flex cursor-default items-center gap-3 bg-destructive/50 border border-destructive/25 px-4 py-0.5 rounded-full">
                    <div className="text-sm">Close Source</div>
                    <div>
                      <Lock size={13} />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-10">
              <Carousel className=" rounded-t-3xl overflow-hidden ">
                <CarouselContent className="">
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
                    className="flex items-start justify-between"
                  >
                    <div className="flex items-center gap-1">
                      <CarouselPrevious />
                      <CarouselNext />
                    </div>
                    <div>
                      <a
                        target="_blank"
                        className="text-sm opacity-75 hover:opacity-100 transition-all"
                        href={item.websiteURL}
                      >
                        <div className="flex items-center gap-2">
                          <div>
                            Check <span className=" italic">{item.name}</span>{" "}
                            Website
                          </div>
                          <div>
                            <ArrowUpRight size={13} />
                          </div>
                        </div>
                      </a>
                    </div>
                  </motion.div>
                </div>
              </Carousel>
            </div>
            <div className="p-5 max-w-5xl mx-auto mt-10">{item.desc}</div>
            <div className="my-4 bg-foreground/25 h-px w-full" />
            <div className="mt-10">
              <div className="text-3xl mb-3">Similar projects we made</div>
              <div>
                {Suggestions.length == 0 ? (
                  <div className="flex items-center justify-center pt-10 opacity-75">
                    unavailable similar projects {`:<`}
                  </div>
                ) : (
                  <div>
                    {Suggestions.map((item, i) => (
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
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DescriptiveContent;
