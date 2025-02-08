import React from "react";

const BuggyComponent: React.FC = () => {
  throw new Error("Oops! This is a test error.");
  return <div>This will never render.</div>;
};

export default BuggyComponent;
