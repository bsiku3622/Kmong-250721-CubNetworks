import clsx from "clsx";
import { Link } from "react-router-dom";
const ContactInfoBtn = ({
  className,
  ddd,
}: {
  className?: string;
  ddd: string;
}) => {
  return (
    <Link
      to={"/contact"}
      className={clsx(
        "w-full py-[14px] text-[14px] leading-[18px] tracking-[-0.7px] rounded-[12px] bg-neutral-900 text-neutral-50 font-semibold items-center justify-center max-w-[400px]",
        "tablet:w-fit tablet:py-[10px] tablet:px-[32px] tablet:text-[12px] tablet:leading-[18px] tablet:tracking-[-0.6px]",
        "laptop:py-[14px] laptop:px-[48px] laptop:text-[16px] laptop:leading-[20px] laptop:tracking-[-0.8px]",
        "desktop:text-[20px] desktop:leading-[26px] desktop:tracking-[-1px]",
        className
      )}>
      {ddd}
    </Link>
  );
};

export default ContactInfoBtn;
