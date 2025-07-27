import React, { type ReactNode } from "react";

interface ContentWrapperProps {
  children: ReactNode;
  className?: string;
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => {
  return (
    <div className="w-[calc(100vw-(100vw-100%))] relative bg-white min-h-screen bg-cover bg-center">
      <div
        className={
          "w-full h-full bg-[url('/images/bg.png')] bg-cover bg-center opacity-40 absolute inset-0"
        }></div>
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
};

export default ContentWrapper;
