import clsx from "clsx";
import React from "react";
import SectionTitle from "../atoms/SectionTitle";
import SectionFrame1 from "../atoms/SectionFrame1";
import ServiceCard from "../atoms/ServiceCard";
import ServiceImage1 from "../../assets/images/service-1.png";
import ServiceImage2 from "../../assets/images/service-2.png";
import ServiceImage3 from "../../assets/images/service-3.png";
import ServiceImage4 from "../../assets/images/service-4.png";
import ServiceImage5 from "../../assets/images/service-5.png";
import ServiceImage6 from "../../assets/images/service-6.png";
import ServiceCardList from "../atoms/ServiceCardList";

const Services: React.FC = () => {
  return (
    <SectionFrame1>
      <SectionTitle>Services</SectionTitle>

      <div className="flex flex-col gap-[30px] items-center w-full">
        <ServiceCardList />
        <div
          className={clsx(
            "w-full gap-[30px] max-w-[320px] desktop:max-w-[1200px] laptop:max-w-[900px] tablet:max-w-[640px] hidden tablet:grid",
            "grid-cols-1",
            "tablet:grid-cols-2",
            "laptop:grid-cols-3"
          )}>
          <ServiceCard
            title="정보보호 관리 체계/인증 컨설팅"
            description="ISMS-P, ISO27001 등 주요 보안 인증을 위한 체계적 컨설팅을 지원합니다."
            image={ServiceImage1}
          />
          <ServiceCard
            title="정보보호 솔루션 제공"
            description="고객 환경에 최적화된 보안 솔루션을 제안합니다."
            image={ServiceImage2}
          />
          <ServiceCard
            title="웹 어플리케이션 해킹"
            description="최신 웹 공격 기법을 반영한 실전 모의해킹으로 보안 취약점을 진단합니다."
            image={ServiceImage3}
          />
          <ServiceCard
            title="모바일 어플리케이션 해킹"
            description="Android, iOS 앱에 대한 정밀 해킹 테스트로 보안 위협을 사전에 차단합니다."
            image={ServiceImage4}
          />
          <ServiceCard
            title="시나리오 기반 시스템 해킹"
            description="현실적인 공격 시나리오를 기반으로 내부 시스템의 방어력을 검증합니다."
            image={ServiceImage5}
          />
          <ServiceCard
            title="인프라 취약점 진단"
            description="전반적인 IT 인프라의 보안 취약점을 종합적으로 진단합니다."
            image={ServiceImage6}
          />
        </div>
      </div>
    </SectionFrame1>
  );
};

export default Services;
