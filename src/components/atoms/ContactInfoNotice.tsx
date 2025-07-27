import clsx from "clsx";
import ContactInfoBtn from "./ContactInfoBtn";
import { Link } from "react-router-dom";

const recuitSubTitleStyle = clsx(
  "text-[16px] leading-[24px] tracking-[-0.4px] font-semibold",
  "tablet:text-[18px] tablet:leading-[26px] tablet:tracking-[-0.45px]",
  "laptop:text-[18px] laptop:leading-[26px] laptop:tracking-[-0.45px]",
  "desktop:text-[22px] desktop:leading-[28px] desktop:tracking-[-0.55px]"
);
const recuitTextStyle = clsx(
  "text-[14px] leading-[22px] tracking-[-0.35px] font-light",
  "tablet:text-[16px] tablet:leading-[24px] tablet:tracking-[-0.4px]",
  "desktop:text-[20px] desktop:leading-[26px] desktop:tracking-[-0.5px]"
);

const ContainerStyle = clsx(
  "flex flex-col tablet:flex-row-reverse rounded-[32px] overflow-hidden w-full tablet:max-w-[1200px] shadow-[0_12px_12px_0_rgba(0,0,0,0.05)] max-w-[400px] tablet:min-w-[380px] items-stretch"
);

const recuitTextContainerStyle = clsx(
  "flex flex-col items-start gap-[10px] text-neutral-900 px-[30px] py-[20px] bg-white w-full tablet:w-1/2 tablet:flex-shrink-0 w-full",
  "tablet:gap-[20px] tablet:px-[40px] tablet:py-[40px]"
);

const ContactInfoNotice = () => {
  return (
    <div className={ContainerStyle}>
      <Link
        to={"https://map.naver.com/p/entry/place/1246108126?placePath=%2Fhome"}
        target="_blank"
        className={`h-[200px] tablet:w-1/2 tablet:h-full bg-[url('/images/map.png')]`}>
        <div className={clsx(recuitTextContainerStyle, "opacity-0")}>
          <p>
            <span className={recuitSubTitleStyle}>이</span>
            <span className={recuitTextStyle}>k</span>
          </p>
          <div className="flex flex-col gap-[5px]">
            <p className={recuitSubTitleStyle}>주</p>
            <div>
              <p className={recuitTextStyle}>서</p>
              <p className={recuitTextStyle}>9</p>
            </div>
          </div>
          <p>
            <span className={recuitSubTitleStyle}>영</span>
            <span className={recuitTextStyle}>0</span>
          </p>
          <ContactInfoBtn className="tablet:inline-block hidden" ddd="영" />
        </div>
      </Link>
      <div className={recuitTextContainerStyle}>
        <p>
          <span className={recuitSubTitleStyle}>이메일&nbsp;</span>
          <span className={recuitTextStyle}>kjh@cub.kr</span>
        </p>
        <div className="flex flex-col gap-[5px]">
          <p className={recuitSubTitleStyle}>주소</p>
          <div>
            <p className={recuitTextStyle}>서울시 금천구 가산 디지털1로 225</p>
            <p className={recuitTextStyle}>9층 큐브네트웍스</p>
          </div>
        </div>
        <p>
          <span className={recuitSubTitleStyle}>영업시간&nbsp;</span>
          <span className={recuitTextStyle}>09:00 ~ 18:00</span>
        </p>
        <ContactInfoBtn
          className="tablet:inline-block hidden"
          ddd="1:1 문의하기"
        />
      </div>
    </div>
  );
};

export default ContactInfoNotice;
