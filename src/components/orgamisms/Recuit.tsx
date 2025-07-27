import React from "react";
import SectionTitle from "../atoms/SectionTitle";
import SectionFrame2 from "../atoms/SectionFrame2";
import RecuitProgress from "../atoms/RecuitProgress";
import RecuitNotice from "../atoms/RecuitNotice";
import RecuitBtn from "../atoms/RecuitButton";

const Recuit: React.FC = () => {
  return (
    <SectionFrame2>
      <SectionTitle>Recuit</SectionTitle>
      <RecuitProgress />
      <RecuitNotice />
      <RecuitBtn />
    </SectionFrame2>
  );
};

export default Recuit;
