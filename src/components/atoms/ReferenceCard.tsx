import clsx from "clsx";

interface ReferenceData {
  year: string;
  references: Array<string>;
}

interface ReferenceProps {
  data: Array<ReferenceData>;
}

const ReferenceCard = ({ data }: ReferenceProps) => {
  return (
    <div
      className={clsx(
        "flex flex-col py-[10px] rounded-[24px] shadow-[0_12px_12px_0_rgba(0,0,0,0.05)] bg-white w-full",
        "tablet:py-[5px]",
        "laptop:py-[10px]",
        "tablet:max-w-[1200px] max-w-[400px]"
      )}>
      {data.map((item: ReferenceData, index) => {
        return (
          <div
            key={index}
            className={clsx(
              "flex flex-col gap-[15px] py-[15px] items-center justify-center text-center",
              "tablet:flex-row tablet:gap-[10px]"
            )}>
            <p
              className={clsx(
                "text-neutral-900 flex w-full h-fit items-center justify-center text-center text-[16px] leading-[24px] tarcking-[-0.4px] font-semibold",
                "tablet:h-full",
                "tablet:w-[160px]",
                "laptop:w-[240px] laptop:text-[20px] laptop:leading-[28px] laptop:tarcking-[-0.5px]",
                "desktop:w-[240px] desktop:text-[22px] desktop:leading-[30px] desktop:tarcking-[-0.55px]"
              )}>
              {item.year}
            </p>
            <div
              className={clsx(
                "flex flex-col gap-[10px] py-[15px] px-[10px] items-center justify-center text-center w-full text-[14px] leading-[20px] tracking-[-0.35px] font-light text-neutral-700",
                "tablet:items-start tablet:justify-center tablet:text-start",
                "tablet:gap-[10px] tablet:py-[20px] tablet:px-[15px] tablet:text-[14px] tablet:leading-[18px] tablet:tracking-[-0.35px]",
                "laptop:text-[18px] laptop:leading-[26px] laptop:tracking-[-0.45px]",
                "desktop:text-[20px] desktop:leading-[28px] desktop:tracking-[-0.5px]"
              )}>
              {item.references.map((ref, refIndex) => {
                return <p key={refIndex}>{ref}</p>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReferenceCard;
