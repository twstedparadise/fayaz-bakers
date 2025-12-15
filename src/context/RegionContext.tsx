import React, { createContext, useContext, useState, ReactNode } from "react";
import { regions, Region, getBranchByRegion, Branch } from "@/data/branches";

interface RegionContextType {
  selectedRegion: Region;
  setSelectedRegion: (region: Region) => void;
  currentBranch: Branch | undefined;
  allRegions: Region[];
}

const RegionContext = createContext<RegionContextType | undefined>(undefined);

export const RegionProvider = ({ children }: { children: ReactNode }) => {
  const [selectedRegion, setSelectedRegion] = useState<Region>(regions[0]);

  const currentBranch = getBranchByRegion(selectedRegion.id);

  return (
    <RegionContext.Provider
      value={{
        selectedRegion,
        setSelectedRegion,
        currentBranch,
        allRegions: regions,
      }}
    >
      {children}
    </RegionContext.Provider>
  );
};

export const useRegion = () => {
  const context = useContext(RegionContext);
  if (context === undefined) {
    throw new Error("useRegion must be used within a RegionProvider");
  }
  return context;
};
