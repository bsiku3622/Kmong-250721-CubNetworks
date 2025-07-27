import clsx from "clsx";
import React from "react";

type SectionTitleProps = {
  children: React.ReactNode;
};

const SectionFrame2: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <section
      className={clsx(
        "px-[40px] py-[40px] gap-[40px] w-full flex flex-col items-center",
        "tablet:px-[80px] tablet:py-[60px]",
        "laptop:px-[120px]",
        "desktop:px-[180px]"
      )}>
      {children}
    </section>
  );
};

export default SectionFrame2;
