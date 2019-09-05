import { useState } from "react";

export const content = [
  { tab: "Section 1", content: "I'm the content fof the Section 1" },
  { tab: "Section 2", content: "I'm the content fof the Section 2" }
];

const useTabs = (initialTab: any, allTabs: any) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

export default useTabs;
