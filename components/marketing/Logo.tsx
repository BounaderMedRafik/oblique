"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Logo = ({ withText }: { withText?: boolean }) => {
  return (
    <Link href={"/"}>
      {!withText ? (
        <div>
          <motion.div
            initial={{
              rotate: "90deg",
            }}
            animate={{
              rotate: "0deg",
            }}
            whileHover={{
              rotate: "90deg",
            }}
          >
            <img
              className=" w-10 dark:invert"
              src="\brand\MyFknLogo.png"
              alt="oblique"
            />
          </motion.div>
        </div>
      ) : (
        <div>
          <motion.div className="group flex items-center ">
            <div>
              <img
                className=" h-10 dark:invert"
                src="\brand\MyFknLogoWithText.png"
                alt="oblique"
              />
            </div>
          </motion.div>
        </div>
      )}
    </Link>
  );
};

export default Logo;
