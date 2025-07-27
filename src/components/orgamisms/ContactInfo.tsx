import React from "react";
import SectionTitle from "../atoms/SectionTitle";
import SectionFrame2 from "../atoms/SectionFrame2";
import ContactInfoNotice from "../atoms/ContactInfoNotice";
import ContactInfoBtn from "../atoms/ContactInfoBtn";

const ContactInfo: React.FC = () => {
  return (
    <SectionFrame2>
      <SectionTitle>Contact Information</SectionTitle>
      <ContactInfoNotice />
      <ContactInfoBtn className="tablet:hidden flex" ddd="1:1 문의하기" />
    </SectionFrame2>
  );
};

export default ContactInfo;
