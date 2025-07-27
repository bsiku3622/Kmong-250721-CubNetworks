import clsx from "clsx";
import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string; // Optional image prop for future use
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
}) => (
  <div
    className={clsx(
      `rounded-[24px] shadow-[0_12px_12px_0_rgba(0,0,0,0.05)] h-30 relative flex bg-neutral-900`,
      "h-[200px] tablet:h-[300px] desktop:h-[280px]"
    )}>
    <img
      src={image}
      alt="service"
      className={`flex w-full object-cover rounded-[24px] opacity-20`}
    />
    <div
      className={clsx(
        "flex flex-col absolute w-full h-full justify-center rounded-[24px]",
        "items-center px-[30px] gap-[10px] text-center",
        ""
      )}>
      <h3
        className={clsx(
          "text-neutral-100 font-semibold",
          "text-[18px] leading-[22px] tracking-[-0.425px]",
          "tablet:text-[20px] tablet:leading-[28px] tracking-[-0.5px]",
          "desktop:text-[26px] desktop:leading-[38px] tracking-[-0.65px]"
        )}>
        {title}
      </h3>
      <p
        className={clsx(
          "text-neutral-300 font-semibold",
          "text-[14px] leading-[20px] tracking-[-0.325px]",
          "tablet:text-[16px] tablet:leading-[24px] tracking-[-0.35px]",
          "desktop:text-[20px] desktop:leading-[30px] tracking-[-0.5px]"
        )}>
        {description}
      </p>
    </div>
  </div>
);

export default ServiceCard;
