import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";
const RecuitBtn: React.FC = () => {
  return (
    <Link
      to={"https://www.jobkorea.co.kr/Recruit/GI_Read/47087063"}
      target="_blank"
      className={clsx(
        "px-[20px] py-[14px] text-[16px] leading-[24px] tracking-[-0.8px] rounded-[12px] bg-neutral-900 text-neutral-50",
        "laptop:px-[26px] laptop:py-[16px] laptop:text-[18px] laptop:leading-[24px] laptop:tracking-[-0.9px]",
        "desktop:px-[30px] desktop:py-[20px] desktop:text-[22px] desktop:leading-[26px] desktop:tracking-[-1.1px]"
      )}>
      잡코리아에서 지원하기
    </Link>
  );
};

export default RecuitBtn;
