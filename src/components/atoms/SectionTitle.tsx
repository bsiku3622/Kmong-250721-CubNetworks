import clsx from "clsx";
import React from "react";

type SectionTitleProps = {
  children: React.ReactNode;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <h1
      className={clsx(
        "bebas-neue text-[40px] leading-[44px] tracking-[-1px] text-neutral-900",
        "tablet:text-[56px] tablet:leading-[64px] tablet:tracking-[-1.4px]",
        "laptop:text-[72px] laptop:leading-[80px] laptop:tracking-[-1.8px]",
        "desktop:text-[80px] desktop:leading-[90px] desktop:tracking-[-2px]"
      )}>
      {children}
    </h1>
  );
};

export default SectionTitle;
