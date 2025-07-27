import clsx from "clsx";
import AboutImageLocate from "../../assets/images/about.jpg";

const AboutImage = () => {
  return (
    <img
      src={AboutImageLocate}
      alt="about.jpg"
      className={clsx(
        "w-full max-w-[1400px] object-cover object-center rounded-[24px] h-[180px]",
        "tablet:h-[220px] laptop:h-[280px] desktop:h-[360px]",
        "shadow-[0_12px_12px_0_rgba(0,0,0,0.05)]"
      )}
    />
  );
};
export default AboutImage;
