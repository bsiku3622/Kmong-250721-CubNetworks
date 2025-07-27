import React, { useState } from "react";
import SectionTitle from "../atoms/SectionTitle";
import SectionFrame2 from "../atoms/SectionFrame2";
import PartnersCard from "../atoms/PartnersCard";

const Partners: React.FC = () => {
  const [partnerNames, setPartnerNames] = useState<Array<string>>([
    "Partner A",
    "Partner B",
  ]);
  return (
    <SectionFrame2>
      <SectionTitle>Partners</SectionTitle>
      <PartnersCard partnerNames={partnerNames} />
    </SectionFrame2>
  );
};

export default Partners;
