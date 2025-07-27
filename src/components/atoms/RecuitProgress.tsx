import clsx from "clsx";
import { Arrow, SmallArrow } from "./Arrow";

const RecuitProgressBtn = ({ text }: { text: string }) => {
  return (
    <div
      className={clsx(
        "px-[18px] py-[12px] text-[14px] leading-[20px] tracking-[-0.7px] text-center rounded-[10px]",
        "tablet:px-[20px] tablet:py-[14px] tablet:text-[16px] tablet:leading-[24px] tablet:tracking-[-0.8px] tablet:rounded-[12px]",
        "laptop:px-[26px] laptop:py-[16px] laptop:text-[18px] laptop:leading-[24px] laptop:tracking-[-0.9px]",
        "desktop:px-[30px] desktop:py-[20px] desktop:text-[22px] desktop:leading-[26px] desktop:tracking-[-1.1px]",
        "bg-neutral-800 text-white"
      )}>
      {text}
    </div>
  );
};

const RecuitProgress: React.FC = () => {
  return (
    <>
      <div className="tablet:hidden flex flex-col gap-[15px]">
        <div className="flex gap-[10px] items-center justify-center">
          <SmallArrow className="opacity-0" />
          <RecuitProgressBtn text="채용지원" />
          <SmallArrow />
          <RecuitProgressBtn text="서류평가" />
          <SmallArrow />
        </div>
        <div className="flex gap-[10px] items-center justify-center">
          <SmallArrow />
          <RecuitProgressBtn text="실무면접" />
          <SmallArrow />
          <RecuitProgressBtn text="임원면접" />
          <SmallArrow />
        </div>
        <div className="flex gap-[10px] items-center justify-center">
          <SmallArrow />
          <RecuitProgressBtn text="최종합격" />
          <SmallArrow className="opacity-0" />
        </div>
      </div>
      <div className="laptop:hidden tablet:flex hidden gap-[10px] items-center justify-center">
        <RecuitProgressBtn text="채용지원" />
        <SmallArrow />
        <RecuitProgressBtn text="서류평가" />
        <SmallArrow />
        <RecuitProgressBtn text="실무면접" />
        <SmallArrow />
        <RecuitProgressBtn text="임원면접" />
        <SmallArrow />
        <RecuitProgressBtn text="최종합격" />
      </div>
      <div className="laptop:flex hidden gap-[10px] items-center justify-center">
        <RecuitProgressBtn text="채용지원" />
        <Arrow />
        <RecuitProgressBtn text="서류평가" />
        <Arrow />
        <RecuitProgressBtn text="실무면접" />
        <Arrow />
        <RecuitProgressBtn text="임원면접" />
        <Arrow />
        <RecuitProgressBtn text="최종합격" />
      </div>
    </>
  );
};

export default RecuitProgress;
