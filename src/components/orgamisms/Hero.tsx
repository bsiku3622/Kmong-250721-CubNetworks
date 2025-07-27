import clsx from "clsx";
import React from "react";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import HeroFrame from "../atoms/HeroFrame";
import { LineBreakWithSpacing, Spacing } from "../atoms/InTextComponents";

const Hero: React.FC = () => {
  return (
    <HeroFrame>
      <div
        className={clsx(
          "flex flex-col items-center justify-center",
          "tablet:items-start tablet:justify-start"
        )}>
        <h1
          className={clsx(
            "text-center black-han-sans text-[64px] leading-[64px] tracking-[-6.4px] flex flex-col",
            "tablet:text-[72px] tablet:leading-[72px] tablet:tracking-[-7.2px] tablet:inline",
            "laptop:text-[80px] laptop:leading-[80px] laptop:tracking-[-8px]",
            "desktop:text-[100px] desktop:leading-[100px] desktop:tracking-[-10px]"
          )}>
          <span>정보보안의</span>
          <Spacing type="after" level="tablet" />
          <span>새로운 기준</span>
        </h1>
        <div
          className={clsx(
            "text-[16px] leading-[24px] tracking-[-0.8px] text-neutral-700 text-center",
            "tablet:text-[20px] tablet:leading-[28px] tablet:tracking-[-1px] tablet:text-left",
            "laptop:text-[24px] laptop:leading-[34px] laptop:tracking-[-1.2px]",
            "desktop:text-[28px] desktop:leading-[40px] desktop:tracking-[-1.4px]"
          )}>
          <p>
            전문성과 신뢰를 기반으로 제공하는 보안 컨설팅
            <LineBreakWithSpacing type="before" level="tablet" />
            CuB Networks.
          </p>
          <p>
            정보보안의 미래를 만드는
            <br className="tablet:hidden inline" /> CuB Networks.
          </p>
        </div>
      </div>
      <div className="flex laptop:gap-[15px] tablet:gap-[10px] w-full justify-center tablet:justify-start">
        <button
          className={clsx(
            "bg-neutral-900 text-neutral-100 rounded-[12px] max-w-[360px] py-[14px] w-full text-[16px] leading-[24px] tracking-[-0.32px] flex items-center justify-center font-semibold",
            "tablet:text-[14px] tablet:leading-[20px] tablet:tracking-[-0.28px] tablet:px-[20px] tablet:py-[12px] tablet:gap-[5px] tablet:w-fit",
            "laptop:text-[16px] laptop:leading-[22px] laptop:tracking-[-0.32px] laptop:px-[24px] laptop:py-[14px]",
            "desktop:text-[18px] desktop:leading-[24px] desktop:tracking-[-0.36px] desktop:px-[30px] desktop:py-[16px]"
          )}>
          Discover Now
          <ArrowDown
            size={18}
            strokeWidth={3}
            className="hidden tablet:inline"
          />
        </button>
        <Link
          to="/contact"
          className={clsx(
            "text-neutral-900 border-3 hidden rounded-[12px] border-neutral-900 items-center justify-center font-bold",
            "tablet:text-[14px] tablet:leading-[20px] tablet:tracking-[-0.28px] tablet:px-[20px] tablet:py-[12px] tablet:gap-[5px] tablet:w-fit tablet:flex",
            "laptop:text-[16px] laptop:leading-[22px] laptop:tracking-[-0.32px] laptop:px-[24px] laptop:py-[14px]",
            "desktop:text-[18px] desktop:leading-[24px] desktop:tracking-[-0.36px] desktop:px-[30px] desktop:py-[16px]"
          )}>
          Contact
        </Link>
      </div>
    </HeroFrame>
  );
};

export default Hero;
