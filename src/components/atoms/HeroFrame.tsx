import clsx from "clsx";
import React from "react";

type SectionTitleProps = {
  children: React.ReactNode;
};

const HeroFrame: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <section
      className={clsx(
        "flex flex-col",
        "desktop:gap-[20px] desktop:h-[calc(100vh-116px)]",
        "laptop:px-[80px] desktop:h-[calc(100vh-110px)]",
        "tablet:px-[60px] tablet:py-[60px] tablet:gap-[15px] tablet:h-[calc(100vh-118px)] tablet:items-start tablet:justify-end",
        "px-[40px] py-[60px] gap-[30px] h-[calc(100vh-143px)] items-center justify-center"
      )}>
      {children}
    </section>
  );
};

export default HeroFrame;
