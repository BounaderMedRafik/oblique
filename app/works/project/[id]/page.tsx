import Footer from "@/components/marketing/Footer";
import DescriptiveContent from "@/components/project/DescriptiveContent";
import React from "react";

export default function ProjectSinglePage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return (
    <div className="pt-24 relative">
      <div className="h-96 wrapper w-full bg-primary/50 rounded-full absolute -top-52 blur-2xl left-1/2 -translate-x-1/2" />
      <div>
        <DescriptiveContent id={params.id} />
      </div>
      <div className=" h-[25vh]" />
      <div>
        <Footer />
      </div>
    </div>
  );
}
