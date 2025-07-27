import clsx from "clsx";

interface PartnersCardProps {
  partnerNames: Array<string>;
}

const PartnersCard = ({ partnerNames }: PartnersCardProps) => {
  return (
    <div
      className={clsx(
        "flex flex-col py-[60px] px-[60px] gap-[80px] rounded-[24px] items-center justify-center shadow-[0_12px_12px_0_rgba(0,0,0,0.05)] bg-white w-full tablet:max-w-[1200px] max-w-[400px]",
        "tablet:grid tablet:grid-cols-4",
        "laptop:py-[80px] laptop:px-[80px]"
      )}>
      {partnerNames.map((items, _) => {
        return (
          <div className="w-full flex items-center justify-center">{items}</div>
        );
      })}
    </div>
  );
};

export default PartnersCard;
