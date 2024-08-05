import React from "react";

const Logo = () => {
  return (
    <div>
      <div className=" dark:block hidden">
        <img className=" w-14" src="\brand\LogoForDarkMode.png" alt="oblique" />
      </div>
      <div className=" dark:hidden block">
        <img
          className=" w-14"
          src="\brand\LogoForLightMode.png"
          alt="oblique"
        />
      </div>
    </div>
  );
};

export default Logo;
