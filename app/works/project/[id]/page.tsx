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
    <div className="pt-24">
      <div>
        <DescriptiveContent id={params.id} />
      </div>
    </div>
  );
}
