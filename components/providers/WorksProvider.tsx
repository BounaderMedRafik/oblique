"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

const WorksProvider = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  const router = useRouter();
  if (path == "/works") {
    router.push("/works/all");
  }

  return <div>{children}</div>;
};

export default WorksProvider;
