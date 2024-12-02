import React from "react";

import LoadingIcon from "./LoadingIcon";

interface LoaderProps {
  size?: "small" | "medium" | "large";
}

const Loader: React.FC<LoaderProps> = ({ size = "medium" }) => {
  let loaderSize;

  switch (size) {
    case "small":
      loaderSize = "!w-4 !h-4 !border-2";
      break;
    case "medium":
      loaderSize = "!w-6 !h-6 !border-4";
      break;
    case "large":
      loaderSize = "!w-10 !h-10 !border-4";
      break;
    default:
      loaderSize = "!w-6 !h-6 !border-4";
  }

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <LoadingIcon className={`${loaderSize}`} />
    </div>
  );
};

export default Loader;
