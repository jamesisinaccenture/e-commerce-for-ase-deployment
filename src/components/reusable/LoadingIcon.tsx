
interface Props {
  className?: string;
}
const LoadingIcon = ({ className }: Props) => {
  return (
    <div
      className={`${className} w-4 h-4 border-2 animate-spin rounded-full border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
    ></div>
  );
};

export default LoadingIcon;
