"use client"
import { useState } from "react";
import { cn } from "@/lib/utils";

const NavigationTabs = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  
  const tabs = [
    "Overview",
    "Photos", 
    "Rooms",
    "Amenities",
    "About",
    "Map"
  ];

  return (
    <div className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex space-x-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors",
                activeTab === tab
                  ? "border-ocean text-ocean"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-neutral-300"
              )}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default NavigationTabs;