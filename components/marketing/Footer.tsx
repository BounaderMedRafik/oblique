import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { ArrowUpRight, Minus } from "lucide-react";
import { ModeToggle } from "../ui/ModeToggle";
import { buttonVariants } from "../ui/button";

const normalItems = [
  {
    name: "Why Oblqiue ?",
    href: "/#why",
  },
  {
    name: "Who we are ?",
    href: "/#who-we-are",
  },
  {
    name: "Instagram",
    href: "/",
  },
  {
    name: "Facebook",
    href: "/",
  },
  {
    name: "Linkedin",
    href: "/",
  },
];

const Footer = () => {
  return (
    <div className="wrapper">
      <div className="flex items-center justify-between">
        <div>
          <Logo withText />
        </div>
        <div>
          <div className="flex items-center gap-0.5">
            <Link
              className={buttonVariants({
                variant: "default",
                size: "sm",
              })}
              href={"/"}
            >
              <div className="flex items-center gap-2">
                <div>Book With Us</div>
                <div>
                  <Minus size={15} />
                </div>
                <div>For Free</div>
              </div>
            </Link>
            <div>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 text-xs opacity-75 flex items-center justify-between">
        <div>oblique&copy; ━ 2024/2025</div>
        <div className="flex items-center">
          {normalItems.map((item, i) => (
            <div key={i}>
              <a
                className=" cursor-pointer opacity-75 hover:opacity-100 text-xs px-3 py-2 flex items-center gap-2"
                href={item.href}
              >
                <div className="flex items-center gap-2">
                  <div>{item.name}</div>
                  <div>
                    <ArrowUpRight size={15} />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
