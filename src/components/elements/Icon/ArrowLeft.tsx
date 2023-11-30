interface ArrowLeftProps {
  color?: string;
  className?: string;
}
const ArrowLeft = ({ color, className }: ArrowLeftProps) => {
  return (
    <svg
      className={className}
      width="13"
      height="24"
      viewBox="0 0 13 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.3525 1.00002L1.24896 11.1036C1.17038 11.1773 1.10775 11.2664 1.06494 11.3653C1.02213 11.4642 1.00003 11.5708 1.00003 11.6786C1.00003 11.7864 1.02213 11.893 1.06494 11.9919C1.10775 12.0908 1.17038 12.1798 1.24896 12.2536L11.3525 22.3572"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ArrowLeft;
