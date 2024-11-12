/* eslint-disable @typescript-eslint/no-explicit-any */

const ContentWrapper = ({ children }: { children: any }) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[80rem] w-full px-10">{children}</div>
    </div>
  );
};

export default ContentWrapper;
