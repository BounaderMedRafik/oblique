import React from "react";

export default function ProjectSinglePage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return <div className="pt-24">{params.id}</div>;
}
