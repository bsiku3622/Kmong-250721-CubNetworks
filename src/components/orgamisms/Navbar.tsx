import React from "react";
import clsx from "clsx";
import Logo from "../../assets/images/Logo1.png";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav
      className={clsx(
        "flex items-center w-full justify-between",
        "desktop:px-[80px]",
        "laptop:py-[40px] laptop:flex-row",
        "tablet:gap-[20px]",
        "px-[48px] py-[24px] flex-col gap-[15px]"
      )}>
      <img src={Logo} className="desktop:h-[36px] h-[30px] w-fit"></img>
      <div
        className={clsx(
          "flex text-neutral-500 ",
          "desktop:gap-[56px] desktop:text-[20px] desktop:leading-[28px] desktop:font-normal desktop:tracking-[-1px]",
          "laptop:text-[16px] laptop:leading-[20px] laptop:font-normal laptop:tracking-[-0.8px]",
          "tablet:gap-[30px] tablet:flex-row",
          "gap-[10px] flex-col tracking-[-0.7px]"
        )}>
        <div className={clsx("flex", "desktop:gap-[56px]", "gap-[30px]")}>
          <Link to="#">About</Link>
          <Link to="#">Services</Link>
          <Link to="#">References</Link>
          <Link to="#">Partners</Link>
        </div>
        <div className={clsx("flex", "desktop:gap-[56px]", "gap-[30px]")}>
          <Link to="#">Recuit</Link>
          <Link to="#">Contact Information</Link>
          <Link to="#" className="font-bold text-neutral-800">
            1:1 문의하기
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
