import clsx from "clsx";
import React from "react";

type SectionTitleProps = {
  children: React.ReactNode;
};

const SectionFrame1: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <section
      className={clsx(
        "px-[40px] py-[40px] gap-[30px] w-full flex flex-col items-center",
        "tablet:gap-[40px]",
        "laptop:px-[80px] laptop:py-[60px]",
        "desktop:px-[120px] desktop:py-[60px]"
      )}>
      {children}
    </section>
  );
};

export default SectionFrame1;
