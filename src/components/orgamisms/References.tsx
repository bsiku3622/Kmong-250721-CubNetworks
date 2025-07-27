import React, { useState } from "react";
import SectionTitle from "../atoms/SectionTitle";
import SectionFrame2 from "../atoms/SectionFrame2";
import ReferenceCard from "../atoms/ReferenceCard";

const References: React.FC = () => {
  const [testRefData, setTestRefData] = useState([
    { year: "2023", references: ["Reference 1", "Reference 2"] },
    { year: "2024", references: ["Reference 3", "Reference 4"] },
    { year: "2025", references: ["Reference 5", "Reference 6"] },
  ]);
  return (
    <SectionFrame2>
      <SectionTitle>References</SectionTitle>

      <ReferenceCard data={testRefData} />
    </SectionFrame2>
  );
};

export default References;
