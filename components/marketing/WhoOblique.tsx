"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    </div>
  );
};

const CarouselifyBaby = () => {
  return <div>carousel</div>;
};

export default WhoOblique;
