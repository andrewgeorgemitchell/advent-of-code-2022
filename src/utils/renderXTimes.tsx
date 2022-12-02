import React from "react";

export const renderXTimes = (times: number, comp: React.ReactNode) => {
  return Array.from({ length: times }, () => comp);
};
