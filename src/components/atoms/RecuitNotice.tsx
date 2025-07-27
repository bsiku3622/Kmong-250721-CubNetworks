import clsx from "clsx";
import RecuitImage from "../../assets/images/recruit.jpg";

const recuitTitleStyle = clsx(
  "text-[18px] leading-[26px] tracking-[-0.45px] font-semibold",
  "tablet:text-[22px] tablet:leading-[28px] tablet:tracking-[-0.55px]",
  "laptop:text-[28px] laptop:leading-[40px] laptop:tracking-[-0.7px]"
);
const recuitSubTitleStyle = clsx(
  "text-[16px] leading-[24px] tracking-[-0.4px] font-semibold mb-[5px]",
  "tablet:text-[18px] tablet:leading-[26px] tablet:tracking-[-0.45px] tablet:mb-[10px]",
  "laptop:text-[24px] laptop:leading-[32px] laptop:tracking-[-0.6px]"
);
const recuitTextStyle = clsx(
  "text-[14px] leading-[20px] tracking-[-0.35px] font-light",
  "tablet:text-[16px] tablet:leading-[24px] tablet:tracking-[-0.4px]",
  "desktop:text-[18px] desktop:leading-[26px] desktop:tracking-[-0.45px]"
);

const ContainerStyle = clsx(
  "flex flex-col tablet:flex-row rounded-[32px] overflow-hidden w-full tablet:max-w-[1200px] shadow-[0_12px_12px_0_rgba(0,0,0,0.05)] max-w-[400px] tablet:min-w-[380px]"
);

const recuitTextContainerStyle = clsx(
  "flex flex-col items-start gap-[10px] text-neutral-900 px-[30px] pt-[20px] pb-[40px] bg-white w-full tablet:w-auto tablet:flex-shrink-0 w-full flex-grow",
  "tablet:gap-[20px] tablet:px-[40px] tablet:py-[40px]"
);

const RecuitNotice = () => {
  return (
    <div className={ContainerStyle}>
      <img
        src={RecuitImage}
        alt="recuit.jpg"
        className="h-[180px] laptop:w-1/2 tablet:h-auto tablet:w-2/5 object-cover"></img>
      <div className={recuitTextContainerStyle}>
        <h3 className={recuitTitleStyle}>포지션 및 자격요건</h3>
        <div>
          <h5 className={recuitSubTitleStyle}>당담 업무</h5>
          <p className={recuitTextStyle}> &bull; 웹/모바일 취약점 진단</p>
          <p className={recuitTextStyle}> &bull; 인프라 취약점 진단</p>
        </div>
        <div>
          <h5 className={recuitSubTitleStyle}>자격 요건</h5>
          <p className={recuitTextStyle}>
            {" "}
            &bull; 학력: 4년제 대졸 이상{" "}
            <span className="tablet:inline hidden">(졸업 예정자 가능)</span>
          </p>
          <p className={clsx(recuitTextStyle, "tablet:hidden block")}>
            &nbsp;&nbsp;&nbsp;(졸업 예정자 가능)
          </p>
        </div>
        <div>
          <h5 className={recuitSubTitleStyle}>복리후생</h5>
          <p className={recuitTextStyle}> &bull; 웰컴 키트</p>
          <p className={recuitTextStyle}> &bull; 업무 장비 지원</p>
          <p className={recuitTextStyle}> &bull; 신입 사원 멘토링</p>
          <p className={recuitTextStyle}> &bull; 자격증 취득 지원</p>
          <p className={recuitTextStyle}> &bull; 성과급</p>
          <p className={recuitTextStyle}> &bull; 그 외 다수</p>
        </div>
      </div>
    </div>
  );
};

export default RecuitNotice;
