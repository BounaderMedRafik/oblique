"use client";
import Gallery from "@/components/works/Gallery";
import Hero from "@/components/works/Hero";
import { useParams } from "next/navigation";
import React from "react";

export default function WorksPage() {
  const { id } = useParams();

  console.log(id);
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div>
        <Gallery paramsId={id} />
      </div>
    </div>
  );
}
