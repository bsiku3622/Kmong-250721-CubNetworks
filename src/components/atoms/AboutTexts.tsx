import clsx from "clsx";
import { LineBreakWithSpacing } from "./InTextComponents";

const AboutTexts = () => {
  return (
    <div
      className={clsx(
        "text-[14px] leading-[20px] tracking-[-0.7px] text-neutral-900 gap-[10px] text-center flex flex-col items-center max-w-[360px] tablet:max-w-[1000px]",
        "tablet:text-[16px] tablet:leading-[24px] tablet:tracking-[-0.8px]",
        "laptop:text-[20px] laptop:leading-[28px] laptop:tracking-[-1px]",
        "desktop:text-[22px] desktop:leading-[30px] desktop:tracking-[-1.1px]"
      )}>
      <p>
        (주)큐브네트웍스는 모의해킹을 중심으로 정보보안 컨설팅을 전문으로 하는
        기업으로
        {<LineBreakWithSpacing type="after" level="tablet" />}
        다양한 산업 분야에 투입되어 보안 취약점을 진단하고 최적의 보안 솔루션을
        제공합니다.
      </p>
      <p>
        사내 기술 교육과 지식 공유를 활발히 진행하며, 여러 보안 전문 업체와
        협력하여
        {<LineBreakWithSpacing type="after" level="tablet" />}
        고객에게 높은 수준의 인적·지적 보안 서비스를 제공하기 위해 최선을 다하고
        있습니다.
      </p>
      <p>
        또한 체계적인 사내 교육 시스템과 실전 중심의 기술 트레이닝을 통해
        {<LineBreakWithSpacing type="after" level="tablet" />}
        정보보안 분야의 전문성과 실무 능력을 고루 갖춘 인재를 육성하고 있으며,
        {<LineBreakWithSpacing type="after" level="tablet" />}
        자기개발을 위한 자격 취득 지원 및 커리어 성장 프로그램을 운영하고,
        {<LineBreakWithSpacing type="after" level="tablet" />}
        고객에게는 검증된 최고 수준의 기술 인력을 안정적으로 제공합니다.
      </p>
    </div>
  );
};
export default AboutTexts;
