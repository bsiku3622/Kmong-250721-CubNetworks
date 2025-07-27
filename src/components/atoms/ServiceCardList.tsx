// components/ServiceCardList.tsx
import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";
import ServiceImage1 from "../../assets/images/service-1.png";
import ServiceImage2 from "../../assets/images/service-2.png";
import ServiceImage3 from "../../assets/images/service-3.png";
import ServiceImage4 from "../../assets/images/service-4.png";
import ServiceImage5 from "../../assets/images/service-5.png";
import ServiceImage6 from "../../assets/images/service-6.png";

const services = [
  {
    title: "정보보호 관리 체계/인증 컨설팅",
    description:
      "ISMS-P, ISO27001 등 주요 보안 인증을 위한 체계적 컨설팅을 지원합니다.",
    image: ServiceImage1,
  },
  {
    title: "정보보호 솔루션 제공",
    description: "고객 환경에 최적화된 보안 솔루션을 제안합니다.",
    image: ServiceImage2,
  },
  {
    title: "웹 어플리케이션 해킹",
    description:
      "최신 웹 공격 기법을 반영한 실전 모의해킹으로 보안 취약점을 진단합니다.",
    image: ServiceImage3,
  },
  {
    title: "웹 어플리케이션 해킹",
    description:
      "최신 웹 공격 기법을 반영한 실전 모의해킹으로 보안 취약점을 진단합니다.",
    image: ServiceImage4,
  },
  {
    title: "웹 어플리케이션 해킹",
    description:
      "최신 웹 공격 기법을 반영한 실전 모의해킹으로 보안 취약점을 진단합니다.",
    image: ServiceImage5,
  },
  {
    title: "웹 어플리케이션 해킹",
    description:
      "최신 웹 공격 기법을 반영한 실전 모의해킹으로 보안 취약점을 진단합니다.",
    image: ServiceImage6,
  },
];

const ServiceCardList = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % 6);
  };
  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 3000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const dx = touchStartX.current - touchEndX.current;
    if (dx > 50) nextSlide(); // swipe left
    else if (dx < -50) prevSlide(); // swipe right
  };

  return (
    <div className="flex flex-col items-center w-full gap-[7px] tablet:hidden">
      <div className="relative overflow-hidden w-[350px] flex items-center justify-center">
        <div
          className="flex transition-transform duration-500 ease-in-out w-[320px]"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}>
          {services.map((service, i) => (
            <div key={i} className="w-full flex-shrink-0 px-4">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-[3px]">
        {services.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`p-[3px] transition-all cursor-pointer flex items-center justify-center`}>
            <span
              className={`w-[6px] h-[6px] rounded-full ${
                i === index ? "bg-neutral-700" : "bg-neutral-300"
              }`}></span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ServiceCardList;
