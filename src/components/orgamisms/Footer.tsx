import React from "react";
import Logo from "../../assets/images/Logo1.png";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-[32px] gap-[15px] flex flex-col items-center justify-center text-center tablet:gap-[15px] tablet:flex-row desktop:py-[40px] text-neutral-500">
      <img src={Logo} alt="CuB Networks" className="h-[32px] w-fit" />
      <p>&copy; 2025 CuB Networks. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
