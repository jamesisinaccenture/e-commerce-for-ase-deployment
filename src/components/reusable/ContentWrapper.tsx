/* eslint-disable @typescript-eslint/no-explicit-any */

const ContentWrapper = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[80rem] w-full px-10 overflow-auto">
        <div className={`${className}`}>{children}</div>
      </div>
    </div>
  );
};

export default ContentWrapper;
