import React from "react";

interface FallbackProps {
  blocktype: string;
}

const Fallback: React.FC<FallbackProps> = ({ blocktype }) => {
  console.warn(`No component found for: ${blocktype}`);
  return null;
};

export default Fallback;
