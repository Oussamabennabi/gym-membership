"use client";
import React from "react";
import Sidebar2 from "./sidebar";
import { useIsCollapsed } from "~/hooks/use-is-collapsed";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isCollapsed, setIsCollapsed] = useIsCollapsed();
  return (
    <div className="relative h-full overflow-hidden bg-background">
      <Sidebar2 isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main
        id="content"
        className={`overflow-x-hidden pt-16 transition-[margin] md:overflow-y-hidden md:pt-0 
                
                ${isCollapsed ? "md:ml-14" : "md:ml-64"}
                 h-full`}
      >
        {children}
      </main>
    </div>
  );
};

export default LayoutWrapper;
